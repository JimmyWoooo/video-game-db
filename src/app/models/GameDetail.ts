export interface GameDetail {
    id: number;
    name: string;
    description_raw: string;
    metacritic: number;
    released: string;
    background_image: string;
    website: string;
    rating: number;
    ratings: Rating[];
    parent_platforms: ParentPlatform[]; 
    stores: Stores[];
    developers: Developers[];
    genres: Genres[];
    publishers: Publishers[];
    esrb_rating: Esrb;
    clips: Clips[];
    updated: string;
}

interface Rating{
    id: number;
    count: number;
    title: string;
    percent: number;
}

interface ParentPlatform {
    platform: {
        name: string;
    };
}

interface Stores{
    id: number;
    url: string;
    store: {
        name: string;
    }
}

interface Developers{
    id: number;
    name: string;
}

interface Genres{
    id: number;
    name: string;
}

interface Publishers{
    id: number;
    name: string;
}

interface Esrb{
    id: number;
    name: string;
}

interface Clips{
    clip: string;
    clips: {
        320: string;
        640: string;
        full: string;
    };
    video: string;
}