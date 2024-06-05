import styles from './HeroStyles.module.css'
import heroImg from '../../assets/boomika-img.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import linkedinlight from '../../assets/linkedin-light.svg'
import linkedindark from '../../assets/linkedin-dark.svg'
import githublight from '../../assets/github-light.svg'
import githubdark from '../../assets/github-dark.svg'
import CV from '../../assets/cv.pdf'
import { useTheme } from '../../common/ThemeContext'

function Hero() {

  const {theme, toggleTheme} = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const linkedinIcon = theme === 'light' ? linkedinlight : linkedindark;
  const GithubIcon = theme === 'light' ? githublight : githubdark;

  return (
    <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img 
                className={styles.hero} 
                src={heroImg} 
                alt='Profile picture of Boomika Karuppaiah'
            />
            <img 
                className={styles.colorMode}
                src={themeIcon} 
                alt="Color mode icon"
                onClick={toggleTheme}
            />
        </div>
        <div className={styles.info}>
            <h1>Boomika<br/>Karuppaiah</h1>
            <h2>Software Engineer</h2>
            <span>
                <a href="https://www.linkedin.com/in/boomika-karuppaiah/" target="_blank">
                    <img src={linkedinIcon} alt="Linkedin icon" />
                </a>
                <a href="https://github.com/K-Boomika" target="_blank">
                    <img src={GithubIcon} alt="Github icon" />
                </a>
            </span>
            <p className={styles.description}>
                Enthusiastic about coding, curious about technology, and always eager to help!
            </p>
            <a href={CV} download>
                <button className="hover" download>
                    Resume    
                </button>
            </a>
        </div>
    </section>
  )
}

export default Hero
