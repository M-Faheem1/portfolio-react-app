import React from 'react';
import ReviewsCardListing from '../components/ReviewsCardListing';
import OurStatistics from '../components/OurStatistics';

function KindWords() {
	return (
		<div className='container reviews'>
			<div className='reviews__heading'>
				<h3>Kind Words</h3>
				<p>See what my clients have to say about working with me</p>
			</div>
			<ReviewsCardListing />
			<OurStatistics />
		</div>
	);
}

export default KindWords;
