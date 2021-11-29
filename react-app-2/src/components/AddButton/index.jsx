import './addbutton.css';

function AddButton(props) {
    const { children } = props;
    return <button className='addbutton'>{children}</button>;
};

export { AddButton };