import React, { Component } from 'react'

import Queue from './Queue'
import WaitQueue from './WaitQueue'

class TestPage extends Component {
  render() {
    return (
      <>
        <div className='subContent'>
          <div className='subContent-title'>
            <span className='chanel'>ช่อง</span>
            <span>หมายเลขคิว</span>
          </div>
          <Queue />
          <button>คิวถัดไป</button>
        </div>
        <div className='subContent'>
          <div className='subContent-title'>
            <span>หมายเลขคิวรอ 10 คิว</span>
          </div>
          <div class="inputWithIcon inputIconBg">
            <input type="text"/>
            <i class='material-icons'>search</i>
          </div>
          <WaitQueue />
        </div>
      </>
    )
  }
}

export default TestPage