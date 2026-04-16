import { test, expect } from "@playwright/test";

test("首页包含 NextFlow 品牌名", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("body")).toContainText("NextFlow");
});

test("首页包含主标题", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("h1")).toContainText("让团队协作效率提升 3 倍");
});

test("点击立即体验跳转到注册页", async ({ page }) => {
  await page.goto("/");
  await page.click("text=立即体验");
  await expect(page).toHaveURL(/\/register/);
});

test("定价页包含专业版", async ({ page }) => {
  await page.goto("/pricing");
  await expect(page.locator("body")).toContainText("专业版");
});
