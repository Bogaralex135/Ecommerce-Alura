import { useForm, ValidationError } from '@formspree/react'
export function FormFooter() {
  const [state, handleSubmit] = useForm('mgejejvr')
  if (state.succeeded) {
    return (
      <p className='text-xl font-bold'>
        Gracias por contactarme, te responderé pronto
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
      <h3 className='font-bold'>Hable con Nosotros</h3>
      <input
        id='email'
        type='email'
        name='email'
        placeholder='Email'
        className='p-3 rounded-sm'
      />
      <ValidationError prefix='Email' field='email' errors={state.errors} />
      <textarea
        id='message'
        name='message'
        placeholder='Escribe tu mensaje'
        className='px-3 min-h-[100px] py-3 resize-none'
      />
      <ValidationError prefix='Message' field='message' errors={state.errors} />
      <button
        type='submit'
        disabled={state.submitting}
        className='p-4 text-base bg-blue text-white w-1/3 '>
        Enviar
      </button>
    </form>
  )
}

export default FormFooter
