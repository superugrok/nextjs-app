import { test, expect } from "@playwright/test";

test("should test navigation", async ({ page }) => {
  // Start from the index page
  await page.goto("/");
  // Check if navigation is visible
  await expect(page.getByRole("navigation")).toBeVisible();
});

test("should test table page", async ({ page }) => {
  // Start from the index page
  await page.goto("/");
  // Enter into the table nav element
  await page.getByText("Table").click();
  // The new url should be "/table"
  await expect(page).toHaveURL("/table");
  // The table must to contain buttons (navigation)
  await expect(page.getByRole("button")).toBeDefined();
  // Filters (Select) exist
  await expect(page.getByLabel("Nationality")).toBeDefined();
  await expect(page.getByLabel("Gender")).toBeDefined();
});

test("should test peoples page", async ({ page }) => {
  // Start from the index page
  await page.goto("/");
  // Enter into the peoples nav element
  await page.getByText("Peoples").click();
  // The new url should be "/peoples"
  await expect(page).toHaveURL("/peoples");
  // The table must to contain buttons (navigation)
  await expect(page.getByRole("button")).toBeDefined();
  // Hover exist
  await expect(page.getByText("Skywars peoples list")).toBeVisible();
  // List of peoples exist
  await expect(page.getByRole("list")).toBeVisible();
});

test("should test animals page", async ({ page }) => {
  // Start from the index page
  await page.goto("/");
  // Enter into the peoples nav element
  await page.getByText("Animals").click();
  // The new url should be "/animals"
  await expect(page).toHaveURL("/animals");
  // Images exists
  await expect(page.locator(".fun img")).toHaveCount(2);
});
