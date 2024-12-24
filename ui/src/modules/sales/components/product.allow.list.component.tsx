import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Product } from "../../products/types";
import { useAxios } from "../../../common/hooks";
import { ActionButton, ButtonColor, MessageHandler } from "../../../common/components";
import { ISaleState, setProductsToSale, setSelectedProduct } from "../sales.slice";
import { formatPrice, formatStock, formatWeight } from "../../../common/utils";

export const ProductsAllowListCompoment = () => {
    const { response, get, isLoading, hasError } = useAxios();
    const { productsToSale, selectedProduct }: ISaleState = useSelector((state: any) => state.sales);
    const dispatch = useDispatch();

    useEffect(() => {
        get('/sales/products');
    }, []);

    useEffect(() => {
        if (response) {
            dispatch(setProductsToSale(response?.data?.products as Product[]));
        }
    }, [response]);

    console.log('productsToSale:', productsToSale);

    return (
        <>
            <MessageHandler response={response} hasError={hasError} />
            <section className="bg-white p-6 rounded-3xl shadow-lg mb-6 w-full">
                <div className="mb-4 flex justify-between items-center">
                    <h2 className="text-xl font-bold mb-4">Productos a la venta</h2>
                    {/* <Link to="/products/create" className="bg-blue-500 text-white font-bold py-2 px-4 rounded-3xl">Agregar Producto</Link> */}
                </div>
                {isLoading ? (
                    <div className="text-center h-96 flex items-center justify-center">
                        <p>Loading...</p>
                    </div>
                ) : productsToSale?.length === 0 ? (
                    <div className="text-center h-96 flex items-center justify-center">
                        <p>No products available for sale.</p>
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
                            {productsToSale?.map(product => (
                                <tr key={product?.id} className={`hover:bg-gray-100 ${selectedProduct?.id === product?.id ? 'bg-gray-100' : ''}`}>
                                    <td className="border-b border-gray-200 px-4 py-2">{product.reference}</td>
                                    <td className="border-b border-gray-200 px-4 py-2">{product.name}</td>
                                    <td className="border-b border-gray-200 px-4 py-2">{formatPrice(product.price)}</td>
                                    <td className="border-b border-gray-200 px-4 py-2">{formatWeight(product.weight)}</td>
                                    <td className="border-b border-gray-200 px-4 py-2">{product.category}</td>
                                    <td className="border-b border-gray-200 px-4 py-2">{formatStock(product.stock)}</td>
                                    <td className="border-b border-gray-200 px-4 py-2 flex justify-around">
                                        <ActionButton
                                            color={ButtonColor.GREEN}
                                            label="Sale"
                                            onClick={() => dispatch(setSelectedProduct(product))}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </section>
        </>
    );
}
