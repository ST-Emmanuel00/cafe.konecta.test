import { useDispatch, useSelector } from 'react-redux';
import { closeDeleteModal, IProductState, setProducts } from '../product.slice';
import { useAxios } from '../../../common/hooks';
import { useEffect } from 'react';


export const DeleteProductModal = () => {
    const { response, hasError, delete: deleteRequest } = useAxios()
    const { response: getResponse, get } = useAxios();

    const { selectedProduct }: IProductState = useSelector((state: any) => state.products);
    const dispatch = useDispatch();

    const onSubmit = async () => {
        const success = await deleteRequest(`/products/${selectedProduct?.id}`);
        if (success) {
            await get('/products');
        }
    }

    useEffect(() => {
        if (getResponse) {
            dispatch(setProducts(getResponse.data.products));
            dispatch(closeDeleteModal());
        }
    }, [getResponse]);



    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-3xl shadow-lg">
                <h2 className="text-xl font-bold mb-4">Confirm Delete</h2>
                <p>Are you sure you want to delete {selectedProduct?.name}?</p>
                <div className="flex justify-end mt-4">
                    <button
                        className="bg-red-500 text-white font-bold py-2 px-4 rounded-3xl mr-2"
                        onClick={() => onSubmit()}
                    >
                        Delete
                    </button>
                    <button
                        className="bg-gray-500 text-white font-bold py-2 px-4 rounded-3xl"
                        onClick={() => dispatch(closeDeleteModal())}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};
