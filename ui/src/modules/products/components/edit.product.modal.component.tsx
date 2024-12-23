import { ProductForm } from './product.form.component';
import { closeEditModal, IProductState } from '../product.slice';
import { useDispatch, useSelector } from 'react-redux';

export const EditProductModal = () => {

    const { selectedProduct }: IProductState = useSelector((state: any) => state.products);
    const dispatch = useDispatch();
    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
            <ProductForm productData={selectedProduct} />
            <button onClick={() => dispatch(closeEditModal())} className="absolute top-4 right-4 bg-gray-500 text-white font-bold py-2 px-4 rounded-3xl">Close</button>
        </div>
    );
};
