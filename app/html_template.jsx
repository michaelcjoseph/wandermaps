export default ({ body, title }) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Wander Maps</title>

        <!-- Add Bootstrap CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css">

        <!-- Add Font Awesome Icons-->
        <script src="https://use.fontawesome.com/9f18369a41.js"></script>
      </head>
      
      <body>
        <div id="main">${body}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
};