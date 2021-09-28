import Signaling, { WebSocketSignaling } from "../public/js/signaling.js";

test('basic', () => {
    const httpSingaling = new Signaling();
    expect('hello').toBe('hello');
});

test('basic2', () => {
    const wsSingaling = new WebSocketSignaling();
    expect(1+1).toBe(2);
});
