const { Subject, BehaviorSubject, ReplaySubject, AsyncSubject } = require('rxjs');

/*
const subject = new Subject();
subject.subscribe(x => console.log('Subject 1:', x));
subject.next(1);
subject.next(2);
subject.next(3);
subject.subscribe(x => console.log('Subject 2:', x));
subject.next(4);
subject.next(5);
subject.next(6);
subject.complete();
*/

/*
const behaviourSubject = new BehaviorSubject(0);
behaviourSubject.subscribe(x => console.log('BehaviorSubject 1:', x));
behaviourSubject.next(1);
behaviourSubject.next(2);
behaviourSubject.next(3);
behaviourSubject.subscribe(x => console.log('BehaviorSubject 2:', x));
behaviourSubject.next(4);
behaviourSubject.next(5);
behaviourSubject.next(6);
*/

/*
const replaySubject = new ReplaySubject(3);
replaySubject.subscribe(x => console.log('ReplaySubject 1:', x));
replaySubject.next(1);
replaySubject.next(2);
replaySubject.next(3);
replaySubject.subscribe(x => console.log('ReplaySubject 2:', x));
replaySubject.next(4);
replaySubject.next(5);
replaySubject.next(6);
*/

/*
const asyncSubject = new AsyncSubject();
asyncSubject.subscribe(x => console.log('AsyncSubject 1:', x));
asyncSubject.next(1);
asyncSubject.next(2);
asyncSubject.next(3);
asyncSubject.subscribe(x => console.log('AsyncSubject 2:', x));
asyncSubject.next(4);
asyncSubject.next(5);
asyncSubject.next(6);
asyncSubject.complete();
*/