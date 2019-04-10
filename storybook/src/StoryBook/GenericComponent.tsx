import React, { lazy, Suspense, Component } from "react";

export const DynamicComponent = (props: { path: string }) => {
  const LComponent = lazy(() => {
    console.log(`ok ${props.path}`);
    return import(`${props.path}`).catch(() => import("./ErrorComponent"));
  });

  return (
    <Suspense
      fallback={() => {
        <div>Loading</div>;
      }}
    >
      <LComponent />
    </Suspense>
  );
};

export default (props: { path: string }) => {
  return <DynamicComponent path={props.path} />;
};
