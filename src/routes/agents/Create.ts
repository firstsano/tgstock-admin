import { Create } from '../../pages/agents'
import { createAgentPath } from '../paths'

export default {
  name: 'CreateAgent',
  exact: true,
  strict: false,
  path: createAgentPath(),
  component: Create,
}
