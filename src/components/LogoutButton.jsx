import { useAuth0 } from '@auth0/auth0-react'

const LogoutButton = () => {
  const { logout } = useAuth0()

  return (
    <button
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
      className='py-2 px-8 border-blue border-2 text-blue text-xl'>
      Log Out
    </button>
  )
}

export default LogoutButton
