<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use Dotenv\Dotenv;

require 'vendor/autoload.php';

// Load the .env file
$dotenv = Dotenv::createImmutable('./.env');    
$dotenv->load();

$appPassword = $_ENV['GMAIL_APP_PASSWORD'];
error_log("App password: " . $appPassword);

if($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    try {

        // Initialize PHPMailer
        $mail = new PHPMailer(true);
        $mail->isSMTP();
        $mail->Host = getenv('SMTP_HOST') ?: 'smtp.gmail.com';
        $mail->Port = getenv('SMTP_PORT') ?: 587;
        $mail->SMTPAuth = true;
        $mail->Username = 'joni.a.putkinen@gmail.com';
        $mail->Password = $appPassword;
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;

        // Email details
        $mail->setFrom('joni.a.putkinen@gmail.com', 'Laatumarjat');
        $mail->addAddress('joni.a.putkinen@gmail.com');
        $mail->Subject = 'Uusi viesti Laatumarjat-sivustolta';
        $mail->Body = "Uusi viesti Laatumarjat-sivustolta:\n\n" .
                      "Nimi: $name\n" .
                      "Sähköposti: $email\n" .
                      "Viesti: $message";

        // Send email
        if ($mail->send()) {
            // If email is sent successfully, return 'success'
            echo 'success';
        } else {
            // If email sending fails, return an error message
            echo 'Viestin lähettämisessä tapahtui virhe: ' . $mail->ErrorInfo;
        }

    } catch (Exception $e) {
        // Return an error message in case of exceptions
        echo 'Viestin lähettämisessä tapahtui virhe: ' . $e->getMessage();
    }
}
?>
