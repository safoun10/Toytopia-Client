import React from 'react';
import TopNav from '../../components/topNav/TopNav';
import useTitle from '../../components/hooks/useTitle';
import Footer from '../../components/footer/Footer';


const MyToys = () => {
    useTitle("My Toys")
    return (
        <div>
            <TopNav></TopNav>
            <div className='mx-auto' style={{maxWidth : "1200px"}}>sdfu</div>
            <div className='bg-footer'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MyToys;