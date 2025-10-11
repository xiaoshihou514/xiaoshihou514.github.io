# About me

- 👋 Hi, I am xiaoshihou514.
- 💻 I am learning how to program X and how to program better programs.
- 📖 I am exploring pure maths, and how some of them could be applied.
- 📚 I am interested in robotics, computer vision and programming languages.
- 📝 Usually, I use [Neovim](https://neovim.io) on [Fedora](https://fedoraproject.org/).
- 👀 During my free time, I build interesting software for fun. [Some of the cool stuff I did](/cool).
- ✍️ I occasionally write down what I've learned [here](/blogs/index).
- 🏃 I exercise often, but don't do sports.
- 📫 How to reach me:
  - [Send me an Email](mailto:xiaoshihou@tutamail.com): xiaoshihou@tutamail.com

<script setup lang="ts">
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
