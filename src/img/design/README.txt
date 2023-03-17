	Breve Descrição do Design já Feito

	- O usuário começará pela tela de login; 
	- Após o login, ele será redirecionado para a páginade acervos. 
	- Na página de acervos, temos cards apresentando as espécies já cadastradas
	no sistema;
	- Ao clicar em um desses cards, ele carrega os detalhes da espécie selecinada
	logo abaixo, e então, rola suavemente o scroll até eles ficarem visíveis ao
	cliente (Parte que tem a foto e descrição do jatobá);
	- Abaixo da descrição da espécie, tem um botão "carregar plantas" (que mais
	tarde, mudarei para "listar plantas"), ao clicar nesse botão, a página 
	carregará a lista de plantas daquela espécie cadastradas no sistema, e então,
	rolará o scroll até essa lista ficar visível ao usuário;
	- Haverão três checkbox acima da lista: semente, muda, matriz. Ao usuário 
	marcar ou desmarcar alguma dessas opções, o conteúdo da lista mudará dinamicamente;
	- Ao clicar em um item dessa lista, ele será redirecionado para a página de 
	cadastro de mudas, onde estarão os dados da planta selecionada.
	- Desses campos nessa página, só estarão visíveis ao usuário aqueles que condizem
	com o estágio em que a planta se encontra (semente, muda, matriz).

	Cadastro
	
	- Ao clicar em 'cadastrar espécie', o usuário verá uma descrição de espécie
	com os campos vazios, para o usuário preencher;
	- Ao clicar em cadastrar planta, o usuario será redirecionado para a página 
	de cadastro de planta, onde primeiramente, haverá apenas dois campos: espécie e
	estágio;
	- Após escolher o estágio da planta, os demais campos que condizem com essa opção
	aparecerão para o usuário preencher. Os campos que não condizem (como formato do 
	tronco, em caso de a planta ser uma semente), ficarão ocultos (display: none).

    	Bancadas
    
    	- Na página de bancadas, ao clicar em uma bancada, será listado logo abaixo, 
    	todas as mudas que pertencem a ela.
    
    	Buscar Muda
    
    	- Na pagina de pesquisa, o usuário irá selecionar o parâmetro de pesquisa
    	no menu dropdown e fará a pesquisa. Abaixo do campo de pesquisa serão listadas
    	todas as plantas correspondentes.