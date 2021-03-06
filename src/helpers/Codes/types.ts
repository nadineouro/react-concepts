// Internal 1 - 99
export enum Internals {
  INVALID_ENVIRONMENT_VARIABLE = 98,
  UNEXPECTED_ERROR = 99
}

// User interaction 1000+
export enum UserInteraction {
  INVALID_USERNAME = 1000,
  WRONG_PASSWORD = 1001,
  USER_NOT_FOUND_OR_INACTIVE_ERROR = 1002,
  FEEDLOT_NOT_FOUND = 1003,
  PEN_NOT_FOUND = 1004,
  CUSTOMER_NOT_FOUND_OR_INACTIVE_ERROR = 1005,
  SIGN_IN_AGAIN = 1006,
  INVALID_RESET_PASSWORD_TOKEN = 1007
}

// HTTP 100 - <999
export enum HTTP {
  NO_CONNECTION = 0,
  OK_200 = 200,
  CREATED_201 = 201,
  INVALID_REQUEST_400 = 400,
  UNAUTHORIZED_401 = 401,
  GENERAL_CONFLICT_409 = 409,
  INTERNAL_ERROR_500 = 500
}
