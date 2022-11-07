import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { createTableByPlayers } from '../../utils/createTableByPlayers'

//создаем  изначальное состояние
const initialState = {
    players: [],
    loading: false,
}


const  getData = () => import('../../data/statistics.json').then((m) => m.default || m)

// редюсер вывода календаря
export const getStatistics = createAsyncThunk('statistics/getStatistics',
    async () => {
        try {
            const players = await getData()
            return players;
        } catch (error) {
            console.log(error.message)
        }
    }
)

export const statisticsSlice = createSlice({
    name: 'statistics',
    initialState,
    reducers:{},
    extraReducers:{
        // Get All Games
        // запрос отправился
        [getStatistics.pending]:(state)=>{
            state.loading = true
        },

        //Запрос выполнен, получен ответ в action.payload
        [getStatistics.fulfilled]:(state, action)=>{
            state.loading = false
            state.players = createTableByPlayers(action.payload.players)
        },

        // Ошибка при выполнении запроса
        [getStatistics.rejected]:(state)=>{
            state.loading = false
        }
    }
})

export default statisticsSlice.reducer