import { ProductsAllowListCompoment, SaleFormComponent, SalesListComponent } from "./components"

export const SalesPage = () => {
    return (
        <>

            <div className="flex flex-col md:flex-row justify-between">
                <div className="w-full p-2">
                    <ProductsAllowListCompoment />
                </div>
                <div className="w-full md:w-1/3 p-2">
                    <SaleFormComponent />
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between">
                <SalesListComponent />

            </div>
        </>
    )
}
