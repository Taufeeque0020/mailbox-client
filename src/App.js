import "./App.css";
import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Login from "./pages/Login";
import { Route, Switch } from "react-router-dom";
import { Fragment, useEffect } from "react";
import Welcome from "./pages/Welcome";
import ComposeMail from "./pages/ComposeMail";
import Mailbox from "./pages/Mailbox";
import SentMail from "./pages/SentMail";
import { useDispatch } from "react-redux";
import { fetchRecievedMail, fetchSentMail } from "./store/compose-actions";
import Inbox from "./pages/Inbox";
import MessageBox from "./pages/MessageBox";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    setInterval(() => {
      dispatch(fetchSentMail());
      dispatch(fetchRecievedMail());
    }, 2000);
  }, [dispatch]);
  
  return (
    <Fragment>
      <Switch>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/mailbox">
          <Mailbox />
        </Route>
        <Route path="/compose">
          <Mailbox />
          <ComposeMail />
        </Route>
        <Route path="/sentmail">
          <Mailbox />
          <SentMail />
        </Route>
        <Route path="/inbox" exact>
          <Mailbox />
          <Inbox />
        </Route>
        <Route path="/inbox/:email">
          <Mailbox />
          <MessageBox />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
