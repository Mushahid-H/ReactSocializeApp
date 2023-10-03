import React from 'react'
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Bookmark,
  Group,
  HelpOutline,
  Event,
  WorkOutline,
  School,
} from '@mui/icons-material'
import './sidebar.css'

const Sidebar = () => {
  return (
    <>
      <div className='sidebarContainer'>
        <div className='sidebar'>
          <ul className='sidebarItems'>
            <li className='sidebaritem'>
              <RssFeed className='sidebarIcon' />
              <span>Feed</span>
            </li>
            <li className='sidebaritem'>
              <Chat className='sidebarIcon' />
              <span>Chats</span>
            </li>
            <li className='sidebaritem'>
              <PlayCircleFilledOutlined className='sidebarIcon' />
              <span>Videos</span>
            </li>
            <li className='sidebaritem'>
              <Group className='sidebarIcon' />
              <span>Groups</span>
            </li>
            <li className='sidebaritem'>
              <Bookmark className='sidebarIcon' />
              <span>Bookmarks</span>
            </li>
            <li className='sidebaritem'>
              <HelpOutline className='sidebarIcon' />
              <span>Questions</span>
            </li>
            <li className='sidebaritem'>
              <Event className='sidebarIcon' />
              <span>Events</span>
            </li>
            <li className='sidebaritem'>
              <WorkOutline className='sidebarIcon' />
              <span>Jobs</span>
            </li>
            <li className='sidebaritem'>
              <School className='sidebarIcon' />
              <span>Courses</span>
            </li>
          </ul>
          <button type='button' className='showMoreBtn'>
            Show More
          </button>
          <hr className='sidebarHr' />
          <ul className='sidebarFrindsList'>
            <li className='sidebarFreind'>
              <img
                src='/assets/IMG_0601.JPG'
                alt=''
                className='sidebarFriendImg'
              />
              <div class='sidebarFriendName'>Joe Dev</div>
            </li>
            <li className='sidebarFreind'>
              <img
                src='/assets/IMG_0032.JPG'
                alt=''
                className='sidebarFriendImg'
              />
              <div class='sidebarFriendName'>Arsalan Ahmed</div>
            </li>
            <li className='sidebarFreind'>
              <img
                src='/assets/IMG_0062.JPG'
                alt=''
                className='sidebarFriendImg'
              />
              <div class='sidebarFriendName'>Ahmed Khalid</div>
            </li>
            <li className='sidebarFreind'>
              <img
                src='/assets/IMG_0366.JPG'
                alt=''
                className='sidebarFriendImg'
              />
              <div class='sidebarFriendName'>Mushahid Khan</div>
            </li>
            <li className='sidebarFreind'>
              <img
                src='/assets/IMG_0600.JPG'
                alt=''
                className='sidebarFriendImg'
              />
              <div class='sidebarFriendName'>Joe Biden rathore</div>
            </li>
            <li className='sidebarFreind'>
              <img src='/assets/1.jpg' alt='' className='sidebarFriendImg' />
              <div class='sidebarFriendName'>Lion Nawaz</div>
            </li>
            <li className='sidebarFreind'>
              <img src='/assets/2.jpg' alt='' className='sidebarFriendImg' />
              <div class='sidebarFriendName'>Tato Bachaa</div>
            </li>
            <li className='sidebarFreind'>
              <img src='/assets/3.jpg' alt='' className='sidebarFriendImg' />
              <div class='sidebarFriendName'>Kite Shareef UnShareef</div>
            </li>
            <li className='sidebarFreind'>
              <img src='/assets/4.jpg' alt='' className='sidebarFriendImg' />
              <div class='sidebarFriendName'>Shah rukh khan</div>
            </li>
            <li className='sidebarFreind'>
              <img src='/assets/a.JPG' alt='' className='sidebarFriendImg' />
              <div class='sidebarFriendName'>Banda e khuda</div>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Sidebar
