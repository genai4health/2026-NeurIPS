(() => {
  const button = document.querySelector('#committee-toggle');
  const list = document.querySelector('#committee-members');
  if (!button || !list) return;
  const members = [...list.children];
  const update = expanded => {
    members.forEach((member, index) => { member.hidden = !expanded && index >= 12; });
    button.setAttribute('aria-expanded', String(expanded));
    button.textContent = expanded ? 'Show fewer members' : `View all ${members.length} members`;
  };
  update(false);
  button.hidden = false;
  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') !== 'true';
    update(expanded);
    if (!expanded) {
      const section = document.querySelector('#program-committee');
      const header = document.querySelector('#header');
      window.scrollTo({top: section.getBoundingClientRect().top + window.scrollY - (header?.offsetHeight || 0) - 16, behavior: 'instant'});
    }
  });
})();
