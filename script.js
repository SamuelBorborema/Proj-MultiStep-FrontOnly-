const h1Steps = document.querySelectorAll('#h1-toggle');
const next = document.querySelector('#Next');
const Back = document.querySelector('#Back');
const step1 = document.querySelector('.step1');
const step2 = document.querySelector('.step2');
const step3 = document.querySelector('.step3');
const step4 = document.querySelector('.step4');
const step5 = document.querySelector('.step5');
const checkbox = document.querySelector('#check');
const checkaddons = document.querySelectorAll('#add-ac');
const planosActiv = document.querySelectorAll('.planos');
const Nome = document.querySelector('#Nome');
const Email = document.querySelector('#Email');
const NumeroCadastro = document.querySelector('#NumberCadastro');
const Close = document.querySelector('#x');
const ContainerPai = document.querySelector('.container-pai');
const Form = document.querySelector('#FormStep1');
const NextForm = document.querySelector('#NextForm');
const imgMain = document.querySelector('.img-main');
let Tku = step5.childNodes[3];
let NomeUsuario = '';



NextForm.addEventListener('click',()=>{
    if(Nome.value == ''||Email.value == '' || NumeroCadastro.value == ''){
        const s = document.querySelector('.alert').style.display = 'flex';
        ContainerPai.classList.  add('blurr');
        imgMain.classList.add('blurr');
    }


});

Form.addEventListener('submit',(e)=>{
    h1Steps.item(Step-1).classList.toggle('active');
    h1Steps.item(Step).classList.toggle('active');
    e.preventDefault();
    Step++;
    CaseStep();
    NextForm.style.display = 'none';
    next.style.display = 'block';
    NomeUsuario =  NomeUsuario+Nome.value;


});

Close.addEventListener('click',()=>{
    Close.parentElement.style.display ='none';
    ContainerPai.classList.remove('blurr');
    imgMain.classList.remove('blurr');

})

let Step = 1;
let yearly = true;
let yCheck = false;
let total = 0;
let PlanVal = 0;
let PlanName = '';
let AddonVal = [];
let AddonName = [];
let AddonsCost = 0;

function BugCorrection(){
    if(total !==0){
        total = total;
    }
}

function CheckSelectedPlan(){
    if(Step >=3){
        let AC = document.querySelector(`${'.planos-active'}`);
        PlanName = AC.childNodes[3].textContent;
        console.log(`Nome do plano é ${PlanName}`);

        let split = AC.textContent.split('/');
        let Final = split[0].replace(/[^0-9]/gi, '');
        PlanVal = parseInt(Final);
        console.log(typeof(PlanVal));
        console.log(`Valor do Plano é ${PlanVal}`);
    }
}

function CheckSelectedAddon(){
    /** Pegar nome do Addon **/
      
    let addons = document.querySelectorAll('.addons');
    let array1 = [];
    let array2 = [];

    addons.forEach((item)=>{
        if(item.className == 'addons addons-active'){
            let AddonNameGot = item.childNodes[5].textContent;
            array1.push(AddonNameGot);
            let AddonValueGot = item.childNodes[9].textContent;
            AddonValueGot = AddonValueGot.replace(/[^0-9]/gi, '');
            AddonValueGot = parseInt(AddonValueGot);
            array2.push(AddonValueGot);
        }
    })
    AddonName = array1.filter((item, i) => array1.indexOf(item) === i);
    AddonVal = array2;
    console.log(AddonName);
    console.log(AddonVal);
    /** FIM Pegar nome do Addon **/

    /** Pegar VALOR do Addon **/


}

function ConfirmSelected(){
    let txt = '';    
    let resultado = 0;
    let bSumario = document.querySelector('.box-sumario').childNodes;
    const Sumario = document.querySelector('.sumario').childNodes;
    let i = 9;
    let i2 = 11;
    while(i < 18 && i2 <20){
        bSumario[i].textContent = '';
        i = i +4;
        bSumario[i2].textContent = '';
        i2 = i2 +4;
    }
    
    bSumario[1].textContent= PlanName;
    if(yCheck){
        Sumario[3].textContent = 'Total(per year)';
        txt = '/yr';
    } 
    else{
        Sumario[3].textContent = 'Total(per month)';
        txt = '/mo';
    }
    console.log(typeof(PlanVal));
    bSumario[3].textContent= `$${PlanVal}${txt}`;

    i = 9;
    i2 = 0;
    if(AddonName.length ==0 && AddonVal.length ==0){
        bSumario[i].textContent = '';
        i = 11;
        bSumario[i].textContent = '';
    };

    i = 9;
    i2 = 0;
    
    if (AddonName && AddonName.length > 0){
        AddonName.forEach((addon) => {
            if (addon !== undefined) {
                bSumario[i].textContent = `${AddonName[i2]}`;
            } else {
                bSumario[i].textContent = ' ';
            }
            i = i + 4;
            i2++;
        });
    } else {
    }
        
     i = 11;
     i2 = 0;
    AddonVal.forEach((addon)=>{
        
        console.log(addon);
        console.log(typeof(addon));
        
        bSumario[i].textContent = `+${AddonVal[i2]}${txt}`;

        if(addon == undefined){
            bSumario[i].textContent = ' ';
        }
        AddonsCost = AddonsCost + AddonVal[i2];

        i = i + 4;
        i2++;
        
    });
    total = AddonsCost + PlanVal;
    Sumario[5].textContent = `$${total}${txt}`;
    
};

