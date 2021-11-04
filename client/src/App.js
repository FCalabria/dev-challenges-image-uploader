import React from "react";
import { useState } from "react";
import Card from "./components/Card"
import InputFile from "./components/InputFile"
import DropFile from "./components/DropFile"
import IconCheck from "./components/IconCheck"

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

  function uploadCardContent () {
    return (
      <div className="space-y-8 text-xs text-gray-400 text-center">
        <p className="text-gray-500 text-xxs">File should be Jpeg, Png...</p>
        <DropFile onChange={uploadFile}>Drag & Drop your image here</DropFile>
        <p>Or</p>
        <InputFile onChange={uploadFile}>Choose a file</InputFile>
      </div>
    )
  }

  function uploadedCardContent () {
    return (
      <div className="space-y-8 text-xs text-gray-400 text-center max-w-full">
        <img src={imageUrl} alt="" className="rounded-2xl mx-auto w-full object-contain uploaded-image"/>
        <div className="bg-gray-50 border border-gray-400 rounded-xl p-1 pl-3 flex items-center">
          <p className="text-gray-900 overflow-hidden overflow-ellipsis whitespace-nowrap">{imageUrl}</p>
          <button type="button" className="bg-blue-500 text-white py-3 px-6 ml-4 rounded-lg cursor-pointer whitespace-nowrap" onClick={copyLink}>Copy link</button>
        </div>
      </div>
    )
  }
  return (
    <div className="flex items-center justify-center h-screen p-5">
      <main className="max-w-full">
        {
          imageUrl && <Card>{{
            icon: <IconCheck />,
            title: 'Uploaded successfully',
            content: uploadedCardContent()
          }}</Card>
        }
        { !imageUrl && <Card>{{
            title: 'Upload your image',
            content: uploadCardContent()
          }}</Card>
        }
      </main>
      <footer className="absolute bottom-5 text-gray-400 text-sm">created by <a href="https://github.com/FCalabria">FCalabria</a> - devchallenges.io</footer>
    </div>
  );
}

export default App;