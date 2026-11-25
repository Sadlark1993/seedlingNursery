const MAX_DIMENSION = 1600;
const JPEG_QUALITY = 0.8;
const ACCEPTED_TYPES = ['image/jpeg', 'image/jpg', 'image/png'];

// must match spring.servlet.multipart.max-file-size in the backend
export const MAX_UPLOAD_BYTES = 5 * 1024 * 1024;
export const MAX_UPLOAD_MESSAGE = 'A imagem deve ter no máximo 5 MB.';

const resize = async (file) => {
  const bitmap = await createImageBitmap(file, { imageOrientation: 'from-image' });
  const scale = Math.min(1, MAX_DIMENSION / Math.max(bitmap.width, bitmap.height));
  const canvas = document.createElement('canvas');
  canvas.width = Math.round(bitmap.width * scale);
  canvas.height = Math.round(bitmap.height * scale);

  const ctx = canvas.getContext('2d');
  // JPEG has no transparency: paint PNG transparent areas white instead of black
  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  bitmap.close();

  const blob = await new Promise((resolve) => canvas.toBlob(resolve, 'image/jpeg', JPEG_QUALITY));
  if (!blob || blob.size >= file.size) return file;
  return new File([blob], file.name.replace(/\.\w+$/, '') + '.jpg', { type: 'image/jpeg' });
};

// returns { file } ready to upload, or { error } with a message for the user
export const prepareImage = async (file) => {
  if (!ACCEPTED_TYPES.includes(file.type)) {
    return { error: 'A imagem deve ser JPEG ou PNG.' };
  }

  let prepared = file;
  try {
    prepared = await resize(file);
  } catch (e) {
    console.log(e);
  }

  if (prepared.size > MAX_UPLOAD_BYTES) {
    return { error: MAX_UPLOAD_MESSAGE };
  }
  return { file: prepared };
};
