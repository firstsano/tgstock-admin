import { Create } from '../../pages/channels'
import { createChannelPath } from '../paths'

export default {
  name: 'CreateChannel',
  exact: true,
  strict: false,
  path: createChannelPath(),
  component: Create,
}
