import * as React from "react";
import craftXIconSrc from "./craftx-icon.png";
import * as api from "./api";
import {useCraftDarkMode} from "./hooks/useCraftDarkMode";

const InsertHelloWorldComponent = () => {
  const isDarkMode = useCraftDarkMode();

  const openUrl = async (url: string) => {
    await api.openUrlFromCraft(url)
  }

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}>
      <img className="icon" src={craftXIconSrc} alt="CraftX logo" />
      <h2 style={{
        color: 'yellow',
        cursor: 'pointer'
      }} onClick={() => openUrl('https://mrck.dev')}>mrck.dev</h2>
      <button className={`btn ${isDarkMode ? "dark" : ""}`} onClick={api.insertHelloWorld}>
        Hello world!
      </button>
    </div>
  )
}

export {InsertHelloWorldComponent}
