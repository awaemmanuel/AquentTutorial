var listTemplate = document.getElementById("list_template").innerHTML,
    detailTemplate = document.getElementById("details_template").innerHTML,
    searchText = document.getElementById("search_text"),
    listDiv = document.getElementById("list"),
    detailDiv = document.getElementById("details"),
    searchBtn = document.getElementById("search_button");


// Add event listener to search button
searchBtn.addEventListener("click", function() {
    var title = searchText.value;
    $.get("http://www.omdbapi.com/?s=" + title, null, null, "json")
        .done(onSearchResult)
        .fail(onSearchFail);
});


function onSearchResult(data) {
    var html = Mustache.render(listTemplate, data);
    listDiv.innerHTML = html;

    var items = listDiv.getElementsByTagName("a");
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        item.addEventListener("click", getDetails);
    }

}

function onSearchFail(data) {
    alert("There was a problem contacting server. Please try again!");
}

function getDetails(event) {
    var id = event.target.id;

    $.get("http://www.omdbapi.com/?plot=full&i=" + id, null, null, "json")
        .done(onDetailsResult)
        .fail(onSearchFail);
}


function onDetailsResult(data) {
    var html = Mustache.render(detailTemplate, data);
    detailDiv.innerHTML = html;
}