import React, { lazy, Suspense } from 'react';
const layouts = {
  NUMBERED: lazy(() => import('./Numbered')),
  TIMELINE: lazy(() => import('./Timeline')),
  BOXES: lazy(() => import('./Boxes')),
};

const FeatureGridSection = (props) => {
  const getListsPerRow = (props) => {
    if (!props.listsPerRow) return 3;
    if (props.listsPerRow === 'THREE') return 3;
    if (props.listsPerRow === 'FOUR') return 4;
    return 3;
  };
  const data = { ...props, listsPerRow: getListsPerRow(props) };
  const LayoutComponent = layouts[props.layoutType];
  if (!LayoutComponent) {
    return null;
  }
  return (
    <Suspense fallback={null}>
      <LayoutComponent data={data} />
    </Suspense>
  );
};
export default FeatureGridSection;
