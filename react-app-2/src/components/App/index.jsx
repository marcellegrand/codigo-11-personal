import { Header } from '../Header';
import { Main } from '../Main';
import { Footer } from '../Footer';
import { Card } from '../Card';

import './app.css';

function App() {
  const fruits = [
    {
      photo: 'https://picsum.photos/150/150?grayscale',
      title: 'Naranja huando',
      price: 'S/. 3.50',
      stock: 0
    },
    {
      photo: 'https://picsum.photos/150/150?grayscale',
      title: 'Plátano de seda',
      price: 'S/. 4.50',
      stock: 0
    },
    {
      photo: 'https://picsum.photos/150/150?grayscale',
      title: 'Palta fuerte',
      price: 'S/. 6.50',
      stock: 0
    },
    {
      photo: 'https://picsum.photos/150/150?grayscale',
      title: 'Papaya norteña',
      price: 'S/. 7.50',
      stock: 0
    },
    {
      photo: 'https://picsum.photos/150/150?grayscale',
      title: 'Granadilla dulce',
      price: 'S/. 8.50',
      stock: 0
    },
    {
      photo: 'https://picsum.photos/150/150?grayscale',
      title: 'Pera de agua',
      price: 'S/. 2.50',
      stock: 0
    },
    {
      photo: 'https://picsum.photos/150/150?grayscale',
      title: 'Mango fuerte',
      price: 'S/. 1.50',
      stock: 0
    },
    {
      photo: 'https://picsum.photos/150/150?grayscale',
      title: 'Manzana israel',
      price: 'S/. 9.50',
      stock: 0
    }
  ];

  return (
    <div>
      <Header />
      <Main>
        {fruits.map((fruit) => (
          <Card 
            photo={fruit.photo}
            title={fruit.title}
            price={fruit.price}
            stock={fruit.stock}           
          />
        ))};
      </Main>
      <Footer />
    </div>
  );
};

export { App };
