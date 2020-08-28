// const db = require('../../data/dbConfig')

module.exports = {
    getAll,
    getByDate
}

arr = []

for (let i = 0; i < 100; i++) {
    arr.push(Math.floor(Math.random() * 500))
}

function getAll() {
    return {
        id: 1,
        date: "tuesday",
        report: [
            date = "some time in the future",
            coverage = Math.floor(Math.random() * 200),
            map_data = {
                type: `FeatureCollection`,
                bunches: [
                    type = `Feature`,
                    geometry = {
                        type: `point`,
                        coordinates: [
                            ...arr
                        ]
                    },
                    properties = {
                        time: "tuesday",
                        stopId: "2"
                    }
                ]
            },
            num_gaps = Math.floor(Math.random() * 200),
            route_id = '2',
            line_chart = {
                gaps: [
                    ...arr
                ],
                times: [
                    "00: 00 - 23: 50"
                ],
                bunches: [
                    ...arr
                ]
            },
            route_name = 'string',
            route_type = 'bus',
            num_bunches = Math.floor(Math.random() * 200),
            route_table = [
                {
                    coverage: Math.floor(Math.random() * 200),
                    route_id: "2",
                    route_id: "3",
                    route_name: "bus",
                    overall_health: Math.floor(Math.random() * 200),
                    gapped_percentage: Math.floor(Math.random() * 200),
                    bunched_percentage: Math.floor(Math.random() * 200),
                    on_time_percentage: Math.floor(Math.random() * 200)
                }
            ]
        ]
    }
}

function getByDate(date) {
    // return db('reports')
    //     .where({ date })
    //     .first()
}