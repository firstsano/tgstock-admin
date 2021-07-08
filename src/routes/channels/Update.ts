import { Update } from '../../pages/channels'
import { updateChannelPath } from '../paths'

export default {
  name: 'UpdateChannel',
  exact: true,
  strict: false,
  path: updateChannelPath(),
  component: Update,
}
