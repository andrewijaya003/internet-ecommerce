import { AppProps } from 'next/app';
import '../styles/globals.css';
import Head from 'next/head';
import Navbar from '../components/navbar/navbar';
import Footer from '@/components/footer/footer';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter()

	useEffect(() => {
		const user = localStorage.getItem('user')

		if(!user && (router.pathname.includes('transaksi'))) {
			router.push('/')
		} else if(user && router.pathname.includes('masuk')) {
			router.push('/')
		}
	})

    return (
		<div className={``}>
			<Head>
				<title>
					{'XL Axiata'} 
				</title>
				<link rel="icon" href="xl-logo.png" />
				<meta name="description" content="Beli Paket Internet Termurah Disini!" />
				<meta name="keywords" content="XL" />
				<meta property="og:image" content="xl-logo.png" />
			</Head>
            <Navbar />
            <Component {...pageProps} />
			<Footer />
		</div>
    )
}

export default MyApp;