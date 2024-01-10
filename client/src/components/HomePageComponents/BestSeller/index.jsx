import React from 'react'
import SectionHeader from '../../SectionHeader'
import Product from '../../Product'

const BestSeller = () => {
  return (
    <section id='best-seller'>
        <div className="container">
            <SectionHeader title={"Best Sellers"} headerTopContent={"Popular Item in the market"} />
            <div className="row">
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            </div>
        </div>
    </section>
  )
}

export default BestSeller