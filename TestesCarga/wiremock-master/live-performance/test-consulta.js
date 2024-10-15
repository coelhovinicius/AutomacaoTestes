import http, { url } from 'k6/http';
import { check, sleep } from 'k6';

export default function () {

    test('Validar a consulta de todos os carros', () => {

        const url = 'http://localhost:8080/api/cars'; // URL da API simulada com WireRock
        const response = http.get(url);

        check(response, {
            'Status 200': (r) => r.status === 200, // Verifica se o status da resposta é 200
            'Contains 5 cars': (r) => r.json().length === 5, // Verifica se há 5 itens na lista
        });
        sleep(1); // Aguarda 1 segundo
    });
}

function test(name, func) {
    console.log('Em andamento:', name);
    func();
}