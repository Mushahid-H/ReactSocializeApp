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
import { Users } from '../../Data'
import CloseFriend from '../closeFriends/Friends'

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
            {Users.map((u) => (
              <CloseFriend key={u.id} user={u} />
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Sidebar
