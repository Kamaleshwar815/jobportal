import React, { useEffect, useState } from 'react'
import './Welcome.css'

function Welcome() {

  const user = {
    name: "Name",
    desg: "Designation"
  }

  return (
    <div className='home'>
      <div className='h-profile'>
        <img src='https://lh3.googleusercontent.com/a/AEdFTp4zhbC2ZEr9-78CPrRzQ-gw3XMeB3tmwYtnu1G4=s512-p-k-rw-no' alt=''/>
        <p>{user.name}</p>
        <span>{user.desg}</span>
        <h6>Email</h6>
        <h6>Phone</h6>
      </div>
      <div className='h-main'>
        <div className='hm-search'>
          <input type='text' placeholder='Post Something...'/>
          <div>
            <input type='file'/>
            <img src="https://img.icons8.com/fluency-systems-filled/48/1859ff/camera.png"/>
          </div>
          <img src="https://img.icons8.com/fluency-systems-filled/48/ffffff/share-rounded.png"/>
        </div>
        <div className='hm-post'>
          <div className='p-head'></div>
        </div>
      </div>
      <div className='h-users'></div>
    </div>
  )
}

export default Welcome
