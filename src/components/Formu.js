import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import { uploadImage } from '../helpers/uploadImage';
import { endPoint } from '../helpers/Url';
import { ListContainer } from '../styles/Styles';

export default class Formu extends Component {

    constructor() {
        super();
        this.state = {
            form: {
                id: '',
                marca: '',
                modelo: '',
                estado: '',
                precio: '',
                ubicacion: '',
                imagen: ''
            }
        }
    }

    handleInputChange = ({ target }) => {
        this.setState({
            form: {
                ...this.state.form,
                [target.name]: target.value
            }
        })
        console.log(this.state.form)
    }


    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.form);
        this.addProduct();
    }

    addProduct = async () => {
        const data = await fetch(endPoint,{
            method: 'POST',
            body: JSON.stringify(this.state.form),
            headers: {
             "Content-Type": "application/json; charset=UTF-8"
            }
        })
        console.log(data)
    }

    handleFileChange = (e) => {
        const file = e.target.files[0];
        uploadImage(file)
        .then(response => {
            this.setState.form.imagen = response;
        }).catch(error => {
            console.log(error.message)
        }) 
    }
  render() {

    return <ListContainer className='px-5 py-5 mt-5'>
        <h1>Registre su Vehiculo</h1>
            <Form onSubmit={this.handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Marca del Vehiculo</Form.Label>
                <Form.Control type="text" placeholder="Ej: Mazda-Chevrolet-etc" onChange={this.handleInputChange} 
                name="marca"  />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Modelo del Vehiculo</Form.Label>
                <Form.Control type="text" placeholder="Ej: Aveo GT 2021" onChange={this.handleInputChange}
                name="modelo" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Precio del Vehiculo</Form.Label>
                <Form.Control type="text" placeholder="Ej: 15.000.000" onChange={this.handleInputChange}
                name="precio" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Ubicacion del Vehiculo</Form.Label>
                <Form.Control type="text" placeholder="Ej: Medellín" onChange={this.handleInputChange}
                name="ubicacion" />
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-3">
                <Form.Select aria-label="Default select example" onChange={this.handleInputChange}
                name="estado" >
                    <option>Estado de tu Vehiculo</option>
                    <option value="Nuevo">Nuevo</option>
                    <option value="Usado">Usado</option>
                    
                </Form.Select>
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Fotografia del Vehiculo</Form.Label>
                <Form.Control type="file" onChange={this.handleFileChange}
                name="imagen" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Enviar registro
            </Button>
            </Form>
    </ListContainer>;
  }
}
