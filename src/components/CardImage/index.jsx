import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import { getSpecieImage } from '../../api/speciesApi';

export const CardImage = ({ id, alt }) => {
  const [image, setImage] = useState('');

  useEffect(() => {
    (async () => {
      const byte = await getSpecieImage(id);
      setImage('data:image/jpeg;base64,' + byte.image);
    })();
  }, [id]);

  return <img src={image} alt={alt} />;
};

CardImage.propTypes = {
  id: PropTypes.number,
  alt: PropTypes.string
};
