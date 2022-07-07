describe('The add page', () => {

  jest.setTimeout(30 * 1000)

  beforeAll(async () => {
    await page.goto('http://localhost:3000', { waitUnitl: 'domcontentloaded' })
  })

  test('the title should be "My App"', async () => {
    const title = await page.title()
    expect(title).toBe('My App')
  })

  test('should have a button that says "Submit"', async () => {
    const txt = await page.$eval('#btn', el => el.innerText)
    expect(txt).toBe('Submit')
  })

  test('should add 2 and 3 to get 5', async () => {
    await page.type('#a', '2')
    await page.type('#b', '3')
    await page.click('#btn')
    await page.waitForTimeout(2 * 1000) // wait for the api for 2 seconds
    const txt = await page.$eval('#ans', el => el.innerText)
    expect(txt).toBe('5')
  })

})
