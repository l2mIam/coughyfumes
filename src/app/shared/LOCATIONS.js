import cafeUpdtownImg from '../assets/img/loc-uptown.jpg';
import cafeDowntownImg from '../assets/img/loc-downtown.jpg';
import cafeEastsideImg from '../assets/img/loc-eastside.jpg';
import cafeWestsideImg from '../assets/img/loc-westside.jpg';

export const LOCATIONS = [
    {
        id: 0,
        name: 'Uptown Cafe',
        image: cafeUpdtownImg,
        featured: false,
        description:
            'Rustic, charming, located in historic victorian district'
    },
    {
        id: 1,
        name: 'Downtown Cafe',
        image: cafeDowntownImg,
        featured: false,
        description:
            'An quiet oasis amongst a bussling metropolis'
    },
    {
        id: 2,
        name: 'Eastside Cafe',
        image: cafeEastsideImg,
        featured: false,
        description:
            'Feast your eyes on Magestic mountain views while savoring the delights'
    },
    {
        id: 3,
        name: 'Westside Cafe',
        image: cafeWestsideImg,
        featured: true,
        description:
            "The ocean becons and so does the aroma of fresh grounds"
    }
];
