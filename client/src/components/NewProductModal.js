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
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

import { connect } from 'react-redux';
import { addProduct } from '../actions/productActions';
import PropTypes from 'prop-types';

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

class NewProductModal extends Component {
  componentDidMount() {
    // Adding custom validation rules
    ValidatorForm.addValidationRule('isValidProductName', (value) => {
      return value.length > 0;
    });

    ValidatorForm.addValidationRule('isValidDescription', (value) => {
      return value.length > 0;
    });

    ValidatorForm.addValidationRule('isValidQuantity', (value) => {
      return !Number.isInteger(value) && value > 0;
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      productName: '',
      description: '',
      quantity: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleAddProduct = this.handleAddProduct.bind(this);
  }

  toggle = () => {
    this.setState({
      modalOpen:!this.state.modalOpen
    });
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleAddProduct = e => {
    e.preventDefault()


    const { productName, description, quantity } = this.state;
    this.props.dispatch(addProduct({productName, description, quantity}));
    this.toggle();
  }

  render() {
    const { modalOpen } = this.state;
    const { classes } = this.props;
    return (
      <div>
        <Button variant="contained" color="primary" className={classes.button} onClick={this.toggle}>Add Product</Button>
        <Modal isOpen={modalOpen} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            <div className="container text-center">
               <div style={{marginTop: '1 rem'}}>Add New Product</div>
            </div>
          </ModalHeader>
          <ModalBody>
            <ValidatorForm ref="form" className={classes.form} onSubmit={this.handleAddProduct} onError={errors => console.log(errors)}>
              <TextValidator
                label="Product Name"
                onChange={this.handleChange}
                name="productName"
                value={ this.state.productName }
                validators={['required', 'isValidProductName']}
                errorMessages={['Product Name is required!', 'Invalid product name!']}
                margin="normal"
                required
                fullWidth
                autoComplete="Product Name"
                autoFocus
              />
              <TextValidator
                label="Description"
                onChange={this.handleChange}
                name="description"
                value={ this.state.description }
                validators={['required', 'isValidDescription']}
                errorMessages={['Description is required!', 'Invalid description!']}
                margin="normal"
                required
                fullWidth
                autoComplete="Description"
              />
              <TextValidator
                label="Quantity"
                onChange={this.handleChange}
                name="quantity"
                value={ this.state.quantity }
                validators={['required', 'isValidQuantity']}
                errorMessages={['Quantity is required!', 'Invalid quantity!']}
                margin="normal"
                required
                fullWidth
                autoComplete="Product Name"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Add New Product
              </Button>
            </ValidatorForm>
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

export default connect(mapStateToProps, null)(withStyles(styles)(NewProductModal));
