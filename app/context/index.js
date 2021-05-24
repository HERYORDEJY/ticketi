import { serviceItemStore } from './selectItems';
import { orderStore } from './orders';
import { notificationItemStore } from './notifications';
import { profileStore } from './profile';

const contextStores = [
  serviceItemStore,
  notificationItemStore,
  profileStore,
  orderStore,
];

export default contextStores;
