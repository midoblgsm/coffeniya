import { expect, test } from '@playwright/test';

/**
 * Full happy-path journey against the Firebase emulator suite:
 * sign up → create shop → add supplier → add low-stock item →
 * place a purchase order → receive it → stock is replenished.
 *
 * Steps build on each other, so they run serially in one browser session.
 */
test.describe.configure({ mode: 'serial' });

const email = `owner-${Date.now()}@coffeniya.test`;
const password = 'espresso-123';

test.describe('coffee shop inventory journey', () => {
  test.use({ storageState: { cookies: [], origins: [] } });

  test('owner can run their shop end to end', async ({ page }) => {
    // --- Sign up -----------------------------------------------------------
    await page.goto('/');
    await expect(page.getByRole('heading', { name: /Coffeniya/ })).toBeVisible();
    await page.getByRole('button', { name: /Create an account/ }).click();
    await page.getByLabel('Email').fill(email);
    await page.getByLabel('Password').fill(password);
    await page.getByRole('button', { name: 'Create account', exact: true }).click();

    // --- Create the shop (goes through the createShop callable) ------------
    await expect(page.getByRole('heading', { name: 'Set up your shop' })).toBeVisible();
    await page.getByLabel('Shop name').fill('Bean There Espresso');
    await page.getByRole('button', { name: 'Create shop' }).click();
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

    // --- Add a supplier -----------------------------------------------------
    await page.getByRole('link', { name: 'Suppliers' }).click();
    await page.getByLabel('Name', { exact: true }).fill('Highland Roasters');
    await page.getByLabel('Contact person').fill('Maria');
    await page.getByLabel('Email').fill('orders@highland.test');
    await page.getByRole('button', { name: 'Add supplier' }).click();
    await expect(page.getByRole('cell', { name: 'Highland Roasters' })).toBeVisible();

    // --- Add an inventory item below its reorder level ----------------------
    await page.getByRole('link', { name: 'Inventory' }).click();
    await page.getByLabel('Name', { exact: true }).fill('Espresso beans');
    await page.getByLabel('Unit', { exact: true }).fill('kg');
    await page.getByLabel('Quantity on hand').fill('2');
    await page.getByLabel('Reorder level').fill('5');
    await page.getByLabel('Cost per unit ($)').fill('18.5');
    await page.getByLabel('Supplier').selectOption({ label: 'Highland Roasters' });
    await page.getByRole('button', { name: 'Add item' }).click();
    await expect(page.getByText('2 kg · Low stock')).toBeVisible();

    // --- Dashboard shows the low-stock alert --------------------------------
    await page.getByRole('link', { name: 'Dashboard' }).click();
    await expect(page.getByTestId('low-stock-count')).toHaveText('1');
    await expect(page.getByRole('cell', { name: 'Espresso beans' })).toBeVisible();

    // --- Place a purchase order ---------------------------------------------
    await page.getByRole('link', { name: 'Orders' }).click();
    await page.getByLabel('Supplier').selectOption({ label: 'Highland Roasters' });
    await page.getByLabel('Item').selectOption({ index: 1 });
    await page.getByLabel('Quantity').fill('10');
    await page.getByRole('button', { name: 'Add line' }).click();
    await expect(
      page.getByRole('row', { name: /Espresso beans/ }).getByRole('cell', { name: '$185.00' }),
    ).toBeVisible();
    await page.getByRole('button', { name: 'Place order' }).click();
    await expect(page.getByText('ordered', { exact: true })).toBeVisible();

    // --- Receive it (goes through the receiveOrder callable) ----------------
    await page.getByRole('button', { name: 'Mark received' }).click();
    await expect(page.getByText('received', { exact: true })).toBeVisible();

    // --- Stock was incremented server-side ----------------------------------
    await page.getByRole('link', { name: 'Inventory' }).click();
    await expect(page.getByText('12 kg · In stock')).toBeVisible();

    await page.getByRole('link', { name: 'Dashboard' }).click();
    await expect(page.getByTestId('low-stock-count')).toHaveText('0');
  });
});
