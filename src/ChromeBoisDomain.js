import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
 
    const x = event.clientX;
    const y = event.clientY
    
    drawChromeBoiAtCoords(x, y)
  }
  
  handleOnclick = (e) => {
    toggleCycling()
  }
  handleKeyPressed = (e) => {
    console.log(e.key)

    if(e.key == 'a'){
      resize('+')
    }else if (e.key == 's'){
      resize('-')
    }
}


   
  /* TODO: Add an event listener to the `<canvas>` element to capture when a key
  /* is pressed. When a key is pressed, an event handler should invoke the
  /* provided `resize` function with a single argument of either '+' or '-'
  /* if the key pressed was 'a', then it should call `resize` with '+'
  /* if the key pressed was 's', then it should call `resize` with '-' 
   */
  
  render() {
    return (
      <canvas 
        onMouseMove={this.handleMouseMove}
        onClick={this.handleOnclick}
        onKeyPress={this.handleKeyPressed}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
