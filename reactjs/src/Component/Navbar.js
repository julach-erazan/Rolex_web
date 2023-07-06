import React from 'react';

function Navbar() {
    const handleClickScroll_home = () => {
        const element = document.getElementById('home');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

      const handleClickScroll_about = () => {
        const element = document.getElementById('about');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

      const handleClickScroll_shop = () => {
        const element = document.getElementById('shop');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

      const handleClickScroll_product = () => {
        const element = document.getElementById('product');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

      const handleClickScroll_contact = () => {
        const element = document.getElementById('contact');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

    return ( 
        <nav>
            <h1 className='brand'>ROLEX</h1>
            <ul className='list'>
                <li><button onClick={handleClickScroll_home}><p>Home</p></button></li>
                <li><button onClick={handleClickScroll_about}><p>About</p></button></li>
                <li><button onClick={handleClickScroll_shop}><p>Shop</p></button></li>
                <li><button onClick={handleClickScroll_product}><p>Product</p></button></li>
                <li><button onClick={handleClickScroll_contact}><p>Contact</p></button></li>
            </ul>
        </nav>
     );
}

export default Navbar;