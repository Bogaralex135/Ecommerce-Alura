export function LinkFooter({ children, link, icono }) {
  return (
    <a href={link} target='_blank' rel='noreferrer' className='flex gap-2'>
      {children}
      <img src={icono} alt={`${children} icono`} />
    </a>
  )
}

export default LinkFooter
