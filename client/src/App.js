import React from 'react';
import {
  BrowserRouter,
  Link,
  Switch,
  Route,
  Redirect
} from "react-router-dom";


import PetForm from './views/PetForm';
import UpdateForm from './views/UpdateForm';
import ShowPet from './views/ShowPet';
import Main from'./component/Main';
import Detail from './component/Detail';
import './index.css';
// Main JS file
function App() {
  return (
    // <StyleSheet/>
    // Browser Router will indicate that these will show on all pages that the user is on.
    <BrowserRouter>
      <header>
        <Link to={"/"}>
         <h3> Pet Shelter </h3>
        </Link>
        <Link to={"/pet/new"}>
         <h3> Add A Pet </h3>
        </Link>
      </header>

      <Switch>
        <Route exact path="/pet/new">
          <PetForm />
        </Route>
        <Route exact path="/pet/:id/edit">
          <UpdateForm />
        </Route>
        <Route exact path="/pet/:id">
          <ShowPet />
          <Detail />
        </Route>
        <Route exact path="/">
        <Main />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default App;
