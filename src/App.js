import React, { Component } from 'react';
import Head from './head';
import getRouter from './body';
import Foot from './foot';
import './App.scss';
import $ from 'jquery';


const DEFAULT_LANG = 'EN';


class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      lang: DEFAULT_LANG,
      products: undefined
    }
  }
  componentWillMount = () => {
    let curLang = localStorage.getItem('lang')
    if (!curLang || curLang === 'undefined' || curLang === 'null') {
      localStorage.setItem('lang', this.state.lang)
    } else {
      this.setState({lang: curLang})
    }
    // this.products = require('./data/products.json').products
    $.ajax({
      url: './server/server.php',
      type: 'get',
      async: true,
      data: {name: 'products_summarize'},
      dataType: 'json',
      success: (rsp) => {
        if (rsp.length) {
          rsp.forEach(i => {
            this.disposalData(i)
          })
        }
        console.log(rsp);
        this.setState({
          products: rsp
        })
      },
      error: (err) => {
        console.log('err: ', err);
      }
    })
  }
  disposalData = (data, root) => {
    data.link = !root ? '/' + data.name : root + '/' + data.name;
    if (!data.subpro.length) {
      return;
    }
    data.subpro.forEach(i => {
      this.disposalData(i, data.link);
    })
  }
  changeLang = () => {
    let {lang} = this.state
    if (lang === 'EN') {
      lang = 'CN'
    } else {
      lang = 'EN'
    }
    localStorage.setItem('lang', lang)
    this.setState({lang})
    this.forceUpdate()
  }
  render() {
    let {products} = this.state;
    let router = getRouter(products)
    return (
      <div className="App">
          <Head changeLang={this.changeLang} products={products}/>
          {router}
          <Foot />
      </div>
    );
  }
}

export default App;
