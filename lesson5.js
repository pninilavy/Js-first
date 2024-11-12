for (let i = 0; i < catalog.length; i++) {
    catalog[i]["id"] = i + 100;
}
console.log(catalog);

let countries=catalog.map(item=>item.country);
let countries1=countries.filter((item,index,arr)=>!arr.includes(item,index+1))
countries1=countries1.sort();
for(let i=0;i<countries1.length;i++)
{
    document.querySelector("#countries").innerHTML+="<option>"+countries1[i]+"</option>"
}
function f1(){
    let name1 = document.querySelector("#name").value;
    const catalog1 = catalog.filter(x => x.title.includes(name1));
    f4(catalog1)
}


function f2(){
    let country=document.querySelector("#countries").value;
    let disks=catalog.filter(item=>item.country===country)
    for(let i=0;i<disks.length;i++)
    {
        document.querySelector("#bycountry").innerHTML+=i+1+". "+catalog[i].title+"<br>";
    }
}

function f3(){
    let from=document.querySelector("#from").value;
    let till=document.querySelector("#till").value;
    let disk1=catalog.find(item=>item.year>=from&&item.year<=till);
    document.querySelector("#byyears").innerHTML=disk1.title
}
const f4=(c)=>{
    const t=c.map(item=>`<tr>
        <td>${item.title}</td>
        <td>${item.company}</td>
        <td>${item.country}</td>
        <td>${item.id}</td>
        <td>${item.price}</td>
        <td>${item.artist}</td>
        <td>${item.year}</td>
    </tr>`)
        document.querySelector("#table1").innerHTML+=t.join('');
    
}
const f5=()=>{
    let id1=document.querySelector("#id").value;
    let price1=document.querySelector("#price").value;
    let artist1=document.querySelector("#artist").value;
    let country1=document.querySelector("#country").value;
    let title1=document.querySelector("#title").value;
    let year1=document.querySelector("#year").value;
    let company1=document.querySelector("#company").value;
    catalog.push({title:title1,country:country1,id:id1,price:price1,year:year1,company:company1,artist:artist1});
    console.log(catalog)
    f4(catalog);

}
const f6=()=>
{
    let id=document.querySelector("#remove").value;
    let ind =catalog.findIndex((item,index)=>item.id==id)
    catalog.splice(ind,1);
    f4(catalog)
}



const names=['Alice','Bob','Tiff','Bruce','Alice']
const obj1=names.reduce((prev,cur)=>{
    if(!prev[cur])
        prev[cur]=0;
    prev[cur]++;
    return prev;},{})
console.log(obj1);



const letters=['a','b','a','b','c','e','e','c','d','d','d','d'];
let arr=letters.reduce((prev,cur)=>{
    if(!prev.includes(cur))
        prev.push(cur)
    return prev;},[]
)
console.log(arr)

const numbers=[-5,25,-19,0,16,0];
let arr2=numbers.reduce((prev,cur)=>{
    if(cur>0)
        prev.push(Math.sqrt(cur))
    return prev;
},[])
console.log(arr2)