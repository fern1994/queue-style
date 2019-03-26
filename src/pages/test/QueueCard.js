import React from 'react'

const QueueCard = () => (
  <div className='callQueue-box'>
    <div className='chanel-box'>1</div>
    <div className='queuenumber-box'>
      <div className='content-box'>
        <span className='text'>Q8000 10นาที</span>
        <span className='icon'>
          <i class='material-icons'>notifications_active</i>
        </span>
        <span className='icon'>
          <i class='material-icons'>bookmark</i>
        </span>
        <span className='icon'>
          <i class='material-icons'>redo</i>
        </span>
      </div>
      <div className='content-box'>
        <span className='text'>HN 0000000003</span>
        <span className='text'>VN 0000000003</span>
      </div>
      <div className='content-box'>
        <span className='text'>NAME XXXXXXXXX XXXXXXXXX</span>
      </div>
    </div>
  </div>
)

export default QueueCard