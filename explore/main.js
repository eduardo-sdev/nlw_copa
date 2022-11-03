const createGame = (player1, hour, player2) => (`
    <li class="flex text-[#f7dd43] items-center justify-between">
        <img 
            class="hover:scale-110 transition-all cursor-pointer"
            src="./assets/${player1}.svg" 
            alt="Bandeira ${player1}"
        >
        <strong
            class="font-bold text-3xl leading-[125%] text-[#e1e1e6] hover:scale-110 transition-all"
        >${hour}</strong>
        <img 
            class="hover:scale-110 transition-all cursor-pointer"
            src="./assets/${player2}.svg" 
            alt="Bandeira ${player2}" 
        />
    </li>
`)

const createCard = (date, day, games) => (`
    <div class="-card py-8 px-6 bg-[#1d1c19] rounded-md border-b-2 border-[#f7dd43]">
        <h2
            class="text-[#f7dd43] mx-auto mb-14 flex gap-4 items-center justify-center w-fit py-2 px-4 rounded-md text-center border border-[#746615] hover:scale-110 transition-all"
        >
            ${date} <span class="uppercase text-sm text-[#e1e1e6]">${day}</span>
        </h2>
        <ul
            class="flex flex-col w-[270px] gap-6"
        >
            ${games}
        </ul>
    </div>
`)

document.querySelector("#cards").innerHTML =
    createCard('24/11', 'quinta',
        createGame('brasil', '16:00', 'serbia') +
        createGame('brasil', '16:00', 'serbia')
    )+
    createCard('26/11', 'segunda',
        createGame('serbia', '16:00', 'brasil')
    )+
    createCard('28/11', 'sexta',
        createGame('brasil', '16:00', 'serbia'))


