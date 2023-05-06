import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return <div>
  <Head>
        <title>Mayssam</title>
        <meta name="description" content="Mayssam's portfolio" />
        <link rel="icon" href="/Logo.ico" />
        <link rel='preconnect' href='<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;1,400;1,500;1,700;1,800;1,900&display=swap" rel="stylesheet">
'/>
      </Head>
  <Component {...pageProps} />
  </div>
}

export default MyApp
