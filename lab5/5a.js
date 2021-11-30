const film = {
    name: "The fault in our stars",
    release_date: 2014,
    genre: "drama",
    duration_in_minutes: 126,
    director: "Josh Boone",
    author: "John Green",
    rating: 8.2,
    displayInfo: () => {
        console.log("The fault in our stars, 2014, drama, 126, Josh Boone, John Green");
    },
    rename: (Name) => {
        this.name = Name;
    },
    changeGenre: (Genre) => {
        this.genre = Genre;
    },


};

const resCheck = (filmObject) => {
    console.log(`Name: ${filmObject.name} , Type: ${typeof filmObject.name}`);
    console.log(`Release_date: ${filmObject.release_date} , Type: ${typeof filmObject.release_date}`);
    console.log(`Genre: ${filmObject.genre} , Type: ${typeof filmObject.genre}`);
    console.log(`Duration in minutes: ${filmObject.duration_in_minutes} , Type: ${typeof filmObject.duration_in_minutes}`);
    console.log(`Director: ${filmObject.director} , Type: ${typeof filmObject.director}`);
    console.log(`Author: ${filmObject.author} , Type: ${typeof filmObject.author}`);
    console.log(`Rating: ${filmObject.rating} , Type: ${typeof filmObject.rating}`);
    console.log(`--------------------------------`);
    console.log(`function Display all info about object: ${filmObject.displayInfo}`);
    console.log(`function rename: ${filmObject.rename} , Type: ${typeof filmObject.rename}`);
    console.log(`function changeGenre: ${filmObject.changeGenre} , Type: ${typeof filmObject.changeGenre}`);




};

resCheck(film);