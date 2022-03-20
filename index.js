const TelegramBotApi = require('node-telegram-bot-api')

const token = '5192778384:AAHMwAp50_rZkJMDq9uVlyyFaWb2iULw4vk'

const bot = new TelegramBotApi(token, {polling: true})
const users = require('./users.json')

setInterval(() => {
    require('fs').writeFileSync('./users.json', JSON.stringify(users, null, '\t'))
}, 8000)


bot.on('message', msg => {
    var user = users.filter(x => x.id === msg.from.id)[0]
    if(!user){
        users.push({
            id: msg.from.id,
            nick: msg.from.username,
            text: msg.text,
            status: 'Пользовотель',
            balance: 5000,
            bank: 0,
            bitkoin: 0,
            bitkoinUser: 0,
            gameGamed: 0,
            car: 'У вас нету машины', 
            bicnec: 'У вас нету бизнеса',
            ferm: 'У вас нету фермы',
            userFermActive: false,

        })
        user = users.filter(x => x.id === msg.from.id)[0]
    }
})


const gameKeyboard = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: '🙊 Общение ', callback_data:`sendMessagee`}, {text: '🏸Игры', callback_data:`games`}],
            [{text: '🚦 Поддержка', callback_data:`help`}]
        ]
    })
}

const sendMessagee = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'Привет 👋🏻', callback_data:"1",}, {text: 'Как дела? 🤔', callback_data:`2`}],
            [{text: 'Давай познакомимся 🥰', callback_data:`3`}, {text: 'Давай дружить 🤫', callback_data:`4`}],
            [{text: 'Как тебя зовут 🥸', callback_data:`5`}],
        ]
    })
}

const verigood = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'Тоже нормально вроде', callback_data:"veri",}, {text: 'Хреново....', callback_data:`notveri`}],
        ]
    })
}

const whyLoveMe = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'Просто...)', callback_data:"yes",}, {text: 'Мне скучьно...', callback_data:`no`}],
        ]
    })
}


const noOrElse = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'Да....', callback_data:"soYes",}, {text: 'Нет конечно!', callback_data:`soNo`}],
        ]
    })
}


const gameKeyboar = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'Ваш игровой, профиль 💬', callback_data:"gameProfile",}, {text: 'Ваше имущество 💼', callback_data:`youSuperCar`}],
            [{text: 'Ваша информация ❓', callback_data:"personInfo",}, {text: 'Играть в игры 🏓', callback_data:`startGame`}],

        ]
    })
}

bot.setMyCommands([
    {command: 'start', description:'Информация'}
])




