<script setup lang="ts">
  import { onMounted } from 'vue'
  const langMap = { zh: '/zh', ja: '/ja', en: '/en' }
  onMounted(() => {
    const userLang = navigator.language || 'en'
    let target = '/en'
    for (const [lang, prefix] of Object.entries(langMap)) {
      if (userLang.startsWith(lang)) { target = prefix; break }
    }
    window.location.replace(`${target}${window.location.pathname}`)
  })
</script>
