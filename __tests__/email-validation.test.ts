import { describe, it, expect } from "vitest";
import { validateEmail } from "../lib/validation";

describe("validateEmail", () => {
  it("有效邮箱格式通过校验", () => {
    expect(validateEmail("user@example.com")).toBe(true);
    expect(validateEmail("test.name@company.co")).toBe(true);
    expect(validateEmail("a@b.io")).toBe(true);
  });

  it("缺少 @ 符号校验失败", () => {
    expect(validateEmail("userexample.com")).toBe(false);
  });

  it("缺少域名校验失败", () => {
    expect(validateEmail("user@")).toBe(false);
  });

  it("空字符串校验失败", () => {
    expect(validateEmail("")).toBe(false);
  });

  it("缺少用户名部分校验失败", () => {
    expect(validateEmail("@example.com")).toBe(false);
  });

  it("包含空格校验失败", () => {
    expect(validateEmail("user @example.com")).toBe(false);
  });
});
