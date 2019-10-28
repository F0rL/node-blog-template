const { getList, getDetail, newBlog, updateBlog, deleBlog } = require('../controller/blog')
const { SuccessModel, ErrorModel } = require('../model/resModel')

const handleBlogRouter = (req, res) => {
  const { method, path, query } = req
  const id = req.query.id
  // 获取博客列表
  if (method === 'GET' && path === '/api/blog/list') {
    const { author, keyword } = query
    // const listData = getList(author, keyword)
    // return new SuccessModel(listData)
    const result = getList(author, keyword)
    return result.then(listData => {
      return new SuccessModel(listData)
    })
  }

  // 获取博客详情
  if (method === 'GET' && path === '/api/blog/detail') {
    // const data = getDetail(id)
    // return new SuccessModel(data)
    const result = getDetail(id)
    return result.then(data => {
      return new SuccessModel(data)
    })
  }

  // 新建博客
  if (method === 'POST' && path === '/api/blog/new') {
    // const data = newBlog(req.body)
    // return new SuccessModel(data, '新建博客成功')
    req.body.author = 'lf'
    const result = newBlog(req.body)
    return result.then(data => {
      return new SuccessModel(data)
    })
  }

  // 更新博客
  if (method === 'POST' && path === '/api/blog/update') {
    const result = updateBlog(id, req.body)
    return result.then(val => {
      if (val) {
        return new SuccessModel('更新博客成功')
      } else {
        return new ErrorModel('更新博客失败')
      }
    })
  }

  // 删除博客
  if (method === 'POST' && path === '/api/blog/del') {
    req.body.author = 'lf'
    const result = deleBlog(id, req.body.author)
    return result.then(val => {
      if (val) {
        return new SuccessModel('删除博客成功')
      } else {
        return new SuccessModel('删除博客失败')
      }
    })
  }
}

module.exports = handleBlogRouter