import './topbar.css'
import { Search, Person, Chat, Notifications } from '@mui/icons-material'

const Topbar = () => {
  return (
    <>
      <div className='topbarContainer'>
        <div className='topbarLeft'>
          <h1 className='Logo'>
            <a href='/'>Sociality</a>
          </h1>
        </div>
        <div className='topbarCenter'>
          <div className='tobarSerach'>
            <Search className='topbarSearchIcon' />
            <input
              placeholder='Search for friend, post or video'
              className='topbarInput'
            />
          </div>
        </div>
        <div className='topbarRight'>
          <div className='topbarLinks'>
            <div className='topbarLink'>HomePage</div>
            <div className='topbarLink'>TimeLine</div>
          </div>
          <div className='topbarIcons'>
            <div className='topbarIconItem'>
              <Person />
              <span className='topbarIconBadge'>1</span>
            </div>
            <div className='topbarIconItem'>
              <Chat />
              <span className='topbarIconBadge'>5</span>
            </div>
            <div className='topbarIconItem'>
              <Notifications />
              <span className='topbarIconBadge'>1</span>
            </div>
          </div>
          <img src='/assets/1.JPG' alt='' className='topbarImage' />
        </div>
      </div>
    </>
  )
}

export default Topbar
