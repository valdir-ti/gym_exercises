import reactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from './App'

const root = reactDom.createRoot(document.getElementById('root'))

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
