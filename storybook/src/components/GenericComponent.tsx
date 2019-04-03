import React, { lazy, Suspense } from "react";
import AppContext, { IComponentInfo } from "../AppContext";

export const TmpComponent = (props: { path: string }) => {
  const LComponent = React.lazy(() => {
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

export const GenericComponent = (props: { path: string }) => {
  return <TmpComponent path={props.path} />;
};
