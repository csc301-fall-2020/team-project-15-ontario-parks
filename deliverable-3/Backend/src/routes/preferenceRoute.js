const express = require('express');
const Preference = require('../models/Attraction');
const router = express.Router();

router.get('/:preference', function (req, res) {
    Preference.find()
        .then((result) => {

            const pre = req.params.preference
            const preference = pre.split('-')

            const resultLength = result.length
            const preLength = preference.length

            let preferentList = []
            for(let i = 0; i < resultLength; i ++){
                let rCatrgory = result[i].category
                const r = preference.every(val => rCatrgory.includes(val))
                if(r === true){
                    preferentList.push(result[i])
                }
            }
            res.send(preferentList)
        })
        .catch((err) => {
            console.log(err);
        });
});

module.exports = router;
