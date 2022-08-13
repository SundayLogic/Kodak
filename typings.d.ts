export type ContentType = "tv" | "movie";
export interface Content {
    adult: boolean  ;
    backdrop_path: string  ;
    genre_ids: [number] ;
    id: number  ;
    media_type: string ;
    overview: string 
    popularity: number 
    backdrop_path: string ;
    poster_path: string ;
    vote_average: number  ;
    vote_count: number  ;

    original_language?: string  ;
    original_title?: string  ;
    release_date?: string  ;
    title?: string  ;
    video?: boolean  ;

    first_air_date?: string  ;
    name?: string  ;
    origin_country?: [string]  ;
    original_language?: string  ;
    original_name?: string  ;
}
export interface Movie extends Content{
    original_language: string  ;
    original_title: string  ;
    release_date: string  ;
    title: string  ;
    video: boolean  ;
}
export interface Serie extends Content{
    first_air_date: string  ;
    name: string  ;
    origin_country: [string]  ;
    original_language: string  ;
    original_name: string  ;
}