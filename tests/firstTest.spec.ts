import { test, expect } from '@playwright/test';

test.describe('Список задач', () => {
  test('Создание задачи, без передачи параметров', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    await page.locator('div').nth(2).click();
    await page.getByRole('button', { name: 'Добавить задачу' }).click();
  });

  test('Добавление задачи с созданными полями', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    await page.getByRole('textbox', { name: 'Название задачи' }).fill('Погулять с собакой');
    await page.getByRole('textbox', { name: 'Описание' }).fill('в 18:00');
    await page.getByRole('button', { name: 'Добавить задачу' }).click();
    await expect(
      page
        .locator('div')
        .filter({ hasText: /^Погулять с собакойв 18:00Удалить$/ })
        .first()
    ).toBeVisible();
  });

  test.afterEach(async ({ page }) => {
    await page.getByRole('button', { name: 'Удалить' }).nth(3).click();
  });
});
