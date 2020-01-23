const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/app_pinterest', {
    useNewUrlParser: true
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err));