import { Outlet, Route, Routes } from "react-router";
import {Header} from "../Components";



function ShopLayout(props) {
    return (
        <div className="flex flex-col min-h-screen dark:bg-gray-950">
            <Header />
            <main className="grow">
            <Outlet />
            </main>
        </div>
    );
}

export default ShopLayout;