import { Navigate, Route, Routes } from "react-router-dom";
import { CommonLayout } from "./common/layout";
import { CreateProductPage, ProductPage } from "./modules/products/pages";
import { SalesPage } from "./modules/sales/sales.page";
export default function App() {
  return (
    <CommonLayout>

      <Routes>
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/create" element={<CreateProductPage />} />

        <Route path="/sales" element={<SalesPage />} />
        <Route path="*" element={<Navigate to="/sales" />} />
      </Routes>


    </CommonLayout>
  );
}