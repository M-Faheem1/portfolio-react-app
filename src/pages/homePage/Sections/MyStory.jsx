import SvgLetsTalkSvg from '@/assets/svgs/components/lets-talk-svg';
import SvgThisWaySvg from '@/assets/svgs/components/this-way-svg';
import CustomButton from '@/common/components/CustomButton';
import React from 'react';

function MyStory() {
	return (
		<div class='container my-story'>
			<div class='my-story__profile-description'>
				<div class='my-story__profile-description__detail__heading'>
					<h3>My Long Story Short</h3>
				</div>
				<div class='my-story__profile-description__image-wrapper'>
					<img src='/src/assets/images/profile-image.png' alt='' />
				</div>
				<div class='my-story__profile-description__heading-subheading'>
					<h4>Mehedi Hasan</h4>
					<p class='sub-heading'>UX UI Designer, Mentor and Content Creator at Youtube @Mehedihas</p>
				</div>
				<div class='my-story__profile-description--button button'>
					<CustomButton buttonText={'Let’s Talk'} buttonSvg={<SvgLetsTalkSvg />} />
				</div>
			</div>
			<div class='my-story__detail'>
				<div class='my-story__detail__heading'>
					<h3>My Long Story Short</h3>
				</div>
				<div class='my-story__detail__description'>
					<p>
						<span>Growing up in a small village without access to the internet </span>
						or the latest technology sparked my curiosity for computers. I began learning Photoshop in a photo studio
						where I paid for.
					</p>
					<p>
						My love for gaming led me to play FPS video games like PUBG and Valorant, which taught me valuable skills in
						making critical decisions under pressure. When I'm not gaming, I enjoy unwinding with Netflix.
					</p>
					<p>
						As a former cricket team captain, I gained valuable teamwork and empathy skills that have helped me
						contribute positively to any situation.
					</p>
					<p>
						Now, I'm passionate about helping others, and I'm working to build a Designer Community to assist new
						designers in their journey to success.
					</p>
				</div>
				<div class='my-story__profile-description--button button'>
					<CustomButton buttonText={'Let’s Talk'} buttonSvg={<SvgLetsTalkSvg />} />
				</div>
			</div>
		</div>
	);
}

export default MyStory;
