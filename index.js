let figlet = require('figlet');

figlet('intocode', function(err, data) {
    if (err) {
        console.log('Something went wrong...')
        console.log(err)
        return;
    }
    console.log(data)
});