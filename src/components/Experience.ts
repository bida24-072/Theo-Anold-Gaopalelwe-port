import { el } from '../utils/dom';
import type { PortfolioData } from '../types';

export function Experience(data: PortfolioData): HTMLElement {
  const { experience } = data;

  const items = experience.items.map((item) =>
    el('div', { class: 'timeline-item' }, [
      el('div', { class: 'timeline-date' }, [document.createTextNode(item.date)]),
      el('h3', {}, [document.createTextNode(item.role)]),
      el('div', { class: 'timeline-org' }, [document.createTextNode(item.org)]),
      el('p', {}, [document.createTextNode(item.description)]),
      el(
        'div',
        { class: 'timeline-tags' },
        item.tags.map((t) => el('span', {}, [document.createTextNode(t)]))
      ),
    ])
  );

  return el('section', { id: 'experience', class: 'experience-section reveal' }, [
    el('div', { class: 'section-heading' }, [document.createTextNode('Journey so far')]),
    el('h2', { class: 'section-title' }, [document.createTextNode('Experience & involvement')]),
    el('p', { class: 'section-subtitle' }, [document.createTextNode(experience.subtitle)]),
    el('div', { class: 'timeline' }, items),
  ]);
}
