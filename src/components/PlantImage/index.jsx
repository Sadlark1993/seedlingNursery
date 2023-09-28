import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import { getPlantImage } from '../../api/plantsApi';

export const PlantImage = ({ id, alt }) => {
  const [image, setImage] = useState('');

  useEffect(() => {
    (async () => {
      const byte = await getPlantImage(id);
      setImage('data:image/jpeg;base64,' + byte.image);
    })();
  }, [id]);

  return <img src={image} alt={alt} />;
};

PlantImage.propTypes = {
  id: PropTypes.number,
  alt: PropTypes.string
};
