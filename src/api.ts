export const insertHelloWorld = () => {
  const block = craft.blockFactory.textBlock({
    content: "Hello world!"
  });


  craft.dataApi.getCurrentPage()
    .then(res => {
      console.log("This is current page")
      console.log(res)
    })
    .catch(error => {
      console.log("error happened")
      console.log(error)
    })

  craft.dataApi.addBlocks([block]);
}

export const openUrlFromCraft = async (url: string) => {
  // Open the external url
  const result = await craft.editorApi.openURL(url)

  // Check for any error
  if (result.status !== "success") {
    throw new Error(result.message)
  }

  return result
}
