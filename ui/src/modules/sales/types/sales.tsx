import { Product } from "../../products/types";

export interface Sale {
    id: string;
    quantity: number;
    soldAt: string;
    productId: string;
    product: Product;
    total: number;
}
