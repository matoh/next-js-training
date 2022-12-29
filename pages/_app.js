import '../styles/globals.css';

/**
 * For loading global CSS, top-level React component that wraps all the pages
 * @param Component
 * @param pageProps
 * @returns {JSX.Element}
 * @constructor
 */
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
