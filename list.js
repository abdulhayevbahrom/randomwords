const tbody = document.querySelector('tbody')

let EngLocal = JSON.parse(localStorage.getItem("eng_words"));
let UzbLocal = JSON.parse(localStorage.getItem("uzb_words"));

function table (eng, uzb){
    for (let i = 1; i <= eng.length; i++) {
        console.log(eng[i-1]);

        let tr = document.createElement('tr')
        let tdindex = document.createElement('td')
        let tdEng = document.createElement('td')
        let tdUzb = document.createElement('td')
        tdindex.innerHTML = i
        tdEng.innerHTML = eng[i-1]
        tdUzb.innerHTML = uzb[i-1]
        tr.append(tdindex)
        tr.append(tdEng)
        tr.append(tdUzb)
        tbody.append(tr)
        console.log(tbody);
        
    }
}

table(EngLocal, UzbLocal)