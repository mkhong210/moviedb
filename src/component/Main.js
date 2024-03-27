import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import MySlide from './MySlide';
import { Link } from 'react-router-dom';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../App.scss';
import { myContext } from '../Context';

function Main() {
	// const { data, fetchFn } = useContext(myContext);
	// const elInput = useRef();
	// const params = useParams();
	// console.log(params);

	let { data, fetchFn, setProgram, setCat} = useContext(myContext);

	const reset = () => {
		setProgram("movie");
		setCat("popular");
		fetchFn("get");
	};
	// reset();
	// useEffect로 데이터 리셋 시키고 시작 
	useEffect(()=>{
		// reset();
	},[])

	let moviedb = axios.create({
		baseURL: 'https://api.themoviedb.org/3',
		params: { api_key: 'f89a6c1f22aca3858a4ae7aef10de967' }
	})

	const [sec1, setSec1] = useState([]);
	const [sec2, setSec2] = useState([]);
	const [sec3, setSec3] = useState([]);
	const [sec4, setSec4] = useState([]);

	const mainShow = async () => {
		const [mainSrc1, mainSrc2, mainSrc3, mainSrc4] = await Promise.all([
			moviedb.get(`/movie/popular/`),
			moviedb.get(`/movie/top_rated/`),
			moviedb.get(`/tv/popular/`),
			moviedb.get(`/tv/top_rated/`),
		]);
		setSec1(mainSrc1.data.results);
		setSec2(mainSrc2.data.results);
		setSec3(mainSrc3.data.results);
		setSec4(mainSrc4.data.results);
	}
	
	useEffect(() => {
		console.log(sec1)
		// mainShow(); // 컴포넌트가 마운트될 때 mainShow 호출
	}, []);

	return (
		<div>
			<MySlide />
			<section className='main_list inner'>
				<div className='list_title'>
					<h2>Trending Movies</h2>
					<Link to={'/movie'} className='moreBtn'>VIEW MORE</Link>
				</div>
				<div className=''>
					<Swiper
						slidesPerView={6.5}
						spaceBetween={30}
						grabCursor={true}
						className="mainSwiper"
					>
						{
							data.map(item => (
							// sec1.map(item => (
								<SwiperSlide key={item.id}>
									<Link to={`/movie/${item.id}`}>
										<div className='main_item'>
											<img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} />
											<p>{item.title}</p>
										</div>
									</Link>
								</SwiperSlide>
							))
						}
					</Swiper>
				</div>
			</section>
			<section className='main_list inner'>
				<div className='list_title'>
					<h2>Top Rated Movies</h2>
					<Link to={'/movie'} className='moreBtn'>VIEW MORE</Link>
				</div>
				<div className=''>
					<Swiper
						slidesPerView={6.5}
						spaceBetween={30}
						grabCursor={true}
						className="mainSwiper"
					>
						{
							sec2.map(item => (
								<SwiperSlide key={item.id}>
									<Link to={`/movie/${item.id}`}>
										<div className='main_item'>
											<img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} />
											<p>{item.title}</p>
										</div>
									</Link>
								</SwiperSlide>
							))
						}
					</Swiper>
				</div>
			</section>
			<section className='main_list inner'>
				<div className='list_title'>
					<h2>Trending TV</h2>
					<Link to={'/tv'} className='moreBtn'>VIEW MORE</Link>
				</div>
				<div className=''>
					<Swiper
						slidesPerView={6.5}
						spaceBetween={30}
						grabCursor={true}
						className="mainSwiper"
					>
						{
							sec3.map(item => (
								<SwiperSlide key={item.id}>
									<Link to={`/tv/${item.id}`}>
										<div className='main_item'>
											<img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} />
											<p>{item.name}</p>
										</div>
									</Link>
								</SwiperSlide>
							))
						}
					</Swiper>
				</div>
			</section>
			<section className='main_list inner'>
				<div className='list_title'>
					<h2>Top Rated TV</h2>
					<Link to={'/tv'} className='moreBtn'>VIEW MORE</Link>
				</div>
				<div className=''>
					<Swiper
						slidesPerView={6.5}
						spaceBetween={30}
						grabCursor={true}
						className="mainSwiper"
					>
						{
							sec4.map(item => (
								<SwiperSlide key={item.id}>
									<Link to={`/tv/${item.id}`}>
										<div className='main_item'>
											<img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} />
											<p>{item.name}</p>
										</div>
									</Link>
								</SwiperSlide>
							))
						}
					</Swiper>
				</div>
			</section>
		</div>
	)
}

export default Main