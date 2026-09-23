import { el, icon, richText } from '../utils/dom';
import type { PortfolioData } from '../types';

export function About(data: PortfolioData): HTMLElement {
  const { about } = data;

  const paragraphs = about.paragraphs.map((p) => {
    const node = el('p');
    node.append(richText(p));
    return node;
  });

  const highlights = about.highlights.map((h) =>
    el('div', { class: 'highlight-item' }, [
      icon(h.icon),
      el('div', {}, [
        el('h4', {}, [document.createTextNode(h.title)]),
        el('p', {}, [document.createTextNode(h.description)]),
      ]),
    ])
  );

  const grid = el('div', { class: 'about-grid' }, [
    el('div', { class: 'about-text' }, paragraphs),
    el('div', { class: 'about-highlights' }, highlights),
  ]);

  return el('section', { id: 'about', class: 'about-section reveal' }, [
    el('div', { class: 'section-heading' }, [document.createTextNode('About me')]),
    el('h2', { class: 'section-title' }, [document.createTextNode('Data with a purpose')]),
    grid,
  ]);
}
