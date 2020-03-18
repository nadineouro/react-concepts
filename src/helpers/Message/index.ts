/**
 * @class
 * Class for showing message to user
 *
 */
import { MessageType, MessageAlertMode } from './types'

export default class Message {
  /**
   * @constructs
   * @param {enum} alertMode
   * @param {string} source
   * @param {string} text
   * @param {string} title
   * @param {enum} type
   * @param {string} additionalInfo
   */
  alertMode: MessageAlertMode
  text: any
  source: string
  title: string
  type: MessageType
  additionalInfo?: string

  constructor(
    type: MessageType,
    title: string,
    text: string,
    alertMode: MessageAlertMode,
    source: string,
    additionalInfo?: string
  ) {
    this.alertMode = alertMode
    this.source = source
    this.text = text
    this.title = title
    this.type = type
    this.additionalInfo = additionalInfo
  }
}
