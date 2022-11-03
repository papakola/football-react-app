import React from 'react'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GameComponent } from '../components/GameComponent.jsx'

import { getAllGames } from '../features/calendar/calendarSlice.js'
import { createTableByGroup } from '../utils/createTableByGroup.js'

export const CalendarPage = () => {

	const group_color = ["#AAA","#E6399B"]
	const table = []


	const dispatch = useDispatch() // подключаем диспатч
	const { games } = useSelector((state) => state.calendar) // получаем игры из стейта

	useEffect(() => {
		dispatch(getAllGames()) // при загрузке компонента диспатчим экшин получения всех игр
	}, [dispatch])

	const games_by_group = {}

	if (!games.length) {
		return <div className="">Игр нет.</div>
	}
	else{
		// games?.map((game, idx) => ({
		// 	games_by_group
		// }))

		// games.sort((prev, next) => {
		// 	if ( prev.teams[0].group < next.teams[0].group ) return -1;
		// 	if ( prev.teams[0].group > next.teams[0].group ) return 1;
		// 	return 0
		// });

		// Сортировка игр по группам
		games.forEach((item, i, arr) => {
			//console.log( i + ": " + item.teams[0].group + " (массив:" + arr + ")" );
			if (item.teams[0].group in games_by_group === false) { games_by_group[item.teams[0].group] = []}
			games_by_group[item.teams[0].group].push(item)

		  });

		  for (let key in games_by_group) {
//			games_by_group.forEach(function(item, idx, arr) {
			//console.log( idx + ": " + item + " (массив:" + arr + ")" );
			table.push(createTableByGroup(games_by_group[key]))
		  };


		  console.log('table_0',table[0])
		  console.log('table_1',table[1])

		  
		  //table.push(createTableByGroup(games_by_group[2]))




	}

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