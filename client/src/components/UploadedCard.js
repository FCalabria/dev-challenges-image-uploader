import React from "react";
import Card from "./Card"
import IconCheck from "./IconCheck"

function UploadCard({imageUrl, onCopy}) {

  function uploadedCardContent () {
    return (
      <div className="space-y-8 text-xs text-gray-400 text-center max-w-full">
        <img src={imageUrl} alt="" className="rounded-2xl mx-auto w-full object-contain uploaded-image"/>
        <div className="bg-gray-50 border border-gray-400 rounded-xl p-1 pl-3 flex items-center">
          <p className="text-gray-900 overflow-hidden overflow-ellipsis whitespace-nowrap">{imageUrl}</p>
          <button type="button" className="bg-blue-500 text-white py-3 px-6 ml-4 rounded-lg cursor-pointer whitespace-nowrap" onClick={onCopy}>Copy link</button>
        </div>
      </div>
    )
  }

  return <Card>{{
    icon: <IconCheck />,
    title: 'Uploaded successfully',
    content: uploadedCardContent()
  }}</Card>
}

export default UploadCard