import { Route, Routes } from "react-router";
import{ Home,Cart, Shop, About, ProductDetails,Search } from "../Pages";
import Rootlayout from "../layout/RootLayout";
import ShopLayout from "../layout/ShopLayout";



function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Rootlayout />}>
                <Route index element={<Home />} />
                
            </Route>
            <Route element={<ShopLayout />}>
                <Route path="/shop" element={<Shop />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/about" element={<About />} />
                <Route path="/products/:id" element={<ProductDetails />} />
                <Route path="/search" element={<Search />} />
            </Route>
        </Routes>
    );
}

export default AllRoutes;