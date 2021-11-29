import './cart.css';
import imgCart from './cart.svg';

function Cart() {
    return (
        <div className="cart">
            <img className="cart__image" src={imgCart} alt='Cart'></img>
            <button className="cart__quantity">10</button>
        </div>
    );
};

export { Cart };