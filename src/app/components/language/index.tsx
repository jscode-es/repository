import { useRef, useState } from 'react';
import { useApp } from '../../context';
import styles from './styles.module.css';
import { FiGlobe } from 'react-icons/fi';
import { useOutClick } from '../../utils/outClick';
import { langs } from '../../i18n/list';

export function Language() {
	const { setLang, content } = useApp();

	const [show, setShow] = useState('');

	const openCloseMenu = () => setShow(show.length ? '' : styles.show);

	const changeLang = (lang: string) => (setShow(''), setLang(lang));

	const wrapperRef = useRef(null);

	useOutClick(wrapperRef, () => setShow(''));

	const Language = ({ data }: any) => {
		return (
			<div className={styles.list}>
				{data.map((item: any, index: any) => {
					return (
						<button
							key={index}
							onClick={() => changeLang(item.iso)}>
							{item.lang}
						</button>
					);
				})}
			</div>
		);
	};

	return (
		<div
			className={styles.container}
			ref={wrapperRef}>
			<button
				className={styles.btn}
				onClick={openCloseMenu}>
				<span>
					<FiGlobe /> {content.footer.select_region}
				</span>
			</button>
			<div className={`${styles.content} ${show}`}>
				<div className={styles.margin}>
					<h4>{content.footer.title_change_region}</h4>
					<p>{content.footer.description_change_region}</p>
					<div className={styles.columns}>
						<div className={styles.row}>
							<h4>{content.footer.america}</h4>
							<Language data={langs.america} />
						</div>
						<div className={styles.row}>
							<h4>{content.footer.europe}</h4>
							<Language data={langs.europe} />
						</div>
						<div className={styles.row}>
							<h4>{content.footer.asia}</h4>
							<Language data={langs.asia} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
