import { SignIn } from '../../pages/auth'
import { signInPath } from '../paths'

export default {
  name: 'SignIn',
  exact: true,
  strict: false,
  path: signInPath(),
  component: SignIn,
}
