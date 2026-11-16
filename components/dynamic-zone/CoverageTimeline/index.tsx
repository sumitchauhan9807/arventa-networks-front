import React, { lazy, Suspense } from 'react';

const types = {
  TYPE1: lazy(() => import('./Type1')),
  TYPE2: lazy(() => import('./Type2')),
};

const FeatureSection = (props) => {
  const Component = types[props.type];

  if (!Component) return null;

  return (
    <Suspense fallback={null}>
    <Component {...props}/>
    </Suspense>
  );
};

export default FeatureSection;