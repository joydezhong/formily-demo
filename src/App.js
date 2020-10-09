import React, {Fragment} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { Card, Row, Col, Button } from "antd";

import "antd/dist/antd.css";
import './App.css';

import SimpleFormily from './components/simple'
import BasicFormily from "./components/basic";
import ComplexLinkFormily from "./components/complex";
import TabsFormily from "./components/tabsForm";
import ExtendFormily from "./components/extend";

function App() {
  return (
    <div className="App">
      <Card>
        <Router>
          <Row gutter={[40, 20]}>
            <Col span={2}>
              <Button>
                <Link to="/">Root</Link>
              </Button>
            </Col>
            <Col span={2}>
              <Button>
                <Link to="/SimpleFormily">SimpleFormily</Link>
              </Button>
            </Col>
            <Col span={2}>
              <Button>
                <Link to="/BasicFormily">BasicLinkFormily</Link>
              </Button>
            </Col>
            <Col span={2}>
              <Button>
                <Link to="/complexLinkFormily">complexLinkFormily</Link>
              </Button>
            </Col>
            <Col span={2}>
              <Button>
                <Link to="/TabsFormily">TabsFormily</Link>
              </Button>
            </Col>
            <Col span={2}>
              <Button>
                <Link to="/ExtendFormily">ExtendFormily</Link>
              </Button>
            </Col>
          </Row>
          <hr />
          <Switch>
            <Fragment>
              <Route path="/">
                <h3>Hello, everybody!</h3>
              </Route>
              <Route path="/SimpleFormily">
                <SimpleFormily />
              </Route>
              <Route path="/BasicFormily">
                <BasicFormily />
              </Route>
              <Route path="/complexLinkFormily">
                <ComplexLinkFormily />
              </Route>
              <Route path="/TabsFormily">
                <TabsFormily />
              </Route>
              <Route path="/ExtendFormily">
                <ExtendFormily />
              </Route>
            </Fragment>
          </Switch>
        </Router>
      </Card>
    </div>
  );
}

export default App;
