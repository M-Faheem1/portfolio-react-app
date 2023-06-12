import SvgHeaderLogoSvg from '@/assets/svgs/components/header-logo-svg';
import React from 'react';
import SvgLetsChatSvg from '@/assets/svgs/components/lets-chat-svg';
import NavLinks from './HeaderNavLinks';

function Header() {
	return (
		<div class='container'>
			<div class='navbar'>
				<div class='navbar__logo'>
					<a href='#' class='navbar__logo-wrapper'>
						<SvgHeaderLogoSvg />
					</a>
				</div>
				<NavLinks />
				<div class='navbar__button'>
					<div class='svg-wrapper'>
						<SvgLetsChatSvg />
					</div>
					<div class='btn-text'>
						<span>Let’s Talk</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
