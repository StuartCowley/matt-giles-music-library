CREATE TABLE Albums (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    year INT NOT NULL,
    artistid INT NOT NULL,

    CONSTRAINT FK_artist_info FOREIGN KEY (artistid)
    REFERENCES artists(id)
);