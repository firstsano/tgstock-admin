import { List } from '../../pages/channels'
import { channelsPath } from '../paths'

export default {
  name: 'ChannelsList',
  exact: true,
  strict: false,
  path: channelsPath(),
  component: List,
}
