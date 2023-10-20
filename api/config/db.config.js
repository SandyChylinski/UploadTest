module.exports = {
    HOST: "db",  // Hostname of the database server (in this case, "db")
    USER: "postgres", // Database username
    PASSWORD: "postgres", // Password for the database user
    DB: "postgres", // Name of the database
    dialect: "postgres",  // The SQL dialect or type of database ("postgres" for PostgreSQL)
    pool: {
      max: 5, // Maximum number of database connections in the pool
      min: 0,  // Minimum number of database connections in the pool
      acquire: 30000, // Maximum time (in milliseconds) to acquire a connection from the pool
      idle: 10000  // Maximum time (in milliseconds) a connection can be idle before being released
    }
};


