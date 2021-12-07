import React from 'react';

import starFilledIcon from '../../../../assets/star-filled.svg'
import starBorder from '../../../../assets/star-border.svg'

export default function StarFeedback({ value, state, setState }) {
  const setStarIcon = (state, value) => {
    if(state >= value) {
      return starFilledIcon
    } else {
      return starBorder
    }
  }

	return (
		<img
      onClick={() => setState(value)}
      src={setStarIcon(state, value)}
      alt={`icone de estrela para feedback. Vale ${value} ponto${value > 1 ? 's' : ''}.`}
    />
	);
}
