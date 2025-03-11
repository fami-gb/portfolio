import { projectData } from './data.js';

const Projects = () => {
    return (
        <div className='projects-container'>
            <h2>My Porjects</h2>
            <div className='projects-grid'>
                {projectData && projectData.map((pj) => (
                    <div className='project-card' key={pj.id}>
                        <div className='project-header'>
                            <i className='fa-regular fa-folder-open folder-icon'></i>
                            <div className='small-icons'>
                                <a href={pj.gitHubLink}><i className='fa-brands fa-github'></i></a>
                            </div>
                        </div>
                        <h3>{pj.title}</h3>
                        <p>{pj.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects;
