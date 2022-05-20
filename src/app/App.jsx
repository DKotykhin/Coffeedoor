
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {lazy, Suspense} from 'react';

import Spinner from '../components/spinner/Spinner';

const Page404 = lazy(() => import('../pages/Page404'));
const MainPage = lazy(() => import('../pages/MainPage'));
const MenuPage = lazy(() => import('../pages/MenuPage'));


function App() {
    return (
        <Router>
            <div>                
                <main>
                    <Suspense fallback={<Spinner/>}>
                        <Routes>
                            <Route path="/" element={<MainPage />} />
                            <Route path="/menu" element={<MenuPage />} />                            
                            <Route path="*" element={<Page404 />} />
                        </Routes>
                    </Suspense>
                </main>
            </div>
        </Router>
    )
}

export default App;
