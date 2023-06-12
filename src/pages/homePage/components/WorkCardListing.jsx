import CustomCard from '@/common/components/CustomCard';
import React from 'react';

function WorkCardListing() {
	return (
		<div className='my-work__cards__list'>
			<CustomCard
				cardDescription={'Personal Portfolio Website Hero Design Concept'}
				imageSource={'/src/assets/images/card1.png'}
				alt={'image-1'}
			/>
			<CustomCard
				cardDescription={'Personal Portfolio Website Hero Design Concept'}
				imageSource={'/src/assets/images/card2.png'}
				alt={'image-2'}
			/>

			<CustomCard
				cardDescription={'Personal Portfolio Website Hero Design Concept'}
				imageSource={'/src/assets/images/card3.png'}
				alt={'image-3'}
			/>
		</div>
	);
}

export default WorkCardListing;
