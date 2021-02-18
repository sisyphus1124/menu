const db = wx.cloud.database();
//添加数据
function add(_collection, _data = {}) {
  return db.collection(_collection).add({
    data: _data
  })
}
//获取数据库全部
function get(_collection, _data = {}) {
  return db.collection(_collection).where(_data).get()
}
//获取一条数据
function getOne(_collection, _data) {
  return db.collection(_collection).doc(_data).get()
}
//删除一条数据
function delOne(_collection, _data) {
  return db.collection(_collection).doc(_data).remove()
}
//更改一条数据
function updateOne(_collection, _data, _update = {}) {
  return db.collection(_collection).doc(_data).update(_update)
}

export {add,get,getOne,delOne,updateOne}