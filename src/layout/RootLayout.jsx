import { Outlet } from "react-router";
import {Header, Footer} from '../Components'

function Rootlayout() {
    return (
        <div className="flex flex-col min-h-screen dark:bg-gray-950">
            <Header />
            <main className="grow">
            <Outlet />
            </main>

            <Footer/>
        </div>
    );
}

export default Rootlayout;