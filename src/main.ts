import './style.css';
import { portfolio } from './data/portfolio';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { observeReveal } from './utils/dom';

function render(): void {
  const root = document.querySelector<HTMLDivElement>('#app');
  if (!root) throw new Error('#app container not found');

  const container = document.createElement('div');
  container.className = 'container';

  // Main page body (everything except contact/footer which is full-width)
  container.append(
    Navbar(portfolio.navLinks),
    Hero(portfolio),
    About(portfolio),
    Skills(portfolio),
    Experience(portfolio),
    Projects(portfolio),
    Certifications(portfolio),
    Education(portfolio)
  );

  // Contact section is full-width dark background
  const contactSection = Contact(portfolio);
  contactSection.querySelector('.container')?.append(Footer(portfolio));

  root.append(container, contactSection);

  // Reveal-on-scroll
  observeReveal(document.querySelectorAll('.reveal'));

  // Subtle navbar border on scroll
  const nav = document.querySelector<HTMLElement>('.navbar');
  window.addEventListener('scroll', () => {
    if (!nav) return;
    nav.style.borderBottomColor =
      window.scrollY > 20 ? 'rgba(203, 213, 225, 0.6)' : 'transparent';
  });
}

document.addEventListener('DOMContentLoaded', render);
