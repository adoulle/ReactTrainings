import React, { lazy, Suspense } from "react";
import { match } from "react-router";
import AppContext, { IComponentInfo } from "../AppContext";
import AddButton from "./AddButton";

interface componentRoute {
  componentName: string;
}

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
  const Component = (path: string) => lazy(() => import(`${path}`));

  return (
    <AppContext.Consumer>
      {ctx => (
        <Suspense
          fallback={() => {
            <div />;
          }}
        >
          <AddButton />
        </Suspense>
      )}
    </AppContext.Consumer>
  );
};
