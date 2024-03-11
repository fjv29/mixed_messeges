const wealth = ['be richer than Elon Musk.','be richer than Elon Musk.', 'be a millionaire.','be a millionaire.', 'end up with just enough money to retire.', 'will die with no money.', 'will be poor your entire life.','be broke', 'will die with no money.', 'will be poor your entire life.','be broke', 'will die with no money.', 'will be poor your entire life.','be broke', 'will die with no money.', 'will be poor your entire life.','be broke', 'will die with no money.', 'will be poor your entire life.','be broke', 'will die with no money.', 'will be poor your entire life.','be broke'];
const love = ['meet the love of your life and live happily ever after.', 'meet a great partner and live a happy life.', 'die alone.', 'have lots of trouble finding love.','meet the love of your life and live happily ever after.', 'meet a great partner and live a happy life.', 'die alone.', 'have lots of trouble finding love.','meet the love of your life and live happily ever after.', 'meet a great partner and live a happy life.', 'die alone.', 'have lots of trouble finding love.','meet the love of your life and live happily ever after.', 'meet a great partner and live a happy life.', 'die alone.', 'have lots of trouble finding love.'];

const predictFuture = () => {
    let wealthStatus = wealth[Math.floor(Math.random()* wealth.length)];
    let loveStatus = love[Math.floor(Math.random()* love.length)];
    let deathAge = [Math.floor(Math.random()* 50) + 40];
    console.log(`I will tell you your fortune. To start off financially you will ${wealthStatus} When it comes to your love life you will ${loveStatus} Last you will live until you are ${deathAge}.`)
};

predictFuture();
