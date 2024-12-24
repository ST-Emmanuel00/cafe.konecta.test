import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAxios } from "../../../common/hooks";
import { ISaleState, setSales } from "../sales.slice";
import { Sale } from "../types";
import { formatPrice, formatStock, formatWeight } from "../../../common/utils";

export const SalesListComponent = () => {
    const { response, get, isLoading } = useAxios();
    const { sales }: ISaleState = useSelector((state: any) => state.sales);
    const dispatch = useDispatch();

    useEffect(() => {
        get('/sales');
    }, []);

    useEffect(() => {
        if (response) {
            dispatch(setSales(response?.data?.sales as Sale[]));
        }
    }, [response]);

    return (
        <>
            <section className="bg-white p-6 rounded-3xl shadow-lg mb-6 w-full">
                <div className="mb-4 flex justify-between items-center">
                    <h2 className="text-xl font-bold mb-4">Ventas</h2>
                </div>
                {isLoading ? (
                    <div className="text-center h-96 flex items-center justify-center">
                        <p>Loading...</p>
                    </div>
                ) : sales?.length === 0 ? (
                    <div className="text-center h-96 flex items-center justify-center">
                        <p>No sales available.</p>
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
                                <th className="border-b-2 border-gray-200 px-4 py-2 text-left text-gray-600">Quantity Sold</th>
                                <th className="border-b-2 border-gray-200 px-4 py-2 text-left text-gray-600">Total sale</th>

                                <th className="border-b-2 border-gray-200 px-4 py-2 text-left text-gray-600">Sold At</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sales?.map((sale: Sale) => (
                                <tr key={sale?.id} className={`hover:bg-gray-100`}>
                                    <td className="border-b border-gray-200 px-4 py-2">{sale.product.reference}</td>
                                    <td className="border-b border-gray-200 px-4 py-2">{sale.product.name}</td>
                                    <td className="border-b border-gray-200 px-4 py-2">{formatPrice(sale.product.price)}</td>
                                    <td className="border-b border-gray-200 px-4 py-2">{formatWeight(sale.product.weight)}</td>
                                    <td className="border-b border-gray-200 px-4 py-2">{sale.product.category}</td>
                                    <td className="border-b border-gray-200 px-4 py-2">{formatStock(sale.product.stock)}</td>
                                    <td className="border-b border-gray-200 px-4 py-2">{`${sale.quantity} units`}</td>
                                    <td className="border-b border-gray-200 px-4 py-2">{formatPrice(sale.total)}</td>

                                    <td className="border-b border-gray-200 px-4 py-2">{new Date(sale.soldAt).toLocaleString()}</td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </section>
        </>
    );
}
