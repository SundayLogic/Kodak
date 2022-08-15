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
export interface Trailer {
    id: string;
    iso_639_1: string;
    iso_3166_1: string;
    key: string;
    name: string;
    official: boolean;
    published_at: string;
    site: string;
    size: number;
    type: string;
}
export interface IndividualContentProps{
    content: Serie|Movie ;
    videos: Trailer[] ;
    recommended: {
        topRated: (Serie|Movie)[] | undefined;
        popular: (Serie|Movie)[] | undefined;
        upcoming?: Movie[] | undefined;
        airing?: Serie[] | undefined;
    }
}