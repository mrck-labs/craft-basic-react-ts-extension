import * as React from 'react'

const TodoistTokenForm = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault()
    const authToken = e.target[0].value
    craft.storageApi.put('authToken', authToken)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="authToken">Provide todoist authToken: </label>
      <input type="text" id="authToken" name="authToken" />
      <button>Submit</button>
    </form>
  )
}

export {TodoistTokenForm}
