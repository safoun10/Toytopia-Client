import React from 'react';
import TopNav from '../../components/topNav/TopNav';
import useTitle from '../../components/hooks/useTitle';

const Blog = () => {
    useTitle("Blog")
    return (
        <div>
            <TopNav></TopNav>
            blogs .......
        </div>
    );
};

export default Blog;