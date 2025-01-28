<?php
// Define variables and set them to empty values

require 'vendor/autoload.php';



$name = $email = $message = "";
$nameErr = $emailErr = $messageErr = "";

// Process the form when it's submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {

  // Validate name
  if (empty($_POST["name"])) {
    $nameErr = "Name is required";
  } else {
    $name = sanitize_input($_POST["name"]);
    // Check if name only contains letters and whitespace
    if (!preg_match("/^[a-zA-Z-' ]*$/",$name)) {
      $nameErr = "Only letters and white space allowed";
    }
  }

  // Validate email
  if (empty($_POST["email"])) {
    $emailErr = "Email is required";
  } else {
    $email = sanitize_input($_POST["email"]);
    // Check if email is a valid format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      $emailErr = "Invalid email format";
    }
  }

  // Validate message
  if (empty($_POST["message"])) {
    $messageErr = "Message is required";
  } else {
    $message = sanitize_input($_POST["message"]);
  }

  // If no errors, proceed with sending the email
  if (empty($nameErr) && empty($emailErr) && empty($messageErr)) {

    // Set the recipient email address
    $to = "your_email@example.com"; // Change to your email address

    // Set the subject of the email
    $subject = "New Contact Message from " . $name;

    // Construct the message
    $email_message = "Name: $name\n";
    $email_message .= "Email: $email\n";
    $email_message .= "Message: \n$message\n";

    // Set the email headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // Send the email
    if (mail($to, $subject, $email_message, $headers)) {
      echo "Thank you for contacting us, we will get back to you shortly.";
    } else {
      echo "Sorry, something went wrong and we couldn't send your message.";
    }
  } else {
    // Display errors
    echo "<p style='color:red;'>$nameErr</p>";
    echo "<p style='color:red;'>$emailErr</p>";
    echo "<p style='color:red;'>$messageErr</p>";
  }
}

// Function to sanitize input data to prevent XSS
function sanitize_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>
