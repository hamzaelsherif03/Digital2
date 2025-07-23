import { contactMetadata } from '@/lib/metadata';
import ContactPageClient from './ContactPageClient';

export const metadata = contactMetadata;

export default function ContactPage() {
  return <ContactPageClient />;
} 