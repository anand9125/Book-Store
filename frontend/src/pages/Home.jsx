import React from 'react'
import Navbar from '../componets/Navbar'
import Banner from '../componets/Banner'
import Topseller from '../componets/Topseller'
import Recomended from '../componets/Recomended'
function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Topseller></Topseller>
      <Recomended></Recomended>
     
    </div>
  )
}

export default Home
