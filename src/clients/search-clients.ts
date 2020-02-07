

export async function getQuote(symbol:string[]):Promise<string>{
    const response = await fetch(`https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-quotes?region=US&lang=en&symbols=${symbol}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
            "x-rapidapi-key": "f0bdcfb3damshc7bddda589ae07cp15ebdajsnfc95147db5b5"
        }
    })
    const body = response.json();
    console.log(body);

    return body;
}