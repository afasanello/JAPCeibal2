let getJSONData = async function(url){
    let respuesta = await fetch(url);
    let datos = await respuesta.json();
    return datos;
}

let getDataList = function(url) {
    getJSONData(url)
    .then(obj => {
        let content1 = ``;
        let content2 = ``;
        let table1 = document.getElementById('infoTBody');
        let table2 = document.getElementById('info2TBody');
        for(let i = 0; i < obj.length; i++){
            content1 += `<tr>
                            <td>${obj[i].WHO}</td>
                            <td>
                                <table class="details">
                                    <thead>
                                        <tr>
                                            <th>Week</th>
                                            <th>Products</th>
                                        </tr>
                                    </thead>
                                    <tbody>`;

            for(let j = 0; j < obj[i].WEEK.length; j++){
                content1 += `<tr>
                                <td>${obj[i].WEEK[j].NUMBER}</td>
                                <td class="list"><ul>`;
                for(let k = 0; k < obj[i].WEEK[j].EXPENSE.length; k++){
                    content1 += `<li>${obj[i].WEEK[j].EXPENSE[k].AMOUNT}x ${obj[i].WEEK[j].EXPENSE[k].WHAT}`;
                    content2 += `
                    <tr>
                        <td>${obj[i].WHO}</td>
                        <td>${obj[i].WEEK[j].NUMBER}</td>
                        <td>${obj[i].WEEK[j].EXPENSE[k].WHAT}</td>
                        <td>${obj[i].WEEK[j].EXPENSE[k].AMOUNT}</td>
                    </tr>
                    `;
                }
                content1 += `</ul></td></tr>`;
            }
            content1 += `</td></tr></tbody></table>`
        }
        table1.innerHTML = content1;
        table2.innerHTML = content2;
    });
}



document.addEventListener('DOMContentLoaded', getDataList('https://afasanello.github.io/jsonJAP/ceibal2.json'));