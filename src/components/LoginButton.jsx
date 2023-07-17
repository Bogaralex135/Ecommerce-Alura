import { useAuth0 } from '@auth0/auth0-react'

export function LoginButton() {
  const { loginWithPopup } = useAuth0()
  return (
    <button
      onClick={loginWithPopup}
      className='py-2 px-8 border-blue border-2 text-blue text-xl'>
      Login
    </button>
  )
}

export default LoginButton
