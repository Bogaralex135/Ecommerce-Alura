import Category from './Category'
export function Categories() {
  return (
    <main className='flex flex-col gap-20 bg-primary p-2 md:py-8 md:px-48 w-full'>
      <Category category={'audifonos'} />
      <Category category={'laptops'} />
    </main>
  )
}

export default Categories
