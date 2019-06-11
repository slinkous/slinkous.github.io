# JavaScript Promises

The recommended option to handle asynchronous requests (and deferred?)

## Introduction

- What is Asynchronous: You cannot assume that network requests will return in order, or won't fail. Same with events and threads
- Callbacks: default option to handle asynchronous works:
 pass one function to another to have it called when conditions have been met
  - How do you handle errors? Any operation could fail
  - Should JS errors be handled different from network?
  - Pyramid of Doom: nested callbacks within callbacks with callbacks
    - ```.then``` will solve all this for us

### Course outline
1. Wrapping: the "thenning" and the "catching" stages
2. Chaining

### Four states of promises
1. Fulfilled - It worked
2. Rejected - It didn't work
3. Pending - Has not yet fulfilled or Rejected
4. Settled - Has either fulfilled or Rejected

### Promise S
