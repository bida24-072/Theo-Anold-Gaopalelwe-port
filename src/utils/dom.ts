/**
 * Tiny DOM builder helpers — replaces innerHTML strings with typed,
 * XSS-safe element construction.
 */

type Attrs = Record<string, string | number | boolean | undefined | null>;

export function el<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  attrs: Attrs = {},
  children: (Node | string)[] = []
): HTMLElementTagNameMap[K] {
  const node = document.createElement(tag);

  for (const [key, value] of Object.entries(attrs)) {
    if (value === undefined || value === null || value === false) continue;
    if (key === 'class') node.className = String(value);
    else if (key === 'dataset') {
      // not used here, but extend if needed
    } else node.setAttribute(key, String(value));
  }

  for (const child of children) {
    node.append(child);
  }

  return node;
}

/** Create an icon element (Font Awesome) */
export function icon(classes: string): HTMLElement {
  return el('i', { class: classes });
}

/**
 * Very small markdown-like renderer supporting **bold** and *italic*.
 * Returns a DocumentFragment so it's safe to append.
 */
export function richText(text: string): DocumentFragment {
  const frag = document.createDocumentFragment();
  const regex = /(\*\*[^*]+\*\*|\*[^*]+\*)/g;
  const parts = text.split(regex).filter((p) => p.length > 0);

  for (const part of parts) {
    if (part.startsWith('**') && part.endsWith('**')) {
      const strong = el('strong');
      strong.textContent = part.slice(2, -2);
      frag.append(strong);
    } else if (part.startsWith('*') && part.endsWith('*')) {
      const em = el('em');
      em.textContent = part.slice(1, -1);
      frag.append(em);
    } else {
      frag.append(document.createTextNode(part));
    }
  }

  return frag;
}

/** Attach children to a parent and return the parent */
export function withChildren<T extends HTMLElement>(parent: T, children: (Node | string)[]): T {
  for (const child of children) parent.append(child);
  return parent;
}

/** Simple scroll-reveal effect using IntersectionObserver */
export function observeReveal(nodes: NodeListOf<Element> | Element[]): void {
  const list = Array.from(nodes);
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.12 }
  );
  list.forEach((n) => observer.observe(n));
}
