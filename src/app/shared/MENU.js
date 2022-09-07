import breakfast from '../assets/img/food-breakfast.jpg';
import lunch from '../assets/img/food-lunch.jpg';
import dessert from '../assets/img/food-dessert.jpg';

export const MENU = [
    {
        id: 0,
        name: 'Fried Egg on Toast',
        image: breakfast,
        featured: true,
        description:
            "The picture speaks for itself. What more can be said."
    },
    {
        id: 1,
        name: 'Lunch for Healthy Soul',
        image: lunch,
        featured: false,
        description:
            'The chef explained it, but to be honest I don\'t know what it is.  Taste delicious though!'
    },
    {
        id: 2,
        name: 'Pastries',
        image: dessert,
        featured: false,
        description:
            'If you\'re going to cheat, go all out.  These will tip the scale, but so worth it.'
    }
];
