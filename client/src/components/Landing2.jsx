import React from 'react'
import{motion as a} from 'framer-motion'

function Landing2(props) {
  return (
    <>
    <a.div className='landing2' initial={{ x: '+100vh' }} animate={{ x:0 }} transition={{ type: "tween" , duration: 1 , bounce: 0.3 }}>
    <div className='left'>
        <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, perspiciatis?</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam magni natus odio fugiat voluptate molestiae, facere nam sapiente doloribus dolores, consectetur ipsam corrupti mollitia nemo alias repudiandae in explicabo. Harum aspernatur blanditiis officiis obcaecati necessitatibus corrupti minima aut. Dolorum repudiandae laboriosam nulla atque? A enim at maiores totam quia recusandae, eaque voluptatum suscipit! Nulla repellat consequatur magnam saepe, necessitatibus reprehenderit ab, ratione odio maxime aliquid repellendus consequuntur fugit consectetur numquam quos commodi qui exercitationem sunt illo. Non assumenda asperiores maxime?</p>
        </div>
        <img src={props.img} alt="" />
    </a.div>
    
    </>
  )
}

export default Landing2