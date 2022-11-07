import React from 'react'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GameComponent } from '../components/GameComponent.jsx'

import { getSuperfinalGames } from '../features/superfinal/superfinalSlice.js'


export const SuperfinalPage = () => {

	const group_color = ["#AAA","#E6399B"]
	
	const dispatch = useDispatch() // подключаем диспатч
	const { games_by_group_superfinal } = useSelector((state) => state.superfinal) // получаем игры из стейта

	useEffect(() => {
		dispatch(getSuperfinalGames()) // при загрузке компонента диспатчим экшин получения всех игр
	}, [dispatch])

	if (!games_by_group_superfinal) {
		return <div className="">Игр нет.</div>
	}

	return (
		<div>
			{
				Object.keys(games_by_group_superfinal).map((k, idx) => (
					<div key={idx} >
						<div className='group_title' style={{"backgroundColor": group_color[idx]}} key={idx}>{k === "1" ? "1 игра Суперфинала" : "2 игра Суперфинала"}</div>
						{
							games_by_group_superfinal[k]?.map((game,idx)=>(<GameComponent key={idx} game = {game}/>))
						}
					</div>
					))
			}
		</div>
	)
}