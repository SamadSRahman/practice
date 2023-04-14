import React from "react";
import { Link } from "react-router-dom";
import styles from './navbar.module.css'

export function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.linkWrapper}>
        <Link to="/" style={{textDecoration:'none'}}>Home</Link>
      </div>
      <div  className={styles.linkWrapper}>
        <Link to="/create" style={{textDecoration:'none'}}>Create Notes</Link>
      </div>
      <div   className={styles.linkWrapper}>
        <Link to="/update" style={{textDecoration:'none'}}>Update Notes</Link>
      </div>
      <div   className={styles.linkWrapper }>
        <Link to="/delete" style={{textDecoration:'none'}}>Delete Notes</Link>
      </div>
    </header>
  );
}
