import { motion } from 'framer-motion';

import { styles } from '../styles';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}> Hi, I'm <span className='text-[#915eff]'> Brady </span></h1>
          <p className={`${styles.herSubText} mt-2 text-white-100`}>
            Supwer long info that i will fixc later i jsut need feiller for now cbecause i want to move on and jdost do other stuff but thyes this is awesome <br className='sm:block hidden'/>
            testsetstewet
          </p>
        </div>

      </div>
    
    </section>
  )
}

export default Hero