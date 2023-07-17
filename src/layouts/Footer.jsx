import Logo from '../components/Logo'
import FormFooter from '../components/FormFooter'
import LinkFooter from '../components/LinkFooter'
import BottomFooter from '../components/BottomFooter'
export function Footer() {
  return (
    <>
      <footer className='bg-secondary flex  p-2 md:py-8 md:px-48 w-full '>
        <div className='w-1/4'>
          <Logo />
        </div>
        <div className='flex flex-col gap-4 text-xl w-1/4'>
          <LinkFooter
            link='https://github.com/Bogaralex135'
            icono='/github.svg'>
            GitHub
          </LinkFooter>
          <LinkFooter
            link='https://www.linkedin.com/in/bogar-alejandro-vázquez-mata-479846256/'
            icono='/linkedin.svg'>
            LinkedIn
          </LinkFooter>
          <LinkFooter
            link='https://alejandro-vazquez.netlify.app'
            icono='/cv.svg'>
            Portafolio
          </LinkFooter>
        </div>
        <div className='w-2/4'>
          <FormFooter />
        </div>
      </footer>
      <BottomFooter />
    </>
  )
}

export default Footer
