import React from 'react';
import { Helmet } from 'react-helmet-async';

const Meta = ({
  title = 'Welcome to Comments Dashboard App',
  description = 'Comments Dashboard App by Rudy Nurafif',
  keywords = 'dashboard, dashboard app, table dashboard, rudy nurafif, rudy asa nurafif',
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
    </Helmet>
  );
};

export default Meta;
