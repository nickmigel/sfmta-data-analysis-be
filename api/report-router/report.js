const router = require('express').Router()

const db = require('./report-model')

router.get('/', (req, res) => {
    data = db.getAll()
    console.log(data)

    res.status(200).json(data)
})

router.post('/type', (req, res) => {
    data = db.getAll()
    console.log(data)

    res.status(200).json(data)

})

router.post('/date', (req, res) => {
    //this db model is based on the only other column in the database and the format is yyyy/mm/dd which you can turn most dates into using the ISOString method 
    db.getAll()
        .then(data => {
            //this route just accepts the route_type that gets sent from front end and does the same as above
            let report = Array.from(data.report).filter(item => 'bus' === 'bus')
            report[0].map_data = null
            report[0].route_table = null
            res.status(200).json(report[0])
        })
        .catch(err => {
            res.status(500).json(err.message)
        })
})

module.exports = router