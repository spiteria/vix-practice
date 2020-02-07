import React from 'react'

interface IVIXSearchState{
    ticker: string
}



export class SearchComponent extends React.Component<IVIXSearchState>{
    constructor(props:any){
        super(props)

    }
    
    render(){
        return(
            <div>
                <p>
                <input type="text" name="tickerInput" id="ticker">Ticker Symbol</input>
                </p>
            </div>
        )
    }
}