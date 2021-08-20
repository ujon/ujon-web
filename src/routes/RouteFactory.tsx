import React, { FC, useLayoutEffect, useState, Fragment } from "react";
import { Route, Switch, RouteComponentProps } from "react-router-dom";

export interface RouteItems {
  name: string;
  path: string;
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
  exact: boolean;
  priority?: number;
}

interface RouteFactoryProps {
  switchable?: boolean;
  items: RouteItems[];
}

export const RouteFactory: FC<RouteFactoryProps> = ({ switchable, items }) => {
  const [routes, setRoutes] = useState<RouteItems[]>([]);

  useLayoutEffect(() => {
    const copiedItmes = items.map((v) => ({ ...v }));
    setRoutes(copiedItmes);
  }, [items]);

  const handleSort = <T extends RouteItems>(a: T, b: T) => {
    if (a.priority === undefined) a.priority = 0;
    if (b.priority === undefined) b.priority = 0;

    return a.priority - b.priority;
  };

  const builder = routes.sort(handleSort).map((route, index) => {
    return (
      <Route
        key={`route_factory_${index}`}
        exact={route.exact}
        path={route.path}
        component={route.component}
      />
    );
  });

  if (switchable) return <Switch>{builder}</Switch>;
  return <Fragment>{builder}</Fragment>;
};
RouteFactory.defaultProps = {
  switchable: true,
};
