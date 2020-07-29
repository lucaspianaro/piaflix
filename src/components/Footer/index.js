import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://piaflix.vercel.app/">
        <img src="https://fontmeme.com/permalink/200729/1d2def85dc8af9c748eba5c5c73ed4a3.png" alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado por
        {' '}
        <a href="https://github.com/lucaspianaro">
          Lucas Pianaro
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
