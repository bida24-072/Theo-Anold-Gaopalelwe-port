import { el, icon } from '../utils/dom';
import type { NavLink } from '../types';

export function Navbar(links: NavLink[]): HTMLElement {
  const logo = el('a', { href: '#', class: 'logo' }, [
    el('span', { class: 'logo-mark' }, [icon('fas fa-chart-pie')]),
    document.createTextNode(' Theo G.'),
  ]);

  const navItems = links.map((link) =>
    el('a', {
      href: link.href,
      class: link.isCta ? 'nav-cta' : '',
    }, [document.createTextNode(link.label)])
  );

  const nav = el('nav', { class: 'navbar', 'aria-label': 'Primary navigation' }, [
    logo,
    el('div', { class: 'nav-links' }, navItems),
  ]);

  return nav;
}
