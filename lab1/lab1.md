# lab one assignment solution!

//Explain why do we want sometimes to use setImmediate instead of using setTimeout?

setTimeout is a callback function that called after a delay time has finished and 
a callback queue is in timer phase.  It will stay in the queue until the call stack is idle. 
It will execute(setTimeout(,0) after process.next function executed.

setImmediate is a callback function on a check phase.
 It checks queue of I/O event handlers. 
 If all I/O events in the queue of function processed, then it will executes the callback. 
 It will processed after process.nextTick


//Explain the difference between process.nextTick and setImmediate?
 
 Process nextTick is a function that is not provided by Lebuv but provided by node itself. 
 This referees a priorty queue. The callback function executed first when event loop start 
 and run the call function before every other callback function queue phases. 
 This callback runs without any limit until the queue is empty. 
 So process.nextTick executes immediately after the current function completes.

Whereas, SetImmediate callback function run from check queue 
after I/O event callbacks that already in the event queue. 
It will wait the event loop visit the queue.

//Name 10 global modules/methods available in Node environment.
1. Buffer 
2. console
3. process
4. global 
5. setImmediate() method.
6. setInterval() method
7. setTimeout() method
8. queueMicrotask() method
9. clearInterval()
10. clearImmediate()

