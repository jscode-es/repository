import styles from "./styles.module.css";

export const Statistic = () => {
	const totalDaysDev = () => {
		let date1 = new Date("01/01/2017");
		let date2 = new Date(Date.now());

		// To calculate the time difference of two dates
		let Difference_In_Time = date2.getTime() - date1.getTime();

		// To calculate the no. of days between two dates
		let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

		return Math.floor(Difference_In_Days);
	};

	return (
		<div className={styles.statistic}>
			<div>
				<h1>74</h1>
				<span>Repositorios</span>
			</div>
			<div>
				<h1>200%</h1>
				<span>NodeJS FullStack</span>
			</div>
			<div>
				<h1>{totalDaysDev()}</h1>
				<span>Días Desarrollando</span>
			</div>
			<div>
				<h1>58</h1>
				<span>Estrellas github</span>
			</div>
		</div>
	);
};
