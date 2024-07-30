import '../../App.css';
import { motion } from 'framer-motion';
import { skills, langs } from '../skill/list';

export const Page = () => {
  return (
    <div className='page'>
      <IntroSection />
      <SkillSection />
      <ProjectSection />
      <ContactSection />
      <OutroSection />
    </div>
  );
};

const Section = (props) => {
  const { children, introPage, outroPage } = props;
  return (
    <section
      className={`section-container ${introPage || outroPage ? 'item-center' : ''} ${introPage ? 'justify-start' : ''}`}
    >
      {children}
    </section>
  );
};

const IntroSection = () => {
  return (
    <Section introPage>
      <motion.div
        whileInView={'visible'}
        initial={{ opacity: 0 }}
        transition={{ delay: 0.6 }}
        variants={{ visible: { opacity: 1 } }}
      >
        <h1 className='ts'>Hi, I'm</h1>
        <motion.h1
          className='title-gradient'
          initial={{ x: -50, opacity: 0 }}
          transition={{ delay: 0.9 }}
          variants={{ visible: { x: 0, opacity: 1 } }}
        >
          JUSTIN KIM
        </motion.h1>
        <div className='ts'>
          <p>A passionate junior developer </p>
          <p>who loves creating innovative and creative solutions</p>
          <p>Ready to explore my world?</p>
        </div>
        <button className='button'>
          <h3>Contact Me</h3>
        </button>
      </motion.div>
    </Section>
  );
};

const SkillSection = () => {
  return (
    <Section>
      <motion.div whileInView={'visible'}>
        <h1 className='title-gradient'>Skills</h1>
        {skills.map((item, idx) => {
          return (
            <div key={idx}>
              <motion.h3
                initial={{ opacity: 0 }}
                variants={{ visible: { opacity: 1, transition: { duration: 1, delay: idx * 0.2 } } }}
              >
                {item.title}
              </motion.h3>
            </div>
          );
        })}
        {langs.map((item, idx) => {
          return (
            <div key={idx}>
              <motion.h3
                initial={{ opacity: 0 }}
                variants={{ visible: { opacity: 1, transition: { duration: 1, delay: idx * 0.2 } } }}
              >
                {item.title}
              </motion.h3>
            </div>
          );
        })}
      </motion.div>
    </Section>
  );
};

const ProjectSection = () => {
  return <Section></Section>;
};

const ContactSection = () => {
  return (
    <Section>
      <h1 className='title-gradient'>Contact</h1>
    </Section>
  );
};

const OutroSection = () => {
  return (
    <Section outroPage>
      <h1>Thank you</h1>
    </Section>
  );
};
