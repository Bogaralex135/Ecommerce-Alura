import { Link } from 'react-router-dom'
import { useFetch } from '../Hooks/useFetch'
import Product from './Product'

export function Category({ category }) {
  const url = `json/${category}.json`

  const { data, loading, error } = useFetch(url)

  const newData = data
  const formData = newData.slice(0, 5)

  return (
    <section className='flex flex-col gap-5'>
      <div className='flex justify-between'>
        <h2 className='md:text-3xl font-bold'>{category.toUpperCase()}</h2>
        <Link to={`/category/${category}`} className='text-blue font-bold'>
          Ver todo
        </Link>
      </div>
      <div className='flex gap-5 flex-wrap md:flex-nowrap p-4 '>
        {error && <h1>Error: {error}</h1>}
        {loading && <h1>Loading...</h1>}
        {formData?.map(producto => (
          <Product
            key={producto.id}
            id={producto.id}
            category={category}
            precio={producto.price}
            src={producto.image}>
            {producto.name}
          </Product>
        ))}
      </div>
    </section>
  )
}

export default Category
