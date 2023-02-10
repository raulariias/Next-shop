import AppContext from '@/context/AppContext';
import Header from '@/components/Header';
import useInitialState from '@/hooks/useInitialState';
import { Quicksand } from '@next/font/google';
import '@/styles/globals.css';

const quicksand = Quicksand({ subsets:['latin'] });

export default function App({ Component, pageProps }) {
    const initialState = useInitialState();

    return (
        <AppContext.Provider value={initialState}>
            <Header />
            <main className={quicksand.className}>
                <Component {...pageProps} />
            </main>
        </AppContext.Provider>
    );
}
