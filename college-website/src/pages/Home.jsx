import React from 'react'
import Navbar from '../components/Navbar'
import HomeImage from "../images/it_img.jpg"

const Home = () => {
  return (
    <div>
      <Navbar/>
      <img style={{marginLeft: "450px", marginTop: "50px"}} src={HomeImage} alt="" width={800} height={500}/>
    </div>
  )
}

export default Home