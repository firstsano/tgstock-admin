import { List } from '../../pages/categories'
import { categoriesPath } from '../paths'

export default {
  name: 'CategoriesList',
  exact: true,
  strict: false,
  path: categoriesPath(),
  component: List,
}
