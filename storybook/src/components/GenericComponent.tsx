import React, { lazy, Suspense } from "react";
import { match } from "react-router";
import AppContext, { IComponentInfo } from "../AppContext";

interface componentRoute {
  componentName: string;
}

export const TmpComponent = (props: { path: string }) => {
  const LComponent = React.lazy(() => import(`${props.path}`));
  return (
    <Suspense
      fallback={() => {
        <div />;
      }}
    >
      <LComponent />
    </Suspense>
  );
};

export const GenericComponent = (props: { match: match<componentRoute> }) => {
  const getPath = (conponents: IComponentInfo[]) => {
    const value = conponents.find(
      c => c.name == props.match.params.componentName
    );
    console.log(props.match.params.componentName);
    console.log(conponents);
    console.log(value);
    return value ? value.path : "";
  };

  return (
    <AppContext.Consumer>
      {ctx => <TmpComponent path={getPath(ctx.components)} />}
    </AppContext.Consumer>
  );
};