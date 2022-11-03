export const createTableByGroup = (games) => {
    
    const table = {}

	games.map((game, idx) => {

        let add_score_0 = 0
        let add_score_1 = 0
        



		if (game.teams[0].id in table === false) {
			table[game.teams[0].id] = new Object()

			table[game.teams[0].id].games = 0
			table[game.teams[0].id].win = 0
			table[game.teams[0].id].lost = 0
			table[game.teams[0].id].diff = 0

			table[game.teams[0].id].score = 0
			table[game.teams[0].id].zabit = 0
			table[game.teams[0].id].propusk = 0
			// table[game.teams[0].id].name =  game.teams[0].goal
	    }

        if (game.teams[1].id in table === false) {
			table[game.teams[1].id] = new Object()

            table[game.teams[1].id].games = 0
            table[game.teams[1].id].win = 0
			table[game.teams[1].id].lost = 0
			table[game.teams[1].id].diff = 0


			table[game.teams[1].id].score = 0
            table[game.teams[1].id].zabit = 0
			table[game.teams[1].id].propusk = 0
		}

                
        if (game.teams[0].goal < 0 ) {add_score_0 = 0; add_score_1 = 0}
        else{
            if (game.teams[0].goal < game.teams[1].goal) {add_score_0 = 0; add_score_1 = 3; table[game.teams[1].id].win++ ;table[game.teams[0].id].lost++}
            if (game.teams[0].goal == game.teams[1].goal) {add_score_0 = 1; add_score_1 = 1; table[game.teams[0].id].diff++ ;table[game.teams[1].id].diff++}
            if (game.teams[0].goal > game.teams[1].goal) {add_score_0 = 3; add_score_1 = 0; table[game.teams[0].id].win++ ;table[game.teams[1].id].lost++}

            table[game.teams[0].id].games++
            table[game.teams[1].id].games++
        }



        
        table[game.teams[0].id].score += add_score_0

		table[game.teams[0].id].zabit += game.teams[0].goal < 0 ? 0 : game.teams[0].goal
		table[game.teams[0].id].propusk += game.teams[1].goal < 0 ? 0 : game.teams[1].goal
		table[game.teams[0].id].name = game.teams[0].name
		table[game.teams[0].id].city = game.teams[0].city
		table[game.teams[0].id].logo_url = game.teams[0].logo_url
        

        
        table[game.teams[1].id].score += add_score_1

		table[game.teams[1].id].zabit += game.teams[1].goal < 0 ? 0 : game.teams[1].goal
		table[game.teams[1].id].propusk += game.teams[0].goal < 0 ? 0 : game.teams[0].goal
        table[game.teams[1].id].name = game.teams[1].name
		table[game.teams[1].id].city = game.teams[1].city
        table[game.teams[1].id].logo_url = game.teams[1].logo_url
	})

	

    let sortable = [];
    for (let item in table) {
    sortable.push([item, table[item].score]);}

    sortable.sort(function(a, b) {
        return b[1] - a[1] ;
    });

    //console.log(sortable)

    const new_table = []

    sortable.forEach(function(item, idx, arr) {
        //console.log( idx + ": " + item + " (массив:" + arr + ")" );
        new_table.push(table[item[0]])
      });

    return new_table
}
