import { ListSalesComponent, SaleFormComponent } from "./components"

export const SalesPage = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row justify-between">

                <ListSalesComponent />
                <SaleFormComponent />
            </div>
        </>
    )
}
