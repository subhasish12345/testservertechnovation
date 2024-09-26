<?php
// Database configuration
$host = 'localhost'; // Change this if your database is hosted elsewhere
$db_name = 'techfest';
$username = 'root'; // Your database username
$password = ''; // Your database password

try {
    // Connect to the database using PDO
    $pdo = new PDO("mysql:host=$host;dbname=$db_name", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Increment the view count
    $stmt = $pdo->prepare("UPDATE views SET view_count = view_count + 1 WHERE id = 1");
    $stmt->execute();

    // Fetch the updated view count
    $stmt = $pdo->prepare("SELECT view_count FROM views WHERE id = 1");
    $stmt->execute();
    $row = $stmt->fetch(PDO::FETCH_ASSOC);

    // Prepare response array
    $response = ['view_count' => $row['view_count']];

    // Check if contact form is submitted
    if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST['your_name']) && isset($_POST['your_email'])) {
        $yourName = $pdo->quote($_POST['your_name']); // Sanitize input
        $yourEmail = $pdo->quote($_POST['your_email']);
        $yourPhone = $pdo->quote($_POST['your_phone']);
        $comments = $pdo->quote($_POST['comments']);

        // Insert contact form data into the database
        $sql = "INSERT INTO contact_form_info (name, email, phone, comments) VALUES ($yourName, $yourEmail, $yourPhone, $comments)";
        if ($pdo->exec($sql)) {
            $response['message'] = "Thank you! We will contact you soon.";
        } else {
            $response['error'] = "There was an error running the query.";
        }
    } else {
        $response['error'] = "Please fill Name and Email.";
    }

    // Check if a query is submitted
    if (isset($_POST['query'])) {
        $query = $pdo->quote($_POST['query']); // Sanitize input

        // Insert query into the database
        $insertStmt = $pdo->prepare("INSERT INTO queries (query_text) VALUES ($query)");
        if ($insertStmt->execute()) {
            $response['query_message'] = 'Query submitted successfully!';
        } else {
            $response['query_error'] = 'Failed to submit the query.';
        }
    }

    // Return the response as JSON
    echo json_encode($response);

} catch (PDOException $e) {
    error_log($e->getMessage()); // Log error to a file
    echo json_encode(['error' => "Connection failed: " . $e->getMessage()]);
}
?>
