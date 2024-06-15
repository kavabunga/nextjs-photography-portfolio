import { contactsPageData } from '@/shared/data';

import { ContactsWidget } from '@/widgets/contacts';

export default function Contacts() {
  return <ContactsWidget {...contactsPageData} />;
}
