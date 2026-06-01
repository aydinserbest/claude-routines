test.describe('Homepage', () => {
  test('should load successfully', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Example Domain/);
  });

  test('should have a heading', async ({ page }) => {
    await page.goto('/');
    const heading = page.locator('h1');
    await expect(heading).toBeVisible();
  });

  // Bu test kasıtlı olarak başarısız — rutinin yakalaması için
  test('should have a login button', async ({ page }) => {
    await page.goto('/');
    const loginBtn = page.locator('button#login');
    await expect(loginBtn).toBeVisible({ timeout: 3000 });
  });
});
