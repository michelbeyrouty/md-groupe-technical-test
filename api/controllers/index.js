module.exports = {
  expenses : {
    post: require('./expenses/post'),
    get: require('./expenses/get'),
    list: require('./expenses/list'),
    put: require('./expenses/put'),
    delete: require('./expenses/delete'),
  },
};
