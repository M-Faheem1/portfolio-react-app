import React from 'react';

function OurStatsItem({ className, title, description }) {
	return (
		<div className={className}>
			<span>{title}</span>
			<p>{description}</p>
		</div>
	);
}

export default OurStatsItem;
