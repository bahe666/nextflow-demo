import { test, expect } from "@playwright/test";

test("英文版首页路径可访问且内容为英文", async ({ page }) => {
  const response = await page.goto("/en");
  expect(response?.status()).toBe(200);
  // 验证页面不包含中文主标题（说明已被翻译）
  await expect(page.locator("h1")).not.toContainText("让团队协作效率提升");
});

test("英文版首页保留品牌名 NextFlow", async ({ page }) => {
  await page.goto("/en");
  await expect(page.locator("body")).toContainText("NextFlow");
});

test("英文版定价页可访问", async ({ page }) => {
  const response = await page.goto("/en/pricing");
  expect(response?.status()).toBe(200);
  // 定价页标题区域应该被翻译为英文
  await expect(page.locator("body")).toContainText("Choose");
});
