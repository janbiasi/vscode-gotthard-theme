DROP TABLE IF EXISTS posts;

-- this is a sample comment
CREATE TABLE posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    blogId INTEGER NOT NULL,
    created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    FOREIGN KEY (blogId) REFERENCES Persons(blogId)
);

SELECT column_name, aggregate_function(column_name)
FROM table_name
WHERE column_name operator value
GROUP BY column_name
HAVING aggregate_function(column_name) operator value

SELECT ABS(-243.5) AS AbsNum;

SELECT SYSDATETIME() AS SysDateTime;

SELECT COALESCE(NULL, NULL, NULL, 'google.com', NULL, 'example.com');

SELECT ISNULL(NULL, 'google.com');

BACKUP DATABASE testDB TO DISK = 'D:\backups\testDB.bak' WITH DIFFERENTIAL;
