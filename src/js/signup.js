// You can write custom js here and it will be injected into the bundle in the end

//submit form on click on link. this is because styling buttons is a mess.
(function() {
    $('#optinform_btnSubscribe').on('click', function (event) {
        $('#subscribe-bid input.submit').click();
        return false;
    });
})();
