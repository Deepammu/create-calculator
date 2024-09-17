let os=document.getElementById('os')



 function Clear()
 {
 os.value="";
}

function del()
 {
     os.value=os.value.slice(0,-1);
 }

 function display(txt)
 {
    os.value=os.value+txt;
    console.log(os.value);
 }

 function Cube()
 {
    os.value=os.value*os.value*os.value;
 }

 function sqrt()
 {
    let x = Math.PI;
    let y = Math.sqrt(25);
    alert(`the sqrt of ${x,y}`);
 }

function area()
{
    let r=prompt('Enter the radius');
    let res=3.14*r*r;
    alert(`The area of circle is ${res}`);
 }

 function Diag()
{
    let d=prompt('Enter the diagonal');
    let res=math.sqrt((length * length) + (breadth * breadth));
     alert(`Length of diagonal:  + diagonal ${res}`);
 }

function calculate()
{
 os.value=eval(os.value);
 }