import React from 'react'
import { MoreVert } from '@mui/icons-material'
import { Users } from '../../Data'
import { useState } from 'react'
import './post.css'
const Post = ({ post }) => {
  const [like, setLike] = useState(post.like)
  const [isLiked, setIsLiked] = useState(false)
  const likehandler = () => {
    setLike(isLiked ? like - 1 : like + 1)
    setIsLiked(!isLiked)
  }

  return (
    <div className='post'>
      <div className='postWrapper'>
        <div className='postTop'>
          <div className='postTopLeft'>
            <img
              className='postProfileImg'
              src={Users.filter((u) => u.id === post.id)[0].profilePicture}
              alt=''
            />
            <span className='postUsername'>
              {Users.filter((u) => u.id === post.id)[0].username}
              {/* jon wick */}
            </span>
            <span className='postDate'>{post.date}</span>
          </div>
          <div className='postTopRight'>
            <MoreVert />
          </div>
        </div>
        <div className='postCenter'>
          <span className='postText'>{post.desc}</span>
          <img src={post.photo} alt='' className='postImage' />
        </div>
        <div className='postBottom'>
          <div className='postBottomLeft'>
            <img
              src='/assets/thumb.png'
              alt=''
              className='likeIcon'
              onClick={likehandler}
            />
            <img
              src='/assets/heart.png'
              alt=''
              className='likeIcon'
              onClick={likehandler}
            />
            <span className='fontLikeCounter'>{like} people likes this</span>
          </div>
          <div className='postBottomRight'>
            <span className='postComment'>{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
