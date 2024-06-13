import { contactsPageData } from '@/shared/data';

import { ContactsWidget } from '@/widgets/contacts';

export default async function Contacts() {
  return <ContactsWidget {...contactsPageData} />;
}
