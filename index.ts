import { of, map, from } from 'rxjs';
import {
  fromEvent,
  fromEventPattern,
  interval,
  timer,
  throwError,
  defer
} from 'rxjs';

const observer = {
  next: val => console.log(val),
  error: err => console.log(err),
  complete: () => console.log('complete')
};

const subcription = observer;
// of
of(Promise.resolve('Heelo'));

// from
from(Promise.resolve('Hello'));

//fromEvent
fromEvent(document, 'click');

// fromEventPattern
fromEventPattern(
  handler => {
    document.addEventListener('click', handler);
  },
  handler => {
    document.removeEventListener('click', handler);
  }
);

// interval
interval(1000);

// timer
timer(1000);
timer(1000, 1000);

//throwError
throwError('an error');

// defer

const random = of(Math.random());
random.subscribe(observer);
random.subscribe(observer);
random.subscribe(observer);

const random1 = defer(() => of(Math.random()));
random1.subscribe(observer);
random1.subscribe(observer);
random1.subscribe(observer);
