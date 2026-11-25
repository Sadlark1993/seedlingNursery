import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import { getSpecieImage } from '../../api/speciesApi';

const noPhoto = '/img/mock/noPhoto.png';

export const CardImage = ({ id, alt }) => {
  const [image, setImage] = useState('');

  useEffect(() => {
    (async () => {
      const imgObj = await getSpecieImage(id);
      setImage(imgObj.url || noPhoto);
    })();
  }, [id]);

  return <img src={image} alt={alt} />;
};

CardImage.propTypes = {
  id: PropTypes.number,
  alt: PropTypes.string
};
