import PropTypes from 'prop-types';
import { useState, useRef } from 'react';

import * as Styled from './styles';

export const ImgLoader = ({ srcImg, altImg = '' }) => {
  const [img, setImg] = useState(srcImg);
  const inputImg = useRef();

  const handleChange = () => {
    const image = inputImg.current.files[0];
    console.log('image: ', image);

    setImg(URL.createObjectURL(image));
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
  altImg: PropTypes.string
};
