import { configureStore } from '@reduxjs/toolkit'
import FavoritesSlice from "./FavoritesSlice";

export default configureStore({
    reducer: {
        favorites: FavoritesSlice,
    },
})
