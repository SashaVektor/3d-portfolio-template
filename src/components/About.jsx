import React from 'react'
import Tilt from "react-tilt"
import { motion } from "framer-motion"
import { styles } from '../styles'
import { services } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"
import { SectionWrapper } from "../hoc"

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.7)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[16px] max-w-5xl leading-[30px]">
        Hello viewer! My name is Sasha and I am 18 years old.
        I live in beautiful country - Ukraine.
        In 2021, I became acquainted with such a direction
        as frontend development. It was like love at first sight for me.
        I really enjoyed learning something new in this field.
        At first I was learning basic things in HTML and CSS.
        Then I tried out page layout, and as I thought,
        I was very good at it. At the beginning of 2022,
        I began to learn the programming language JavaScript.
        In the beginning, there were no problems with learning
        it because I already knew the basics. After learning all
        the important things about JS, I started learning the npm
        package manager and the Webpack build manager. I also paid
        attention to the Babel tool. After learning these things
        I began to learn the React framework and the Redux state manager.
        In the process of learning, I became acquainted with many libraries,
        which in one way or another facilitated my development. After writing my portfolio,
        I started job hunting and hope for a good job! Thanks for taking the time to read my story.
        Have a great time!
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, i) => (
          <ServiceCard key={service.title} index={i} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about") 