import React from "react";
import Card from "./components/Card"
import InputFile from "./components/InputFile"

function App() {
  // const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch("/ping")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);
  function uploadFile(e) {
    console.log('upload', e)
  }

  function cardContent () {
    return <InputFile onChange={uploadFile}>Choose a file</InputFile>
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