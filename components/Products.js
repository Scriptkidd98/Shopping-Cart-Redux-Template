import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import store from './redux/store';
import { itemAdded } from './redux/actions';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstraps/dist/css/bootstrap.css';

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render() {
        return(
            <div>
                <Link to="/Cart">Go to cart</Link>

                {Object.entries(this.props.item.inventory).map(([key, value])  =>  {
                    return(
                        <React.Fragment key={key}>
                            <Container fluid>
                                <Row>
                                    <Col xs={8} md={4} lg={4}>
                                        <p>{key}</p>
                                        <p>{value}</p>
                                    </Col>
                                    <Col xs={4} md={6} lg={6}>
                                        <button onClick={() => store.dispatch(itemAdded(key))}>Add to cart</button>
                                    </Col>
                                </Row>
                            </Container>
                        </React.Fragment>
                    );
                })};
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
      
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Products);