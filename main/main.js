async function getBitcoinPrice() {
    // Секция кода с биткоином
    const bitcoinName = 'bitcoin';
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=rub');
        if (!response.ok) {
            throw new Error('Сеть не в порядке, не удалось получить данные');
        }
        const data = await response.json();
        const bitcoinPrice = data.bitcoin.rub;
        document.getElementById('bitcoinLogo').innerHTML = `<img src="../img/free-icon-bitcoin-17111186.png"/></i>`;
        document.getElementById('bitcoin').innerHTML = `${bitcoinPrice}₽`;
        document.getElementById('bitcoinName').innerText = `${bitcoinName}`;
    } catch (error) {
        console.error('Ошибка:', error);
    }
}

getBitcoinPrice();

async function getEthereumPrice() {
    // Секция кода с эфириумом
    const ethereumName = 'ethereum';
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=rub');
        if (!response.ok) {
            throw new Error('Сеть не в порядке, не удалось получить данные');
        }
        const data = await response.json();
        const ethereumPrice = data.ethereum.rub;
        document.getElementById('ethereumLogo').innerHTML = `<img src="../img/free-icon-ethereum-symbol-15478213.png"/>`;
        document.getElementById('ethereum').innerHTML = `</i>${ethereumPrice}₽`;
        document.getElementById('ethereumName').innerText = `${ethereumName}`;
    } catch (error) {
        console.log('Ошибка', error);
    }
}

getEthereumPrice();

async function getAltcoinPrice() {
    // Секция кода с альткоином
    const altcoinName = 'altcoin';
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=altcoin&vs_currencies=rub');
        if (!response.ok) {
            throw new Error('Сеть не в порядке, не удалось получить данные');
        }
        const data = await response.json();
        const altcoinPrice = data.altcoin.rub;
        document.getElementById('altcoinLogo').innerHTML = `<img src="../img/free-icon-altcoins-12432686.png"/>`;
        document.getElementById('altcoin').innerHTML = `${altcoinPrice}₽`;
        document.getElementById('altcoinName').innerText = `${altcoinName}`;
    } catch (error) {
        console.log('Ошибка', error);
    }
}

getAltcoinPrice();

async function getCardanoPrice() {
    // Секция кода с кардано
    const cardanoName = 'cardano';
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=cardano&vs_currencies=rub');
        if (!response.ok) {
            throw new Error('Сеть не в порядке, не удалось получить данные');
        }
        const data = await response.json();
        const cardanoPrice = data.cardano.rub;
        document.getElementById('cardanoLogo').innerHTML = `<img src="../img/free-icon-cardano-7505085.png"/>`;
        document.getElementById('cardano').innerHTML = `${cardanoPrice}₽`;
        document.getElementById('cardanoName').innerText = `${cardanoName}`;
    } catch (error) {
        console.log('Ошибка', error);
    }
}

getCardanoPrice();


async function getdashPrice() {
    // Секция кода с dash
    const dashName = 'dash';
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=dash&vs_currencies=rub');
        if (!response.ok) {
            throw new Error('Сеть не в порядке, не удалось получить данные');
        }
        const data = await response.json();
        const dashPrice = data.dash.rub;
        document.getElementById('dashLogo').innerHTML = `<img src="../img/coins.png"/>`;
        document.getElementById('dash').innerHTML = `${dashPrice}₽`;
        document.getElementById('dashName').innerText = `${dashName}`;
    } catch (error) {
        console.log('Ошибка', error);
    }
}

getdashPrice();

async function getLitecoinPrice () {
    // Секция кода с лайткоином
    const litecoinName = 'litecoin';
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=litecoin&vs_currencies=rub');
        if (!response.ok) {
            throw new Error('Сеть не в порядке, не удалось получить данные');
        }
        const data = await response.json();
        const litecoinPrice = data.litecoin.rub;
        document.getElementById('litecoinLogo').innerHTML = `<img src="../img/litecoin.png"/>`;
        document.getElementById('litecoin').innerHTML = `${litecoinPrice}₽`;
        document.getElementById('litecoinName').innerText = `${litecoinName}`;
    } catch (error) {
        console.log('Ошибка', error);
    }
}

getLitecoinPrice();

async function getTetherPrice() {
    // Секция кода с tether
    const tetherName = 'tether';
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=tether&vs_currencies=rub');
        if (!response.ok) {
            throw new Error('Сеть не в порядке, не удалось получить данные');
        }
        const data = await response.json();
        const tetherPrice = data.tether.rub;
        document.getElementById('tetherLogo').innerHTML = `<img src="../img/litecoin.png"/>`;
        document.getElementById('tether').innerHTML = `${tetherPrice}₽`;
        document.getElementById('tetherName').innerText = `${tetherName}`;
    } catch (error) {
        console.log('Ошибка', error);
    }
}
getTetherPrice();
