import PropTypes from 'prop-types';
import { useState, useRef, useEffect } from 'react';

import * as Styled from './styles';
import { getPlantImage } from '../../api/plantsApi';
import defaultImg from './defaultImg';

export const ImgLoader = ({ idImg, altImg = '', forwardedRef = useRef() }) => {
  const [img, setImg] = useState(null);
  const inputImg = useRef();

  useEffect(() => {
    if (idImg) {
      (async () => {
        const imgObj = await getPlantImage(idImg);
        setImg(imgObj.image);
      })();
    } else {
      setImg(defaultImg.base64.split('base64,'));
    }
  }, []);

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
    const imgArray = await image.split('base64,');
    forwardedRef.current = await imgArray[1];
    setImg(await imgArray[1]);
  };

  return (
    <Styled.compStyle>
      {img ? (
        <Styled.imgDisp src={'data:image/png;base64,' + img} alt={altImg} />
      ) : (
        <h2>Loading...</h2>
      )}
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
