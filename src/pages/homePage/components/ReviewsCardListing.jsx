import React from 'react';
import ReviewesCard from './ReviewesCard';

function ReviewsCardListing() {
	return (
		<div className='reviews__cards__list'>
			<div className='reviews__cards__list__left'>
				<ReviewesCard
					className={'reviews__cards__list--item-card reviews__cards__list--item-card__card-1'}
					cardDescription1={
						'"His quality of work is excellent! I prefer Mehedi in every important work of design. He is working fast,clean and present great usability results."'
					}
					title={'Harald Pfeifer'}
				/>
				<ReviewesCard
					className={'reviews__cards__list--item-card reviews__cards__list--item-card__card-2'}
					cardDescription1={
						"I couldn't ask for a better Designer. Communication was 200% and this went above my expectations."
					}
					cardDescription2={
						'He threw in some additional perks for me. I will definitely be working with him for future projects. Happy and very satisfied customer.'
					}
					title={'Valenthino'}
				/>
			</div>
			<div className='reviews__cards__list__right'>
				<ReviewesCard
					className={'reviews__cards__list--item-card reviews__cards__list--item-card__card-3'}
					cardDescription1={
						'Mehedi has worked with us on many projects and has always come through. Mehedi is professional with an eye for detail and makes his deadlines.'
					}
					cardDescription2={
						'His work is always outstanding and uses a lot of his own creativity and understands us and our projects with simple direction.'
					}
					cardDescription3={'He is easy to work with an responds quickly to any request we have ever had.'}
					title={'Geoff Crutcher'}
				/>
			</div>
		</div>
	);
}

export default ReviewsCardListing;
