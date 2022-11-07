export const TeamComponent = ({idx, team}) => {

    return (

            <tr>
                
                <td>{idx+1}</td>
                <td>{team.name}</td>
                <td>{team.city}</td>
                <td>{team.games}</td>
                <td>{team.win}</td>
                <td>{team.diff}</td>
                <td>{team.lost}</td>
                <td>{team.zabit}</td>
                <td>{team.propusk}</td>
                <td>{team.score}</td>
                
            </tr>

	)
}
