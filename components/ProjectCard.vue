<template>
  <div class="projcard-container">
    <div class="projcard">
      <a :href="href" style="font-size: 1.4em;">{{ title }}</a>
      <p>{{ desc }}</p>
      <div class="lang-container">
        <div class="langcircle" :style="{ backgroundColor: lang_color }"></div>
        <span>{{ lang }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    desc: String,
    lang: String,
    lang_color: String,
    href: String,
  }
};
</script>

<style scoped>
.projcard-container {
  padding: 0.75rem 0;
}

.projcard {
  border-radius: 10px; /* Rounded border for projcard */
  border: 1px solid #ddd;
  padding: 0.75rem;
  margin-bottom: 1rem;
}

.lang-container {
  display: flex; /* Put circle and lang on the same line */
  align-items: center;
}

.langcircle {
  width: 0.8em;
  height: 0.8em;
  border-radius: 50%;
  margin-right: 0.5em; /* Add space between circle and text */
}
</style>
