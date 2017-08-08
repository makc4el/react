import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Product from './products/products';
import Header from './header/header';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(
	<div>
		<Header />
	  	<Product />
  	</div>
	 , document.getElementById('root'));
registerServiceWorker();
