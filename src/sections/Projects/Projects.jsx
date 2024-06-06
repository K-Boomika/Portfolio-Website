import React from 'react'
import styles from './ProjectsStyles.module.css';
import logo1 from '../../assets/1.jpg';
import logo2 from '../../assets/8.jpg';
import logo3 from '../../assets/3.jpg';
import logo4 from '../../assets/4.jpg';
import logo5 from '../../assets/5.jpg';
import logo6 from '../../assets/6.jpg';
import logo7 from '../../assets/7.jpg';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard src={logo1} link="https://github.com/K-Boomika/CodeCraft-VR" h3="CodeCraft VR" p="Virtual Reality App"/>
        <ProjectCard src={logo5} link="https://github.com/K-Boomika/GeoQuest-AR" h3="GeoQuest AR" p="Augmented Reality App"/>
        <ProjectCard src={logo6} link="https://github.com/K-Boomika/RenderingEngine" h3="Graphics Rendering Engine" p="Rendering Engine"/>
        <ProjectCard src={logo7} link="https://github.com/K-Boomika/CSP-GraphColoring" h3="Graph Coloring Tool" p="Artificial Intelligence"/>
        <ProjectCard src={logo3} link="https://github.com/K-Boomika/Pitcher-Game" h3="Pitcher Game Solver" p="Artificial Intelligence"/>
        <ProjectCard src={logo2} link="https://github.com/K-Boomika/CISCComputerSimulator" h3="CISC Simulator" p="Computer Architecture"/>
        <ProjectCard src={logo4} link="https://github.com/amishraj/QuizG" h3="Quiz G" p="Quiz Application"/>
      </div>
    </section>
  );
}

export default Projects
