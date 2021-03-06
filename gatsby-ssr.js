import React from 'react';
import i18n from './src/i18n/config';
import { I18nextProvider } from 'react-i18next';


//Wrap all pages with a translation provider
export const wrapRootElement = ({ element }) => {
  return <I18nextProvider i18n={i18n}>{element}</I18nextProvider>;
};
