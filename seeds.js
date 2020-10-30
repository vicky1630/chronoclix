const mongoose = require('mongoose');

const Series = require('./models/series').Series;
const Story = require('./models/series').Story;

const mongoURI = 'mongodb://localhost/chroniclix';
mongoose.connect(
  mongoURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log('the connection with mongod is established');
  }
);

async function seed() {
// Create Series
  const fiftyStates = new Series({
    name: 'A Man and the Fifty States',
    creator:"Arthur McWord",
    genre: "Comedy",
    stories: [],
  });

  const myCousin = new Series({
    name: 'Not My Cousin',
    creator:"Moira Rose",
    genre: "Suspense",
    stories: [],
  });

// Add Stories
  const florida = await Story.create({
    title: 'Florida',
    body: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Praesent at massa quis risus vestibulum luctus.',
  });

  const utah = await Story.create({
    title: 'Utah',
    body: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Praesent at massa quis risus vestibulum luctus.',
  });

  const california = await Story.create({
    title: 'California',
    body: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Praesent at massa quis risus vestibulum luctus.',
  });

  const story1 = await Story.create({
    title: 'Not This Time',
    body: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Praesent at massa quis risus vestibulum luctus.',
  });


  const story2 = await Story.create({
    title: 'On to the Next',
    body: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Praesent at massa quis risus vestibulum luctus.',
  });

  const story3 = await Story.create({
    title: 'It Was Me',
    body: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Praesent at massa quis risus vestibulum luctus.',
  });


  fiftyStates.stories.push(florida);
  fiftyStates.stories.push(utah);
  fiftyStates.stories.push(california); // associated!
  fiftyStates.save(function (err, savedSeries) {
    if (err) {
      console.log(err);
    } else {
      console.log( savedSeries);
    }
  });

  myCousin.stories.push(story1);
  myCousin.stories.push(story2);
  myCousin.stories.push(story3); // associated!
  myCousin.save(function (err, savedSeries) {
    if (err) {
      console.log(err);
    } else {
      console.log( savedSeries);
    }
  });

}

seed();