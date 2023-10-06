import React from 'react'
import './feed.css'
import Share from '../share/Share'
import Post from '../posts/Post'

import { Posts } from '../../Data'
const Feed = () => {
  return (
    <div class='feed'>
      <div className='feedWrapper'>
        <Share />
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  )
}

export default Feed
