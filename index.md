# About me

- 👋 Hi, I am xiaoshihou514.

This site is available on [Github pages](https://xiaoshihou514.github.io/), [Gitlab pages](https://xiaoshihou514-github-io-d98412.gitlab.io/), [Codeberg pages](https://xiaoshihou.codeberg.page/), [Sourcehut pages](https://xiaoshihou.srht.site/) and [Frama gitlab pages](https://xiaoshihou514-github-io-b8ab2b.frama.io/).

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

<style scoped>
.hero-images {
  display: flex;
  gap: 2rem;
  margin-top: 3rem;
  justify-content: center;
  flex-wrap: wrap;
}

.hero-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  transition: transform 0.3s ease;
}

.hero-link:hover {
  transform: scale(1.05);
}

.hero-image {
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.hero-title {
  margin-bottom: 1rem;
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
}

@media (max-width: 768px) {
  .hero-image {
    width: 250px;
    height: 250px;
  }

  .hero-title {
    font-size: 1rem;
    margin-bottom: 0.75rem;
  }
}
</style>

<div class="hero-images">
  <a href="/projects" class="hero-link">
    <div class="hero-title">Projects</div>
    <img src="/projects.png" alt="Projects" class="hero-image" />
  </a>
  <a href="/blogs" class="hero-link">
    <div class="hero-title">Blogs</div>
    <img src="/blogs.png" alt="Blogs" class="hero-image" />
  </a>
</div>
