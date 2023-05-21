import React from 'react';
import TopNav from '../../components/topNav/TopNav';
import useTitle from '../../components/hooks/useTitle';
import Footer from '../../components/footer/Footer';

const Blog = () => {
    useTitle("Blog")
    return (
        <div>
            <TopNav></TopNav>
            blogs .......
            <div className='bg-footer'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Blog;