import PropTypes from 'prop-types';
import Layout from '../components/layout';
import GlobalStyles from '../styles/GlobalStyles';
import { ApolloProvider } from '@apollo/client';
import '../styles/fonts.css';

import ApolloClient from '../apollo';

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
};

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <GlobalStyles />
      <ApolloProvider client={ApolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Layout>
  );
}

export default MyApp;
