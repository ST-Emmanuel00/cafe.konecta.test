import { useForm } from 'react-hook-form';
import { Product } from '../types';
import { Link, useNavigate } from 'react-router-dom';
import { useAxios } from '../../../common/hooks';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeEditModal, setProducts } from '../product.slice';
import { MessageHandler } from '../../../common/components';

interface ProductFormProps {
    productData?: Product;
}

export const ProductForm: React.FC<ProductFormProps> = ({ productData }) => {

    const { response, hasError, post, put } = useAxios();
    const { response: getResponse, get } = useAxios();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: productData || {
            name: '',
            price: 0,
            weight: 0,
            category: '',
            stock: 0,
        }
    });
    const onSubmit = async (data: any) => {

        if (productData) {

            console.log('productData:', productData);
            const success = await put(`/products/${productData.id}`, data);
            console.log('success:', success);
            if (success) {
                await get('/products');
            }
        }

        const success = await post('/products', data);
        if (success) {
            await get('/products');
            navigate('/products');
        }


    };

    useEffect(() => {
        if (getResponse) {
            dispatch(setProducts(getResponse.data.products));
            reset();
            if (productData) {
                dispatch(closeEditModal());
            }
        }
    }, [getResponse]);


    return (
        <>
            <MessageHandler response={response} hasError={hasError} />
            <section className={`bg-white p-6 rounded-3xl shadow-lg mb-6 ${productData && 'w-[600PX]'}`}>
                <h2 className="text-xl font-bold mb-4"> {!productData ? "Agregar Producto" : "Editar producto"}</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Nombre */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Nombre del Producto
                        </label>
                        <input
                            type="text"
                            id="name"
                            {...register("name", { required: "El nombre es obligatorio" })}
                            className="w-full border border-gray-300 rounded-full shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-300 px-4 py-2"
                        />
                        {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
                    </div>

                    {/* Precio */}
                    <div>
                        <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                            Precio
                        </label>
                        <input
                            type="number"
                            id="price"
                            {...register("price", {
                                required: "El precio es obligatorio",
                                min: { value: 1, message: "El precio debe ser mayor a 0" },
                            })}
                            className="w-full border border-gray-300 rounded-full shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-300 px-4 py-2"
                        />
                        {errors.price && <span className="text-red-500 text-sm">{errors.price.message}</span>}
                    </div>

                    {/* Peso */}
                    <div>
                        <label htmlFor="weight" className="block text-sm font-medium text-gray-700">
                            Peso (en gramos)
                        </label>
                        <input
                            type="number"
                            id="weight"
                            {...register("weight", {
                                required: "El peso es obligatorio",
                                min: { value: 1, message: "El peso debe ser mayor a 0" },
                            })}
                            className="w-full border border-gray-300 rounded-full shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-300 px-4 py-2"
                        />
                        {errors.weight && <span className="text-red-500 text-sm">{errors.weight.message}</span>}
                    </div>

                    {/* Categoría */}
                    <div>
                        <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                            Categoría
                        </label>
                        <input
                            type="text"
                            id="category"
                            {...register("category", { required: "La categoría es obligatoria" })}
                            className="w-full border border-gray-300 rounded-full shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-300 px-4 py-2"
                        />
                        {errors.category && <span className="text-red-500 text-sm">{errors.category.message}</span>}
                    </div>

                    {/* Stock */}
                    <div>
                        <label htmlFor="stock" className="block text-sm font-medium text-gray-700">
                            Stock
                        </label>
                        <input
                            type="number"
                            id="stock"
                            {...register("stock", {
                                required: "El stock es obligatorio",
                                min: { value: 0, message: "El stock no puede ser negativo" },
                            })}
                            className="w-full border border-gray-300 rounded-full shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-300 px-4 py-2"
                        />
                        {errors.stock && <span className="text-red-500 text-sm">{errors.stock.message}</span>}
                    </div>

                    {productData && (
                        <>
                            {/* Reference */}
                            <div>
                                <label htmlFor="reference" className="block text-sm font-medium text-gray-700">
                                    Referencia
                                </label>
                                <input
                                    type="text"
                                    id="reference"
                                    {...register("reference", { required: "La referencia es obligatoria" })}
                                    className="w-full border border-gray-300 rounded-full shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-300 px-4 py-2"
                                    readOnly={true}

                                />
                                {errors.reference && <span className="text-red-500 text-sm">{errors.reference.message}</span>}
                            </div>

                            {/* CreatedAt */}
                            <div>
                                <label htmlFor="createdAt" className="block text-sm font-medium text-gray-700">
                                    Fecha de Creación
                                </label>
                                <input
                                    type="date"
                                    id="createdAt"
                                    {...register("createdAt")}
                                    className="w-full border border-gray-300 rounded-full shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-300 px-4 py-2"
                                    readOnly={true}
                                />
                                {errors.createdAt && <span className="text-red-500 text-sm">{errors.createdAt.message}</span>}
                            </div>
                        </>
                    )}

                    {/* Botón */}
                    <div className="flex justify-end">
                        {

                            !productData && <Link to="/products" className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-50 transition w-32 mr-4">Regresar</Link>

                        }
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition w-32"
                        >
                            {productData ? "Modificar" : "Agrgear"}
                        </button>
                    </div>
                </form>
            </section>
        </>
    );
};