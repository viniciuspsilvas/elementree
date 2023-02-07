const request = require('supertest');

const app = require('./app');

describe('GET /', () => {
    it('GET /', () => {
        return request(app)
            .get('/')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).toEqual(
                    expect.objectContaining({
                        status: 'ok',
                    }),
                );
            });
    });


    it('should return a randomly located geometry coordinates', () => {
        return request(app)
            .post('/generateCoordinates')
            .send({
                boundaryBox: {
                    latitudeMin: 1,
                    latitudeMax: 9,
                    longitudeMin: 1,
                    longitudeMax: 9
                },
                numberOfCoordinates: 5
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
    });

    it('should return a 400 error as `latitudeMin` is missing', () => {
        return request(app)
            .post('/generateCoordinates')
            .send({
                boundaryBox: {
                    // latitudeMin: 1,
                    latitudeMax: 9,
                    longitudeMin: 1,
                    longitudeMax: 9
                },
                numberOfCoordinates: 5
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(400)
    });

    it('should return a 400 error as `latitudeMax` is missing', () => {
        return request(app)
            .post('/generateCoordinates')
            .send({
                boundaryBox: {
                    latitudeMin: 1,
                    // latitudeMax: 9,
                    longitudeMin: 1,
                    longitudeMax: 9
                },
                numberOfCoordinates: 5
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(400)
    });

    it('should return a 400 error as `longitudeMin` is missing', () => {
        return request(app)
            .post('/generateCoordinates')
            .send({
                boundaryBox: {
                    latitudeMin: 1,
                    latitudeMax: 9,
                    // longitudeMin: 1,
                    longitudeMax: 9
                },
                numberOfCoordinates: 5
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(400)
    });

    it('should return a 400 error as `longitudeMax` is missing', () => {
        return request(app)
            .post('/generateCoordinates')
            .send({
                boundaryBox: {
                    latitudeMin: 1,
                    latitudeMax: 9,
                    longitudeMin: 1,
                    // longitudeMax: 9
                },
                numberOfCoordinates: 5
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(400)
    });

    it('should return a 400 error as `numberOfCoordinates` is missing', () => {
        return request(app)
            .post('/generateCoordinates')
            .send({
                boundaryBox: {
                    latitudeMin: 1,
                    latitudeMax: 9,
                    longitudeMin: 1,
                    longitudeMax: 9
                },
                // numberOfCoordinates: 5
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(400)
    });

});
