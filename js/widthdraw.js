document.getElementById('btn-widthdraw').addEventListener('click',function(){


    const widthdrawField = document.getElementById('widthdraw-field');
    const newWidthdrawString = widthdrawField.value;
    const newWidthdrawAmount = parseFloat(newWidthdrawString);



    const widthdrawTotalElement = document.getElementById('widthdraw-total');
    const previousWidthdrawTotalString = widthdrawTotalElement.innerText;
    const previousWidthdrawTotal = parseFloat(previousWidthdrawTotalString)



    const currentWidthdrawTotal = previousWidthdrawTotal + newWidthdrawAmount;
    widthdrawTotalElement.innerText = currentWidthdrawTotal;




    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString)


    const  newBalanceTotal = previousBalanceTotal - newWidthdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;

    widthdrawField.value = '';
})