import Logo from '../components/Logo'
import SearchBar from '../components/SearchBar'
import Login from '../components/Login'
import Layout from './Layout'
export function Nav() {
  return (
    <Layout bg='primary'>
      <nav className='flex justify-between '>
        <Logo />
        <SearchBar />
        <Login />
      </nav>
    </Layout>
  )
}

export default Nav
