import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import { Button } from 'react-bootstrap';
import filterFactory, { textFilter, Comparator } from 'react-bootstrap-table2-filter';
import { connect } from 'react-redux';
import { getProducts, addProduct, removeProduct } from '../actions/productActions';
import PropTypes from 'prop-types';

import NewProductModal from './NewProductModal';

class Inventory extends Component {

  constructor(props) {
    super(props);

    this.editProduct = this.editProduct.bind(this);
  }

  componentDidMount() {
  	this.props.dispatch(getProducts());
  }


  editProduct(product) {
    // this.setState({ modalOpen: true });
    console.log("Opening modal");
  }

  deleteProduct(product) {
    console.log(product);
    this.props.dispatch(removeProduct(product._id));
  }

  editButtonFormatter(cell, row, rowIndex, formatExtraData) {
    return (
      <div>
        <Button bsStyle="warning" onClick={() => formatExtraData.src.editProduct(row)}>Edit Product</Button>
      </div>
    );
  }

  deleteButtonFormatter(cell, row, rowIndex, formatExtraData) {
    return (
      <Button bsStyle="danger" onClick={() => formatExtraData.src.deleteProduct(row)}>Delete Product</Button>
    );
  }

  idFormatter(cell, row, rowIndex, formatExtraData) {
    return (
      <div>{rowIndex + 1}</div>
    );
  }

  columns = [{
      dataField: '_id',
      text: 'Id',
      formatter: this.idFormatter,
      formatExtraData: {
        src: this
      },
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
    }, /*{
    dataField: 'edit',
    text: 'Edit',
    formatter: this.editButtonFormatter,
    formatExtraData: {
      src: this
    }
  },*/ {
    dataField: 'delete',
    text: 'Delete',
    formatter: this.deleteButtonFormatter,
    formatExtraData: {
      src: this
    }
  }
  ];

  render() {
    console.log("Inventory");
    const { products } = this.props.products;

    return (
      <div>
        <NewProductModal />
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

export default connect(mapStateToProps, null)(Inventory);
