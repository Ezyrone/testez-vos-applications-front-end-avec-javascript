import { isInTestEnv } from "./index.js";

describe('unit test for isinTestEnv function', ()=> {

    it('should return true', () => {
        expect(isInTestEnv()).toBeTruthy()
    })

    it('should return false', () => {
        process.env.NODE_ENV = 'dev'
        expect(isInTestEnv(false)).toBeFalsy()
    })
})