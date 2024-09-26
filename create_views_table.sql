CREATE DATABASE IF NOT EXISTS techfest;

USE techfest;

-- Create the views table
CREATE TABLE IF NOT EXISTS views (
    id INT AUTO_INCREMENT PRIMARY KEY,
    view_count INT NOT NULL DEFAULT 0
);

-- Create the queries table
CREATE TABLE IF NOT EXISTS queries (
    id INT AUTO_INCREMENT PRIMARY KEY,
    query_text VARCHAR(255) NOT NULL
);

-- Insert an initial record for the view count if it doesn't already exist
INSERT INTO views (view_count) 
SELECT 0 
WHERE NOT EXISTS (SELECT * FROM views);
