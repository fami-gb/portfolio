import Image from 'next/image';

const About = () => {
    return (
        <div className='about-container'>
            <h2>About Me</h2>
            <div className='flex-about'>
                <div className='about-text'>
                    <p>
                        中学生のころにソフトウェア開発に興味を持ち、C#を通してプログラミングの知見を広げた。<br />
                        その後、HTMLやCSS、PythonやJavaScriptなど様々な言語に触れる。<br />
                    </p>
                    <p>
                        神奈川工科大学に進学し、実務での開発を知るために<strong>株式会社いえらぶ</strong>で約1年ほどの長期インターンシップを経験する。<br />
                        インターンシップでは主にUI/UXの改修業務を行った。Gitlabを用いたチーム開発で実務での開発のイメージを掴むことが出来た。<br />
                    </p>
                    <p>
                        大学ではKAIT EDTCというサークルに所属し、HPなどの開発をGitHubを用いて同期と協力しながら行っている。

                    </p>
                </div>
                {/* <div className='about-img'>
                    <Image serc='/image/about.png' className='profile-img' width={300} height={500} /> 
                </div> */}
            </div>
        </div>
    )
}

export default About;
