import React from 'react'
import Landing from './Landing'
import Landing2 from './Landing2'
import image1 from '../images/186.png'
import image2 from '../images/053.png'
import image3 from '../images/033.png'
import image4 from '../images/136.png'

function Index(props) {
  return (
    <div>
        <Landing img={image1} />
        <Landing2 img={image2} />
        <Landing img={image3} />
        <Landing2 img={image4} />
    </div>
  )
}

export default Index