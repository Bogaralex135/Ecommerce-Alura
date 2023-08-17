import { useParams } from 'react-router-dom'
import { useFetch } from '../Hooks/useFetch'

export function ProductSelected() {
  const { category, id } = useParams()
  const url = `/json/${category}.json`
  const { data, error, loading } = useFetch(url)

  const product = data?.find(e => e.id == id)

  if (!product) {
    return <div>Loading...</div> // Otra opción es mostrar un mensaje de error
  }

  return (
    <section className='p-2 md:py-8 md:px-48 w-full flex flex-col gap-10'>
      {error && <h1>Error: {error}</h1>}
      {loading && <h1>Loading...</h1>}
      <div className='flex gap-10'>
        <div className='w-1/2'>
          <img
            src={product.image}
            alt={product.name}
            className='object-contain object-center aspect-square w-full'
          />
        </div>
        <div className='flex flex-col gap-5 w-1/2'>
          <h2 className='text-4xl'>{product.name}</h2>
          <p className='font-bold text-2xl'>{`$${product.price}`}</p>
          <p className='text-xl'>{product.description}</p>
          <p className='text-xl'>
            Stock: <span className='font-semibold'>{product.stock}</span>
          </p>
          <p className='text-xl'>
            Rating: <span>{product.rating}</span>
          </p>
        </div>
      </div>
      <div></div>
    </section>
  )
}

export default ProductSelected
