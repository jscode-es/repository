import { createContext, useState, useContext, useEffect } from 'react';

const ScreenContext = createContext<any>({} as any);

import * as dataLang from '../i18n';

const userLang = navigator.language;

export function AppProvider({ children }: any) {
	const langDevice = userLang.split('-')[0];

	// Manager screen
	const [screen, setScreen] = useState('home');

	// Manager language
	const [lang, setLang] = useState(langDevice);
	const [content, setContent] = useState((dataLang as any)[langDevice]);

	useEffect(() => {
		const isExist = (dataLang as any)[lang];

		const select = isExist ? lang : 'en';

		document.documentElement.setAttribute('lang', select);

		setContent((dataLang as any)[select]);
	}, [lang]);

	return (
		<ScreenContext.Provider
			value={{
				screen,
				setScreen,
				lang,
				setLang,
				content,
				setContent,
			}}>
			{children}
		</ScreenContext.Provider>
	);
}

export const useApp = () => useContext(ScreenContext);
