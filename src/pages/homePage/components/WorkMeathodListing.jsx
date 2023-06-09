import React from 'react';
import WorkMethodListItem from './WorkMeathodListItem';
import SvgVisualDesignSvg from '@/assets/svgs/components/visual-design-svg';
import SvgCaseStudySvg from '@/assets/svgs/components/case-study-svg';
import SvgProjectsSvg from '@/assets/svgs/components/projects-svg';

function WorkMethodListing() {
	return (
		<ul className='my-work__methods__list'>
			<WorkMethodListItem svg={<SvgVisualDesignSvg />} meathodName={'Visual Design'} />
      <WorkMethodListItem svg={<SvgCaseStudySvg />} meathodName={'Case Study'} />
			<WorkMethodListItem svg={<SvgProjectsSvg />} meathodName={'Projects'} />
		</ul>
	);
}

export default WorkMethodListing;
