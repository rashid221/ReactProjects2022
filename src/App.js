import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import News from "./News";

function App() {
  let apikey = process.env.REACT_APP_NEWS_API
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <News
              key="general"
              apikey={apikey}
              pageSize={5}
              country="in"
              category="general"
            />
          </Route>
          <Route exact path="/business">
            <News
              key="business"
              apikey={apikey}
              pageSize={5}
              country="in"
              category="business"
            />
          </Route>
          <Route exact path="/entertainment">
            <News
              key="entertainment"
              apikey={apikey}
              pageSize={5}
              country="in"
              category="entertainment"
            />
          </Route>
          <Route exact path="/general">
            <News
              key="general"
              apikey={apikey}
              pageSize={5}
              country="in"
              category="general"
            />
          </Route>
          <Route exact path="/health">
            <News
              key="health"
              apikey={apikey}
              pageSize={5}
              country="in"
              category="health"
            />
          </Route>
          <Route exact path="/science">
            <News
              key="science"
              apikey={apikey}
              pageSize={5}
              country="in"
              category="science"
            />
          </Route>
          <Route exact path="/sports">
            <News
              key="sports"
              apikey={apikey}
              pageSize={5}
              country="in"
              category="sports"
            />
          </Route>
          <Route exact path="/technology">
            <News
              key="technology"
              apikey={apikey}
              pageSize={5}
              country="in"
              category="technology"
            />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
export default App;
