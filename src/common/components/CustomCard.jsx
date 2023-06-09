import SvgCardsSvg from '@/assets/svgs/components/cards-svg';
import React from 'react';

function CustomCard({ cardDescription, imageSource, alt }) {
	return (
		<div class='my-work__card'>
			<div class='my-work__card--image'>
				<img src={imageSource} alt={alt} />
			</div>
			<div class='my-work__card--description'>
				<p>{cardDescription}</p>
				<a href='#'>
					<SvgCardsSvg />
				</a>
			</div>
		</div>
	);
}

export default CustomCard;
