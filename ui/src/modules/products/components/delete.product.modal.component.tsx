import { Product } from '../types';

interface DeleteProductModalProps {
    product: Product | undefined;
    onClose: () => void;
    onConfirm: () => void;
}

export const DeleteProductModal = ({ product, onClose, onConfirm }: DeleteProductModalProps) => {
    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-3xl shadow-lg">
                <h2 className="text-xl font-bold mb-4">Confirm Delete</h2>
                <p>Are you sure you want to delete {product?.name}?</p>
                <div className="flex justify-end mt-4">
                    <button
                        className="bg-red-500 text-white font-bold py-2 px-4 rounded-3xl mr-2"
                        onClick={onConfirm}
                    >
                        Delete
                    </button>
                    <button
                        className="bg-gray-500 text-white font-bold py-2 px-4 rounded-3xl"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};
