export const navLinks = [

        {
            id: 1,
            name: 'Home',
            href: '#home',
        },
        {
            id: 2,
            name: 'About',
            href: '#about',
        },
        {
            id: 3,
            name: 'Work Experience',
            href: '#work-experience',
        },
        {
            id: 4,
            name: 'Projects',
            href: '#projects',
        },
        // {
        //     id: 5,
        //     name: 'Clients',
        //     href: '#clients',
        // },
        {
            id: 6,
            name: 'Contact',
            href: '#contact',
        },
    ];

export const clientReviews = [
    {
        id: 1,
        name: 'Emily Johnson',
        position: 'Product Manager at GreenLeaf',
        img: 'assets/review1.png',
        review:
            'Natnael Alemseged developed a stunning mobile app for our company. His attention to detail in UI/UX design and his ability to deliver a seamless user experience are unmatched. Highly recommend him for any mobile development project!',
        rating: 5,
    },
    {
        id: 2,
        name: 'Mark Rogers',
        position: 'Founder of TechGear Shop',
        img: 'assets/review2.png',
        review:
            'Natnael’s expertise in mobile development is truly impressive. He built a robust and scalable e-commerce app for us, and our user engagement has skyrocketed since the launch. He’s a true professional and a pleasure to work with.',
        rating: 5,
    },
    {
        id: 3,
        name: 'John Dohsas',
        position: 'Project Manager at UrbanTech',
        img: 'assets/review3.png',
        review:
            'Natnael took our complex mobile app requirements and turned them into a sleek, functional, and user-friendly solution. His problem-solving skills and dedication to quality are outstanding. We’ll definitely work with him again!',
        rating: 4,
    },
    {
        id: 4,
        name: 'Ether Smith',
        position: 'CEO of BrightStar Enterprises',
        img: 'assets/review4.png',
        review:
            'Natnael designed and developed a mobile app that perfectly aligned with our vision. His ability to combine beautiful UI/UX design with high-performance functionality is remarkable. He’s a top-tier mobile developer!',
        rating: 5,
    },
];


