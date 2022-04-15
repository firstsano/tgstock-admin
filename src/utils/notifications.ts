import { notification } from 'antd'

export const DEFAULT_NOTIFICATION_DURATION = 3

export const notify_success = (msg: string): void => {
  notification.success({
    message: msg,
    duration: DEFAULT_NOTIFICATION_DURATION,
  })
}

export const notify_error = (msg: string): void => {
  notification.error({
    message: msg,
    duration: DEFAULT_NOTIFICATION_DURATION,
  })
}
