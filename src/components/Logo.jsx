import { Link } from 'react-router-dom'
export function Logo() {
  return (
    <Link to='/'>
      <div className='flex items-center'>
        <img
          src='/controller.svg'
          alt='Logo de Alura Geek'
          className='w-6 md:w-auto'
        />
        <h2 className='md:text-2xl font-bold'>
          <span className='text-blue'>Alura</span>Geek
        </h2>
      </div>
    </Link>
  )
}

export default Logo
