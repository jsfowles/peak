import React from 'react';
import { useRouter } from 'next/router';

export const ScrollOnLoad = () => {
  const router = useRouter();

  React.useEffect(() => {
    const hasHash = !!window.location.hash;
    if (hasHash) {
      router.replace(router.asPath);
    }
  }, []);

  return null;
};
