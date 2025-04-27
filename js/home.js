const pinnedBody = document.querySelector('.pinned__body');
const updateBody = document.querySelector('.all__body');

const combined = tickets.map((ticket)=>{
    const userr = users.find((u)=>{
        return ticket.assignedTo === u.id
    })
    return {
        ...ticket,
        user: userr || {}
    }
})


const ticketUpdates  = combined.filter((ticket)=>{return ticket.isPinned === false});
const pinnedUpdates = combined.filter((ticket)=>{return ticket.isPinned === true});




pinnedUpdates.forEach((item) =>{
    const currentTime = new Date();
    const ticketTime = new Date(item.timestamp);
    const timeDifference = currentTime - ticketTime;

    const minutes = Math.floor(timeDifference / (1000 * 60)) % 60;
    const hours = Math.floor(timeDifference / (1000 * 60 * 60)) % 24;
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    let timeString = '';
    if(days > 1){
        timeString = `${days} days ago`;
    } else if (hours > 1){
        timeString = `${hours} hours ago`;
    } else if (minutes > 1){
        timeString = `${minutes} minutes ago`;
    } else {
        timeString = 'Just now';
    }

    const pinned = `
     <div class="pinned__chat">
    <img src="${item.user.image}" alt="user image" class="pinned__img">
    <div class="pinned__text">
    <p class="pinned__name">${item.user.name} <span class="pinned__action">${item.action}</span></p>
    <p class="pinned__title">${item.title}</p>
    <p class="pinned__message">${item.message}</p>
    </div>
    <div class="pinned__indicators">
    <p class="pinned__time">${timeString}</p>
    <span class="pinned__unread"></span>

    </div>
 </div>
    `
    pinnedBody.innerHTML += pinned  
})

ticketUpdates.forEach((item) =>{

    const currentTime = new Date();
    const ticketTime = new Date(item.timestamp);
    const timeDifference = currentTime - ticketTime;

    const minutes = Math.floor(timeDifference / (1000 * 60)) % 60;
    const hours = Math.floor(timeDifference / (1000 * 60 * 60)) % 24;
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    let timeString = '';
    if(days > 1){
        timeString = `${days} days ago`;
    } else if (hours > 1){
        timeString = `${hours} hours ago`;
    } else if (minutes > 1){
        timeString = `${minutes} minutes ago`;
    } else {
        timeString = 'Just now';
    }

    const pinned = `
     <div class="all__chat">
    <img src="${item.user.image}" alt="user image" class="all__img">
    <div class="all__text">
    <p class="all__name">${item.user.name} <span class="all__action">${item.action}</span></p>
    <p class="all__title">${item.title}</p>
    <p class="all__message">${item.message}</p>
    </div>
    <div class="all__indicators">
    <p class="all__time">${timeString}</p>
    <span class="all__unread"></span>

    </div>
 </div>
    `
    updateBody.innerHTML += pinned  
})
