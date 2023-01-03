import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Direct Intranet Liaison</title>
        <meta property="og:title" content="Direct Intranet Liaison" />
      </Helmet>
    </div>
  )
}

export default Home
