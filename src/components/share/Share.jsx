import React from 'react'
import { PermMedia, Label, Room, EmojiEmotions } from '@mui/icons-material'
import './share.css'
const Share = () => {
  return (
    <div className='share'>
      <div className='shareWrapper'>
        <div className='shareTop'>
          <img src='/assets/IMG_0601.JPG' className='shareProfileImg' alt='' />
          <input placeholder='What is on you mind?' className='shareInput' />
        </div>
        <hr className='shareHr' />
        <div className='shareBottom'>
          <div className='shareOptions'>
            <div className='shareOption'>
              <span className='shareOptionText'>
                <PermMedia htmlColor='tomato' className='shareIcon' />
                Photos or Videos
              </span>
            </div>
            <div className='shareOption'>
              <span className='shareOptionText'>
                <Label htmlColor='blue' className='shareIcon' />
                Tag
              </span>
            </div>
            <div className='shareOption'>
              <span className='shareOptionText'>
                <Room htmlColor='green' className='shareIcon' />
                Location
              </span>
            </div>
            <div className='shareOption'>
              <span className='shareOptionText'>
                <EmojiEmotions htmlColor='goldenrod' className='shareIcon' />
                Feelings
              </span>
            </div>
          </div>
          <button type='button' className='shareButton'>
            Share
          </button>
        </div>
      </div>
    </div>
  )
}

export default Share
