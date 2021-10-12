function DropFile({children, onChange}) {
  function manageDrop(e) {
    e.preventDefault()
    const file = e.dataTransfer.items[0].getAsFile()
    if (file.type.startsWith('image')) {
      onChange(file)
    }
  }
  return <div className="bg-gray-50 px-14 py-10 sm:px-32 rounded-xl border border-blue-200 border-dashed" onDrop={manageDrop} onDragOver={e => e.preventDefault()}>
    <img src={`${process.env.PUBLIC_URL}/image.svg`} alt="" className="block mx-auto mb-10"/>
    {children}
  </div>
}

export default DropFile