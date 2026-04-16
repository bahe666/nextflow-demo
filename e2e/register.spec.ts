import { test, expect } from "@playwright/test";

test("注册页显示标题", async ({ page }) => {
  await page.goto("/register");
  await expect(page.locator("h1")).toContainText("创建你的 NextFlow 账号");
});

test("邮箱为空提交显示错误提示", async ({ page }) => {
  await page.goto("/register");
  // 不填邮箱，填写密码后提交
  await page.fill('input[type="password"]', "12345678");
  await page.locator('input[placeholder="再次输入密码"]').fill("12345678");
  await page.click("text=立即注册");
  await expect(page.locator("body")).toContainText("请输入有效的邮箱地址");
});

test("密码不一致显示提示", async ({ page }) => {
  await page.goto("/register");
  await page.fill('input[type="email"]', "user@example.com");
  await page.fill('input[placeholder="至少 8 位，建议包含数字和字母"]', "12345678");
  await page.locator('input[placeholder="再次输入密码"]').fill("87654321");
  await page.click("text=立即注册");
  await expect(page.locator("body")).toContainText("两次输入的密码不一致");
});
