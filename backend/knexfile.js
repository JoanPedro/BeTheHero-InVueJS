// Update with your config settings.

module.exports = {
    client: 'sqlite3',
    connection: {
      filename: './db.sqlite'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './migrations'
    },
    useNullAsDefault: true
};
