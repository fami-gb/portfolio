import Image from 'next/image';

const Hero = () => {
    return (
        <div className='hero-container'>
            <Image src='/images/profile_img.jpg' className='profile-img' width={300} height={300} alt="famigb's personal headshot" />
            <h1>Hello I'm famigb 👋</h1>
            <p>
                主にバックエンドの開発に力を入れている19歳の学生エンジニアです。
            </p>
            <div className='social-icons'>
                <a 
                href="https://x.com/fami_gb1618"
                aria-label="X"
                target="_blank"
                rel="noopener noreferrer"
                >
                <i className="fa-brands fa-twitter"></i>
                </a>
                <a 
                href="https://github.com/fami-gb"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
                >
                <i className="fa-brands fa-github"></i>
                </a>
            </div>
        </div>
    )
}

export default Hero;
