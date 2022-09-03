import * as React from "react"
import * as ReactDOM from 'react-dom'
import {useCraftDarkMode} from "./hooks/useCraftDarkMode";
import {InsertHelloWorldComponent} from "./InsertHelloWorldComponent";
import {Layout} from "./Layout";
import {TodoistTokenForm} from "./TodoistTokenForm";
import {TodoistDashboard} from "./TodoistDashboard";
import {useState} from "react";

const App: React.FC<{}> = () => {
  const [authToken, setAuthToken] = useState('');
  const isDarkMode = useCraftDarkMode();

  React.useEffect(() => {
    (async () => {
      const {data} = await craft.storageApi.get('authToken')
      if(data) {
        setAuthToken(data)
      } else {
        setAuthToken('')
      }
    })()
  }, [])

  React.useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <Layout>
      <TodoistTokenForm />
      <TodoistDashboard />
      <InsertHelloWorldComponent />
    </Layout>
  )
}

export function initApp() {
  ReactDOM.render(<App />, document.getElementById('react-root'))
}
