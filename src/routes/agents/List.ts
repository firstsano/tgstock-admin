import { List } from '../../pages/agents'
import { agentsPath } from '../paths'

export default {
  name: 'AgentsList',
  exact: true,
  strict: false,
  path: agentsPath(),
  component: List,
}
