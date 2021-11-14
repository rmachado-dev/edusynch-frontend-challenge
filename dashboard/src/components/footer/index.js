import React from 'react';
import './footer.css';

const Footer = () => {
    return (
      <>
      <div className='text-center py-3 mt-5 bg-white d-block d-lg-none'>
        <p>Copyright © 2020 <strong>Eduick.</strong></p>
      </div>
      <div className='text-center py-3 mt-5 bg-white d-none d-lg-block'>
        <p>Copyright © 2020 <strong>Eduick.</strong> Todos os direitos reservados.</p>
      </div>
      </>
    );
}

export default Footer;