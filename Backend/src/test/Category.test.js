const mongoose = require('mongoose');
const request = require("supertest");
const dbHandler = require('./dbHandler');

const app = require('../app')
const CategoryModel = require('./../models/categoryModel')
const CategoryData = { name: 'general' }
const CategoryData2 = { name: 'natural' }
const CategoryData3 = {}


jest.setTimeout(30000)

beforeAll(async () => await dbHandler.connect());
afterEach(async () => await dbHandler.clearDatabase());
afterAll(async () => await dbHandler.closeDatabase());

// Test case for Category
describe('Test Category', () => {
    it('create & save model successfully', async () => {
        const validModel = new CategoryModel(CategoryData);
        const savedModel = await validModel.save();
        expect(savedModel._id).toBeDefined();
        expect(savedModel.name).toBe(CategoryData.name);
    });

    it('insert model successfully, but the field does not defined in schema should be undefined', async () => {
        const modelWithInvalidField = new CategoryModel(CategoryData2);
        const savedModelWithInvalidField = await modelWithInvalidField.save();
        expect(savedModelWithInvalidField._id).toBeDefined();
        expect(savedModelWithInvalidField.description).toBeUndefined();
    });


    it('create model without required field should failed', async () => {
        const modelWithoutRequiredField = new CategoryModel(CategoryData3);
        let err;
        try {
            const savedModelWithoutRequiredField = await modelWithoutRequiredField.save();
            error = savedModelWithoutRequiredField;
        } catch (error) {
            err = error
        }
        expect(err).toBeInstanceOf(mongoose.Error.ValidationError)
        expect(err.errors.name).toBeDefined();
    });

    it('Test the root path', async () => {
        const validModel = new CategoryModel().collection.insertMany([CategoryData, CategoryData2]);
        const response = await request(app).get("/api/categories");
        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBe(2)
    })
})

