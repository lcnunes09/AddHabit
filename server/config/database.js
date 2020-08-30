module.exports = {
  host: '127.0.0.1',
  port: 54320,
  username: 'postgres',
  password: 'postgres',
  database: 'addhabit',
  dialect: 'postgres',
  operatorsAliases: false,
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  },
};