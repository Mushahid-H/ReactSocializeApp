import React from 'react'
import './rightbar.css'
import Online from '../online/Online'
import { Users } from '../../Data'
const Rightbar = ({ profile }) => {
  const HomeRightbar = () => {
    return (
      <>
        <div className='birthdayContainer'>
          <img src='/assets/gift.png' alt='' className='birthdayImg' />
          <span className='birthdayText'>
            <b>Mushahid Hussain</b> and{' '}
            <b>4 others have their birthdays today</b>
          </span>
        </div>
        <img src='/assets/ad.png' alt='' className='rightbarAd' />
        <h4 className='rightBarTitle'>Online Friends</h4>
        <ul className='rightbarFriendList'>
          {Users.map((u) => (
            <Online user={u} />
          ))}
        </ul>
      </>
    )
  }
  const ProfileRightbar = () => {
    return (
      <>
        <h4 className='rightBarTitle'>User Infomation</h4>
        <div className='rightBarinfo'>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>City:</span>
            <span className='rightBarinfoValue'>Sukkur</span>
          </div>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>From:</span>
            <span className='rightBarinfoValue'>Parachinar</span>
          </div>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>Relationship:</span>
            <span className='rightBarinfoValue'>Married</span>
          </div>
        </div>
        <h4 className='rightBarTitle'>User Friends</h4>
        <div className='rightBarFollowings'>
          <div className='rightBarFollowing'>
            <img src='/assets/1.jpg' alt='' className='rightBarFollowingImg' />
            <span className='rightBarFollowingName'>Arslan Ahmed</span>
          </div>
          <div className='rightBarFollowing'>
            <img src='/assets/2.jpg' alt='' className='rightBarFollowingImg' />
            <span className='rightBarFollowingName'>Mushahid Khan</span>
          </div>
          <div className='rightBarFollowing'>
            <img src='/assets/3.jpg' alt='' className='rightBarFollowingImg' />
            <span className='rightBarFollowingName'>Shahrukh Khan</span>
          </div>
        </div>
      </>
    )
  }
  return (
    <div className='rightbar'>
      <div className='rightbarWrapper'>
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  )
}

export default Rightbar
