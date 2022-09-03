import {TodoistApi} from '@doist/todoist-api-typescript'

const todoistClient = async () => {
  const {data} = await craft.storageApi.get('authToken')

  if(data) {
    return new TodoistApi(data)
  } else {
    console.log("Fuck of, i dont have a token")
    return new TodoistApi('')
  }
}

export {todoistClient}
