import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';
import db from '../db.json';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

const { theme } = db;

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>AluraQuiz - Flutter</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />

        {/* Primary Meta Tags */}
        <meta name="title" content="AluraQuiz - Flutter" />
        <meta name="description" content="Quiz desenvolvido durante a imersão React da Alura com o tema 'Flutter'" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://imersao-react-next-alura.joaofilhog3.vercel.app/" />
        <meta property="og:title" content="AluraQuiz - Flutter" />
        <meta property="og:description" content="Quiz desenvolvido durante a imersão React da Alura com o tema 'Flutter'" />
        <meta property="og:image" content="https://miro.medium.com/max/1838/1*PblQquEXxZ6U1BmBNlEprA.jpeg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://imersao-react-next-alura.joaofilhog3.vercel.app/" />
        <meta property="twitter:title" content="AluraQuiz - Flutter" />
        <meta property="twitter:description" content="Quiz desenvolvido durante a imersão React da Alura com o tema 'Flutter'" />
        <meta property="twitter:image" content="https://miro.medium.com/max/1838/1*PblQquEXxZ6U1BmBNlEprA.jpeg" />

      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
