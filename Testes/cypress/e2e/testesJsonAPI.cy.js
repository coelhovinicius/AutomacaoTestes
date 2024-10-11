/// <reference types="cypress"/>

// Funcionalidades
describe('Testes CRUD', () => {
    
    // Cenários de Testes

    // CT1
    it('GET geral', () => {
        cy.request({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/posts'
        })
            .then((response) => {
                console.log('RESPOSTA: ', response)
                expect(response.status).to.equal(200)
            })

    })

    // CT2
    it('POST', () => {
        cy.request({
            method:'POST',
            url: 'https://jsonplaceholder.typicode.com/posts',
            body: {
                id: 3,
                title: 'Teste 300',
                body: 'Teste 300',
                userId: 1
                }
        })
            .then ((response) => {
                console.log('RESPOSTA: ', response)
                expect(response.status).to.equal(201) // Verifica se a mensagem está correta
                expect(response.body.title).to.equal('Teste 300') // Verifica se o name é igual ao que está entre aspas
            })
    })

    // CT3
   it('GET específico', () => {
        cy.request({
            method:'GET',
            url: 'https://jsonplaceholder.typicode.com/posts/3'
        })
            .then ((response) => {
                console.log('RESPOSTA: ', response)
                expect(response.status).to.equal(200) // Verifica se a mensagem está correta
            })
    })

    // CT4
    it('GET para verificar mensagem de erro', () => {
        cy.request({
            method:'GET',
            url: 'https://jsonplaceholder.typicode.com/posts/32467',
            failOnStatusCode: false
        })
            .then ((response) => {
                console.log('RESPOSTA: ', response)
                expect(response.status).to.equal(404) // Verifica se a mensagem está correta
            })
    })

    // CT5
    it('DELETE para apaagr dados', () => {
        cy.request({
            method: 'DELETE',
            url: 'https://jsonplaceholder.typicode.com/posts/3',
        })
            .then((response) => {
                expect(response.status).to.equal(200)
                expect(response.body).to.deep.equal({}) // Confirma se está vazio para verificar se foi feita a deleção corretamente
            })
    })

    // CT6
    it('UPDATE para atualizar dados totalmente', () => {
        cy.request({
          method: 'PUT',
          url: 'https://jsonplaceholder.typicode.com/posts/3',
          body: {
            id: 3,
            title: 'Teste 654321',
            body: 'Teste 654321',
            userId: 1
            }
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).to.have.property('id', 3);
            expect(response.body).to.have.property('title', 'Teste 654321');
        });
    });

    // CT7
    it('PATCH para atualizar dados parcialmente', () => {
        cy.request({
          method: 'PUT',
          url: 'https://jsonplaceholder.typicode.com/posts/2',
          body: {
            title: 'Teste Vinicius',

            }
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).to.have.property('id', 2);
            expect(response.body).to.have.property('title', 'Teste Vinicius');
        });
    });
})
