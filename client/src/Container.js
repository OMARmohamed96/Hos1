import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, ButtonToolbar } from 'react-bootstrap/lib/'
import Chart from './ChartContainer/ChartContainer'

class Container extends Component {

    state = {
        showSellProducts: false,
        showAddToStock: false,
        showInventory: false,
        showCreateProduct: false,
        showOrders: false
    }

    
    showInventory = () => {
        this.props.hideChart()
        this.setState({
            showSellProducts: false,
            showAddToStock: false,
            showInventory: true,
            showCreateProduct: false,
            showOrders: false
        })
    }

    showCreateProduct = () => {
        this.props.hideChart()
        this.setState({
            showSellProducts: false,
            showAddToStock: false,
            showInventory: false,
            showCreateProduct: true,
            showOrders: false
        })
    }


    render() {
        return ( 
            <div className='container'>
                {this.props.showLogin ? <LoginContainer /> : null}
                {this.props.showCreateAccount ? <CreateAccountContainer /> : null}
                {this.props.isAuthed ?
                <div>
                    <ButtonToolbar style={{ justifyContent: "center", display: "flex" }}>
                        
                        
                        <Button bsStyle="info" bsSize="large" onClick={this.showInventory}>
                            View Inventory
                        </Button>
                        <Button bsStyle="success" bsSize="large" onClick={this.showCreateProduct}>
                            Create New Product
                        </Button>
                        </ButtonToolbar>

                    {this.props.showContainers ? 
                    <div>
                        {this.state.showAddToStock ? <AddToStockButtons /> : null}
                        {this.state.showInventory ? <Inventory /> : null}
                        {this.state.showCreateProduct ? <CreateProduct /> : null}
                    </div>
                    : null}
                     </div>
                : null}
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        isAuthed: state.auth.isAuthed,
        showChart: state.auth.showChart,
        showContainers: state.auth.showContainers
    }
}

const mapDispatchToProps = dispatch => {
    return {
        hideChart: () => dispatch(actionTypes.hideChart())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)