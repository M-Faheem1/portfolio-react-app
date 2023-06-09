import SvgCardsSvg from '@/assets/svgs/components/cards-svg'
import React from 'react'

function Blogs() {
  return (
    <div className="container blogs">
			<div className="blogs__swiper">
				<div className="blogs__swiper__heading-subheading">
					<h3>Blog & Resources</h3>
					<p>I love to write whenever i can. Here is some of my blog and resources for the designers and developers.</p>
				</div>
				<div className="swiper mySwiper blogs__mySwiper">
					<div className="swiper-wrapper blogs__swiper-wrapper">
						<div className="swiper-slide blogs__swiper-slid-1">
							<div className="blogs__card">
								<div className="blogs__card--image">
									<img src="./assets/images/blog-1.png" alt="image-1" />
								</div>
								<div className="blogs__card--description">
									<p>How to plan and manage project like pro?</p>
									<a href="#">
										<SvgCardsSvg />
									</a>
								</div>
							</div>
						</div>
						<div className="swiper-slide blogs__swiper-slide-2">
							<div className="blogs__card">
								<div className="blogs__card--image">
									<img src="./assets/images/blog-2.png" alt="image-1" />
								</div>
								<div className="blogs__card--description">
									<p>How to make 3d illustration for your next projects</p>
									<a href="#">
										<SvgCardsSvg />
									</a>
								</div>
							</div>
						</div>
						<div className="swiper-slide blogs__swiper-slide-3">
							<div className="blogs__card">
								<div className="blogs__card--image">
									<img src="./assets/images/blog-3.png" alt="image-1" />
								</div>
								<div className="blogs__card--description">
									<p>Best keyboard for Designers and Developer</p>
									<a href="#">
										<SvgCardsSvg />
									</a>
								</div>
							</div>
						</div>
						<div className="swiper-slide blogs__swiper-slid-1">
							<div className="blogs__card">
								<div className="blogs__card--image">
									<img src="./assets/images/blog-1.png" alt="image-1" />
								</div>
								<div className="blogs__card--description">
									<p>How to plan and manage project like pro?</p>
									<a href="#">
										<SvgCardsSvg />
									</a>
								</div>
							</div>
						</div>
						<div className="swiper-slide blogs__swiper-slide-2">
							<div className="blogs__card">
								<div className="blogs__card--image">
									<img src="./assets/images/blog-2.png" alt="image-1" />
								</div>
								<div className="blogs__card--description">
									<p>How to make 3d illustration for your next projects</p>
									<a href="#">
										<SvgCardsSvg />
									</a>
								</div>
							</div>
						</div>
						<div className="swiper-slide blogs__swiper-slide-3">
							<div className="blogs__card">
								<div className="blogs__card--image">
									<img src="./assets/images/blog-3.png" alt="image-1" />
								</div>
								<div className="blogs__card--description">
									<p>Best keyboard for Designers and Developer</p>
									<a href="#">
										<SvgCardsSvg />
									</a>
								</div>
							</div>
						</div>
						<div className="swiper-slide blogs__swiper-slid-1">
							<div className="blogs__card">
								<div className="blogs__card--image">
									<img src="./assets/images/blog-1.png" alt="image-1" />
								</div>
								<div className="blogs__card--description">
									<p>How to plan and manage project like pro?</p>
									<a href="#">
										<SvgCardsSvg />
									</a>
								</div>
							</div>
						</div>
						<div className="swiper-slide blogs__swiper-slide-2">
							<div className="blogs__card">
								<div className="blogs__card--image">
									<img src="./assets/images/blog-2.png" alt="image-1" />
								</div>
								<div className="blogs__card--description">
									<p>How to make 3d illustration for your next projects</p>
									<a href="#">
										<SvgCardsSvg />
									</a>
								</div>
							</div>
						</div>
						<div className="swiper-slide blogs__swiper-slide-3">
							<div className="blogs__card">
								<div className="blogs__card--image">
									<img src="./assets/images/blog-3.png" alt="image-1" />
								</div>
								<div className="blogs__card--description">
									<p>Best keyboard for Designers and Developer</p>
									<a href="#">
										<SvgCardsSvg />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="swiper-buttons">
					<div className="swiper-button-next"></div>
					<div className="swiper-button-prev"></div>
				</div>
			</div>
			<div className="blogs__more-detail--button button">
				<a href="#">
					<span>More This Way</span>
					<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M12.172 6.99998L6.808 1.63598L8.222 0.221985L16 7.99998L8.222 15.778L6.808 14.364L12.172 8.99998H0V6.99998H12.172Z"
							fill="#F9FAFB"
						/>
					</svg>
				</a>
			</div>
		</div>
  )
}

export default Blogs