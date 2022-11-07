export const GameComponent = ({ game }) => {
	if (!game) {
		return <div>Постов нет.</div>
	}
	return (
		<div className="game">
			<div className="game_date">
				<div>{game.date}</div>
				<div>{game.time}</div>
			</div>
			<div className="game_data">

				<div className="team first">
				<div className="team_title right">{game.teams[0].name} ({game.teams[0].city == "" ? "город" : game.teams[0].city})</div>
					<div className="team_logo">
						<img
							className="img_logo"
							src={game.teams[0].logo_url == "" ? "images/logo/no_logo.png" : 'images' + game.teams[0].logo_url}
							alt=""
						/>
					</div>
				</div>

				<div className="result">
					{game.teams[0].goal < 0 ? 'X' : game.teams[0].goal} :{' '}
					{game.teams[1].goal < 0 ? 'X' : game.teams[1].goal}
				</div>

				<div className="team second">
					<div className="team_logo">
						<div>
						<img
							className="img_logo"
							src={game.teams[0].logo_url == "" ? "images/logo/no_logo.png" : 'images' + game.teams[0].logo_url}
							alt=""
						/>
						</div>
					</div>
					<div className="team_title left">{game.teams[1].name} ({game.teams[1].city == "" ? "город" : game.teams[1].city})</div>
				</div>
			</div>
		</div>
	)
}
