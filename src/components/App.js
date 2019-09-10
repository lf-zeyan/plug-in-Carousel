import React, { Component } from 'react';
import Carousel from '../swiper/swiper.js'
class App extends Component {//父组件
  render() {
    return (
      <div>
          <Carousel num = '10'></Carousel>
      </div>
    );
  } 
}

export default App;
