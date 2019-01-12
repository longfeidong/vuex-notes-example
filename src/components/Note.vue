<template>
  <div class="item">
    <div class="meta">{{ 'updated' }}</div>
    <div class="content">
      <div class="header">{{ entity.body || '新建笔记' }}</div>
      <div class="extra">
        <editor></editor>
        {{ 'words' }} 字
        <i class="right floated trash icon"></i>
      </div>
    </div>
  </div>
</template>

<script>
import Editor from './Editor'

export default {
  props: [
    'entity'
  ],
  name: 'Note',
  components: {
    Editor
  }
}
</script>

<style>

</style>
