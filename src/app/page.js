'use client'

import { useState, useEffect } from 'react';
import { getWeather } from '@/api/getWeather';

export default function Home(){
	const [query, setQuery] = useState('');
	const [city, setCity] = useState();

	const getData = async () => {
		try{
			const fetchApi = await getWeather(query);
			const data = fetchApi.data;
			setCity(data);
			console.log(data)
		}
		catch(error){
			console.error(error);
		}
	}

	return(
		<div>
			<input
				placeholder='Cidade'
				name='query'
				value={query}
				type='text'
				onChange={(e) => setQuery(e.target.value)}
			/>
			<button onClick={getData}>Search</button>
		</div>
	);
}