import { ProductForm, ProductList, EditProductModal, DeleteProductModal } from "../components";
import { useSelector } from 'react-redux';
import { IProductState } from "../product.slice";

export const ProductPage = () => {
  const { isEditModalOpen, isDeleteModalOpen }: IProductState = useSelector((state: any) => state.products);

  return (<>
    <div className="flex flex-col md:flex-row justify-between">
      <div className="w-full p-2">
        <ProductList />
      </div>
      <div className="w-full md:w-1/3 p-2">
        <ProductForm />
      </div>
    </div>
    {isEditModalOpen && <EditProductModal />}
    {isDeleteModalOpen && <DeleteProductModal />}
  </>
  );
}
