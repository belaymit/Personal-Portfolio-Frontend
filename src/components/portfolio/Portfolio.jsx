import React from 'react'
import Project_1 from '../../assets/images/008.jpg'
import Project_2 from '../../assets/images/009.jpg'
import Project_3 from '../../assets/images/010.jpg'
import Project_4 from '../../assets/images/011.jpg'
import Project_5 from '../../assets/images/012.png'
import Project_6 from '../../assets/images/013.jpg'
import './portfolio.css'

const data = [
    {
        id : 1,
         image : Project_1,
        title: 'Orion UI kit - Charts templates & infographics in Figma',
        github: 'https://github.com',
        demo:'https://dribbble.com/shots/18881411-Orion-UI-kit-Charts-templates-infographics-in-Figma'
    },
    {
        id : 2,
         image : Project_2,
        title: 'Charts templates and infographics in Figma',
        github: 'https://github.com',
        demo:'https://dribbble.com/shots/16580766-Orion-UI-kit-Charts-templates-infographics-in-Figma'
    },   
   {
        id : 3,
         image : Project_3,
        title: 'Figma dashboard UI kit for data design web apps',
        github: 'https://github.com',
        demo:'https://dribbble.com/shots/17290917-Eclipse-Figma-dahsboard-UI-kit-for-data-design-web-apps'
    }, 
    {
        id : 4,
         image : Project_4,
        title: 'Maintaining tasks and tracking progress',
        github: 'https://github.com',
        demo:'https://dribbble.com/shots/16955822-Maintaining-tasks-and-tracking-progress'
    },
    {
        id : 5,
         image : Project_5,
        title: 'Orion UI kit - Charts templates & infographics in Figma',
        github: 'https://github.com',
        demo:'https://dribbble.com/shots/18672312-Orion-UI-kit-Charts-templates-infographics-in-Figma'
    },
    {
        id : 6,
         image : Project_6,
        title: 'Eclipse - Figma dashboard UI kit for data design web apps',
        github: 'https://github.com',
        demo:'https://dribbble.com/shots/18814314-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
    }
]

const Portfolio = () => {
  return (
    <section id = 'portfolio'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
        <div className="container portfolio__container">
            {
                data.map(({id, image,title,github, demo})=>{
                    return(
                        <article key={id} className="portfolio__item">
                            <div className="portfolio__item-image">
                                <img src={image} alt={title}/>
                            </div>
                                <h3>{title}</h3>
                            <div className="portfolio__item-cta">
                                <a href={github} className='btn' target='_blank'>Github</a>
                                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                            </div>
                        </article>
                    )
                })
            }
        </div>
    </section>
  )
}

export default Portfolio