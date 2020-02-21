'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroScene,
  ViroText,
  Viro360Image, 
  ViroVideo, 
  ViroSkyBox,
  ViroButton
} from 'react-viro';

export default class HelloWorldScene extends Component {

  constructor() {
    super();
    this.state = {
      greeting: "sup bitch",
    
    } 
    this._onHovering = this._onHovering.bind(this);
  }




  render() {
    return (
      <ViroScene>
        {/* <Viro360Image source={require('./res/guadalupe_360.jpg')} /> */}
        <ViroSkyBox color='rgb(0, 0, 0)'/>
        {/* <ViroText text="Hello World!" width={1} height={2} position={[2, 0, -2]} rotation={[0,-55,0]} style={styles.helloWorldTextStyle} /> */}
        <ViroText text={this.state.greeting} width={1} height={2} position={[0, 0, -3]} rotation={[0,0,0]} style={styles.helloWorldTextStyle} />
        <ViroButton height={1} width={1} roatation={[0,50,0]} position={[-2, 0, -2]} onClick={this._onHovering}source={require('./res/icon_right_w.png')}/>
        <ViroVideo loop={true} source={require('./res/video.mp4')} scale={[3, 3, 0]} position={[-3, 0, -3]} rotation={[0,50,0]}/>
      </ViroScene>
    )
  }


  _onHovering() {
    let greeting = "hey"
    this.setState({
      greeting
    })
  }
}


var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 60,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',  
  },
});

module.exports = HelloWorldScene;
