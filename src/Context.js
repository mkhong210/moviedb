import axios from 'axios';
import React, { createContext, useEffect, useReducer, useState } from 'react'

// img_origin : 'https://image.tmdb.org/t/p/original/',
// img_poster : 'https://image.tmdb.org/t/p/w500/',

const myContext = createContext();

const insert = (state, action) => {
	switch (action.type) {
		case "get": return action.d;
		case "more" : return [...state, ...action.d]
		default: return action.d;
	}
}

function Context({ children }) {
	const [data, dispatch] = useReducer(insert, []);
	// const [program, setProgram] = useState("movie");
	// const [cat, setCat] = useState("popular");
	// let [page, setPage] = useState();
	// let [num, setNum] = useState();

	let moviedb = axios.create({
		baseURL: 'https://api.themoviedb.org/3',
		params: { api_key: 'f89a6c1f22aca3858a4ae7aef10de967' }
	})

	const setProgram = (program) => { /* 프로그램을 설정하는 로직 */ };
  const setCat = (cat) => { /* 카테고리를 설정하는 로직 */ };

	const fetchFn = async (type, program, cat, search) => {
	// const fetchFn = async (type='movie', program='movie', cat='popular', page, search) => {
	// const fetchFn = async (type, data) => {
		let res,viewData;

		switch (type) {
			case "search":
				res = await moviedb.get(`/search/${program}?query=${search}`);
				viewData = res.data.results;
				break;

			case "get":
				res = await moviedb.get(`/${program}/${cat}`);
				viewData = res.data.results;
				break;

			// case "more":
			// 	res = await moviedb.get(`/${program}/${cat}?page=${page}`);
			// 	viewData = res.data.results;
			// 	break;

			default:
				res = await moviedb.get(`/${program}/${cat}`);
				viewData = res.data.results;
		}
		dispatch({ type, d: viewData });
	}
	
	useEffect(() => {
		// fetchFn(type, data, program, cat, search);
		fetchFn("get", "movie", "popular", "");
	}, []);

	return (
		<myContext.Provider value={{ data, fetchFn, setProgram, setCat}}>
			{children}
		</myContext.Provider>
	)
}

export { Context, myContext }