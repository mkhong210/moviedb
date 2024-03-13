import './App.scss';
import React, { HashRouter, Link, Route, Routes } from 'react-router-dom'
import Main from './component/Main';
import Detail from './component/Detail';
import Movie from './component/Movie';
import Tv from './component/Tv';
import { Context } from './Context';

function App() {
	return (
		<Context>
			<HashRouter>
				<nav className='nav_wrap'>
					<div className='inner'>
						<Link to='/' className='logo'>HONG</Link>
						<div className='nav'>
							<Link to='/'>Home</Link>
							<Link to='/movie'>Movie</Link>
							<Link to='/tv'>TV Series</Link>
						</div>
					</div>
				</nav>
				<main>
					<Routes>
						<Route path='/' element={<Main />} />
						<Route path='/movie' element={<Movie />} />
						<Route path='/tv' element={<Tv />} />
						<Route path='/:type/:id' element={<Detail />} />
					</Routes>
				</main>
			</HashRouter>
		</Context>
	);
}

export default App;
