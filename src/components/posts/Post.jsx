import React from 'react'
import { MoreVert } from '@mui/icons-material'
import './post.css'
const Post = () => {
  return (
    <div className='post'>
      <div className='postWrapper'>
        <div className='postTop'>
          <div className='postTopLeft'>
            <img className='postProfileImg' src='/assets/IMG_0601.JPG' alt='' />
            <span className='postUsername'>Joe Dev</span>
            <span className='postDate'>10/04/2023</span>
          </div>
          <div className='postTopRight'>
            <MoreVert />
          </div>
        </div>
        <div className='postCenter'>
          <span className='postText'>Hey its my first post!</span>
          <img src='assets/posts/1.jpg' alt='' />
        </div>
        <div className='postBottom'></div>
      </div>
    </div>
  )
}

export default Post
