const { User, Venue, Session } = require("../models/models");

const Main = async () => {
    try {
        const user1 = await User.create({
            username: "casey",
            password: "frogcat1",
            preferences: ["Jazz", "Italian" ],
            location: "10-20 46th Rd Long Island City, NY 11101",
            session_id: 1,
       });
	   
	   const user2 = await User.create({
            username: "stephanie",
            password: "2manpizza",
            preferences: ["Beer", "Billards", "Italian"],
            location: "420 W 26th St New York, NY 10001",
            session_id: 1,
       });
	   
	   const user3 = await User.create({
            username: "joel",
            password: "listfish8",
            preferences: ["Jazz", "Ice Cream Floats" ],
            location: "47 S 8th St Brooklyn, NY 11249",
            session_id: 1,
       });

    const venue1 = await Venue.create({
        name: "Village Vanguard",
        street_address: "178 7th Ave S",
        city: "New York",
        state: "NY",
        zip_code: 10014,
        description_tags: ["Jazz", "Beer", "Dancing", "Club" ],
        description: "One of the most iconic jazz clubs in the world. From jazz giants like John Coltrane and Bill Evans in the past to the hot jazz players of today, the club lives up to its name."
    })
    
    const venue2 = await Venue.create({
        name: "Maialino",
        street_address: "2 Lexington Ave, New York, NY 10010",
        city: "New York",
        state: "NY",
        zip_code: 10010,
        description_tags: ["Italian", "Wine", "Pasta", "Restaurant" ],
        description: "Classic Roman-Italian soul food in an a casual but elegant setting."
    })
    
    const venue3 = await Venue.create({
        name: "MUD Coffee",
        street_address: "307 E 9th St",
        city: "New York",
        state: "NY",
        zip_code: 10003,
        description_tags: ["Beer", "Coffee", "Sweets", "Fast-Service" ],
        description: "A sibling of the roving coffee truck, this chill spot also serves American fare & craft beers."
    })
    
    const venue4 = await Venue.create({
        name: "Dos Toros Taqueria",
        street_address: "137 4th Ave",
        city: "New York",
        state: "NY",
        zip_code: 10003,
        description_tags: ["Mexican", "Tacos", "Ethnic", "Savory"],
        description: "Dos Toros is here to bring the best of the San Francisco taqueria taco experience to NYC. Drop by sometime & we'll show you what we're all about."
    })
    
    const venue5 = await Venue.create({
        name: "BCD Tofu House",
        street_address: "5 West 32nd St",
        city: "New York",
        state: "NY",
        zip_code: 10001,
        description_tags: ["Korean", "Tofu", "Bubble Tea", "Asian"],
        description: "Korean tofu house specializing in all things tofu. Also a variety of Soon Tofus in BCD: Beef, Pork, Seafood, Kimchi, Dumpling, Soybean Paste, Ham & Sausage, Vegetables, Mixed Small Intestines."
    })
    
    const venue6 = await Venue.create({
        name: "Dough Doughnuts",
        street_address: "14 W 19th St",
        city: "New York",
        state: "NY",
        zip_code: 10011,
        description_tags: ["American", "Desserts", "Sweet", "Coffee" ],
        description: "Dough's menu is carefully curated to bring customers a selection of flavors and textures to satisfy different tastes and cravings of donuts."
    })
    
    const venue7 = await Venue.create({
        name: "New Museum",
        street_address: "235 Bowery",
        city: "New York",
        state: "NY",
        zip_code: 10002,
        description_tags: ["Tour", "Art", "Quiet", "Cheap" ],
        description: "The New Museum of Contemporary Art, founded in 1977 by Marcia Tucker, is a museum in New York City at 235 Bowery, on Manhattan's Lower East Side."
    })

    const session1 = await User.create({
        name: "Night On The Town",
        organizer_id: 1,
        voting: true,
        number_of_voters: 3,
        custom_venues: [""],
        area: "Manhattan",
        generated_venues: [
            { venue: "Maialino", votes: 0},
            { venue: "Village Vanguard", votes: 0}
        ]
    })
        
        
    } catch (error) {
       console.log(error); 
    }
    process.exit();
}

main();