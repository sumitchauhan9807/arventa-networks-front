import React, { lazy, Suspense } from 'react';

const types = {
  VIRTUAL_NUMBER_SEARCH: lazy(() => import('./VirtualNumberSearch')),
  VIRTUAL_OFFICE_NUMBERS: lazy(() => import('./VirtualOfficeNumbers')),
};

const Index = ({type}) => {
  const Component = types[type];

  if (!Component) return null;

  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
};

export default Index;
