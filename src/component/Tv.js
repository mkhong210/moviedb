import React, { useContext, useEffect, useRef, useState } from 'react'
import { myContext } from '../Context';
import Item from './Item';

function Tv() {
	let { data, fetchFn } = useContext(myContext);
	const elInput = useRef();


	let [num, setNum] = useState(1);
	const clickBtn = () => {
		// let k = type == 'more' ? 'more' : 'get';
		// setNum(++num);
		// setProgram("tv");
		// setCat("popular");
		// setPage(num);
		// fetchFn("more", num)
	}

  // const reset = () => {
	// 	setProgram("tv");
	// 	setCat("popular");
	// 	fetchFn("get")
	// };
  // reset();
	// useEffect로 데이터 리셋 시키고 시작 
	useEffect(()=>{
		// reset();
		fetchFn("get", 'tv', 'popular');
	},[])

	return (
		<>
			<section className='type_list inner'>
				<h2>TV Series</h2>
				<div className='search_box'>
					<input ref={elInput} name='saearch'></input>
					<button onClick={(e) => { fetchFn("search","tv", "popular", 1, elInput.current.value) }}>검색</button>
				</div>
				<ul>
					{
						data.map(item => (
							<Item key={item.id} item={item} type='tv'></Item>
						))
					}
				</ul>
				<button onClick={() => { clickBtn() }}>hehe</button>
			</section>
		</>
	)
}

export default Tv