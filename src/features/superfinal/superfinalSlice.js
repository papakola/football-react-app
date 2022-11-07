import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

//создаем  изначальное состояние
const initialState = {
    //data:{},
    games_by_group_superfinal: {},
    loading: false,
}


const  getData = () => import('../../data/superfinal.json').then((m) => m.default || m)

// редюсер вывода календаря
export const getSuperfinalGames = createAsyncThunk('superfinal/getSuperfinalGames',
    async () => {
        try {
            const games_superfinal = await getData()
            
            return games_superfinal;
        } catch (error) {
            console.log(error.message)
        }
    }
)

export const superfinalSlice = createSlice({
    name: 'superfinal',
    initialState,
    reducers:{},
    extraReducers:{
        // Get All Games
        // запрос отправился
        [getSuperfinalGames.pending]:(state)=>{
            state.loading = true
        },

        //Запрос выполнен, получен ответ в action.payload
        [getSuperfinalGames.fulfilled]:(state, action)=>{
            state.loading = false
            

            action.payload.games_superfinal.forEach((item, i, arr) => {
               
                     if (item.teams[0].group in state.games_by_group_superfinal === false) { state.games_by_group_superfinal[item.teams[0].group] = []}
                     state.games_by_group_superfinal[item.teams[0].group].push(item)
                
                    
        
                   });

                   
        },

        // Ошибка при выполнении запроса
        [getSuperfinalGames.rejected]:(state)=>{
            state.loading = false
        }
    }
})

export default superfinalSlice.reducer