import { AppProvider } from './context';
import { Home } from './screen';

export function App() {
	return (
		<AppProvider>
			<Home />
		</AppProvider>
	);
}
