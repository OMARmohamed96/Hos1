import React, { Component } from 'react';
import {
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addProduct } from '../actions/productActions';
import PropTypes from 'prop-types';

class NewProductModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      productName: '',
      description: '',
      quantity: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAddProduct = this.handleAddProduct.bind(this);
  }

  toggle = () => {
    this.setState({
      modalOpen:!this.state.modalOpen
    });
  }

  handleChange = e => {
    console.log(e.target);
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();

    const newProduct = {
      name: this.state.productName,
      description: this.state.description,
      quantity: this.state.quantity
    };

    // Add item via addItem action
    this.props.addProduct(newProduct);

    // Close Modal
    this.toggle();
  }

  handleAddProduct(e) {
    e.preventDefault()
    console.log("Trying to add a product now!")
    console.log(this.props);
    this.toggle();
    const { productName, description, quantity } = this.state;
    this.props.dispatch(addProduct({productName, description, quantity}));

  }

  render() {
    const { modalOpen } = this.state;
    return (
      <div>
        <Button bsStyle="success" onClick={this.handleAddProduct}>Add product</Button>
        <Modal isOpen={modalOpen} onClose={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            <div className="container text-center">
               <h1>Add New Product</h1>
            </div>
          </ModalHeader>
          <ModalBody>
            <form onSubmit={this.handleAddProduct} className="FormFields">
              <div className="FormField">
                <label className="FormField__Label" htmlFor="productName">Product Name</label>
                <input type="text" id="name" className="FormField__Input" placeholder="Product Name..." name="productName" value={this.state.productName} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="description">Description</label>
                <input type="text" id="description" className="FormField__Input" placeholder="description..." name="description" value={this.state.description} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="quantity">Quantity</label>
                <input type="text" id="quantity" className="FormField__Input" placeholder="Quantity..." name="quantity" value={this.state.quantity} onChange={this.handleChange} />
              </div>
              <Button
                type="submit"
                fullWidth
                variant="raised"
                color="primary"
              >
                Add New Product
              </Button>
            </form>
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

});

NewProductModal.propTypes = {
  dispatch: PropTypes.func
};

export default connect(mapStateToProps, null)(NewProductModal);
