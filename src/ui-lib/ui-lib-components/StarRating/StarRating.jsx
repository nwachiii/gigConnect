import React, {useState} from 'react';
import ReactStars from 'react-rating-stars-component';

import {Box} from '@chakra-ui/react';

export const StarRating = ({ratingNumber, isFeedback}) => {
  const [stars, setStars] = useState(ratingNumber);
  var data = {
		size: 20,
		value: stars,
		activeColor: '#053AF9',
		onChange: (newValue) => {
			isFeedback ? setStars(ratingNumber) : setStars(newValue);
		},
	};
  return (
    <Box>
      <ReactStars {...data} />
    </Box>
  );
};
