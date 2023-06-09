import SvgVideoIconSvg from '@/assets/svgs/components/video-icon-svg';
import React from 'react';

function UserExperience() {
	return (
		<div className='container user-experience'>
			<div className='user-experience__heading'>
				<h1>Crafting Memorable User Experiences for Business Success</h1>
			</div>
			<div className='user-experience__sub-heading'>
				<p>
					I blend exquisite design with impeccable functionality for an exceptional user experience, while keeping users
					captivated.
				</p>
			</div>
			<div className='user-experience__svg-wrapper__parent'>
				<div className='user-experience__svg-wrapper__parent__background'></div>
				<div className='user-experience__svg-wrapper'>
					<SvgVideoIconSvg />
				</div>
			</div>
		</div>
	);
}

export default UserExperience;
