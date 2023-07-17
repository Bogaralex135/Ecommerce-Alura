export function Button({ children, href }) {
  return (
    <>
      <a href={href} className='p-4 text-base bg-blue'>
        {children}
      </a>
    </>
  )
}

export default Button
