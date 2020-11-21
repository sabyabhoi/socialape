import Head from 'next/head'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "../components/Header";

const Home = () => {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			
			<Header></Header>
			<main className={styles.main}>
				Welcome to Social Ape
      </main>
		</div>
	)
}

export default Home;