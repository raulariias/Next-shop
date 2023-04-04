import ProductItem from '@/components/ProductItem';
import useGetProducts from '@/hooks/useGetProducts';
import styles from '@/styles/ProductList.module.scss';

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {
	const products = useGetProducts(API);

	return (
		<section className={styles["main-container"]}>
			<div className={styles["ProductList"]}>
				{products.map(product => {
					if (product.images.length > 0
						&& product.id < 50
						&& product.images[0] !== '' 
						&& product.images[0] !== 'asdfa'
						&& product.images[0] !== 'asdfaf'
						&& product.images[0] !== 'hjk'
						&& product.images[0] !== 'none'
						&& product.images[0] !== 'ggggg'
						&& !product.images[0].includes("Fklrenfgn.com")
						&& !product.images[0].includes("https://cdn1.coppel.com/images/catalog/pm/")          
  					) {
						return (
							<ProductItem product={product} key={ product.id } />
						);
					}
				})}
			</div>
		</section>
	);
};

export default ProductList;