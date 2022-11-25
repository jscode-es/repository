import { useState } from "react";
import styles from "./styles.module.css";
import { GoOctoface } from "react-icons/go";
import { FaReact } from "react-icons/fa";
import { GiOctopus } from "react-icons/gi";
import {
	SiJest,
	SiTypescript,
	SiExpress,
	SiMysql,
	SiMicrosoftsqlserver,
	SiOracle,
	SiRedis,
	SiMariadb,
	SiMongodb,
} from "react-icons/si";
import { BsArrowRightShort } from "react-icons/bs";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { SpeackWhite } from "../image/speack_white";

export function App() {
	return (
		<div className={styles.container}>
			<div className={styles.margin}>
				<div className={`${styles.logo}`}>
					<img src="./logo.png" />
				</div>
				<div className={styles.title}>
					<h1>
						Encuentra todos mis <strong>repositorios</strong>
					</h1>
				</div>
				<div className={styles.subtitle}>
					<p>
						Desde aquí podrás observar todo tipo de proyectos que he
						realizado. Desde programas de escritorio, desarrollo de
						aplicaciones mobile híbridas, módulos NPM hasta
						microservicios en la nube.
					</p>
				</div>
				<div className={styles.get_repository}>
					<a
						href="https://github.com/jscode-es?tab=repositories"
						target="_blank"
					>
						<GoOctoface />
						Ver todos los repositorios
					</a>
				</div>
			</div>
			<div className={styles.margin_plus}>
				<div className={styles.block_app}>
					<div className={styles.block_app_title}>
						<h4>Desarrollo de aplicaciones web y mobile</h4>
						<p>
							A continuación verás ejemplos de NextJS y React
							Native
						</p>
					</div>
					<div className={styles.devices}>
						<div className={styles.devices_pc}></div>
						<div
							className={`${styles.devices_mobile} ${styles.hideMobile}`}
						></div>
					</div>
				</div>
			</div>
			<div className={styles.margin}>
				<div className={styles.info}>
					<h3>
						<ImQuotesLeft /> Somos sólo una raza avanzada de monos
						en un planeta menor de una estrella muy normal. Pero
						podemos entender el universo <ImQuotesRight />
					</h3>
					<h4>Stephen Hawking</h4>
				</div>
			</div>
			<div className={styles.margin_plus}>
				<div className={styles.stack}>
					<div>
						<div className={styles.stack_title}>
							<h2>Stack tecnológico</h2>
							<div></div>
						</div>
						<p>
							En los últimos 4 años me he especializado en los
							siguientes framework y librerías
						</p>
						<div className={styles.stack_tech}>
							<div>
								<ul>
									<li>
										<FaReact /> React JS
									</li>
									<li>
										<FaReact /> React Native
									</li>
									<li>
										<GiOctopus /> Testing Library
									</li>
								</ul>
							</div>
							<div>
								<ul>
									<li>
										<SiJest /> Jest
									</li>
									<li>
										<SiTypescript /> Typescript
									</li>
									<li>
										<SiExpress /> Express
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div>
						<div className={styles.tag}>
							<span>Último repositorio</span>
							<h2>Aplicación mobile para Android y iOS</h2>
							<p>
								Esta aplicación está basada en una prueba
								técnica donde se consumía la API de Marvel. Para
								validar que todo funcionara correctamente,
								implementé Testing Library.
							</p>
							<a
								href="https://github.com/jscode-es/app-marvel"
								target="_blank"
								className={styles.link}
							>
								Ir al repositorio <BsArrowRightShort />
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.margin_plus}>
				<div className={`${styles.stack} ${styles.stack_reverse}`}>
					<div>
						<div className={styles.tag}>
							<span>Respositorio destacado</span>
							<h2>Módulo NPM object_mysql</h2>
							<p>
								Para facilitar la implementación de una API
								Rest, se me ocurrió convertir la BBDD de mysql
								en un objecto javascript funcional.
							</p>
							<a
								href="https://www.npmjs.com/package/object_mysql"
								target="_blank"
								className={styles.link}
							>
								Ir al repositorio <BsArrowRightShort />
							</a>
						</div>
					</div>
					<div>
						<div className={styles.stack_title}>
							<h2>Gestión de datos</h2>
							<div></div>
						</div>
						<p>
							En la etapa de desarrollo de software pude
							admisitrar y crear base de datos de las siguientes
							tecnologia
						</p>
						<div className={styles.stack_tech}>
							<div>
								<ul>
									<li>
										<SiMysql /> Mysql
									</li>
									<li>
										<SiMicrosoftsqlserver /> SQL Server
									</li>
									<li>
										<SiOracle /> Oracle DB
									</li>
								</ul>
							</div>
							<div>
								<ul>
									<li>
										<SiRedis /> Redis
									</li>
									<li>
										<SiMariadb /> Maria DB
									</li>
									<li>
										<SiMongodb /> Mongo DB
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.margin}>
				<div className={styles.best_repository}>
					<h1>Proyecto actual</h1>
					<div className={styles.speack_me}>
						<SpeackWhite />
					</div>
					<h2>Plataforma de streaming de alto rendimiento</h2>
					<p>
						En estos momentos soy un consumidor de plataformas de
						streaming de directos, y al ver algunas carencias y
						virtudes, me embarqué a realizar mi propia plataforma de
						streaming. Para ofrecer una plataforma más adecuada a
						las tecnologías actuales.
					</p>
					<a href="https://speack.me/" target="_blank">
						Solicitar acceso a la beta
					</a>
				</div>
			</div>
			<div className={styles.margin_plus}>
				<div className={styles.build}>
					<small>
						Este sitio fue desarrollado con Vite + React · JSCode
						v.1.0.1
					</small>
				</div>
			</div>
		</div>
	);
}
