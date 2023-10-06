import './register.css'

const Register = () => {
  return (
    <div className='login'>
      <div className='loginWrapper'>
        <div className='loginLeft'>
          <h3 className='loginLogo'>Socialize</h3>
          <span className='loginDescription'>
            Connect with your friends and the world around you on Socialize
          </span>
        </div>
        <div className='loginRight'>
          <div className='loginBox'>
            <div className='loginBox'>
              <input
                placeholder='Username'
                type='Text'
                className='loginInput'
              />
              <input placeholder='Email' type='Email' className='loginInput' />
              <input
                placeholder='Password'
                type='password'
                className='loginInput'
              />
              <input
                placeholder='Password Again'
                type='password'
                className='loginInput'
              />
              <button className='loginButton' type='button'>
                Sign up
              </button>

              <button className='loginRegisterBtn'>Log into account </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
