import { Link } from 'react-router-dom'
export function Product({ src, children, precio, id, category }) {
  return (
    <div className='max-w-xs max-h-80 mb-10'>
      <div className='max-w-xs'>
        <img
          src={src}
          alt={`imagen de ${children}`}
          className='object-contain object-center w-full aspect-square'
        />
      </div>

      <div className=''>
        <p className='text-lg '>{children}</p>
        <p className='text-lg font-bold'>${precio}</p>
        <Link to={`/product/${category}/${id}`} className='text-blue font-bold'>
          Ver Producto
        </Link>
      </div>
    </div>
  )
}

export default Product
