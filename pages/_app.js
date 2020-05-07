import App from 'next/app';
import Hero from '../components/shared/Hero';
import Page from '../components/global/Page';

//! Entry point to all of my pages i'm navigating to (Responsible for rendering all of my pages)
//! "Component" <- actual page i'm are navigating to

const MyApp = ({ Component, pageProps }) => {
  const isHomePage = () => Component.name === 'Home';

  //? debugger;
  // console.log("PAGE I'M NAVIGATING TO: ", Component);
  // PAGE I'M NAVIGATING TO:  [Function: Topics]
  // PAGE I'M NAVIGATING TO:  [Function: Portfolios]
  return (
    <Page>
      {isHomePage() && <Hero />}
      <Component {...pageProps} />
      {isHomePage() && (
        <footer id='sticky-footer' className='py-4 bg-black text-white-50 py-3'>
          <div className='container text-center'>
            <small>Copyright &copy; Your Website</small>
          </div>
        </footer>
      )}
    </Page>
  );
};

export default MyApp;

//! whenever we're defining "getInitialProps" in our "_app.js" (_app.js is responsible for rendering all your components) and only topmost "getInitialProps" is called. When we define "getInitialProps" in _app.js, only this "getInitialProps" is called here. "getInitialProps" in your sub-pages (or the pages you are navigating to), they are not called (therefore "Portfolios.getInitialProps" is not called at all)

//? if you are using "getInitialProps" in "_app.js", check your "Component" or the page you are about to render if it already contains "getInitialProps". <- for this import "App"

//! Essentially we're creating "getInitialProps" in every other component when we declare "getInitialProps" here in "_app.js" and its preventing Nextjs to statically optimize our pages.
//! Remove this "getInitialProps" from here.
// MyApp.getInitialProps = async (context) => {
//? debugger;
// "App" <- Referencing the page thats about to be rendered
// and usually "getInitialProps" is an asynchronous function, mark this function as "async"
// const initialProps =
// App.getInitialProps && (await App.getInitialProps(context));

//! "initialProps" = { pageProps : { testingData: 'Just some testing data from portfolios'}} <- from "portfolios" component
//we will receive this in the "pageProps"
//"initialProps" <- merge it with "pageProps"
// return {
// pageProps: {
// appData: 'Hello from _App Component',
// ...initialProps.pageProps,
// },
// };
// };

//?  getInitialProps of _app.js is called first and then getInitialProps of portfolios is called

/**Terminal, we get the output from the server (because NextJs is a server side rendering framework) and some of the code is executed on the browser and some on the server */
