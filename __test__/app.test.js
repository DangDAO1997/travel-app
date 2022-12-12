import {getTravel} from '../src/client/js/getTravel'


describe("Testing the getTravel() function", () => {
    test("Testing for getTravel", () => {
        expect(typeof getTravel).toBe("function");
    });
});