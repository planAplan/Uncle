import React, { Component } from 'react';
import Head from './head';
import Body from './body';
import Foot from './foot';
import './App.scss';

const DEFAULT_LANG = 'EN';


class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      lang: DEFAULT_LANG
    }
  }
  componentWillMount = () => {
    let curLang = localStorage.getItem('lang')
    if (!curLang || curLang === 'undefined' || curLang === 'null') {
      localStorage.setItem('lang', this.state.lang)
    } else {
      this.setState({lang: curLang})
    }
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
    return (
      <div className="App">
          <Head changeLang={this.changeLang}/>
          <Body />
          <Foot />
      </div>
    );
  }
}

export default App;
