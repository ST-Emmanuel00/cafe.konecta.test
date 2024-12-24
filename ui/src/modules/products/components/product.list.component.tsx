import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Product } from '../types';
import { useAxios } from '../../../common/hooks';
import { formatPrice, formatStock, formatWeight } from '../../../common/utils';
import { ActionButton, ButtonColor, MessageHandler } from '../../../common/components';
import { IProductState, openDeleteModal, openEditModal, setProducts } from '../product.slice';

export const ProductList = () => {

    const dispatch = useDispatch();
    const { products }: IProductState = useSelector((state: any) => state.products);
    const { response, get, isLoading, hasError } = useAxios();

    useEffect(() => {
        get('/products');
    }, []);

    useEffect(() => {
        if (response) {
            dispatch(setProducts(response?.data?.products as Product[]));
        }
    }, [response]);


    return (
        <>
            <MessageHandler response={response} hasError={hasError} />
            <section className="bg-white p-6 rounded-3xl shadow-lg mb-6 w-full">
                <div className="mb-4 flex justify-between items-center">
                    <h2 className="text-xl font-bold mb-4">Inventario</h2>
                    <Link to="/products/create" className="bg-blue-500 text-white font-bold py-2 px-4 rounded-3xl">Agregar Producto</Link>
                </div>
                {isLoading ? (
                    <div className="text-center h-96 flex items-center justify-center">
                        <p>Loading...</p>
                    </div>
                ) : hasError ? (
                    <div className="text-center h-96 flex items-center justify-center">
                        <p>Error loading products. Please try again later.</p>
                    </div>
                ) : (
                    <table className="min-w-full bg-white">
                        <thead>
                            <tr>
                                <th className="border-b-2 border-gray-200 px-4 py-2 text-left text-gray-600">Reference</th>
                                <th className="border-b-2 border-gray-200 px-4 py-2 text-left text-gray-600">Name</th>
                                <th className="border-b-2 border-gray-200 px-4 py-2 text-left text-gray-600">Price</th>
                                <th className="border-b-2 border-gray-200 px-4 py-2 text-left text-gray-600">Weight</th>
                                <th className="border-b-2 border-gray-200 px-4 py-2 text-left text-gray-600">Category</th>
                                <th className="border-b-2 border-gray-200 px-4 py-2 text-left text-gray-600">Stock</th>
                                <th className="border-b-2 border-gray-200 px-4 py-2 text-left text-gray-600">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.length === 0 ? (
                                <tr className="text-center h-96">
                                    <td colSpan={7} className="px-4 py-2">
                                        No products available. <Link to="/products/create" className="text-blue-500">Create a new product</Link>
                                    </td>
                                </tr>
                            ) : (
                                products.map((product: Product) => (
                                    <tr key={product.id}>
                                        <td className="border-b border-gray-200 px-4 py-2">{product.reference}</td>
                                        <td className="border-b border-gray-200 px-4 py-2">{product.name}</td>
                                        <td className="border-b border-gray-200 px-4 py-2">{formatPrice(product.price)}</td>
                                        <td className="border-b border-gray-200 px-4 py-2">{formatWeight(product.weight)}</td>
                                        <td className="border-b border-gray-200 px-4 py-2">{product.category}</td>
                                        <td className="border-b border-gray-200 px-4 py-2">{formatStock(product.stock)}</td>
                                        <td className="border-b border-gray-200 px-4 py-2 flex justify-around">
                                            <ActionButton
                                                color={ButtonColor.BLUE}
                                                label="Edit"
                                                onClick={() => dispatch(openEditModal(product))}
                                            />
                                            <ActionButton
                                                color={ButtonColor.RED}
                                                label="Delete"
                                                onClick={() => dispatch(openDeleteModal(product))}
                                            />
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                )}
            </section>
        </>
    );
};
