import { retrieveSensorsData } from "./sensorsApi.js";
import { data } from '../../../data/mock-homepage-data';

describe('unit test for retrieveSensorDatas', () => {

    it('should return homepage datas', () => {
        expect(retrieveSensorsData(data)).toBe(data.facades)
    })
})