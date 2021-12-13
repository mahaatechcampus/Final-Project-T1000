import React from 'react'
import Header from '../Component/Header';
import CategoryItem from '../Component/CategoryItem';
import BrandImgs from '../Component/BrandImgs';
import NewArrival from '../Component/NewArrival';
function Home() {
    return (
        <div>
            <Header/>
            <BrandImgs/>
            <CategoryItem/>
            <NewArrival/>
        </div>
    )
}

export default Home;
