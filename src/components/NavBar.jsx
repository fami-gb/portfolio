import Link from 'next/link';

const NavBar = () => {
    return (
        <div className='nav-container'>
            <div className='logo'>
                <Link href='/'>famigbのポートフォリオ</Link>
            </div>
            <a href="" className='cta-btn'>履歴書</a>
        </div>
    )
}

export default NavBar;
