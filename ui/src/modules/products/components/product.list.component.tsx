import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { ActionButton, ButtonColor } from '../../../common/components';
import { EditProductModal } from './edit.product.modal.component';
import { DeleteProductModal } from './delete.product.modal.component';

export const ProductList = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<Product>();

    const openModal = (product: Product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const openDeleteModal = (product: Product) => {
        setSelectedProduct(product);
        setIsDeleteModalOpen(true);
    };

    const closeDeleteModal = () => {
        setIsDeleteModalOpen(false);
    };

    const confirmDelete = () => {
        alert(`Delete ${selectedProduct?.id}`);
        setIsDeleteModalOpen(false);
    };

    const products = [
        {
            id: "8aef4dbd-4a3b-4f0e-bc39-293dffde95a4",
            name: "Café Americano",
            reference: "CA1001",
            price: 3000,
            weight: 250,
            category: "Bebidas",
            stock: 20,
            createdAt: "2024-12-22T04:08:55.721Z"
        },
        {
            id: "0f98cd24-9533-4555-8e34-f70611ab00e0",
            name: "Capuchino",
            reference: "CP2002",
            price: 3500,
            weight: 250,
            category: "Bebidas",
            stock: 15,
            createdAt: "2024-12-22T04:08:55.721Z"
        },
        {
            id: "a4a71fc9-5003-4750-8018-b2a3408d498a",
            name: "Croissant",
            reference: "CR3003",
            price: 2000,
            weight: 100,
            category: "Panadería",
            stock: 25,
            createdAt: "2024-12-22T04:08:55.721Z"
        },
        {
            id: "9d79cd07-fb63-4708-bff3-ac728057e5cb",
            name: "Tarta de Queso",
            reference: "TQ4004",
            price: 4500,
            weight: 200,
            category: "Postres",
            stock: 10,
            createdAt: "2024-12-22T04:08:55.721Z"
        },
        {
            id: "1bbff8ba-86c8-4bf1-a60e-ddc4144d3367",
            name: "Sandwich Jamón y Queso",
            reference: "SJ5005",
            price: 4000,
            weight: 300,
            category: "Snacks",
            stock: 18,
            createdAt: "2024-12-22T04:08:55.721Z"
        }
    ];

    return (
        <>
            <section className="bg-white p-6 rounded-3xl shadow-lg mb-6">
                <div className="mb-4 flex justify-between items-center">
                    <h2 className="text-xl font-bold mb-4">Inventario</h2>
                    <Link to="/products/create" className="bg-blue-500 text-white font-bold py-2 px-4 rounded-3xl">Agregar Producto</Link>
                </div>
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
                        {
                            products.map(product => (
                                <tr key={product.id}>
                                    <td className="border-b border-gray-200 px-4 py-2">{product.reference}</td>
                                    <td className="border-b border-gray-200 px-4 py-2">{product.name}</td>
                                    <td className="border-b border-gray-200 px-4 py-2">{product.price}</td>
                                    <td className="border-b border-gray-200 px-4 py-2">{product.weight}</td>
                                    <td className="border-b border-gray-200 px-4 py-2">{product.category}</td>
                                    <td className="border-b border-gray-200 px-4 py-2">{product.stock}</td>
                                    <td className="border-b border-gray-200 px-4 py-2 flex justify-around">
                                        <ActionButton
                                            color={ButtonColor.BLUE}
                                            label="Edit"
                                            onClick={() => openModal(product)}
                                        />
                                        <ActionButton
                                            color={ButtonColor.RED}
                                            label="Delete"
                                            onClick={() => openDeleteModal(product)}
                                        />
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </section>
            {isModalOpen && (
                <EditProductModal product={selectedProduct} onClose={closeModal} />
            )}
            {isDeleteModalOpen && (
                <DeleteProductModal product={selectedProduct} onClose={closeDeleteModal} onConfirm={confirmDelete} />
            )}
        </>
    );
};
