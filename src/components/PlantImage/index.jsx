import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import { getPlantImage } from '../../api/plantsApi';

const noPhoto = '/img/mock/noPhoto.png';

export const PlantImage = ({ id, alt }) => {
  const [image, setImage] = useState('');

  useEffect(() => {
    (async () => {
      const imgObj = await getPlantImage(id);
      setImage(imgObj.url || noPhoto);
    })();
  }, [id]);

  return <img src={image} alt={alt} />;
};

PlantImage.propTypes = {
  id: PropTypes.number,
  alt: PropTypes.string
};
