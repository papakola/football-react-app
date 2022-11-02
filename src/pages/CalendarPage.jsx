import React from 'react'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GameComponent } from '../components/GameComponent.jsx'

import { getAllGames } from '../features/calendar/calendarSlice.js'

export const CalendarPage = () => {
	const dispatch = useDispatch() // подключаем диспатч
	const { games } = useSelector((state) => state.calendar) // получаем игры из стейта

	useEffect(() => {
		dispatch(getAllGames()) // при загрузке компонента диспатчим экшин получения всех игр
		console.log(games)
	}, [dispatch, games])

	if (!games.length) {
		return <div className="">Игр нет.</div>
	}

	return (
		<div className="">
			{games?.map((game, idx) => (
				<GameComponent key={idx} game = {game}/>
			))}
		</div>
	)
}
