type DatabaseConfig = {
    username: string;
    password: string;
    database: string;
    host: string;
    port: number;
    dialect: string;
};

export const production: DatabaseConfig = {
    username: "root",
    password: "#NOh4cking",
    database: "causedb",
    host: "localhost",
    port: 3306,
    dialect: "mysql",
};

export const development_andon: DatabaseConfig = {
    username: "hendra",
    password: "hendra-118208",
    database: "andon_system",
    host: "10.202.10.111",
    port: 5432,
    dialect: "pgsql",
};

export const development_andonnew: DatabaseConfig = {
    username: "hendra",
    password: "hendra-118208",
    database: "mms_nin",
    host: "10.202.10.111",
    port: 5432,
    dialect: "pgsql",
};