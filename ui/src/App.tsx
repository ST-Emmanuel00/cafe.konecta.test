import { Navigate, Route, Routes } from "react-router-dom";
import { CommonLayout } from "./common/layout";
import ProductRoutes from "./modules/products/products.routes";
import SalesRoutes from "./modules/sales/sales.routes";

export default function App() {

  return (
    <CommonLayout>

      <Routes>
        <Route path="/products/*" element={<ProductRoutes />} />
        <Route path="/sales" element={<SalesRoutes />} />
        <Route path="*" element={<Navigate to="/sales" />} />
      </Routes>


    </CommonLayout>
  );
}