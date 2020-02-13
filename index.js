if (!(localStorage.getItem('customer'))) {
    const personAccountStr = JSON.stringify(personAccount, undefined, 4)
    localStorage.setItem('customer', personAccountStr)
    run();   
} else {
    run();
} 
