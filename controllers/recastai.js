var recastai = require('recastai').default;

var request = new recastai.request('abc62eee425c4d709360f70146738146');



exports.converse = (req, res) => {
    console.log('converse called - sessionId=' + req.sessionID);
    var reqJson = req.body;
    request.converseText(reqJson.msg, { conversationToken: req.sessionID })
        .then(function (result) {
            // get the next reply your bot can respond
            var reply = result.reply();

            console.log(reply);

            // Do your code
            if (reqJson.msg == "clear")
                result.resetConversation();

            res.send(JSON.stringify({ result: "converse called", reply: reply }));
        }).catch(function (err) {
            // Handle error
            res.send(JSON.stringify({ result: "Failed", error: err }));
        });

};

exports.analyseText = (req, res) => {
    console.log('analyseText called - sessionId=' + req.sessionID);
    var reqJson = req.body;
    request.analyseText(reqJson.msg)
        .then(function (result) {
            // get the next reply your bot can respond
            var reply = result.intent();

            console.log(reply);

            // Do your code

            res.send(JSON.stringify({ result: "analyseText called", reply: reply }));
        }).catch(function (err) {
            // Handle error
            res.send(JSON.stringify({ result: "Failed", error: err }));
        });

};

exports.resetConversation = (req, res) => {
    console.log('resetConversations called - sessionId=' + req.sessionID);
    request.converseText("test", { conversationToken: req.sessionID })
        .then(function (resp) {
            resp.resetConversation();
            res.send(JSON.stringify({ result: "success" }));
        }).catch(function (err) {
            // Handle error
            res.send(JSON.stringify({ result: "Failed", error: err }));
        });
}