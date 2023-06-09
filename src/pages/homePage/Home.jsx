import React from 'react';
import Header from '@/layout/Header';
import UserExperience from './Sections/UserExperience';
import MyWork from './Sections/MyWork';
import KindWords from './Sections/KindWords';
import Blogs from './Sections/Blogs';
import MyStory from './Sections/MyStory';
import Footer from '@/layout/Footer';

function Home() {
	return (
		<>
			<Header />
			<UserExperience />
			<MyWork />
			<KindWords />
			{/* <Blogs /> */}
			<MyStory />
			<Footer />
		</>
	);
}

export default Home;
