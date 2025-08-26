const fotos = [
    { src: "./img/casal/img001.jpg", caption: "A primeira foto que coloquei aqui, e é a minha preferida S2", tipo: "paisagem" },
    { src: "./img/casal/img002.jpg", caption: "Amo você inteiramente", tipo: "paisagem" },
    { src: "./img/casal/img003.jpg", caption: "Pacheco News: Mulher conquista homem pela parte mais sensível: a barriga." },
    { src: "./img/casal/img004.jpg", caption: "Foco da câmera: 0 / Beleza da gata: 100000000", tipo: "paisagem" },
    { src: "./img/casal/img005.jpg", caption: "Minha namoradeira heheheh", tipo: "paisagem" },
    { src: "./img/casal/img006.jpg", caption: "Heheheeh", tipo: "paisagem" },
    { src: "./img/casal/img007.jpg", caption: "😘✌" },
    { src: "./img/casal/img008.jpg", caption: "Mais um presente 😁" },
    { src: "./img/casal/img009.jpg", caption: "Doido pra te embrulhar mais uma vez kkkkkkk" },
    { src: "./img/casal/img010.jpg", caption: "Faltou colocar os pisca pisca, mas esse ano eu não me esqueço kkkkkk", tipo: "paisagem" },
    { src: "./img/casal/img011.jpg", caption: "O laço caindo kkkkk" },
    { src: "./img/casal/img012.jpg", caption: "Vou continuar te beijando até minha boca cair" },
    { src: "./img/casal/img013.jpg", caption: "Lembro de ficarmos put*s por que Marley não avançou na relação com Luciana esse dia kkkkkkk" },
    { src: "./img/casal/img014.jpg", caption: "Sorrisão lindo que eu amo", tipo: "paisagem" },
    { src: "./img/casal/img015.jpg", caption: "Nosso primeiro rodeio", tipo: "paisagem" },
    { src: "./img/casal/img016.jpg", caption: "Sabia que pedi sua mão pra sua mãe nesse dia?", tipo: "paisagem" },
    { src: "./img/casal/img017.jpg", caption: "Você ficou tão linda nessa foto", tipo: "paisagem" },
    { src: "./img/casal/img018.jpg", caption: "Eu nem imaginava o quanto iria me apaixonar por você a cada dia que passase", tipo: "paisagem" },
    { src: "./img/casal/img019.jpg", caption: "Eita que eu fiquei caidinho por você" },
    { src: "./img/casal/img020.jpg", caption: "Não tenho palavras pra descrever minha felicidade nesse dia" },
    { src: "./img/casal/img021.jpg", caption: "Fotos espontâneas atacam novamente 🤣🤣🤣" },
    { src: "./img/casal/img022.jpg", caption: "Eu te amo mil milhões" },
    { src: "./img/casal/img023.jpg", caption: "Lembro da gente procurando um filtro que você aprovasse kkkkkkk", tipo: "paisagem" },
    { src: "./img/casal/img024.jpg", caption: "😁🤨" },
    { src: "./img/casal/img025.jpg", caption: "Amo seu sorriso" },
    { src: "./img/casal/img026.jpg", caption: "Essa muié é minha 😤" },
    { src: "./img/casal/img027.jpg", caption: "❤❤❤" },
    { src: "./img/casal/img028.jpg", caption: "Aproveitamos tanto nesse dia" },
    { src: "./img/casal/img029.jpg", caption: "Um brinde aos nossos momentos juntos" },
    { src: "./img/casal/img030.jpg", caption: "Amo seus beijos" },
    { src: "./img/casal/img031.jpg", caption: "Amo as noites ao seu lado mais que tudo", tipo: "paisagem" },
    { src: "./img/casal/img032.jpg", caption: "Você é linda de todos os ângulos", tipo: "paisagem" },
    { src: "./img/casal/img033.jpg", caption: "Que sorte eu tenho de ter você do meu lado", tipo: "paisagem" },
    { src: "./img/casal/img034.jpg", caption: "Eternizando momentos ao seu lado" },
    { src: "./img/casal/img035.jpg", caption: "❤❤❤" },
    { src: "./img/casal/img036.jpg", caption: "Ai ai ai, exibindo a aliança kkkkkkk" },
    { src: "./img/casal/img037.jpg", caption: "Já tô ficando sem legenda pra esse dia kkkkkk", tipo: "paisagem" },
    { src: "./img/casal/img038.jpg", caption: "É minha e não vou largar nunca!", tipo: "paisagem" },
    { src: "./img/casal/img039.jpg", caption: "''Essa é a minha esposa'' doido pra dizer isso no futuro", tipo: "paisagem" },
    { src: "./img/casal/img040.jpg", caption: "Acredita que o google fez até um albúm com essa atendente atrás de você de tanta foto sequencial que tirei? kkkkkkkkkk" },
    { src: "./img/casal/img041.jpg", caption: "Sua leveza é maioral" },
    { src: "./img/casal/img042.jpg", caption: "Eu adoro fotos em sequência kkkkkkkkk" },
    { src: "./img/casal/img043.jpg", caption: "Essas fotos sequênciais pegam umas expressões ótimas kkkkkk" },
    { src: "./img/casal/img044.jpg", caption: "Eu amo essa sua expressão kkkkkk" },
    { src: "./img/casal/img045.jpg", caption: "Não estava lembrando dessas pulseirinhas coloridas nesse dia kkkkkk" },
    { src: "./img/casal/img046.jpg", caption: "Que casalzão" },
    { src: "./img/casal/img047.jpg", caption: "O poder de usar cada parte do meu corpo como travesseiro kkkkkkk" },
    { src: "./img/casal/img048.jpg", caption: "Máfia azul" },
    { src: "./img/casal/img049.jpg", caption: "Amo ir em festa chique com você!" },
    { src: "./img/casal/img050.jpeg", caption: "Minha shreka" },
    { src: "./img/casal/img051.jpg", caption: "Você toda gata e eu todo malandro", tipo: "paisagem" },
    { src: "./img/casal/img052.jpg", caption: "Primeira viagenzinha", tipo: "paisagem" },
    { src: "./img/casal/img053.jpg", caption: "Essa foto é nossa cara", tipo: "paisagem" },
    { src: "./img/casal/img054.jpg", caption: "Será que consegui roubar seu coração?" },
    { src: "./img/casal/img055.jpg", caption: "Seu amor é o maior tesouro que um homem pode conquistar" },
    { src: "./img/casal/img056.jpg", caption: "Lembrete: Assistir One Piece ❤" },
    { src: "./img/casal/img057.jpg", caption: "A cara séria kkkkkkk" },
    { src: "./img/casal/img058.jpg", caption: "Segurando meu maior tesouro pra ninguém pegar" },
    { src: "./img/casal/img059.jpg", caption: "Vamos conquistar o One Piece juntos" },
    { src: "./img/casal/img060.jpg", caption: "Você é viciante" },
    { src: "./img/casal/img061.jpg", caption: "Como você pode estar sempre tão graciosa assim?" },
    { src: "./img/casal/img062.jpg", caption: "Você é um presente na minha vida 🎁💗" },
    { src: "./img/casal/img063.jpg", caption: "Cada momento com você é um presente", tipo: "paisagem" },
    { src: "./img/casal/img064.jpg", caption: "Tenho que agradecer sua mãe por esse presentão aqui 👆" },
    { src: "./img/casal/img065.jpg", caption: "Já falei que te amo muito? Provavelmente, mas vou repetir até que eu não consiga mais" },
    { src: "./img/casal/img066.jpg", caption: "Os dias são mais leves ao seu lado", tipo: "paisagem" },
    { src: "./img/casal/img067.jpg", caption: "Orgulho de dizer que é minha" },
    { src: "./img/casal/img068.jpg", caption: "Que gatinha é essa que esse rapaz está se exibindo?" },
    { src: "./img/casal/img069.jpg", caption: "Você é espetacular" },
    { src: "./img/casal/img070.jpg", caption: "Deem licença o casal mais estiloso da noite está a passar" },
    { src: "./img/casal/img071.jpg", caption: "Eu todo bobo de estar com a mulher mais perfeita do mundo", tipo: "paisagem" },
    { src: "./img/casal/img072.jpg", caption: "Você nasceu perfeita ou fez senai?" },
    { src: "./img/casal/img073.jpg", caption: "Temos tantas fotos nesse espelho kkkkkkk", tipo: "paisagem" },
    { src: "./img/casal/img074.jpg", caption: "Foto parcialmente espontânea" },
    { src: "./img/casal/img075.jpg", caption: "Não são vinhos, mas são finos 👌", tipo: "paisagem" },
    { src: "./img/casal/img076.jpg", caption: "Chiques 😎", tipo: "paisagem" },
    { src: "./img/casal/img077.jpg", caption: "Não canso de repetir: você é tão lindaaaaa" },
    { src: "./img/casal/img078.jpg", caption: "Vontade de segurar e não largar nunca" },
    { src: "./img/casal/img079.jpg", caption: "Já falei que amei seu cabelo nesse dia? kkkkkkk" },
    { src: "./img/casal/img080.jpg", caption: "Eu amei seu penteado nesse dia" },
    { src: "./img/casal/img081.jpg", caption: "Você fica maravilhosa em vestidos" },
    { src: "./img/casal/img082.jpg", caption: "Esse print foi hilário kkkkkk" },
    { src: "./img/casal/img083.jpg", caption: "Já falei que amo seu cabelo?", tipo: "paisagem" },
    { src: "./img/casal/img084.jpg", caption: "Ai ai essas trends", tipo: "paisagem" },
    { src: "./img/casal/img085.jpeg", caption: "Tenho certeza que você não sabia dessa foto kkkkkk" },
    { src: "./img/casal/img086.jpg", caption: "Te fazer sorrir sempre é o que mais desejo", tipo: "paisagem" },
    { src: "./img/casal/img087.jpg", caption: "Ai ai esses paparazzis" },
    { src: "./img/casal/img088.jpg", caption: "Dia do asiático, mas não cantamos parabéns pra mim", tipo: "paisagem" },
    { src: "./img/casal/img089.jpg", caption: "Foi muito legal aprender mais sobre o Egito com você" },
    { src: "./img/casal/img090.jpg", caption: "Combinamos tanto" },
    { src: "./img/casal/img091.jpg", caption: "O brilho da aliança reflete nosso amor" },
    { src: "./img/casal/img092.jpg", caption: "Esse espelho aqui estava incrível", tipo: "paisagem" },
    { src: "./img/casal/img093.jpg", caption: "Além de modelo, é atriz também" },
    { src: "./img/casal/img094.jpg", caption: "Nossa felicidade vendo as múmias kkkkkk" },
    { src: "./img/casal/img095.jpg", caption: "Aqui não podia flash kkkkkkk" },
    { src: "./img/casal/img096.jpg", caption: "Esse dia foi perfeito!", tipo: "paisagem" },
    { src: "./img/casal/img097.jpg", caption: "Não me canso de apreciar suas fotos" },
    { src: "./img/casal/img098.jpg", caption: "Você é minha maior benção", tipo: "paisagem" },
    { src: "./img/casal/img099.jpg", caption: "O por do sol combina muito com sua face pensativa" },
    { src: "./img/casal/img100.jpg", caption: "Seu sorriso iluminando o sol", tipo: "paisagem" },
    { src: "./img/casal/img101.jpg", caption: "Minha carinha de quem está do lado da mulher mais bonita do mundo", tipo: "paisagem" },
    { src: "./img/casal/img102.jpg", caption: "Viciei em te beijar" },
    { src: "./img/casal/img103.jpg", caption: "Eu amo te beijar" },
    { src: "./img/casal/img104.jpg", caption: "Menina peladeira, você aquece meu coração!" },
    { src: "./img/casal/img105.jpg", caption: "Descobri a melhor forma de passar a ressaca...", tipo: "paisagem" },
    { src: "./img/casal/img106.jpg", caption: "Adoro ir na piscina com você", tipo: "paisagem" },
    { src: "./img/casal/img107.jpg", caption: "Você emburrada querendo rir kkkkkkk", tipo: "paisagem" },
    { src: "./img/casal/img108.jpg", caption: "Quando perguntarem quem é o gracista da relação, manda essa foto kkkkkkk", tipo: "paisagem" },
    { src: "./img/casal/img109.jpg", caption: "Tem algo que me atraí nessa foto. Ahhhh é você heheh", tipo: "paisagem" },
    { src: "./img/casal/img110.jpg", caption: "Eita solzão" },
    { src: "./img/casal/img111.jpg", caption: "A sauna esse dia pegou fogo" },
    { src: "./img/casal/img112.jpg", caption: "Eu te amo tanto, você não faz ideia" },
    { src: "./img/casal/img113.jpg", caption: "Foram tantas experiências juntos..." },
    { src: "./img/casal/img114.jpg", caption: "Seu sorriso divide os mares da minha alma e do meu corpo" },
    { src: "./img/casal/img115.jpg", caption: "😍😍😍" },
    { src: "./img/casal/img116.jpg", caption: "O que você estava segurando na mão direita? kkkkkkk" },
    { src: "./img/casal/img117.jpg", caption: "Você é extremamente fofa" },
    { src: "./img/casal/img118.jpg", caption: "Vontade de te agarrar que não passava kkkkkk" },
    { src: "./img/casal/img119.jpg", caption: "Ops, deixa eu subir essa mão aqui", tipo: "paisagem" },
    { src: "./img/casal/img120.jpg", caption: "Só evento chique" },
    { src: "./img/casal/img121.jpg", caption: "🤨", tipo: "paisagem" },
    { src: "./img/casal/img122.jpg", caption: "Você é extremamente linda, EXTREMAMENTE" },
    { src: "./img/casal/img123.jpg", caption: "Paaaaarece que você quer me matar às vezes né kkkkkkkkk" },
    { src: "./img/casal/img124.jpg", caption: "🥺🥺🥺", tipo: "paisagem" },
    { src: "./img/casal/img125.jpg", caption: "Brilhamos tanto juntos que o telefone ficou até sem jeito" },
    { src: "./img/casal/img126.jpg", caption: "😍😍😍", tipo: "paisagem" },
    { src: "./img/casal/img127.jpg", caption: "Sorri aí amor kkkkkk" },
    { src: "./img/casal/img128.jpg", caption: "Seu cabelo me encanta desde sempre", tipo: "paisagem" },
    { src: "./img/casal/img129.jpg", caption: "Que fotonaaaa!" },
    { src: "./img/casal/img130.jpg", caption: "❤❤❤" },
    { src: "./img/casal/img131.jpg", caption: "Fotinha trend", tipo: "paisagem" },
    { src: "./img/casal/img132.jpg", caption: "''Que isso japonês, levando a muié embora?'' kkkkkkkk" },
    { src: "./img/casal/img133.jpg", caption: "Levei essa maravilha embora" },
    { src: "./img/casal/img134.jpg", caption: "Você é tão graciosa", tipo: "paisagem" },
    { src: "./img/casal/img135.jpg", caption: "Dúvido você lembrar onde essa é hehehehe" },
    { src: "./img/casal/img136.jpg", caption: "Nem parece que eu não tinha bebido ainda kkkkkk", tipo: "paisagem" },
    { src: "./img/casal/img137.jpg", caption: "O que posso dizer de você? Fenomenal?" },
    { src: "./img/casal/img138.jpg", caption: "Esse ano você não perdeu cachecol né kkkkkk", tipo: "paisagem" },
    { src: "./img/casal/img139.jpg", caption: "Não senti muito frio nesse dia pois sua presença me aquece todo", tipo: "paisagem" },
    { src: "./img/casal/img140.jpg", caption: "Amo suas expressões", tipo: "paisagem" },
    { src: "./img/casal/img141.jpg", caption: "Vento: 3 | Thamiris: 1" },
    { src: "./img/casal/img142.jpg", caption: "Vento: 3 | Thamiris: 0" },
    { src: "./img/casal/img143.jpg", caption: "O vento quase te levando embora kkkkkkkk" },
    { src: "./img/casal/img144.jpg", caption: "Vento: 2 | Thamiris: 0" },
    { src: "./img/casal/img145.jpg", caption: "Vento: 1 | Thamiris: 0" },
    { src: "./img/casal/img146.jpg", caption: "Amo cada segundo ao seu lado" },
    { src: "./img/casal/img147.jpg", caption: "Todo mundo juntinho", tipo: "paisagem" },
    { src: "./img/casal/img148.jpg", caption: "😘" },
    { src: "./img/casal/img149.jpg", caption: "❤❤❤" },
    { src: "./img/casal/img150.jpg", caption: "A vontade de apertar essa sua bocheca não diminui de jeito nenhum", tipo: "paisagem" },
    { src: "./img/casal/img151.jpg", caption: "Uma bem descontraída aqui kkkkk", tipo: "paisagem" },
    { src: "./img/casal/img152.jpg", caption: "Não tenho como discordar heheh", tipo: "paisagem" },
    { src: "./img/casal/img153.jpg", caption: "Obrigado por estar sempre ao meu lado" },
    { src: "./img/casal/img154.jpg", caption: "Seu sorriso se destaca até nas fotos sem luz kkkkk" },
    { src: "./img/casal/img155.jpg", caption: "Eita como come", tipo: "paisagem" },
    { src: "./img/casal/img156.jpg", caption: "Hihihi" },
    { src: "./img/casal/img157.jpg", caption: "'Essa aqui é a minha'" },
    { src: "./img/casal/img158.jpg", caption: "Você fica tão fofa comendo" },
    { src: "./img/casal/img159.jpg", caption: "Almoçar com você deixa a vida mais saborosa", tipo: "paisagem" },
    { src: "./img/casal/img160.jpg", caption: "Adoro almoçar com você" },
    { src: "./img/casal/img161.jpg", caption: "Eu te adoro tanto", tipo: "paisagem" },
    { src: "./img/casal/img162.jpg", caption: "É aqui a barraquinha do beijo? 😏" },
    { src: "./img/casal/img163.jpg", caption: "Eu vou te proteger sempre", tipo: "paisagem" },
    { src: "./img/casal/img164.jpg", caption: "Viramos hipsters? kkkkkk", tipo: "paisagem" },
    { src: "./img/casal/img165.jpg", caption: "Entre gargalhadas e risos passamos nossos dias" },
    { src: "./img/casal/img166.jpg", caption: "Não fazemos coração coreano só com os dedos, mas com a fogueira toda!" },
    { src: "./img/casal/img167.jpg", caption: "Essa roda em cima de nós não parece ser LGBTABCD...?" },
    { src: "./img/casal/img168.jpg", caption: "Estou aprendendo a ser estiloso com você 😎" },
    { src: "./img/casal/img169.jpg", caption: "Que bom que gostou do vinho nesse dia kkkkkk", tipo: "paisagem" },
    { src: "./img/casal/img170.jpg", caption: "Nossos sorrisos se multiplicam juntos", tipo: "paisagem" },
    { src: "./img/casal/img171.jpg", caption: "Evento recente pra complementar nossa história" },
    { src: "./img/casal/img172.jpg", caption: "Amo muito sua companhia" },
    { src: "./img/casal/img173.jpg", caption: "Nós dois indo iluminar o sol juntos para que o dia não acabasse", tipo: "paisagem" },
    { src: "./img/casal/img174.jpg", caption: "Eu tentei fazer fiu fiu pra você", tipo: "paisagem" },
    { src: "./img/casal/img175.jpg", caption: "Essa foto ficou perfeita" },
    { src: "./img/casal/img176.jpg", caption: "Essa mulher tira o meu fôlego" },
    { src: "./img/casal/img177.jpg", caption: "Essa passou a ser uma das minhas fotos favoritas" },
    { src: "./img/casal/img178.jpg", caption: "A minha modelo é a melhor de todas!!", tipo: "paisagem" },
    { src: "./img/casal/img179.jpg", caption: "O dia admirando sua beleza" },
    { src: "./img/casal/img180.jpg", caption: "Bonde Thamiris", tipo: "paisagem" },
    { src: "./img/casal/img181.jpg", caption: "Sua carinha aqui kkkkkk, pena que a trend não deu certo" },
    { src: "./img/casal/img182.jpg", caption: "Essa aqui não podia faltar de jeito nenhum KKKKKK" },
    { src: "./img/casal/img183.jpg", caption: "Sua alegria é o presente que mais gosto de receber", tipo: "paisagem" },
    { src: "./img/casal/img184.jpg", caption: "''EEIIII!!'' KKKKKKK", tipo: "paisagem" },
    { src: "./img/casal/img185.jpg", caption: "Mais um dia incrível do seu lado" },
    { src: "./img/casal/img186.jpg", caption: "Foi incrível ver o por do sol com você!", tipo: "paisagem" },
    { src: "./img/casal/img187.jpg", caption: "Dias perfeitos com a mulher perfeita", tipo: "paisagem" },
    { src: "./img/casal/img188.jpg", caption: "Minha pandinha" },
    { src: "./img/casal/img189.jpg", caption: "Pouco efeito aqui kkkkkkk" },
    { src: "./img/casal/img190.jpg", caption: "Esse jeitinho de te olhar já entregava tudo kkkkk" },
    { src: "./img/casal/img191.jpg", caption: "Amo o seu cheiro de Thamiris" },
    { src: "./img/casal/img192.jpg", caption: "❤❤❤" },
    { src: "./img/casal/img193.jpg", caption: "Como não se apaixonar por essa carinha fofa sua?", tipo: "paisagem" },
    { src: "./img/casal/img194.jpg", caption: "Uma das primeiras fotos juntos ❤" },
    { src: "./img/casal/img195.jpg", caption: "Dois sorrisos mais que perfeitos!" },
    { src: "./img/casal/img196.jpg", caption: "Tive cover de Pudim pra tirar e manter essa foto kkkkkkkkkkk", tipo: "paisagem" },
    { src: "./img/casal/img197.jpg", caption: "Não me xinga kkkkkkkkkkk", tipo: "paisagem" },
    { src: "./img/casal/img198.jpg", caption: "Sempre no meu coração" },
    { src: "./img/casal/img199.jpg", caption: "Essa aqui o Dono-u tava na quinto sono já kkkkkk" },
    { src: "./img/casal/img200.jpg", caption: "Recado: Eu amo o seu jeito de ser, a forma como enxerga as coisas e a sua forma de amar." },
];

