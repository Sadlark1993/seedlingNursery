import PropTypes from 'prop-types';
import { useState, useRef } from 'react';

import * as Styled from './styles';

export const ImgLoader = ({ srcImg, altImg = '', forwardedRef = useRef() }) => {
  const [img, setImg] = useState(srcImg);
  const inputImg = useRef();

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleChange = async () => {
    const image = await convertBase64(inputImg.current.files[0]);
    console.log('image: ', await image);
    forwardedRef.current = await image;
    setImg(await image);
  };

  return (
    <Styled.compStyle>
      <Styled.imgDisp src={img} alt={altImg} />
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
  srcImg: PropTypes.string.isRequired,
  altImg: PropTypes.string,
  forwardedRef: PropTypes.object
};
