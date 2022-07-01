import Footer from "components/footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return(
        <>
            <main>
                <Outlet/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    )
}

export { Layout };