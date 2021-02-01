import React from 'react';
import './Header.css';

export default ({black}) => {
    return (
      <header className = {black? 'black' : ''}>
          <div className ="header--logo">
              <a href="/">
                  <img src="https://logos-download.com/wp-content/uploads/2016/03/Netflix_logo.png" alt = "Netflix"></img>
              </a>
          </div>
          <div className ="header--user">
          <a href="/">
                  <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png" alt = "Usuário"></img>
              </a>
          </div>
      </header>  
    );
}