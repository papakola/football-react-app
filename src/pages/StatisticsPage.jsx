import React from 'react'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getStatistics } from '../features/statistics/statisticsSlice.js'



export const StatisticsPage = () => {

	const dispatch = useDispatch() // подключаем диспатч
	const  {players}  = useSelector((state) => state.statistics) // получаем игры из стейта

	useEffect(() => {
		dispatch(getStatistics()) // при загрузке компонента диспатчим экшин получения всех игр
	}, [dispatch])

	
	if (players.length < 2) {
		return <div className="">Нет данных</div>
	}
	return (
<div>
	<table className="resp-tab">
						<thead>
							<tr>
								<th>#</th>
								<th>Игрок</th>
								<th>Голов</th>
							</tr>
						</thead>
						<tbody>
						{players.map((player, idx) => (
								<tr key={idx}>
								<td>{idx+1}</td>
								<td>{player.name}</td>
								<td>{player.goals}</td>
								</tr>
							))}							
						</tbody>
					</table>
				</div>
			
	)
}