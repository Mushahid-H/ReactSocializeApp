import './friends.css'

const Friends = ({ user }) => {
  return (
    <div>
      <li className='sidebarFreind'>
        <img src={user.profilePicture} alt='' className='sidebarFriendImg' />
        <div class='sidebarFriendName'>{user.username}</div>
      </li>
    </div>
  )
}

export default Friends
