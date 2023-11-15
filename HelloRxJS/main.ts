/*
import { fromEvent, map, filter, distinctUntilChanged, debounceTime } from 'rxjs';

const userInput = document.getElementsByName('userInput')[0];

fromEvent(userInput, 'keyup').pipe(
    map(data => data.target['value']),
    filter(input => input.length > 2),
    debounceTime(750),
    distinctUntilChanged()
).subscribe(console.log);

console.clear();
*/

import { Observable, concatMap } from "rxjs";

interface Person {
	name: string;
	height: string;
	mass: string;
	hair_color: string;
	skin_color: string;
	eye_color: string;
	birth_year: string;
	gender: string;
	homeworld: string;
	films: string[];
	species: any[];
	vehicles: string[];
	starships: string[];
	created: string;
	edited: string;
	url: string;
}

interface Films {
	title: string;
	episode_id: number;
	opening_crawl: string;
	director: string;
	producer: string;
	release_date: string;
	characters: string[];
	planets: string[];
	starships: string[];
	vehicles: string[];
	species: string[];
	created: string;
	edited: string;
	url: string;
}

class HttpClient {
    get<T>(url: string) {
        return new Observable<T>(observer => {
            fetch(url)
            .then((response) => response.json())
            .then((json) => observer.next(json))
            .catch((error) => observer.error(error))
            .finally(() => observer.complete());
        })
    }
}

const httpClient = new HttpClient();

httpClient
    .get<Person>('https://swapi.dev/api/people/1')
    .pipe(
        concatMap((person) => person.films),
        concatMap((filmUrl) => httpClient.get<Films>(filmUrl))
    )
    .subscribe((films) => console.log(films.title));
