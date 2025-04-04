import Image from 'next/image';

const Skills = () => {
    return (
        <div className="skills-container">
            <h2>My Skills</h2>
            <div className="grid-skills">
                <div className="skill-card html">
                    <i className="fa-brands fa-html5 html-icon"></i>
                    <p>HTML</p>
                </div>
                <div className="skill-card css">
                    <i className="fa-brands fa-css3-alt css-icon"></i>
                    <p>CSS</p>
                </div>
                <div className="skill-card js">
                    <i className="fa-brands fa-js-square js-icon"></i>
                    <p>Javascript</p>
                </div>
                <div className="skill-card php">
                    <i className="fa-brands fa-php php-icon"></i>
                    <p>PHP</p>
                </div>
                <div className="skill-card python">
                    <i className="fa-brands fa-python python-icon"></i>
                    <p>Python</p>
                </div>
                <div className="skill-card csharp">
                    <Image src='/images/csharp.png' width={24} height={24} style={{ filter: 'grayscale(100%)' }}></Image>
                    <p>C#</p>
                </div>
                <div className="skill-card cpp">
                    <Image src='/images/cpp.png' width={24} height={24} style={{ filter: 'grayscale(100%)'  }}></Image>
                    <p>C++</p>
                </div>
            </div>
        </div>
    )
}

export default Skills;
