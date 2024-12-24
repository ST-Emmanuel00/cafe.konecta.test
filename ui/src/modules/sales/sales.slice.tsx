import { createSlice } from '@reduxjs/toolkit';
import { Product } from '../products/types';
import { Sale } from './types';
import { ICommomState } from '../../common/types';


export interface ISaleState extends ICommomState {
    productsToSale: Product[];
    selectedProduct: Product;
    sales: Sale[];
}

export const initialSalesState: ISaleState = {
    productsToSale: [],
    selectedProduct: {
        id: '',
        name: '',
        reference: '',
        price: 0,
        weight: 0,
        category: '',
        stock: 0,
        createdAt: "",
    },
    sales: [],
    loading: false,
    error: null,
    message: ''
}

// Product slices

export const saleServices = createSlice({
    name: 'sales',
    initialState: initialSalesState,
    reducers: {
        setProductsToSale: (state, action) => {
            state.productsToSale = action.payload;
        },
        setSelectedProduct: (state, action) => {
            state.selectedProduct = action.payload;
        },
        setSales: (state, action) => {
            state.sales = action.payload;
        }

    }
});

export const { setSelectedProduct, setProductsToSale, setSales } = saleServices.actions;
