const mongoose = require('mongoose');
const AttractionModel = require('../../src/models/Attraction');
const AtrtactionData = { name: 'Cherry', longitude: 1, latitude: 1, description: "A cherry", audio: "https://www.youtube.com/watch?v=5wRWniH7rt8",
    image: " ", category: "environment"};
const AttractionData2 = { name: 'Maple', longitude: 2, latitude: 2, description: "A maple", audio: "https://www.youtube.com/watch?v=5wRWniH7rt8",
    image: " ", category: "environment"}
const AttractionData3 = {longitude: 3, latitude: 3, description: "A Orchids", audio: "https://www.youtube.com/watch?v=5wRWniH7rt8",
    image: " ", category: "environment"}
const URL = require('../config/dev').mongoURI

// Test case for Attraction
describe('Test Attraction', () => {

    beforeAll(async () => {
        await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
            if (err) {
                console.error(err);
                process.exit(1);
            }
        });
    });

    it('create & save user successfully', async () => {
        const validUser = new AttractionModel(AtrtactionData);
        const savedUser = await validUser.save();
        expect(savedUser._id).toBeDefined();
        expect(savedUser.name).toBe(AtrtactionData.name);
        expect(savedUser.longitude.toString()).toBe(AtrtactionData.longitude.toString());
        expect(savedUser.latitude.toString()).toBe(AtrtactionData.latitude.toString());
        expect(savedUser.description).toBe(AtrtactionData.description);
        expect(savedUser.audio).toBe(AtrtactionData.audio);
        expect(savedUser.image).toBe(AtrtactionData.image);
        expect(savedUser.category[0]).toBe(AtrtactionData.category.split(",")[0]);
    });

    it('insert user successfully, but the field does not defined in schema should be undefined', async () => {
        const userWithInvalidField = new AttractionModel(AttractionData2);
        const savedUserWithInvalidField = await userWithInvalidField.save();
        expect(savedUserWithInvalidField._id).toBeDefined();
        expect(savedUserWithInvalidField.size).toBeUndefined();
    });

    it('create user without required field should failed', async () => {
        const userWithoutRequiredField = new AttractionModel(AttractionData3);
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
