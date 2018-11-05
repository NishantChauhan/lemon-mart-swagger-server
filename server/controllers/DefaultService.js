'use strict';

exports.userIdGET = function(args, res, next) {
  /**
   * Gets a `User` object by id
   *
   * id String User's unique id
   * returns User
   **/
  var examples = {};
  examples['application/json'] = {
  "role" : { },
  "userStatus" : true,
  "lastModifiedBy" : "aeiou",
  "name" : {
    "middle" : "aeiou",
    "last" : "aeiou",
    "first" : "aeiou"
  },
  "id" : "aeiou",
  "lastModified" : "2000-01-23",
  "email" : "aeiou",
  "picture" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.userIdPUT = function(args, res, next) {
  /**
   * Updates a `User` object given id
   *
   * id String User's unique id
   * userData User Updated user object (optional)
   * returns User
   **/
  var examples = {};
  examples['application/json'] = {
  "role" : { },
  "userStatus" : true,
  "lastModifiedBy" : "aeiou",
  "name" : {
    "middle" : "aeiou",
    "last" : "aeiou",
    "first" : "aeiou"
  },
  "id" : "aeiou",
  "lastModified" : "2000-01-23",
  "email" : "aeiou",
  "picture" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.usersGET = function(args, res, next) {
  /**
   * Searches and returns `User` objects. Optional query params determines values of returned array 
   *
   * search String Search text (optional)
   * offset Integer The number of items to skip before starting to collect the result set. (optional)
   * limit Integer The numbers of items to return. (optional)
   * returns Users
   **/
  var examples = {};
  examples['application/json'] = {
  "total" : 0.80082819046101150206595775671303272247314453125,
  "items" : ""
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

