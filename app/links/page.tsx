import type { Metadata } from 'next'
import LinksContent from '@/components/LinksContent'

export const metadata: Metadata = {
  title: 'Links | Celine Tech',
  description: 'Acesse os canais oficiais da Celine Tech.',
}

export default function LinksPage() {
  return <LinksContent />
}
