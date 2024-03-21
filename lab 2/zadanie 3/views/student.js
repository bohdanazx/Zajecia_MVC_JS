function renderPage(res) {
    res.write(`
        <html lang="pl">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Strona Studenta</title>
            </head>
            <body>
                <h1>Strona Studenta</h1>
            </body>
        </html>
    `);
    res.end();
}

module.exports = { renderPage };