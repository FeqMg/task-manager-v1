import './index.css'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NewAccount from './pages/new-account'
import Header from './components/common/header'
import Footer from './components/common/footer'

createRoot(document.getElementById('root')!).render(
    <div className='main'>
        <Header />
        <BrowserRouter>
            <Routes>
                <Route path='/new-account' element={<NewAccount />} />
            </Routes>
        </BrowserRouter>
        <Footer />
    </div>
)
