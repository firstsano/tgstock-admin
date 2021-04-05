import React from 'react'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'
import { defaultPath } from '../../../../routes/paths'

export const Logo = () => {
  return (
    <Link className={styles.logo} to={defaultPath()}>
      TGStock Admin
    </Link>
  )
}
