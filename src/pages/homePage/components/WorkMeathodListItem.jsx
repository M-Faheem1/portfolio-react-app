import React from 'react';

function WorkMethodListItem({ svg, meathodName }) {
	return (
		<>
			<li className='my-work__methods__list-item'>
				<a href='#'>
					{svg}
					<span>{meathodName}</span>
				</a>
			</li>
		</>
	);
}

export default WorkMethodListItem;
