<?php
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Feedback Form</title>
    <link rel="stylesheet" href="CSS\feedback.css">
</head>
<body>

    <div class="feedback-container">
        <h1>Feedback Form</h1>

        <form id="feedback-form" method="post" action="">
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>
            </div>

            <div class="form-group">
				
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" >
            </div>

            <div class="form-group" style="display: flex; justify-content: space-between;">
                <div style="flex: 1; margin-right: 10px;">
                    <label for="phone">Phone:</label>
                    <input type="tel" id="phone" name="phone" required>
                </div>
                <div style="flex: 1;">
                    <label for="age">Age:</label>
                    <div class="age-input"></div>
                    <input type="text" id="age" name="age" required>
                </div>
            </div>

            <div class="form-group">
                <label for="rating">Rating:</label>
                <div class="stars" id="rating">
                    <span class="star" data-value="1">☆</span>
                    <span class="star" data-value="2">☆</span>
                    <span class="star" data-value="3">☆</span>
                    <span class="star" data-value="4">☆</span>
                    <span class="star" data-value="5">☆</span>
                </div>
            </div>

            <div class="form-group">
                <label for="feedback">Your Feedback:</label><br>
                <textarea id="feedback" name="feedback" rows="4" required></textarea>
            </div>

            <button type="submit" id="submit-button">Submit Feedback</button>
        </form>

        <div id="confirmation" style="display: none;">
            <h3>Thank you for your feedback!</h3>
        </div>
    </div>

    <script src="JS/feed.js"></script>
</body>
</html>
