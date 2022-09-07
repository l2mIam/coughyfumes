import downtown from '../assets/img/loc-downtown.jpg';
import coffee from '../assets/img/coffee.jpg'
import threeCoffee from '../assets/img/three-coffees.jpg'

export const PROMOTIONS = [
    {
        id: 0,
        name: 'Late Night Jazz',
        image: downtown,
        featured: true,
        description:
            'Join us Thursday evenings for coffee and jazz. 25% of drinks. No cover'
    },
    {
        id: 1,
        name: 'Happy Hour',
        image: coffee,
        featured: false,
        description:
            'espresso happy hour every afternoon 2pm to 5pm'
    },
    {
        id: 2,
        name: 'Member Benefits',
        image: threeCoffee,
        featured: false,
        description: `Become a member and receive benefits like free drinks, vip access to special events, and all kinds of other goodies`
    }
];
