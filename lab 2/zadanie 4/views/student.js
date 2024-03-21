const fs = require("fs");

function renderPage(res, formData) {
    const parsedFormData = new URLSearchParams(formData);

    const code = parsedFormData.get('code');
    const name = parsedFormData.get('name');
    const lastname = parsedFormData.get('lastname');
    const gender = parsedFormData.get('gender');
    const age = parsedFormData.get('age');
    const studyField = parsedFormData.get('studyField');

    const dataToWrite = `Numer albumu: ${code}\nImię: ${name}\nNazwisko: ${lastname}\nPłeć: ${gender}\nWiek: ${age}\nKierunek: ${studyField}`;

    fs.writeFile(`${code}.txt`, dataToWrite, (err) => {
        if (err) {
            console.error(err);
            return res.end("Błąd podczas zapisywania danych do pliku.");
        }

        const pageContent = `
            <html lang="pl">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Student profile</title>
                </head>
                <body>
                    <h1>Student profile</h1>
                    <p>Numer albumu: ${code}</p>
                    <p>Imię: ${name}</p>
                    <p>Nazwisko: ${lastname}</p>
                    <p>Płeć: ${gender}</p>
                    <p>Wiek: ${age}</p>
                    <p>Kierunek: ${studyField}</p>
                </body>
            </html>
        `;
        
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(pageContent);
        res.end();
    });
}

module.exports = renderPage;