import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Gem, Award, Clock, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './About.module.scss';
import Navbar from '../SubComponents/Navbar';
const About = () => {
  const sectionRef = useRef(null);

  const features = [
    {
      icon: Gem,
      title: "Premium Materials",
      description: "Only the finest diamonds, gold, and precious stones make it into our collections.",
      delay: 0.2
    },
    {
      icon: Award,
      title: "Master Craftsmanship",
      description: "Our artisans bring decades of experience to every handcrafted piece.",
      delay: 0.4
    },
    {
      icon: Clock,
      title: "Timeless Design",
      description: "Creating jewelry that transcends trends and becomes treasured heirlooms.",
      delay: 0.6
    },
    {
      icon: Heart,
      title: "Personal Touch",
      description: "Each piece is crafted with love and attention to your unique story.",
      delay: 0.8
    }
  ];

  return (
    <>
      <Navbar />
    <section ref={sectionRef} className={styles.aboutSection}>
   
     
      {/* <Link 
        to="/"
        className={styles.logo}
        onClick={() => sectionRef.current.scrollIntoView({ behavior: 'smooth' })}
        style={{
          fontFamily: 'Poppins',
          
          position: 'sticky',
          top: '0px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'inline-block',
          fontSize: '2rem',
          fontWeight: 'bold',
          textDecoration: 'none',
          color: '#333',
          textAlign: 'center',
          justifyContent: 'center',
          zIndex: '20',
        }}
      >
        Sparkalina
        <h3
          style={{
            position: 'fixed',
            top: '-60px',
            left:'53px',
            fontSize: '1.5rem',
            textDecoration: 'none',
          }}
        >
          Home
        </h3>
      </Link> */}
  
      <div className={styles.backgroundPattern}></div>
      <div className={styles.container}>
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>About <span>The Legacy</span></h2>
          <div className={styles.divider}></div>
          <p>
            For nearly four decades, we have been the epitome of luxury jewelry craftsmanship. 
            Our commitment to excellence has made us the choice of discerning clients worldwide.
          </p>
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Our Story</h3>
            <p>Founded in 1985 by master jeweler Alessandro Mondavi...</p>
      
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>By The Numbers</h3>
            <div>
              {/* Replace with styled SCSS + motion */}
              <div>38+ Years of Excellence</div>
              <div>10K+ Happy Clients</div>
              <div>500+ Unique Designs</div>
              <div>50+ Countries Served</div>
            </div>
          </motion.div>
        </div>

        {/* Feature cards */}
        <div className={styles.featureCards}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={styles.featureCard}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: feature.delay, duration: 0.5 }}
              whileHover={{ scale: 1.1 }} // Add hover animation
              viewport={{ once: true }}
            >
              <div style={{
                width: '4rem',
                height: '4rem',
                margin: '0 auto 1rem',
                background: 'linear-gradient(to bottom right, #d4af37, #b8860b)',
                borderRadius: '999px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <feature.icon size={32} color="white" />
              </div>
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className={styles.cta}
        >
          <Link
            to="/items"
            className={styles.ctaButton}
          >
            Explore Our Collections
          </Link>
        </motion.div>

      </div>
    </section>
    </>
  );
};

export default About;