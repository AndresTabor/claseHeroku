
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { endPoint } from '../helpers/Url';
import { ListContainer } from '../styles/Styles';

export default class List extends Component {

    constructor(){
        super();
        this.state = {
            cars: []
        }
    }
    componentDidMount() {
        this.getData();
    }

    async getData() {
        const response = await fetch(endPoint);
        const data = await response.json();
        this.setState({ cars: data })
        //console.log(data);
    }

    
    render() {
        const state = this.state.cars;
        return <ListContainer>
            <table className="table text-center mt-5">
                <thead>
                    <tr>
                        <th scope="col">Imagen</th>
                        <th scope="col">Descripción</th>
                        <th scope="col">Precio</th>
                    </tr>
                </thead>
                    <tbody>
                        {
                            state.map(product => (
                                <tr key={product.id} className='fs-2'>
                                    <td><img src={product.imagen}  height="100" alt=""/></td>
                                    <td>{product.marca} {product.modelo}</td>
                                    <td>$ {product.precio}</td>
                                </tr>
                            ))

                        }
                    </tbody>                                  
            </table>
            <div className='d-flex w-100 justify-content-center'>
                <Link to="/form">
                    <Button variant="primary" size="lg" className='mt-3' active>
                    Añadir Producto
                    </Button>
                </Link>
            </div>
        </ListContainer>;
  }
}
