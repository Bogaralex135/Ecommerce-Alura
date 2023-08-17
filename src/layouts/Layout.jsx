export function Layout({ children, bg }) {
  return (
    <section className={`bg-${bg} p-2 md:py-8 md:px-48 w-full`}>
      {children}
    </section>
  )
}

export default Layout
