import { el, icon, richText } from '../utils/dom';
import type { PortfolioData } from '../types';

export function Contact(data: PortfolioData): HTMLElement {
  const { contact } = data;

  // Heading with second line highlighted
  const heading = el('h2', {}, [
    document.createTextNode(contact.headingLine1),
    el('br'),
    el('span', {}, [document.createTextNode(contact.headingLine2)]),
  ]);

  const intro = el('p', {}, [document.createTextNode(contact.intro)]);

  const methods = el(
    'div',
    { class: 'contact-methods' },
    contact.methods.map((m) =>
      el('a', { href: m.href, class: 'contact-method', target: m.href.startsWith('http') ? '_blank' : '', rel: 'noopener' }, [
        icon(m.icon),
        el('div', {}, [
          el('div', { class: 'label' }, [document.createTextNode(m.label)]),
          el('div', { class: 'value' }, [document.createTextNode(m.value)]),
        ]),
      ])
    )
  );

  const socials = el(
    'div',
    { class: 'contact-social' },
    contact.socials.map((s) =>
      el('a', { href: s.href, target: '_blank', rel: 'noopener', 'aria-label': s.label }, [icon(s.icon)])
    )
  );

  const availability = el('div', { class: 'availability-card' }, [
    el('h4', {}, [icon('fas fa-circle-check'), document.createTextNode(' ' + contact.availabilityTitle)]),
    (() => {
      const p = el('p');
      p.append(richText(contact.availabilityText));
      return p;
    })(),
  ]);

  const quoteCards = contact.quotes.map((q) =>
    el('div', { class: 'quote-card' }, [
      icon(q.icon + ' quote-icon'),
      el('p', {}, [document.createTextNode(`"${q.text}"`)]),
      el('p', { class: 'attribution' }, [document.createTextNode('— ' + q.author)]),
    ])
  );

  const left = el('div', { class: 'contact-left' }, [heading, intro, methods, socials]);
  const right = el('div', { class: 'contact-right' }, [availability, ...quoteCards]);

  return el('section', { id: 'contact', class: 'contact-section reveal' }, [
    el('div', { class: 'container' }, [
      el('div', { class: 'contact-grid' }, [left, right]),
    ]),
  ]);
}
