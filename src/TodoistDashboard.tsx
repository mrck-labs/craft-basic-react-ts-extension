import * as React from 'react'
import {todoistClient} from "./services/todoist-client";
import {useState} from "react";

const TodoistDashboard = () => {
  const [projects, setProjects] = useState<any>([])
  React.useEffect(() => {
    (async () => {
      const client = await todoistClient()
      const data = await client.getProjects()
      setProjects(data)
    })()
  }, [])
  return (
    <div>
      <h2>Todoist dashboard</h2>
      {
        projects.map((project: any) => {
          return (
            <div>
              <span>{project.name}</span>
              <span>{project.favorite}</span>
            </div>
          )
        })
      }
    </div>
  )
}

export {TodoistDashboard}
