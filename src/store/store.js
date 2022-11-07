import {configureStore} from '@reduxjs/toolkit'
import calendarSlice from '../features/calendar/calendarSlice.js'
import statisticsSlice from '../features/statistics/statisticsSlice.js'
import superfinalSlice from '../features/superfinal/superfinalSlice.js'

export const store = configureStore({
    reducer: {
        calendar: calendarSlice,
        superfinal: superfinalSlice,
        statistics: statisticsSlice
    },
})