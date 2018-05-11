//
// media-service.js
// Service for retrieving media from the REST api.
//

(function () {
    'use strict';

    var LOREM_IPSUM = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fermentum, lorem id laoreet suscipit, metus elit porttitor orci, vel congue leo diam ac lorem. Aliquam dapibus facilisis pretium. Duis lorem diam, mollis nec turpis nec, consectetur commodo felis. Duis condimentum mattis velit, eget accumsan metus tincidunt eu. Curabitur sed ultrices nibh, ut tincidunt risus. Praesent ac ex posuere, luctus enim vitae, volutpat quam. Aenean bibendum nulla vitae arcu convallis semper. Maecenas condimentum ac lectus et lobortis. Phasellus est dui, placerat sed ultricies eget, ornare at mi. Cras ut congue libero, sed consectetur ex. Nunc id dolor sem. Sed in gravida felis, in sollicitudin quam. Etiam dictum ipsum nisi, sit amet tristique nunc malesuada id. Etiam eget euismod dui, nec auctor sem. Cras accumsan suscipit metus."
    var DUMMY_TITLES = ["The Godfather (1972)", "The Godfather: Part II (1974)", "The Dark Knight (2008)", "12 Angry Men (1957)", "Schindler's List (1993)", "The Lord of the Rings: The Return of the King (2003)", "Pulp Fiction (1994)", "The Good, the Bad and the Ugly (1966)", "Fight Club (1999)", "The Lord of the Rings: The Fellowship of the Ring (2001)", "Forrest Gump (1994)", "Star Wars: Episode V - The Empire Strikes Back (1980)", "Avengers: Infinity War (2018)", "Inception (2010)", "The Lord of the Rings: The Two Towers (2002)", "One Flew Over the Cuckoo's Nest (1975)", "Goodfellas (1990)", "The Matrix (1999)", "Seven Samurai (1954)", "City of God (2002)", "Star Wars: Episode IV - A New Hope (1977)", "Se7en (1995)", "The Silence of the Lambs (1991)", "It's a Wonderful Life (1946)", "Life Is Beautiful (1997)", "The Usual Suspects (1995)", "Spirited Away (2001)", "Saving Private Ryan (1998)", "Léon: The Professional (1994)", "Interstellar (2014)", "The Green Mile (1999)", "American History X (1998)", "Psycho (1960)", "Once Upon a Time in the West (1968)", "City Lights (1931)", "Casablanca (1942)", "Modern Times (1936)", "The Intouchables (2011)", "The Pianist (2002)", "The Departed (2006)", "Terminator 2 (1991)", "Raiders of the Lost Ark (1981)", "Back to the Future (1985)", "Rear Window (1954)", "Whiplash (2014)", "Gladiator (2000)", "The Lion King (1994)", "The Prestige (2006)", "Memento (2000)", "Apocalypse Now (1979)", "Alien (1979)", "The Great Dictator (1940)", "Cinema Paradiso (1988)", "Sunset Boulevard (1950)", "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb (1964)", "Grave of the Fireflies (1988)", "The Lives of Others (2006)", "Paths of Glory (1957)", "The Shining (1980)", "Django Unchained (2012)", "Coco (2017)", "WALL·E (2008)", "Princess Mononoke (1997)", "American Beauty (1999)", "The Dark Knight Rises (2012)", "Old Boy - Hämnden (2003)", "Witness for the Prosecution (1957)", "Aliens (1986)", "Once Upon a Time in America (1984)", "Das Boot (1981)", "Citizen Kane (1941)", "Vertigo (1958)", "North by Northwest (1959)", "Braveheart (1995)", "Reservoir Dogs (1992)", "Star Wars: Episode VI - Return of the Jedi (1983)", "M (1931)", "Your Name (2016)", "Dangal (2016)", "Requiem for a Dream (2000)", "Amadeus (1984)", "Like Stars on Earth (2007)", "Amélie (2001)", "A Clockwork Orange (1971)", "Lawrence of Arabia (1962)", "Eternal Sunshine of the Spotless Mind (2004)", "Double Indemnity (1944)", "Taxi Driver (1976)", "Singin' in the Rain (1952)", "2001: A Space Odyssey (1968)", "3 Idiots (2009)", "Toy Story (1995)", "To Kill a Mockingbird (1962)", "Full Metal Jacket (1987)", "Inglourious Basterds (2009)", "Bicycle Thieves (1948)", "The Sting (1973)", "The Kid (1921)", "Toy Story 3 (2010)", "Snatch (2000)"];
    var DUMMY_ACTORS = [{"id":"nm0001667","name":"Jonathan Rhys Meyers","poster":"https://ia.media-imdb.com/images/M/MV5BMTg3MTQyMTU4Nl5BMl5BanBnXkFtZTgwMzgzOTQ3MDE@._V1_UX32_CR0,0,32,44_AL_.jpg"},{"id":"nm0000131","name":"John Cusack","poster":"https://ia.media-imdb.com/images/M/MV5BMTk4MTAwMjYzNV5BMl5BanBnXkFtZTcwNjIxNTU1OA@@._V1._CR286,2,351,422_UY44_CR2,0,32,44_AL_.jpg"},{"id":"nm1926865","name":"Johnny Flynn","poster":"https://ia.media-imdb.com/images/M/MV5BMjAxMzY2MjM4Ml5BMl5BanBnXkFtZTcwNjI2OTczOQ@@._V1_UY44_CR17,0,32,44_AL_.jpg"},{"id":"nm0186844","name":"Johnny Crawford","poster":"https://ia.media-imdb.com/images/M/MV5BMjQyNjM2NDA2Ml5BMl5BanBnXkFtZTgwMjAyODUyMTI@._V1_UX32_CR0,0,32,44_AL_.jpg"},{"id":"nm0000408","name":"Jonathan Frakes","poster":"https://ia.media-imdb.com/images/M/MV5BMTM2MDIxOTE3Nl5BMl5BanBnXkFtZTcwMDQxNjcxNw@@._V1_UX32_CR0,0,32,44_AL_.jpg"},{"id":"nm0000954","name":"Jon Bon Jovi","poster":"https://ia.media-imdb.com/images/M/MV5BMTc4NzA2Mzk3OV5BMl5BanBnXkFtZTcwNzI0MTM5Mg@@._V1_UY44_CR0,0,32,44_AL_.jpg"},{"id":"nm0680392","name":"Ethan Phillips","poster":"https://ia.media-imdb.com/images/M/MV5BMjM0Mzk3MzUxOV5BMl5BanBnXkFtZTgwMzIxMjU4NjE@._V1_UY44_CR1,0,32,44_AL_.jpg"},{"id":"nm0590055","name":"John Mills","poster":"https://ia.media-imdb.com/images/M/MV5BMTIxNjEyNzY3M15BMl5BanBnXkFtZTYwODE5MzU2._V1_UX32_CR0,0,32,44_AL_.jpg"},{"id":"nm1401022","name":"Jonathan Howard","poster":"https://ia.media-imdb.com/images/M/MV5BNDUwNjA0NTc2N15BMl5BanBnXkFtZTgwMDY0MzM0NTM@._V1_UY44_CR1,0,32,44_AL_.jpg"},{"id":"nm0005565","name":"Jonathan Winters","poster":"https://ia.media-imdb.com/images/M/MV5BOTA1NDQ5MjIwN15BMl5BanBnXkFtZTcwMTA3MDMzNA@@._V1_UY44_CR1,0,32,44_AL_.jpg"},{"id":"nm0004891","name":"John Dye","poster":"https://ia.media-imdb.com/images/M/MV5BMTk2MTYyODYwM15BMl5BanBnXkFtZTYwMjQ3NDg3._V1_UY44_CR17,0,32,44_AL_.jpg"},{"id":"nm0447913","name":"Arthur Kennedy","poster":"https://ia.media-imdb.com/images/M/MV5BZjNhMzU2OGMtNGQ5NC00MTA2LThmYmQtZGZjYTc3YjUwMzU1XkEyXkFqcGdeQXVyMzk3NTUwOQ@@._V1_UY44_CR2,0,32,44_AL_.jpg"},{"id":"nm0568501","name":"John McEnroe","poster":"https://ia.media-imdb.com/images/M/MV5BMTk5Nzg3NjY4MV5BMl5BanBnXkFtZTcwNzkxMzEwMw@@._V1_UY44_CR0,0,32,44_AL_.jpg"},{"id":"nm1437776","name":"John Tartaglia","poster":"https://ia.media-imdb.com/images/M/MV5BMTY5MjAwMTI0Nl5BMl5BanBnXkFtZTcwMTY2MTUyMw@@._V1_UX32_CR0,0,32,44_AL_.jpg"},{"id":"nm6778277","name":"John Bubniak","poster":"https://ia.media-imdb.com/images/M/MV5BZTYyMTg5YjMtNmU4Ni00NWY0LTg3YTAtY2I0YmEwOGUzM2NjXkEyXkFqcGdeQXVyNDg2NTg1ODg@._V1_UX32_CR0,0,32,44_AL_.jpg"}];
    var DUMMY_EPISODES = [];
    for (var i = 0; i < 100; i++) {       
        DUMMY_EPISODES.push({
            "id": "" + i,
            "title": "Episode " + i,
            "episode": Math.floor(Math.random() * 10),
            "season": Math.floor(Math.random() * 10),
        });
    };
    var DUMMY_GENRES = ["Comedy", "Sci-fi", "Romance", "Drama", "Mystery", "Crime", "Thriller"]

    angular.module('movieFinder.services')
        .factory('MediaService', function ($http, $q) {
            
            /**
             * Class for fetching lists/single media objects
             * from the REST API.
             * @param {String} mediaUrl The base URL of the API resource.
             */
            function MediaService(mediaUrl) {
                this.mediaUrl = mediaUrl;
                this.dummyData = []
                for(var i = 0; i < 20; i++) {
                    this.dummyData.push({
                        id: "Media" + i,
                        title: DUMMY_TITLES[Math.floor(Math.random()*DUMMY_TITLES.length)],
                        filePath: "//Media.avi",
                        rated: 'R',
                        poster: 'https://ia.media-imdb.com/images/M/MV5BOWQ1MDE1NzgtNTQ4OC00ZjliLTllZDAtN2IyOTVmMTc5YjUxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,675,1000_AL_.jpg',
                        imdbRating: Math.round(Math.random()*100)/10,
                        director: DUMMY_ACTORS[Math.floor(Math.random()*DUMMY_ACTORS.length)].name,
                        runtime: Math.floor(Math.random()*300),
                        releaseYear: Math.floor(1900 + Math.random()*100),
                        genres: [0,0].map(function(x){return DUMMY_GENRES[Math.floor(Math.random()*DUMMY_GENRES.length)]}),
                        plot: LOREM_IPSUM,
                        actors: [0,0,0,0,0].map(function(x){return DUMMY_ACTORS[Math.floor(Math.random()*DUMMY_ACTORS.length)]}),
                        episodes: [0,0,0,0,0,0].map(function(x){return DUMMY_EPISODES[Math.floor(Math.random()*DUMMY_EPISODES.length)]}),
                    })
                }
            }
            
            /**
             * Tries to return a list of objects from the API.
             * @return {Promise} A promise resolved with a list of object
             *                   on success, or rejected with an error if
             *                   the request failed.
             */
            MediaService.prototype.getList = function() {
                return this.getListByFilter(null);
            };
            
            /**
             * Tries to return a list of objects from the API filtered
             * by the filter object parameter.
             * @param  {Object} filter Map of strings or objects which will be 
             *                         turned to ?key1=value1&key2=value2
             * @return {Promise} A promise resolved with a list of object
             *                   on success, or rejected with an error if
             *                   the request failed.
             */
            MediaService.prototype.getListByFilter = function(filter) {
                var url = this.mediaUrl;
                var dummyData = this.dummyData;
                return $q(function (resolve, reject) {
                    resolve(dummyData)
                });
                /*return $q(function (resolve, reject) {
                    $http.get(url, {params: filter}).success(function (data) {
                        resolve(data.content);
                    }).error(function (err) {
                        reject(err);
                    });
                });*/
            };
            
            /**
             * Tries to return a single object from the API with the
             * id specified.
             * @param  {int} id
             * @return {Promise} A promise resolved with an object on success, 
             *                   or rejected with an error if the request failed.
             */
            MediaService.prototype.getById = function(id) {
                var dummyData = this.dummyData;
                return $q(function (resolve, reject) {
                    for (var i = 0; i < dummyData.length; i++) {
                        if (dummyData[i].id === id) {
                            return resolve(dummyData[i])
                        }
                    }
                    reject("Not found");
                });
                /*var url = this.mediaUrl + id;
                return $q(function (resolve, reject) {
                        $http.get(url).success(function (data) {
                            resolve(data);
                        }).error(function (err) {
                            reject(err);
                        });
                    });*/
                };
                
            return MediaService;
        });
})();