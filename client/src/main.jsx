
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter} from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env file')
}




createRoot(document.getElementById('root')).render(
  <ClerkProvider publishableKey={'pk_test_Y2xlYXItZHJhZ29uLTY0LmNsZXJrLmFjY291bnRzLmRldiQ'}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </ClerkProvider>,
)
