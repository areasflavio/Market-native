import React, {
	createContext,
	useState,
	useCallback,
	useContext,
	useEffect,
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

interface Product {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
	quantity: number;
}

interface CartContext {
	products: Product[];
	addToCart(item: Omit<Product, 'quantity'>): void;
	increment(id: string): void;
	decrement(id: string): void;
}

const CartContext = createContext<CartContext | null>(null);

const CartProvider: React.FC = ({ children }) => {
	const [products, setProducts] = useState<Product[]>([]);

	useEffect(() => {
		async function loadProducts(): Promise<void> {
			const storageProducts = await AsyncStorage.getItem(
				'@Marketnative:products'
			);

			if (storageProducts) {
				setProducts([...JSON.parse(storageProducts)]);
			}
		}

		loadProducts();
	}, []);

	const addToCart = useCallback(
		async product => {
			const productExists = products.find(prod => prod.id === product.id);

			if (productExists) {
				setProducts(
					products.map(prod =>
						prod.id === product.id
							? { ...product, quantity: prod.quantity + 1 }
							: prod
					)
				);
			} else {
				setProducts([...products, { ...product, quantity: 1 }]);
			}

			await AsyncStorage.setItem(
				'@Marketnative:products',
				JSON.stringify(products)
			);
		},
		[products]
	);

	const increment = useCallback(
		async id => {
			setProducts(
				products.map(product =>
					product.id === id
						? { ...product, quantity: product.quantity + 1 }
						: product
				)
			);
		},
		[products]
	);

	const decrement = useCallback(
		async id => {
			const existProduct = products.find(product => product.id === id);

			if (existProduct) {
				if (existProduct.quantity > 1) {
					setProducts(
						products.map(product =>
							product.id === existProduct.id
								? {
										...existProduct,
										quantity: existProduct.quantity - 1,
								  }
								: product
						)
					);
				} else {
					setProducts(
						products.filter(product => product.id !== existProduct.id)
					);
				}
			}
		},
		[products]
	);

	const value = React.useMemo(
		() => ({ addToCart, increment, decrement, products }),
		[products, addToCart, increment, decrement]
	);

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

function useCart(): CartContext {
	const context = useContext(CartContext);

	if (!context) {
		throw new Error(`useCart must be used within a CartProvider`);
	}

	return context;
}

export { CartProvider, useCart };
