import { el, icon } from '../utils/dom';
import type { PortfolioData } from '../types';

export function Hero(data: PortfolioData): HTMLElement {
  const { hero, personal } = data;

  // ----- Left content -----
  const badge = el('div', { class: 'badge' }, [
    el('span', { class: 'pulse' }),
    document.createTextNode(hero.badgeText),
  ]);

  const title = el('h1', {}, [
    document.createTextNode(hero.titleLine1),
    el('br'),
    el('span', {}, [document.createTextNode(hero.titleLine2)]),
  ]);

  const subtitle = el('p', { class: 'subtitle' }, [document.createTextNode(hero.subtitle)]);

  const locationRow = el('div', { class: 'location' }, [
    el('span', {}, [icon('fas fa-map-pin'), document.createTextNode(' ' + hero.location)]),
    el('span', {}, [icon('fas fa-briefcase'), document.createTextNode(' ' + hero.remote)]),
    el('span', {}, [icon('fas fa-language'), document.createTextNode(' ' + hero.languages)]),
  ]);

  const cta = el('div', { class: 'hero-cta' }, [
    el('a', { href: '#contact', class: 'btn-primary' }, [
      icon('fas fa-paper-plane'),
      document.createTextNode(' Get in touch'),
    ]),
    el('a', { href: '#projects', class: 'btn-outline' }, [
      icon('fas fa-folder-open'),
      document.createTextNode(' Explore my work'),
    ]),
  ]);

  const left = el('div', { class: 'hero-content' }, [badge, title, subtitle, locationRow, cta]);

  // ----- Right: analytics snapshot card -----
  const stats = hero.snapshotStats.map((stat) => {
    const label = el('span', { class: 'stat-label' }, [icon(stat.icon), document.createTextNode(' ' + stat.label)]);

    let value: HTMLElement;
    if (stat.isBadge) {
      value = el('span', { class: 'stat-value' }, [
        el('span', { class: 'highlight' }, [document.createTextNode(stat.value)]),
      ]);
    } else {
      const bar = el('span', { class: 'progress-bar' }, [
        el('span', {
          class: 'progress-fill',
          style: `width:${stat.level ?? 0}%`,
        }),
      ]);
      value = el('span', { class: 'stat-value', style: 'display:flex;align-items:center;' }, [
        document.createTextNode(stat.value),
        bar,
      ]);
    }

    return el('div', { class: 'stat-row' }, [label, value]);
  });

  const cardHeader = el('div', { class: 'card-header' }, [
    icon('fas fa-database'),
    el('div', {}, [
      el('h3', {}, [document.createTextNode(hero.snapshotTitle)]),
      el('small', {}, [document.createTextNode(hero.snapshotUpdated)]),
    ]),
  ]);

  const dataCard = el('div', { class: 'data-card' }, [cardHeader, ...stats]);

  const right = el('div', { class: 'hero-visual' }, [dataCard]);

  return el('header', { class: 'hero', id: 'top' }, [left, right]);
}
