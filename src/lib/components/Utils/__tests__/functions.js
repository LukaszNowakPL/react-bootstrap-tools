import { addAlert, dismissAlert } from "../index";

describe("addAlert", () => {
  const alertPrototype = {
    id: "1234",
    variant: "info",
    message: "text message"
  };
  it("returns array with alert added", () => {
    const newAlert = { type: "danger", message: "text 02" };
    const result = addAlert([alertPrototype], newAlert);
    expect(result.length).toEqual(2);
    expect(result[0]).toEqual(alertPrototype);
    expect(result[1].type).toMatch("danger");
    expect(result[1].message).toMatch("text 02");
  });
});

describe("dismissAlert", () => {
  const alertPrototype = {
    variant: "info",
    message: "text message"
  };

  it("returns array with no dismissed alert", () => {
    const alert1 = { ...alertPrototype, id: "1" };
    const alert2 = { ...alertPrototype, id: "2" };
    const alert3 = { ...alertPrototype, id: "3" };
    expect(dismissAlert([alert1, alert2, alert3], "2")).toEqual([
      alert1,
      alert3
    ]);
  });

  it("returns same array if unknown id provided", () => {
    const alert1 = { ...alertPrototype, id: "1" };
    const alert2 = { ...alertPrototype, id: "2" };
    const alert3 = { ...alertPrototype, id: "3" };
    expect(dismissAlert([alert1, alert2, alert3], "11")).toEqual([
      alert1,
      alert2,
      alert3
    ]);
  });
});
