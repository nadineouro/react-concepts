import Codes from '../Codes'

export type Exception = {
  code: Codes.Internals | Codes.HTTP | Codes.UserInteraction
  source: string
  additionalInfo?: any
}

export enum ExceptionMessageText {
  INVALID_ENVIRONMENT_VARIABLE = 'unexpected_error',
  UNEXPECTED_ERROR = 'unexpected_error',
  UNAUTHORIZED_401 = 'auth:sign_in_again'
}

export enum ExceptionMessageTitle {
  INVALID_ENVIRONMENT_VARIABLE = 'unexpected_error',
  UNAUTHORIZED_401 = 'auth:sign_in_again',
  UNEXPECTED_ERROR = 'unexpected_error'
}
