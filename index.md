# About me

- 👋 Hi, I am xiaoshihou514.
- 💻 I am proficient in programming both functionally and imperatively, currently focusing on [Scala](https://scala-lang.org).
- 💪 I can tackle analytical and computational further maths problems.
- 📚 I am interested in programming languages, in particular type theory, program verification / specification and parallel computing.
- 📖 On the mathematics side, I am interested in analytical discrete maths, such as groups / rings / category theory.
- 📝 My favourite text editor is [Neovim](https://neovim.io).
- 👀 During my free time, I build interesting software for fun. I am trying out different fields of software engineering.
- ✍️ I occasionally write down what I've learned [here](/blogs/index).
- 🏃 I enjoy single person sports like jogging and swimming.
- 📫 How to reach me:
  - [Send me an Email](mailto:xiaoshihou@tutamail.com)

# Projects

<script setup lang="ts">
  import ProjectCard from './components/ProjectCard.vue'
  import { onMounted } from 'vue'
  const langs = new Set(['zh', 'ja'])
  onMounted(() => {
    if (!window || sessionStorage.getItem('xsh_blog_lang')) { return }
    sessionStorage.setItem('xsh_blog_lang', true)
    const userLang = navigator.language || 'en'
    langs.forEach(l => { if (userLang.startsWith(l)) {
      window.location.replace(`/${l}${window.location.pathname}`)
    }})
  })
</script>

<ProjectCard title="ndpc" desc="Natural deduction proof compiler" lang="Scala" lang_color="#C12C40" href="/ndpc" />

<ProjectCard title="jiyi" desc="Cross-platform encrypted voice note app" lang="Dart" lang_color="#00B3AA" href="https://github.com/xiaoshihou514/jiyi" />

<ProjectCard title="aristotle" desc="Easy to use gui frontend for ndpc" lang="C++" lang_color="#F34B7C" href="https://github.com/xiaoshihou514/aristotle" />

<ProjectCard title="git-biance" desc="Shows and visualizes contributions in a git repo" lang="Rust" lang_color="#DDA583" href="https://github.com/xiaoshihou514/git-biance" />

<ProjectCard title="sefenbu" desc="Visualizes OKHSV color distribution for an image" lang="Rust" lang_color="#DDA583" href="https://github.com/xiaoshihou514/sefenbu" />

<ProjectCard title="guard.nvim (Lead maintainer)" desc="Lightweight, fast and async formatting and linting plugin for Neovim" lang="Lua" lang_color="#00007F" href="https://github.com/nvimdev/guard.nvim" />

<ProjectCard title="wrench" desc="Minimal alternative to GNU make for your C project" lang="Python" lang_color="#3571A5" href="https://github.com/xiaoshihou514/wrench" />

<ProjectCard title="notes" desc="Extremely minimalist note taking app with flutter" lang="Dart" lang_color="#00B3AA" href="https://github.com/xiaoshihou514/notes" />
