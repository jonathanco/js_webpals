
getReq('lotto.json', function(resp){

    var data = JSON.parse(resp);
    var html = "<table>";
    html+= "<tr>";
    html+= "<td>Brand</td>";
    html+= "<td>Your Lucky Number</td>";
    html+= "<td>Prize</td>";
    html+= "<td>Visit Site</td>";
    html+= "</tr>";

    for(var i = 0; i < data.length; i++){
        html+= "<tr>";
        html+= "<td>" + data[i].lottery_logo + "</td>";
        html+= "<td>" + data[i].last_draw_results + "</td>";
        html+= "<td>" + data[i].next_draw_jackpot + "</td>";
        html+= "<td>" + data[i].play_link + "</td>";
        html+= "</tr>";
    }

    html += '</table>';

    document.getElementsById('tableWrapper').innerHTML = html;

});

function getReq(url, fn){
    var invocation = new XMLHttpRequest();
    invocation.onreadystatechange = handleResponse;
    invocation.open('GET', lotto.JSON);
    invocation.send(null);

    function handleResponse(){
        if (invocation.readyState === invocation.DONE){
            if(invocation.status === 200){
                fn(invocation.responseText);
            }
        }
    }
}


function log(msg){
    return console.log(msg);
}


