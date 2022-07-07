import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import Spinner from "components/spinner/Spinner";
import { Layout } from "components/layout/layout";

const Page404 = lazy(() => import("pages/Page404"));
const MainPage = lazy(() => import("pages/MainPage"));
const MenuPage = lazy(() => import("pages/MenuPage"));
const ThanksPage = lazy(() => import("pages/ThanksPage"));

function App() {
    return (
        <Router>
            <Suspense fallback={<Spinner />}>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<MainPage />} />
                        <Route path="menu" element={<MenuPage />} />
                        <Route path="thanks" element={<ThanksPage />} />
                        <Route path="*" element={<Page404 />} />
                    </Route>
                </Routes>
            </Suspense>
        </Router>
    );
}

export default App;
