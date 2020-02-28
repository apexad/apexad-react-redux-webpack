import React, { Component } from "react";
import { connect } from 'react-redux';
import { testFetch } from '../actions/test';

class App extends Component {
  constructor() {
    super();

    this.state = {
      value: ""
    };
  }

  componentDidMount() {
    this.props.testFetch();
  }

  render() {
    return (
      <div>
        <h1>Test</h1>
        {this.props.test.error && <p>Did you run npm start:server?</p>}
        <ul>
        {
          this.props.test.test.map(item => {
            return <li key={item.name}>{item.name} - {item.data}</li>
          })
        }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  test: state.testReducer,
 })

 const mapDispatchToProps = dispatch => ({
  testFetch: () => dispatch(testFetch())
 })

 export default connect(mapStateToProps, mapDispatchToProps)(App);
