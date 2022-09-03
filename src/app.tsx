import * as React from "react"
import * as ReactDOM from 'react-dom'
import {useCraftDarkMode} from "./hooks/useCraftDarkMode";
import {InsertHelloWorldComponent} from "./InsertHelloWorldComponent";
import {Layout} from "./Layout";

const App: React.FC<{}> = () => {
  const isDarkMode = useCraftDarkMode();

  React.useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <Layout>
      <InsertHelloWorldComponent />
    </Layout>
  )
}

export function initApp() {
  ReactDOM.render(<App />, document.getElementById('react-root'))
}
