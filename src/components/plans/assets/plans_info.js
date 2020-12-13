const services_jee = [
    {
        type:"eng",
        name: 'Starter',
        available: [
            'Josaa Counselling',
            'Choice Filling',
            'Documentation',
            'Branches & Colleges',
            'Group Mentoring',
            'Customer support',
            'Live Chat'
        ],
        price:{
            original:1500,
            discount:50,
        },
        link:"https://rzp.io/l/CGstarter"
    },
    {
        type:"eng",
        name: 'Standard',
        available: [
            'JoSAA Counselling',
            'Spot Round',
            'Personal Mentoring',
            'Career Guidance',
            'Placement Stats',
            'Video Calls',
            '& All Starter Features',
        ],
        price:{
            original:3000,
            discount:50,
        },
        link:"https://rzp.io/l/CGstandard"
    },
    {
        type:"eng",
        name: 'Enhanced',
        available: [
            'Josaa Counselling',
            'State Counsellings',
            'All Spot Rounds',
            'Career Guidance',
            'Top Mentor',
            'Latest Updates',
            '& All Standard Features',
        ],
        price:{
            original:5000,
            discount:50,
        },
        link:"https://rzp.io/l/CGenhanced"
    },
]

const services_neet = [
    {
        type:"med",
        name: 'Starter',
        available: [
            'MCC Counselling',
            'Choice Filling',
            'Documentation',
            'Colleges details',
            'Group Mentoring',
            'Customer support',
            'Live Chat',
        ],
        price:{
            original:1500,
            discount:50,
        },
        link:"https://rzp.io/l/CGstarter"
    },
    {
        type:"med",
        name: 'Standard',
        available: [
            'Full MBBS Counselling',
            'BDS+VCI+AYUSH',
            'Mop Up Rounds',
            'Personal Mentoring',
            'Career Guidance',
            'Video Calls',
            '& All Starter Features'
        ],
        price:{
            original:3000,
            discount:50,
        },
        link:"https://rzp.io/l/CGstandard"
    },
    {
        type:"med",
        name: 'Enhanced',
        available: [
            'All Counsellings',
            'All Mop Up Rounds',
            'All Spot Rounds',
            'Career Guidance',
            'Top Mentor',
            'Latest Updates',
            '& All Standard Features'
        ],
        price:{
            original:5000,
            discount:50,
        },
        link:"https://rzp.io/l/CGenhanced"
    },
]

export { services_jee,services_neet }