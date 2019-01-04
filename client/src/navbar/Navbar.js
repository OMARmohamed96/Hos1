import React, { Component } from 'react'
import { Navbar, Nav, NavItem} from 'react-bootstrap/lib/'

class Navigation extends Component {

    render() {
        
        return (
            <div> 
                <Navbar collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a>Inventory Manager</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            
                            <NavItem eventKey={3} onClick={this.props.logout}>
                                    Logout
                             </NavItem>
                             
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}



const mapDispatchToProps = dispatch => {
    return {
       
        logout: () => dispatch(actionTypes.authLogout()),
       
            }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)


