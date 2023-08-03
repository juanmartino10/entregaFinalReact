import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
export const Item = ({ id, nombre, precio, img, stock }) => {
    return (
                    <Card style={{ width: '18rem' }} className="d-inline-block m-2 bg-secondary border-dark text-center align-items-center">
                        <Card.Img img src={img} alt={nombre} variant="top" />
                        <Card.Body>
                            <Card.Title>Nombre: {nombre}</Card.Title>
                            <Card.Text>Precio: ${precio}</Card.Text>
                            <Card.Text>Stock: {stock}</Card.Text>
                            <Card.Text>ID: {id}</Card.Text>
                            <Link to={`/item/${id}`}><Button variant="dark">Ver mas</Button></Link>
                        </Card.Body>
                    </Card>
    );
}

export default Item;
