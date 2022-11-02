export const GameComponent = ({ game }) => {
	if (!game) {
		return <div>Постов нет.</div>
	}
	return (
		<div className="game">
			<div className="game_date">
				Дата:{game.date}, Время:{game.time}
			</div>
			<div>
				{' '}
				{game.teams[0].name} ({game.teams[0].city}) - {game.teams[0].goal} :
				{game.teams[1].goal} {game.teams[1].name} ({game.teams[1].city})
			</div>
		</div>
	)
}
