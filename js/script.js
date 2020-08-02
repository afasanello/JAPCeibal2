let getJSONData = async function(url){
    let respuesta = await fetch(url);
    let datos = await respuesta.json();
    return datos;
}

let getDataList = function(url) {
    getJSONData(url)
    .then(obj => {
        let content = ``;
        let table = document.getElementById('infoTBody');
        for(let i = 0; i < obj.length; i++){
            content += `<tr>
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
                content += `<tr>
                                <td>${obj[i].WEEK[j].NUMBER}</td>
                                <td class="list"><ul>`;
                for(let k = 0; k < obj[i].WEEK[j].EXPENSE.length; k++){
                    content += `<li>${obj[i].WEEK[j].EXPENSE[k].AMOUNT}x ${obj[i].WEEK[j].EXPENSE[k].WHAT}`;
                }
                content += `</ul></td></tr>`;
            }
            content += `</td></tr></tbody></table>`
        }
        table.innerHTML = content;
    });
}

document.addEventListener('DOMContentLoaded', getDataList('https://afasanello.github.io/jsonJAP/ceibal2.json'));