import { projectData } from './data.js';
import '@/styles/globals.css';
import './index.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Projects() {
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
