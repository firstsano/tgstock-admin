import SignIn from '../../pages/auth/SignIn'
import { signInPath } from '../paths'

export default {
  name: 'SignIn',
  exact: true,
  strict: false,
  path: signInPath(),
  component: SignIn,
}
