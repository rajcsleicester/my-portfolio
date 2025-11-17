CREATE DATABASE IF NOT EXISTS LibraryDB;
USE LibraryDB;

CREATE TABLE IF NOT EXISTS Authors (
    AuthorID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    Country VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS Books (
    BookID INT AUTO_INCREMENT PRIMARY KEY,
    Title VARCHAR(150) NOT NULL,
    AuthorID INT,
    PublishedYear YEAR,
    Genre VARCHAR(50),
    FOREIGN KEY (AuthorID) REFERENCES Authors(AuthorID)
);

INSERT INTO Authors (Name, Country) VALUES
('J.K. Rowling', 'UK'),
('George R.R. Martin', 'USA'),
('Haruki Murakami', 'Japan');

INSERT INTO Books (Title, AuthorID, PublishedYear, Genre) VALUES
('Harry Potter and the Sorcerer''s Stone', 1, 1997, 'Fantasy'),
('A Game of Thrones', 2, 1996, 'Fantasy'),
('Kafka on the Shore', 3, 2002, 'Fiction');


SELECT b.Title, a.Name AS Author, b.PublishedYear, b.Genre
FROM Books b
JOIN Authors a ON b.AuthorID = a.AuthorID;

SELECT Title, PublishedYear
FROM Books
WHERE PublishedYear > 2000;

SELECT a.Name AS Author, COUNT(b.BookID) AS BookCount
FROM Authors a
LEFT JOIN Books b ON a.AuthorID = b.AuthorID
GROUP BY a.Name;
