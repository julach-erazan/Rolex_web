import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [navbarTop, setNavbarTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        setNavbarTop('-80px');
      } else {
        setNavbarTop('0');
      }

      setLastScrollTop(scrollTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  const handleClickScroll = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav id="navbar" style={{ top: navbarTop }}>
      <h1 className="brand">ROLEX</h1>
      <ul className="list">
        <li>
          <button onClick={() => handleClickScroll('home')}>
            <p>Home</p>
          </button>
        </li>
        <li>
          <button onClick={() => handleClickScroll('about')}>
            <p>About</p>
          </button>
        </li>
        <li>
          <button onClick={() => handleClickScroll('shop')}>
            <p>Shop</p>
          </button>
        </li>
        <li>
          <button onClick={() => handleClickScroll('product')}>
            <p>Product</p>
          </button>
        </li>
        <li>
          <button onClick={() => handleClickScroll('contact')}>
            <p>Contact</p>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
