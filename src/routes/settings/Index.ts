import { Settings } from '../../pages/settings/Settings/Settings'
import { settingsPath } from '../paths'

export default {
  name: 'Settings',
  exact: true,
  strict: false,
  path: settingsPath(),
  component: Settings,
}
