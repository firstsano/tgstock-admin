import { CreateChannel } from '../../pages/channels/Create'
import { createChannelPath } from '../paths'

export default {
  name: 'CreateChannel',
  exact: true,
  strict: false,
  path: createChannelPath(),
  component: CreateChannel,
}
