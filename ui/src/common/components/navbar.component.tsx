import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <nav className="p-4 shadow-sm bg-white">
            <div className="container mx-auto flex justify-between items-center">
                <img src="https://th.bing.com/th/id/R.283c1ca1b7db46617327cde50b2dcfbd?rik=Z7BUVWHh2nnnCw&pid=ImgRaw&r=0" alt="Logo" className="h-8 w-auto" />
                <ul className="flex space-x-4  text-amber-950">
                    <Link to="/products" className=" hover:text-amber-900">Inventario</Link>
                    <Link to="/sales" className=" hover:text-amber-900">Ventas</Link>
                    
                </ul>
            </div>
        </nav>
    )
}
