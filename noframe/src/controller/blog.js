const getList = (author, keyword) => {
  // 假数据
  return [
    {
      id: 1,
      title: '标题A',
      content: '内容A',
      createTime: 1572180853821,
      author: 'kuma'
    },
    {
      id: 2,
      title: '标题B',
      content: '内容B',
      createTime: 1572180916170,
      author: 'loves'
    }
  ]
}

const getDetail = (id) => {
  return {
    id: 1,
    title: '标题A',
    content: '内容A',
    createTime: 1572180853821,
    author: 'kuma'
  }
}

const newBlog = (blogData = {}) => {
  return {
    id: 3
  }
}

const updateBlog = (id, blogData = {}) => {
  return true
}

const deleBlog = id => {
  return true
}

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  deleBlog
}
