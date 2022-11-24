import { useState } from 'react'
import styles from './styles.module.css'
import { GoOctoface } from 'react-icons/go'
import { FaReact }  from 'react-icons/fa'
import { GiOctopus } from 'react-icons/gi'
import { SiJest, SiTypescript, SiExpress } from 'react-icons/si'
import { BsArrowRightShort } from 'react-icons/bs'
import { ImQuotesLeft, ImQuotesRight} from 'react-icons/im'

export function App() {

  return (
    <div className={styles.container}>
      	<div className={styles.margin}>
			<div className={`${styles.logo}`}>
				<img src='./logo.png' />
			</div>
			<div className={styles.title}>
			<h1>Encuentra todos mis <strong>repositorios</strong></h1>
			</div>
			<div className={styles.subtitle}>
			<p>Desde aqui podrá observar todo tipo de proyectos que he realizado. Desde programas de escritorio, desarrollo de aplicaciones mobile hibridas, modulos NPM hasta microservicios en la nube.</p>
			</div>
			<div className={styles.get_repository}>
				<a href='https://github.com/jscode-es?tab=repositories' target='_blank'><GoOctoface />Ver todos los repositorios</a>
			</div>
		</div>
		<div className={styles.margin_plus}>
			<div className={styles.block_app}>
				<div className={styles.block_app_title}>
					<h4>Desarrollo de aplicaciones web y mobile</h4>
					<p>A continuación podrá observar ejemplos de NextJS y React Native</p>
				</div>
				<div className={styles.devices}>
					<div className={styles.devices_pc}></div>
					<div className={`${styles.devices_mobile} ${styles.hideMobile}`}></div>
				</div>
			</div>
		</div>
		<div className={styles.margin}>
			<div className={styles.info}>
				<h3><ImQuotesLeft/> Somos sólo una raza avanzada de monos en un planeta menor de una estrella muy normal. Pero podemos entender el universo <ImQuotesRight/></h3>
				<h4>Stephen Hawking</h4>
			</div>
		</div>
		<div className={styles.margin_plus}>
			<div className={styles.stack}>
				<div>
					<h2>Stack tecnologico</h2>
					<p>En los últimos 4 años me he especializado en las siguientes framework y librerias</p>
					<div className={styles.stack_tech}>
						<div>
							<ul>
								<li><FaReact/> React JS</li>
								<li><FaReact/> React Native</li>
								<li><GiOctopus/> Testing Library</li>
							</ul>
						</div>
						<div>	
							<ul>
								<li><SiJest/> Jest</li>
								<li><SiTypescript/> Typescript</li>
								<li><SiExpress/> Express</li>
							</ul>
						</div>
					</div>
				</div>
				<div>
					<div className={styles.tag}>
						<span>Último repositorio</span>
						<h2>Aplicación mobile para Android y iOS</h2>
						<p>Esta aplicación está basada en una prueba tecnica donde se consumia la API de Marvel. Para validar que todo funcionara correctamente, implementé Testing Library.</p>
						<a href='https://github.com/jscode-es/app-marvel' target='_blank' className={styles.link}>Ir al repositorio <BsArrowRightShort/></a>
					</div>
				</div>
				
			</div>
		</div>
		<div className={styles.margin_plus}>
			<div className={styles.build}>
				<small>Este sitio fue desarrollado con Vite + React · JSCode v.1.0.1</small>
			</div>
		</div>
    </div>
  )
}