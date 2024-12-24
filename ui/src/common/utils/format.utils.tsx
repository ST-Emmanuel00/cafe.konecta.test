export const formatPrice = (price: number): string => {
    return `$${price.toFixed(2)}`;
};

export const formatWeight = (weight: number): string => {
    return `${weight} kg`;
};

export const formatStock = (stock: number): string => {
    return `${stock} units`;
};
