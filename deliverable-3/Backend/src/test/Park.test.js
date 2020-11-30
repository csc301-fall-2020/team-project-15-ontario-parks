const mongoose = require('mongoose');
const request = require("supertest");

const dbHandler = require('./dbHandler');
const app = require('../app')

const ParkModel = require('./../models/parkModel')
const ParkData = {
    name: 'high park', longitude: -79.4637, latitude: 43.6465
};
const ParkData2 = {
    name: 'sunnybrook park', longitude: 43.7237, latitude: -79.3591
}
const ParkData3 = {
    longitude: -78.379, latitude: 45.8372
}

beforeAll(async () => await dbHandler.connect());
afterEach(async () => await dbHandler.clearDatabase());
afterAll(async () => await dbHandler.closeDatabase());

jest.setTimeout(30000)
// Test case for Attraction
describe('Test Park', () => {
    it('create & save model successfully', async () => {
        const validModel = new ParkModel(ParkData);
        const savedModel = await validModel.save();
        expect(savedModel._id).toBeDefined();
        expect(savedModel.name).toBe(ParkData.name);
        expect(savedModel.longitude.toString()).toBe(ParkData.longitude.toString());
        expect(savedModel.latitude.toString()).toBe(ParkData.latitude.toString());
    });

    it('insert user successfully, but the field does not defined in schema should be undefined', async () => {
        const userWithInvalidField = new ParkModel(ParkData2);
        const savedUserWithInvalidField = await userWithInvalidField.save();
        expect(savedUserWithInvalidField._id).toBeDefined();
        expect(savedUserWithInvalidField.description).toBeUndefined();
    });

    it('create user without required field should failed', async () => {
        const userWithoutRequiredField = new ParkModel(ParkData3);
        let err;
        try {
            const savedUserWithoutRequiredField = await userWithoutRequiredField.save();
            error = savedUserWithoutRequiredField;
        } catch (error) {
            err = error
        }
        expect(err).toBeInstanceOf(mongoose.Error.ValidationError)
        expect(err.errors.name).toBeDefined();
    });

    it('Test the root path', async () => {
        const validModel = new ParkModel().collection.insertMany([ParkData, ParkData2]);
        const response = await request(app).get("/api/parks");
        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBe(2)
    })

    it('Test get nearest park', async () => {
        const validModel = new ParkModel().collection.insertMany([ParkData, ParkData2]);
        const response = await request(app).get("/api/parks/nearest?latitude=43.6627&longitude=-79.3815");
        expect(response.statusCode).toBe(200)
        expect(response.body.data.name).toBe('high park');
    })
})
