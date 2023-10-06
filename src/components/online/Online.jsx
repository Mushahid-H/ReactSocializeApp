import './online.css'

const Online = ({ user }) => {
  return (
    <div>
      <li className='rightBarFriend'>
        <div className='rightBarprofileContainer'>
          <img
            src={user.profilePicture}
            alt=''
            className='rightBarprofileImage'
          />
          <span className='onlineBadge'></span>
        </div>
        <span className='profilerName'>{user.username}</span>
      </li>
    </div>
  )
}

export default Online
