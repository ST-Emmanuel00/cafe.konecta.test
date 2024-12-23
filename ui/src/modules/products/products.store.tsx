import { configureStore } from '@reduxjs/toolkit';
import { productServices } from './product.slice';

export const productStore = configureStore({
    reducer: {
        products: productServices.reducer
    }
});

