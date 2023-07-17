import { environment } from "src/environments/environment";

const base_URL = `https://api.rawg.io/api/games?key=${environment.MY_API_KEY}`;
const search_URL = `https://api.rawg.io/api/games?`;
const details_URL = `https://api.rawg.io/api/games/`;
const popular_URL = `https://api.rawg.io/api/games/lists/greatest?year=2022&discover=true&ordering=-added&page_size=30&page=1&key=${environment.MY_API_KEY}`;

const getCurrMonth = () => {
    const month = new Date().getMonth() + 1;
    if(month < 10){
        return `0${month}`
    }else{
        return month;
    }
}

const getCurrDay = () => {
    const day = new Date().getDay() + 1;
    if(day < 10){
        return `0${day}`
    }else{
        return day;
    }
}

const currYear = new Date().getFullYear();
const currMonth = getCurrMonth();
const currDay = getCurrDay();
const currDate = `${currYear}-${currMonth}-${currDay}`
const lastYear = `${currYear-1}-${currMonth}-${currDay}`
const nextYear = `${currYear+1}-${currMonth}-${currDay}`

const popular_games = `&dates=${lastYear},${currDate}&ordering=-rating&page_size=12`
const upcoming_games = `&dates=${currDate},${nextYear}&ordering=-added&page_size=12`
const new_games = `&dates=${lastYear},${currDate}&ordering=-released&page_size=12`

// export function popularGamesURL():string { return `${base_URL}${popular_games}`}
export function popularGamesURL():string { return popular_URL}
export const upcomingGamesURL = () => `${base_URL}${upcoming_games}`
export const newGamesURL = () => `${base_URL}${new_games}`
export const gameDetailsURL = (game_id: number) => `${details_URL}${game_id}?key=${environment.MY_API_KEY}`
export const gameScreenShotsURL = (game_id: number) => `${details_URL}${game_id}/screenshots?key=${environment.MY_API_KEY}`
export const searchGamesURL = (game_name: number) => `${search_URL}search=${game_name}&page_size=12&key=${environment.MY_API_KEY}`