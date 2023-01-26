import React from 'react'
import{motion as a} from 'framer-motion'
import { useInView } from 'framer-motion'



function Landing(props) {



  return (
    <>
    <a.div className='landing' initial={{ x: '-100vh' }} animate={{ x:0 }} transition={{ type: "tween" , duration: 1 , bounce: 0.3 }}>
        <img src={props.img} alt="" />
        <div className='right'>
        <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, perspiciatis?</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam magni natus odio fugiat voluptate molestiae, facere nam sapiente doloribus dolores, consectetur ipsam corrupti mollitia nemo alias repudiandae in explicabo. Harum aspernatur blanditiis officiis obcaecati necessitatibus corrupti minima aut. Dolorum repudiandae laboriosam nulla atque? A enim at maiores totam quia recusandae, eaque voluptatum suscipit! Nulla repellat consequatur magnam saepe, necessitatibus reprehenderit ab, ratione odio maxime aliquid repellendus consequuntur fugit consectetur numquam quos commodi qui exercitationem sunt illo. Non assumenda asperiores maxime?</p>
        </div>
    </a.div>
    
    </>
  )
}

export default Landing