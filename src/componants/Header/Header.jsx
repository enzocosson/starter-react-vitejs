import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import classNames from "classnames";
import styles from "./Header.module.scss";

function Header() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const accueilClass = classNames({
    [styles.active]: location.pathname === "/",
  });

  const servicesClass = classNames({
    [styles.active]: location.pathname === "/services",
  });

  const aProposClass = classNames({
    [styles.active]: location.pathname === "/a-propos",
  });

  const blogClass = classNames({
    [styles.active]: location.pathname === "/blog",
  });

  const contactClass = classNames({
    [styles.active]: location.pathname === "/contact",
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const burgerclass = classNames({
    [styles.burger]: true,
    [styles.burger__active]: isMenuOpen,
  });
  const navbarclass = classNames({
    [styles.navbar]: true,
    [styles.navbar__active]: isMenuOpen,
  });

  function handleClick() {
    setIsMenuOpen(false);
  }

  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeToggle() {
    setIsDarkMode((prevState) => !prevState);

    document.documentElement.style.setProperty(
      "--white",
      isDarkMode ? "#F4F4F4" : "#292929"
    );
    document.documentElement.style.setProperty(
      "--black",
      isDarkMode ? "#292929" : "#F4F4F4"
    );
    document.documentElement.style.setProperty(
      "--white-transparent",
      isDarkMode ? "rgba(244, 244, 244, 0.5)" : "rgba(41, 41, 41, 0.5)"
    );
    document.documentElement.style.setProperty(
      "--black-transparent",
      isDarkMode ? "rgba(41, 41, 41, 0.5)" : "rgba(244, 244, 244, 0.5)"
    );
    document.documentElement.style.setProperty(
      "--soft-grey",
      isDarkMode ? "#565656" : "#e5e5e5"
    );
    document.documentElement.style.setProperty(
      "--light-grey",
      isDarkMode ? "#e5e5e5" : "#565656"
    );
    document.documentElement.style.setProperty(
      "--grey",
      isDarkMode ? "#777777" : "#e5e5e5"
    );

    localStorage.setItem("isDarkMode", !isDarkMode);
  }

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("isDarkMode") === "true";
    setIsDarkMode(savedDarkMode);

    document.documentElement.style.setProperty(
      "--white",
      savedDarkMode ? "#292929" : "#F4F4F4"
    );
    document.documentElement.style.setProperty(
      "--black",
      savedDarkMode ? "#F4F4F4" : "#292929"
    );
    document.documentElement.style.setProperty(
      "--white-transparent",
      savedDarkMode ? "rgba(41, 41, 41, 0.5)" : "rgba(244, 244, 244, 0.5)"
    );
    document.documentElement.style.setProperty(
      "--black-transparent",
      savedDarkMode ? "rgba(244, 244, 244, 0.5)" : "rgba(41, 41, 41, 0.5)"
    );
    document.documentElement.style.setProperty(
      "--soft-grey",
      savedDarkMode ? "#d4d4d4" : "#565656"
    );
    document.documentElement.style.setProperty(
      "--light-grey",
      savedDarkMode ? "#565656" : "#d4d4d4"
    );
    document.documentElement.style.setProperty(
      "--grey",
      savedDarkMode ? "#777777" : "#565656"
    );
  }, []);

  return (
    <header className={styles.header}>
      <Link to="/" className={`${styles.logo}`} onClick={() => handleClick()}>
        Logo
      </Link>

      <div className={`${styles.navbar} ${navbarclass}`}>
        <nav>
          <Link to="/" className={accueilClass} onClick={() => handleClick()}>
            Accueil
          </Link>

          <Link
            to="/services"
            className={servicesClass}
            onClick={() => handleClick()}
          >
            Services
          </Link>

          <Link
            to="/a-propos"
            className={aProposClass}
            onClick={() => handleClick()}
          >
            À propos
          </Link>

          <Link to="/blog" className={blogClass} onClick={() => handleClick()}>
            Blog
          </Link>
        </nav>

        <div className={styles.nav__right__side}>
          <button className={styles.darkmode} onClick={handleDarkModeToggle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              width="256"
              height="256"
              viewBox="0 0 256 256"
              xmlSpace="preserve"
            >
              <defs></defs>
              <g
                style={{
                  stroke: "none",
                  strokeWidth: 0,
                  strokeDasharray: "none",
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                  strokeMiterlimit: 10,
                  fillRule: "nonzero",
                  opacity: 1,
                }}
                transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
              >
                <path
                  d="M 46.715 90 c -3.908 0 -7.841 -0.514 -11.717 -1.552 C 23.391 85.337 13.69 77.893 7.682 67.487 C 1.674 57.08 0.077 44.957 3.188 33.349 c 3.11 -11.607 10.554 -21.308 20.961 -27.316 c 8.601 -4.967 18.349 -6.923 28.193 -5.659 c 1.257 0.162 2.277 1.095 2.548 2.332 c 0.271 1.238 -0.265 2.512 -1.338 3.185 c -13.943 8.735 -18.418 26.742 -10.188 40.996 l 0 0 C 51.592 61.14 69.426 66.268 83.96 58.56 c 1.117 -0.596 2.491 -0.421 3.426 0.434 c 0.936 0.854 1.235 2.204 0.746 3.373 c -3.826 9.156 -10.395 16.621 -18.997 21.586 C 62.204 87.955 54.509 90 46.715 90 z M 43.74 6.101 c -5.805 0.421 -11.436 2.15 -16.592 5.127 c -9.019 5.207 -15.47 13.614 -18.166 23.674 C 6.287 44.961 7.67 55.469 12.877 64.488 c 5.207 9.019 13.614 15.471 23.673 18.165 c 10.058 2.697 20.567 1.311 29.585 -3.895 c 5.156 -2.977 9.47 -6.989 12.737 -11.806 c -15.547 4.094 -32.303 -2.515 -40.705 -17.066 l 0 0 C 29.768 35.336 32.427 17.518 43.74 6.101 z"
                  style={{
                    stroke: "none",
                    strokeWidth: 1,
                    strokeDasharray: "none",
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                    strokeMiterlimit: 10,
                    fillRule: "nonzero",
                    opacity: 1,
                  }}
                  transform="matrix(1 0 0 1 0 0)"
                  strokeLinecap="round"
                />
              </g>
            </svg>
            dm
          </button>

          <div className={styles.contact}>
            <a
              href="mailto:test@gmail.fr"
              className={contactClass}
              onClick={() => handleClick()}
            >
              test@gmail.fr
            </a>
          </div>
        </div>
      </div>

      <button
        className={burgerclass}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </button>
    </header>
  );
}

export default Header;
