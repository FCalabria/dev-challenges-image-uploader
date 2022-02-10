describe('Loading an image', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('loads correctly', () => {
    cy.contains('Upload your image')
  })
  it('can upload an image selecting with an input', () => {
    cy.uploadImage()
    cy.contains('Uploaded successfully')
  })
  it('can upload an image dropping it to an area', () => {
    cy.uploadImage(true)
    cy.contains('Uploaded successfully')
  })
  it('shows a loader while the image is loading', () => {
    cy.uploadImage()
    cy.contains('Loading')
    cy.contains('Uploaded successfully')
  })
  it('shows the image and its url once it has been uploaded', () => {
    cy.uploadImage()
    cy.contains('Uploaded successfully')
    cy.contains('Copy link')
    cy.get('img').should('exist').and('have.attr', 'src').and('be.ok')
  })
  it.skip('can copy the image url clicking a button', () => {
    uploadImage()
    // navigator.clipboard not supported
    cy.contains('Copy link').click()
    cy.window().its('navigator.clipboard')
      .invoke('readText')
      .should('equal', 'npm install -D cypress')
  })
})
