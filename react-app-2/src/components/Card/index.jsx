import './card.css';

function Card(props) {
    const {
        photo = '',
        title = '',
        price = '',
        stock = ''
    } = props;

    return (
        <article className="card">
            <figure className="card__figure">
                <img src={photo} alt={title} />
            </figure>
            <div className="card__detail">
                <h2>{title}</h2>
                <h3>Precio: {price}</h3>
                <h3>Stock: {stock}</h3>
            </div>
            <div className="card__quantity">

            </div>
        </article>
    );
}

export { Card };