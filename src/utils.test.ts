import { getSubdomain, getDomain } from "./utils";

test("getSubdomain", () => {
  expect(getSubdomain("example.com")).toBe(null);
  expect(getSubdomain("sub.example.com")).toBe("sub");
});

test("getDomain", () => {
  expect(getDomain("sub.example.com")).toBe("example.com");
  expect(getDomain("example.com")).toBe("example.com");
});
