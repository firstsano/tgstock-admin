import { Show } from '../../pages/channels'
import { channelPath } from '../paths'

export default {
  name: 'ShowChannel',
  exact: true,
  strict: false,
  path: channelPath(),
  component: Show,
}
