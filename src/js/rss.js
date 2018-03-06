$(".rssFeed").each(function (index) {
    var rssFeed = $(this);
    var jSONURL = $(this).attr("data-feed");
    $.getJSON(jSONURL, function (result) {
        $.each(result, function (i, news) {
            var article = document.createElement('article');
            var content = '<a href="http://www.gbif.org/' + news.path + '"><h3>' + news.title + '</h3><p>' + news.body + '</p><span>' + news.created + '</span></a>';
            $(article).html(content).appendTo(rssFeed);
        });
    });
});