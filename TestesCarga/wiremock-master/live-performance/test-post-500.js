import http, { url } from 'k6/http';
import { check, sleep } from 'k6';

export default function () {
    
    test('Efetuar POST com erro 500', () => {
    
        const url = 'http://localhost:8080/api/cars'; // URL da API simulada com WireMock
        const payload = JSON.stringify({
            brand: 'VW',
            model: 'up tsi',
            year: 2020
        });

        const params = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = http.post(url, payload, params);

        check(response, {
            'Status 500': (r) => r.status === 500, // Verifica se o status da resposta é 500
            'Body contains success message': (r) => r.json('message') === "Internal server error: model 'up tsi' is not allowed." // Verifica a mensagem de sucesso
        });
        sleep(1); // Aguarda 1 segundo
    });
}

// Função auxiliar que simula o comportamento do 'it' do Cypress
function test(name, func) {
    console.log('Em andamento:', name);
    func();
}
