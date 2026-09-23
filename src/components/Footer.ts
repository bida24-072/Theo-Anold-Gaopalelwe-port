import { el, icon } from '../utils/dom';
import type { PortfolioData } from '../types';

export function Footer(data: PortfolioData): HTMLElement {
  const { footer } = data;

  const left = el('div', {}, [icon('fas fa-copyright'), document.createTextNode(' ' + footer.copyright)]);

  const right = el('div', { class: 'made-with' }, [
    icon('fas fa-map-pin'),
    document.createTextNode(' ' + footer.location),
  ]);

  return el('div', { class: 'footer-bottom' }, [left, right]);
}
