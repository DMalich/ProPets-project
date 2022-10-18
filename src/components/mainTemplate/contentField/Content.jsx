import React from "react";
import styled from "styled-components";
import LostAPetForm from "../../forms/LostAPetForm";
import FoundAPetForm from "../../forms/FoundAPetForm";
import { Switch, Route } from "react-router-dom";
import Home from "../../navComponents/Home";
import Lost from "../../navComponents/Lost";
import Found from "../../navComponents/Found";
import Walking from "../../navComponents/Walking";
import VetHelp from "../../navComponents/VetHelp";
import BeautyStudios from "../../navComponents/BeautyStudios";
import Hotels from "../../navComponents/Hotels";
import AddPost from "../../forms/AddPost";

function Content() {
  return (
    <ContentField>
      <Switch>
        <Route exact path={"/home"} component={Home} />
        <Route exact path={"/lost-form"} component={LostAPetForm} />
        <Route exact path={"/found-form"} component={FoundAPetForm} />
        <Route exact path={"/add-form"} component={AddPost} />
        <Route exact path={"/found"} component={Found} />
        <Route exact path={"/lost"} component={Lost} />
        <Route exact path={"/walking"} component={Walking} />
        <Route exact path={"/vet-help"} component={VetHelp} />
        <Route exact path={"/beauty-studios"} component={BeautyStudios} />
        <Route exact path={"/hotels"} component={Hotels} />
      </Switch>
    </ContentField>
  );
}

const ContentField = styled.div`
  width: 60%;
`;

export default Content;
