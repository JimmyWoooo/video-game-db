export interface Game {
    id: number;
    name: string;
    released: string;
    description: string;
    metacritic: number;
    background_image: string;
    parent_platforms: ParentPlatform[]; 
    rating: number;
    genres: Genre[];
    ratings: Rating[];
    short_screenshots: Screenshots[];
    trailers: Trailer[];
}

export interface APIResponse<T> {
    results: Array<T>;
}

interface ParentPlatform {
    platform: {
        name: string;
    };
}

interface Rating{
    id: number;
    count: number;
    title: string;
    percent: number;
}

export interface Screenshots {
    image: string;
}

interface Trailer {
    data: {
        max: string;
    };
}

interface Genre{
    id: number;
    name: string;
}