bot.on('message', msg =>{

    const user = users.filter(x => x.id == msg.from.id)[0]
    
    const chatId = msg.chat.id
    const text = msg.text

    car1 = 100
    car2 = 180
    car3 = 500
    car4 = 500000
    car5 = 90000000
    car6 = 10000000
    car7 = 25000000
    car8 = 40000000
    car9 = 60000000
    car10 = 90000000
    car11 = 140000000
    car12 = 2000000000
    car13 = 6000000000
    car13 = 9000000000
    car14 = 10000000000
    car15 = 20000000000
    car16 = 30000000000
    car17 = 40000000000
    car18 = 50000000000
    car19 = 60000000000
    car20 = 9000000000000
    car21 = 100000000000000
    car22 = 200000000000000
    car23 = 40000000000000000
    car24 = 500000000000000000
    car25 = 600000000000000000
    car26 = 900000000000000000

    console.log(text, chatId)

    
    if(text === '/start'){
        bot.sendMessage(chatId, '😃Привет, я Джуди рад знакомству. Давай будем проводить время вместе у меня есть много игр, но знаеш в них кое чего не хватает. Верно тебя!😋', gameKeyboard)

    }
    if(text === '/cliker'){
        const user = users.filter(x => x.id == msg.from.id)[0]
        bot.sendMessage(chatId, `😇 Клик + 1 ваш баланс: ${++user.balance} 😚`)
    }
    if(text === 'Машины'){
        const user = users.filter(x => x.id == msg.from.id)[0]
        bot.sendMessage(chatId, `${user.nick}, доступные машины:
        🚗 1. Самокат - ${car1}$
        🚗 2. Велосипед - ${car2}$
        🚗 3. Гироскутер - ${car3}$
        🚗 4. Сегвей - ${car4}$
        🚗 5. Мопед - ${car5}$
        🚗 6. Мотоцикл - ${car6}$
        🚗 7. ВАЗ 2109 - ${car7}$
        🚗 8. Квадроцикл - ${car8}$
        🚗 9. Багги - ${car9}$
        🚗 10. Вездеход - ${car10}$
        🚗 11. Лада Xray - ${car11}$
        🚗 12. Audi Q7 - ${car12}$
        🚗 13. BMW X6 - ${car13}$
        🚗 14. Toyota FT-HS - ${car14}$
        🚗 15. BMW Z4 M - ${car15}$
        🚗 16. Subaru WRX STI - ${car16}$
        🚗 17. Lamborghini Veneno - ${car17}$
        🚗 18. Tesla Roadster - ${car18}$
        🚗 19. Yamaha YZF R6 - ${car19}$
        🚗 20. Bugatti Chiron - ${car20}$
        🚗 21. Thrust SSC - ${car21}$
        🚗 22. Ferrari LaFerrari - ${car22}$
        🚗 23. Koenigsegg Regear - ${car23}$
        🚗 24. Tesla Semi - ${car24}$
        🚗 25. Venom GT - ${car25}$
        🚗 26. Rolls-Royce - ${car26}$

🛒 Для покупки введите: Купить машину (номер)
        `)
    }

    ferm1 = 500000
    ferm2 = 60000000
    ferm3 = 650000000
    ferm4 = 80000000000
    ferm5 = 750000000000

    
    fermName1 = "TI-Miner"
    fermName2 = "Saturn"
    fermName3 = "Calisto"
    fermName4 = "HashMiner"
    fermName5 = "MegaWatt"

    if(text === `Фермы`){
        const user = users.filter(x => x.id == msg.from.id)[0]
        bot.sendMessage(chatId, `
        Доступные для покупки майнинг фермы: 
        🧰 1. ${fermName1} 1฿/час (${ferm1}$)
        🧰 2. ${fermName2} 3฿/час (${ferm2}$)
        🧰 3. ${fermName3} 24฿/час (${ferm3}$)
        🧰 4. ${fermName4} 450฿/час (${ferm4}$)
        🧰 5. ${fermName5} 3.000฿/час (${ferm5}$)
        
🛒 Для покупки фермы введите "Купить ферму [номер]"
❗️   Предупреждаем ферма актива только когда вы в сети 
узанть подробно Ферма инфо ❗️
❗️   Как из баланса получить биткоин пишите Ферма снять
❗️   Просмотр баланса для обмена биткоинов Баланс биткоина
`)
    } 
    

    if(text === `Ферма инфо`){
        const user = users.filter(x => x.id == msg.from.id)[0]
        bot.sendMessage(chatId, `Ифнормация о ферме изначяльно планироволось делать её в реал ливе то есть что бы не зависимо от того что пользовотель в сети или нет или без разницы но мы учли опыт который набил себе бот BFG и поняли что если сделать так и биткоины будут копица всегда то есть без разницы активен юзер или нет то будет очень огромные так называемые траблы в самой структуре и в базе данных по этому мы сделали логику такую. Что только когда пользвотель пишет 1-дно слово то начинается отчет от 1-го часа то есть если вы пиште что то в любом чате что угодно где есть этот бот то у вас будет копица тот же биткоин но если вы не пишите то нечего не копится думаю логика понятна если чтото не понятно пишите в поддержку`)
    } 

    bitkoinRequery1 = 100
    bitkoinRequery2 = 500
    bitkoinRequery3 = 1000
    bitkoinRequery4 = 5000


    bitkoinSale1 = 1
    bitkoinSale2 = 3
    bitkoinSale3 = 5
    bitkoinSale4 = 8

    if(text === `Ферма снять`){
        const user = users.filter(x => x.id == msg.from.id)[0]
        bot.sendMessage(chatId, `Что бы снять баланс который накопился на ферме вам надо написать: 
                    {Снять баланс ${bitkoinRequery1}} = ${bitkoinSale1}฿
                    {Снять баланс ${bitkoinRequery2}} = ${bitkoinSale2}฿
                    {Снять баланс ${bitkoinRequery3}} = ${bitkoinSale3}฿
                    {Снять баланс ${bitkoinRequery4}} = ${bitkoinSale4}฿
Курс биткоина вы можете посмотреть по подсказке Курс биткоина
        `)
    } 

    if(text === `Курс биткоина`){
        bot.sendMessage(chatId, 'Данная функция времено не доступна или её ещё не сделали напишите @PythonPygame< Мало ли он забыл )')
    }

    if(text === `Баланс биткоина`){
        bot.sendMessage(chatId, `Ваш баланс на обмен биткоинов ${user.bitkoinUser}`)
    }

    if(text === `Снять баланс ${bitkoinRequery1}`){
        const user = users.filter(x => x.id == msg.from.id)[0]
        if(bitkoinRequery1 < user.bitkoinUser){
            bot.sendMessage(chatId, `Вы успешно продали баланс на биткоин вы купили ${bitkoinSale1}฿`)
            user.bitkoinUser -= bitkoinRequery1
            user.bitkoin += bitkoinSale1
        }
        else{
            bot.sendMessage(chatId, `Вы не смогли продать баланс на биткоин так как ваш баланс равен : ${user.bitkoinUser}`)

        }
        
    }
    if(text === `Снять баланс ${bitkoinRequery2}`){
        const user = users.filter(x => x.id == msg.from.id)[0]
        if(bitkoinRequery2 < user.bitkoinUser){
            bot.sendMessage(chatId, `Вы успешно продали баланс на биткоин вы купили ${bitkoinSale2}฿`)
            user.bitkoinUser -= bitkoinRequery2
            user.bitkoin += bitkoinSale2
        }
        else{
            bot.sendMessage(chatId, `Вы не смогли продать баланс на биткоин так как ваш баланс равен : ${user.bitkoinUser}`)

        }
        
    }
    if(text === `Снять баланс ${bitkoinRequery3}`){
        const user = users.filter(x => x.id == msg.from.id)[0]
        if(bitkoinRequery3 < user.bitkoinUser){
            bot.sendMessage(chatId, `Вы успешно продали баланс на биткоин вы купили ${bitkoinSale3}฿`)
            user.bitkoinUser -= bitkoinRequery3
            user.bitkoin += bitkoinSale3
        }
        else{
            bot.sendMessage(chatId, `Вы не смогли продать баланс на биткоин так как ваш баланс равен : ${user.bitkoinUser}`)

        }
        
    }
    if(text === `Снять баланс ${bitkoinRequery4}`){
        const user = users.filter(x => x.id == msg.from.id)[0]
        if(bitkoinRequery4 < user.bitkoinUser){
            bot.sendMessage(chatId, `Вы успешно продали баланс на биткоин вы купили ${bitkoinSale4}฿`)
            user.bitkoinUser -= bitkoinRequery4
            user.bitkoin += bitkoinSale4
        }
        else{
            bot.sendMessage(chatId, `Вы не смогли продать баланс на биткоин так как ваш баланс равен : ${user.bitkoinUser}`)

        }
        
    }

    bankSale1 = 100
    bankSale2 = 500
    bankSale3 = 1000
    bankSale4 = 5000

    if(text === `Банк`){
        const user = users.filter(x => x.id == msg.from.id)[0]
        bot.sendMessage(chatId, `🏦 Информация про банк! 
🤑 Положить деньги в банк можно командой Банк класть
🤑 Снять можно командой Банк снять`)
    }

    if(text === `Банк класть`){
        const user = users.filter(x => x.id == msg.from.id)[0]
        bot.sendMessage(chatId, `
💰 Положить в банк ${bankSale1}
💰 Положить в банк ${bankSale2}
💰 Положить в банк ${bankSale3}
💰 Положить в банк ${bankSale4}`)
    }

    if(text === `Банк снять`){
        const user = users.filter(x => x.id == msg.from.id)[0]
        bot.sendMessage(chatId, `
💰 Снять с банка ${bankSale1}
💰 Снять с банка ${bankSale2}
💰 Снять с банка ${bankSale3}
💰 Снять с банка ${bankSale4}`)
    }
    

    if(text === `Снять с банка ${bankSale1}`){
        const user = users.filter(x => x.id == msg.from.id)[0]
        if(bankSale1 < user.bank ){
            bot.sendMessage(chatId, `🤑 Вы успешно сняли с банка ${bankSale1}`)
            user.bank -= bankSale1
            user.balance += bankSale1
        }else{
            bot.sendMessage(chatId, '🥲 Вы не смогли снять с банка вашу сумму так как у вас её нету.')
        }
    }
    if(text === `Снять с банка ${bankSale2}`){
        const user = users.filter(x => x.id == msg.from.id)[0]
        if(bankSale2 < user.bank ){
            bot.sendMessage(chatId, `🤑 Вы успешно сняли с банка ${bankSale2}`)
            user.bank -= bankSale2
            user.balance += bankSale2
        }else{
            bot.sendMessage(chatId, '🥲 Вы не смогли снять с банка вашу сумму так как у вас её нету.')
        }
    }
    if(text === `Снять с банка ${bankSale3}`){
        const user = users.filter(x => x.id == msg.from.id)[0]
        if(bankSale3 < user.bank ){
            bot.sendMessage(chatId, `🤑 Вы успешно сняли с банка ${bankSale3}`)
            user.bank -= bankSale3
            user.balance += bankSale3
        }else{
            bot.sendMessage(chatId, '🥲 Вы не смогли снять с банка вашу сумму так как у вас её нету.')
        }
    }
    if(text === `Снять с банка ${bankSale4}`){
        const user = users.filter(x => x.id == msg.from.id)[0]
        if(bankSale4 < user.bank ){
            bot.sendMessage(chatId, `🤑 Вы успешно сняли с банка ${bankSale4}`)
            user.bank -= bankSale4
            user.balance += bankSale4
        }else{
            bot.sendMessage(chatId, '🥲 Вы не смогли снять с банка вашу сумму так как у вас её нету.')
        }
    }

    if(text === `Положить в банк ${bankSale1}`){
        const user = users.filter(x => x.id == msg.from.id)[0]
        if(user.balance > bankSale1){
            bot.sendMessage(chatId, `🤑 Вы успешно положили в банк ${bankSale1}`)
            user.balance -= bankSale1
            user.bank += bankSale1
        }else{
            bot.sendMessage(chatId, '🥲 Вы не смогли положить сумму в банк так как у вас её нету.')
        }
    }
        
    if(text === `Положить в банк ${bankSale2}`){
        const user = users.filter(x => x.id == msg.from.id)[0]
        if(user.balance > bankSale2){
            bot.sendMessage(chatId, `🤑 Вы успешно положили в банк ${bankSale2}`)
            user.balance -= bankSale2
            user.bank += bankSale2
        }else{
            bot.sendMessage(chatId, '🥲 Вы не смогли положить сумму в банк так как у вас её нету.')
        }
    }
        
    if(text === `Положить в банк ${bankSale3}`){
        const user = users.filter(x => x.id == msg.from.id)[0]
        if(user.balance > bankSale3){
            bot.sendMessage(chatId, `🤑 Вы успешно положили в банк ${bankSale3}`)
            user.balance -= bankSale3
            user.bank += bankSale3
        }else{
            bot.sendMessage(chatId, '🥲 Вы не смогли положить сумму в банк так как у вас её нету.')
        }
    }
        
    if(text === `Положить в банк ${bankSale4}`){
        const user = users.filter(x => x.id == msg.from.id)[0]
        if(user.balance > bankSale4){
            bot.sendMessage(chatId, `🤑 Вы успешно положили в банк ${bankSale4}`)
            user.balance -= bankSale4
            user.bank += bankSale4
        }else{
            bot.sendMessage(chatId, '🥲 Вы не смогли положить сумму в банк так как у вас её нету.')
        }
    }


    if(text === `Купить ферму 1`){
        const user = users.filter(x => x.id == msg.from.id)[0]
        if(ferm1 < user.balance){
            bot.sendMessage(chatId, `🤑 Вы успешно преобрели себе ферму ${fermName1} ваш даход в час 1฿`)
            user.balance -= ferm1
            user.ferm = fermName1
            user.userFermActive = true
        }
        else{
            bot.sendMessage(chatId, `Вы не смогли купить ферму так как ваш баланс = ${user.balance}`)
        }
    }

    if(text === `Купить ферму 2`){
        const user = users.filter(x => x.id == msg.from.id)[0]
        if(ferm2 < user.balance){
            bot.sendMessage(chatId, `🤑 Вы успешно преобрели себе ферму ${fermName2} ваш даход в час 1฿`)
            user.balance -= ferm2
            user.ferm = fermName2
            user.userFermActive = true
        }
        else{
            bot.sendMessage(chatId, `Вы не смогли купить ферму так как ваш баланс = ${user.balance}`)
        }
    }
    
    if(text === `Купить ферму 3`){
        const user = users.filter(x => x.id == msg.from.id)[0]
        if(ferm3 < user.balance){
            bot.sendMessage(chatId, `🤑 Вы успешно преобрели себе ферму ${fermName3} ваш даход в час 1฿`)
            user.balance -= ferm3
            user.ferm = fermName3
            user.userFermActive = true
        }
        else{
            bot.sendMessage(chatId, `Вы не смогли купить ферму так как ваш баланс = ${user.balance}`)
        }
    }
    
    if(text === `Купить ферму 4`){
        const user = users.filter(x => x.id == msg.from.id)[0]
        if(ferm1 < user.balance){
            bot.sendMessage(chatId, `🤑 Вы успешно преобрели себе ферму ${fermName4} ваш даход в час 1฿`)
            user.balance -= ferm4
            user.ferm = fermName4
            user.userFermActive = true
        }
        else{
            bot.sendMessage(chatId, `Вы не смогли купить ферму так как ваш баланс = ${user.balance}`)
        }
    }
    if(text === `Купить ферму 5`){
        const user = users.filter(x => x.id == msg.from.id)[0]
        if(fermName5 < user.balance){
            bot.sendMessage(chatId, `🤑 Вы успешно преобрели себе ферму ${fermName5} ваш даход в час 1฿`)
            user.balance -= ferm5
            user.ferm = fermName5
            user.userFermActive = true
        }
        else{
            bot.sendMessage(chatId, `Вы не смогли купить ферму так как ваш баланс = ${user.balance}`)
        }
    }
    if(user.userFermActive === true){
        const user = users.filter(x => x.id == msg.from.id)[0]
       if(user.ferm === fermName5){
            const user = users.filter(x => x.id == msg.from.id)[0]
            setTimeout(function(){user.bitkoinUser += 10000}, 1000)
       }
    }
    if(user.userFermActive === true){
        const user = users.filter(x => x.id == msg.from.id)[0]
       if(user.ferm === fermName4){
            const user = users.filter(x => x.id == msg.from.id)[0]
            setTimeout(function(){user.bitkoinUser += 5000}, 1000)
       }
    }
    if(user.userFermActive === true){
        const user = users.filter(x => x.id == msg.from.id)[0]
       if(user.ferm === fermName3){
            const user = users.filter(x => x.id == msg.from.id)[0]
            setTimeout(function(){user.bitkoinUser += 1000}, 1000)
       }
    }
    if(user.userFermActive === true){
        const user = users.filter(x => x.id == msg.from.id)[0]
       if(user.ferm === fermName2){
            const user = users.filter(x => x.id == msg.from.id)[0]
            setTimeout(function(){user.bitkoinUser += 600}, 1000)
       }
    }
    if(user.userFermActive === true){
        const user = users.filter(x => x.id == msg.from.id)[0]
       if(user.ferm === fermName1){
            const user = users.filter(x => x.id == msg.from.id)[0]
            setTimeout(function(){user.bitkoinUser += 100}, 1000)
       }
    }
    
    if(text === `Купить машину 1`){
        const user = users.filter(x => x.id == msg.from.id)[0]
        if(car1 < user.balance){
            bot.sendMessage(chatId, `🚗 Вы успешно купили машину за ${car1}$`)
            user.car = 'Самокат'
            user.balance -= car1
        }
        else{
            bot.sendMessage(chatId, `Вы не смогли купить машину так как ваш баланс = ${user.balance}`)
        }
    }
    if(text === `Купить машину 1`){
        const user = users.filter(x => x.id == msg.from.id)[0]
        if(car1 < user.balance){
            bot.sendMessage(chatId, `🚗 Вы успешно купили машину за ${car1}$`)
            user.car = 'Самокат'
            user.balance -= car1
        }
        else{
            bot.sendMessage(chatId, `Вы не смогли купить машину так как ваш баланс = ${user.balance}`)
        }
    }
    if(text === `Купить машину 2`){
        const user = users.filter(x => x.id == msg.from.id)[0]
        if(car2 < user.balance){
            bot.sendMessage(chatId, `🚗 Вы успешно купили машину за ${car2}$`)
            user.car = 'Велосипед'
            user.balance -= car2
        }
        else{
            bot.sendMessage(chatId, `Вы не смогли купить машину так как ваш баланс = ${user.balance}`)
        }
    }
    if(text === `Купить машину 3`){
        const user = users.filter(x => x.id == msg.from.id)[0]
        if(car3 < user.balance){
            bot.sendMessage(chatId, `🚗 Вы успешно купили машину за ${car3}$`)
            user.car = 'Гироскутер'
            user.balance -= car3
        }
        else{
            bot.sendMessage(chatId, `Вы не смогли купить машину так как ваш баланс = ${user.balance}`)
        }
    }
    if(text === `Купить машину 4`){
        const user = users.filter(x => x.id == msg.from.id)[0]
        if(car4 < user.balance){
            bot.sendMessage(chatId, `🚗 Вы успешно купили машину за ${car4}$`)
            user.car = 'Сегвей'
            user.balance -= car4
        }
        else{
            bot.sendMessage(chatId, `Вы не смогли купить машину так как ваш баланс = ${user.balance}`)
        }
    }
    if(text === `Купить машину 5`){
        const user = users.filter(x => x.id == msg.from.id)[0]
        if(car5 < user.balance){
            bot.sendMessage(chatId, `🚗 Вы успешно купили машину за ${car5}$`)
            user.car = 'Мопед'
            user.balance -= car5
        }
        else{
            bot.sendMessage(chatId, `Вы не смогли купить машину так как ваш баланс = ${user.balance}`)
        }
    }
    if(text === `Купить машину 6`){
        const user = users.filter(x => x.id == msg.from.id)[0]
        if(car6 < user.balance){
            bot.sendMessage(chatId, `🚗 Вы успешно купили машину за ${car6}$`)
            user.car = 'Мотоцикл'
            user.balance -= car6
        }
        else{
            bot.sendMessage(chatId, `Вы не смогли купить машину так как ваш баланс = ${user.balance}`)
        }
    }
    if(text === `Купить машину 7`){
        const user = users.filter(x => x.id == msg.from.id)[0]
        if(car7 < user.balance){
            bot.sendMessage(chatId, `🚗 Вы успешно купили машину за ${car7}$`)
            user.car = 'ВАЗ 2109'
            user.balance -= car7
        }
        else{
            bot.sendMessage(chatId, `Вы не смогли купить машину так как ваш баланс = ${user.balance}`)
        }
    }
    if(text === `Купить машину 8`){
        const user = users.filter(x => x.id == msg.from.id)[0]
        if(car8 < user.balance){
            bot.sendMessage(chatId, `🚗 Вы успешно купили машину за ${car8}$`)
            user.car = 'Квадроцикл'
            user.balance -= car8
        }
        else{
            bot.sendMessage(chatId, `Вы не смогли купить машину так как ваш баланс = ${user.balance}`)
        }
    }
    if(text === `Купить машину 9`){
        const user = users.filter(x => x.id == msg.from.id)[0]
        if(car9 < user.balance){
            bot.sendMessage(chatId, `🚗 Вы успешно купили машину за ${car9}$`)
            user.car = 'Багги'
            user.balance -= car9
        }
        else{
            bot.sendMessage(chatId, `Вы не смогли купить машину так как ваш баланс = ${user.balance}`)
        }
    }
    if(text === `Купить машину 10`){
        const user = users.filter(x => x.id == msg.from.id)[0]
        if(car10 < user.balance){
            bot.sendMessage(chatId, `🚗 Вы успешно купили машину за ${car10}$`)
            user.car = 'Вездеход'
            user.balance -= car10
        }
        else{
            bot.sendMessage(chatId, `Вы не смогли купить машину так как ваш баланс = ${user.balance}`)
        }
    }
    if(text === `Купить машину 11`){
        const user = users.filter(x => x.id == msg.from.id)[0]
        if(car11 < user.balance){
            bot.sendMessage(chatId, `🚗 Вы успешно купили машину за ${car11}$`)
            user.car = 'Лада Xray'
            user.balance -= car11
        }
        else{
            bot.sendMessage(chatId, `Вы не смогли купить машину так как ваш баланс = ${user.balance}`)
        }
    }
    if(text === `Купить машину 12`){
        const user = users.filter(x => x.id == msg.from.id)[0]
        if(car12 < user.balance){
            bot.sendMessage(chatId, `🚗 Вы успешно купили машину за ${car12}$`)
            user.car = 'Audi Q7 '
            user.balance -= car12
        }
        else{
            bot.sendMessage(chatId, `Вы не смогли купить машину так как ваш баланс = ${user.balance}`)
        }
    }
    if(text === `Купить машину 13`){
        const user = users.filter(x => x.id == msg.from.id)[0]
        if(car13 < user.balance){
            bot.sendMessage(chatId, `🚗 Вы успешно купили машину за ${car13}$`)
            user.car = 'BMW X6 '
            user.balance -= car13
        }
        else{
            bot.sendMessage(chatId, `Вы не смогли купить машину так как ваш баланс = ${user.balance}`)
        }
    }
    if(text === `Купить машину 14`){
        const user = users.filter(x => x.id == msg.from.id)[0]
        if(car14 < user.balance){
            bot.sendMessage(chatId, `🚗 Вы успешно купили машину за ${car14}$`)
            user.car = 'Toyota FT-HS'
            user.balance -= car14
        }
        else{
            bot.sendMessage(chatId, `Вы не смогли купить машину так как ваш баланс = ${user.balance}`)
        }
    }
    if(text === `Купить машину 15`){
        const user = users.filter(x => x.id == msg.from.id)[0]
        if(car15 < user.balance){
            bot.sendMessage(chatId, `🚗 Вы успешно купили машину за ${car15}$`)
            user.car = 'BMW Z4 M'
            user.balance -= car15
        }
        else{
            bot.sendMessage(chatId, `Вы не смогли купить машину так как ваш баланс = ${user.balance}`)
        }
    }
    if(text === `Купить машину 16`){
        const user = users.filter(x => x.id == msg.from.id)[0]
        if(car16 < user.balance){
            bot.sendMessage(chatId, `🚗 Вы успешно купили машину за ${car16}$`)
            user.car = ' Subaru WRX STI '
            user.balance -= car16
        }
        else{
            bot.sendMessage(chatId, `Вы не смогли купить машину так как ваш баланс = ${user.balance}`)
        }
    }
    if(text === `Купить машину 17`){
        const user = users.filter(x => x.id == msg.from.id)[0]
        if(car17 < user.balance){
            bot.sendMessage(chatId, `🚗 Вы успешно купили машину за ${car17}$`)
            user.car = 'Lamborghini Veneno'
            user.balance -= car17
        }
        else{
            bot.sendMessage(chatId, `Вы не смогли купить машину так как ваш баланс = ${user.balance}`)
        }
    }
    if(text === `Купить машину 18`){
        const user = users.filter(x => x.id == msg.from.id)[0]
        if(car18 < user.balance){
            bot.sendMessage(chatId, `🚗 Вы успешно купили машину за ${car18}$`)
            user.car = 'Tesla Roadste'
            user.balance -= car18
        }
        else{
            bot.sendMessage(chatId, `Вы не смогли купить машину так как ваш баланс = ${user.balance}`)
        }
    }
    if(text === `Купить машину 19`){
        const user = users.filter(x => x.id == msg.from.id)[0]
        if(car19 < user.balance){
            bot.sendMessage(chatId, `🚗 Вы успешно купили машину за ${car19}$`)
            user.car = 'Yamaha YZF R6'
            user.balance -= car19
        }
        else{
            bot.sendMessage(chatId, `Вы не смогли купить машину так как ваш баланс = ${user.balance}`)
        }
    }
    if(text === `Купить машину 20`){
        const user = users.filter(x => x.id == msg.from.id)[0]
        if(car20 < user.balance){
            bot.sendMessage(chatId, `🚗 Вы успешно купили машину за ${car20}$`)
            user.car = 'Bugatti Chiron'
            user.balance -= car20
        }
        else{
            bot.sendMessage(chatId, `Вы не смогли купить машину так как ваш баланс = ${user.balance}`)
        }
    }
    if(text === `Купить машину 21`){
        const user = users.filter(x => x.id == msg.from.id)[0]
        if(car21 < user.balance){
            bot.sendMessage(chatId, `🚗 Вы успешно купили машину за ${car21}$`)
            user.car = 'Thrust SSC '
            user.balance -= car21
        }
        else{
            bot.sendMessage(chatId, `Вы не смогли купить машину так как ваш баланс = ${user.balance}`)
        }
    }
    if(text === `Купить машину 22`){
        const user = users.filter(x => x.id == msg.from.id)[0]
        if(car22 < user.balance){
            bot.sendMessage(chatId, `🚗 Вы успешно купили машину за ${car22}$`)
            user.car = 'Ferrari LaFerrari '
            user.balance -= car22
        }
        else{
            bot.sendMessage(chatId, `Вы не смогли купить машину так как ваш баланс = ${user.balance}`)
        }
    }
    if(text === `Купить машину 23`){
        const user = users.filter(x => x.id == msg.from.id)[0]
        if(car23 < user.balance){
            bot.sendMessage(chatId, `🚗 Вы успешно купили машину за ${car23}$`)
            user.car = 'Koenigsegg Regear'
            user.balance -= car23
        }
        else{
            bot.sendMessage(chatId, `Вы не смогли купить машину так как ваш баланс = ${user.balance}`)
        }
    }
    if(text === `Купить машину 24`){
        const user = users.filter(x => x.id == msg.from.id)[0]
        if(car24 < user.balance){
            bot.sendMessage(chatId, `🚗 Вы успешно купили машину за ${car24}$`)
            user.car = 'Tesla Semi '
            user.balance -= car24
        }
        else{
            bot.sendMessage(chatId, `Вы не смогли купить машину так как ваш баланс = ${user.balance}`)
        }
    }
    if(text === `Купить машину 25`){
        const user = users.filter(x => x.id == msg.from.id)[0]
        if(car25 < user.balance){
            bot.sendMessage(chatId, `🚗 Вы успешно купили машину за ${car25}$`)
            user.car = 'Venom GT'
            user.balance -= car25
        }
        else{
            bot.sendMessage(chatId, `Вы не смогли купить машину так как ваш баланс = ${user.balance}`)
        }
    }
    if(text === `Купить машину 26`){
        const user = users.filter(x => x.id == msg.from.id)[0]
        if(car26 < user.balance){
            bot.sendMessage(chatId, `🚗 Вы успешно купили машину за ${car26}$`)
            user.car = 'Rolls-Royce '
            user.balance -= car26
        }
        else{
            bot.sendMessage(chatId, `Вы не смогли купить машину так как ваш баланс = ${user.balance}`)
        }
    }


    if(text === `Баланс`){
        const user = users.filter(x => x.id == msg.from.id)[0]
        bot.sendMessage(chatId, `
        👫Ник: ${user.nick}
💰Деньги: ${user.balance}$
🏦Банк: ${user.bank}$
💽Биткоины: ${user.bitkoin}🌐`)
    }
    // bot.on('callback_query', msg => {})
    // bot.sendMessage(chatId2, `Давай поговорим 😚 \n Список команд ниже  `,)
    if(text === '/random'){
        const user = users.filter(x => x.id == msg.from.id)[0]
        bot.sendMessage(chatId, `В разботке.....`)
    }
})
bot.on('message', msg =>{

    const user = users.filter(x => x.id == msg.from.id)[0]
    
    const chatId = msg.chat.id
    const text = msg.text

    id = user.id

    console.log(msg)
    if(text === `/pay ${id}`){
        bot.sendMessage(chatId, '123')
    }
})


