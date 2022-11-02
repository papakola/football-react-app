import {configureStore} from '@reduxjs/toolkit'
import calendarSlice from '../features/calendar/calendarSlice.js'

export const store = configureStore({
    reducer: {
        calendar: calendarSlice
    },
})