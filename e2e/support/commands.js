Cypress.Commands.add('uploadImage', (dragNDrop, size) => {
  const imageData = {
    contents: Cypress.Buffer.from('file contents'),
    fileName: 'file.png',
    mimeType: 'image/png',
    lastModified: Date.now(),
  }
  const inputText = dragNDrop ? 'Drag & Drop your image here' : 'Choose a file'
  const action = dragNDrop ? 'drag-drop' : 'select'
  return cy.contains(inputText).selectFile(imageData, {
    action
  })
})
