import React from 'react';
import WorkMethodListing from '../components/WorkMeathodListing';
import WorkCardListing from '../components/WorkCardListing';
import CustomButton from '@/common/components/CustomButton';
import SvgThisWaySvg from '@/assets/svgs/components/this-way-svg';
import WorkMethodListItem from '../components/WorkMeathodListItem';
import SvgVisualDesignSvg from '@/assets/svgs/components/visual-design-svg';
import SvgCaseStudySvg from '@/assets/svgs/components/case-study-svg';
import SvgProjectsSvg from '@/assets/svgs/components/projects-svg';

function MyWork() {
	return (
		<div className='container my-work'>
			<div className='my-work__description'>
				<div className='my-work__heading'>
					<h3>My Work</h3>
					<p>
						Here are some of my design works that showcase my design skills and expertise. Click on each project to see
					</p>
				</div>
				<div className='my-work__methods'>
					<ul className='my-work__methods__list'>
						<WorkMethodListItem svg={<SvgVisualDesignSvg />} meathodName={'Visual Design'} />
						<WorkMethodListItem svg={<SvgCaseStudySvg />} meathodName={'Case Study'} />
						<WorkMethodListItem svg={<SvgProjectsSvg />} meathodName={'Projects'} />
					</ul>
				</div>
			</div>
			<div className='my-work__detail'>
				<WorkCardListing />
				<CustomButton buttonText={'More This Way'} buttonSvg={<SvgThisWaySvg />} />
			</div>
		</div>
	);
}

export default MyWork;
