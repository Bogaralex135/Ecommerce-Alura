import React from 'react'
import ReactDOM from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'
import App from './App.jsx'
import './index.css'

const domain = 'dev-4ns7yqgkfjwrbvxz.us.auth0.com'
const clientID = 'jE9IFjvIoDoKQxqacuJwm51VskeeqlIy'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientID}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}>
      <App />
    </Auth0Provider>
  </React.StrictMode>
)
