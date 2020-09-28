import React from 'react';

export default function CurrencyRow({currencyOptions, selectedCurrency, onChangeCurrency, amount, onChangeAmount}){
    return (
        <div>
            <input type="number" className="input" value={amount} onChange={onChangeAmount}/>
            <select name="" id="" value={selectedCurrency} onChange={onChangeCurrency}>
                {currencyOptions.map(option => <option value={option} key={option}>{option}</option>)}
            </select>
        </div>
    )
}

