
const http = require('http');
const { readNumbersFromFile, getTotalSum, getTotalCount, getEvenSum } = require('./myfunclib');

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        readNumbersFromFile((err, numbers) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end(`Ошибка при чтении файла: ${err.message}`);
            } else {
                // Вычисляем необходимые значения
                const totalSum = getTotalSum(numbers);
                const totalCount = getTotalCount(numbers);
                const evenSum = getEvenSum(numbers);

                // Отправляем ответ с результатами
                res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                res.end(`
                    <html>
                    <head><title>Результаты вычислений</title></head>
                    <body>
                        <h1>Результаты вычислений</h1>
                        <p>Сумма всех чисел: ${totalSum}</p>
                        <p>Количество всех чисел: ${totalCount}</p>
                        <p>Сумма четных чисел: ${evenSum}</p>
                    </body>
                    </html>
                `);
            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});
server.listen(3213, () => {
    console.log('Сервер запущен на http://localhost:3213');
});
