import { contactsPageData } from '@/shared/data';

import { ContactsWidget } from '@/widgets/contacts';

export const metadata = {
  ...contactsPageData.metadata,
};

export default function Contacts() {
  return <ContactsWidget {...contactsPageData} />;
}
