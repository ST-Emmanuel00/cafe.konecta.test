import { configureStore } from '@reduxjs/toolkit';
import { saleServices } from './sales.slice';

export const salesStore = configureStore({
    reducer: {
        sales: saleServices.reducer
    }
});

