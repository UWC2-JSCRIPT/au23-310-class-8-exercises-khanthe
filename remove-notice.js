let myTimeout = setTimeout(
    ()=>{
        let notice = document.getElementById('maintenance-notice'); 
        notice.remove();
    },
    5000
);