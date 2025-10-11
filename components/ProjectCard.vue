<template>
  <div class="projcard-container">
    <div class="projcard">
      <div class="projcard-header">
        <a :href="href" class="projcard-title">{{ title }}</a>
        <div class="langs-container">
          <div 
            v-for="(language, index) in displayLanguages" 
            :key="index" 
            class="lang-item"
          >
            <div class="langcircle" :style="{ backgroundColor: language.color }"></div>
            <span>{{ language.name }}</span>
          </div>
        </div>
      </div>
      <p class="projcard-desc">{{ desc }}</p>
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
  },
  computed: {
    // 处理逗号分隔的语言和颜色
    displayLanguages() {
      const result = [];
      
      // 如果没有语言信息，返回空数组
      if (!this.lang) return result;
      
      // 分割语言字符串
      const langNames = this.lang.split(',').map(lang => lang.trim());
      
      // 处理颜色
      if (this.lang_color) {
        // 如果有颜色字符串，分割颜色
        const colors = this.lang_color.split(',').map(color => color.trim());
        
        // 将语言和颜色配对
        langNames.forEach((langName, index) => {
          result.push({
            name: langName,
            color: colors[index] || '#cccccc' // 如果颜色不够用默认灰色
          });
        });
      } else {
        // 如果没有提供颜色，所有语言使用默认灰色
        langNames.forEach(langName => {
          result.push({
            name: langName,
            color: '#cccccc'
          });
        });
      }
      
      return result;
    }
  }
};
</script>

<style scoped>
.projcard-container {
  padding: 0.5rem 0; /* 缩小上下间距 */
}

.projcard {
  border-radius: 8px; /* 稍微减小圆角 */
  border: 1px solid #ddd;
  padding: 0.6rem; /* 缩小内边距 */
  margin-bottom: 0.8rem; /* 缩小底部间距 */
  transition: box-shadow 0.2s ease;
}

.projcard:hover {
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.projcard-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.4rem; /* 缩小标题与描述之间的间距 */
}

.projcard-title {
  font-size: 1.2em; /* 稍微缩小标题字体 */
  text-decoration: none;
  font-weight: 600;
  flex: 1; /* 让标题占据剩余空间 */
  margin-right: 0.8rem; /* 标题与语言信息之间的间距 */
}

.projcard-title:hover {
  text-decoration: underline;
}

.projcard-desc {
  line-height: 1.4;
  font-size: 0.9em; /* 稍微缩小描述字体 */
  margin: 0; /* 移除默认边距 */
}

.langs-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem; /* 使用gap属性控制语言标签之间的间距 */
  justify-content: flex-end;
  max-width: 60%; /* 限制语言信息区域的最大宽度 */
}

.lang-item {
  display: flex;
  align-items: center;
  white-space: nowrap; /* 防止语言名称换行 */
}

.langcircle {
  width: 0.7em; /* 缩小圆圈大小 */
  height: 0.7em;
  border-radius: 50%;
  margin-right: 0.3em; /* 缩小圆圈与文字之间的间距 */
}

/* 响应式设计：在小屏幕上调整布局 */
@media (max-width: 768px) {
  .projcard-header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .langs-container {
    justify-content: flex-start;
    max-width: 100%;
    margin-top: 0.3rem;
  }
  
  .projcard-title {
    margin-right: 0;
  }
}
</style>
