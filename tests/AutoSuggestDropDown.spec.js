const {test, expect}=require('@playwright/test')

test('Auto suggest dropdown', async ({page}) =>{
    await page.goto('https://staging.metutors.com')

    // await page.locator("//input[@class='mat-autocomplete-trigger form-control custom-input search-request f-size-15-sm ng-tns-c142-11']")
    await page.locator("//input[@class='mat-autocomplete-trigger form-control custom-input search-request f-size-15-sm ng-tns-c142-11']").fill('Mathematics');
    await page.keyboard.press("Enter");
    await page.waitForSelector("#mat-autocomplete-1")

    const fromCourseOptions=await page.$$("//div[@id='mat-autocomplete-1']//mat-option//h4")
    const fromProgramOptions = page.$$("//div[@id='mat-autocomplete-1']//mat-option//h5")

    for(let option of fromCourseOptions)
    {
        const value=await option.textContent()
        console.log(value);
        // if(value.includes('ISBT Kashmiri Gate'))
        // {
        //     await option.click()
        //     break;

        // }
    }

    await page.waitForTimeout(5000);

})