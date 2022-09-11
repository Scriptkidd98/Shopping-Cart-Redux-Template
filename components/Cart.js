import React, {Component} from 'react';
import './redux/index';
import {itemRemoved, logOut, itemAdded} from './redux/actions';
import { connect } from 'react-redux';
import './myStyles.css';
import {Container, Nav, Row, Col} from "react-bootstrap";
import 'bootstraps/dist/css/bootstrap.css';


class Cart extends Component {
    constructor(props){
      super(props);
      console.log("Props", props.item);
      this.state = {
          count: {}
      }
    }
    render() {
      const quantity = {};
      return(
        <div> 
          <div className="body">

            <div className="user">
              {this.props.item.user.userID}'s Cart <button onClick={() => this.props.logOut(this.props.item.user.userID)}>Log Out</button>
            </div>

              <Container fluid className="">
                <Row>
                  <Col xs={12} md={12} lg={8} className="products-plain">
                    <div className="products">
                      <Container fluid className="removepadding">
                        <Row>
                          <Col xs={6} md={6} lg={6}>
                            <h1>Shopping Cart</h1>
                          </Col>
                          <Col xs={6} md={6} lg={6}>
                            <div className="">
                              { //Check if message failed
                                (Object.entries(this.props.item.cart).length > 1)
                                  ? <h2 className="items"> {Object.entries(this.props.item.cart).length} items </h2> 
                                  : <h2 className="items"> {Object.entries(this.props.item.cart).length} item </h2>  
                              }
                            </div>
                          </Col>
                        </Row>
                      </Container>
                      <hr></hr>
                      <div>

                        <div className="productheader">
                          <Container fluid className="removepadding">
                            <Row>
                              <Col lg={3} md={3} xs={3}>
                                <p>PRODUCT DETAILS</p>
                              </Col>
                              <Col lg={3} md={3} xs={3} className="product-header-each">
                                <p>PRICE</p>
                              </Col>
                              <Col lg={3} md={3} xs={3} className="product-header-each">
                                <p>QUANTITY</p>
                              </Col>
                              <Col lg={3} md={3} xs={3} className="product-header-each">
                                <p>TOTAL</p>
                              </Col>
                            </Row>
                          </Container>
                        </div>

                        {Object.entries(this.props.item.cart).map(([key, value]) => {
                          return (
                            <React.Fragment key={key}>
                                <Container fluid className="productbody">
                                  <Row>
                                    <Col lg={3} md={3} xs={3}>
                                      <p>{value}</p>
                                    </Col>
                                    <Col lg={3} md={3} xs={3} className="product-header-each">
                                      ${this.props.item.inventory[value]}
                                    </Col>
                                    <Col lg={3} md={3} xs={3} className="product-header-each">
                                      <span>1</span>
                                    </Col>
                                    <Col lg={3} md={3} xs={3} className="product-header-each">
                                      ${this.props.item.inventory[value] * 1}
                                    </Col>
                                    <Col lg={3} md={3} xs={3}>
                                      <button onClick={() => this.props.itemRemoved(key)}>Remove</button>
                                    </Col>
                                  </Row>
                                </Container>
                            </React.Fragment>
                          );
                        })}

                      </div>
                      <p className="continue-shopping-para">
                        <a href="#" className="continue-shopping">Continue shopping</a>
                      </p>
                    </div>  
                  </Col>
                  <Col xs={12} md={12} lg={4} className="order-summary-colored">
                    <div className="checkout">
                        <h2 className="order-summary">Order Summary</h2>
                        <hr></hr>
                    </div>
                  </Col>
                </Row>
              </Container>
          </div>
        </div>
      );
    }
}

const mapStateToProps = function(state) {
    console.log("State", state);
    return {
      item: state,
    }
}

const mapDispatchToProps = function(dispatch) {
  return {
    itemRemoved: item => dispatch(itemRemoved(item)),
    logOut: item => dispatch(logOut(item)),
    itemAdded: item => dispatch(itemAdded(item))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);