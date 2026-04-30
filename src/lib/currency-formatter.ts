

export const currencyFormatter =  ( value:number) => {
    
    return value.toLocaleString('es-MX',{
        style:'currency',
        currency:'MXN',
        maximumFractionDigits:2
    })
};