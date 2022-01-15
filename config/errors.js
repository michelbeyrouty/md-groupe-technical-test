'use strict';

class BaseError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
};

class validationError extends BaseError {};

class ressourceNotFound extends BaseError {};

class mongoError extends BaseError {};

module.exports = {
  validationError,
  ressourceNotFound,
  mongoError,
};
