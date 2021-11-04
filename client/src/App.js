import React from "react";
import { useState } from "react";
import UploadCard from "./components/UploadCard"
import UploadedCard from "./components/UploadedCard"
import Card from "./components/Card"
import AnimatedProgress from "./components/AnimatedProgress"

function App() {
  const LOAD_STATE = {EMPTY: 0, LOADING: 1, LOADED: 2}
  const [imageUrl, setImageUrl] = useState('');
  const [loadState, setLoadState] = useState(LOAD_STATE.EMPTY);
  function uploadFile(file) {
    setLoadState(LOAD_STATE.LOADING);
    const formData = new FormData();

    formData.append("file", file, file.name);

    fetch(`${process.env.REACT_APP_API_URL}/image`, {
      method: 'POST',
      body: formData,
    })
    .then(async response => {
      if (!response.ok) {
        // TODO: error management
        throw new Error (response.status)
      }
      const {url} = await response.json()
      setImageUrl(url)
      setLoadState(LOAD_STATE.LOADED);
    })
    .catch(error => {
      console.log('failed', error);
      setLoadState(LOAD_STATE.EMPTY);
    })
  }

  function copyLink () {
    navigator.clipboard.writeText(imageUrl)
  }
  return (
    <div className="flex items-center justify-center h-screen p-5">
      <main className="max-w-full">
        { loadState === LOAD_STATE.EMPTY && <UploadCard onFileSelected={uploadFile}/>
        }
        { loadState === LOAD_STATE.LOADING && <Card>{{
            title: 'Loading...',
            content: <AnimatedProgress />,
          }}</Card>}
        {
          loadState === LOAD_STATE.LOADED && <UploadedCard imageUrl={imageUrl} onCopy={copyLink}/>
        }
      </main>
      <footer className="absolute bottom-5 text-gray-400 text-sm">created by <a href="https://github.com/FCalabria">FCalabria</a> - devchallenges.io</footer>
    </div>
  );
}

export default App;