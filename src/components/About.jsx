import Image from 'next/image';

const About = () => {
    return (
        <div className='about-container'>
            <h2>About Me</h2>
            <div className='flex-about'>
                <div className='about-text'>
                    <p>
                        現在していること
                    </p>
                    <p>豊富的なこと、目標としていること</p>
                </div>
                <div className='about-img'>
                    <Image serc='/image/about.png' className='profile-img' width={300} height={500} /> 
                </div>
            </div>
        </div>
    )
}

export default About;