export const myProjects = [
    {
        title: 'Mood Ride',
        desc: 'Mood Ride is a comprehensive ride-hailing app featuring separate Passenger and Driver functionalities.',
        subdesc:
            'Built as a unique Software-as-a-Service app featuring Driver and Passenger functionalities, such as badges, trip payments, NFC integration, ride management, SOS, and scheduling.',
        href: 'https://example.com',
        texture: '/textures/project/mood.mp4',
        logo: '/assets/project-logo1.png',
        isLinkGithub: null,

        logoStyle: {
            backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'Flutter',
                path: '/assets/programming_languages/flutter.png',
            },
            {
                id: 2,
                // name: 'Stacked (MVVM)',
                name: 'Stacked',
                path: '/assets/programming_languages/stacked.png',
            },
            {
                id: 3,
                name: 'Node.js',
                path: '/assets/programming_languages/node-js.png',
            },
            {
                id: 4,
                name: 'Socket.IO',
                path: '/assets/programming_languages/socket-io.png',
            },
        ],
    },
    {
        title: 'Metshafe',
        desc: 'Metshafe is an innovative cross-platform eBook app offering a seamless reading, discovery, and interaction experience.',
        subdesc:
            'With support for various book formats, author profiles, customizable themes, and community engagement features, Metshafe stands out as a powerful eBook platform.',
        href: 'https://example.com',
        isLinkGithub: null,

        texture: '/textures/project/project2.mp4',
        logo: '/assets/project-logo2.png',
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'Flutter',
                path: '/assets/programming_languages/flutter.png',
            },
            {
                id: 2,
                name: 'Firebase',
                path: '/assets/programming_languages/firebase.png',
            },
            {
                id: 3,
                name: 'Node.js',
                path: '/assets/programming_languages/node-js.png',
            },
            {
                id: 4,
                name: 'GetX',
                path: '/assets/programming_languages/getx.png',
            },
        ],
    },
    {
        title: 'Beit Rent',
        desc: 'Beit Rent is an apartment booking app designed for seamless property browsing and booking.',
        subdesc:
            'It features property browsing, user favorites, intuitive filtering, and an easy-to-use calendar for booking.',
        href: 'https://play.google.com/store/apps/details?id=com.beit.rent.apartment',
        isLinkGithub: false,

        texture: '/textures/project/beit_rent.mp4',
        logo: '/assets/project-logo3.png',
        logoStyle: {
            backgroundColor: '#60f5a1',
            border: '0.2px solid rgba(208, 213, 221, 1)',
            boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
        },
        spotlight: '/assets/spotlight3.png',
        tags: [
            {
                id: 1,
                name: 'Flutter',
                path: '/assets/programming_languages/flutter.png',
            },
            {
                id: 2,
                name: 'GetX',
                path: '/assets/programming_languages/getx.png',
            },
            {
                id: 3,
                name: 'REST API',
                path: '/assets/programming_languages/rest.png',
            },
        ],
    },
    {
        title: 'Alibo Market',
        desc: 'Alibo Market is a feature-rich e-commerce platform connecting buyers, sellers, and promoters.',
        subdesc:
            'Promotes in-app chats, coupon-driven commissions, local/global payments, and gamified reward systems.',
        href: 'https://play.google.com/store/apps/details?id=com.aliboMarket.alibo',
        isLinkGithub: false,
        texture: '/textures/project/Alibo_Market.mp4',
        logo: '/assets/project-logo4.png',
        logoStyle: {
            backgroundColor: '#0E1F38',
            border: '0.2px solid #0E2D58',
            boxShadow: '0px 0px 60px 0px #2F67B64D',
        },
        spotlight: '/assets/spotlight4.png',
        tags: [
            {
                id: 1,
                name: 'Flutter',
                path: '/assets/programming_languages/flutter.png',
            },
            {
                id: 2,
                // name: 'Stacked Framework (MVVM)',
                name: 'Stacked',
                path: '/assets/programming_languages/stacked.png',
            },
            {
                id: 3,
                name: 'REST API',
                path: '/assets/programming_languages/rest.png',
            },
        ],
    },
    // {
    //     title: 'Students Academic Performance Predictor',
    //     desc: 'A predictive model to identify at-risk students using machine learning algorithms.',
    //     subdesc:
    //         'Data analysis and machine learning methods such as Random Forest, PART, JRIP, and Naïve Bayes were used.',
    //     href: 'https://example.com',
    //     texture: '/textures/project/project5.mp4',
    //     logo: '/assets/project-logo5.png',
    //     logoStyle: {
    //         backgroundColor: '#1C1A43',
    //         border: '0.2px solid #252262',
    //         boxShadow: '0px 0px 60px 0px #635BFF4D',
    //     },
    //     spotlight: '/assets/spotlight5.png',
    //     tags: [
    //         {
    //             id: 1,
    //             name: 'Weka',
    //             path: '/assets/programming_languages/weka.png',
    //         },
    //     ],
    // },
    // {
    //     title: 'Windows Text Hashing',
    //     desc: 'A Windows application for hashing text input and copying the result to the clipboard.',
    //     subdesc:
    //         'Provides a user-friendly interface for efficient text hashing and automatic result copying.',
    //     href: 'https://github.com/Natnael-Alemseged/Windows-text-Hashing',
    //     texture: '/textures/project/project6.mp4',
    //     logo: '/assets/project-logo6.png',
    //     isLinkGithub: true,
    //
    //     logoStyle: {
    //         backgroundColor: '#2A1816',
    //         border: '0.2px solid #36201D',
    //         boxShadow: '0px 0px 60px 0px #AA3C304D',
    //     },
    //     spotlight: '/assets/spotlight5.png',
    //     tags: [
    //         {
    //             id: 1,
    //             name: 'Flutter',
    //             path: '/assets/programming_languages/flutter.png',
    //         },
    //
    //         {
    //             id: 2,
    //             name: 'Inno-Setup',
    //             path: '/assets/programming_languages/inno.png',
    //         },
    //     ],
    // },
];


export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'Framer',
        pos: 'Lead Web Developer',
        duration: '2022 - Present',
        title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
        icon: '/assets/framer.svg',
        animation: 'victory',
    },
    {
        id: 2,
        name: 'Figma',
        pos: 'Web Developer',
        duration: '2020 - 2022',
        title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
        icon: '/assets/figma.svg',
        animation: 'clapping',
    },
    {
        id: 3,
        name: 'Notion',
        pos: 'Junior Web Developer',
        duration: '2019 - 2020',
        title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
        icon: '/assets/notion.svg',
        animation: 'salute',
    },
];
