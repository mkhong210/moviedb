import React from 'react'
import { Link } from 'react-router-dom'

function Item({ item, type }) {
	return (
		<>
			<li key={item.id}>
				<Link to={`/${type}/${item.id}`} className='item'>

					<img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} />
					<p>{item.title}{item.name}</p>
				</Link>
			</li>
		</>
	)
}

export default Item