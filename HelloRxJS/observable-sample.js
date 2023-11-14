const { Observable } = require("rxjs");

intervalAsync(1000).subscribe(count => {
    console.log(count);
});

function intervalAsync(count) {
    return new Observable(observer => {
        let intervalCount = 0;
        setInterval(() => {
            observer.next(intervalCount++);
        }, count);
    })
}