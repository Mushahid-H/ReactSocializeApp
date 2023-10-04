import React from 'react'
import './feed.css'
import Share from '../share/Share'
import Post from '../posts/Post'
const Feed = () => {
  return (
    <div class='feed'>
      <div className='feedWrapper'>
        <Share />
        <Post />
      </div>
    </div>
  )
}

export default Feed
