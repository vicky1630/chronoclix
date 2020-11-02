const router = require('express').Router();
const Series = require('../models/series').Series;
const Story = require('../models/series').Story;

// SERIES INDEX
router.get('/', (req, res) => {
  Series.find({}, (error, allSeries) => {
    res.render('series/index.ejs', {
      series: allSeries
      // ,currentUser: req.session.currentUser
    })
  })
})

// NEW SERIES FORM
router.get('/newseries', async (req, res) => {
  res.render('series/new.ejs');
});


// SERIES SHOW
router.get('/:seriesId', async (req, res) => {
  // find series in db by id and add new story
  Series.findById(req.params.seriesId, async (error, series) => {
    res.render('series/show.ejs', { series });
  });

});

// CREATE A NEW SERIES
router.post('/', async (req, res) => {
  Series.create(req.body, (error, series) => {
    res.redirect(`/series/${series.id}`);
  });
});

//DELETE SERIES
router.delete('/:seriesId', (req, res) => {
  Series.findByIdAndRemove(req.params.seriesId, (err, deletedSeries) => {
    res.redirect('/series')
  })
})

// UPDATE SERIES
router.put('/:seriesId', (req, res) => {
  Series.findByIdAndUpdate(req.params.seriesId, req.body, (error) => {
    res.redirect('/series/');
  });

})

// EDIT SERIES
router.get('/:seriesId/edit', (req, res) => {
  Series.findById(req.params.seriesId, (error, foundSeries) => {
    res.render('series/edit.ejs', {
      series: foundSeries
      // ,currentUser: req.session.currentUser
    })
  })
})

module.exports = router;