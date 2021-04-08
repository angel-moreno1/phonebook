const generateId = () => Number((Math.random() * 1000).toString().split('.').join(''))

export default generateId
