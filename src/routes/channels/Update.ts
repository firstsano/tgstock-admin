import { Update } from '../../pages/channels'
import { updateChannelPath } from '../paths'

export default {
  name: 'CreateChannel',
  exact: true,
  strict: false,
  path: updateChannelPath(),
  component: Update,
}
