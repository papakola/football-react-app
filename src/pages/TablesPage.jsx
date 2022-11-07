import React from 'react'

import { useSelector } from 'react-redux'
import { TeamComponent } from '../components/TeamComponent'

export const TablesPage = () => {
	const group_color = ['#AAA', '#E6399B']

	const { table } = useSelector((state) => state.calendar) // получаем игры из стейта

	if (!table) {
		return <div className="">Таблиц нет.</div>
	}

	return (
		<div>
			{table.map((k, idx) => (
				<div key={idx}>
					<div
						className="group_title"
						style={{ backgroundColor: group_color[idx] }}
						
					>
						группа: {idx === 0 ? 'А' : 'Б'}
					</div>
					<table className="resp-tab">
						<thead>
							<tr>
								<th>#</th>
								<th>Команда</th>
								<th>Город</th>
								<th>Игр</th>
								<th>Побед</th>
								<th>Ничьих</th>
								<th>Поражений</th>
								<th>МЗ</th>
								<th>МП</th>
								<th>Очков</th>
							</tr>
						</thead>
						<tbody>
							{k.map((team, idx) => (
								<TeamComponent key={idx} idx={idx} team={team} />
							))}
						</tbody>
					</table>
				</div>
			))}
		</div>
	)
}
