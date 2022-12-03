import { useEffect, useState } from 'react';
import { useApp } from '../../context';
import styles from './styles.module.css';
import { GoOctoface } from 'react-icons/go';
import { FaReact } from 'react-icons/fa';
import { GiOctopus } from 'react-icons/gi';
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
} from 'react-icons/si';
import { BsArrowRightShort } from 'react-icons/bs';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';
import { SpeackWhite } from '../../components/image/speack_white';

import { Statistic } from '../../components/statistic';
import { Language } from '../../components/language';

export function Home() {
	// Controlador de la pantalla
	const { screen, content } = useApp();

	// Visibilidad
	const [show, setShow] = useState({});

	useEffect(() => {
		setShow(screen === 'home' ? styles.show : {});
	}, [screen]);

	return (
		<div className={`${styles.container} ${show}`}>
			<div className={styles.margin}>
				<div className={`${styles.logo}`}>
					<img src='./logo.png' />
				</div>
				<div className={styles.title}>
					<h1
						dangerouslySetInnerHTML={{
							__html: content.home.block_1.title,
						}}
					/>
				</div>
				<div className={styles.subtitle}>
					<p>{content.home.block_1.decription}</p>
				</div>
				<div className={styles.get_repository}>
					<a
						href='https://github.com/jscode-es?tab=repositories'
						target='_blank'>
						<GoOctoface />
						{content.home.block_1.link}
					</a>
				</div>
			</div>

			<div className={styles.margin_plus}>
				<Statistic />
			</div>

			<div className={styles.margin_plus}>
				<div className={styles.block_app}>
					<div className={styles.block_app_title}>
						<h4>{content.home.block_2.title}</h4>
						<p>{content.home.block_2.description}</p>
					</div>
					<div className={styles.devices}>
						<div className={styles.devices_pc}></div>
						<div
							className={`${styles.devices_mobile} ${styles.hideMobile}`}></div>
					</div>
				</div>
			</div>

			<div className={styles.margin}>
				<div className={styles.info}>
					<h3>
						<ImQuotesLeft /> {content.home.block_3.content}{' '}
						<ImQuotesRight />
					</h3>
					<h4>Stephen Hawking</h4>
				</div>
			</div>

			<div className={styles.margin_plus}>
				<div className={styles.stack}>
					<div>
						<div className={styles.stack_title}>
							<h2>{content.home.block_4.title}</h2>
							<div></div>
						</div>
						<p>{content.home.block_4.description}</p>
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
							<span>{content.home.block_4.title_2}</span>
							<h2>{content.home.block_4.description_2}</h2>
							<p>{content.home.block_4.content_2}</p>
							<a
								href='https://github.com/jscode-es/app-marvel'
								target='_blank'
								className={styles.link}>
								{content.home.block_4.link_2}
								<BsArrowRightShort />
							</a>
						</div>
					</div>
				</div>
			</div>

			<div className={styles.margin_plus}>
				<div className={`${styles.stack} ${styles.stack_reverse}`}>
					<div>
						<div className={styles.tag}>
							<span>{content.home.block_5.title_2}</span>
							<h2>{content.home.block_5.description_2}</h2>
							<p>{content.home.block_5.content_2}</p>
							<a
								href='https://www.npmjs.com/package/object_mysql'
								target='_blank'
								className={styles.link}>
								{content.home.block_5.link_2}{' '}
								<BsArrowRightShort />
							</a>
						</div>
					</div>
					<div>
						<div className={styles.stack_title}>
							<h2>{content.home.block_5.title}</h2>
							<div></div>
						</div>
						<p>{content.home.block_5.description}</p>
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
					<h1>{content.home.block_6.title}</h1>
					<div className={styles.speack_me}>
						<SpeackWhite />
					</div>
					<h2>{content.home.block_6.description}</h2>
					<p>{content.home.block_6.content}</p>
					<div className={styles.list_tech_speack_me}>
						<SiMysql />
						<SiRedis />
						<FaReact />
						<SiJest />
						<SiTypescript />
						<SiExpress />
					</div>
					<a
						href='https://speack.me/'
						target='_blank'>
						{content.home.block_6.link}
					</a>
				</div>
			</div>

			<div className={styles.margin_plus}>
				<div className={styles.build}>
					<small>
						{content.footer.build_site} Vite + React · JSCode
						v.1.0.1
					</small>
					<Language />
				</div>
			</div>
		</div>
	);
}
