import { Navigate, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { salesStore } from "./sales.store";
import { SalesPage } from "./sales.page";

export default function SalesRoutes() {
    return (

        <Provider store={salesStore}>
            <Routes>
                <Route path="/" element={<SalesPage />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Provider>


    );
}