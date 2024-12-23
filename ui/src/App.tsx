import { Navigate, Route, Routes } from "react-router-dom";
import { CommonLayout } from "./common/layout";
import { SalesPage } from "./modules/sales/sales.page";
import ProductRoutes from "./modules/products/products.routes";
export default function App() {
  return (
    <CommonLayout>

      <Routes>
        <Route path="/products/*" element={<ProductRoutes />} />

        <Route path="/sales" element={<SalesPage />} />
        <Route path="*" element={<Navigate to="/sales" />} />
      </Routes>


    </CommonLayout>
  );
}