
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {lazy, Suspense} from 'react';

import Spinner from 'components/spinner/Spinner';
import Footer from "components/footer/Footer";

const Page404 = lazy(() => import('pages/Page404'));
const MainPage = lazy(() => import('pages/MainPage'));
const MenuPage = lazy(() => import('pages/MenuPage'));
const ThanksPage = lazy(() => import('pages/ThanksPage'));

function App() {
    return (
        <>
            <Router>                          
                <main>
                    <Suspense fallback={<Spinner/>}>
                        <Routes>
                            <Route path="/" element={<MainPage />} />
                            <Route path="/menu" element={<MenuPage />} />
                            <Route path="/thanks" element={<ThanksPage />} />                           
                            <Route path="*" element={<Page404 />} />
                        </Routes>
                    </Suspense>
                </main>
                <Footer/>            
            </Router>
        </>
    )
}

export default App;
