function InputFile({children, onChange}) {
  function manageChange(e) {
    const file = e.target.files[0]
    if (file) {
      onChange(file)
    }

  }
  return <label className="inline-block bg-blue-500 text-white py-2 px-4 rounded-lg text-xs cursor-pointer" >
    {children}
    <input type="file" className="hidden" accept="image/*" onChange={manageChange} />
  </label>
}

export default InputFile