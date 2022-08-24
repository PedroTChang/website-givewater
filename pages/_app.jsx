import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className='bg-fixed bg-center bg-cover custom-img' />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
