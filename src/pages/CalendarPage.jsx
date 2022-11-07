import React from 'react'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GameComponent } from '../components/GameComponent.jsx'

import { getAllGames } from '../features/calendar/calendarSlice.js'


export const CalendarPage = () => {

	const group_color = ["#AAA","#E6399B"]
	
	const dispatch = useDispatch() // подключаем диспатч
	const { games_by_group } = useSelector((state) => state.calendar) // получаем игры из стейта

	useEffect(() => {
		dispatch(getAllGames()) // при загрузке компонента диспатчим экшин получения всех игр
	}, [dispatch])

	if (!games_by_group) {
		return <div className="">Игр нет.</div>
	}
		//  console.log('table_0',table[0])
		//  console.log('table_1',table[1])
	return (
		<div>
			{
				Object.keys(games_by_group).map((k, idx) => (
					<div key={idx} >
						<div className='group_title' style={{"backgroundColor": group_color[idx]}} key={idx}>группа: {k == 1 ? "А" : "Б"}</div>
						{
							games_by_group[k]?.map((game,idx)=>(<GameComponent key={idx} game = {game}/>))
						}
					</div>
					))
			}
		</div>
	)
}

// {games_by_grop?.map(g, idx) => (
// 	<div>
// 	{/* g?.map((game, idx) => (
// 		<GameComponent key={idx} game = {game}/> */}
	
// 	</div>)

// }