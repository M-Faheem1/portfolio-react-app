import React from 'react';

function ReviewesCard({ className, cardDescription1, cardDescription2, cardDescription3, title }) {
	return (
		<div className={className}>
			<div className='reviews__cards__list--description'>
				<div className='reviews__cards__list--description--detail'>
					{cardDescription1 && <p>{cardDescription1}</p>}
					{cardDescription2 && <p>{cardDescription2}</p>}
					{cardDescription3 && <p>{cardDescription3}</p>}
				</div>
				<div className='reviews__cards__list--person-name'>
					<span>{title}</span>
				</div>
			</div>
		</div>
	);
}

export default ReviewesCard;
