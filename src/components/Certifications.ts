import { el, icon } from '../utils/dom';
import type { PortfolioData } from '../types';

export function Certifications(data: PortfolioData): HTMLElement {
  const { certifications } = data;

  const cards = certifications.items.map((c) => {
    const statusClass = c.status === 'Completed' ? 'cert-status done' : 'cert-status progress';

    return el('div', { class: 'cert-card' }, [
      el('div', { class: `cert-badge ${c.colorClass}` }, [icon(c.icon)]),
      el('div', { class: 'cert-info' }, [
        el('h4', {}, [document.createTextNode(c.title)]),
        el('p', {}, [document.createTextNode(c.issuer)]),
        el('span', { class: statusClass }, [document.createTextNode(c.status)]),
      ]),
    ]);
  });

  return el('section', { class: 'certs-section reveal' }, [
    el('div', { class: 'section-heading' }, [document.createTextNode('Continuous learning')]),
    el('h2', { class: 'section-title' }, [document.createTextNode('Certifications & courses')]),
    el('p', { class: 'section-subtitle' }, [document.createTextNode(certifications.subtitle)]),
    el('div', { class: 'certs-grid' }, cards),
  ]);
}
