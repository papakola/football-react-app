import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

//создаем  изначальное состояние
const initialState = {
    games:[],
    loading: false,
}


const  getArticles = () => import('../../data/calendar.json').then((m) => m.default || m)

// редюсер вывода календаря
export const getAllGames = createAsyncThunk('calendar/getAllGames',
    async () => {
        try {
            const games = await getArticles()
            console.log(games)
            return games
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
            state.games = action.payload.games // записываем в стор полученные игры с сервера
        },

        // Ошибка при выполнении запроса
        [getAllGames.rejected]:(state)=>{
            state.loading = false
        }
    }
})

export default calendarSlice.reducer