

export const ConstructorList = [
    {
        id: 1,
        name: "Ferrari",
        constructorId: 1
    },
    {
        id: 2,
        name: "McLaren",
        constructorId: 2
    },
    {
        id: 3,
        name: "Mercedes",
        constructorId: 3
    },
    {
        id: 4,
        name: "Red Bull",
        constructorId: 4
    },
    {
        id: 5,
        name: "Renault",
        constructorId: 5
    },
    {
        id: 6,
        name: "Sauber",
        constructorId: 6
    },
    {
        id: 7,
        name: "Toro Rosso",
        constructorId: 7
    },
    {
        id: 8,
        name: "Williams",
        constructorId: 8
    },
    {
        id: 9,
        name: "AlphaTauri",
        constructorId: 9
    },
    {
        id: 10,
        name: "Haas",
        constructorId: 10
    },
]

export const ratedConstructors : RatedConstructor[] = [
    {
        ratingId: 1,
        constID: 1,
        entreID: 1,
        ratingValue: 5
    },
    {
        ratingId: 2,
        constID: 2,
        entreID: 2,
        ratingValue: 4
    },
    {
        ratingId: 3,
        constID: 3,
        entreID: 3,
        ratingValue: 3
    },
    {
        ratingId: 4,
        constID: 4,
        entreID: 4,
        ratingValue: 2
    },
    {
        ratingId: 5,
        constID: 5,
        entreID: 5,
        ratingValue: 1
    },
    {
        ratingId: 6,
        constID: 6,
        entreID: 6,
        ratingValue: 0
    },
    {
        ratingId: 7,
        constID: 7,
        entreID: 7,
        ratingValue: 0
    },
    {
        ratingId: 8,
        constID: 8,
        entreID: 8,
        ratingValue: 0
    },
    {
        ratingId: 9,
        constID: 9,
        entreID: 9,
        ratingValue: 0
    },
    {
        ratingId: 10,
        constID: 10,
        entreID: 10,
        ratingValue: 0
    }
]

interface RatedConstructor {
    ratingId: number;
    constID: number;
    entreID: number;
    ratingValue: number;
}


export const projectList = [
    {
        id: 1,
        name: "Ferrari",
        constructorId: 1,
        entrepreneurId: 1
    },
    {
        id: 2,
        name: "McLaren",
        constructorId: 2,
        entrepreneurId: 2
    },
    {
        id: 3,
        name: "Mercedes",
        constructorId: 3,
        entrepreneurId: 3
    },
    {
        id: 4,
        name: "Red Bull",
        constructorId: 4,
        entrepreneurId: 4
    },
    {
        id: 5,
        name: "Renault",
        constructorId: 5,
        entrepreneurId: 5
    },
    {
        id: 6,
        name: "Sauber",
        constructorId: 6,
        entrepreneurId: 6
    },
    {
        id: 7,
        name: "Toro Rosso",
        constructorId: 7,
        entrepreneurId: 7
    },
    {
        id: 8,
        name: "Williams",
        constructorId: 8,
        entrepreneurId: 8
    },
    {
        id: 9,
        name: "AlphaTauri",
        constructorId: 9,
        entrepreneurId: 9
    },
    {
        id: 10,
        name: "Haas",
        constructorId: 10,
        entrepreneurId: 10
    }
]

export const bidsList = [
    {
        id: 1,
        name: "Ferrari",
        constructorId: 1,
        entrepreneurId: 1,
        price: 100000
    },
    {
        id: 2,
        name: "McLaren",
        constructorId: 2,
        entrepreneurId: 2,
        price: 200000
    },
    {
        id: 3,
        name: "Mercedes",
        constructorId: 3,
        entrepreneurId: 3,
        price: 300000
    },
    {
        id: 4,
        name: "Red Bull",
        constructorId: 4,
        entrepreneurId: 4,
        price: 400000
    },
    {
        id: 5,
        name: "Renault",
        constructorId: 5,
        entrepreneurId: 5,
        price: 500000
    },
    {
        id: 6,
        name: "Sauber",
        constructorId: 6,
        entrepreneurId: 6,
        price: 600000
    },
    {
        id: 7,
        name: "Toro Rosso",
        constructorId: 7,
        entrepreneurId: 7,
        price: 700000
    },
    {
        id: 8,
        name: "Williams",
        constructorId: 8,
        entrepreneurId: 8,
        price: 800000
    },
    {
        id: 9,
        name: "AlphaTauri",
        constructorId: 9,
        entrepreneurId: 9,
        price: 900000
    },
    {
        id: 10,
        name: "Haas",
        constructorId: 10,
        entrepreneurId: 10,
        price: 1000000
    }
]

export const constructorProfileList = [
    {
        constructorId: 1,
        name: "Ferrari",
        location: "Maranello",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Ferrari_logo_2010.svg/1200px-Ferrari_logo_2010.svg.png"
    },
    {
        constructorId: 2,
        name: "McLaren",
        location: "Melbourne",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/McLaren_logo.svg/1200px-McLaren_logo.svg.png"
    },
    {
        constructorId: 3,
        name: "Mercedes",
        location: "German",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Mercedes-Benz_Logo_2016.svg/1200px-Mercedes-Benz_Logo_2016.svg.png"
    },
    {
        constructorId: 4,
        name: "Red Bull",
        location: "Spielberg",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Red_Bull_Logo.svg/1200px-Red_Bull_Logo.svg.png"
    },
    {
        constructorId: 5,
        name: "Renault",
        location: "France",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Renault_logo_2014.svg/1200px-Renault_logo_2014.svg.png"
    },
    {
        constructorId: 6,
        name: "Sauber",
        location: "Hannover",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Sauber_logo.svg/1200px-Sauber_logo.svg.png"
    },
    {
        constructorId: 7,
        name: "Toro Rosso",
        location: "Lisbon",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Toro_Rosso_Logo.svg/1200px-Toro_Rosso_Logo.svg.png"
    },
    {
        constructorId: 8,
        name: "Williams",
        location: "United Kingdom",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Williams_Grand_Prix_logo.svg/1200px-Williams_Grand_Prix_logo.svg.png"
    },
    {
        constructorId: 9,
        name: "AlphaTauri",
        location: "Italy",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/AlphaTauri_logo.svg/1200px-AlphaTauri_logo.svg.png"
    },
    {
        constructorId: 10,
        name: "Haas",
        location: "Spain",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Haas_F1_logo.svg/1200px-Haas_F1_logo.svg.png"
    }
    ]
