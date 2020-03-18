/**
 * @class
 * Exception class
 */

import Codes from '../Codes'
import { ExceptionMessageText, ExceptionMessageTitle } from './types'
import { MessageType, MessageAlertMode } from '../Message/types'

// Classes
import Message from '../Message/'

export default class Exception {
  /**
   * @constructs
   * @param {Codes.Internals} code
   * @param {string} source
   * @param {string} additionalInfo
   */

  code: Codes.HTTP | Codes.Internals | Codes.UserInteraction
  source: string
  additionalInfo: string

  constructor(
    code: Codes.HTTP | Codes.Internals | Codes.UserInteraction,
    source: string,
    additionalInfo?: any
  ) {
    this.code = code
    this.source = source
    this.additionalInfo = additionalInfo
  }

  /**
   * @function
   * Returns the Message instance of exception
   * @returns {Message}
   */
  getMessage = () => {
    return new Message(
      this.getMessageType(this.code),
      this.getMessageTitle(this.code),
      this.getMessageText(this.code),
      MessageAlertMode.TOAST,
      this.source,
      this.additionalInfo
    )
  }

  /**
   * @function
   * Returns the text of Message
   * @param {Codes.Internals} code Exception code
   * @returns {ExceptionMessageText}
   */
  getMessageText = (
    code: Codes.HTTP | Codes.Internals | Codes.UserInteraction
  ): ExceptionMessageText => {
    switch (code) {
      case Codes.Internals.UNEXPECTED_ERROR:
        return ExceptionMessageText.UNEXPECTED_ERROR
      case Codes.HTTP.UNAUTHORIZED_401:
        return ExceptionMessageText.UNAUTHORIZED_401
      default:
        return ExceptionMessageText.UNEXPECTED_ERROR
    }
  }

  /**
   * @function
   * Returns the title of Message
   * @param {Codes.Internals} code Exception code
   * @returns {ExceptionMessageTitle}
   */
  getMessageTitle = (
    code: Codes.HTTP | Codes.Internals | Codes.UserInteraction
  ): ExceptionMessageTitle => {
    switch (code) {
      case Codes.Internals.UNEXPECTED_ERROR:
        return ExceptionMessageTitle.UNEXPECTED_ERROR
      case Codes.HTTP.UNAUTHORIZED_401:
        return ExceptionMessageTitle.UNAUTHORIZED_401
      default:
        return ExceptionMessageTitle.UNEXPECTED_ERROR
    }
  }

  /**
   * @function
   * Returns the type of Message
   * @param {Codes.Internals} code Exception code
   * @returns {string}
   */
  getMessageType = (code: Codes.HTTP | Codes.Internals | Codes.UserInteraction): MessageType => {
    switch (code) {
      case Codes.Internals.UNEXPECTED_ERROR:
        return MessageType.ERROR
      case Codes.HTTP.UNAUTHORIZED_401:
        return MessageType.ERROR
      default:
        return MessageType.INFO
    }
  }
}
