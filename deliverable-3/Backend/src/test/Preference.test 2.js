const mongoose = require('mongoose');

const PreferenceModel = require('../models/Preference');
const PreferenceData = { name: 'Cherry', longitude: 1, latitude: 1, description: "A cherry", audio: "https://www.youtube.com/watch?v=5wRWniH7rt8",
    image: " ", category: "environment"};
const PreferenceData2 = { name: 'Maple', longitude: 2, latitude: 2, description: "A maple", audio: "https://www.youtube.com/watch?v=5wRWniH7rt8",
    image: " ", category: "environment"}
const PreferenceData3 = {longitude: 3, latitude: 3, description: "A Orchids", audio: "https://www.youtube.com/watch?v=5wRWniH7rt8",
    image: " ", category: "environment"}
const URL = require('../config/dev').mongoURI

jest.setTimeout(30000)
// Test case for Preference
describe('Test Preference', () => {
    beforeAll(async () => {
        await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
            if (err) {
                console.error(err);
                process.exit(1);
            }
        });
    });

    it('create & save user successfully', async () => {
        const validUser = new PreferenceModel(PreferenceData);
        const savedUser = await validUser.save();
        expect(savedUser._id).toBeDefined();
        expect(savedUser.name).toBe(PreferenceData.name);
        expect(savedUser.longitude.toString()).toBe(PreferenceData.longitude.toString());
        expect(savedUser.latitude.toString()).toBe(PreferenceData.latitude.toString());
        expect(savedUser.description).toBeUndefined()
        expect(savedUser.audio).toBeUndefined()
        expect(savedUser.image).toBeUndefined()
        expect(savedUser.category[0]).toBe(PreferenceData.category.split(",")[0]);
    });

    it('insert user successfully, but the field does not defined in schema should be undefined', async () => {
        const userWithInvalidField = new PreferenceModel(PreferenceData2);
        const savedUserWithInvalidField = await userWithInvalidField.save();
        expect(savedUserWithInvalidField._id).toBeDefined();
        expect(savedUserWithInvalidField.size).toBeUndefined();
    });


    it('create user without required field should failed', async () => {
        const userWithoutRequiredField = new PreferenceModel(PreferenceData3);
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

    afterAll(done => {
        // Closing the DB connection allows Jest to exit successfully.
        mongoose.connection.close()
        done()
    })
})
