import ReactDOM from 'react-dom/client'
import App from './App'

const root = document.getElementById('app')

export async function mount() {
  root && ReactDOM.createRoot(root).render(<App />)
}

mount()
