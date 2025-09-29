import { Injectable } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Injectable({
  providedIn: 'root'
})
export class GsapAnimationsService {
  constructor() {
    gsap.registerPlugin(ScrollTrigger);
  }

  // Hero section entrance animation
  heroEntranceAnimation(heroElement: HTMLElement) {
    const timeline = gsap.timeline();
    
    // Set initial states
    gsap.set(['.hero-title', '.hero-subtitle', '.hero-buttons'], {
      opacity: 0,
      y: 40
    });

    // Animate elements in sequence
    timeline
      .to('.hero-title', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out'
      })
      .to('.hero-subtitle', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out'
      }, '-=0.5')
      .to('.hero-buttons', {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power3.out'
      }, '-=0.3');

    return timeline;
  }

  // Parallax background effect
  parallaxBackground(element: HTMLElement, speed: number = 0.5) {
    gsap.to(element, {
      yPercent: -50 * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
  }

  // Fade in animation with scroll trigger
  fadeInOnScroll(element: HTMLElement | string, options: any = {}) {
    const defaults = {
      opacity: 0,
      y: 60,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    };

    const config = { ...defaults, ...options };
    
    gsap.from(element, config);
  }

  // Product card hover animation
  productHoverAnimation(cardElement: HTMLElement) {
    const image = cardElement.querySelector('.product-image');
    const content = cardElement.querySelector('.product-content');
    
    const timeline = gsap.timeline({ paused: true });
    
    timeline
      .to(image, {
        scale: 1.05,
        duration: 0.4,
        ease: 'power2.out'
      })
      .to(content, {
        y: -5,
        duration: 0.3,
        ease: 'power2.out'
      }, '-=0.2');

    return timeline;
  }

  // Text reveal animation
  textReveal(element: HTMLElement | string) {
    gsap.from(element, {
      opacity: 0,
      y: 100,
      duration: 1.2,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 75%',
        toggleActions: 'play none none reverse'
      }
    });
  }

  // Counter animation
  counterAnimation(element: HTMLElement, endValue: number) {
    const counter = { value: 0 };
    
    gsap.to(counter, {
      value: endValue,
      duration: 2,
      ease: 'power2.out',
      onUpdate: () => {
        element.textContent = Math.round(counter.value).toString();
      },
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    });
  }

  // Image reveal animation
  imageReveal(element: HTMLElement | string) {
    gsap.set(element, { opacity: 0 });
    
    gsap.to(element, {
      opacity: 1,
      duration: 1.5,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 70%',
        toggleActions: 'play none none reverse'
      }
    });
  }

  // Cleanup ScrollTrigger instances
  cleanup() {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }

  // Refresh ScrollTrigger (useful after DOM changes)
  refresh() {
    ScrollTrigger.refresh();
  }
}