bot.on('callback_query', msg => {
    
    const chatId = msg.message.chat.id
    const data = msg.data

    if(data === 'sendMessagee'){
        const user = users.filter(x => x.id == msg.from.id)[0]

        bot.sendMessage(chatId, `Давай поговорим 😚 \n Список команд ниже 😇`, sendMessagee)

    }
    if(data === '1'){
        bot.sendMessage(chatId, 'Привет.... ☺️')

    }
    if(data === '2'){
        bot.sendMessage(chatId, 'Хорошо а у тебя? 🤔', verigood)

    }
    if(data === 'veri'){
        bot.sendMessage(chatId, 'Это же отлично! 😁' )

    }
    if(data === 'notveri'){
        bot.sendMessage(chatId, 'Это печяльно 😦')

    }
    if(data === '3'){
        bot.sendMessage(chatId, 'Да.... А с какой целью? 😳', whyLoveMe)

    }
    if(data === 'yes'){
        bot.sendMessage(chatId, 'Хорошо 😁')

    }    
    if(data === 'no'){
        bot.sendMessage(chatId, 'Ладно....')

    }


    if(data === '4'){
        bot.sendMessage(chatId, 'Давай! 😁')

    }    
    if(data === '5'){
        bot.sendMessage(chatId, 'Джуди... А ты забыл?( 😦', noOrElse)

    }

    if(data === 'soYes'){
        bot.sendMessage(chatId, 'Ясно..... 😨')

    }  

    if(data === 'soNo'){
        bot.sendMessage(chatId, 'Обожаю тебя! 😋')

    }  

    
})
bot.on('callback_query', msg => {
        
    const chatId = msg.message.chat.id
    const data = msg.data

    if(data === 'games'){
        bot.sendMessage(chatId, `Вам доступно.....`, gameKeyboar)
    }
    if(data === 'personInfo'){
        const user = users.filter(x => x.id == msg.from.id)[0]
        bot.sendMessage(chatId, `|Ваш статус 🛐: ${user.status} \n |Ваше первое сообщение ✏️: ${user.text} \n |Ваш ID в боте 🆔: ${user.id} \n |Ваше имя в боте 👨‍🦱: ${user.nick}`)
    }
    if(data === 'gameProfile'){
        const user = users.filter(x => x.id == msg.from.id)[0]
        bot.sendMessage(chatId, `💰Баланс: ${user.balance} \n 🏦 В банке: ${user.bank} \n 💽 Биткоины: ${user.bitkoin} \n 🎲 Сыграно игры: ${user.gameGamed}`)
    }
    if(data === 'youSuperCar'){
        const user = users.filter(x => x.id == msg.from.id)[0]
        bot.sendMessage(chatId, ` 🚗 Машина: ${user.car}\n 💼Бизнес: ${user.bicnec}\n 🔋Ферма: ${user.ferm}`)
    }
    if(data === 'startGame'){
        const user = users.filter(x => x.id == msg.from.id)[0]
        bot.sendMessage(chatId, ` 
👉🏻👾 Все доступные игры: /cliker 
👉🏻👾 Все доступные игры: /random
👉🏻👾 Все доступные игры: не доступно
👉🏻👾 Все доступные игры: не доступно
👉🏻👾 Все доступные игры: не доступно`)}

})





bot.on('callback_query', msg => {
    
    const chatId = msg.message.chat.id
    const data = msg.data
    const name = msg.message.chat.username

    console.log(msg)

    if(data === 'help'){
        bot.sendMessage(chatId,`${name}, Поддержка по боту и рекламные предложения к @PythonPygame 😋 `)
    }
})