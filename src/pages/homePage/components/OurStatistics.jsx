import React from 'react';
import OurStatsItem from './OurStatsItem';

function OurStatistics({ className, title, description }) {
	return (
		<div className={'reviews__our-statistics'}>
			<OurStatsItem
				className={'reviews__our-statistics__our-experience'}
				title={'5'}
				description={'Years Of Experience'}
			/>
			<OurStatsItem
				className={'reviews__our-statistics__our-projects'}
				title={'300+'}
				description={'Freelance Projects'}
			/>
			<OurStatsItem
				className={'reviews__our-statistics__customer-saisfaction'}
				title={'100%'}
				description={'Customer Satisfaction'}
			/>
		</div>
	);
}

export default OurStatistics;
