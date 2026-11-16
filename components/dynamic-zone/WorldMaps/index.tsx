import React, { lazy, Suspense } from 'react';

const types = {
  WORLD_COUNTRIES: lazy(() => import('./WorldCountries')),
  WORLD_MAP: lazy(() => import('./WorldMap')),
  WORLD_NETWORKS: lazy(() => import('./WorldNetworks')),
  WORLD_NETWORKS_MAP: lazy(() => import('./WorldNetworksMap')),
};

const Index = ({ type }) => {
  const Component = types[type];

  if (!Component) return null;

  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
};

export default Index;
