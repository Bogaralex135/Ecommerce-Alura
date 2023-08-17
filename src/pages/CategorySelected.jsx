import { useParams } from 'react-router-dom'
import { useFetch } from '../Hooks/useFetch'
import Product from '../components/Product'
export function CategorySelected() {
  const { category } = useParams()

  const url = `/json/${category}.json`

  const { data, loading, error } = useFetch(url)

  return (
    <section className='bg-primary p-2 md:py-8 md:px-48 w-full h'>
      <h1 className='text-center md:text-4xl font-bold'>{category}</h1>
      <div className='flex gap-20 flex-wrap p-10 justify-evenly items-center'>
        {error && <h1>Error: {error}</h1>}
        {loading && <h1>Loading...</h1>}
        {data?.map(producto => (
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

export default CategorySelected
