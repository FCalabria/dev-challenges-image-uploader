import React from "react";
import Card from "./Card"
import InputFile from "./InputFile"
import DropFile from "./DropFile"

function UploadCard({onFileSelected}) {

  function uploadCardContent () {
    return (
      <div className="space-y-8 text-xs text-gray-400 text-center">
        <p className="text-gray-500 text-xxs">File should be Jpeg, Png...</p>
        <DropFile onChange={onFileSelected}>Drag & Drop your image here</DropFile>
        <p>Or</p>
        <InputFile onChange={onFileSelected}>Choose a file</InputFile>
      </div>
    )
  }

  return <Card>{{
    title: 'Upload your image',
    content: uploadCardContent()
  }}</Card>
}

export default UploadCard