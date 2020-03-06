import React, { useEffect, useState } from 'react';
import './App.css';
// import { render } from '@testing-library/react';

function App() {
  return (
    <div className="container">
      <h1>hello world</h1>
      <FuncComp initNumber={2} />
      <ClassComp initNumber={2} />
    </div>
  );
}
/***********/
let funcId = 0;
function FuncComp(props) {
  const numberState = useState(props.initNumber);
  const number = numberState[0];
  const setNumber = numberState[1];

  const [_date, setDate] = useState(new Date().toString());
  // const dateState = useState(new Date().toString());
  // const _date = dateState[0];
  // const setDate = dateState[1];

  useEffect(() => {
    console.log(
      '%cfunc => useEffect' + '(componentDidMount ) A' + ++funcId,
      'color:white'
    );
  }, []);

  useEffect(() => {
    console.log(
      '%cfunc => useEffect number' +
        '(componentDidMount&componentDidUpdate )B' +
        ++funcId,
      'color:white'
    );
    document.title = number;
    return function cleanUp() {
      console.log(
        '%cfunc => useEffect return' +
          'number' +
          '(componentWillUnmount)' +
          ++funcId,
        'color:white'
      );
    };
  }, [number]);

  console.log('%cfunc => render' + ++funcId, 'color:blue');
  return (
    <div className="container">
      <h1>function style</h1>
      <p>Number: {number}</p>
      <p>Date: {_date}</p>
      <input
        type="submit"
        value="random"
        onClick={() => {
          setNumber(Math.random());
        }}
      />
      <input
        type="submit"
        value="date"
        onClick={() => {
          setDate(new Date().toString());
        }}
      />
    </div>
  );
}

/*******/
class ClassComp extends React.Component {
  state = {
    number: this.props.initNumber,
    date: new Date().toString()
  };

  componentDidMount() {
    console.log('%cclass => componentDidMount', 'color:red');
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('%cclass => shouldComponentUpdate', 'color:red');
    return true;
  }
  componentDidUpdate(nextProps, nextState) {
    console.log('%cclass => componentDidUpdate', 'color:red');
  }
  render() {
    console.log('%cclass => render', 'color:red');
    const { number, date } = this.state;
    return (
      <div className="container">
        <h1>class style</h1>
        <p>Number: {number}</p>
        <p>Date: {date}</p>
        <input
          type="submit"
          value="random"
          onClick={() => {
            this.setState({ number: Math.random() });
          }}
        />
        <input
          type="submit"
          value="date"
          onClick={() => {
            this.setState({ date: new Date().toString() });
          }}
        />
      </div>
    );
  }
}

export default App;
