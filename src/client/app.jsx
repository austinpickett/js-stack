import 'babel-polyfill';

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Dog from '../shared/dog';

const dogBark = new Dog('Browser Roby').bark();

const App = props => (
  <p>The dog says: {props.message}</p>
);

App.propTypes = {
	message: PropTypes.string.isRequired,
};

ReactDOM.render(<App message={dogBark} />, document.querySelector('.app'));
