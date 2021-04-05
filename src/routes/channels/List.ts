import { ChannelList} from "../../pages/channels/List";
import { channelsPath } from '../paths'

export default {
  name: 'ChannelsList',
  exact: true,
  strict: false,
  path: channelsPath(),
  component: ChannelList,
}
