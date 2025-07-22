import { contactMetadata } from '@/lib/metadata';
import ContactForm from './ContactForm';

export const metadata = contactMetadata;

export default function ContactPage() {
  return <ContactForm />;
} 