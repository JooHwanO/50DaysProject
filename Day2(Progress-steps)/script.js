const progress= document.getElementById("progress");
const prev = document.getElementById("prev");
const next= document.getElementById("next");
const circle = document.querySelectorAll(".circle");

let currentActive=1;

next.addEventListener('click',()=>
{
    currentActive++
    if(currentActive >circle.length)
    {
        currentActive =circle.length
    }
    update();

})

prev.addEventListener('click',()=>
{
    currentActive--
    if(currentActive<1) //눌렀을때 currentActive가 1보다 작으면 1로 고정
    {
        currentActive=1
    }
    update();
})

function update()
{
    circle.forEach((circle,idx)=> //두번째는 위치값
    {
        //idx 값은 circle을 모두순회하므로 0, 1, 2, 3이 된다.
        //current는 클릭한 횟수이다. 
        if(idx + 1 <= currentActive)  //위치가 currentActive보다 작으면 active로 
        {
            circle.classList.add('active');
        }
        else{
            circle.classList.remove('active')
        }
    })

    const actives= document.querySelectorAll('.active');
    
    progress.style.width = (actives.length-1) /(circle.length-1)*100 +'%' 

    if(currentActive===1)
    {
        prev.disabled=true;

    }
    else if(currentActive===circle.length) //circle.length= 4 
    {
        next.disabled=true;
    }
    else{
        next.disabled=false;
        prev.disabled=false;
    }

}

