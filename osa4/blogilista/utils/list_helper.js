
// eslint-disable-next-line no-unused-vars
const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  if (blogs.length === 0) {
    return 0
  }

  return blogs.reduce((total, blog) => {
    return total + blog.likes
  }, 0)
}

const favoriteBlog = (blogs) => {
  if (blogs.length === 0) {
    return 'there are no blogs'
  }

  let mostLiked = -1
  let favorite = null

  for (let i = 0; i < blogs.length; i++) {
    if (blogs[i].likes > mostLiked) {
      mostLiked = blogs[i].likes
      favorite = blogs[i]
    }
  }

  return favorite
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
}