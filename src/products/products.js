import React, { Component } from 'react';
import './products.css';
import json__file from '.././products.json';

class Product extends Component {

  my__products = json__file;

  my__prop = {
    tottal__count:'',
    tottal__cost:'',
  }

  my__loyout = [];


  remove__item(index){
    var self = this;
    delete self.my__products[index];
    self.setState({my__products: self.my__products });
  }

  remove__all(){
    var self = this;
    self.my__products =  {};
    self.setState({my__products: self.my__products});
  }

  start__create(){
    var self = this;
    var i = 0;
    var cost = 0;0
    self.my__loyout = [];
    for(var index in this.my__products){
      var my__item = <div className="product__item">
        <button
          className="btn__cross" 
          onClick={self.remove__item.bind(this,index)}>
                    +
        </button>

        <div  className="product__item__img" style={{backgroundImage: 'url(' + self.my__products[index].img+ ')'} }></div>
        <p className="product__item__name">
          {self.my__products[index].name}
        </p>
        <p className="product__item__description">
          {self.my__products[index].dscription}
        </p>
        <p className="product__item__cost">
          Cost: {self.my__products[index].cost} $
        </p>

        </div>;
        self.my__loyout.push(my__item);
      cost+= parseFloat(self.my__products[index].cost);
      i++;
    }
    self.my__prop.tottal__count = i;
    self.my__prop.tottal__cost = cost;
  }

  render() {
    this.start__create();
    return (
      <div className="product__page">
        <div className="navigation__header">
          <p>Tottal cost: {this.my__prop.tottal__cost} $</p>
          <p>Tottal count: {this.my__prop.tottal__count} </p>
          <p>Average cost: { this.my__prop.tottal__cost != 0 ? (this.my__prop.tottal__cost/this.my__prop.tottal__count).toFixed(2) : 0} $</p>
        </div>
        <button className="remove__all__item" onClick={this.remove__all.bind(this)}>Remove All</button>
        <div className="product__list">
          {this.my__loyout}   
        </div>
      </div>
    );
  }
}

export default Product;
