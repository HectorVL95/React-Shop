import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../containers/Layout'
import CreateNewPassword from '../containers/CreateNewPassword';
import RecoveryPassword from '../containers/RecoveryPassword';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Login from '../containers/Login';
import CreateNewAccount from '../containers/CreateNewAccount';
import MyAccountEdit from '../containers/MyAccountEdit';
import MyOrdAccMenu from '../components/MyOrdAccMenu';
import MobileMenu from '../components/MobileMenu';
import MyOrder from '../components/MyOrder';
import MyOrders from '../components/MyOrders';
import ProductDetail from '../components/ProductDetail';
import CheckoutOrder from '../components/CheckoutOrder';
import "../styles/Global.scss";




const App = () => {
    return (
        <BrowserRouter>
        <Layout>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/create-new-password" element={<CreateNewPassword/>}/>
                <Route path="/recovery-password" element={<RecoveryPassword/>}/>
                <Route path="/create-new-account" element={<CreateNewAccount/>}/>
                <Route path="/my-account-edit" element={<MyAccountEdit/>}/>
                <Route path="/my-ord-acc-menu" element={<MyOrdAccMenu/>}/>
                <Route path="/mobile-menu" element={<MobileMenu/>}/>
                <Route path="/my-order" element={<MyOrder/>}/>
                <Route path="/my-orders" element={<MyOrders/>}/>
                <Route path="/product-detail" element={<ProductDetail/>}/>
                <Route path="/checkout-order" element={<CheckoutOrder/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </Layout>
        </BrowserRouter>
    );
};

export default App;