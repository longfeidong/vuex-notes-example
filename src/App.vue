<template>
  <div id="app">
    <notes></notes>
  </div>
</template>

<script>
import 'semantic-ui-css/semantic.min.css'
import Notes from './components/Notes'

export default {
  name: 'App',
  components: {
    Notes
  }
}
</script>

<style>
.notes {
  margin-top: 32px
}

.notes .ui textarea {
  border: none;
  font-size: 16px;
  margin: 32px 0;
  padding: 0;
}

.ui.items > .item > .content > .header {
  display: block;
  cursor: pointer;
}

.ui.items > .item .meta {
  width: 88px;
  color: rgba(0, 0, 0, 0.4);
  margin: 0;
  padding-bottom: 16px;
}

.trash.icon {
  cursor: pointer;
}
</style>
