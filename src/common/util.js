// convert minutes to hours and minutes format
const convertMinsToHours = mins => {
    let h = Math.floor(mins / 60);
    let m = Math.round(mins % 60);

    return `${h} hr(s), ${m} min(s)`;
};

const displayList = (list, separator) => {
    return list.map((item, i) => {
        return item.actor.name + ((i < list.length - 1) ? separator : "");
    });
};

const generateArrayOfNumbers = (from, to) => {
    let arr = [];

    for (let index = from; index <= to; index++) {
        arr.push(index);
    }

    return arr;
}

const getSelectOptionValues = (selector) => {
    const options    = document.querySelector(selector).selectedOptions;
    let optionValues = [];

    for (const element of options) {
        optionValues.push(element.value);
    }

    return optionValues;
}

const createFormData = (movie) => {
    const formData = new FormData();
    formData.append('poster', movie.posterFile);
    formData.append('name', movie.name);
    formData.append('rating', movie.rating);
    formData.append('runtime', movie.runtime);
    formData.append('trailer', movie.trailer);
    formData.append('releaseYear', movie.releaseYear);
    formData.append('about', movie.about);
    formData.append('language', movie.language);

    // formData.append('video', movie.movieVideoFile);
    formData.append('categories', movie.categories);
    formData.append('actors', movie.actors);
    formData.append('genres', movie.genres);

    return formData;
}

const getMainUrl = (currentUrl) => {
    let splitUrl = currentUrl.split("/");

    if(splitUrl.length > 3 && splitUrl[3].trim()!=""){
        splitUrl = splitUrl.splice(3);

        return "/" + splitUrl.join("/") + "/";
    }

    return "";
}

const data = {
    movies: [
        {
            id: 1, 
            name: "The punisher", 
            rating: 3.5, 
            runtime: 340, 
            language: "English", 
            trailer: "https://www.youtube.com/watch?v=s4QV6OZdmWY",
            poster: "https://res.cloudinary.com/ellegacy/image/upload/v1706901383/ai-generated-8490484_640_umtdza.jpg",
            release_year: 2019,
            created_at: "2024-05-05",
            genres: [
                {id: 1, name: "action"},
                {id: 2, name: "sci-fi"},
                {id: 3, name: "thriller"}
            ]
        },
        {
            id: 2, 
            name: "Need for speed", 
            rating: 4.5, 
            runtime: 5000,
            language: "French",
            trailer: "https://www.youtube.com/watch?v=s4QV6OZdmWY",
            poster: "https://res.cloudinary.com/ellegacy/image/upload/v1710105273/porsche-5665390_640_sj11wg.jpg",
            release_year: 2010,
            created_at: "2024-05-01",
            genres: [
                {id: 1, name: "drama"},
                {id: 2, name: "sci-fi"},
                {id: 3, name: "thriller"}
            ]
        },
        {
            id: 3, 
            name: "Call of duty", 
            rating: 5, 
            runtime: 5000,
            language: "French",
            trailer: "https://www.youtube.com/watch?v=s4QV6OZdmWY",
            poster: "https://res.cloudinary.com/ellegacy/image/upload/v1706901383/ai-generated-8490484_640_umtdza.jpg",
            release_year: 2010,
            created_at: "2024-05-01",
            genres: [
                {id: 1, name: "drama"},
                {id: 2, name: "sci-fi"},
                {id: 3, name: "thriller"}
            ]
        },
        {
            id: 4, 
            name: "God of war", 
            rating: 1.5, 
            runtime: 5000,
            language: "Greek",
            trailer: "https://www.youtube.com/watch?v=s4QV6OZdmWY",
            poster: "https://res.cloudinary.com/ellegacy/image/upload/v1672394388/thesolomonfidelis/intro/me_sz1h8m.png",
            release_year: 2010,
            created_at: "2024-05-01",
            genres: [
                {id: 1, name: "drama"},
                {id: 2, name: "sci-fi"},
                {id: 3, name: "thriller"}
            ]
        },
    ]
}

const App = {
    data,
    convertMinsToHours,
    displayList,
    generateArrayOfNumbers,
    getSelectOptionValues,
    createFormData,
    getMainUrl,
}

export default App;