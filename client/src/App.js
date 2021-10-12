import React from "react";
import Card from "./components/Card"
import InputFile from "./components/InputFile"
import DropFile from "./components/DropFile"

function App() {
  function uploadFile(file) {
    const formData = new FormData();

    formData.append("file", file, file.name);

    fetch(`${process.env.REACT_APP_API_URL}/image`, {
      method: 'POST',
      body: formData,
    })
    .then(() => console.log('uploaded'))
    .catch(error => console.log('failed', error))
  }

  function cardContent () {
    return (
      <div className="space-y-8 text-xs text-gray-400 text-center">
        <p className="text-gray-500 text-xxs">File should be Jpeg, Png...</p>
        <DropFile onChange={uploadFile}>Drag & Drop your image here</DropFile>
        <p>Or</p>
        <InputFile onChange={uploadFile}>Choose a file</InputFile>
      </div>
    )
  }
  return (
    <div className="flex items-center justify-center h-screen p-5">
      <main>
        <Card>{{
          title: 'Upload your image',
          content: cardContent()
        }}</Card>
      </main>
      <footer className="absolute bottom-5 text-gray-400 text-sm">created by <a href="https://github.com/FCalabria">FCalabria</a> - devchallenges.io</footer>
    </div>
  );
}

export default App;