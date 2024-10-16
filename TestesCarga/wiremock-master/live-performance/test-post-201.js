import http, { url } from 'k6/http';
import { check, sleep } from 'k6';

export default function () {
    
    test('Efetuar POST com sucesso 201', () => {
    
        const url = 'http://localhost:8080/api/cars'; // URL da API simulada com WireMock
        const payload = JSON.stringify({
            brand: 'VW',
            model: 'fusca',
            year: 1977
        });

        const params = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = http.post(url, payload, params);

        check(response, {
            'Status 201': (r) => r.status === 201, // Verifica se o status da resposta é 201
            'Body contains success message': (r) => r.json('message') === 'Car successfully registered!', // Verifica a mensagem de sucesso
            'carId = 6': (r) => r.json('carId') === 6
        });
        sleep(1); // Aguarda 1 segundo
    });
}

// Função auxiliar que simula o comportamento do 'it' do Cypress
function test(name, func) {
    console.log('Em andamento:', name);
    func();
}
