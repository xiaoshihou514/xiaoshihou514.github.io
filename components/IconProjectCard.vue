<template>
  <a :href="href" class="feature-card-link">
    <div class="feature-card">
      <div class="feature-icon">
        <img :src="icon" :alt="title" />
      </div>
      <div class="feature-content">
        <h3 class="feature-title">{{ title }}</h3>
        <p class="feature-desc">{{ desc }}</p>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    icon: String,
    title: String,
    desc: String,
    href: String,
  }
};
</script>

<style scoped>
.feature-card-link {
  text-decoration: none !important;
  color: inherit;
  display: block;
}

.feature-card-link:hover,
.feature-card-link:active,
.feature-card-link:visited {
  text-decoration: none !important;
  color: inherit;
}

.feature-card {
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  padding: 1.5rem;
  border-radius: 16px;
  border: 1px solid rgba(168, 174, 180, 0.5);
  margin-bottom: 2rem;
  transition: all 0.3s ease;
  cursor: pointer;
}

.feature-card:hover {
  transform: scale(1.2);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.feature-icon {
  flex-shrink: 0;
  width: 6rem;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.feature-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 12px;
}

.feature-content {
  flex: 1;
  min-width: 0;
}

.feature-title {
  margin: 0 0 0.75rem 0;
  font-size: 1.6em;
  font-weight: 600;
  line-height: 1.3;
}

.feature-desc {
  margin: 0;
  line-height: 1.6;
  font-size: 1.1em;
  color: var(--vp-c-text-2);
}

/* Responsive design: stack vertically on small screens */
@media (max-width: 768px) {
  .feature-card {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .feature-icon {
    margin-bottom: 0.5rem;
  }
}
</style>
