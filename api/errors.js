'use strict';

class BaseError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
};

class validationError extends BaseError {};

module.exports = {
  validationError,
};
