import PropTypes from 'prop-types';
import { useState, useRef, useEffect } from 'react';

import * as Styled from './styles';
import { getPlantImage } from '../../api/plantsApi';
import { prepareImage } from '../../utils/prepareImage';

const noPhoto = '/img/mock/noPhoto.png';

// forwardedRef receives the selected File, or null when the image wasn't changed
export const ImgLoader = ({ idImg, altImg = '', forwardedRef = useRef() }) => {
  const [img, setImg] = useState(null);
  const inputImg = useRef();

  useEffect(() => {
    forwardedRef.current = null;
    if (idImg) {
      (async () => {
        const imgObj = await getPlantImage(idImg);
        setImg(imgObj.url || noPhoto);
      })();
    } else {
      setImg(noPhoto);
    }
  }, []);

  useEffect(() => {
    return () => {
      if (img && img.startsWith('blob:')) URL.revokeObjectURL(img);
    };
  }, [img]);

  const handleChange = async () => {
    const file = inputImg.current.files[0];
    if (!file) return;
    const { file: prepared, error } = await prepareImage(file);
    if (error) {
      alert(error);
      inputImg.current.value = '';
      return;
    }
    forwardedRef.current = prepared;
    setImg(URL.createObjectURL(prepared));
  };

  return (
    <Styled.compStyle>
      {img ? <Styled.imgDisp src={img} alt={altImg} /> : <h2>Loading...</h2>}
      <Styled.imgInput
        ref={inputImg}
        onChange={handleChange}
        type="file"
        accept="image/jpeg, image/png, image/jpg"
      />
    </Styled.compStyle>
  );
};
ImgLoader.propTypes = {
  idImg: PropTypes.number,
  altImg: PropTypes.string,
  forwardedRef: PropTypes.object
};
