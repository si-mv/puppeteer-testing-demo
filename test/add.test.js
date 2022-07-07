describe('The add form', () => {

  jest.setTimeout(30 * 1000)

  beforeAll(async () => {
    await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded' })
  })

  test('two plus two is four', () => {
    expect(2 + 2).toBe(4)
  })

  test('should have a title of "My App"', async () => {
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
    // should add a page.wait here (but i forgot the name of the puppeteer method!)
    const txt = await page.$eval('#ans', el => el.innerText)
    expect(txt).toBe('5')
  })

})
