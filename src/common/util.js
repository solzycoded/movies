
// convert minutes to hours and minutes format
const convertMinsToHours = mins => {
    let h = Math.floor(mins / 60);
    let m = Math.round(mins % 60);

    return `${h} hr(s), ${m} min(s)`;
};

// created a new date in the format (dayofweek, day month year)
// const formatDate = oldDate => {
//     const date = new Date(oldDate);

//     let dayOfWeek = getDayOfWeek(date.getDay()).slice(0, 3);
//     let monthOfYear = getMonthOfYear(date.getMonth()).slice(0, 3);

//     let newDate = `${dayOfWeek}, ${date.getDate()} ${monthOfYear} ${date.getFullYear()}`;

//     return newDate;
// };

// const getDayOfWeek = day => {
//     let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//     return daysOfWeek[day];
// };

// const getMonthOfYear = month => {
//     let monthsOfYear = [
//         'January',
//         'February',
//         'March',
//         'April',
//         'May',
//         'June',
//         'July',
//         'August',
//         'September',
//         'October',
//         'November',
//         'December'
//     ];

//     return monthsOfYear[month];
// };

const displayList = (list, separator) => {
    return list.map((item, i) => {
        return item.actor.name + ((i < list.length - 1) ? separator : "");
    });
};

// Format a date string (Tue, 19 Mar 2024 16:27:17 GMT) to a human-readable format (12:32 PM, 19th March 2024)
// const formatDateTime = date => {
//     return format(new Date(date), 'p, do MMMM yyyy');
// };

const generateArrayOfNumbers = (from, to) => {
    let arr = [];

    for (let index = from; index <= to; index++) {
        arr.push(index);
    }

    return arr;
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
}

export default App;