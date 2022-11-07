import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { createTableByGroup } from '../../utils/createTableByGroup.js'

//создаем  изначальное состояние
const initialState = {
    //data:{},
    games_by_group: {},
    table: [],
    loading: false,
}


const  getData = () => import('../../data/calendar.json').then((m) => m.default || m)

// редюсер вывода календаря
export const getAllGames = createAsyncThunk('calendar/getAllGames',
    async () => {
        try {
            const games = await getData()
            return games;
        } catch (error) {
            console.log(error.message)
        }
    }
)

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState,
    reducers:{},
    extraReducers:{
        // Get All Games
        // запрос отправился
        [getAllGames.pending]:(state)=>{
            state.loading = true
        },

        //Запрос выполнен, получен ответ в action.payload
        [getAllGames.fulfilled]:(state, action)=>{
            state.loading = false
            console.log(action.payload)

            action.payload.games.forEach((item, i, arr) => {
                
                     if (item.teams[0].group in state.games_by_group === false) { state.games_by_group[item.teams[0].group] = []}
                     state.games_by_group[item.teams[0].group].push(item)
        
                   });


                   for (let key in state.games_by_group) {
                    state.table.push(createTableByGroup(state.games_by_group[key]))
                       };
        },

        // Ошибка при выполнении запроса
        [getAllGames.rejected]:(state)=>{
            state.loading = false
        }
    }
})

export default calendarSlice.reducer