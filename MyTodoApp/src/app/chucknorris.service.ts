import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface Joke {
	categories: string[];
	created_at: string;
	icon_url: string;
	id: string;
	updated_at: string;
	url: string;
	value: string;
}

@Injectable({
  providedIn: 'root'
})
export class ChucknorrisService {
  reloadJoke = new Subject<void>(); // <- Event
  httpClient = inject(HttpClient);
  
  invokeLoadJoke() {
    this.reloadJoke.next();
  }

  loadJoke() {
    return this.httpClient.get<Joke>('https://api.chucknorris.io/jokes/random?category=dev');
  }
}
