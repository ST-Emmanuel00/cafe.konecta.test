import { ProductForm } from './product.form.component';
import { Product } from '../types';

interface EditProductModalProps {
    product: Product | undefined;
    onClose: () => void;
}

export const EditProductModal = ({ product, onClose }: EditProductModalProps) => {
    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
            <ProductForm productData={product} />
            <button onClick={onClose} className="absolute top-4 right-4 bg-gray-500 text-white font-bold py-2 px-4 rounded-3xl">Close</button>
        </div>
    );
};
