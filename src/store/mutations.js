import { loadCollection } from '../database'

export default {
  setInitialData (state) {
    // 加载 notes集合中的内容
    loadCollection('notes')
      .then((collection) => {
        // console.log(collection)
        /*
          chain方法，用于在集合上开始一系列链式操作
          find方法，获取集合中的所有内容
          simplesort方法，排序方式，以$loki,降序(isdesc)排列
        */
        // collection.insert([
        //   {body: '腊月初七'},
        //   {body: '腊月初八'}
        // ])
        // db.saveDatabase()
        const _entities = collection.chain()
          .find()
          .simplesort('$loki', 'isdesc')
          .data()
        state.entities = _entities
        console.log(state.entities)
      })
  }
}
