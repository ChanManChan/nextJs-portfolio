//! Pretend we're making some asynchronous calls
const apiCall = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res({ testingData: 'Just some testing data from portfolios' });
    }, 200);
    //! we need to wait 5s until this data is resolved and this page is displayed
  });
};

const Portfolios = (props) => {
  // debugger;
  return (
    <>
      {props.testingData}
      <section className='section-title'>
        <div className='px-2'>
          <div className='pt-5 pb-4'>
            <h1>Portfolios</h1>
          </div>
        </div>
      </section>
      <section className='pb-5'>
        <div className='row'>
          <div className='col-md-4'>
            <div className='card subtle-shadow no-border'>
              <div className='card-body'>
                <h5 className='card-title'>Card title</h5>
                <h6 className='card-subtitle mb-2 text-muted'>Card subtitle</h6>
                <p className='card-text fs-2'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className='card-footer no-border'>
                <small className='text-muted'>Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='card subtle-shadow no-border'>
              <div className='card-body'>
                <h5 className='card-title'>Card title</h5>
                <h6 className='card-subtitle mb-2 text-muted'>Card subtitle</h6>
                <p className='card-text fs-2 '>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className='card-footer no-border'>
                <small className='text-muted'>Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='card subtle-shadow no-border'>
              <div className='card-body'>
                <h5 className='card-title'>Card title</h5>
                <h6 className='card-subtitle mb-2 text-muted'>Card subtitle</h6>
                <p className='card-text fs-2 '>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className='card-footer no-border'>
                <small className='text-muted'>Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

//! "getInitialProps" <- is not called in the browser, its called in the server
//! usually with "getInitialProps", we fetch some information from a server (asynchronous call)
// Before the server handles your page to display in a browser, it will call "getInitialProps" and it waits until this function is resolved (so that you will get the data you desire to populate your page with, and then the server will return it to the users )
Portfolios.getInitialProps = async () => {
  // debugger;
  const data = await apiCall();
  return { ...data };
};
export default Portfolios;
