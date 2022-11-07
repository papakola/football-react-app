import React from 'react'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getStatistics } from '../features/statistics/statisticsSlice.js'



export const StatisticsPage = () => {

	const group_color = ["#AAA","#E6399B"]
	
	const dispatch = useDispatch() // подключаем диспатч
	const  players  = useSelector((state) => state.players) // получаем игры из стейта

	useEffect(() => {
		dispatch(getStatistics()) // при загрузке компонента диспатчим экшин получения всех игр
	}, [dispatch])

	if (players.lenght < 2) {
		return <div className="">Игр нет.</div>
	}
		//  console.log('table_0',table[0])
		//  console.log('table_1',table[1])
	return (
		<div>

		</div>
	)
}