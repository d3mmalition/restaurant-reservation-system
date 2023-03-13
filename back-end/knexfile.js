/**
 * Knex configuration file.
 *
 * You will not need to make changes to this file.
 */

require('dotenv').config();
const path = require("path");

const {
  DATABASE_URL = "postgres://ddhxefvj:KXk7LumD8Qh6vhXcTanDDfBUtTlna_sz@salt.db.elephantsql.com/ddhxefvj",
  DATABASE_URL_DEVELOPMENT = "postgres://dekpndza:UTi0FPa_26TyY_8fBzl0RFMiJ4zm5enx@salt.db.elephantsql.com/dekpndza",
  DATABASE_URL_TEST = "postgres://hlesvhwu:JfSuGAq2kl_zEd-VZc5491I1yBjaAMZX@salt.db.elephantsql.com/hlesvhwu",
  DATABASE_URL_PREVIEW = "postgres://luaivyky:6-B2ShliamQiyytIxvygMeakSLKSfwY4@salt.db.elephantsql.com/luaivyky",
  DEBUG,
} = process.env;

module.exports = {
  development: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_DEVELOPMENT,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  test: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_TEST,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  preview: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_PREVIEW,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  production: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
};