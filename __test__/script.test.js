// const { describe, default: test } = require('node:test');
const showData = require("../main");

describe("validação de url", () => {
  test("adicionando o www.google.com tem que retornar true", () => {
    expect(showData("www.google.com")).toBe(true);
  });
  test("adicionando o www.uniTuenda.com tem que retornar true", () => {
    expect(showData("www.uniTuenda.com")).toBe(true);
  });
  test("adicionando o upra tem que retornar false", () => {
    expect(showData("upra")).toBe(false);
  });
});
