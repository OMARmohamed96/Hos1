import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import { Button } from 'react-bootstrap';
import filterFactory, { textFilter, Comparator } from 'react-bootstrap-table2-filter';
import { connect } from 'react-redux';
import { getProducts, addProduct } from '../actions/productActions';
import PropTypes from 'prop-types';


class Inventory extends Component {

  constructor(props) {
    super(props);
    this.handleAddProduct = this.handleAddProduct.bind(this);
  }

  componentDidMount() {
  	this.props.dispatch(getProducts());
  }

  columns = [{
      dataField: 'id',
      text: 'Id',
      classes: 'grey-text text-center',
      filter: textFilter({
        comparator: Comparator.LIKE
      })
    }, {
      dataField: 'name',
      text: 'Name',
      classes: 'grey-text text-center',
      filter: textFilter({
        comparator: Comparator.LIKE
      })
    }, {
      dataField: 'description',
      text: 'Description',
      classes: 'grey-text text-center',
      filter: textFilter({
        comparator: Comparator.LIKE
      })
    }, {
      dataField: 'quantity',
      text: 'Quantity',
      classes: 'grey-text text-center',
      filter: textFilter({
        comparator: Comparator.LIKE
      })
    }
    , {
      dataField: 'Edit Prodcut',
      text: 'Edit',
      classes: 'grey-text text-center',
      filter: textFilter({
        comparator: Comparator.LIKE
      })
    }, {
      dataField: 'Delete Product',
      text: 'Delete',
      classes: 'grey-text text-center',
      filter: textFilter({
        comparator: Comparator.LIKE
      })
    }
  ];

  handleAddProduct() {
    console.log("Button pressed")
    console.log("Props")
    console.log(this.props);
    this.props.dispatch(addProduct({name: 'product 4', description: 'a7la product fl dnya', quantity: '4444'}));
  }


  render() {
    console.log("Inventory")
    const { products } = this.props.products;
    console.log(products);
    return (
      <div>
        <Button bsStyle="success" onClick={this.handleAddProduct}>Add product</Button>
        <BootstrapTable
              keyField='_id'
              data={ products }
              columns={ this.columns }
              hover	
              condensed
              bordered={ false }
              condensed
              filter={ filterFactory() }>
            </BootstrapTable>
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  products: state.products
});

Inventory.propTypes = {
  products: PropTypes.object,
  dispatch: PropTypes.func
};

export default connect(mapStateToProps,null)(Inventory);
