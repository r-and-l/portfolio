'use client';

import { ReactNode, useEffect } from 'react';
import '../i18n'; // imports the existing i18n config

export default function I18nProvider({ children }: { children: ReactNode }) {
  // We just need this to run on the client side to initialize i18next
  useEffect(() => {
    // i18n is initialized in the import
  }, []);

  return <>{children}</>;
}
