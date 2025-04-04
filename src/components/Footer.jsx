const Footer = () => {
    return (
        <>
            <footer>
                <hr />
                <div className="footer-container">
                    <p>
                        {new Date().getFullYear()} Portfolio
                    </p>
                    <div className="social_icons">
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
            </footer>
        </>
    )
}

export default Footer;
