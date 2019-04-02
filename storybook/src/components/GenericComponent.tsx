import React, { lazy, Suspense } from "react";
import { match } from "react-router";

interface componentRoute {
  componantPath: string;
}

export const GenericComponent = (props: { match: match<componentRoute> }) => {
  const Component = lazy(() => import(`./${props.match.params.componantPath}`));

  return <Component />;
};
