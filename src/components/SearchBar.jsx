export function SearchBar() {
  return (
    <div className='flex items-center w-1/3'>
      <form action='' className='w-full relative'>
        <input
          type='search'
          name=''
          id=''
          placeholder='¿Qué deseas buscar?'
          className='w-full py-2 px-8 bg-primary text-text rounded-full'
        />
        <img src='/search.svg' alt='' className='absolute right-2 top-2' />
      </form>
    </div>
  )
}

export default SearchBar
