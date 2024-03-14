import { AppProps } from 'next/app';
import '../styles/globals.css';
import Head from 'next/head';
import Navbar from '../components/navbar/navbar';

function MyApp({ Component, pageProps }: AppProps) {
    return (
		<div className={``}>
			<Head>
				<title>
					{'XL Axiata | ' } 
				</title>
				<link rel="icon" href="xl-logo.png" />
				<meta name="description" content="Beli Paket Internet Termurah Disini!" />
				<meta name="keywords" content="XL" />
				<meta property="og:image" content="xl-logo.png" />
			</Head>
            <Navbar />
            <Component {...pageProps} />
		</div>
    )
}

export default MyApp;