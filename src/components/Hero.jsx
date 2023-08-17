import Button from './Button'
import Layout from '../layouts/Layout'
export function Hero() {
  return (
    <header className='bg-hero w-full text-white p-8 flex items-end'>
      <Layout>
        <h1 className='text-6xl font-bold mb-5 mt-28'>Julio Promocional</h1>
        <p className='text-xl font-medium mb-7'>
          Productos Seleccionados con un 33% de descuento
        </p>
        <Button href={'/consolas'}>Ver consolas</Button>
      </Layout>
    </header>
  )
}

export default Hero
