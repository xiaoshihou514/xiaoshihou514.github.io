# 你好，世界！

- 👋 我是xiaoshihou514。

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
  margin-bottom: 1rem; /* 增加标题与图片之间的空隙 */
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
    margin-bottom: 0.75rem; /* 移动端适当调整空隙 */
  }
}
</style>

<div class="hero-images">
  <a href="/zh/projects" class="hero-link">
    <div class="hero-title">项目</div>
    <img src="/projects.png" alt="项目" class="hero-image" />
  </a>
  <a href="/zh/blogs" class="hero-link">
    <div class="hero-title">博客</div>
    <img src="/blogs.png" alt="博客" class="hero-image" />
  </a>
</div>
