import React, { Component } from 'react';

import {TodoListContainerConnection} from './TodoListContainerConnection';
import {FooterContainerConnection} from './FooterContainer';
import {CalcContainer} from './CalcContainer';


class HomePage extends Component {
  render() {
    return (
     <div>
     <TodoListContainerConnection />
	 <FooterContainerConnection />
	 <CalcContainer /> 
      </div>
    );
  }
}


export default HomePage;