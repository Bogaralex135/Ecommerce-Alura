import { useState, useEffect } from 'react'
export function useFetch(url) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [controller, setController] = useState(null)

  useEffect(() => {
    const abortController = new AbortController()
    setController(abortController)

    if (data.length === 0) {
      // Verificar si los datos ya se han obtenido
      fetch(url, { signal: abortController.signal })
        .then(response => response.json())
        .then(json => setData(json))
        .catch(error => {
          if (error.name === 'AbortError') {
            console.log('Cancelled request')
          } else {
            setError(error)
          }
        })
        .finally(() => setLoading(false))
    }

    return () => abortController.abort()
  }, [url, data])

  const handleCancelRequest = () => {
    if (controller) {
      controller.abort()
      setError('Cancelled Request')
    }
  }

  return { data, loading, error, handleCancelRequest }
}
