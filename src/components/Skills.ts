import { el, icon } from '../utils/dom';
import type { PortfolioData } from '../types';

const levelClass = (level: string): string => {
  if (level === 'Advanced') return 'skill-level adv';
  if (level === 'Intermediate') return 'skill-level int';
  return 'skill-level beg';
};

export function Skills(data: PortfolioData): HTMLElement {
  const { skills } = data;

  const categories = skills.categories.map((cat) => {
    const list = el(
      'ul',
      { class: 'skill-list' },
      cat.skills.map((s) =>
        el('li', {}, [
          el('span', { class: 'skill-name' }, [
            icon('fas fa-circle'),
            document.createTextNode(' ' + s.name),
          ]),
          el('span', { class: levelClass(s.level) }, [document.createTextNode(s.level)]),
        ])
      )
    );

    return el('div', { class: 'skill-category' }, [
      el('div', { class: 'skill-icon' }, [icon(cat.icon)]),
      el('h4', {}, [document.createTextNode(cat.title)]),
      list,
    ]);
  });

  return el('section', { id: 'skills', class: 'skills-section reveal' }, [
    el('div', { class: 'section-heading' }, [document.createTextNode('Core capabilities')]),
    el('h2', { class: 'section-title' }, [document.createTextNode('The analytics toolkit')]),
    el('p', { class: 'section-subtitle' }, [document.createTextNode(skills.subtitle)]),
    el('div', { class: 'skills-grid' }, categories),
  ]);
}
