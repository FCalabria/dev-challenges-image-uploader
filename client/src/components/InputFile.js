function InputFile({children, onChange}) {
  return <label className="bg-blue-500 text-white py-2 px-4 rounded-lg text-xs cursor-pointer" >
    {children}
    <input type="file" className="hidden" accept="image/*" onChange={onChange}/>
  </label>
}

export default InputFile