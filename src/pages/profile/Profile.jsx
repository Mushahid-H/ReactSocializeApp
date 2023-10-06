import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import './profile.css'
const Profile = () => {
  return (
    <div>
      <Topbar />
      <div className='profile'>
        <Sidebar />
        <div className='profileRight'>
          <div className='profileRightTop'>
            <div className='profileCover'>
              <img src='/assets/cover.jpg' alt='' className='profileCoverImg' />
              <img src='./assets/1.jpg' alt='' className='userProfileImg' />
            </div>
            <div className='profileInfo'>
              <h4 className='profileInfoName'>Joe Dave</h4>
              <span className='profileDescription'>
                Hello! My name is john doe
              </span>
            </div>
          </div>
          <div className='profileRightBottom'>
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
