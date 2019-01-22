import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import { Button } from 'react-bootstrap';
import filterFactory, { textFilter, Comparator } from 'react-bootstrap-table2-filter';
import { connect } from 'react-redux';
import { getProducts, addProduct } from '../actions/productActions';

class Inventory extends Component {

  constructor(props) {
    super(props);
    this.handleAddProduct = this.handleAddProduct.bind(this);
  }

  componentDidMount() {
    this.props.getProducts();
  }

  columns = [{
      dataField: 'Id',
      text: 'Id',
      classes: 'grey-text text-center',
      filter: textFilter({
        comparator: Comparator.LIKE
      })
    }, {
      dataField: 'Name',
      text: 'User Type',
      classes: 'grey-text text-center',
      filter: textFilter({
        comparator: Comparator.LIKE
      })
    }, {
      dataField: 'Description',
      text: 'User Type',
      classes: 'grey-text text-center',
      filter: textFilter({
        comparator: Comparator.LIKE
      })
    }, {
      dataField: 'Quantity',
      text: 'User Type',
      classes: 'grey-text text-center',
      filter: textFilter({
        comparator: Comparator.LIKE
      })
    }, {
      dataField: 'Edit Prodcut',
      text: 'User Type',
      classes: 'grey-text text-center',
      filter: textFilter({
        comparator: Comparator.LIKE
      })
    }, {
      dataField: 'Delete Product',
      text: 'User Type',
      classes: 'grey-text text-center',
      filter: textFilter({
        comparator: Comparator.LIKE
      })
    }
  ];

  handleAddProduct() {
    console.log(this)
    console.log("Button pressed")
    this.props.dispatch(this.props.addProduct({name: 'product 1', description: 'a7la product', quantity: '33333'}));
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

export default connect(mapStateToProps, { getProducts, addProduct })(Inventory);
