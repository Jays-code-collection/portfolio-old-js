export default [
    {
      input: 'Jay.currentLocation',
      return: '"London, UK"',
    },
    {
      input: 'Jay.contactInfo',
      return:
        '["<a href="mailto:j.sharma0860@gmail.com">j.sharma0860@gmail.com</a>", "<a rel="noopener" href="https://www.linkedin.com/in/jay-sharma-2606a2150/">LinkedIn</a>", "<a rel="noopener" href="https://github.com/Jays-code-collection">github</a>"]',
    },
    {
      input: 'Jay.cv',
      return:
      // '"<a rel="noopener" href="/jaysharma.pdf" download target="_blank">jaysharma.pdf</a>"',
        '"<a rel="noopener" href="https://jays-code-collection.github.io/cv/jaysharma.pdf" target="_blank">jaysharma.pdf</a>"',
    },
    {
      input: 'Jay.education',
      return:
        '"MMath with Honours in Maths with Economics 2:1 - University of Sussex"',
    },
    {
      input: 'Jay.skills',
      return:
        '["Python", "Flask", "JavaScript", "TypeScript", "React", "C++", "Rust", "git"]',
    },
    {
        input: 'Jay.interests',
        return: '["Basketball", "NBA", "Muay Thai" ]',
      }
  ];