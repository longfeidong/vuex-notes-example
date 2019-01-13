<template>
  <div class="ui container notes">
    <h4 class="ui horizontal divider header">
      <i class="paw icon"></i>
      Notes App _ Vue.js
    </h4>
    <a class="ui right floated basic violet button">
      添加笔记
    </a>
    <div class="ui divided items">
      <note
        v-for="(entity, index) of entities"
        :key="index"
        :entity="entity"
      ></note>
      <span class="ui small disabled header" v-if="!entities.length">还没有笔记呢？请点击"添加笔记"按钮~</span>
    </div>
  </div>
</template>

<script>
import Note from './Note'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Notes',
  components: {
    Note
  },
  created () {
    this.initial()
  },
  methods: {
    ...mapActions([
      'initial'
    ])
  },
  computed: {
    // 将vuex getters中的entities属性，映射到computed中
    ...mapGetters([
      'entities'
    ])
  }
}
</script>

<style>

</style>
