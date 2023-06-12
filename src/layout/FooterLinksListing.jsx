import React from 'react';
import SvgFigmaSvg from '@/assets/svgs/components/figma-svg';
import FooterLinksListItem from './FooterLinksListItem';
import SvgLinkedinSvg from '@/assets/svgs/components/linkedin-svg';
import SvgTwitterSvg from '@/assets/svgs/components/twitter-svg';
import SvgYoutubeSvg from '@/assets/svgs/components/youtube-svg';
import SvgBehanceSvg from '@/assets/svgs/components/behance-svg';
import SvgMediumSvg from '@/assets/svgs/components/medium-svg';
import SvgDribbbleSvg from '@/assets/svgs/components/dribbble-svg';

function FooterLinksListing() {
	return (
		<ul class='footer__social-media-icon__listing'>
			<FooterLinksListItem svg={<SvgLinkedinSvg />} />
			<FooterLinksListItem svg={<SvgTwitterSvg />} />
			<FooterLinksListItem svg={<SvgDribbbleSvg />} />
			<FooterLinksListItem svg={<SvgMediumSvg />} />
			<FooterLinksListItem svg={<SvgBehanceSvg />} />
			<FooterLinksListItem svg={<SvgYoutubeSvg />} />
			<FooterLinksListItem svg={<SvgFigmaSvg />} />
		</ul>
	);
}

export default FooterLinksListing;
