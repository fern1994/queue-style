import React, { Component } from 'react'

import Header from './Header'
import Footer from './Footer'
import TestPage from '../../pages/test'

class MainTemplate extends Component{
  render(){
    return(
      <div className='mainContainer'>
        <Header/>
        <div className='mainContent'>
        <TestPage/>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default MainTemplate