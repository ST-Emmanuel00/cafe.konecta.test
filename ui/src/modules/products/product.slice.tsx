import { createSlice } from '@reduxjs/toolkit';
import { Product } from './types';
import { ICommomState } from '../../common/types';



export interface IProductState extends ICommomState {
    products: Product[];
    selectedProduct: Product;
    isEditModalOpen: boolean;
    isDeleteModalOpen: boolean;
}

export const initialProductState: IProductState = {
    products: [],
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
    loading: false,
    error: null,
    isEditModalOpen: false,
    isDeleteModalOpen: false,
    message: ''
}

// Product slices

export const productServices = createSlice({
    name: 'products',
    initialState: initialProductState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },
        setSelectedProduct: (state, action) => {
            state.selectedProduct = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
     
        openEditModal: (state, action) => {
            state.isEditModalOpen = true;
            state.selectedProduct =  action.payload; ;
        },
        closeEditModal: (state) => {
            state.isEditModalOpen = false;
        },

        openDeleteModal: (state, action) => {
            state.isDeleteModalOpen = true;
            state.selectedProduct = action.payload;
        },

        closeDeleteModal: (state) => {
            state.isDeleteModalOpen = false;
        }
    }
});

export const { setSelectedProduct, setProducts, openEditModal, closeEditModal, closeDeleteModal, openDeleteModal } = productServices.actions;
