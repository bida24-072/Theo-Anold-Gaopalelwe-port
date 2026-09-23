import { el, icon } from '../utils/dom';
import type { PortfolioData } from '../types';

export function Education(data: PortfolioData): HTMLElement {
  const { education } = data;

  const cards = education.entries.map((e) => {
    const highlights = el(
      'div',
      { class: 'edu-highlight' },
      e.highlights.map((h) =>
        el('span', {}, [icon('fas fa-star'), document.createTextNode(' ' + h)])
      )
    );

    return el('div', { class: 'edu-card' }, [
      el('div', { class: 'edu-icon', style: `background:${e.iconBg};` }, [icon(e.icon)]),
      el('div', { class: 'edu-details' }, [
        el('div', { class: 'year' }, [document.createTextNode(e.year)]),
        el('h3', {}, [document.createTextNode(e.degree)]),
        el('div', { class: 'institution' }, [document.createTextNode(e.institution)]),
        el('p', {}, [document.createTextNode(e.description)]),
        highlights,
      ]),
    ]);
  });

  return el('section', { id: 'education', class: 'education-section reveal' }, [
    el('div', { class: 'section-heading' }, [document.createTextNode('Academic path')]),
    el('h2', { class: 'section-title' }, [document.createTextNode('Education')]),
    ...cards,
  ]);
}
