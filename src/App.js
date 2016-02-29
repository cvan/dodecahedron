import React, { Component } from 'react';

import {aframeCore} from 'aframe';
import noClick from 'aframe-no-click-look-controls';
aframeCore.registerComponent('no-click-look-controls', noClick.component);

import './util/shorthand'
import {Scene, Entity} from 'aframe-react';
import Camera from './components/Camera'
import Cursor from './components/Cursor'
import Dodecahedron from './components/Dodecahedron'
import Polygon from './components/Polygon'
import Sky from './components/Sky'

export class App extends Component {
  render() {
    return (
        <Scene onTick={()=>{this.forceUpdate()}}>
          <Camera><Cursor/></Camera>
          <Sky/>
          <Dodecahedron radius={1}/>
        </Scene>
    );
  }
}