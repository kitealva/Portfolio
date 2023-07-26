import { styles } from "../styles";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#191b1c]' />
          <div className='w-1 sm:h-80 h-40 line-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hello, I'm <span className='text-[#363535]'>Brady</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white`}>
            I am a Software Developer located in the <br className='sm:block hidden' />
            Salt Lake City Metropolitan Area
          </p>   
        </div>
      </div>


      
      
    </section>
  );
};

export default Hero;