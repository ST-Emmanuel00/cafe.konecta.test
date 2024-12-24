import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Product } from '../../products/types';
import { ActionButton, ButtonColor, MessageHandler } from '../../../common/components';
import { useDispatch, useSelector } from 'react-redux';
import { ISaleState, setProductsToSale, setSales } from '../sales.slice';
import { useAxios } from '../../../common/hooks';
import { Sale } from '../types';

interface SaleFormProps {
    product?: Product;
}

export const SaleFormComponent: React.FC<SaleFormProps> = () => {

    const { selectedProduct }: ISaleState = useSelector((state: any) => state.sales);
    const { response, hasError, post, get: getProducts } = useAxios();
    const dispatch = useDispatch();
    const { response: getSalesgetResponse, get: getSale } = useAxios();

    const { register, handleSubmit, watch, setValue, reset } = useForm({
        defaultValues: { quantity: 1 },
    });

    const quantity = watch("quantity", 1);

    const handleIncrement = () => {
        if (quantity < selectedProduct?.stock) {
            setValue("quantity", quantity + 1);
        }

    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setValue("quantity", quantity - 1);
        }
    };

    const onSubmit = async (data: { quantity: number }) => {
        const { quantity } = data;
        const success = await post('/sales', {
            productId: selectedProduct?.id,
            quantity,
        });

        if (success) {

            await getProducts('/sales/products');
            await getSale('/sales');

        }
    };


    useEffect(() => {
        if (response) {
            dispatch(setProductsToSale(response?.data?.products as Product[]));
            dispatch(setSales(getSalesgetResponse?.data.sales as Sale[]));
            reset()
        }
    }, [response, getSalesgetResponse]);

    console.log('response:', response);



    return (
        <>
            <MessageHandler response={response} hasError={hasError} />
            <section className="bg-white p-6 rounded-3xl shadow-lg mb-6 w-full md:max-w-md mx-auto">
                <h2 className="text-xl font-bold mb-4">Vender Producto      </h2>
                <div className="mb-4">
                    <p className="text-sm text-gray-700"><strong>Producto:</strong> {selectedProduct?.name}</p>
                    <p className="text-sm text-gray-700"><strong>Precio:</strong> ${selectedProduct?.price}</p>
                    <p className="text-sm text-gray-700"><strong>Stock Disponible:</strong> {selectedProduct?.stock}</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 relative">
                    {/* Contador */}
                    <div className="flex items-center space-x-4">
                        <button
                            type="button"
                            onClick={handleDecrement}
                            disabled={quantity <= 1}
                            className={`bg-gray-200 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-300 ${quantity <= 1 && 'opacity-50 cursor-not-allowed'}`}
                        >
                            -
                        </button>
                        <input
                            type="number"
                            {...register('quantity', {
                                required: true,
                                min: 1,
                                max: selectedProduct?.stock,
                            })}
                            readOnly
                            className="w-16 text-center border border-gray-300 rounded-full shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-300"
                        />
                        <button
                            type="button"
                            onClick={handleIncrement}
                            className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-300"
                        >
                            +
                        </button>
                    </div>



                    {/* Botón de Vender */}
                    <div className="flex justify-end">
                        <ActionButton label="Vender" color={ButtonColor.BLUE} />
                    </div>
                </form>
            </section>
        </>
    );
};
