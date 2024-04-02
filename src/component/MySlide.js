// import React, { useRef, useState } from 'react';
import { useContext, useEffect } from 'react';
import { myContext } from '../Context';
import { Link } from 'react-router-dom';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../App.scss';

// import required modules
import { Pagination } from 'swiper/modules';

function MySlide() {
	let { data, fetchFn } = useContext(myContext);

	// const reset = () => {
	// 	// setProgram("movie");
	// 	// setCat("popular");
	// 	// fetchFn("get");
	// 	fetchFn("get", "movie","popular", "");
	// };
	// reset();
	// useEffect로 데이터 리셋 시키고 시작 
	useEffect(()=>{
		const reset = async () => {
			await fetchFn("get", "movie", "popular", "");
			// console.log(data)
		};
		reset();
		// reset();
	},[data])

	return (
		<>
			<Swiper
        grabCursor={true}
        pagination={{
					type: 'progressbar',
				}}
				modules={[Pagination]}
				className="mySwiper"
			>
				{
					data.map(item => (
						<SwiperSlide key={item.id} >
							<div className='desc_wrap'>
								<span className='slideTit'>{item.title}</span>
								<span className='slideDesc'>{item.overview}</span>
								<Link to={`/movie/${item.id}`} className='more'>VIEW MORE</Link>
							</div>
							<img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}/>
							<div className='bg' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${item.backdrop_path})`}}></div>
						</SwiperSlide>
					))
				}
			</Swiper>
		</>
	)
}

export default MySlide