import './App.css';
import Header from './Header';
import Content from './Content/Content';
import Content2 from './Content2/Content2';
import Footer from './Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Dogovor from './Content/Dogovor';


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />

                <Routes>
                    <Route exact path='/' element={<Content />} />
                    <Route path='/dogovor' element={<Dogovor />} />
                    {/* <Navigate  from='/' to='/content'/> */}
                </Routes>

                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
