
  const primaryNav = document.querySelector('ul') as HTMLElement;
  const navToggle = document.getElementById('menu-toggle') as HTMLElement;

  navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');

    if (visibility === 'false') {
      primaryNav.setAttribute('data-visible', true);
      navToggle.setAttribute('aria-expanded', true);
    } else {
      primaryNav.setAttribute('data-visible', false);
      navToggle.setAttribute('aria-expanded', false);
    }

    // Toggle class "opened". Set also aria-expanded to true or false.
    if (-1 !== navToggle.className.indexOf('opened')) {
      navToggle.className = navToggle.className.replace(' opened', '');
      navToggle.setAttribute('aria-expanded', 'false');
    } else {
      navToggle.className += ' opened';
      navToggle.setAttribute('aria-expanded', 'true');
    }
  });

  const setGlowEffectRx = () => {
    const glowEffects = document.querySelectorAll('.glow');

    glowEffects.forEach(glowEffect => {
      const glowLines = glowEffect.querySelectorAll('rect');
      const rx = getComputedStyle(glowEffect, '::after').borderRadius;

      //NOTE setup for any added JS micro interactions.
      // glowEffect.addEventListener('click', () => {

      // });

      glowLines.forEach(line => {
        line.setAttribute('rx', rx);
      });
    });
  };

  setGlowEffectRx();