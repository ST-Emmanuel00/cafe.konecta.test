import { Navigate, Route, Routes } from "react-router-dom";
import { CreateProductPage, ProductPage } from "./pages";
import { Provider } from "react-redux";
import { productStore } from "./products.store";

export default function ProductRoutes() {
    return (

        <Provider store={productStore}>

            <Routes>
                <Route path="/" element={<ProductPage />} />
                <Route path="/create" element={<CreateProductPage />} />
                <Route path="*" element={<Navigate to="/" />} />


            </Routes>
        </Provider>


    );
}