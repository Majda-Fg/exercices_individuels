CREATE TABLE edusign (
    id INTEGER PRIMARY KEY,
    firstname TEXT NOT NULL,
    lastname TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    sign_at DATETIME NOT NULL
)
CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    firstname TEXT NOT NULL,
    lastname TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE
)

DROP TABLE edusign

CREATE TABLE edusign (
    user_id INTEGER REFERENCES users(id),
    sign_at DATETIME NOT NULL
)

INSERT INTO users (firstname, lastname, email) VALUES ('Ada', 'Lovelace', 'ada@test.fr');
INSERT INTO users (firstname, lastname, email) VALUES ('Beatrice', 'Worsley', 'bea@test.fr');
INSERT INTO users (firstname, lastname, email) VALUES ('Bella', 'Guerin', 'bella@test.fr');
INSERT INTO users (firstname, lastname, email) VALUES ('Barbara', 'Chase', 'barbara@test.fr');

SELECT * FROM users;
SELECT * FROM users WHERE firstname='Ada';
SELECT * FROM users WHERE firstname LIKE 'B%';
SELECT count(*) FROM users WHERE firstname LIKE 'B%';
SELECT firstname from users;