'use client'

import Logo from './Logo'

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
]

export default function Footer() {
  return (
    <footer className="border-t border-ct-rose-dark/15 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 mb-14">
          {/* Brand */}
          <div className="md:col-span-1">
            <Logo size={38} withText className="mb-5" />
            <p className="font-sans text-xs text-ct-rose-light/45 leading-relaxed max-w-xs">
              Transformando processos em vantagens competitivas com tecnologia
              acessível e atendimento próximo.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="font-sans text-xs tracking-[0.18em] text-ct-rose-mid uppercase mb-5">
              Navegação
            </p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-sans text-sm text-ct-rose-light/55 hover:text-ct-off-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-sans text-xs tracking-[0.18em] text-ct-rose-mid uppercase mb-5">
              Contato
            </p>
            <div className="space-y-3">
              <a
                href="mailto:contato@celinetech.com.br"
                className="block font-sans text-sm text-ct-rose-light/55 hover:text-ct-off-white transition-colors duration-200"
              >
                contato@celinetech.com.br
              </a>
              <a
                href="https://instagram.com/celinetech"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-sans text-sm text-ct-rose-light/55 hover:text-ct-off-white transition-colors duration-200"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                @celinetech
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-ct-rose-dark/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-xs text-ct-rose-light/25">
            © {new Date().getFullYear()} Celine Tech. Todos os direitos reservados.
          </p>
          <p className="font-sans text-xs text-ct-rose-light/25">
            Feito com tecnologia e propósito.
          </p>
        </div>
      </div>
    </footer>
  )
}
