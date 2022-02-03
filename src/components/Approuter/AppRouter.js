import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import Home from '../../screens/Home/Home';
import Category from '../../screens/Category/Category';
import Contact from '../../screens/Contact/Contact';
import AboutUs from '../../screens/Aboutus/AboutUs';
import NotFound from '../../screens/NotFound/NotFound';


const AppRouter = () => {
    return(
        <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path='/' element={Home}/>
            <Route path='/Category' element={Category}/>
            <Route path='/Contact' element={Contact}/>
            <Route path='/AboutUs' element={AboutUs}/>
            <Route path='/*' element={NotFound}/>
            
        </Routes>
        <Footer/>
        </BrowserRouter>
    )
}

export default AppRouter;