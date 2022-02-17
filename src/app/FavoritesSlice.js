import { createSlice } from '@reduxjs/toolkit'

export const FavoritesSlice = createSlice({
    name: 'favorites',
    initialState: [],
    reducers: {
        toggle: (state, action) => {
            if(state.includes(action.payload)){
                return state.filter((s) => s !== action.payload)
            } else {
                return [...state, action.payload]
            }
        },
    }
})
export const { toggle } = FavoritesSlice.actions

export default FavoritesSlice.reducer