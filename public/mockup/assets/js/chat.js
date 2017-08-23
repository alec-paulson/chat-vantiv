(function () {

    $('#live-chat header').on('click', function () {

        $('.chat').slideToggle(300, 'swing');
        $('.chat-message-counter').fadeToggle(300, 'swing');

    });

    $('.chat-close').on('click', function (e) {

        e.preventDefault();
        $('#live-chat').fadeOut(300);

    });


    $('#submitBtn').on('click', function (e) {
        e.preventDefault();
        $.ajax({
            type: 'POST',
            data: JSON.stringify({msg: $('#msg').val()}),
            contentType: 'application/json',
            url: 'http://localhost:3000/recastai/converse',
            success: function (data) {
                console.log('success');
                console.log(JSON.stringify(data));
                $('#chatHist').append('<div class="chat-message clearfix"><img src="http://lorempixum.com/32/32/people" alt="" width="32" height="32"><div class="chat-message-content clearfix"><span class="chat-time">13:35</span><h5>John Doe</h5><p>' + JSON.parse(data).reply + '</p></div></div><hr>');
                $("#chatHist").animate({ scrollTop: $("#chatHist")[0].scrollHeight}, 1000);
                $('#msg').val('');
            }
        });
    });

})();