import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Row, ScrollView } from "components/layout";
import { RouteFactory, homeRouteItmes } from "routes";

import SideBar from "views/sidebar";

const AppRouter = () => {
  return (
    <Router>
      <Row width="100vw" height="100vh" style={{ overflow: "hidden" }}>
        <SideBar />
        <ScrollView>
          <RouteFactory items={homeRouteItmes} />
        </ScrollView>
      </Row>
    </Router>
  );
};

export default AppRouter;
