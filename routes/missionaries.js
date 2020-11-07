var express = require('express');
var router = express.Router();
var Missionary = require('../models/Missionary');



router.get('/get-missionaries', async function(req, res, next) {
    try {
        const missionaries = await Missionary.find();
        res.status(200).json(missionaries);
    } catch (err) {
        res.status(404),json({
            status: 'fail',
            message: err
        });
    }
});

router.get('/search-missionaries', async function(req, res, next) {
    try {
      const missionary = req.query;
      console.log(missionary);
      const regex = new RegExp(missionary.name, 'i')
      const missionaries = await Missionary.find({$or: [{name: {$regex: regex}}, {continent: missionary.continent}, {country: missionary.country}]});
      res.status(200).json(missionaries);
  } catch (err) {
      res.status(404),json({ 
        status: 'fail',
        message: err
    });
  }
});

router.post('/add', async function(req, res, next) {
    try {
        const newMissionary = await Missionary.create(req.body);

        res.status(201).json({
            data: { missionaries: newMissionary}
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
});

router.get('/:id', async function(req, res, next) {
    try {
        let id = req.params.id;
        const missionary = await Missionary.findById(id);
        res.status(200).json({ missionary });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }

});

router.delete('/delete/:id', async function(req, res, next) {
    try {
        await Missionary.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status: 'success',
            data: null
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }

});

router.put('/update/:id', async function(req, res, next) {
    try {
        const missionary = await Missionary.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        res.status(200).json({
            status: 'success',
            data: { missionary }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }

});







// router.get('/login', function(req, res, next) {
//     res.render('login');
// });

// router.post('/login', function(req, res, next) {
//     models.missionaries
//     .findOne({
//         where: {
//             Username: req.body.username,
//             Password: req.body.password
//         }
//     })
//     .then(missionary => {
//         if (user) {
//             res.send('Login succeeded');
//         } else {
//             res.send('Invalid login!');
//         }
//     });
// });





module.exports = router;
