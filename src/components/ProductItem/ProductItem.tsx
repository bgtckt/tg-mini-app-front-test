import { Product } from "../ProductList/ProductList";
import './ProductItem.css';

type Props = {
  product: Product;
  className: string;
  onAdd: (product: Product) => void;
};

const ProductItem = ({ product, className, onAdd }: Props) => {

    const onAddHandler = () => {
        onAdd(product);
    }

    return (
        <div className={'product ' + className}>
            <div className={'img'}/>
            <div className={'title'}>{product.title}</div>
            <div className={'description'}>{product.description}</div>
            <div className={'price'}>
                <span>Стоимость: <b>{product.price}</b></span>
            </div>
            <button type="button" className={'add-btn'} onClick={onAddHandler}>
                Добавить в корзину
            </button>
        </div>
    );
};

export default ProductItem;