const containerGrid = document.querySelector('.container__grid');

function criarGaleria() {
    const fotosEmbaralhadas = fotos.sort((a, b) => Math.random() - 0.5 );

    const fotosProcessadas = fotosEmbaralhadas.map((foto, index) => {
        const classes = ['polaroid'];
    
        if (foto.tipo === 'paisagem' || index === 0 || index === fotos.length - 1) {
            classes.push('polaroid--larga');
        };

        return { ...foto, classes };
    });

    for (let i = 0; i < fotosProcessadas.length; i++) {
        const fotoAtual = fotosProcessadas[i];
        const fotoAnterior = fotosProcessadas[i - 1];
        const fotoPosterior = fotosProcessadas[i + 1];

        if (!fotoAtual.classes.includes('polaroid--larga')) {
            if (fotoAnterior && fotoAnterior.classes.includes('polaroid--larga') &&
                fotoPosterior && fotoPosterior.classes.includes('polaroid--larga')) {
                
                fotoAtual.classes.push('polaroid--centralizada');
            };
        };
    };

    fotosProcessadas.forEach(foto => {
        const polaroidDiv = document.createElement('div');
        polaroidDiv.classList.add(...foto.classes);

        const imgElement = document.createElement('img');
        imgElement.src = foto.src;
        imgElement.alt = foto.caption;

        const captionP = document.createElement('p');
        captionP.textContent = foto.caption;

        const nomeimage = document.createElement('p');
        nomeimage.textContent = foto.src;

        polaroidDiv.appendChild(imgElement);
        polaroidDiv.appendChild(captionP);
        polaroidDiv.appendChild(nomeimage);

        if (fotos.length % 2 !== 0 && index === fotos.length - 1) {
            polaroidDiv.classList.add('polaroid--centralizada');
        };

        containerGrid.appendChild(polaroidDiv);
    });
};

document.addEventListener('DOMContentLoaded', criarGaleria);