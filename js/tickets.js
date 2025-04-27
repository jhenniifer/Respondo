const users = [ 
    { 
        id: 1, 
        name: "Jhennifer A.", 
        image: "https://randomuser.me/api/portraits/women/65.jpg" 
    },
    {
        id: 2, 
        name: "Elvis U.", 
        image: "https://randomuser.me/api/portraits/men/75.jpg" 
    }, 
    { 
        id: 3, 
        name: "Amaka I.", 
        image: "https://randomuser.me/api/portraits/women/45.jpg" 
    }, 
    {   
        id: 4, 
        name: "Tunde B.", 
        image: "https://randomuser.me/api/portraits/men/34.jpg" 
    }, 
    {   
        id: 5, 
        name: "Adaeze M.", 
        image: "https://randomuser.me/api/portraits/women/51.jpg" 
    }, 
    {  
        id: 6, 
        name: "Chuka O.", 
        image: "https://randomuser.me/api/portraits/men/52.jpg" 
    }, 
    {   
        id: 7, 
        name: "Halima S.", 
        image: "https://randomuser.me/api/portraits/women/33.jpg" 
    }, 
    {   
        id: 8, 
        name: "Ibrahim G.", 
        image: "https://randomuser.me/api/portraits/men/64.jpg" 
    }, 
    {   
        id: 9, 
        name: "Ngozi K.", 
        image: "https://randomuser.me/api/portraits/women/77.jpg" 
    }, 
    {   
        id: 10, 
        name: "Femi A.", 
        image: "https://randomuser.me/api/portraits/men/12.jpg" 
    } 
        ];

 const tickets = [
     { 
        id: 101, 
        title: "Login not working", 
        status: "bad", 
        assignedTo: 1, 
        createdAt: "2025-04-10T08:00:00Z", 
        action: "replied to you", 
        timestamp: "2025-04-18T12:30:00Z",
        message: "Hi, we’ve pushed a fix for the login issue. Let us know if it works!",
        isPinned: true
    }, 
    { 
        id: 102, 
        title: "Payment failed", 
        status: "bad", 
        assignedTo: 2, 
        createdAt: "2025-04-15T09:30:00Z", 
        action: "mentioned you", 
        timestamp: "2025-04-18T14:10:00Z", 
        message: "Customer asked if the transaction can be reversed. Thoughts?",
        isPinned: false

    }, 
    { 
        id: 103, 
        title: "Unable to upload documents", 
        status: "good", 
        assignedTo: 3, 
        createdAt: "2025-04-11T10:45:00Z", 
        action: "was reassigned", 
        timestamp: "2025-04-18T11:45:00Z", 
        message: "Ticket was moved to tech support. Please verify details.",
        isPinned: false

    }, 
    { 
        id: 104, 
        title: "Request for account deletion", 
        status: "bad", 
        assignedTo: 4, 
        createdAt: "2025-04-12T13:20:00Z", 
        action: "replied to you", 
        timestamp: "2025-04-18T16:00:00Z", 
        message: "Deletion process started. Will confirm once complete.",
        isPinned: true


    }, 
    { 
        id: 105, 
        title: "Bug on dashboard graph", 
        status: "good", 
        assignedTo: 5, 
        createdAt: "2025-04-14T07:50:00Z", 
        action: "mentioned you", 
        timestamp: "2025-04-18T13:15:00Z", 
        message: "Chart not loading for some users. Can you check the report logs?",
        isPinned: false


    }, 
    { 
        id: 106, 
        title: "User feedback submission", 
        status: "good", 
        assignedTo: 6, 
        createdAt: "2025-04-16T08:25:00Z", 
        action: "added a comment", 
        timestamp: "2025-04-18T10:10:00Z", 
        message: "Feedback saved for review. Tagging marketing team.",
        isPinned: false

    }, 
    { 
        id: 107, 
        title: "App crashing on startup", 
        status: "bad", 
        assignedTo: 7, 
        createdAt: "2025-04-17T10:00:00Z", 
        action: "replied to you", 
        timestamp: "2025-04-18T09:45:00Z", 
        message: "Investigating crash reports. Will update soon.",
        isPinned: false

    }, 
    { 
        id: 108, 
        title: "Notification not received", 
        status: "good", 
        assignedTo: 8, 
        createdAt: "2025-04-12T14:30:00Z", 
        action: "was reassigned", 
        timestamp: "2025-04-18T15:20:00Z", 
        message: "Customer didn’t receive OTP. Needs urgent fix.", 
        isPinned: false

    }, 
    { 
        id: 109, 
        title: "UI broken on Safari", 
        status: "bad", 
        assignedTo: 9, 
        createdAt: "2025-04-13T11:15:00Z", 
        action: "replied to you", 
        timestamp: "2025-04-18T17:00:00Z", 
        message: "Safari rendering issue seems to be resolved. Confirming with QA.",
        isPinned: false
    }, 
    { 
        id: 110, 
        title: "Data mismatch in reports", 
        status: "good", 
        assignedTo: 10, 
        createdAt: "2025-04-15T12:40:00Z", 
        action: "mentioned you", 
        timestamp: "2025-04-18T18:25:00Z", 
        message: "Revenue numbers off by $500. Please investigate.",
        isPinned: false

    } 
];