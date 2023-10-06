import './login.css'

const Login = () => {
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
              <input placeholder='Email' type='Email' className='loginInput' />
              <input
                placeholder='Password'
                type='password'
                className='loginInput'
              />
              <button className='loginButton' type='button'>
                Log In
              </button>
              <span className='loginForgot'>Forgot Password?</span>
              <button className='loginRegisterBtn'>Create a new Accout </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
