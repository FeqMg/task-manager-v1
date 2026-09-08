import './index.css'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NewAccount from './pages/new-account'


createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route path='/new-account' element={<NewAccount />} />
        </Routes>
    </BrowserRouter>
)