function yearlyCheck(){
    if(yCheck){
        let h31 = document.querySelector('#steph31');
        h31.textContent ='+10/yr';
        let h32 = document.querySelector('#steph32');
        h32.textContent ='+20/yr';
        let h33 = document.querySelector('#steph33');
        h33.textContent ='+20/yr';
        console.log(`mudou para ${yCheck}`);
    }else{
        let h31 = document.querySelector('#steph31');
        h31.textContent ='+1/mo';
        let h32 = document.querySelector('#steph32');
        h32.textContent ='+2/mo';
        let h33 = document.querySelector('#steph33');
        h33.textContent ='+2/mo';
        console.log(`mudou para ${yCheck}`);
    };
}

function CaseStep(){
    switch (Step) {
        case 1:
            NomeUsuario = '';  
            NextForm.style.display = 'block';
            step1.style.display = 'flex';
            step2.style.display ='none';
            Back.style.display ='none';
            next.style.display ='none';
            break;
            
            case 2:
            Back.style.display = 'block';
            step2.style.display ='flex'; 
            step1.style.display ='none';
            step3.style.display ='none';
            break;
            
            case 3:
                AddonsCost = 0;
                step2.style.display ='none'; 
                step4.style.display ='none'; 
                step3.style.display ='flex';
                CheckSelectedPlan();
                CheckSelectedAddon();
                yearlyCheck();
            break;
            
            case 4:
                CheckSelectedAddon();
                ConfirmSelected();
                step3.style.display ='none'; 
                step4.style.display ='flex'; 
                step5.style.display ='none';
            break;
            case 5:
                next.style.display = 'none';
                Back.style.display = 'none';
                step4.style.display ='none';
                step5.style.display ='flex';
                Tku.textContent = `Thank you,${NomeUsuario}!`;

        default:
            break;
    }
}
CaseStep();

checkaddons.forEach((check)=>{
    check.addEventListener('click',((e)=>{
        let addon = e.target.parentNode;
        addon.classList.toggle('addons-active');
        CheckSelectedAddon();
    }));
});

next.addEventListener('click',(e)=>{
    if(Step<=3){
        e.preventDefault();
        h1Steps.item(Step-1).classList.toggle('active');
        h1Steps.item(Step).classList.toggle('active');
        Step++;
        CaseStep();
    }
    else{
        Step++;
        CaseStep();
    }
});

Back.addEventListener('click',(e)=>{
    e.preventDefault();
    Step--;
    h1Steps.item(Step-1).classList.toggle('active');
    h1Steps.item(Step).classList.toggle('active');

    CaseStep();
});

checkbox.addEventListener('click',()=>{
    let arcade = document.querySelector('#arc-val');
    let advanced = document.querySelector('#ad-val');
    let pro = document.querySelector('#pro-val');
    let monthF = document.querySelectorAll('#monthFree');
    
    if(yearly){
        yearly = false;
        monthF.forEach((botao)=>botao.style.display = 'block');
        arcade.textContent = `$${9*10}/yr`;
        advanced.textContent = `$${12*10}/yr`;
        pro.textContent =`$${15*10}/yr`;
        yCheck = true;
    }else{
        yCheck = false;
        monthF.forEach((botao)=>botao.style.display = 'none');
        arcade.textContent = `$9/mo`;
        advanced.textContent = `$12/mo`;
        pro.textContent =`$15/mo`;
        yearly = true;
    }
});

planosActiv.forEach((check)=>{
    check.addEventListener('click',(()=>{
        let testIfselected = document.querySelectorAll('.planos-active');
        console.log(testIfselected);
        
        if(testIfselected.length == 0){
            check.classList.toggle('planos-active');
        } else{
            check.addEventListener('click',check.classList.remove('planos-active'));
        }
        
    }));
});

let input = document.querySelector('#check');
input.addEventListener('click',()=>{
    const div = document.querySelector('.mo-y').childNodes;
    console.log(div);
    div[1].classList.toggle('h2-active');
    div[7].classList.toggle('h2-active');
});