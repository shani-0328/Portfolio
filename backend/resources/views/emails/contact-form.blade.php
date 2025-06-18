<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>New Contact Form Submission</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .container {
            background-color: #f9f9f9;
            border: 1px solid #ddd;
            border-radius: 5px;
            padding: 20px;
        }
        h1 {
            color: #2c3e50;
            border-bottom: 1px solid #eee;
            padding-bottom: 10px;
        }
        .message {
            background-color: #fff;
            border-left: 4px solid #3498db;
            padding: 15px;
            margin-top: 20px;
        }
        .footer {
            margin-top: 30px;
            font-size: 12px;
            color: #777;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>New Contact Form Submission</h1>
        
        <p>You have received a new message from your portfolio website contact form:</p>
        
        <table>
            <tr>
                <td><strong>Name:</strong></td>
                <td>{{ $contact->name }}</td>
            </tr>
            <tr>
                <td><strong>Email:</strong></td>
                <td>{{ $contact->email }}</td>
            </tr>
            <tr>
                <td><strong>Subject:</strong></td>
                <td>{{ $contact->subject ?? 'No Subject' }}</td>
            </tr>
        </table>
        
        <div class="message">
            <h3>Message:</h3>
            <p>{{ $contact->message }}</p>
        </div>
        
        <div class="footer">
            <p>This email was sent from your portfolio website contact form.</p>
        </div>
    </div>
</body>
</html>
