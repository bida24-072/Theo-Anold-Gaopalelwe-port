import { el, icon } from '../utils/dom';
import type { PortfolioData } from '../types';

export function Projects(data: PortfolioData): HTMLElement {
  const { projects } = data;

  const cards = projects.items.map((p) => {
    const outcomes = el(
      'ul',
      { class: 'project-outcomes' },
      p.outcomes.map((o) =>
        el('li', {}, [icon('fas fa-check'), document.createTextNode(o)])
      )
    );

    return el('article', { class: 'project-card' }, [
      el('span', { class: 'project-tag' }, [document.createTextNode(p.tag)]),
      el('h3', {}, [document.createTextNode(p.title)]),
      el('p', {}, [document.createTextNode(p.description)]),
      outcomes,
      el('div', { class: 'project-meta' }, [
        el('span', {}, [icon(p.metaIcon), document.createTextNode(' ' + p.meta)]),
        el('a', { href: p.linkHref, class: 'project-link' }, [
          document.createTextNode(p.linkLabel + ' '),
          icon('fas fa-arrow-right'),
        ]),
      ]),
    ]);
  });

  return el('section', { id: 'projects', class: 'projects-section reveal' }, [
    el('div', { class: 'section-heading' }, [document.createTextNode('Applied projects')]),
    el('h2', { class: 'section-title' }, [document.createTextNode('Learning by doing')]),
    el('p', { class: 'section-subtitle' }, [document.createTextNode(projects.subtitle)]),
    el('div', { class: 'projects-grid' }, cards),
  ]);
}
