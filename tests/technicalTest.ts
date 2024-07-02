import { test, expect } from '@playwright/test';
import registerUser from '../api/registerUser';
import RandomDataGenerator from '../utils/RandomDataGenerator';


test.describe('QUBIKA TECNICA', () => {
  let registeredUser: any;
  let randomEmail = RandomDataGenerator.generateRandomEmail();
  let randomCategory = RandomDataGenerator.generateRandomCategory();
  let randomSubcategory = RandomDataGenerator.generateRandomSubcategory();

  test.beforeAll(async () => {
    registeredUser = await registerUser(randomEmail, 'password123', ['ROLE_ADMIN']);
  });


  test('should display login page correctly', async ({ page }) => {

    await page.goto('https://club-administration.qa.qubika.com/#/auth/login');


    await expect(page.locator('.custom-control-input')).toBeVisible();
    await expect(page.locator('button[type="submit"]')).toBeVisible();
  });

  test('test everything', async ({ page }) => {

    await page.goto('https://club-administration.qa.qubika.com/#/auth/login');

    // Fill in login form with registered user credentials

    await page.fill('input[type="email"]', registeredUser.email);
    await page.fill('input[type="password"]', 'password123');
    await page.click('button[type="submit"]');

    // Example validation after login

    await page.waitForNavigation();
    await expect(page.locator('#sidenav-main')).toBeVisible();
    await expect(page.locator('.ni-button-power')).toBeVisible();


    // Creation of Category

    await page.click('ul.navbar-nav > li:nth-child(3)');
    await page.click('button.btn-primary');
    await page.fill('#input-username', randomCategory);
    await page.click('button[type="submit"]');
    await expect(page.locator('[role="alertdialog"]')).toBeVisible();


    // Sub Category

    const subcategoryA = randomSubcategory;

    await page.click('button.btn-primary');
    await page.fill('#input-username', subcategoryA);
    await page.click('.text-muted')
    await page.click('div.ng-input > input')
    await page.click('div[role="option"]:first-child')
    await page.click('button[type="submit"]');

    // Click the last-1 LI from a UL To validate sub category

    await page.click('ul.pagination > li:nth-last-child(2)')
    console.log(subcategoryA)
    await expect(page.locator(`//td[contains(text(), '${subcategoryA}')]`)).toBeVisible();

  });
});
