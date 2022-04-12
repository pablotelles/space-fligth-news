export function handlerChangeOrder(ev, data, setData){
    let value = ev.target.value
        if(value === 'new'){
            let latest = data.sort((a,b) => {
                if(a.publishedAt > b.publishedAt){
                    return 1;
                }else {
                    return -1
                }
            })
            setData([...data], latest)
        }
        if(value === 'old'){
            let older = data.sort((a,b) => {
                if(a.publishedAt < b.publishedAt){
                    return 1;
                }else {
                    return -1
                }
            })
            setData([...data], older)
        }
    }