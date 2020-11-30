const mongoose = require('mongoose');

const request = require("supertest");
const dbHandler = require('./dbHandler');

const app = require('../app')

const AttractionModel = require('./../models/attractionModel')
const AttractionData = {
    name: 'Cherry', longitude: 1, latitude: 1, description: "A cherry", audio: "https://www.youtube.com/watch?v=5wRWniH7rt8",
    image: " ", category: "environment", park: 'high park'
};
const AttractionData2 = {
    name: 'Maple', longitude: 2, latitude: 2, description: "A maple", audio: "https://www.youtube.com/watch?v=5wRWniH7rt8",
    image: " ", category: "environment", park: 'high park'
}
const AttractionData3 = {
    longitude: 3, latitude: 3, description: "A Orchids", audio: "https://www.youtube.com/watch?v=5wRWniH7rt8",
    image: " ", category: "environment"
}
const data = {
    "name": "Colborne Lodge",
    "latitude": "43.6404",
    "longitude": "-79.4600",
    "description": "Built in 1836 by City Surveyor John George Howard. It was originally one storey, but Howard later expanded it by adding the upper level. The house was named after Sir John Colborne, Lieutenant-Governor of Upper Canada from 1828 to 1836 and first Canadian patron of Howard's architecture. The cottage sat on 165 acres (0.67 km2) of land owned by Howard. His original intent was to start a farm on the property. The landscape of the property with its steep hills, wetlands and sandy soils would have been difficult to develop in any event. Howard and his wife Jemima had no children and thus deeded the park to the city in 1873, in exchange for a permanent pension. He continued to live in his home until his death in 1890. Additional land was purchased by the city in 1873 and 1930, thereby expanding the park to the current 399 acres (1.61 km2). The home is now a museum run by the City of Toronto. The museum displays the house and furnishings of the 1800s, using much of the Howards' own furnishings and artworks. The museum holds an annual Harvest Festival, plus summer and March break camps for children. Annually at Hallowe'en, guides put on a 'Haunted Walk' discussing legends of ghost appearances at the Lodge",
    "audio": "http://138.197.141.138/colborne_lodge.mp3",
    "image": "http://138.197.141.138/colborne_lodge.jpg",
    "category": "general",
    "park": "high park"
}
const data2 = {
    "name": "Hawk Hill",
    "longitude": "-79.4658",
    "latitude": "43.6464",
    "description": "High Park has the distinction of being one of the very few major raptor monitoring sites operating in the centre of a large urban environment. While the primary objective of the hawk watch is to enjoy and monitor the fall raptor migration, there is a public participation element which is encouraged and respected. The Toronto Ornithological Club has greatly contributed to the spotting, identification and counting of incoming raptors.The High Park Hawk Watch welcomes all visitors and active participants to what has become a very popular destination in High Park. Weekly totals throughout the season are posted on the ONTBIRDS listserv.Monthly species daily totals which meet the Toronto Ornithological Club reporting guidelines are forwarded to the Records Committee for inclusion in their database.",
    "audio": "http://138.197.141.138/hawk_hill.mp3",
    "image": "http://138.197.141.138/hawk_hill.jpg",
    "category": "general",
    "park": "high park"
}
const data3 = {
    "name": "High Park Zoo",
    "longitude": -79.4614,
    "latitude": 43.6428,
    "description": "This is the a description of the nature in High Park Zoo",
    "audio": "",
    "image": "",
    "category": "natural",
    "park": "high park"
}
const URL = require('../config/dev').mongoURI

jest.setTimeout(30000)

beforeAll(async () => await dbHandler.connect());
afterEach(async () => await dbHandler.clearDatabase());
afterAll(async () => await dbHandler.closeDatabase());
// Test case for Attraction
describe('Test Attraction', () => {
    it('create & save model successfully', async () => {
        const validModel = new AttractionModel(AttractionData);
        const savedModel = await validModel.save();
        expect(savedModel._id).toBeDefined();
        expect(savedModel.name).toBe(AttractionData.name);
        expect(savedModel.longitude.toString()).toBe(AttractionData.longitude.toString());
        expect(savedModel.latitude.toString()).toBe(AttractionData.latitude.toString());
        expect(savedModel.description).toBe(AttractionData.description);
        expect(savedModel.audio).toBe(AttractionData.audio);
        expect(savedModel.image).toBe(AttractionData.image);
        expect(savedModel.category).toBe(AttractionData.category);
        expect(savedModel.park).toBe(AttractionData.park)
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

    it("test get attractions based on user' location and preference", async () => {
        const validModel = new AttractionModel().collection.insertMany([data, data2, data3]);
        const response = await request(app).get("/api/attractions?park=high+park&category=general,natural");
        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBe(3)
    })
})
