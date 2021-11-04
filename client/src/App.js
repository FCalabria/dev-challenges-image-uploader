import React from "react";
import { useState } from "react";
import UploadCard from "./components/UploadCard"
import UploadedCard from "./components/UploadedCard"

function App() {
  const [imageUrl, setImageUrl] = useState('');
  function uploadFile(file) {
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
    })
    .catch(error => console.log('failed', error))
  }

  function copyLink () {
    navigator.clipboard.writeText(imageUrl)
  }
  return (
    <div className="flex items-center justify-center h-screen p-5">
      <main className="max-w-full">
        {
          imageUrl && <UploadedCard imageUrl={imageUrl} onCopy={copyLink}/>
        }
        { !imageUrl && <UploadCard onFileSelected={uploadFile}/>
        }
      </main>
      <footer className="absolute bottom-5 text-gray-400 text-sm">created by <a href="https://github.com/FCalabria">FCalabria</a> - devchallenges.io</footer>
    </div>
  );
}

export default App;