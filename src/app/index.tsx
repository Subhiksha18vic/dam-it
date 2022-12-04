/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import { SignIn } from './pages/SignIn';
import { Brands } from './pages/Brands';
import { Layout } from './pages/Layout';
import { CreateBrand } from './pages/CreateBrand';
import { ViewBrand } from './pages/ViewBrand';
import Landing from './pages/Landing';
// import Analytics from './pages/Analytics';

export function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<Layout />}>
          <Route path="/brands" element={<Brands />} />
          <Route path="/create-brand" element={<CreateBrand />} />
          <Route path="/view-brand" element={<ViewBrand />} />
          {/* <Route path="/analytics" element={< Analytics />} /> */}
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
