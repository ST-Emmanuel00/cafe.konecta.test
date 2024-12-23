import { ProductForm, ProductList } from "../components"

export const ProductPage = () => {
  return (
    <div className="flex justify-between">
      <ProductList />
      <ProductForm />
    </div>
  )
}
