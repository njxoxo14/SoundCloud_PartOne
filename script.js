SC.initialize({
    client_id: 'b43329eb065d6257f4349dc3daf1c426',
});
//thank you BD
$(document).ready(function() {
    //Check, below
    var searchName = $("#searchButton").attr("Search");
    $("#searchButton").click(function() {
        
        SC.get(
            
            '/tracks',
            {genre:searchName}, 
            function(tracks) {
                for (var i = 0; i < tracks.length; i++) {
                    var track = tracks[i];
                    $("#results").append("<li>" + track.title + "</li>");
                }
            }
        );
    });

});
