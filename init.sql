-- DDL generated by Postico 1.5.20
-- Not all database features are supported. Do not use for backup.

-- Table Definition ----------------------------------------------
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    firstname character varying(255) NOT NULL,
    lastname text
);
