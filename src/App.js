import React from "react";
import Header from "./components/header/header.component";
import HomePage from "./components/homepage/homepage.component";
import Footer from "./components/footer/footer.component";
import Resume from "./components/resume/resume.component";
import PortfolioPage from "./components/portfolio/portfoliopage.component";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/resume" component={Resume} />
        <Route path="/portfolio" component={PortfolioPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
