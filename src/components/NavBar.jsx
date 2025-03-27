import Link from 'next/link';

const NavBar = () => {
    return (
        <div className='nav-container'>
            <div className='logo'>
                <Link href='/'>Portfolio</Link>
            </div>
            <a href="/blog" className='blog-btn'>Blog</a>
            <a href="/works" className='works-btn'>Works</a>
            {/* <a href="" className='cta-btn'></a> */}
        </div>
    )
}

export default NavBar;
