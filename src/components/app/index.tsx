import { useState } from 'react'
import styles from './styles.module.css'
import { GoOctoface } from "react-icons/go";

export function App() {


  return (
    <div className={styles.container}>
      	<div className={styles.margin}>
			<div className={styles.logo}>
				<img src='./logo.png' />
			</div>
			<div className={styles.title}>
			<h1>Landing page template <strong>repository</strong></h1>
			</div>
			<div className={styles.subtitle}>
			<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem deserunt amet deleniti provident ex necessitatibus saepe id, quam repudiandae sunt odio suscipit animi doloremque error incidunt natus nihil consequatur nulla.</p>
			</div>
			<div className={styles.get_repository}>
				<a href='https://github.com/jscode-es?tab=repositories'><GoOctoface />Ver todos los repositorios</a>
			</div>
		</div>
		<div className={styles.margin_plus}>
			<div className={styles.block_app}>
				<div className={styles.block_app_title}>
					<h4>Desarrollo de aplicaciones web y mobile</h4>
					<p>Lorem ipsum, dolor sit amet consectetune impedit nulla dolorem dolorum non.</p>
				</div>
				<div className={styles.devices}>
					<div className={styles.devices_pc}>
						devices_pc
					</div>
					<div className={styles.devices_mobile}>
						devices_mobile
					</div>
				</div>
			</div>
		</div>
		<div className={styles.margin}>
			<div className={styles.info}>
				<h3>Harum perferendis reiciendis distinctio rapiente, ullam quos! Dicta non sed aspernatur accusantium?</h3>
			</div>
		</div>
    
    </div>
  )
}