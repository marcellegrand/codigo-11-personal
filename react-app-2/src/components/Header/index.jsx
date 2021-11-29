import './header.css';
import { AddButton } from '../AddButton';
import { Cart } from '../Cart';

function Header() {
    return (
        <header className='header'>
            <div className='left'><p>SHOPPING CART</p></div>
            <div className='right'>
                <AddButton>Agregar producto</AddButton>
                <Cart />
            </div>
        </header>
    );
};

export { Header };