import { fromEvent, map, filter, distinctUntilChanged, debounceTime } from 'rxjs';

const userInput = document.getElementsByName('userInput')[0];

fromEvent(userInput, 'keyup').pipe(
    map(data => data.target['value']),
    filter(input => input.length > 2),
    debounceTime(750),
    distinctUntilChanged()
).subscribe(console.log);

console.clear();