# AJAX - Asynchronous javascript

## Definitions

### AJAX
Asynchronous: request does not block other events from happening
Some require API key or Oauth
XML used to be dominant form, now JSON is much more common
Can also return HTML responses

### API
Application Programming Interface

The means by which to request data from an external database

Apparently, Udacity had an API, but all the documentation has been taken down?

[List of Google API's ](https://developers.google.com/apis-explorer/#p/)

### XHR object
Constructor for a request, not necessarily XML (probably JSON)
```
const asyncRequestObject = new XMLHttpRequest();
```

###Available methods and properties

#### ```.open()```:
- [Documentation](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/open)
- 2 primary params: HTTP method and URL
e.g. ```asyncRequestObject.open('GET', 'https://unsplash.com');```
- [same-origin policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy): can only make requests from the same domain as the site that will end up loading the data
- open does not actually send a request, it just creates an object with the info we will need for the request


#### ```.send()```
- [Documentation](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/send)
- actually sends the request to the server
- takes one optional param, ```body``` for PUT requests


#### ```.onload``` property
- [Documentation](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequestEventTarget/onload)
- We set this to the function that should be called when the request returns
- Example:
  ```JavaScript
  function handleSuccess(){
    console.log(this.responseText); // the HTML of the page
  }

asyncRequestObject.onload = handleSuccess;
```

#### ```.onerror``` property
- works same as onload, but is called if the request returns an error
- if this is not set, it will just fail silently

#### JSON

- use ``JSON.parse()`` to get Json instead of a full html response
- Example with onload:
  ```JavaScript
function handleSuccess () {
const data = JSON.parse( this.responseText ); // convert data from JSON to a JavaScript object
console.log( data );
}

asyncRequestObject.onload = handleSuccess;
```


#### .setRequestHeader

- Necessary to give authorization keys
- E. G.
```javaScript
imgRequest.setRequestHeader('Authorization', 'Client-ID d033b1a130c99a10aa95b8a342f8b7f2dfedc44f916a1bc566e2f398ef78ea9c');
```


## making requests with jQuery

### Syntax
```
$.ajax(<url-to-fetch>, <a-configuration-object>);
```
- url is optional


### Configuration object
- Object whose properties are the data
