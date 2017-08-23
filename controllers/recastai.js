var recastai = require('recastai').default;

var request = new recastai.request('abc62eee425c4d709360f70146738146');



exports.converse = (req, res) => {
    console.log('converse called');

    request.converseText('when are presentations?')
        .then(function (result) {
            // get the next reply your bot can respond
            var reply = result.reply();

            console.log(reply);

            // Do your code

            res.send(JSON.stringify({ result: "converse called", reply: reply }));
        }).catch(function (err) {
            // Handle error
            res.send(JSON.stringify({ result: "Failed", error: err }));
        });

};