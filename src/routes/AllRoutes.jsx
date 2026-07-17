import { Route, Routes } from "react-router";
import{ Home,  Cart } from "../Pages";
import Rootlayout from "../layout/RootLayout";


function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Rootlayout/>}>
                <Route index element={<Home/>}/>
                <Route path="/cart" element={<Cart/>}/>
            </Route>
        </Routes>
    );
}

export default AllRoutes;