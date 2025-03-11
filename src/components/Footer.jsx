const Footer = () => {
    return (
        <>
            <hr />
            <div className="footer-container">
                <p>
                    {new Date().getFullYear()} famigbのポートフォリオ
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
        </>
    )
}

export default Footer;
