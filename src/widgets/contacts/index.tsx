import type { IlinksPageData } from '@/shared/data';

import { ContactsWidgetUi } from './ui';

interface IContactsWidget extends IlinksPageData {}

export function ContactsWidget({ ...data }: IContactsWidget) {
  return <ContactsWidgetUi {...data} />;
}
