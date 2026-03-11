import { test, expect } from '@playwright/test';
import { IDS, ROUTES } from '../../../src/shared/constants';

test.describe('Todos e2e', () => {
  async function openTodos(page) {
    await page.goto(ROUTES.INDEX);
    await expect(page.getByTestId(IDS.PAGE.INDEX)).toBeVisible();
  }

  test('should load todos list', async ({ page }) => {
    await openTodos(page);

    const response = await page.waitForResponse(
      (res) => res.url().includes('/api/todo') && res.request().method() === 'GET'
    );

    expect(response.status()).toBe(200);

    await expect(page.getByTestId(IDS.CARD.TODO)).toHaveCount(3);
  });

  test('should create todo', async ({ page, request }) => {
    await openTodos(page);

    let todoId = null;

    try {
      await page.getByTestId(IDS.INPUT.NAME).fill('Погулять с собакой');
      await page.getByTestId(IDS.INPUT.DESCRIPTION).fill('Вечером в 18:00');

      const [response] = await Promise.all([
        page.waitForResponse(
          (res) => res.url().includes('/api/todo') && res.request().method() === 'POST'
        ),
        page.getByTestId(IDS.BUTTON.CREATE_TODO).click()
      ]);

      const todo = await response.json();
      todoId = todo.id;

      await expect(page.getByText('Погулять с собакой')).toBeVisible();
    } finally {
      if (todoId) {
        await request.delete(`/api/todo/${todoId}`);
      }
    }
  });

  test('should toggle todo', async ({ page }) => {
    await openTodos(page);

    const [patchRequest] = await Promise.all([
      page.waitForRequest((req) => req.method() === 'PATCH' && req.url().includes('/api/todo')),
      page.getByTestId(IDS.CHECKBOX.COMPLETED_TODO).first().click()
    ]);

    expect(patchRequest.method()).toBe('PATCH');
  });

  test('should delete todo', async ({ page }) => {
    await openTodos(page);

    const todo = page.getByTestId(IDS.CARD.TODO).first();

    const [deleteRequest] = await Promise.all([
      page.waitForRequest((req) => req.method() === 'DELETE' && req.url().includes('/api/todo')),
      todo.getByTestId(IDS.BUTTON.DELETE_TODO).click()
    ]);

    expect(deleteRequest.method()).toBe('DELETE');
  });
});
