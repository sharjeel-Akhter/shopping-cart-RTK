import { Outlet } from "react-router";
import {Header, Footer} from '../Components'

function Rootlayout() {
    return (
        <div className="flex flex-col min-h-screen ">
            <Header />
            <main className="grow">
            <Outlet />
            </main>

            <Footer/>
        </div>
    );
}

export default Rootlayout;