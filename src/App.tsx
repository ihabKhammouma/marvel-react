import { Route } from "wouter";
import { ListHero } from "./pages";
import { Navbar } from "./components/Navbar";
function App() {
  return (
    <Navbar>
      <Route path="/" component={ListHero} />
    </Navbar>
  );
}

export default App;
