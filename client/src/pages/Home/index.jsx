import React from 'react'
import { Helmet } from 'react-helmet-async';
import Header from '../../layout/Header';
import TrendingProduct from '../../components/HomePageComponents/TrendingProduct';
import WinterSale from '../../components/HomePageComponents/WinterSale';
import BestSeller from '../../components/HomePageComponents/BestSeller';
import LastNews from '../../components/HomePageComponents/LastNews';
const Home = () => {
    
  return (
    <>
    <Helmet>
        <title>Home Page</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
    <Header/>
    <TrendingProduct/>
    <WinterSale/>
    <BestSeller/>
    <LastNews/>
    </>
  )
}

export default Home