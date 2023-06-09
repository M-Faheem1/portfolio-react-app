import React from 'react';

function CustomButton({buttonText,buttonSvg}) {
	return (
		<div class='my-work__more-detail--button button'>
			<a href='#'>
				<span>{buttonText}</span>
				{buttonSvg}
			</a>
		</div>
	);
}

export default CustomButton;
