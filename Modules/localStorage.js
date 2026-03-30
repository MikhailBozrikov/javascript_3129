export const setProducts = (products) => localStorage.setItem('products', JSON.stringify(products));
export const getProducts = () => JSON.parse(localStorage.getItem('products')) || [];
