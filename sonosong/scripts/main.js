api_key = "AIzaSyB9WzlCfQKAWzLTqAsrcepelEEUT4b8NPk";

const videoDiv = document.getElementsByClassName('youtubeVideoContainer')[0];
//const searchInput = document.getElementById('searchBarBar');
//let wordInput = '';
//let ytURL ='';

function getVideoId(object) {
    console.log('testing in main js')
    let count = 0;
    let vidId = object.items[count].id.videoId;
    while (vidId === undefined) {
        count++;
        vidId = object.items[count].id.videoId;
    }
    const iFrame = videoDiv.getElementsByTagName("iframe")[0];
    iFrame.setAttribute("src", `http://www.youtube.com/embed/${vidId}`);
}

// searchInput.addEventListener('keypress', function(e) {
//     var key = e.which || e.keyCode;
//     if (key === 13) {
//         //Updates empty string with the inputted search term from search bar
//         wordInput += searchInput.value.split(' ').join('+');
//         //Updates the query search with the inputted search term from search bar
//         ytURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${wordInput}&key=${api_key}`;
//         updateYTPage();
//     }
// })

// function updateYTPage() {
//     get(ytURL)
//     .then((response) =>  {
//         //some functions here
//         getVideoId(response);
//     });

// }