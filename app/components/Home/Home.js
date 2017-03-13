import React, {PropTypes} from 'react';
import {container, title, slogan } from './styles.css';
export default function Home (props) {
  return (
    <div className={container}>
      <p className={title}>{'Blogs'}</p>
      <p className={slogan}>{'Welcome to Duc Tran social blogpost'}</p>
    </div>
  );
}
