// Helper for Dropdown Selection and Navigation
function setCategoryAndNavigate(category) {
    productFilterCategory = category;
    navigateTo('products');
}

// Array containing all 27 Client Logos from directory
const CLIENT_LOGOS = Array.from({ length: 27 }, (_, i) => `image/clientlogo/Logo ${i + 1}.jpg`);

// Complete Product & Accessory Store
const PRODUCTS_DATA = [
    // ==========================================
    // 1. THE GOLFER — Tempo 2 / 2+2 / 4, each with Golfer → Scratch → Pro builds (blueprint 02)
    // ==========================================
    {
        id: 'golfer-tempo-2',
        slug: 'golfer-tempo-2',
        name: 'Tempo 2',
        category: 'The Golfer',
        heroProduct: true,
        buildSet: 'golfer-2',
        packages: ['lithium', 'caddy', 'lifted', 'rims'],
        accessoryTags: ['tempo', 'tempo-2', 'golf'],
        colorFamily: 'tempo',
        canopyKey: 'tempo-2',
        tagline: "The serious golfer's personal cart.",
        description: 'Two forward-facing seats, built around the way you play. Our bestseller, made to be customized with golf accessories, comfort upgrades and premium finishes.',
        priceLabel: 'Inquire for Price',
        seating: '2 Seats (Forward Facing)',
        range: '85 km per charge',
        speed: '30 km/h max',
        battery: '72V Lithium Power Cell',
        chargingTime: '3.5 Hours',
        powertrain: '5.0 kW AC Motor',
        image: 'image/Products/Premium.png',
        gallery: ['image/Products/Premium.png', 'image/Products/Base.png', 'image/Products/Premium+.png'],
        features: ['Two Forward-Facing Seats', 'Golf Bag Provision with Rear Bag Cover', 'Shatter-Resistant Foldable Windshield', 'Corrosion-Resistant Aluminum Frame'],
        specs: { 'Motor Type': '5.0 kW AC Motor', 'Controller': 'Enpower 350A Controller', 'Chassis': 'Aircraft Grade Aluminum Chassis', 'Brakes': '4-Wheel Hydraulic Brake System' }
    },
    {
        id: 'golfer-tempo-2-2',
        slug: 'golfer-tempo-2-2',
        name: 'Tempo 2+2',
        category: 'The Golfer',
        buildSet: 'golfer-2-2',
        packages: ['lithium', 'lifted', 'rims'],
        accessoryTags: ['tempo', 'tempo-2+2', 'golf'],
        colorFamily: 'tempo',
        canopyKey: 'tempo-2+2',
        tagline: 'Golf and family practicality.',
        description: 'Two forward-facing seats plus two rear-facing seats, for village-based golfers who also drive the family around.',
        priceLabel: 'Inquire for Price',
        seating: '4 Seats (2 Forward + 2 Rear)',
        range: '80 km per charge',
        speed: '30 km/h max',
        battery: '72V Lithium-Ion Pack',
        chargingTime: '3.5 Hours',
        powertrain: '5.0 kW AC Electric Motor',
        image: 'image/Products/Tempo 2+2 - Golf.png',
        gallery: ['image/Products/Tempo 2+2 - Golf.png', 'image/Products/Tempo 2+2 - Golf - Red.png', 'image/Products/Tempo 2+2 - Golf - Red 1.png'],
        colorPhotos: { 'White': 'image/Products/Tempo 2+2 - Golf.png', 'Sangria': 'image/Products/Tempo 2+2 - Golf - Red.png' },
        features: ['Two Forward + Two Rear-Facing Seats', 'Compatible Rear Golf Bag Attachment', 'High-Impact Foldable Windshield', 'Corrosion-Resistant Aluminum Spaceframe'],
        specs: { 'Motor Type': '5.0 kW AC Direct Drive Motor', 'Controller': 'Curtis 350A Programmable AC Controller', 'Chassis': 'Rust-Proof Lightweight Aluminum', 'Brakes': 'Rear Mechanical Drum & Auto Park Brake' }
    },
    {
        id: 'golfer-tempo-4',
        slug: 'golfer-tempo-4',
        name: 'Tempo 4',
        category: 'The Golfer',
        buildSet: 'golfer-4',
        packages: ['lithium', 'lifted', 'rims'],
        accessoryTags: ['tempo', 'tempo-4', 'golf'],
        colorFamily: 'tempo',
        canopyKey: 'tempo-4',
        tagline: 'Golf with room for two more.',
        description: 'Four seats in two forward-facing rows, for golf with extra passenger comfort and an all-forward seating layout.',
        priceLabel: 'Inquire for Price',
        seating: '4 Seats (Two Forward Rows)',
        range: '85 km per charge',
        speed: '30 km/h max',
        battery: '72V Lithium-Ion Pack',
        chargingTime: '3.5 Hours',
        powertrain: '5.0 kW AC Motor',
        image: 'image/Products/Club Car 4.png',
        gallery: ['image/Products/Club Car 4.png'],
        features: ['Four Seats in Two Forward-Facing Rows', 'Golf Bag Provision with Rear Bag Cover', 'Extended Roof Canopy', 'Corrosion-Resistant Aluminum Frame'],
        specs: { 'Motor Type': '5.0 kW AC Motor', 'Controller': 'Curtis 350A Controller', 'Chassis': 'Aluminum Spaceframe', 'Brakes': '4-Wheel Hydraulic Brake System' }
    },

    // ==========================================
    // 2. LIFESTYLE & PRIVATE USE — Tempo 2 / 2+2 / 4 / 4+2, Essential → Signature → Elite builds (blueprint 04)
    // ==========================================
    {
        id: 'lifestyle-tempo-2',
        slug: 'lifestyle-tempo-2',
        name: 'Tempo 2',
        category: 'Lifestyle & Private Use',
        buildSet: 'lifestyle',
        packages: ['lithium', 'lifted', 'rims'],
        accessoryTags: ['tempo', 'tempo-2'],
        colorFamily: 'tempo',
        canopyKey: 'tempo-2',
        tagline: 'Compact personal transport.',
        description: 'Two seats for getting around homes, villages, estates and farms, with practical, comfort and premium builds to choose from.',
        priceLabel: 'Inquire for Price',
        seating: '2 Seats (Forward Facing)',
        range: '80 km per charge',
        speed: '28 km/h max',
        battery: '72V Standard Lithium Pack',
        chargingTime: '4.0 Hours',
        powertrain: '4.0 kW AC Motor',
        image: 'image/Products/Base +.png',
        gallery: ['image/Products/Base +.png', 'image/Products/Premium+ black.png'],
        features: ['Two Forward-Facing Seats', 'Windshield and Mirror Package', 'Defined Lighting Kit', 'Weatherproof Molded Vinyl Seats'],
        specs: { 'Motor Type': '4.0 kW AC Brushless', 'Controller': 'Curtis Controller', 'Chassis': 'Aluminum Box Frame', 'Brakes': 'Dual Rear Drum Brakes' }
    },
    {
        id: 'lifestyle-tempo-2-2',
        slug: 'lifestyle-tempo-2-2',
        name: 'Tempo 2+2',
        category: 'Lifestyle & Private Use',
        buildSet: 'lifestyle',
        packages: ['lithium', 'flip', 'lifted', 'rims'],
        accessoryTags: ['tempo', 'tempo-2+2'],
        colorFamily: 'tempo',
        canopyKey: 'tempo-2+2',
        tagline: 'Family transport, made practical.',
        description: 'Two forward-facing seats plus two rear-facing seats, with an optional rear flip seat that turns passenger space into cargo space.',
        priceLabel: 'Inquire for Price',
        seating: '4 Seats (2 Forward + 2 Rear)',
        range: '88 km per charge',
        speed: '32 km/h max',
        battery: '72V High Capacity Lithium',
        chargingTime: '3.5 Hours',
        powertrain: '5.0 kW AC Motor',
        image: 'image/Products/Tempo 2+2 - Family.png',
        gallery: ['image/Products/Tempo 2+2 - Family.png', 'image/Products/Tempo 2+2 - Family - Sangria Red.png', 'image/Products/Tempo 2+2 - Explorer.png', 'image/Products/Tempo 2+2 - Lifted.png'],
        colorPhotos: { 'Green': 'image/Products/Tempo 2+2 - Family.png', 'Sangria': 'image/Products/Tempo 2+2 - Family - Sangria Red.png' },
        features: ['Two Forward + Two Rear-Facing Seats', 'Optional Rear Flip Seat for Cargo', 'Compatible Seat Belts and Grab Handles', 'Defined Lighting and Mirror Package'],
        specs: { 'Motor Type': '5.0 kW AC Motor', 'Controller': 'Enpower 350A Controller', 'Chassis': 'Aluminum Frame Chassis', 'Brakes': '4-Wheel Hydraulic Disc Brakes' }
    },
    {
        id: 'lifestyle-tempo-4',
        slug: 'lifestyle-tempo-4',
        name: 'Tempo 4',
        category: 'Lifestyle & Private Use',
        buildSet: 'lifestyle',
        packages: ['lithium', 'lifted', 'rims'],
        accessoryTags: ['tempo', 'tempo-4'],
        colorFamily: 'tempo',
        canopyKey: 'tempo-4',
        tagline: 'Four passengers, all facing forward.',
        description: 'Four seats in two forward-facing rows, for families and guests moving around a village, estate or farm.',
        priceLabel: 'Inquire for Price',
        seating: '4 Seats (Two Forward Rows)',
        range: '95 km per charge',
        speed: '32 km/h max',
        battery: '72V Lithium-Ion Pack',
        chargingTime: '3.0 Hours',
        powertrain: '5.0 kW AC High-Output Motor',
        image: 'image/Products/Club Car 4.png',
        gallery: ['image/Products/Club Car 4.png'],
        features: ['Four Seats in Two Forward-Facing Rows', 'Compatible Seat Belts and Grab Handles', 'Defined Lighting and Mirror Package', 'Extended Roof Canopy'],
        specs: { 'Motor Type': '5.0 kW High Output AC Motor', 'Controller': 'Curtis 350A Controller', 'Chassis': 'Aluminum Spaceframe', 'Brakes': '4-Wheel Hydraulic Brake System' }
    },
    {
        id: 'lifestyle-tempo-4-2',
        slug: 'lifestyle-tempo-4-2',
        name: 'Tempo 4+2',
        category: 'Lifestyle & Private Use',
        buildSet: 'lifestyle',
        packages: ['lithium', 'flip', 'lifted', 'rims'],
        accessoryTags: ['tempo', 'tempo-4+2'],
        colorFamily: 'tempo',
        canopyKey: 'tempo-4+2',
        tagline: 'Room for the whole group.',
        description: 'Four forward-facing seats plus a rear row, with an optional rear flip-seat arrangement for extra passengers or cargo.',
        priceLabel: 'Inquire for Price',
        seating: '6 Seats (4 Forward + 2 Rear)',
        range: '85 km per charge',
        speed: '32 km/h max',
        battery: '72V Lithium Pack',
        chargingTime: '4.0 Hours',
        powertrain: '6.3 kW Heavy Torque Motor',
        image: 'image/Products/4 plus2 Lifted.png',
        gallery: ['image/Products/4 plus2 Lifted.png'],
        features: ['Four Forward + Two Rear-Facing Seats', 'Optional Rear Flip-Seat Arrangement', 'Compatible Seat Belts and Grab Handles', 'Lifted Package Available'],
        specs: { 'Motor Type': '6.3 kW AC Heavy Duty', 'Controller': 'Curtis 400A Controller', 'Chassis': 'Heavy Duty Tubular Frame', 'Brakes': '4-Wheel Hydraulic Disc Brakes' }
    },

    // ==========================================
    // 3. RESORT & HOSPITALITY — Guest Transportation, Utility & Operations, Fit-to-Task (blueprint 05–06)
    // ==========================================
    {
        id: 'villager-6',
        slug: 'villager-6',
        name: 'Villager 6',
        category: 'Resort & Hospitality',
        subgroup: 'Guest Transportation',
        buildSet: 'villager',
        accessoryTags: ['villager', 'villager-6'],
        colorFamily: 'villager',
        canopyKey: 'villager-6',
        tagline: 'Guest transportation.',
        description: 'Six seats for resort transfers and property shuttles, chosen around passenger demand, comfort and presentation.',
        priceLabel: 'Inquire for Price',
        seating: '6 Seats (4 Forward + 2 Rear)',
        range: '90 km per charge',
        speed: '28 km/h max',
        battery: '72V 160Ah High-Capacity Lithium',
        chargingTime: '4.0 Hours',
        powertrain: '6.3 kW Heavy Duty AC Motor',
        image: 'image/Products/Villager 6.png',
        gallery: ['image/Products/Villager 6.png'],
        features: ['Extended Roof Canopy with Rain Gutter Trim', 'Ultra-Soft Memory Foam Marine Cushioning', 'Rear Fold-Down Footrest Deck', 'Heavy Duty Commercial Axle Suspension'],
        specs: { 'Motor Type': '6.3 kW AC Motor', 'Controller': 'Curtis 400A Controller', 'Chassis': 'Galvanized Steel Frame', 'Brakes': 'Hydraulic Disc Brakes + Regenerative' }
    },
    {
        id: 'villager-8',
        slug: 'villager-8',
        name: 'Villager 8',
        category: 'Resort & Hospitality',
        subgroup: 'Guest Transportation',
        buildSet: 'villager',
        accessoryTags: ['villager', 'villager-8'],
        colorFamily: 'villager',
        canopyKey: 'villager-8',
        tagline: 'Higher-capacity guest transportation.',
        description: 'Eight seats for group movement and frequent shuttle runs, in quiet, eco-friendly comfort.',
        priceLabel: 'Inquire for Price',
        seating: '8 Seats (6 Forward + 2 Rear)',
        range: '100 km per charge',
        speed: '28 km/h max',
        battery: '72V 200Ah High-Output Lithium',
        chargingTime: '4.5 Hours',
        powertrain: '7.5 kW Silent AC Motor',
        image: 'image/Products/Villager 8.png',
        gallery: ['image/Products/Villager 8.png'],
        features: ['Full Panoramic Length Overhead Canopy Roof', 'Heavy Load-Bearing Suspension Dampers', 'Individual Row USB Fast Charging Outlets', 'Rear Cargo Convertible Seat Deck'],
        specs: { 'Motor Type': '7.5 kW AC Motor', 'Controller': 'Curtis 450A Controller', 'Chassis': 'Reinforced Steel Frame', 'Brakes': '4-Wheel Hydraulic Disc Brakes' }
    },
    {
        id: 'transporter-400',
        slug: 'transporter-400',
        name: 'Transporter 4',
        category: 'Resort & Hospitality',
        subgroup: 'Guest Transportation',
        accessoryTags: ['utility', 'transporter-4'],
        colorFamily: 'carryall',
        canopyKey: 'transporter-4',
        tagline: 'Guests plus luggage.',
        description: 'Forward-facing passenger seating with rear cargo space for luggage transfers and property logistics.',
        priceLabel: 'Inquire for Price',
        seating: '4 Seats + Cargo Box',
        range: '80 km per charge',
        speed: '30 km/h max',
        battery: '72V Industrial Lithium',
        chargingTime: '4.0 Hours',
        powertrain: '6.3 kW AC Motor',
        image: 'image/Products/Transporter 4.png',
        gallery: ['image/Products/Transporter 4.png'],
        features: ['Forward-Facing Passenger Seating', 'Rear Cargo Space for Luggage', 'Heavy Duty Tow Hitch Receiver Included', 'Waterproof Heavy Rubberized Cabin Floor'],
        specs: { 'Motor Type': '6.3 kW AC Heavy Torque Brushless', 'Controller': 'Curtis High-Output Industrial Controller', 'Chassis': 'Hot-Dip Galvanized Reinforced Steel Frame', 'Brakes': '4-Wheel Hydraulic Disc Brakes' }
    },
    {
        id: 'minibus-14',
        slug: 'minibus-14',
        name: 'Minibus 14',
        category: 'Resort & Hospitality',
        subgroup: 'Guest Transportation',
        accessoryTags: ['minibus'],
        canopyKey: 'minibus-14',
        tagline: 'Larger-group transport.',
        description: 'A 14-seater for moving larger groups, chosen around your route, gradients, passenger volume and charging plan.',
        priceLabel: 'Inquire for Price',
        seating: '14 Seats',
        range: '110 km per charge',
        speed: '30 km/h max',
        battery: '72V 200Ah Commercial Lithium Pack',
        chargingTime: '4.5 Hours',
        powertrain: '7.5 kW Heavy Duty Motor',
        image: 'image/Products/Minibus 14.png',
        gallery: ['image/Products/Minibus 14.png'],
        features: ['14 Forward-Facing Captain Seats with Lap Belts', 'Passenger Roof Ventilation System', 'Motorized Retractable Boarding Step', 'Built-in PA Public Address Speaker System'],
        specs: { 'Motor Type': '7.5 kW AC Heavy Torque Motor', 'Controller': 'Curtis 450A Industrial Controller', 'Chassis': 'Reinforced Box Tubular Steel Frame', 'Brakes': 'Dual Circuit Vacuum Servo Brakes' }
    },
    {
        id: 'carryall-300',
        slug: 'carryall-300',
        name: 'Carryall 300',
        category: 'Resort & Hospitality',
        subgroup: 'Utility & Operations',
        accessoryTags: ['utility', 'carryall'],
        colorFamily: 'carryall',
        canopyKey: 'carryall-300',
        tagline: 'Compact utility work.',
        description: 'For compact utility work and light maintenance tasks, with a tight turning radius for narrow paths and service areas.',
        priceLabel: 'Inquire for Price',
        seating: '2 Seats + Cargo Box',
        range: '70 km per charge',
        speed: '25 km/h max',
        battery: '72V Standard Utility Lithium',
        chargingTime: '4.5 Hours',
        powertrain: '5.0 kW AC Motor',
        image: 'image/Products/CA300.png',
        gallery: ['image/Products/CA300.png'],
        features: ['800 lbs Total Carrying Capacity', 'Compact Turning Radius for Narrow Aisles', 'Scuff-Resistant Utility Molded Body Panels'],
        specs: { 'Motor Type': '5.0 kW AC Motor', 'Controller': 'Curtis 350A Controller', 'Chassis': 'Aluminum Box Frame Chassis', 'Brakes': 'Dual Rear Mechanical Brakes' }
    },
    {
        id: 'carryall-500',
        slug: 'carryall-500',
        name: 'Carryall 500',
        category: 'Resort & Hospitality',
        subgroup: 'Utility & Operations',
        accessoryTags: ['utility', 'carryall'],
        colorFamily: 'carryall',
        canopyKey: 'carryall-500',
        tagline: 'Daily property operations.',
        description: 'The base for daily property operations and customized service bodies, from amenities and linen to engineering carts.',
        priceLabel: 'Inquire for Price',
        seating: '2 Seats + Cargo Box',
        range: '75 km per charge',
        speed: '30 km/h max',
        battery: '72V Heavy-Duty Lithium',
        chargingTime: '4.0 Hours',
        powertrain: '6.3 kW Heavy Torque Motor',
        image: 'image/Products/CA500.png',
        gallery: ['image/Products/CA500.png'],
        features: ['Heavy Duty Aluminum Cargo Box', '1,200 lbs Total Payload Carrying Capacity', 'Base for Fit-to-Task Service Bodies', 'All-Terrain Heavy Ply Tires'],
        specs: { 'Motor Type': '6.3 kW Heavy Duty AC Motor', 'Controller': 'Curtis 400A Industrial Controller', 'Chassis': 'Rust-Proof Armor-Plex Aluminum Frame', 'Brakes': '4-Wheel Mechanical Disc Brakes' }
    },
    {
        id: 'cafe-express',
        slug: 'cafe-express',
        name: 'Café Express',
        category: 'Resort & Hospitality',
        subgroup: 'Fit-to-Task',
        tagline: 'Food and beverage service, on the move.',
        description: 'A fully equipped mobile refreshment and catering cart for resorts, golf courses and outdoor venues.',
        priceLabel: 'Inquire for Price',
        seating: '2 Seats + Beverage Counter',
        range: '75 km per charge',
        speed: '25 km/h max',
        battery: '72V Commercial Grade Lithium',
        chargingTime: '4.0 Hours',
        powertrain: '5.0 kW AC Motor',
        image: 'image/Products/Cafe Express.png',
        gallery: ['image/Products/Cafe Express.png'],
        features: ['Insulated Stainless Steel Beverage Compartment', 'Display Shelving with Overhead Illumination', 'Slide-Out Trash and Recycling Receptacles', 'Retractable Awning Canopy Shade Bar'],
        specs: { 'Motor Type': '5.0 kW AC Direct Drive Motor', 'Controller': 'Curtis 350A Commercial Controller', 'Chassis': 'Galvanized Steel Frame', 'Brakes': 'Front Disc & Rear Drum Brakes' }
    },

    // ==========================================
    // 5. ALL ACCESSORIES
    // ==========================================
    {
        id: 'acc-5-panel-mirror',
        slug: 'acc-5-panel-mirror',
        name: '5-Panel Wide Panoramic Rear Mirror',
        category: 'Accessories',
        tagline: 'Full 180-Degree Blindspot Reduction',
        description: 'Ultra-wide 5-panel rear view mirror system maximizing driver visibility and safety.',
        priceLabel: 'Inquire for Price',
        seating: 'Universal Canopy Mount',
        range: 'N/A',
        speed: 'N/A',
        battery: 'N/A',
        chargingTime: 'N/A',
        powertrain: 'Anti-Glare Glass',
        image: 'image/Accessories/5 Panel Rear Mirror.jpg',
        gallery: ['image/Accessories/5 Panel Rear Mirror.jpg', 'image/Accessories/5 Panel Rear Mirror png.png'],
        features: ['5 Individual Anti-Glare Glass Panels', 'Shatter-Proof High Impact Casing', 'Vibration-Free Metal Bracket Kit'],
        specs: { 'Mounting': 'Canopy Frame Mount', 'Field of View': '180 Degrees Panoramic' }
    },
    {
        id: 'acc-bag-cover',
        slug: 'acc-bag-cover',
        name: 'Golf Bag Weather Cover',
        category: 'Accessories',
        tagline: 'Waterproof All-Weather Bag Protection',
        description: 'Heavy-duty water-repellent canvas bag cover designed to protect golf clubs from rain and dirt.',
        priceLabel: 'Inquire for Price',
        seating: 'Rear Bag Holder Fit',
        range: 'N/A',
        speed: 'N/A',
        battery: 'N/A',
        chargingTime: 'N/A',
        powertrain: 'Quick-Zip Closure',
        image: 'image/Accessories/Bag Cover.jpg',
        gallery: ['image/Accessories/Bag Cover.jpg', 'image/Accessories/Golf Cover.jpg'],
        features: ['Waterproof Fabric Construction', 'Easy Quick-Zip Access to Clubs', 'Elasticated Hem for Snug Secure Fit'],
        specs: { 'Material': 'Heavy-Duty Waterproof Nylon', 'Compatibility': 'Universal Bag Racks' }
    },
    {
        id: 'acc-ball-cleaner',
        slug: 'acc-ball-cleaner',
        name: 'Club & Ball Cleaner Washer Unit',
        category: 'Accessories',
        tagline: 'Dual Chamber Cleaning System',
        description: 'Heavy-duty mountable club head and golf ball washer with internal cleaning bristles.',
        priceLabel: 'Inquire for Price',
        seating: 'Fender/Strut Mount',
        range: 'N/A',
        speed: 'N/A',
        battery: 'N/A',
        chargingTime: 'N/A',
        powertrain: 'Drain Plug Base',
        image: 'image/Accessories/Ball Cleaner.jpg',
        gallery: ['image/Accessories/Ball Cleaner.jpg', 'image/Accessories/ball cleaner png.png'],
        features: ['Separate Golf Ball and Club Washer Chambers', 'High-Density Nylon Internal Bristles', 'Easy Drain Plug for Fast Reservoir Rinsing'],
        specs: { 'Capacity': 'Twin Chamber', 'Mounting': 'Universal Fender Bracket' }
    },
    {
        id: 'acc-brush-guard',
        slug: 'acc-brush-guard',
        name: 'Front Steel Brush Guard',
        category: 'Accessories',
        tagline: 'Heavy Duty Front Body Protection',
        description: 'Powder-coated steel front brush guard designed to shield the cowl and body panels from trail debris.',
        priceLabel: 'Inquire for Price',
        seating: 'Front Bumper Mount',
        range: 'N/A',
        speed: 'N/A',
        battery: 'N/A',
        chargingTime: 'N/A',
        powertrain: 'Reinforced Steel',
        image: 'image/Accessories/Brush guard.jpg',
        gallery: ['image/Accessories/Brush guard.jpg'],
        features: ['Tubular Steel Construction', 'Black Powder-Coated Rust Resistant Finish', 'Direct Bolt-On No-Drill Installation'],
        specs: { 'Material': 'Heavy-Gauge Steel', 'Compatibility': 'Tempo & Club Car Chassis' }
    },
    {
        id: 'acc-cooler',
        slug: 'acc-cooler',
        name: 'Side Mount Thermal Cooler',
        category: 'Accessories',
        tagline: 'Insulated Beverage Companion',
        description: 'Thermal insulated beverage cooler unit designed to keep drinks cold throughout 18 holes.',
        priceLabel: 'Inquire for Price',
        seating: 'Side Strut Mount',
        range: 'N/A',
        speed: 'N/A',
        battery: 'N/A',
        chargingTime: 'N/A',
        powertrain: 'Thermal Insulation',
        image: 'image/Accessories/Cooler.jpg',
        gallery: ['image/Accessories/Cooler.jpg', 'image/Accessories/cooler png.png'],
        features: ['Holds up to 12 Standard Cans plus Ice', 'Double-Wall Thermal Insulation', 'Quick-Release Lock Bracket Assembly'],
        specs: { 'Capacity': '12 Quarts', 'Material': 'UV-Stabilized Polyethylene' }
    },
    {
        id: 'acc-dashboard',
        slug: 'acc-dashboard',
        name: 'Custom Carbon Dashboard Console',
        category: 'Accessories',
        tagline: 'Locking Glove Boxes & Beverage Holders',
        description: 'Custom replacement dashboard console with dual locking storage compartments and cup holders.',
        priceLabel: 'Inquire for Price',
        seating: 'Dash Insert',
        range: 'N/A',
        speed: 'N/A',
        battery: 'N/A',
        chargingTime: 'N/A',
        powertrain: 'Carbon Finish',
        image: 'image/Accessories/Dashboard.jpg',
        gallery: ['image/Accessories/Dashboard.jpg', 'image/Accessories/dashboard png.png'],
        features: ['Twin Key-Locking Glove Compartments', 'Carbon Fiber Accent Weave Trim', 'Quad Molded Beverage Holders'],
        specs: { 'Material': 'High-Impact ABS Plastic', 'Finish': 'Carbon Fiber Finish' }
    },
    {
        id: 'acc-deluxe-lights',
        slug: 'acc-deluxe-lights',
        name: 'Deluxe LED Headlight & Taillight Kit',
        category: 'Accessories',
        tagline: 'Street-Legal Turn Signals & Brake Lights',
        description: 'Complete LED lighting package including headlights, tail lights, turn signals, horn, and brake switch.',
        priceLabel: 'Inquire for Price',
        seating: 'Full Wiring Harness',
        range: '12V-48V Compatible',
        speed: 'N/A',
        battery: 'LED Energy Saver',
        chargingTime: 'N/A',
        powertrain: 'Plug and Play',
        image: 'image/Accessories/Deluxe Lights.jpg',
        gallery: ['image/Accessories/Deluxe Lights.jpg'],
        features: ['Energy-Efficient High Output LED Beams', 'Integrated Turn Signal & Emergency Hazard Controls', 'Automotive Horn Switch Included'],
        specs: { 'Voltage': '12V - 48V Voltage Reducer Compatible', 'Rating': 'IP67 Waterproof' }
    },
    {
        id: 'acc-divot-sand-bottle',
        slug: 'acc-divot-sand-bottle',
        name: 'Divot Repair Sand Bottle Assembly',
        category: 'Accessories',
        tagline: 'Fairway Care Sand Dispenser',
        description: 'Ergonomic sand bottle dispenser unit for quick fairway turf divot repair.',
        priceLabel: 'Inquire for Price',
        seating: 'Strut Mount',
        range: 'N/A',
        speed: 'N/A',
        battery: 'N/A',
        chargingTime: 'N/A',
        powertrain: 'Pour Spout',
        image: 'image/Accessories/Divot repair sand bottle.jpg',
        gallery: ['image/Accessories/Divot repair sand bottle.jpg', 'image/Accessories/Divot repair sand bottle png.png'],
        features: ['Ergonomic Handle for Smooth Pouring', 'Durable Weatherproof Bottle Body', 'Quick Snap-In Bracket Holder'],
        specs: { 'Capacity': '1.5 Liters', 'Mounting': 'Canopy Support Strut' }
    },
    {
        id: 'acc-golf-cover',
        slug: 'acc-golf-cover',
        name: 'Full Vehicle All-Weather Enclosure',
        category: 'Accessories',
        tagline: 'Roll-Down Clear Vinyl Rain Curtains',
        description: 'Full-vehicle clear rain enclosure protecting passengers and golf gear during wet weather.',
        priceLabel: 'Inquire for Price',
        seating: '2 or 4 Seater Fit',
        range: 'N/A',
        speed: 'N/A',
        battery: 'N/A',
        chargingTime: 'N/A',
        powertrain: 'Heavy Zipper System',
        image: 'image/Accessories/Golf Cover.jpg',
        gallery: ['image/Accessories/Golf Cover.jpg', 'image/Accessories/Magnetic Cover.jpg'],
        features: ['Heavy-Duty Clear Marine Grade Vinyl Windows', 'Roll-Up Side Doors with Snap Straps', 'Reinforced Zipper Door Closures'],
        specs: { 'Material': 'Commercial Grade Poly Canvas', 'Fit': 'Custom Canopy Fit' }
    },
    {
        id: 'acc-lux-seat-brown',
        slug: 'acc-lux-seat-brown',
        name: 'Lux Diamond Leather Seat (Brown)',
        category: 'Accessories',
        tagline: 'Executive Camello Warm Brown Leather',
        description: 'Hand-stitched luxury seat replacement featuring diamond quilt patterns and high-density foam.',
        priceLabel: 'Inquire for Price',
        seating: 'Front & Rear Bench',
        range: 'N/A',
        speed: 'N/A',
        battery: 'UV Protected',
        chargingTime: 'N/A',
        powertrain: 'Memory Foam',
        image: 'image/Accessories/Lux Seat - Brown.jpg',
        gallery: ['image/Accessories/Lux Seat - Brown.jpg', 'image/Accessories/Lux Seat - White.jpg'],
        features: ['Marine Grade Waterproof Synthetic Leather', 'Custom Diamond Stitching Accent', 'High Density Ergonomic Core Foam'],
        specs: { 'Color': 'Camello Warm Brown', 'Material': 'UV Treated Synthetic Leather' }
    },
    {
        id: 'acc-lux-seat-white',
        slug: 'acc-lux-seat-white',
        name: 'Lux Diamond Leather Seat (White)',
        category: 'Accessories',
        tagline: 'Pristine White Luxury Seating',
        description: 'Premium white diamond-stitched seat cushions providing cool comfort and modern luxury style.',
        priceLabel: 'Inquire for Price',
        seating: 'Front & Rear Bench',
        range: 'N/A',
        speed: 'N/A',
        battery: 'Stain Resistant',
        chargingTime: 'N/A',
        powertrain: 'Memory Foam',
        image: 'image/Accessories/Lux Seat - White.jpg',
        gallery: ['image/Accessories/Lux Seat - White.jpg', 'image/Accessories/Premium Seat - Camello white beige.jpg'],
        features: ['Stain-Resistant Heat Reduction Coating', 'Double Diamond Accent Stitching', 'Ergonomic Thigh Support Contour'],
        specs: { 'Color': 'Pristine Bright White', 'Material': 'Marine Synthetic Leather' }
    },
    {
        id: 'acc-magnetic-cover',
        slug: 'acc-magnetic-cover',
        name: 'Magnetic Fast-Attach Enclosure',
        category: 'Accessories',
        tagline: 'Quick Snap Magnetic Side Curtains',
        description: 'Innovative enclosure curtain system utilizing ultra-strong neodymium magnets for fast installation.',
        priceLabel: 'Inquire for Price',
        seating: 'Universal Fit',
        range: 'N/A',
        speed: 'N/A',
        battery: 'N/A',
        chargingTime: 'N/A',
        powertrain: 'Magnetic Seal',
        image: 'image/Accessories/Magnetic Cover.jpg',
        gallery: ['image/Accessories/Magnetic Cover.jpg', 'image/Accessories/magnetic cover png.png'],
        features: ['Ultra-Fast Magnetic Frame Seal', 'Clear Optical Clear Windows', 'Compact Storage Storage Bag Included'],
        specs: { 'Fastener': 'Neodymium Magnet Strip', 'Material': 'Marine Vinyl' }
    },
    {
        id: 'acc-premium-seat-black',
        slug: 'acc-premium-seat-black',
        name: 'Premium Diamond Seat (Black)',
        category: 'Accessories',
        tagline: 'Classic Stealth Black Cushioning',
        description: 'Sleek black diamond-stitched seats crafted for high durability and aggressive style.',
        priceLabel: 'Inquire for Price',
        seating: 'Front & Rear Bench',
        range: 'N/A',
        speed: 'N/A',
        battery: 'N/A',
        chargingTime: 'N/A',
        powertrain: 'Heavy Duty Foam',
        image: 'image/Accessories/Premium Seat - Black.jpg',
        gallery: ['image/Accessories/Premium Seat - Black.jpg', 'image/Accessories/Premium Seat - Grey.jpg'],
        features: ['All-Black Stealth Aesthetic', 'Water-Repellent Stitch Seams', 'Heavy-Duty Reinforced Base Plate'],
        specs: { 'Color': 'Obsidian Black', 'Material': 'Marine Grade Vinyl' }
    },
    {
        id: 'acc-premium-seat-grey',
        slug: 'acc-premium-seat-grey',
        name: 'Premium Diamond Seat (Grey)',
        category: 'Accessories',
        tagline: 'Modern Slate Grey Cushioning',
        description: 'Modern slate grey replacement seating cushions resistant to sun damage and moisture.',
        priceLabel: 'Inquire for Price',
        seating: 'Front & Rear Bench',
        range: 'N/A',
        speed: 'N/A',
        battery: 'N/A',
        chargingTime: 'N/A',
        powertrain: 'Heavy Duty Foam',
        image: 'image/Accessories/Premium Seat - Grey.jpg',
        gallery: ['image/Accessories/Premium Seat - Grey.jpg'],
        features: ['Cool-Touch Grey Surface Treatment', 'Reinforced Side Bolsters', 'Precision Stitched Seams'],
        specs: { 'Color': 'Slate Grey', 'Material': 'Marine Grade Vinyl' }
    },
    {
        id: 'acc-premium-speaker',
        slug: 'acc-premium-speaker',
        name: 'Premium Soundstream Bluetooth Bar',
        category: 'Accessories',
        tagline: '300W Peak Waterproof Audio Bar',
        description: 'High-output Bluetooth marine soundbar with integrated RGB LED accent lighting.',
        priceLabel: 'Inquire for Price',
        seating: 'Roof Bar Mount',
        range: 'Bluetooth 5.0',
        speed: 'N/A',
        battery: '12V Connection',
        chargingTime: 'N/A',
        powertrain: '300W Amplifier',
        image: 'image/Accessories/premium speaker.jpg',
        gallery: ['image/Accessories/premium speaker.jpg'],
        features: ['IP66 Waterproof Rating', 'Integrated 300W Amplifier', 'Wireless Bluetooth Audio Connection'],
        specs: { 'Power': '300W Peak', 'Rating': 'IP66 Waterproof' }
    },
    {
        id: 'acc-rear-armrest',
        slug: 'acc-rear-armrest',
        name: 'Rear Armrest Console with Cup Holders',
        category: 'Accessories',
        tagline: 'Rear Passenger Comfort Extension',
        description: 'Padded armrest console with integrated dual cup holders designed for rear flip seats.',
        priceLabel: 'Inquire for Price',
        seating: 'Rear Flip Seat Fit',
        range: 'N/A',
        speed: 'N/A',
        battery: 'N/A',
        chargingTime: 'N/A',
        powertrain: 'Bolt-On Mount',
        image: 'image/Accessories/Rear arm rest with cup holder.jpg',
        gallery: ['image/Accessories/Rear arm rest with cup holder.jpg', 'image/Accessories/Rear Flip Seat.jpg'],
        features: ['Dual Stainless Steel Cup Holder Inserts', 'Plush Padded Armrest Cushioning', 'Easy Clamp-On Installation'],
        specs: { 'Material': 'Padded Vinyl + Stainless Steel Inserts', 'Compatibility': 'Universal Rear Flip Seats' }
    },
    {
        id: 'acc-rear-flip-seat',
        slug: 'acc-rear-flip-seat',
        name: 'Convertible Rear Flip Seat Kit',
        category: 'Accessories',
        tagline: 'Transforms Seating into Flatbed Cargo Deck',
        description: 'Multi-functional rear seat kit that folds flat into a heavy-duty cargo utility platform.',
        priceLabel: 'Inquire for Price',
        seating: 'Adds 2 Rear Seats',
        range: 'N/A',
        speed: 'N/A',
        battery: 'N/A',
        chargingTime: 'N/A',
        powertrain: 'Heavy Duty Frame',
        image: 'image/Accessories/Rear Flip Seat.jpg',
        gallery: ['image/Accessories/Rear Flip Seat.jpg'],
        features: ['Heavy-Duty Composite Plastic Flatbed Surface', 'Integrated Safety Grab Bar', 'Powder-Coated Steel Frame Structure'],
        specs: { 'Capacity': '400 lbs Deck Load', 'Material': 'Powder Coated Steel + Composite Deck' }
    },
    {
        id: 'acc-seat-belt',
        slug: 'acc-seat-belt',
        name: 'Retractable Passenger Seat Belt Kit',
        category: 'Accessories',
        tagline: 'DOT Approved Safety Seatbelts',
        description: 'Universal retractable 3-point seatbelt safety kit for front or rear passengers.',
        priceLabel: 'Inquire for Price',
        seating: 'Universal Fit',
        range: 'N/A',
        speed: 'N/A',
        battery: 'N/A',
        chargingTime: 'N/A',
        powertrain: 'Auto Retract',
        image: 'image/Accessories/seat belt.jpg',
        gallery: ['image/Accessories/seat belt.jpg', 'image/Accessories/seatbelt png.png'],
        features: ['Auto-Retracting Belt Reel Mechanism', 'DOT Certified Safety Buckles', 'Universal Mounting Bracket Hardware'],
        specs: { 'Standard': 'DOT Certified', 'Fit': 'Universal Front / Rear' }
    },
    {
        id: 'acc-side-mirror',
        slug: 'acc-side-mirror',
        name: 'LED Turn Signal Side Mirrors',
        category: 'Accessories',
        tagline: 'Integrated Amber LED Signal Lights',
        description: 'Dual side-view mirrors with integrated forward-facing LED turn signal indicators.',
        priceLabel: 'Inquire for Price',
        seating: 'Front Strut Mount',
        range: 'N/A',
        speed: 'N/A',
        battery: '12V LED Light',
        chargingTime: 'N/A',
        powertrain: 'Adjustable Angle',
        image: 'image/Accessories/Side Mirror.jpg',
        gallery: ['image/Accessories/Side Mirror.jpg', 'image/Accessories/Side mirror png.png', 'image/Accessories/rear mirror.jpg'],
        features: ['Built-in Front Amber LED Turn Signals', 'Fully Adjustable Convex Mirror Glass', 'High-Impact Weatherproof Plastic Housing'],
        specs: { 'Voltage': '12V', 'Glass': 'Convex Anti-Glare' }
    },
    {
        id: 'acc-velcro-bag',
        slug: 'acc-velcro-bag',
        name: 'Velcro Quick-Attach Organizer Bag',
        category: 'Accessories',
        tagline: 'Convenient Dash & Frame Storage',
        description: 'Multi-pocket storage bag with industrial velcro straps for keeping personal items secure.',
        priceLabel: 'Inquire for Price',
        seating: 'Dash / Frame Fit',
        range: 'N/A',
        speed: 'N/A',
        battery: 'N/A',
        chargingTime: 'N/A',
        powertrain: 'Velcro Strap',
        image: 'image/Accessories/Velcro Bag png.png',
        gallery: ['image/Accessories/Velcro Bag png.png'],
        features: ['Heavy Duty Zipper Compartments', 'Industrial Strength Fastening Straps', 'Water-Resistant Cordura Fabric'],
        specs: { 'Material': 'Cordura Nylon', 'Mounting': 'Velcro Strap System' }
    }
];

// Category Headers Data Map (one per buying pillar). `photo` is a lifestyle banner shown full-bleed behind the text
// (`photoFocus` keeps the cart in frame); categories without one show the product cut-out. `label` overrides the tab name.
const CATEGORY_BANNERS = {
    'The Golfer': {
        title: 'The Golfer',
        headline: 'Built around the way you play.',
        subheadline: 'Tempo 2, Tempo 2+2 and Tempo 4, each in Golfer, Scratch and Pro builds.',
        image: 'image/Products/Premium.png',
        photo: 'image/Banners/golf.jpg',
        photoFocus: '60% 60%'
    },
    'Lifestyle & Private Use': {
        title: 'Lifestyle & Private Use',
        headline: 'Mobility for homes, villages, estates and farms.',
        subheadline: 'Practical, comfort and premium builds, with optional packages.',
        image: 'image/Products/Tempo 2+2 - Family - Sangria Red.png',
        photo: 'image/Banners/personal.jpg',
        photoFocus: '50% 45%'
    },
    'Resort & Hospitality': {
        title: 'Resort & Hospitality',
        headline: 'Guest transport and daily property operations.',
        subheadline: 'Guest transportation, utility and fit-to-task solutions, matched to passenger flow, luggage and operating conditions.',
        image: 'image/Products/Villager 8.png',
        photo: 'image/Banners/resort.jpg',
        photoFocus: '60% 65%'
    },
    'Accessories': {
        label: 'Parts & Accessories',
        title: 'Parts & Accessories',
        headline: 'Genuine upgrades for your cart.',
        subheadline: 'Golf equipment, wheels and tires, seats, lighting, storage, audio, batteries and other compatible accessories.',
        image: 'image/Accessories/Lux Seat - Brown.jpg'
    }
};

// Display name for a category (e.g. the 'Accessories' key shows as "Parts & Accessories")
function categoryLabel(cat) {
    return (CATEGORY_BANNERS[cat] && CATEGORY_BANNERS[cat].label) || cat;
}

// Build levels per range (blueprint 02–05). Golf build names are confirmed; package contents and the
// lifestyle names are proposed in the brief, so the page labels them "proposed" until sales finalizes them.
const BUILD_SETS = {
    'golfer-2': {
        title: 'Golfer, Scratch or Pro.',
        confirmed: true,
        builds: [
            { id: 'golfer', name: 'Golfer', tagline: 'Golf essentials', includes: ['Standard cart', 'Golf bag provision', 'Basic rear bag cover'] },
            { id: 'scratch', name: 'Scratch', tagline: 'Golf accessories & comfort', includes: ['Everything in Golfer', 'Cooler', 'Ball washer', 'Premium magnetic bag cover'], note: 'Upgraded steering wheel can be selected separately.' },
            { id: 'pro', name: 'Pro', tagline: 'Premium personal build', includes: ['Scratch golf accessories', 'Premium seats', 'Premium steering wheel', 'Bluetooth audio', '10-inch rims'], note: '12-inch rims available as an option.' }
        ]
    },
    'golfer-2-2': {
        title: 'Golfer, Scratch or Pro.',
        confirmed: true,
        builds: [
            { id: 'golfer', name: 'Golfer', tagline: 'Golf essentials', includes: ['Standard 2+2 cart', 'Compatible rear golf bag attachment'] },
            { id: 'scratch', name: 'Scratch', tagline: 'Golf accessories & comfort', includes: ['10-inch rims', 'Premium seats', 'Mirror package', 'Compatible golf accessory options'], proposed: true },
            { id: 'pro', name: 'Pro', tagline: 'Premium personal build', includes: ['12-inch rims', 'Premium seats', 'Bluetooth audio', 'Upper / rear storage', 'Upgraded steering wheel', 'Compatible golf accessories'], proposed: true }
        ]
    },
    'golfer-4': {
        title: 'Golfer, Scratch or Pro.',
        confirmed: true,
        note: 'Tempo 4 follows the Tempo 2 build concept, adapted to its extra seating row.',
        builds: [
            { id: 'golfer', name: 'Golfer', tagline: 'Golf essentials', includes: ['Standard cart', 'Golf bag provision', 'Basic rear bag cover'] },
            { id: 'scratch', name: 'Scratch', tagline: 'Golf accessories & comfort', includes: ['Everything in Golfer', 'Cooler', 'Ball washer', 'Premium magnetic bag cover'], note: 'Upgraded steering wheel can be selected separately.' },
            { id: 'pro', name: 'Pro', tagline: 'Premium personal build', includes: ['Scratch golf accessories', 'Premium seats', 'Premium steering wheel', 'Bluetooth audio', '10-inch rims'], note: '12-inch rims available as an option.' }
        ]
    },
    lifestyle: {
        title: 'Essential, Signature or Elite.',
        confirmed: false,
        builds: [
            { id: 'essential', name: 'Essential', tagline: 'Daily practicality', includes: ['Standard seats', 'Windshield', 'Defined lighting kit', 'Mirror package'], note: 'Upgrades: flip seat where compatible; battery, wheel and task-related options.' },
            { id: 'signature', name: 'Signature', tagline: 'Comfort & style', includes: ['Essential equipment', 'Premium seats', '10-inch rims', 'Upgraded steering wheel', 'Upgraded lighting selection'], note: 'Upgrades: upgraded windshield, storage, audio, lifted package.' },
            { id: 'elite', name: 'Elite', tagline: 'Premium personal cart', includes: ['Signature comfort', '12-inch rims', 'Bluetooth audio', 'Premium steering wheel', 'Upgraded lighting', 'Suitable storage'], note: 'Upgrades: custom finishes, battery upgrade, lifted package, compatible wheel alternatives.' }
        ]
    },
    villager: {
        title: 'Choose your package.',
        confirmed: false,
        builds: [
            { id: 'standard', name: 'Standard Guest Transport', tagline: 'Base transport configuration', includes: ['Lighting, mirrors and passenger equipment defined in your quotation'] },
            { id: 'comfort', name: 'Guest Comfort & Weather', tagline: 'Added comfort and protection', includes: ['Rain enclosure', 'Grab handles', 'Compatible seat belts'], note: 'Extra storage or lighting specified separately.' }
        ]
    }
};

// Optional packages shown under the builds (blueprint 03). `choices` makes a pick-one row (rims).
const BUILD_PACKAGES = {
    lithium: { name: 'Lithium', detail: 'Battery upgrade where offered.' },
    caddy: { name: 'Caddy Package', detail: 'Rear caddy stand.' },
    lifted: { name: 'Lifted Package', detail: 'Lift kit; optional bull bar, nerf bars / side steps. Approved combinations only.' },
    flip: { name: 'Rear Flip Seat', detail: 'Switch between passenger and cargo mode.' },
    rims: { name: 'Rims', detail: 'Larger wheels may require a lift. Tire size confirmed separately.', choices: ['Standard', '10-inch', '12-inch', '14-inch'] }
};

// Vehicle models referenced by the header menus and pillar pages.
// `slug` links to a PRODUCTS_DATA page when one exists; `image: null` shows a placeholder.
const VEHICLE_MODELS = {
    'g-tempo-2':     { name: 'Tempo 2',             image: 'image/Products/Premium.png',                slug: 'golfer-tempo-2', badge: 'Bestseller' },
    'g-tempo-2-2':   { name: 'Tempo 2+2',           image: 'image/Products/Tempo 2+2 - Golf.png',       slug: 'golfer-tempo-2-2' },
    'g-tempo-4':     { name: 'Tempo 4',             image: 'image/Products/Club Car 4.png',             slug: 'golfer-tempo-4' },
    'l-tempo-2':     { name: 'Tempo 2',             image: 'image/Products/Base +.png',                 slug: 'lifestyle-tempo-2' },
    'l-tempo-2-2':   { name: 'Tempo 2+2',           image: 'image/Products/Tempo 2+2 - Family.png',     slug: 'lifestyle-tempo-2-2' },
    'l-tempo-4':     { name: 'Tempo 4',             image: 'image/Products/Club Car 4.png',             slug: 'lifestyle-tempo-4' },
    'l-tempo-4-2':   { name: 'Tempo 4+2',           image: 'image/Products/4 plus2 Lifted.png',         slug: 'lifestyle-tempo-4-2' },
    'villager-6':    { name: 'Villager 6',          image: 'image/Products/Villager 6.png',             slug: 'villager-6' },
    'villager-8':    { name: 'Villager 8',          image: 'image/Products/Villager 8.png',             slug: 'villager-8' },
    'transporter-4': { name: 'Transporter 4',       image: 'image/Products/Transporter 4.png',          slug: 'transporter-400' },
    'transporter-6': { name: 'Transporter 6',       image: null,                                        slug: null },
    'minibus-14':    { name: 'Minibus 14',          image: 'image/Products/Minibus 14.png',             slug: 'minibus-14' },
    'minibus-21':    { name: 'Minibus 21',          image: null,                                        slug: null },
    'ca300':         { name: 'Carryall 300',        image: 'image/Products/CA300.png',                  slug: 'carryall-300' },
    'ca500':         { name: 'Carryall 500',        image: 'image/Products/CA500.png',                  slug: 'carryall-500' },
    'ca700':         { name: 'Carryall 700',        image: 'image/Products/CA700.png',                  slug: null },
    'amenities':     { name: 'Amenities Cart',      image: 'image/Products/House keeping.png',          slug: null },
    'linen':         { name: 'Linen Cart',          image: null,                                        slug: null },
    'food-delivery': { name: 'Food Delivery Cart',  image: 'image/Products/F&B.png',                    slug: null },
    'engineering':   { name: 'Engineering Cart',    image: null,                                        slug: null },
    'handyman':      { name: 'Tempo Handyman',      image: null,                                        slug: null },
    'landscaping':   { name: 'Landscaping Cart',    image: null,                                        slug: null },
    'cafe-express':  { name: 'Café Express',        image: 'image/Products/Cafe Express.png',           slug: 'cafe-express' },
    'custom':        { name: 'Custom Build',        image: null,                                        slug: null },
    'r-tempo-2':     { name: 'Remanufactured 2-Seater',        image: 'image/Products/reman 2.png',     slug: null },
    'r-tempo-2-custom': { name: 'Remanufactured 2-Seater (Custom Color)', image: 'image/Products/reman 3.png', slug: null },
    'r-tempo-2-2':   { name: 'Remanufactured 2+2',             image: 'image/Products/reman 4.png',     slug: null },
    'r-tempo-2-2-lifted': { name: 'Remanufactured 2+2 Lifted', image: 'image/Products/reman 5.png',     slug: null },
    'r-tempo-4':     { name: 'Remanufactured 4-Seater',        image: 'image/Products/reman 1.png',     slug: null }
};

// Menu hierarchy: pillar -> subcategory -> group -> model keys. Drives the header dropdowns, the mobile
// drawer, the Cart page tab sub-menus and the pillar landing pages. `links` add extra menu entries that
// jump to a section of the pillar page; `enquiry` adds a business enquiry prompt to a subcategory.
const NAV_SEGMENTS = [
    {
        id: 'golfer',
        label: 'The Golfer',
        category: 'The Golfer',
        tagline: 'Built around the way you play.',
        description: 'A personal cart for regular golf. Tempo 2, Tempo 2+2 and Tempo 4, each in Golfer, Scratch and Pro builds.',
        image: 'image/Products/Premium.png',
        buildSet: 'golfer-2',
        links: [{ label: 'Compare Golfer / Scratch / Pro', anchor: 'compare' }],
        subcategories: [
            { id: 'models', label: 'Models', groups: [{ label: 'Models', items: ['g-tempo-2', 'g-tempo-2-2', 'g-tempo-4'] }] }
        ]
    },
    {
        id: 'lifestyle',
        label: 'Lifestyle & Private Use',
        category: 'Lifestyle & Private Use',
        tagline: 'Mobility for homes, villages, estates and farms.',
        description: 'Practical, comfort and premium builds with optional packages, for family transport and life around a private property.',
        image: 'image/Products/Tempo 2+2 - Family.png',
        buildSet: 'lifestyle',
        links: [{ label: 'Compare builds', anchor: 'compare' }, { label: 'Explore lifted packages', anchor: 'lifted' }],
        subcategories: [
            { id: 'models', label: 'Models', groups: [{ label: 'Models', items: ['l-tempo-2', 'l-tempo-2-2', 'l-tempo-4', 'l-tempo-4-2'] }] }
        ]
    },
    {
        id: 'resort',
        label: 'Resort & Hospitality',
        category: 'Resort & Hospitality',
        tagline: 'Guest transport and daily property operations.',
        description: 'Match the vehicle to passenger flow, luggage and daily operating conditions, then add utility and fit-to-task builds for the jobs behind the scenes.',
        image: 'image/Products/Villager 8.png',
        subcategories: [
            {
                id: 'guest-transportation',
                label: 'Guest Transportation',
                enquiry: 'Tell us your passenger demand, route, terrain, luggage needs and operating hours. We will recommend a suitable transport setup.',
                groups: [{ label: 'Guest Transportation', items: ['villager-6', 'villager-8', 'transporter-4', 'transporter-6', 'minibus-14', 'minibus-21'] }]
            },
            {
                id: 'utility-operations',
                label: 'Utility & Operations',
                intro: 'Start with the job. Select the vehicle and equipment around it.',
                groups: [{ label: 'Utility & Operations', items: ['ca300', 'ca500', 'ca700'] }]
            },
            {
                id: 'fit-to-task',
                label: 'Fit-to-Task',
                enquiry: 'Need a cart for a specific job? Tell us what it needs to carry and where it will operate.',
                groups: [{ label: 'Fit-to-Task', items: ['amenities', 'linen', 'food-delivery', 'engineering', 'handyman', 'landscaping', 'cafe-express', 'custom'] }]
            }
        ]
    },
    {
        id: 'remanufactured',
        label: 'Remanufactured',
        category: null,
        tagline: 'A clear value offering.',
        description: 'Remanufactured golf and lifestyle builds, with utility where available. Each unit is quoted with its seating layout, rebuild scope, battery type and condition, included equipment, warranty terms and available upgrades.',
        image: 'image/Products/reman 4.png',
        subcategories: [
            {
                id: 'available-units',
                label: 'Available Builds',
                intro: 'Availability changes as units are rebuilt. Ask for the current units, photos and rebuild details.',
                groups: [{ label: 'Available Builds', items: ['r-tempo-2', 'r-tempo-2-custom', 'r-tempo-2-2', 'r-tempo-2-2-lifted', 'r-tempo-4'] }]
            }
        ]
    }
];

// Header navigation order from the blueprint: three buying pillars, then value, fleet and aftersales routes
const MAIN_NAV = [
    { segment: 'golfer' },
    { segment: 'lifestyle' },
    { segment: 'resort' },
    { segment: 'remanufactured' },
    { label: 'Fleet Solutions', action: "navigateTo('solutions')", page: 'solutions' },
    { label: 'Parts & Accessories', action: "setCategoryAndNavigate('Accessories')" },
    { label: 'Service & Support', action: "navigateTo('service')", page: 'service' }
];

// Primary action for individual buyers: start on the hero product's build selector
function buildYourCart() {
    navigateTo('product-details', 'golfer-tempo-2');
    setTimeout(() => scrollToDetailSection('build'), 350);
}

// Main Hero Carousel Variables
let currentSlideIndex = 0;
let carouselTimer = null;

const CAROUSEL_SLIDES = [
    {
        image: "image/Hero/hero-1.jpg",
        alt: "Fairway? Covered. Club Car golf cart on the course",
        ctaLabel: "Explore The Golfer",
        ctaAction: "openSegment('golfer')"
    },
    {
        image: "image/Hero/hero-2.webp",
        alt: "End of Year Sale - 5% off Club Car golf carts",
        ctaLabel: "Shop the Sale",
        ctaAction: "navigateTo('products')"
    },
    {
        image: "image/Hero/hero-3.webp",
        alt: "More than just golf carts. We keep you rolling.",
        ctaLabel: "Book Service",
        ctaAction: "navigateTo('service')"
    },
    {
        image: "image/Hero/hero-5.png",
        alt: "One cart is great. A whole fleet? Even better.",
        ctaLabel: "Request a Fleet Proposal",
        ctaAction: "navigateTo('solutions')"
    }
];

// ==========================================
// HOMEPAGE CONTENT (layout modelled on a model-led automotive homepage)
// ==========================================

// The three buying pillars, side by side under the hero (blueprint: "lead with the three buying pillars")
const HOME_SOLUTION_PANELS = [
    {
        eyebrow: 'The Golfer',
        title: 'Built around the way you play.',
        text: 'A personal cart for regular golf. Tempo 2, 2+2 and 4 in Golfer, Scratch and Pro builds.',
        ctaLabel: 'Explore The Golfer', ctaAction: "openSegment('golfer')", ctaIcon: 'flag',
        golfSlides: true
    },
    {
        eyebrow: 'Lifestyle & Private Use',
        title: 'Mobility for homes, villages, estates and farms.',
        text: 'Practical, comfort and premium builds for family transport and life around a private property.',
        ctaLabel: 'Explore Lifestyle', ctaAction: "openSegment('lifestyle')", ctaIcon: 'home',
        media: `<img src="image/Banners/personal.jpg" alt="Golfers sharing a Club Car" loading="lazy" class="home-panel-media" style="object-position:50% 45%">`
    },
    {
        eyebrow: 'Resort & Hospitality',
        title: 'Guest transport and daily property operations.',
        text: 'Guest transportation, utility and fit-to-task solutions for resorts, hotels and properties.',
        ctaLabel: 'Explore Resort & Hospitality', ctaAction: "openSegment('resort')", ctaIcon: 'play-circle',
        media: `<video autoplay loop muted playsinline class="home-panel-media"><source src="video/resort_video.mp4" type="video/mp4"></video>`
    }
];

// Lineup filter tabs on the homepage (the three buying pillars)
const HOME_LINEUP_TABS = ['All', 'The Golfer', 'Lifestyle & Private Use', 'Resort & Hospitality'];
let homeLineupFilter = 'All';

const BRANCHES = [
    {
        name: 'Manila Branch',
        address: '1877 Honda Cars Manila Building, Paz M. Guazon St. cor Pres. Quirino Ave. Paco, Manila, 1007 National Capital Region',
        phones: ['(02) 7745-5089', '(+63) 999 997 7688', '(+63) 917 631 2184']
    },
    {
        name: 'Cebu Branch',
        address: 'Unit 301 Clotilde Commercial Center, ML Quezon Ave., Casuntingan, Mandaue City, 6014 Cebu',
        phones: ['(+63) 917 310 5239']
    },
    {
        name: 'Laguna Branch',
        address: 'Nissan Technopark, Purok 5 NMPI Rd, City of Santa Rosa, Laguna',
        phones: []
    },
    {
        name: 'Clark Branch',
        address: 'Unit 16E-F, Philexcel Business Park, M.A. Roxas Highway, Clark Freeport Zone, Pampanga',
        phones: []
    }
];

// DRAFT answers built only from facts already on the site; review before publishing
const HOME_FAQS = [
    { q: 'Which golf cart is right for me?', a: 'It depends on where you will drive and how many people you carry. Two-seaters suit golf and personal errands, 2+2 models add rear-facing seats for family and friends, and 6 to 14 seat shuttles are built for moving groups. Our team can recommend a model for your property.' },
    { q: 'Do you supply fleets for resorts, golf courses, and townships?', a: 'Yes. We supply guest transport, people movers, and utility vehicles for resorts, golf courses, industrial sites, and townships, including fit-to-task builds such as F&B and laundry carts.' },
    { q: 'How do I charge an electric golf cart?', a: 'Our carts charge from a standard 110V/220V outlet. For best battery life, charge after every use instead of waiting for the battery to run low.' },
    { q: 'Can I customize colors, seats, and accessories?', a: 'Yes. Choose from body colors, premium seats, lighting, enclosures, audio, and more from our genuine accessory range. Mention your preferences when you request a quote.' },
    { q: 'Do you offer after-sales service and parts?', a: 'Yes. Our service team handles inspections, battery and electrical checks, and repairs, and we stock spare parts and accessories. Visit our Service page or contact a branch to book.' },
    { q: 'Where can I see the carts in person?', a: 'Visit any of our branches in Manila, Cebu, Laguna (Santa Rosa) or Pampanga (Clark). You can also request a quote and our team will arrange a viewing for you.' }
];

function setHomeLineupFilter(cat) {
    homeLineupFilter = cat;
    const section = document.getElementById('home-lineup');
    if (section) {
        section.outerHTML = renderHomeLineup();
        if (window.lucide) lucide.createIcons();
    }
}

// Scrolls to a homepage section, navigating home first when needed
function goToHomeSection(sectionId) {
    const scroll = () => {
        const target = document.getElementById(sectionId);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    };
    if (currentPage === 'home') {
        scroll();
    } else {
        navigateTo('home');
        setTimeout(scroll, 400);
    }
}

function handleHomeQuoteSubmit(e) {
    e.preventDefault();
    e.target.reset();
    showToast('Thanks! Our team will contact you with your quote shortly.');
}

// ==========================================
// GOLF OPERATIONS CAROUSEL ENGINE
// ==========================================
let currentGolfSlide = 0;
const totalGolfSlides = 4;
let golfCarouselTimer = null;

function setGolfSlide(index) {
    currentGolfSlide = index;
    updateGolfCarouselUI();
}

function nextGolfSlide() {
    currentGolfSlide = (currentGolfSlide + 1) % totalGolfSlides;
    updateGolfCarouselUI();
}

function prevGolfSlide() {
    currentGolfSlide = (currentGolfSlide - 1 + totalGolfSlides) % totalGolfSlides;
    updateGolfCarouselUI();
}

function startGolfCarousel() {
    stopGolfCarousel();
    golfCarouselTimer = setInterval(() => {
        nextGolfSlide();
    }, 2000); // Updated: auto slides every 2 seconds
}

function stopGolfCarousel() {
    if (golfCarouselTimer) clearInterval(golfCarouselTimer);
}

function updateGolfCarouselUI() {
    for (let i = 0; i < totalGolfSlides; i++) {
        const slide = document.getElementById(`golf-slide-${i}`);
        const dot = document.getElementById(`golf-dot-${i}`);
        
        if (slide) {
            if (i === currentGolfSlide) {
                slide.classList.remove('opacity-0');
                slide.classList.add('opacity-100');
            } else {
                slide.classList.remove('opacity-100');
                slide.classList.add('opacity-0');
            }
        }
        
        if (dot) {
            if (i === currentGolfSlide) {
                dot.classList.add('w-6', 'bg-brand-olive');
                dot.classList.remove('w-2', 'bg-white/60');
            } else {
                dot.classList.remove('w-6', 'bg-brand-olive');
                dot.classList.add('w-2', 'bg-white/60');
            }
        }
    }
}

// Testimonials Carousel State for About Page
let currentTestimonialIndex = 0;

const TESTIMONIALS_DATA = [
    {
        quote: "Club cars are great. Good quality carts with great after sales service from golfcarts.ph. Company of choice to deal with.",
        author: "Anil Sehwani"
    },
    {
        quote: "We used a gas cart for quite some time before making the switch to the electric club car...moving around the course became more peaceful, less problematic, and generally more enjoyable. The cart looks really good too!",
        author: "BJ Imperial"
    }
];

function nextTestimonial() {
    currentTestimonialIndex = (currentTestimonialIndex + 1) % TESTIMONIALS_DATA.length;
    updateTestimonialUI();
}

function prevTestimonial() {
    currentTestimonialIndex = (currentTestimonialIndex - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length;
    updateTestimonialUI();
}

function updateTestimonialUI() {
    const textElem = document.getElementById('testimonial-quote-text');
    const authorElem = document.getElementById('testimonial-author-text');
    if (textElem && authorElem) {
        textElem.innerText = `"${TESTIMONIALS_DATA[currentTestimonialIndex].quote}"`;
        authorElem.innerText = TESTIMONIALS_DATA[currentTestimonialIndex].author;
    }
}

function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % CAROUSEL_SLIDES.length;
    updateCarouselUI();
}

function prevSlide() {
    currentSlideIndex = (currentSlideIndex - 1 + CAROUSEL_SLIDES.length) % CAROUSEL_SLIDES.length;
    updateCarouselUI();
}

function goToSlide(index) {
    currentSlideIndex = index;
    updateCarouselUI();
}

function startCarouselAutoPlay() {
    stopCarouselAutoPlay();
    carouselTimer = setInterval(() => {
        nextSlide();
    }, 2000); // Updated: auto slides every 2 seconds
}

function stopCarouselAutoPlay() {
    if (carouselTimer) clearInterval(carouselTimer);
}

function updateCarouselUI() {
    CAROUSEL_SLIDES.forEach((_, idx) => {
        const slide = document.getElementById(`hero-slide-${idx}`);
        const dot = document.getElementById(`carousel-dot-${idx}`);
        if (slide) {
            if (idx === currentSlideIndex) {
                slide.classList.remove('carousel-slide-hidden');
                slide.classList.add('carousel-slide-active');
            } else {
                slide.classList.remove('carousel-slide-active');
                slide.classList.add('carousel-slide-hidden');
            }
        }
        if (dot) {
            if (idx === currentSlideIndex) {
                dot.classList.add('w-8', 'bg-brand-olive');
                dot.classList.remove('w-2.5', 'bg-slate-300');
            } else {
                dot.classList.remove('w-8', 'bg-brand-olive');
                dot.classList.add('w-2.5', 'bg-slate-300');
            }
        }
    });
}

const SOLUTIONS_DATA = [
    {
        id: 'golf-courses',
        title: 'Golf Courses & Country Clubs',
        subtitle: 'Elevate player experience and optimize fleet management',
        description: 'Transform your course operations with our ultra-quiet, turf-friendly electric fleet options. Integrated telematics allow precise geofencing, remote battery monitoring, and seamless fleet scheduling.',
        image: 'image/Products/Tempo 2+2 - Golf.png',
        benefits: [
            'Turf-preserving lightweight chassis & wide tire profile',
            'Geofencing speed limit controls & exclusion zone alerts',
            'Fleet Telematics dashboard for remote maintenance diagnostics',
            'Custom logo embossing & club color customization'
        ]
    },
    {
        id: 'resorts-hotels',
        title: 'Luxury Resorts & Hotels',
        subtitle: 'Silent, sophisticated guest transfers for world-class hospitality',
        description: 'Deliver uncompromised comfort with luxury guest shuttles designed for beach resorts, mountain retreats, and estate properties. Zero engine noise guarantees uninterrupted tranquility for guests.',
        image: 'image/Products/Villager 8.png',
        benefits: [
            'Whisper-quiet electric drive preserves peaceful resort atmosphere',
            'All-weather roll-down clear side enclosures for tropical rain',
            'High seat comfort with memory foam & marine-grade finish',
            'Fast 3.5-hour charging keeps fleets running continuous shifts'
        ]
    },
    {
        id: 'gated-communities',
        title: 'Residential & Gated Communities',
        subtitle: 'Modern neighborhood electric mobility for daily life',
        description: 'Replace gasoline cars for short neighborhood trips. Our LSV/DOT compliant electric vehicles provide a safe, stylish, and eco-friendly way to commute to community centers, clubhouses, and local shops.',
        image: 'image/Products/Tempo 2+2 - Family - Sangria Red.png',
        benefits: [
            'Street-legal equipped (Seatbelts, LED turn signals, mirrors)',
            'Subtle, elegant aesthetic matching luxury community vibes',
            'Standard 110V/220V home outlet charging convenience',
            'Low total cost of ownership compared to gas vehicles'
        ]
    },
    {
        id: 'commercial-industrial',
        title: 'Industrial Facilities & Townships',
        subtitle: 'Rugged zero-emission utility haulers for heavy operations',
        description: 'Streamline logistics across manufacturing plants, warehousing compounds, and airport grounds. Heavy payload ratings and hydraulic tilt beds make light work of tough tasks.',
        image: 'image/Products/Transporter 4.png',
        benefits: [
            'Up to 950 kg payload capacity & hydraulic dump options',
            'Zero indoor emissions suitable for enclosed warehouse use',
            'Heavy-duty galvanized steel frames built for 24/7 industrial use',
            'Significantly lower fuel & maintenance operational costs'
        ]
    }
];

// Blog Articles Data
const BLOGS_DATA = [
    {
        slug: 'choosing-the-right-golf-cart',
        title: 'How to Choose the Right Golf Cart for Your Needs',
        category: 'Buying Guide',
        date: '2026-09-15',
        image: 'image/Products/Tempo 2+2 - Family - Sangria Red.png',
        excerpt: 'Personal, resort, commercial or golf course use? Here is what to consider before you pick a model.',
        content: [
            'Start with how the cart will be used. A family cart for a gated subdivision needs comfort and safety features, while a resort shuttle needs seating capacity and a smooth, quiet ride.',
            'Next, count your passengers. Two-seaters suit golf and personal errands, 2+2 models add rear-facing seats for family and friends, and 6 to 14 seat shuttles are built for moving groups.',
            'Finally, think about terrain. Lifted models handle gravel roads and unpaved trails, while standard models are ideal for paved paths and fairways.'
        ]
    },
    {
        slug: 'electric-cart-battery-care',
        title: 'Battery Care Tips to Keep Your Electric Cart Running Longer',
        category: 'Maintenance',
        date: '2026-08-28',
        image: 'image/Products/Villager 6.png',
        excerpt: 'Simple charging and storage habits that protect your battery and keep your fleet on the road.',
        content: [
            'Charge after every use instead of waiting for the battery to run low. Regular charging keeps the battery healthy and ready for the next trip.',
            'Store your cart in a cool, shaded place. Heat is one of the biggest causes of battery wear.',
            'Schedule regular check-ups with our service team so small issues are caught before they become costly repairs.'
        ]
    },
    {
        slug: 'resort-guest-mobility',
        title: 'Elevating the Guest Experience with Resort Shuttles',
        category: 'Resort',
        date: '2026-08-10',
        image: 'image/Products/Villager 8.png',
        excerpt: 'Quiet, eco-friendly shuttles help resorts move guests comfortably between villas, pools and restaurants.',
        content: [
            'First impressions matter. A quiet, comfortable shuttle from the lobby to the villa sets the tone for a guest\'s whole stay.',
            'Electric shuttles produce zero emissions on site, which keeps pathways quiet and gardens clean.',
            'With options from 4+2 lifted carts to 8-seat Villagers, resorts can match vehicles to every route on the property.'
        ]
    }
];

function formatBlogDate(dateStr) {
    return new Date(dateStr + 'T00:00:00').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

// State Engine Variables
let currentPage = 'home';
let currentSlug = null;
let productFilterCategory = 'All';
let productSearchQuery = '';

// Application Initialization
window.addEventListener('DOMContentLoaded', () => {
    initScrollHeader();
    renderSegmentMenus();
    initMobileMenu();
    populateModalProductDropdown();
    initCustomCursor();
    initMouseSpotlight();
    renderApp();
    startGolfCarousel();
});

function initScrollHeader() {
    window.addEventListener('scroll', () => {
        const bar = document.getElementById('header-bar');
        if (bar) {
            if (window.scrollY > 30) {
                bar.classList.add('bg-white/95', 'shadow-xl');
                bar.classList.remove('bg-white/75', 'shadow-lg');
            } else {
                bar.classList.remove('bg-white/95', 'shadow-xl');
                bar.classList.add('bg-white/75', 'shadow-lg');
            }
        }
    });
}

function initMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    if (btn) btn.addEventListener('click', toggleMobileMenu);
}

function toggleMobileMenu() {
    const drawer = document.getElementById('mobile-drawer');
    if (drawer) drawer.classList.toggle('hidden');
}

function showToast(message) {
    const container = document.getElementById('toast-container');
    const text = document.getElementById('toast-text');
    if (container && text) {
        text.innerText = message;
        container.classList.remove('translate-y-20', 'opacity-0');
        setTimeout(() => {
            container.classList.add('translate-y-20', 'opacity-0');
        }, 3500);
    }
}

function navigateTo(page, slug = null) {
    currentPage = page;
    currentSlug = slug;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    const drawer = document.getElementById('mobile-drawer');
    if (drawer) drawer.classList.add('hidden');
    
    const activePage = page === 'blog-details' ? 'blogs' : (page === 'product-details' || page === 'segment') ? 'products' : page;
    
    // Toggle active state classes dynamically across desktop navigation items
    // Pillar pages and cart pages highlight their pillar in the header
    const pillarProduct = page === 'product-details' && PRODUCTS_DATA.find(p => p.slug === slug);
    const pillarSeg = page === 'segment' ? slug
        : pillarProduct ? (NAV_SEGMENTS.find(s => s.category === pillarProduct.category) || {}).id : null;
    document.querySelectorAll('.nav-link').forEach(btn => {
        if (btn.dataset.page === activePage || (pillarSeg && btn.dataset.segment === pillarSeg)) {
            btn.classList.add('bg-slate-100/80', 'font-bold', 'text-slate-900');
            btn.classList.remove('text-slate-600');
        } else {
            btn.classList.remove('bg-slate-100/80', 'font-bold', 'text-slate-900');
            btn.classList.add('text-slate-600');
        }
    });

    renderApp();
}

function setCategoryFilter(cat) {
    productFilterCategory = cat;
    renderApp();
}

// --- PILLAR MENUS (The Golfer / Lifestyle & Private Use / Resort & Hospitality / Remanufactured) ---

function modelAnchorId(segmentId, subId, modelKey) {
    return `${segmentId}-${subId}-${modelKey}`;
}

// Opens a segment landing page, optionally scrolling to a subcategory or model card
function openSegment(segmentId, anchorId = null) {
    navigateTo('segment', segmentId);
    if (anchorId) {
        setTimeout(() => {
            const target = document.getElementById(anchorId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'center' });
                target.classList.add('segment-card-flash');
                setTimeout(() => target.classList.remove('segment-card-flash'), 1600);
            }
        }, 350);
    }
}

// Menu click for a model: its own page when it has one, otherwise its card on the pillar page
function modelMenuAction(seg, sub, key) {
    const model = VEHICLE_MODELS[key];
    return model.slug
        ? `navigateTo('product-details', '${model.slug}')`
        : `openSegment('${seg.id}', '${modelAnchorId(seg.id, sub.id, key)}')`;
}

// Hover/focus sub-menu for a pillar (header nav and Cart page tabs)
function renderSegmentDropdown(seg) {
    return `
        <div class="segment-dropdown" role="menu">
            <div class="segment-dropdown-inner grid gap-6" style="grid-template-columns: repeat(${seg.subcategories.length}, minmax(190px, 1fr));">
                ${seg.subcategories.map(sub => `
                    <div class="space-y-3">
                        <button onclick="openSegment('${seg.id}', '${seg.id}-${sub.id}')" class="block text-left text-xs font-extrabold uppercase tracking-wider text-brand-olive hover:text-brand-oliveHover">${sub.label}</button>
                        ${sub.groups.map(group => `
                            <div class="space-y-1">
                                ${group.label !== sub.label ? `<p class="text-[11px] font-bold text-slate-900">${group.label}</p>` : ''}
                                ${group.items.map(key => `
                                    <button onclick="${modelMenuAction(seg, sub, key)}" class="segment-dropdown-item" role="menuitem">${VEHICLE_MODELS[key].name}${VEHICLE_MODELS[key].badge ? ` <span class="ml-1 px-1.5 py-0.5 rounded bg-brand-olive/15 text-brand-oliveHover text-[10px] font-bold">${VEHICLE_MODELS[key].badge}</span>` : ''}</button>
                                `).join('')}
                            </div>
                        `).join('')}
                        ${sub === seg.subcategories[0] && seg.links ? `
                            <div class="pt-2 mt-1 border-t border-brand-border space-y-1">
                                ${seg.links.map(l => `<button onclick="openSegment('${seg.id}', '${seg.id}-${l.anchor}')" class="segment-dropdown-item font-semibold text-brand-oliveHover" role="menuitem">${l.label} &rarr;</button>`).join('')}
                            </div>
                        ` : ''}
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// Desktop header navigation, in the blueprint's order
function renderMainNav() {
    const nav = document.getElementById('main-nav');
    if (!nav) return;
    nav.innerHTML = MAIN_NAV.map(item => {
        const seg = item.segment && NAV_SEGMENTS.find(s => s.id === item.segment);
        if (seg) {
            return `
                <div class="segment-menu header-menu relative">
                    <button onclick="openSegment('${seg.id}')" class="nav-link header-nav-link" data-segment="${seg.id}" aria-haspopup="true">
                        ${seg.label}<i data-lucide="chevron-down" class="w-3.5 h-3.5"></i>
                    </button>
                    ${renderSegmentDropdown(seg)}
                </div>`;
        }
        return `<button onclick="${item.action}" class="nav-link header-nav-link" ${item.page ? `data-page="${item.page}"` : ''}>${item.label}</button>`;
    }).join('');
}

function renderSegmentMenus() {
    renderMainNav();
    const mobile = document.getElementById('mobile-segment-menus');
    if (mobile) {
        mobile.innerHTML = NAV_SEGMENTS.map(seg => `
            <details class="mobile-segment rounded-xl">
                <summary class="flex items-center justify-between px-4 py-3 rounded-xl font-medium text-slate-600 hover:bg-slate-200/80 text-sm cursor-pointer list-none">
                    <span>${seg.label}</span>
                    <i data-lucide="chevron-down" class="w-4 h-4 text-brand-slate mobile-segment-chevron"></i>
                </summary>
                <div class="pl-4 pr-2 pb-3 pt-1 space-y-3">
                    <button onclick="openSegment('${seg.id}')" class="text-xs font-semibold text-brand-olive">View all ${seg.label} &rarr;</button>
                    ${seg.subcategories.map(sub => `
                        <div class="space-y-1.5">
                            <p class="text-[11px] font-extrabold uppercase tracking-wider text-slate-900">${sub.label}</p>
                            ${sub.groups.map(group => `
                                ${group.label !== sub.label ? `<p class="text-[11px] font-semibold text-brand-slate pt-1">${group.label}</p>` : ''}
                                <div class="flex flex-wrap gap-1.5">
                                    ${group.items.map(key => `
                                        <button onclick="${modelMenuAction(seg, sub, key)}" class="px-3 py-1.5 rounded-full bg-slate-100 hover:bg-brand-olive/15 text-slate-700 text-xs">${VEHICLE_MODELS[key].name}</button>
                                    `).join('')}
                                </div>
                            `).join('')}
                        </div>
                    `).join('')}
                    ${seg.links ? `<div class="flex flex-wrap gap-x-4 gap-y-1">${seg.links.map(l => `<button onclick="openSegment('${seg.id}', '${seg.id}-${l.anchor}')" class="text-xs font-semibold text-brand-oliveHover">${l.label} &rarr;</button>`).join('')}</div>` : ''}
                </div>
            </details>
        `).join('');
    }
}

function populateModalProductDropdown() {
    const select = document.getElementById('modal-product-select');
    if (select) {
        // Values are product slugs (two carts share the name "Tempo 2"); menu models without a page use their name
        const extraModels = Object.values(VEHICLE_MODELS).filter(m => !m.slug);
        select.innerHTML = PRODUCTS_DATA.map(p => `<option value="${p.slug}">${p.name} (${categoryLabel(p.category)})</option>`).join('')
            + extraModels.map(m => `<option value="${m.name}">${m.name}</option>`).join('');
    }
}

// Finds a product by slug or by name (quote buttons pass either)
function findProductRef(ref) {
    if (!ref) return null;
    const lower = String(ref).toLowerCase();
    return PRODUCTS_DATA.find(p => p.slug === ref) || PRODUCTS_DATA.find(p => p.name.toLowerCase() === lower) || null;
}

function openQuoteModal(productName = '', notes = '') {
    const modal = document.getElementById('quote-modal');
    const select = document.getElementById('modal-product-select');
    const notesField = document.getElementById('modal-notes');
    if (notesField) notesField.value = notes;
    if (modal) {
        if (productName && select) {
            const match = findProductRef(productName);
            if (match) select.value = match.slug;
            else if ([...select.options].some(o => o.value === productName)) select.value = productName;
        }
        // Each quote starts with a fresh accessory selection for the chosen model
        quoteAccessories = new Set();
        renderAccessoryChips();
        renderAccessoryPicker();
        modal.classList.remove('hidden');
    }
}

function closeQuoteModal() {
    const modal = document.getElementById('quote-modal');
    if (modal) modal.classList.add('hidden');
}

function handleModalQuoteSubmit(e) {
    e.preventDefault();
    closeQuoteModal();
    const refCode = 'QT-' + Math.floor(100000 + Math.random() * 900000);
    const count = quoteAccessories.size;
    const accessoryNote = count ? ` with ${count} accessor${count === 1 ? 'y' : 'ies'}` : '';
    showToast(`Quote Request Sent${accessoryNote}! Reference Code: #${refCode}`);
    quoteAccessories = new Set();
}

// Custom Cursor & Universal Container Light Tracker Engine
function initCustomCursor() {
    const dot = document.getElementById('custom-cursor-dot');
    const ring = document.getElementById('custom-cursor-ring');
    
    if (!dot || !ring) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    });

    function renderRing() {
        ringX += (mouseX - ringX) * 0.15;
        ringY += (mouseY - ringY) * 0.15;
        ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
        requestAnimationFrame(renderRing);
    }
    renderRing();

    document.addEventListener('mouseover', (e) => {
        if (e.target.closest('button, a, select, input, .product-card, .client-logo-card, .container-light-beam')) {
            document.body.classList.add('cursor-hover');
        } else {
            document.body.classList.remove('cursor-hover');
        }
    });
}

function initMouseSpotlight() {
    const spotlight = document.getElementById('mouse-spotlight');

    window.addEventListener('mousemove', (e) => {
        if (spotlight) {
            spotlight.style.setProperty('--mouse-x', `${e.clientX}px`);
            spotlight.style.setProperty('--mouse-y', `${e.clientY}px`);
        }

        const hoveredContainer = e.target.closest('.container-light-beam');
        if (hoveredContainer) {
            const rect = hoveredContainer.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            hoveredContainer.style.setProperty('--container-mouse-x', `${x}px`);
            hoveredContainer.style.setProperty('--container-mouse-y', `${y}px`);
        }
    });
}

// SPA View Renderer Switchboard
function renderApp() {
    const viewport = document.getElementById('app-viewport');
    if (!viewport) return;
    
    if (currentPage === 'home') {
        viewport.innerHTML = renderHomePage();
        startGolfCarousel();
    } else if (currentPage === 'products') {
        viewport.innerHTML = renderProductsPage();
        bindProductsFilterEvents();
    } else if (currentPage === 'product-details') {
        viewport.innerHTML = renderProductDetailsPage();
    } else if (currentPage === 'segment') {
        viewport.innerHTML = renderSegmentPage();
    } else if (currentPage === 'solutions') {
        viewport.innerHTML = renderSolutionsPage();
    } else if (currentPage === 'service') {
        viewport.innerHTML = renderServicePage();
    } else if (currentPage === 'blogs') {
        viewport.innerHTML = renderBlogsPage();
    } else if (currentPage === 'blog-details') {
        viewport.innerHTML = renderBlogDetailsPage();
    } else if (currentPage === 'about') {
        viewport.innerHTML = renderAboutPage();
    } else if (currentPage === 'contact') {
        viewport.innerHTML = renderContactPage();
    }

    initRevealOnScroll();

    if (window.lucide) {
        lucide.createIcons();
    }
}

// --- PAGE RENDERING FUNCTIONS ---

function renderHomeSectionHeading(eyebrow, title, align = 'center') {
    return `
        <div class="${align === 'center' ? 'text-center max-w-3xl mx-auto' : ''} space-y-2">
            <span class="text-brand-olive text-sm sm:text-base font-semibold">${eyebrow}</span>
            <h2 class="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tighter leading-[1.05]">${title}</h2>
        </div>
    `;
}

// Three solution panels in one container. On desktop the hovered panel expands
// (CSS flex-grow accordion) and reveals its description and button.
function renderHomeSolutionPanels() {
    return `
        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 space-y-6 sm:space-y-8">
            <div class="reveal">${renderHomeSectionHeading('Solutions', 'Built for every setting.')}</div>
            <div class="home-panels">
                ${HOME_SOLUTION_PANELS.map((panel, i) => `
                    <article class="home-panel reveal group" style="--reveal-delay:${i * 120}ms" ${panel.golfSlides ? 'onmouseenter="stopGolfCarousel()" onmouseleave="startGolfCarousel()"' : ''} onclick="${panel.ctaAction}">
                        ${panel.golfSlides
                            ? [4, 5, 6, 7].map((n, s) => `
                                <div id="golf-slide-${s}" class="golf-carousel-slide absolute inset-0 transition-opacity duration-700 ${s === 0 ? 'opacity-100' : 'opacity-0'}">
                                    <img src="image/${n}.png" alt="Golf fleet in operation ${s + 1}" loading="lazy" class="home-panel-media">
                                </div>
                            `).join('')
                            : panel.media}
                        <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/35 to-transparent z-10 pointer-events-none"></div>
                        <div class="absolute inset-x-0 bottom-0 z-20 p-6 sm:p-8 space-y-3">
                            <span class="inline-block px-3 py-1 rounded-full bg-brand-olive/90 backdrop-blur-md text-slate-900 text-[11px] font-bold uppercase tracking-widest shadow-lg">${panel.eyebrow}</span>
                            <h3 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tighter leading-[1.05] drop-shadow-md">${panel.title}</h3>
                            <div class="home-panel-details space-y-4">
                                <p class="text-slate-200 text-sm sm:text-base leading-relaxed max-w-md">${panel.text}</p>
                                <button onclick="event.stopPropagation(); ${panel.ctaAction}" class="inline-flex items-center gap-2 bg-brand-olive hover:bg-brand-oliveHover text-slate-900 font-bold px-5 py-2.5 rounded-xl transition-all shadow-xl text-xs sm:text-sm btn-shimmer">
                                    <i data-lucide="${panel.ctaIcon}" class="w-4 h-4"></i>
                                    <span>${panel.ctaLabel}</span>
                                </button>
                            </div>
                        </div>
                    </article>
                `).join('')}
            </div>
        </section>
    `;
}

// Fades sections in as they scroll into view (elements with the .reveal class)
function initRevealOnScroll() {
    const items = document.querySelectorAll('.reveal:not(.is-visible)');
    if (!('IntersectionObserver' in window)) {
        items.forEach(el => el.classList.add('is-visible'));
        return;
    }
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });
    items.forEach(el => observer.observe(el));
}

// Battery comparison rows. `bars` are relative 0-100 lengths for the visual meter
// (higher = better for the buyer), so each row reads at a glance.
const BATTERY_COMPARISON = [
    { icon: 'calendar-clock', label: 'Lifespan', lead: '3–5 years', lithium: '8–12+ years', bars: [35, 100] },
    { icon: 'plug-zap', label: 'Charging Time', lead: '8–10 hours', lithium: '2–4 hours', bars: [30, 100] },
    { icon: 'weight', label: 'Battery Weight', lead: '135–180 kg', lithium: '45–68 kg', bars: [35, 100] },
    { icon: 'wrench', label: 'Maintenance', lead: 'Monthly water top-ups and terminal cleaning', lithium: 'None. Sealed, with built-in battery management', bars: [25, 100] },
    { icon: 'mountain', label: 'Power on Hills', lead: 'Slows down as the charge drops', lithium: 'Full power until empty', bars: [45, 100] },
    { icon: 'wallet', label: 'Upfront Cost', lead: 'Lower', lithium: 'About 2–3× higher', bars: [100, 40] },
    { icon: 'piggy-bank', label: '10-Year Cost', lead: 'Higher: 2–3 pack replacements', lithium: 'Lower: one pack lasts the decade', bars: [40, 100] }
];

function renderBatteryBar(value, isLithium) {
    return `
        <div class="h-1.5 w-full rounded-full bg-slate-200/80 overflow-hidden">
            <div class="battery-bar h-full rounded-full ${isLithium ? 'bg-brand-olive' : 'bg-slate-400'}" style="--bar:${value}%"></div>
        </div>`;
}

// Lead-acid vs lithium scorecard with "best for" guidance; sits after the partner logos
function renderHomeBatteryCompare() {
    return `
        <section id="home-battery" class="reveal max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
            <div class="text-center max-w-2xl mx-auto space-y-3">
                <span class="text-brand-olive text-sm sm:text-base font-semibold">Choose Your Power</span>
                <h2 class="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tighter leading-[1.05]">Lead-acid or lithium?</h2>
                <p class="text-slate-500 text-lg sm:text-xl">It comes down to a lower price today or lower costs and less upkeep over the life of your cart.</p>
            </div>

            <!-- Scorecard -->
            <div class="rounded-3xl border border-brand-border bg-white shadow-xl overflow-hidden">
                <div class="grid grid-cols-2 md:grid-cols-[1.1fr_1fr_1fr] text-sm">
                    <div class="hidden md:flex items-end p-5 text-[11px] font-bold uppercase tracking-wider text-brand-slate">Compare</div>
                    <div class="p-4 sm:p-5 border-b md:border-b-0 border-brand-border">
                        <div class="flex items-center gap-2">
                            <i data-lucide="battery-medium" class="w-5 h-5 text-slate-500"></i>
                            <span class="font-extrabold text-slate-900">Lead-Acid</span>
                        </div>
                        <p class="text-[11px] text-slate-500 mt-0.5">Flooded (FLA)</p>
                    </div>
                    <div class="p-4 sm:p-5 bg-brand-olive/10 border-b md:border-b-0 border-brand-olive/20 relative">
                        <span class="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-brand-olive text-slate-900 text-[10px] font-bold uppercase tracking-wider">Best Value</span>
                        <div class="flex items-center gap-2">
                            <i data-lucide="battery-full" class="w-5 h-5 text-brand-olive"></i>
                            <span class="font-extrabold text-slate-900">Lithium</span>
                        </div>
                        <p class="text-[11px] text-slate-500 mt-0.5">LiFePO₄</p>
                    </div>

                    ${BATTERY_COMPARISON.map(row => `
                        <div class="col-span-2 md:col-span-1 flex items-center gap-2.5 px-4 sm:px-5 pt-4 md:py-4 md:border-t border-brand-border">
                            <div class="p-2 rounded-lg bg-brand-card text-brand-olive"><i data-lucide="${row.icon}" class="w-4 h-4"></i></div>
                            <span class="font-semibold text-slate-800">${row.label}</span>
                        </div>
                        <div class="px-4 sm:px-5 py-3 md:py-4 md:border-t border-brand-border space-y-2">
                            <p class="text-slate-600 text-xs sm:text-sm leading-snug">${row.lead}</p>
                            ${renderBatteryBar(row.bars[0], false)}
                        </div>
                        <div class="px-4 sm:px-5 py-3 md:py-4 md:border-t border-brand-olive/20 bg-brand-olive/10 space-y-2">
                            <p class="text-slate-900 font-semibold text-xs sm:text-sm leading-snug">${row.lithium}</p>
                            ${renderBatteryBar(row.bars[1], true)}
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- Best for -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div class="rounded-3xl border border-brand-border bg-brand-card p-6 sm:p-7 flex flex-col gap-4">
                    <h3 class="font-extrabold text-slate-900 text-2xl tracking-tight">Lead-acid is best if you…</h3>
                    <ul class="space-y-2 text-sm text-slate-600">
                        <li class="flex gap-2"><i data-lucide="check" class="w-4 h-4 text-slate-500 flex-shrink-0 mt-0.5"></i>Are working with a tight upfront budget</li>
                        <li class="flex gap-2"><i data-lucide="check" class="w-4 h-4 text-slate-500 flex-shrink-0 mt-0.5"></i>Plan to keep the cart for 2 years or less</li>
                        <li class="flex gap-2"><i data-lucide="check" class="w-4 h-4 text-slate-500 flex-shrink-0 mt-0.5"></i>Don't mind monthly water checks</li>
                    </ul>
                    <button onclick="openQuoteModal('', 'Battery preference: Lead-Acid')" class="mt-auto self-start inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-900 font-semibold px-5 py-2.5 rounded-xl border border-brand-border text-sm transition-all">
                        Quote with Lead-Acid
                    </button>
                </div>
                <div class="rounded-3xl border border-brand-olive/40 bg-brand-olive/10 p-6 sm:p-7 flex flex-col gap-4">
                    <h3 class="font-extrabold text-slate-900 text-2xl tracking-tight">Lithium is best if you…</h3>
                    <ul class="space-y-2 text-sm text-slate-700">
                        <li class="flex gap-2"><i data-lucide="check" class="w-4 h-4 text-brand-olive flex-shrink-0 mt-0.5"></i>Keep your cart long-term, or run a resort, golf or township fleet</li>
                        <li class="flex gap-2"><i data-lucide="check" class="w-4 h-4 text-brand-olive flex-shrink-0 mt-0.5"></i>Drive on hills or rough terrain</li>
                        <li class="flex gap-2"><i data-lucide="check" class="w-4 h-4 text-brand-olive flex-shrink-0 mt-0.5"></i>Want zero maintenance and fast charging</li>
                    </ul>
                    <button onclick="openQuoteModal('', 'Battery preference: Lithium')" class="mt-auto self-start inline-flex items-center gap-2 bg-brand-olive hover:bg-brand-oliveHover text-slate-900 font-bold px-5 py-2.5 rounded-xl shadow-lg text-sm transition-all btn-shimmer">
                        Quote with Lithium
                    </button>
                </div>
            </div>
            <p class="text-center text-[11px] text-slate-400">Typical figures for golf cart battery packs; actual results vary with model, usage, and charging habits.</p>
        </section>
    `;
}

// Filterable vehicle lineup; re-rendered in place by setHomeLineupFilter()
function renderHomeLineup() {
    const vehicles = PRODUCTS_DATA.filter(p => p.category !== 'Accessories'
        && (homeLineupFilter === 'All' || p.category === homeLineupFilter));
    const shown = vehicles.slice(0, 6);
    const viewAllAction = homeLineupFilter === 'All' ? "navigateTo('products')" : `setCategoryAndNavigate('${homeLineupFilter}')`;

    return `
        <section id="home-lineup" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            ${renderHomeSectionHeading('Vehicle Lineup', 'Explore the lineup.')}
            <div class="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto scrollbar-none pb-1">
                ${HOME_LINEUP_TABS.map(cat => `
                    <button onclick="setHomeLineupFilter('${cat}')" class="px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                        homeLineupFilter === cat ? 'bg-brand-olive text-slate-900 shadow-md' : 'bg-brand-card border border-brand-border text-slate-600 hover:bg-slate-200/80'
                    }">${cat}</button>
                `).join('')}
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                ${shown.map(p => renderProductCardHTML(p)).join('')}
            </div>
            <div class="text-center">
                <button onclick="${viewAllAction}" class="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-900 font-semibold px-6 py-3 rounded-xl border border-brand-border transition-all text-sm">
                    View All ${homeLineupFilter === 'All' ? 'Vehicles' : homeLineupFilter} (${vehicles.length})
                    <i data-lucide="arrow-right" class="w-4 h-4"></i>
                </button>
            </div>
        </section>
    `;
}

function renderHomePage() {
    setTimeout(() => {
        startCarouselAutoPlay();
    }, 100);

    const latestPosts = [...BLOGS_DATA].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3);
    const vehicleOptions = PRODUCTS_DATA.filter(p => p.category !== 'Accessories');
    const quickLinks = [
        { icon: 'sliders-horizontal', title: 'Build Your Cart', text: 'Choose your model, build and packages, then get a quote.', action: 'buildYourCart()' },
        { icon: 'building-2', title: 'Request a Fleet Proposal', text: 'For golf courses, resorts and commercial fleets.', action: "navigateTo('solutions')" },
        { icon: 'wrench', title: 'Book Service', text: 'Repairs, preventive maintenance and parts.', action: "navigateTo('service')" },
        { icon: 'map-pin', title: 'Find a Branch', text: 'Visit our showrooms in Manila, Cebu, Laguna and Clark.', action: "goToHomeSection('home-branches')" }
    ];
    const tempo2 = PRODUCTS_DATA.find(p => p.slug === 'golfer-tempo-2');
    const tempo2Builds = BUILD_SETS['golfer-2'].builds;

    return `
    <div class="pb-16">
        <!-- 1. HERO: full-width banner slider with vehicle CTAs -->
        <section class="relative sm:-mt-[65px] bg-slate-900" onmouseenter="stopCarouselAutoPlay()" onmouseleave="startCarouselAutoPlay()">
            <div class="hero-banner relative w-full overflow-hidden">
                <div class="hidden sm:block absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/45 to-transparent z-10 pointer-events-none"></div>
                ${CAROUSEL_SLIDES.map((slide, idx) => `
                    <div id="hero-slide-${idx}" class="carousel-slide hero-banner-slide ${idx === 0 ? 'carousel-slide-active' : 'carousel-slide-hidden'} absolute inset-0">
                        <img src="${slide.image}" alt="${slide.alt}" class="hero-banner-img absolute inset-x-0 top-0 w-full object-cover" ${idx === 0 ? 'fetchpriority="high"' : 'loading="lazy"'}>

                        <div class="hero-banner-actions absolute left-4 sm:left-[4.2%] z-20 flex flex-wrap items-center gap-2 sm:gap-4">
                            <button onclick="${slide.ctaAction}" class="flex items-center gap-2 sm:gap-3 bg-brand-olive hover:bg-brand-oliveHover text-slate-900 font-extrabold px-4 py-2.5 sm:px-7 sm:py-3.5 rounded-xl transition-all shadow-xl shadow-black/30 hover:scale-105 text-xs sm:text-sm btn-shimmer">
                                <span>${slide.ctaLabel}</span>
                                <i data-lucide="arrow-right" class="w-4 h-4"></i>
                            </button>
                            <button onclick="openQuoteModal()" class="flex items-center gap-2 bg-white/85 hover:bg-white text-slate-900 font-semibold px-4 py-2.5 sm:px-6 sm:py-3.5 rounded-xl border border-white/60 backdrop-blur-md transition-all shadow-xl shadow-black/20 text-xs sm:text-sm">
                                <span>Get a Quote</span>
                            </button>
                        </div>
                    </div>
                `).join('')}

                <!-- Carousel Controls -->
                <div class="absolute inset-x-0 bottom-3 sm:bottom-5 z-30 px-4 sm:px-8 flex items-center justify-between">
                    <div class="flex items-center gap-2">
                        ${CAROUSEL_SLIDES.map((_, idx) => `
                            <button id="carousel-dot-${idx}" onclick="goToSlide(${idx})" class="h-2.5 rounded-full transition-all duration-300 ${idx === 0 ? 'w-8 bg-brand-olive' : 'w-2.5 bg-slate-300 hover:bg-slate-400'}" aria-label="Go to slide ${idx + 1}"></button>
                        `).join('')}
                    </div>

                    <div class="flex items-center gap-2 sm:gap-3">
                        <button onclick="prevSlide()" class="p-2 sm:p-3 rounded-xl bg-white/80 backdrop-blur-md border border-white/60 text-slate-700 hover:text-slate-900 hover:border-brand-olive transition-all" aria-label="Previous Slide">
                            <i data-lucide="chevron-left" class="w-4 h-4 sm:w-5 sm:h-5"></i>
                        </button>
                        <button onclick="nextSlide()" class="p-2 sm:p-3 rounded-xl bg-white/80 backdrop-blur-md border border-white/60 text-slate-700 hover:text-slate-900 hover:border-brand-olive transition-all" aria-label="Next Slide">
                            <i data-lucide="chevron-right" class="w-4 h-4 sm:w-5 sm:h-5"></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <!-- 2. SOLUTION PANELS: resort video, industrial photo, golf fleet slideshow -->
        ${renderHomeSolutionPanels()}

        <div class="space-y-20 sm:space-y-28 pt-16 sm:pt-20">
            <!-- 3. TEMPO 2 HERO RANGE: the bestseller in Golfer / Scratch / Pro -->
            <section class="reveal max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
                <div class="text-center max-w-3xl mx-auto space-y-3">
                    <span class="text-brand-olive text-sm sm:text-base font-semibold">Tempo 2 · Our bestseller</span>
                    <h2 class="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tighter leading-[1.05]">Golfer. Scratch. Pro.</h2>
                    <p class="text-slate-500 text-lg sm:text-xl">${tempo2.description}</p>
                </div>
                <div class="h-64 sm:h-[420px] flex items-center justify-center">
                    <img src="${tempo2.image}" alt="Tempo 2" loading="lazy" class="max-h-full object-contain drop-shadow-[0_30px_30px_rgba(0,0,0,0.18)]">
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                    ${tempo2Builds.map(b => `
                        <div class="rounded-3xl bg-brand-card border border-brand-border p-6 sm:p-7 space-y-3">
                            <p class="text-2xl font-extrabold text-slate-900 tracking-tight">Tempo 2 ${b.name}</p>
                            <p class="text-sm font-semibold text-brand-olive">${b.tagline}</p>
                            <ul class="space-y-1.5 text-sm text-slate-600">${b.includes.map(x => `<li class="flex gap-2"><i data-lucide="check" class="w-4 h-4 text-brand-olive flex-shrink-0 mt-0.5"></i>${x}</li>`).join('')}</ul>
                        </div>
                    `).join('')}
                </div>
                <div class="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                    <button onclick="buildYourCart()" class="bg-brand-olive hover:bg-brand-oliveHover text-slate-900 font-bold px-7 py-3 rounded-full text-sm sm:text-base shadow-lg transition-all btn-shimmer">Build Your Cart</button>
                    <button onclick="openSegment('golfer', 'golfer-compare')" class="inline-flex items-center gap-1 text-brand-oliveHover hover:text-slate-900 font-semibold text-sm sm:text-base">Compare Tempo 2, 2+2 and 4 <i data-lucide="chevron-right" class="w-4 h-4"></i></button>
                </div>
            </section>

            <!-- 4. REMANUFACTURED: value route -->
            <section class="reveal max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-[2rem] bg-brand-card border border-brand-border p-6 sm:p-12">
                    <div class="lg:col-span-6 space-y-4">
                        <span class="text-brand-olive text-sm sm:text-base font-semibold">Remanufactured</span>
                        <h2 class="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tighter leading-[1.05]">Rebuilt carts. Clear value.</h2>
                        <p class="text-slate-500 text-lg leading-relaxed">Golf and lifestyle builds, quoted with the actual unit, rebuild scope, battery condition, included equipment and warranty terms.</p>
                        <button onclick="openSegment('remanufactured')" class="bg-brand-olive hover:bg-brand-oliveHover text-slate-900 font-bold px-6 py-3 rounded-full text-sm transition-all btn-shimmer">See Remanufactured Builds</button>
                    </div>
                    <div class="lg:col-span-6 grid grid-cols-2 gap-4">
                        <img src="image/Products/reman 4.png" alt="Remanufactured 2+2" loading="lazy" class="w-full h-48 sm:h-64 object-contain">
                        <img src="image/Products/reman 5.png" alt="Remanufactured 2+2 Lifted" loading="lazy" class="w-full h-48 sm:h-64 object-contain">
                    </div>
                </div>
            </section>

            <!-- 5. RESORT SOLUTIONS -->
            <section class="reveal max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                ${renderHomeSectionHeading('Resort & Hospitality', 'Solutions for every property.')}
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                    ${NAV_SEGMENTS.find(s => s.id === 'resort').subcategories.map(sub => {
                        const firstImage = sub.groups[0].items.map(k => VEHICLE_MODELS[k].image).find(Boolean);
                        const names = sub.groups.flatMap(g => g.items).map(k => VEHICLE_MODELS[k].name);
                        return `
                            <button onclick="openSegment('resort', 'resort-${sub.id}')" class="group text-left rounded-3xl bg-white border border-brand-border hover:border-brand-olive/60 hover:shadow-xl transition-all overflow-hidden flex flex-col">
                                <div class="h-52 bg-brand-card flex items-center justify-center p-4"><img src="${firstImage}" alt="${sub.label}" loading="lazy" class="max-h-full object-contain transition-transform duration-500 group-hover:scale-105"></div>
                                <div class="p-6 space-y-2">
                                    <h3 class="text-2xl font-bold text-slate-900 tracking-tight">${sub.label}</h3>
                                    <p class="text-sm text-slate-500">${names.slice(0, 5).join(' · ')}${names.length > 5 ? ' · and more' : ''}</p>
                                    <span class="inline-flex items-center gap-1 text-brand-oliveHover font-semibold text-sm">Explore <i data-lucide="chevron-right" class="w-4 h-4"></i></span>
                                </div>
                            </button>`;
                    }).join('')}
                </div>
                <div class="text-center">
                    <button onclick="navigateTo('solutions')" class="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-900 font-semibold px-6 py-3 rounded-full border border-brand-border text-sm">Request a Fleet Proposal <i data-lucide="arrow-right" class="w-4 h-4"></i></button>
                </div>
            </section>

            <!-- 6. SERVICE SUPPORT -->
            <section class="reveal max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="rounded-[2rem] bg-slate-900 text-white overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-center">
                    <div class="lg:col-span-6 p-8 sm:p-12 space-y-4">
                        <span class="text-brand-olive text-sm sm:text-base font-semibold">Service &amp; Support</span>
                        <h2 class="text-4xl sm:text-5xl font-extrabold tracking-tighter leading-[1.05]">We keep you rolling.</h2>
                        <p class="text-slate-300 text-lg">Book service, request parts, and get maintenance and charging guidance from our team.</p>
                        <div class="flex flex-wrap gap-3 pt-1">
                            <button onclick="navigateTo('service')" class="bg-brand-olive hover:bg-brand-oliveHover text-slate-900 font-bold px-6 py-3 rounded-full text-sm transition-all btn-shimmer">Book Service</button>
                            <button onclick="setCategoryAndNavigate('Accessories')" class="bg-white/10 hover:bg-white/20 border border-white/20 font-semibold px-6 py-3 rounded-full text-sm transition-all">Parts &amp; Accessories</button>
                        </div>
                    </div>
                    <div class="lg:col-span-6 h-64 lg:h-full min-h-[18rem]">
                        <img src="image/Hero/hero-3.webp" alt="Golfcarts.ph service technician" loading="lazy" class="w-full h-full object-cover">
                    </div>
                </div>
            </section>

            <!-- 7. VEHICLE LINEUP: filterable grid -->
            ${renderHomeLineup()}

            <!-- 4. BRAND STORY: split media (left) / text (right) -->
            <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 reveal lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div class="lg:col-span-7 relative rounded-3xl overflow-hidden border border-brand-border shadow-2xl h-[280px] sm:h-[420px] bg-slate-900">
                    <video autoplay loop muted playsinline class="w-full h-full object-cover">
                        <source src="video/intro_golfcartph.mp4" type="video/mp4">
                    </video>
                </div>
                <div class="lg:col-span-5 space-y-5">
                    <span class="px-3 py-1 rounded-full bg-brand-olive/10 border border-brand-olive/30 text-brand-olive text-xs font-bold uppercase tracking-widest">Who is Golfcarts.ph?</span>
                    <h2 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tighter leading-[1.05]">Pioneering electric mobility in the Philippines.</h2>
                    <p class="text-slate-500 text-lg sm:text-xl leading-relaxed">
                        Operating under SJK Guahan Inc., Golfcarts.ph is the premier distributor and customizer of luxury, resort, golf, and commercial utility electric vehicles across the country.
                    </p>
                    <div class="grid grid-cols-2 gap-3">
                        <div class="rounded-2xl bg-brand-card border border-brand-border p-4">
                            <div class="text-2xl font-black text-slate-900">${CLIENT_LOGOS.length}+</div>
                            <div class="text-[11px] uppercase tracking-wider text-brand-slate font-medium">Partner Clients</div>
                        </div>
                        <div class="rounded-2xl bg-brand-card border border-brand-border p-4">
                            <div class="text-2xl font-black text-slate-900">${BRANCHES.length}</div>
                            <div class="text-[11px] uppercase tracking-wider text-brand-slate font-medium">Branches nationwide</div>
                        </div>
                    </div>
                    <button onclick="navigateTo('about')" class="inline-flex items-center gap-2 bg-brand-olive hover:bg-brand-oliveHover text-slate-900 font-bold px-6 py-3 rounded-xl transition-all shadow-lg hover:scale-105 text-sm btn-shimmer">
                        <span>Learn More</span>
                        <i data-lucide="arrow-right" class="w-4 h-4"></i>
                    </button>
                </div>
            </section>

            <!-- 5. PARTNERS: client logo marquee -->
            <section class="py-12 sm:py-16 bg-gradient-to-b from-brand-dark via-brand-card/60 to-brand-dark border-y border-brand-border/60 overflow-hidden">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8">
                    ${renderHomeSectionHeading('Trusted Partnership Network', 'Trusted by industry leaders.')}
                </div>
                <div class="relative w-full overflow-hidden marquee-container">
                    <div class="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-brand-dark to-transparent z-10 pointer-events-none"></div>
                    <div class="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-brand-dark to-transparent z-10 pointer-events-none"></div>
                    <div class="animate-marquee flex items-center gap-4 sm:gap-6 px-4">
                        ${[...CLIENT_LOGOS, ...CLIENT_LOGOS].map(logoPath => `
                            <div class="container-light-beam client-logo-card w-32 sm:w-40 h-20 sm:h-24 rounded-2xl bg-white/80 border border-brand-border/80 p-3 flex items-center justify-center flex-shrink-0 cursor-pointer shadow-md">
                                <img src="${logoPath}" alt="Client Partner Logo" class="client-logo-img max-h-full max-w-full object-contain" loading="lazy">
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>

            <!-- 5b. BATTERY COMPARISON: lead-acid vs lithium scorecard -->
            ${renderHomeBatteryCompare()}

            <!-- 6. REQUEST A QUOTE: full-width background with lead form -->
            <section id="home-quote" class="relative overflow-hidden scroll-mt-28">
                <img src="image/7.png" alt="" aria-hidden="true" loading="lazy" class="absolute inset-0 w-full h-full object-cover">
                <div class="absolute inset-0 bg-slate-950/75"></div>
                <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    <div class="lg:col-span-5 space-y-4 text-white">
                        <span class="px-3 py-1 rounded-full bg-brand-olive/90 text-slate-900 text-xs font-bold uppercase tracking-widest">Request a Quote</span>
                        <h2 class="text-4xl sm:text-6xl font-extrabold tracking-tighter leading-[1.05]">Get pricing for your next cart.</h2>
                        <p class="text-slate-300 text-lg sm:text-xl leading-relaxed">Pick a model and your nearest branch, and our team will send you a quote.</p>
                    </div>
                    <form onsubmit="handleHomeQuoteSubmit(event)" class="lg:col-span-7 rounded-3xl bg-white p-6 sm:p-8 shadow-2xl grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                        <div>
                            <label class="block font-medium text-slate-600 mb-1">Full Name *</label>
                            <input required type="text" placeholder="Juan Dela Cruz" class="w-full bg-white border border-brand-border rounded-xl p-3 text-slate-900 focus:outline-none focus:border-brand-olive">
                        </div>
                        <div>
                            <label class="block font-medium text-slate-600 mb-1">Mobile Number *</label>
                            <input required type="tel" placeholder="+63 900 000 0000" class="w-full bg-white border border-brand-border rounded-xl p-3 text-slate-900 focus:outline-none focus:border-brand-olive">
                        </div>
                        <div>
                            <label class="block font-medium text-slate-600 mb-1">Email Address *</label>
                            <input required type="email" placeholder="juan@example.com" class="w-full bg-white border border-brand-border rounded-xl p-3 text-slate-900 focus:outline-none focus:border-brand-olive">
                        </div>
                        <div>
                            <label class="block font-medium text-slate-600 mb-1">Quantity</label>
                            <input type="number" min="1" value="1" class="w-full bg-white border border-brand-border rounded-xl p-3 text-slate-900 focus:outline-none focus:border-brand-olive">
                        </div>
                        <div>
                            <label class="block font-medium text-slate-600 mb-1">Vehicle Model *</label>
                            <select required class="w-full bg-white border border-brand-border rounded-xl p-3 text-slate-900 focus:outline-none focus:border-brand-olive">
                                <option value="">Select a model</option>
                                ${vehicleOptions.map(p => `<option>${p.name}</option>`).join('')}
                            </select>
                        </div>
                        <div>
                            <label class="block font-medium text-slate-600 mb-1">Preferred Branch *</label>
                            <select required class="w-full bg-white border border-brand-border rounded-xl p-3 text-slate-900 focus:outline-none focus:border-brand-olive">
                                <option value="">Select a branch</option>
                                ${BRANCHES.map(b => `<option>${b.name}</option>`).join('')}
                            </select>
                        </div>
                        <div class="sm:col-span-2">
                            <label class="block font-medium text-slate-600 mb-1">Notes (optional)</label>
                            <textarea rows="2" placeholder="Preferred color, accessories, delivery location..." class="w-full bg-white border border-brand-border rounded-xl p-3 text-slate-900 focus:outline-none focus:border-brand-olive"></textarea>
                        </div>
                        <button type="submit" class="sm:col-span-2 w-full bg-brand-olive hover:bg-brand-oliveHover text-slate-900 font-bold py-3.5 rounded-xl transition-all shadow-lg text-sm btn-shimmer">
                            Request a Quote
                        </button>
                    </form>
                </div>
            </section>

            <!-- 7. BRANCH LOCATOR -->
            <section id="home-branches" class="reveal max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 scroll-mt-28">
                ${renderHomeSectionHeading('Find a Branch', 'Visit our showrooms.')}
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    ${BRANCHES.map(b => `
                        <div class="container-light-beam rounded-3xl bg-brand-card border border-brand-border p-6 sm:p-8 flex flex-col gap-4">
                            <div class="flex items-center gap-3">
                                <div class="p-3 rounded-xl bg-brand-olive/10 text-brand-olive"><i data-lucide="map-pin" class="w-5 h-5"></i></div>
                                <h3 class="text-2xl font-bold text-slate-900 tracking-tight">${b.name}</h3>
                            </div>
                            <p class="text-slate-600 text-sm leading-relaxed">${b.address}</p>
                            <div class="flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-700 empty:hidden">
                                ${b.phones.map(ph => `<a href="tel:${ph.replace(/[^\d+]/g, '')}" class="inline-flex items-center gap-1.5 hover:text-brand-olive"><i data-lucide="phone" class="w-3.5 h-3.5"></i>${ph}</a>`).join('')}
                            </div>
                            <div class="flex flex-wrap gap-3 pt-2 mt-auto relative z-30">
                                <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(b.address)}" target="_blank" rel="noopener" class="inline-flex items-center gap-2 bg-brand-olive hover:bg-brand-oliveHover text-slate-900 font-bold px-5 py-2.5 rounded-xl text-xs sm:text-sm transition-all">
                                    <i data-lucide="navigation" class="w-4 h-4"></i> Get Directions
                                </a>
                                <button onclick="openQuoteModal()" class="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-900 font-semibold px-5 py-2.5 rounded-xl border border-brand-border text-xs sm:text-sm transition-all">
                                    Request a Quote
                                </button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </section>

            <!-- 8. BLOG -->
            <section class="reveal max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                    ${renderHomeSectionHeading('The Golfcarts.ph Blog', 'Guides, tips & stories.', 'left')}
                    <button onclick="navigateTo('blogs')" class="inline-flex items-center gap-2 text-brand-olive hover:text-brand-oliveHover font-semibold text-sm">View All <i data-lucide="arrow-right" class="w-4 h-4"></i></button>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    ${latestPosts.map(post => `
                        <article onclick="navigateTo('blog-details', '${post.slug}')" class="container-light-beam group cursor-pointer flex flex-col rounded-3xl bg-brand-card border border-brand-border overflow-hidden shadow-lg hover:border-brand-olive/50 transition-all">
                            <div class="h-48 bg-white flex items-center justify-center p-4">
                                <img src="${post.image}" alt="${post.title}" loading="lazy" class="product-card-img max-h-full object-contain">
                            </div>
                            <div class="p-6 flex flex-col gap-3 flex-1">
                                <div class="flex items-center gap-2 text-[11px]">
                                    <span class="px-2.5 py-1 rounded-full bg-brand-olive/10 border border-brand-olive/30 text-brand-olive font-bold uppercase tracking-wider">${post.category}</span>
                                    <span class="text-slate-500">${formatBlogDate(post.date)}</span>
                                </div>
                                <h3 class="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug group-hover:text-brand-olive transition-colors">${post.title}</h3>
                                <p class="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3 flex-1">${post.excerpt}</p>
                                <span class="inline-flex items-center gap-1 text-brand-olive text-xs font-semibold">Continue reading <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i></span>
                            </div>
                        </article>
                    `).join('')}
                </div>
            </section>

            <!-- 9. FAQ ACCORDION -->
            <section class="reveal max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                ${renderHomeSectionHeading('Need Help?', 'Questions? Answers.')}
                <div class="space-y-3">
                    ${HOME_FAQS.map(faq => `
                        <details class="home-faq group rounded-2xl bg-brand-card border border-brand-border">
                            <summary class="flex items-center justify-between gap-4 p-5 cursor-pointer list-none font-semibold text-slate-900 text-sm sm:text-base">
                                <span>${faq.q}</span>
                                <i data-lucide="plus" class="home-faq-icon w-5 h-5 text-brand-olive flex-shrink-0"></i>
                            </summary>
                            <p class="px-5 pb-5 -mt-1 text-slate-600 text-sm leading-relaxed">${faq.a}</p>
                        </details>
                    `).join('')}
                </div>
                <div class="text-center">
                    <button onclick="navigateTo('contact')" class="inline-flex items-center gap-2 text-brand-olive hover:text-brand-oliveHover font-semibold text-sm">Still have questions? Contact us <i data-lucide="arrow-right" class="w-4 h-4"></i></button>
                </div>
            </section>

            <!-- 10. QUICK LINKS -->
            <section class="reveal max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    ${quickLinks.map(link => `
                        <button onclick="${link.action}" class="container-light-beam group text-left rounded-2xl bg-brand-card border border-brand-border p-5 hover:border-brand-olive/50 transition-all flex flex-col gap-3">
                            <div class="p-2.5 rounded-xl bg-brand-olive/10 text-brand-olive w-fit"><i data-lucide="${link.icon}" class="w-5 h-5"></i></div>
                            <h3 class="font-bold text-slate-900 text-lg tracking-tight group-hover:text-brand-olive transition-colors">${link.title}</h3>
                            <p class="text-slate-500 text-xs leading-relaxed">${link.text}</p>
                        </button>
                    `).join('')}
                </div>
            </section>
        </div>
    </div>
    `;
}

// RENDER CART / PRODUCTS PAGE
function renderProductsPage() {
    const categories = ['All', ...Object.keys(CATEGORY_BANNERS)];
    const currentBanner = CATEGORY_BANNERS[productFilterCategory];

    const filtered = PRODUCTS_DATA.filter(p => {
        const matchesCat = productFilterCategory === 'All' || p.category === productFilterCategory;
        const matchesSearch = p.name.toLowerCase().includes(productSearchQuery.toLowerCase()) || 
                              p.description.toLowerCase().includes(productSearchQuery.toLowerCase());
        return matchesCat && matchesSearch;
    });

    return `
    <div id="cart-page-content" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8 pb-16">
        
        <!-- 1. CATEGORY SUB-MENU BAR (DIRECTLY BELOW MAIN NAVIGATION HEADER) -->
        <div class="container-light-beam relative z-30 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 p-3 sm:p-4 rounded-2xl bg-brand-card border border-brand-border shadow-md" style="overflow: visible;">
            <!-- Category Filter Buttons (pillar tabs open a sub-menu on hover) -->
            <div class="flex items-center gap-1.5 sm:gap-2 overflow-x-auto md:overflow-visible w-full md:w-auto pb-2 md:pb-0 scrollbar-none z-10">
                ${categories.map(cat => {
                    const segment = NAV_SEGMENTS.find(s => s.category === cat);
                    const tab = `
                        <button onclick="setCategoryFilter('${cat}')" class="inline-flex items-center gap-1 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                            productFilterCategory === cat ? 'bg-brand-olive text-slate-900 shadow-md font-bold' : 'bg-white/70 text-slate-600 hover:bg-slate-200/80'
                        }">
                            ${categoryLabel(cat)}
                            ${segment ? '<i data-lucide="chevron-down" class="w-3.5 h-3.5"></i>' : ''}
                        </button>`;
                    return segment ? `<div class="segment-menu relative">${tab}${renderSegmentDropdown(segment)}</div>` : tab;
                }).join('')}
            </div>

            <!-- Search Input Bar -->
            <div class="relative w-full md:w-72 z-10">
                <i data-lucide="search" class="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2"></i>
                <input id="product-search-input" type="text" value="${productSearchQuery}" placeholder="Search products or accessories..." class="w-full bg-white border border-brand-border rounded-xl pl-10 pr-4 py-2 sm:py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-olive">
            </div>
        </div>

        <!-- 2. DYNAMIC CATEGORY BANNER OR DEFAULT HEADLINE (UNDER THE SUB-MENU BAR) -->
        ${currentBanner && currentBanner.photo ? `
            <!-- Full-bleed lifestyle photo banner with a slow zoom -->
            <section class="category-banner relative rounded-3xl overflow-hidden h-[320px] sm:h-[400px] lg:h-[460px] shadow-xl bg-slate-950">
                <!-- Photo fills the banner on small screens and the right two-thirds on desktop, so less of it is cropped -->
                <div class="absolute inset-y-0 right-0 w-full lg:w-[68%] overflow-hidden">
                    <img src="${currentBanner.photo}" alt="${currentBanner.title}" class="category-banner-img absolute inset-0 w-full h-full object-cover" style="object-position:${currentBanner.photoFocus || 'center'}">
                </div>
                <div class="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent lg:via-slate-950/60 lg:to-transparent lg:from-[32%]"></div>
                <div class="category-banner-copy relative z-10 h-full flex flex-col justify-center max-w-xl p-6 sm:p-10 lg:p-14 space-y-3 sm:space-y-4">
                    <span class="self-start px-3 py-1 rounded-full bg-brand-olive/90 text-slate-900 text-[11px] font-bold uppercase tracking-widest shadow-lg">${currentBanner.title}</span>
                    <h1 class="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight drop-shadow-md">${currentBanner.headline}</h1>
                    <p class="text-slate-200 text-xs sm:text-base leading-relaxed max-w-md drop-shadow">${currentBanner.subheadline}</p>
                    <span class="self-start inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-xs font-semibold">
                        <i data-lucide="car" class="w-3.5 h-3.5"></i> ${filtered.length} model${filtered.length === 1 ? '' : 's'} available
                    </span>
                </div>
            </section>
        ` : currentBanner ? `
            <section class="relative bg-gradient-to-r from-brand-card via-brand-dark to-white border border-brand-border rounded-3xl px-6 sm:px-10 py-6 shadow-lg overflow-hidden">
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
                    <div class="lg:col-span-6 space-y-2 sm:space-y-3">
                        <span class="px-3 py-1 rounded-full bg-brand-olive/10 border border-brand-olive/30 text-brand-olive text-xs font-bold uppercase tracking-widest">
                            ${currentBanner.title}
                        </span>
                        <h1 class="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                            ${currentBanner.headline}
                        </h1>
                        <p class="text-slate-600 text-xs sm:text-base leading-relaxed">
                            ${currentBanner.subheadline}
                        </p>
                    </div>
                    <div class="lg:col-span-6 h-56 sm:h-72 flex items-center justify-center">
                        <img src="${currentBanner.image}" alt="${currentBanner.title}" class="max-h-full max-w-full object-contain rounded-2xl drop-shadow-[0_20px_25px_rgba(0,0,0,0.18)]">
                    </div>
                </div>
            </section>
        ` : `
            <div class="text-center space-y-2 pt-2 pb-2">
                <span class="text-brand-olive text-xs font-bold tracking-widest uppercase">Electric Showroom</span>
                <h1 class="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">Vehicle & Accessory Catalog</h1>
                <p class="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
                    Browse our complete range of golf carts, commercial utility haulers, VIP resort shuttles, and luxury custom accessories.
                </p>
            </div>
        `}

        <!-- 3. PRODUCT GRID CONTAINER -->
        <div id="product-grid-container" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            ${filtered.length > 0 ? filtered.map(p => renderProductCardHTML(p)).join('') : `
                <div class="col-span-full text-center py-16 bg-brand-card rounded-2xl border border-brand-border">
                    <i data-lucide="info" class="w-10 h-10 text-brand-slate mx-auto mb-2"></i>
                    <p class="text-slate-600 font-semibold">No items found matching criteria.</p>
                </div>
            `}
        </div>

    </div>
    `;
}

function bindProductsFilterEvents() {
    const input = document.getElementById('product-search-input');
    if (input) {
        input.addEventListener('input', (e) => {
            productSearchQuery = e.target.value;
            
            const gridContainer = document.getElementById('product-grid-container');
            if (gridContainer) {
                const filtered = PRODUCTS_DATA.filter(p => {
                    const matchesCat = productFilterCategory === 'All' || p.category === productFilterCategory;
                    const matchesSearch = p.name.toLowerCase().includes(productSearchQuery.toLowerCase()) || 
                                          p.description.toLowerCase().includes(productSearchQuery.toLowerCase());
                    return matchesCat && matchesSearch;
                });

                gridContainer.innerHTML = filtered.length > 0 
                    ? filtered.map(p => renderProductCardHTML(p)).join('') 
                    : `
                        <div class="col-span-full text-center py-16 bg-brand-card rounded-2xl border border-brand-border">
                            <i data-lucide="info" class="w-10 h-10 text-brand-slate mx-auto mb-2"></i>
                            <p class="text-slate-600 font-semibold">No items found matching criteria.</p>
                        </div>
                    `;

                if (window.lucide) {
                    lucide.createIcons();
                }
            }
        });
    }
}

// Apple-style lineup tile: big photo, color dots, name, one-line tagline, key specs, price, two actions
function renderProductCardHTML(product) {
    const isVehicle = product.category !== 'Accessories';
    const safeName = product.slug; // quote buttons pass the slug (names repeat across pillars)
    const colors = getProductBodyColors(product);
    const shownColors = colors.slice(0, 7);
    const specLine = isVehicle
        ? [product.seating && product.seating.split(' (')[0], isMeaningful(product.range) && product.range].filter(Boolean).join(' · ')
        : '';

    return `
    <div class="product-tile group rounded-3xl bg-white border border-brand-border overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:shadow-slate-900/10 hover:-translate-y-1">
        <button onclick="navigateTo('product-details', '${product.slug}')" aria-label="View ${product.name}" class="relative h-60 sm:h-72 overflow-hidden bg-brand-card/70 pt-6 flex items-center justify-center">
            <img src="${product.image}" alt="${product.name}" loading="lazy" class="cart-img-fill transition-transform duration-500 group-hover:scale-105">
        </button>

        <div class="px-6 pt-5 pb-6 flex flex-col items-center text-center flex-1 gap-2">
            ${shownColors.length ? `
                <div class="flex items-center gap-1.5 h-4" aria-label="${colors.length} colors available">
                    ${shownColors.map(c => `<span class="w-3 h-3 rounded-full border border-slate-300" style="background:${c.hex}" title="${c.name}"></span>`).join('')}
                    ${colors.length > shownColors.length ? `<span class="text-[11px] text-slate-500 font-medium ml-0.5">+${colors.length - shownColors.length}</span>` : ''}
                </div>
            ` : '<div class="h-4"></div>'}
            <p class="text-[11px] font-semibold uppercase tracking-widest text-brand-olive pt-1">${categoryLabel(product.category)}</p>
            <h3 class="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">${product.name}</h3>
            <p class="text-sm text-slate-500 leading-snug line-clamp-2 min-h-[2.5rem]">${product.tagline}</p>
            ${specLine ? `<p class="text-xs text-slate-500">${specLine}</p>` : ''}
            <p class="text-sm font-semibold text-slate-900">${product.priceLabel || 'Inquire for Price'}</p>

            <div class="mt-auto pt-4 flex flex-wrap items-center justify-center gap-4">
                <button onclick="openQuoteModal('${safeName}')" class="bg-brand-olive hover:bg-brand-oliveHover text-slate-900 font-bold px-5 py-2 rounded-full text-sm transition-all btn-shimmer">Request a Quote</button>
                <button onclick="navigateTo('product-details', '${product.slug}')" class="inline-flex items-center gap-0.5 text-brand-oliveHover hover:text-slate-900 font-semibold text-sm transition-colors">
                    Learn more <i data-lucide="chevron-right" class="w-4 h-4"></i>
                </button>
            </div>
        </div>
    </div>
    `;
}

// --- VEHICLE DETAIL PAGE (Overview / Colors / Features / Specifications) ---

// Available colors per model family, from the "Versions" cart-builder sheet (STEP 2 COLORS tab).
// Products opt in with `colorFamily`; hex values are approximate screen swatches.
const CHAMELEON_SWATCH = 'linear-gradient(135deg, #5B2C83, #1F6FB2, #2E9E6B)';

// Seat options for Tempo, Tempo Premium and Reman (sheet: "SELECT YOUR SEAT COLOR").
// The sheet's premium "Light Beige", "Black" and "Grey" are its Modern Premium seats, named in full here
// so they don't clash with the standard White / Beige / Black / Grey.
const CLUB_CAR_SEAT_GROUPS = [
    { tier: 'Standard Club Car Seats', options: ['White', 'Beige', 'Black', 'Grey'] },
    { tier: 'Premium Club Car Seats', options: [
        'Modern Premium Light Beige', 'Premium Camello', 'Modern Premium Black', 'Premium Black and Grey',
        'Modern Premium Grey', 'Elite Bright White', 'Premium Light Beige', 'Premium Off White', 'Premium Black',
        'Premium Grey', 'Premium Camello & Light Beige', 'Premium Camello & Off White', 'Premium Light Beige & Off White',
        'Premium Camello (Special Promo)', 'Premium Black and Grey (Special Promo)',
        'High-Back Sport Black Carbon Fiber with Silver Inlay', 'High-Back Luxury Honey Beige with Black Inlay',
        'High-Back Luxury Briar Brown'
    ] },
    { tier: 'Premium GC Seats', options: [
        'Tsunami Silver Red & Black', 'Tsunami Silver Grey & Black', 'Tsunami Silver Blue & Black',
        'GC White with Arm Rest', 'GC Beige with Arm Rest', 'GC Dark Brown with Arm Rest',
        'Coffee Brown Ventilated Premium Seats'
    ] }
];
const COLOR_FAMILIES = {
    tempo: {
        body: [
            { tier: 'Standard Club Car Colors', colors: [
                { name: 'White', hex: '#F5F5F2' }, { name: 'Black', hex: '#1C1D1F' }, { name: 'Cashmere', hex: '#CDBA96' },
                { name: 'Sangria', hex: '#8E1B22' }, { name: 'Sapphire', hex: '#1E3A78' }, { name: 'Green', hex: '#0F5A45' },
                { name: 'Platinum Grey', hex: '#8F9396' }
            ] },
            { tier: 'Premium Club Car Colors', colors: [
                { name: 'Atomic Orange', hex: '#F26B1D' }, { name: 'Synergy Green', hex: '#6DB33F' }, { name: 'Rally Red', hex: '#C4161C' },
                { name: 'Metallic Green', hex: '#2E5E3A' }, { name: 'Metallic Black', hex: '#232427' }, { name: 'Metallic Midnight Silver', hex: '#4B5056' },
                { name: 'Metallic Brilliant Blue', hex: '#1F4FBF' }, { name: 'Metallic Ice Blue', hex: '#A9C8DA' }, { name: 'Metallic Signature Silver', hex: '#B7BABD' },
                { name: 'Metallic Glacier White', hex: '#EEF0EE' }, { name: 'Pearl Mist Grey', hex: '#A7A9AA' }, { name: 'Pearl Blue', hex: '#2F5D8A' }
            ] },
            { tier: 'Premium GC Custom Paint', colors: [
                { name: '3D Paint', hex: 'linear-gradient(135deg, #C9CCD1, #5E6670, #E8EAEC)' },
                { name: 'Chameleon (7 colors)', hex: CHAMELEON_SWATCH },
                { name: 'Chameleon (3 colors)', hex: CHAMELEON_SWATCH }
            ] }
        ],
        seatGroups: CLUB_CAR_SEAT_GROUPS
    },
    // Remanufactured Tempo carts; uses the same seat options as Tempo (per the sheet)
    reman: {
        body: [
            { tier: 'Remanufactured Colors', colors: [
                { name: 'Cashmere', hex: '#CDBA96' }, { name: 'Black', hex: '#1C1D1F' }, { name: 'Cayenne', hex: '#A4402A' }
            ] },
            { tier: 'Premium GC Custom Paint', colors: [
                { name: '3D Paint', hex: 'linear-gradient(135deg, #C9CCD1, #5E6670, #E8EAEC)' },
                { name: 'Chameleon (7 colors)', hex: CHAMELEON_SWATCH },
                { name: 'Chameleon (3 colors)', hex: CHAMELEON_SWATCH }
            ] }
        ],
        seatGroups: CLUB_CAR_SEAT_GROUPS
    },
    villager: {
        body: [{ tier: 'Villager Colors', colors: [
            { name: 'White', hex: '#F5F5F2' }, { name: 'Beige', hex: '#D8C8A6' }, { name: 'Green', hex: '#0F5A45' }
        ] }]
    },
    carryall: {
        body: [{ tier: 'Transporter & Carryall Colors', colors: [
            { name: 'White', hex: '#F5F5F2' }, { name: 'Green', hex: '#0F5A45' }, { name: 'Grey', hex: '#8C8F92' }
        ] }],
        seatGroups: [{ tier: 'Carryall Seats', options: ['Gray', 'White', 'Black', 'Beige'] }]
    }
};

// Canopy options per model, from the sheet's "SELECT YOUR CANOPY COLOR" step. Products point here with `canopyKey`.
// CC = Club Car canopy, CN = the non-Club Car 80" / 120" canopy listed in the sheet.
const CANOPY_OPTIONS = {
    'tempo-2': ['White', 'Beige', 'Black'],
    // 2+2 Club Car seat kit: White/Beige/Black; Genesis and Metal flip-seat builds add Black CN
    'tempo-2+2': ['White', 'Beige', 'Black', 'Black CN'],
    'tempo-4': ['Black'],
    'tempo-4+2': ['White CC', 'Beige CC', 'Black CC', 'Black CN'],
    'tempo-6': ['White CC', 'Beige CC', 'Black CC', 'Black CN'],
    'tempo-6+2': ['White', 'Black'],
    'transporter-4': ['White', 'Beige', 'Black'],
    'transporter-6': ['White', 'Beige', 'Black'],
    'villager-6': ['White', 'Beige'],
    'villager-8': ['White', 'Beige'],
    'carryall-300': ['White', 'Beige', 'Black'],
    'carryall-500': ['White', 'Beige', 'Black'],
    'carryall-700': ['White', 'Beige', 'Black', 'White Long Canopy', 'Beige Long Canopy', 'Black Long Canopy'],
    'minibus-14': ['Black'],
    'minibus-23': ['Black']
};

// Flat list of a product's body colors, each with a photo when one exists for that color
function getProductBodyColors(product) {
    const family = COLOR_FAMILIES[product.colorFamily];
    if (!family) return [];
    const photos = product.colorPhotos || {};
    return family.body.flatMap(group => group.colors.map(c => ({ ...c, tier: group.tier, image: photos[c.name] || null })));
}

// Accessory options from the "Versions" cart-builder sheet (STEP 4 ACCESSORIES tab).
// `fits` lists the product accessoryTags each item is compatible with, based on the item names
// (e.g. "Villager 6 Rain Enclosure"); Precedent-only items are omitted. `product` links a catalog photo.
const ACCESSORY_CATALOG = [
    { group: 'Windshield', items: [
        { id: 'ws-clear', name: 'Clear Hinged Windshield', sku: 'SJK-0066', fits: ['tempo'] },
        { id: 'ws-tinted', name: 'Tinted Hinged Windshield', sku: 'SJK-1854', fits: ['tempo'] },
        { id: 'ws-premium-clear', name: 'Premium Clear Hinged Windshield', sku: 'SJK-1042', fits: ['onward'] },
        { id: 'ws-premium-tinted', name: 'Premium Tinted Hinged Windshield', sku: 'SJK-1043', fits: ['onward'] }
    ] },
    { group: 'Lighting', items: [
        { id: 'lt-cc-tempo', name: 'CC Tempo Lights (Head Lights)', sku: 'SJK-0249', fits: ['tempo'], product: 'acc-deluxe-lights' },
        { id: 'lt-gc-tempo', name: 'GC Tempo Light Kit', sku: 'SJK-1921', fits: ['tempo'] },
        { id: 'lt-gc-tempo-full', name: 'GC Tempo Full Light Kit', sku: 'SJK-1573', fits: ['tempo'] },
        { id: 'lt-gc-tempo-rgb', name: 'GC Tempo Full Light Kit RGB', sku: 'SJK-1548', fits: ['tempo'] }
    ] },
    { group: 'Golf Accessories', items: [
        { id: 'golf-sand', name: 'Sand Bottle', sku: 'SJK-0332', fits: ['golf'], product: 'acc-divot-sand-bottle' },
        { id: 'golf-washer', name: 'Ball Washer', sku: 'SJK-0248', fits: ['golf'], product: 'acc-ball-cleaner' },
        { id: 'golf-cooler', name: 'Caddie Cooler', sku: 'SJK-0257', fits: ['golf'], product: 'acc-cooler' },
        { id: 'golf-cooler-premium', name: 'Premium Caddie Cooler', sku: 'SJK-1363', fits: ['golf'] },
        { id: 'golf-caddie', name: 'Caddie Carrier', sku: 'SJK-1374', fits: ['golf'] },
        { id: 'golf-bag-mag-black', name: 'Premium Magnetic Bag Cover (Black)', sku: 'SJK-0344', fits: ['golf'], product: 'acc-bag-cover' },
        { id: 'golf-bag-mag-beige', name: 'Premium Magnetic Bag Cover (Beige)', sku: 'SJK-0347', fits: ['golf'], product: 'acc-bag-cover' },
        { id: 'golf-bag-black', name: 'Bag Cover (Black)', sku: 'SJK-0136', fits: ['golf'], product: 'acc-bag-cover' },
        { id: 'golf-bag-beige', name: 'Bag Cover (Beige)', sku: 'SJK-1038', fits: ['golf'], product: 'acc-bag-cover' },
        { id: 'golf-bag-white', name: 'Bag Cover (White)', sku: 'SJK-1040', fits: ['golf'], product: 'acc-bag-cover' }
    ] },
    { group: 'Mirrors', items: [
        { id: 'mir-side', name: 'Side Mirrors', sku: 'SJK-1146', fits: ['tempo', 'onward', 'villager', 'utility'] },
        { id: 'mir-side-blinker', name: 'Side Mirrors with Blinkers', sku: 'SJK-1545', fits: ['tempo', 'onward', 'villager', 'utility'], product: 'acc-side-mirror' },
        { id: 'mir-5-panel', name: '5 Panel Rear Mirror', sku: 'SJK-0154', fits: ['tempo', 'onward', 'villager'], product: 'acc-5-panel-mirror' },
        { id: 'mir-convex', name: 'Convex Rear Mirror', sku: 'SJK-1461', fits: ['tempo', 'onward', 'villager', 'utility'] }
    ] },
    { group: 'Storage', items: [
        { id: 'sto-overhead', name: 'Overhead Storage Console', sku: 'SJK-0880', fits: ['tempo', 'onward'] },
        { id: 'sto-underseat', name: 'Rear Under Seat Storage Bucket', sku: 'SJK-1002', fits: ['tempo', 'onward'] },
        { id: 'sto-glovebox', name: 'Onward Locking Glove Box Kit', sku: 'SJK-0881', fits: ['onward'] }
    ] },
    { group: 'Rain Enclosures', items: [
        { id: 'enc-onward-black', name: 'Two-Sided Rain Enclosure (Black)', fits: ['onward'] },
        { id: 'enc-2-beige', name: 'Three-Sided Rain Enclosure (Beige)', sku: 'SJK-1855', fits: ['tempo-2'], product: 'acc-golf-cover' },
        { id: 'enc-2-white', name: 'Three-Sided Rain Enclosure (White)', sku: 'SJK-1856', fits: ['tempo-2'], product: 'acc-golf-cover' },
        { id: 'enc-2-black', name: 'Three-Sided Rain Enclosure (Black)', sku: 'SJK-1509', fits: ['tempo-2'], product: 'acc-golf-cover' },
        { id: 'enc-22-black', name: '2+2 Three-Sided Rain Enclosure (Black)', sku: 'SJK-0467', fits: ['tempo-2+2'] },
        { id: 'enc-22-beige', name: '2+2 Three-Sided Rain Enclosure (Beige)', fits: ['tempo-2+2'] },
        { id: 'enc-22-white', name: '2+2 Three-Sided Rain Enclosure (White)', sku: 'SJK-1905', fits: ['tempo-2+2'] },
        { id: 'enc-4-black', name: 'Tempo 4 Rain Enclosure (Black)', fits: ['tempo-4'] },
        { id: 'enc-4-beige', name: 'Tempo 4 Rain Enclosure (Beige)', fits: ['tempo-4'] },
        { id: 'enc-42-black', name: 'Tempo 4+2 Rain Enclosure (Black)', fits: ['tempo-4+2'] },
        { id: 'enc-42-beige', name: 'Tempo 4+2 Rain Enclosure (Beige)', fits: ['tempo-4+2'] },
        { id: 'enc-v6-white', name: 'Villager 6 Rain Enclosure (White)', sku: 'SJK-1814', fits: ['villager-6'] },
        { id: 'enc-v6-beige', name: 'Villager 6 Rain Enclosure (Beige)', sku: 'SJK-1815', fits: ['villager-6'] },
        { id: 'enc-v6-white-fold', name: 'Villager 6 Rain Enclosure, Fold Down (White)', fits: ['villager-6'] },
        { id: 'enc-v6-beige-fold', name: 'Villager 6 Rain Enclosure, Fold Down (Beige)', fits: ['villager-6'] },
        { id: 'enc-v8-white', name: 'Villager 8 Rain Enclosure (White)', sku: 'SJK-1816', fits: ['villager-8'] },
        { id: 'enc-v8-beige', name: 'Villager 8 Rain Enclosure (Beige)', sku: 'SJK-1817', fits: ['villager-8'] },
        { id: 'enc-v8-white-fold', name: 'Villager 8 Rain Enclosure, Fold Down (White)', fits: ['villager-8'] },
        { id: 'enc-v8-beige-fold', name: 'Villager 8 Rain Enclosure, Fold Down (Beige)', fits: ['villager-8'] },
        { id: 'enc-t4-white', name: 'Transporter 4 Long Rain Enclosure (White)', fits: ['transporter-4'] },
        { id: 'enc-t4-black', name: 'Transporter 4 Long Rain Enclosure (Black)', fits: ['transporter-4'] },
        { id: 'enc-t4-beige', name: 'Transporter 4 Long Rain Enclosure (Beige)', fits: ['transporter-4'] },
        { id: 'enc-ca-white', name: 'Carryall Rain Enclosure (White)', sku: 'SJK-1248', fits: ['carryall'] },
        { id: 'enc-ca-black', name: 'Carryall Rain Enclosure (Black)', fits: ['carryall'] },
        { id: 'enc-ca-beige', name: 'Carryall Rain Enclosure (Beige)', fits: ['carryall'] },
        { id: 'enc-mb14-black', name: 'Minibus 14 Rain Enclosure (Black)', fits: ['minibus'] },
        { id: 'enc-mb14-beige', name: 'Minibus 14 Rain Enclosure (Beige)', fits: ['minibus'] }
    ] },
    { group: 'Electronics', items: [
        { id: 'el-cc-soundbar', name: 'Club Car Premium Sound Bar', sku: 'SJK-0787', fits: ['tempo', 'onward', 'villager'], product: 'acc-premium-speaker' },
        { id: 'el-gc-soundbar', name: 'GC Sound Bar 27" RGB', sku: 'SJK-1564', fits: ['tempo', 'onward', 'villager'] },
        { id: 'el-wireless', name: 'Wireless Charging', sku: 'SJK-1510', fits: ['tempo', 'onward'] },
        { id: 'el-usb-premium', name: 'Premium USB-C Charging Port', sku: 'SJK-1178', fits: ['tempo', 'onward', 'villager', 'utility'] },
        { id: 'el-usb-gc', name: 'GC USB-C Charging Port QC3.0 with Volt Meter', fits: ['tempo', 'onward', 'villager', 'utility'] }
    ] },
    { group: 'Driver Accessories', items: [
        { id: 'drv-wheel', name: 'Premium Steering Wheel', sku: 'SJK-1355', fits: ['tempo', 'onward'] },
        { id: 'drv-wheel-scorecard', name: 'Premium Steering Wheel with Scorecard', sku: 'SJK-1354', fits: ['golf'] },
        { id: 'drv-floormat', name: 'GC Floor Mat', sku: 'SJK-1375', fits: ['tempo', 'onward', 'villager'] }
    ] },
    { group: 'Exterior', items: [
        { id: 'ext-fender-3', name: 'Tempo Fenders 3"', sku: 'SJK-1542', fits: ['tempo'] },
        { id: 'ext-fender-15', name: 'Tempo Fenders 1.5"', fits: ['tempo'] },
        { id: 'ext-fender-onward', name: 'Onward Fenders', sku: 'SJK-1885', fits: ['onward'] },
        { id: 'ext-brush-guard', name: 'Brush Guard', sku: 'SJK-0119', fits: ['tempo', 'onward', 'utility'], product: 'acc-brush-guard' }
    ] },
    { group: 'Lifted Accessories', items: [
        { id: 'lift-4', name: '4" Lift Kit', sku: 'SJK-0330', fits: ['tempo'] },
        { id: 'lift-nerf', name: 'Nerf Bar', sku: 'SJK-0377', fits: ['lifted'] }
    ] }
];

let quoteAccessories = new Set();

function findAccessory(id) {
    for (const group of ACCESSORY_CATALOG) {
        const item = group.items.find(i => i.id === id);
        if (item) return item;
    }
    return null;
}

// Accessory groups that fit a model, looked up by the product name shown in the quote form
function getCompatibleAccessoryGroups(productName) {
    const product = findProductRef(productName);
    const tags = (product && product.accessoryTags) || [];
    return ACCESSORY_CATALOG
        .map(g => ({ group: g.group, items: g.items.filter(i => i.fits.some(t => tags.includes(t))) }))
        .filter(g => g.items.length);
}

function renderAccessoryPicker() {
    const picker = document.getElementById('modal-accessory-picker');
    const select = document.getElementById('modal-product-select');
    if (!picker || !select) return;
    const groups = getCompatibleAccessoryGroups(select.value);

    picker.innerHTML = groups.length ? groups.map(g => `
        <div class="space-y-1.5">
            <p class="text-[10px] font-extrabold uppercase tracking-wider text-brand-slate">${g.group}</p>
            ${g.items.map(item => {
                const photo = item.product && (PRODUCTS_DATA.find(p => p.slug === item.product) || {}).image;
                return `
                    <label class="flex items-center gap-3 p-2 rounded-lg bg-white border border-brand-border hover:border-brand-olive/50 cursor-pointer">
                        <input type="checkbox" ${quoteAccessories.has(item.id) ? 'checked' : ''} onchange="toggleQuoteAccessory('${item.id}')" class="w-4 h-4 accent-[#749E35] flex-shrink-0">
                        <span class="w-9 h-9 rounded-md bg-brand-card flex items-center justify-center overflow-hidden flex-shrink-0">
                            ${photo ? `<img src="${photo}" alt="" class="max-w-full max-h-full object-contain">` : '<i data-lucide="package" class="w-4 h-4 text-slate-400"></i>'}
                        </span>
                        <span class="flex-1 min-w-0">
                            <span class="block text-slate-800 font-medium">${item.name}</span>
                            ${item.sku ? `<span class="block text-[10px] text-slate-400">${item.sku}</span>` : ''}
                        </span>
                        <span class="flex-shrink-0 px-2 py-0.5 rounded-full bg-amber-50 border border-amber-200 text-[10px] font-semibold text-amber-800 whitespace-nowrap">+ Paid Add-on</span>
                    </label>`;
            }).join('')}
        </div>
    `).join('') + '<p class="text-[10px] text-slate-400">Fitment is confirmed by our team before quoting.</p>'
        : '<p class="text-slate-500">No add-on accessories are listed for this model yet. Mention what you need in the notes.</p>';

    if (window.lucide) lucide.createIcons();
}

function renderAccessoryChips() {
    const chips = document.getElementById('modal-accessory-chips');
    const toggle = document.getElementById('accessory-toggle');
    if (chips) {
        chips.innerHTML = [...quoteAccessories].map(id => {
            const item = findAccessory(id);
            return item ? `
                <span class="inline-flex items-center gap-1 pl-2.5 pr-1 py-1 rounded-full bg-brand-olive/15 text-slate-800 text-[11px] font-medium">
                    ${item.name}
                    <button type="button" onclick="toggleQuoteAccessory('${id}')" aria-label="Remove ${item.name}" class="w-4 h-4 rounded-full hover:bg-brand-olive/30 leading-none">&times;</button>
                </span>` : '';
        }).join('');
    }
    if (toggle) toggle.textContent = quoteAccessories.size ? `${quoteAccessories.size} selected` : '';
}

function toggleQuoteAccessory(id) {
    if (quoteAccessories.has(id)) quoteAccessories.delete(id);
    else quoteAccessories.add(id);
    renderAccessoryChips();
    const picker = document.getElementById('modal-accessory-picker');
    if (picker && !picker.classList.contains('hidden')) renderAccessoryPicker();
}

function toggleAccessoryPicker(forceOpen = null) {
    const picker = document.getElementById('modal-accessory-picker');
    if (!picker) return;
    const open = forceOpen === null ? picker.classList.contains('hidden') : forceOpen;
    picker.classList.toggle('hidden', !open);
    if (open) renderAccessoryPicker();
}

// Drops selections that don't fit the newly selected model
function onQuoteModelChange() {
    const select = document.getElementById('modal-product-select');
    const fitting = new Set(getCompatibleAccessoryGroups(select ? select.value : '').flatMap(g => g.items.map(i => i.id)));
    quoteAccessories = new Set([...quoteAccessories].filter(id => fitting.has(id)));
    renderAccessoryChips();
    const picker = document.getElementById('modal-accessory-picker');
    if (picker && !picker.classList.contains('hidden')) renderAccessoryPicker();
}

function openQuoteWithAccessories(productName, notes = '') {
    openQuoteModal(productName, notes);
    toggleAccessoryPicker(true);
}

// Vehicle page: opens the quote with the accessory list, carrying over the selected colors
function addAccessoriesFromDetail() {
    const product = PRODUCTS_DATA.find(p => p.slug === currentSlug);
    if (product) openQuoteWithAccessories(product.slug, getDetailBuildNote());
}

// Swatch colors for the seat and canopy options (sheet names: White, Beige, Black, Grey/Gray)
// Swatch colors for every seat and canopy option (approximate; two-tone seats use a split swatch).
// The preview engine repaints with the first color of a split swatch.
const TRIM_COLOR_HEX = {
    // Standard seats and canopies
    'White': '#F5F5F2', 'Beige': '#D8C8A6', 'Black': '#1C1D1F', 'Grey': '#8F9396', 'Gray': '#8F9396',
    // Premium Club Car seats
    'Modern Premium Light Beige': '#E3D5B8', 'Premium Camello': '#A86B3C', 'Modern Premium Black': '#1F1F21',
    'Premium Black and Grey': 'linear-gradient(135deg, #1F1F21 50%, #8F9396 50%)',
    'Modern Premium Grey': '#8A8D90', 'Elite Bright White': '#FBFBF9', 'Premium Light Beige': '#E3D5B8',
    'Premium Off White': '#EFEBE0', 'Premium Black': '#1F1F21', 'Premium Grey': '#8A8D90',
    'Premium Camello & Light Beige': 'linear-gradient(135deg, #A86B3C 50%, #E3D5B8 50%)',
    'Premium Camello & Off White': 'linear-gradient(135deg, #A86B3C 50%, #EFEBE0 50%)',
    'Premium Light Beige & Off White': 'linear-gradient(135deg, #E3D5B8 50%, #EFEBE0 50%)',
    'Premium Camello (Special Promo)': '#A86B3C',
    'Premium Black and Grey (Special Promo)': 'linear-gradient(135deg, #1F1F21 50%, #8F9396 50%)',
    'High-Back Sport Black Carbon Fiber with Silver Inlay': 'linear-gradient(135deg, #1F1F21 60%, #B7BABD 60%)',
    'High-Back Luxury Honey Beige with Black Inlay': 'linear-gradient(135deg, #C9A36A 60%, #1F1F21 60%)',
    'High-Back Luxury Briar Brown': '#5C3A24',
    // Premium GC seats
    'Tsunami Silver Red & Black': 'linear-gradient(135deg, #B7BABD 33%, #B3121B 33% 66%, #1F1F21 66%)',
    'Tsunami Silver Grey & Black': 'linear-gradient(135deg, #B7BABD 33%, #6B6E72 33% 66%, #1F1F21 66%)',
    'Tsunami Silver Blue & Black': 'linear-gradient(135deg, #B7BABD 33%, #1F4FBF 33% 66%, #1F1F21 66%)',
    'GC White with Arm Rest': '#F5F5F2', 'GC Beige with Arm Rest': '#D8C8A6', 'GC Dark Brown with Arm Rest': '#4A2E1E',
    'Coffee Brown Ventilated Premium Seats': '#5A3A28',
    // Canopies (CC = Club Car, CN = non-Club Car canopy)
    'White CC': '#F5F5F2', 'Beige CC': '#D8C8A6', 'Black CC': '#1C1D1F', 'Black CN': '#2A2B2E',
    'White Long Canopy': '#F5F5F2', 'Beige Long Canopy': '#D8C8A6', 'Black Long Canopy': '#1C1D1F'
};

// Current color choices on the vehicle page; reset each time a vehicle page renders
let detailBuild = { body: null, seat: null, canopy: null };

function getDetailBuildNote() {
    const parts = [
        detailBuild.body && `Body ${detailBuild.body}`,
        detailBuild.seat && `Seat ${detailBuild.seat}`,
        detailBuild.canopy && `Canopy ${detailBuild.canopy}`
    ].filter(Boolean);
    const lines = [];
    const build = getBuildSummaryText();
    if (build) lines.push(`Build: ${build}`);
    if (parts.length) lines.push(`Preferred colors: ${parts.join(', ')}`);
    return lines.join('\n');
}

// Refreshes the "your build" pills shown on top of the color preview
function updateDetailBuildSummary() {
    const summary = document.getElementById('detail-build-summary');
    if (!summary) return;
    const product = PRODUCTS_DATA.find(p => p.slug === currentSlug);
    const bodyHex = product && detailBuild.body
        ? (getProductBodyColors(product).find(c => c.name === detailBuild.body) || {}).hex
        : null;
    const pill = (label, value, hex) => value ? `
        <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 border border-brand-border shadow-sm text-[11px] text-slate-700">
            <span class="w-3 h-3 rounded-full border border-slate-300" style="background:${hex}"></span>
            <span class="text-slate-400">${label}</span> <span class="font-semibold">${value}</span>
        </span>` : '';
    summary.innerHTML = pill('Body', detailBuild.body, bodyHex)
        + pill('Seat', detailBuild.seat, TRIM_COLOR_HEX[detailBuild.seat])
        + pill('Canopy', detailBuild.canopy, TRIM_COLOR_HEX[detailBuild.canopy]);
    updateDetailPreview();
}

function hasLiveColorPreview(slug) {
    return typeof COLOR_PREVIEW !== 'undefined' && !!COLOR_PREVIEW[slug];
}

let detailPreviewToken = 0;
// Browsers block reading image pixels on pages opened as local files (file://), so the repaint only works
// when the site is served from a web address (GitHub Pages or a local server).
let livePreviewAvailable = location.protocol !== 'file:';

// Repaints the color preview photo for the current body / seat / canopy choices (see recolor.js)
function updateDetailPreview() {
    const product = PRODUCTS_DATA.find(p => p.slug === currentSlug);
    if (!product || !hasLiveColorPreview(product.slug) || !livePreviewAvailable) return;
    const body = getProductBodyColors(product).find(c => c.name === detailBuild.body);
    const token = ++detailPreviewToken;
    renderCartPreview(product.slug, {
        body: body ? body.hex : null,
        seat: detailBuild.seat ? TRIM_COLOR_HEX[detailBuild.seat] : null,
        canopy: detailBuild.canopy ? TRIM_COLOR_HEX[detailBuild.canopy] : null
    }).then(url => {
        // Ignore results from an older click that finished after a newer one
        if (!url || token !== detailPreviewToken) return;
        const img = document.getElementById('detail-color-img');
        if (img) img.src = url;
        const note = document.getElementById('detail-color-photo-note');
        if (note) {
            note.textContent = 'Color preview · final finish may vary';
            note.classList.remove('hidden');
        }
    }).catch(err => {
        // Preview can't be drawn here: stop trying and fall back to real color photos
        livePreviewAvailable = false;
        console.warn('Color preview unavailable; open the site from a web address to enable it.', err);
        const body = getProductBodyColors(product).find(c => c.name === detailBuild.body);
        const img = document.getElementById('detail-color-img');
        if (img) img.src = (body && body.image) || product.image;
    });
}

// Seat / canopy color buttons: same active-state behaviour as the body swatches
function selectDetailTrim(type, value) {
    detailBuild[type] = value;
    document.querySelectorAll(`.detail-trim[data-type="${type}"]`).forEach(btn => {
        const active = btn.dataset.value === value;
        btn.classList.toggle('detail-trim-active', active);
        btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
    const label = document.getElementById(`detail-${type}-name`);
    if (label) label.textContent = value;
    updateDetailBuildSummary();
}

const DETAIL_FEATURE_ICONS = ['sparkles', 'shield-check', 'zap', 'settings-2', 'armchair', 'sun'];

let detailTabObserver = null;

function isMeaningful(value) {
    return value && value !== 'N/A';
}

// Groups the flat product fields into BYD-style specification tables
function getDetailSpecGroups(product) {
    // Accessories reuse vehicle field names for unrelated data, so only their own spec table applies
    if (product.category === 'Accessories') {
        return [{ title: 'Specifications', rows: Object.entries(product.specs || {}) }];
    }
    const groups = [
        { title: 'Performance', rows: [['Range', product.range], ['Top Speed', product.speed], ['Powertrain', product.powertrain]] },
        { title: 'Battery & Charging', rows: [['Battery', product.battery], ['Charging Time', product.chargingTime]] },
        { title: 'Capacity', rows: [['Seating', product.seating]] },
        { title: 'Technical', rows: Object.entries(product.specs || {}) }
    ];
    return groups
        .map(g => ({ ...g, rows: g.rows.filter(([, v]) => isMeaningful(v)) }))
        .filter(g => g.rows.length);
}

function selectDetailColor(index) {
    const product = PRODUCTS_DATA.find(p => p.slug === currentSlug);
    if (!product) return;
    const color = getProductBodyColors(product)[index];
    if (!color) return;

    document.querySelectorAll('.detail-swatch').forEach((el, i) => el.classList.toggle('detail-swatch-active', i === index));
    const label = document.getElementById('detail-color-name');
    if (label) label.textContent = color.name;
    const quoteBtn = document.getElementById('detail-color-quote');
    if (quoteBtn) quoteBtn.dataset.color = color.name;
    // Show the real photo for this color when we have one. Carts with a live preview are then repainted by
    // updateDetailPreview(); if that can't run (e.g. the page was opened from a local file), this photo stays.
    if (!hasLiveColorPreview(product.slug) || !livePreviewAvailable) {
        const img = document.getElementById('detail-color-img');
        if (img) img.src = color.image || product.image;
        const note = document.getElementById('detail-color-photo-note');
        if (note) {
            note.textContent = 'Photo shows a standard finish';
            note.classList.toggle('hidden', !!color.image);
        }
    }
    detailBuild.body = color.name;
    updateDetailBuildSummary();
}

function requestQuoteInColor() {
    const product = PRODUCTS_DATA.find(p => p.slug === currentSlug);
    if (product) openQuoteModal(product.slug, getDetailBuildNote());
}

function scrollToDetailSection(id) {
    const target = document.getElementById(id);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Highlights the sticky tab for the section currently in view
function initDetailTabs() {
    if (detailTabObserver) detailTabObserver.disconnect();
    const sections = document.querySelectorAll('.detail-section');
    if (!sections.length || !('IntersectionObserver' in window)) return;

    detailTabObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            document.querySelectorAll('.detail-tab').forEach(tab => {
                tab.classList.toggle('detail-tab-active', tab.dataset.target === entry.target.id);
            });
        });
    }, { rootMargin: '-45% 0px -50% 0px' });

    sections.forEach(section => detailTabObserver.observe(section));
}

// --- BUILD SELECTOR (blueprint 03: choose build level, then battery and approved packages) ---

function renderBuildCompareTable(buildSet) {
    const rowsMax = Math.max(...buildSet.builds.map(b => b.includes.length));
    return `
        <div class="overflow-x-auto rounded-3xl border border-brand-border bg-white">
            <table class="w-full min-w-[560px] text-left text-sm">
                <thead>
                    <tr class="border-b border-brand-border">
                        ${buildSet.builds.map(b => `
                            <th class="p-5 align-top">
                                <p class="text-xl font-extrabold text-slate-900 tracking-tight">${b.name}</p>
                                <p class="text-xs font-medium text-brand-olive">${b.tagline}</p>
                            </th>`).join('')}
                    </tr>
                </thead>
                <tbody>
                    ${Array.from({ length: rowsMax }, (_, r) => `
                        <tr class="border-b border-brand-border/60 last:border-0">
                            ${buildSet.builds.map(b => `<td class="px-5 py-3 text-slate-700">${b.includes[r] ? `<span class="inline-flex items-start gap-2"><i data-lucide="check" class="w-4 h-4 text-brand-olive flex-shrink-0 mt-0.5"></i>${b.includes[r]}</span>` : ''}</td>`).join('')}
                        </tr>`).join('')}
                    <tr>
                        ${buildSet.builds.map(b => `<td class="px-5 pb-5 text-xs text-slate-500">${b.note || ''}</td>`).join('')}
                    </tr>
                </tbody>
            </table>
        </div>`;
}

function renderBuildSection(product, buildSet, packageKeys) {
    return `
        <!-- BUILD: three clear builds, then compatible packages underneath -->
        <section id="build" class="detail-section reveal scroll-mt-44 space-y-10">
            <div class="text-center space-y-3">
                <p class="text-brand-olive text-sm sm:text-base font-semibold">Build your ${product.name}</p>
                <h2 class="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tighter">${buildSet.title}</h2>
                ${buildSet.note ? `<p class="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto">${buildSet.note}</p>` : ''}
            </div>

            <div class="grid grid-cols-1 md:grid-cols-${buildSet.builds.length} gap-4 sm:gap-6" role="radiogroup" aria-label="Build level">
                ${buildSet.builds.map((b, i) => `
                    <button type="button" role="radio" aria-checked="${i === 0}" onclick="selectBuildLevel('${b.id}')" data-build="${b.id}" class="build-card ${i === 0 ? 'build-card-active' : ''} text-left rounded-3xl border-2 bg-white p-6 sm:p-7 flex flex-col gap-4 transition-all">
                        <div class="flex items-start justify-between gap-3">
                            <div>
                                <p class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">${product.name} ${b.name}</p>
                                <p class="text-sm font-semibold text-brand-olive mt-1">${b.tagline}</p>
                            </div>
                            <span class="build-card-check w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0"><i data-lucide="check" class="w-3.5 h-3.5"></i></span>
                        </div>
                        <ul class="space-y-1.5 text-sm text-slate-600">
                            ${b.includes.map(x => `<li class="flex gap-2"><i data-lucide="check" class="w-4 h-4 text-brand-olive flex-shrink-0 mt-0.5"></i>${x}</li>`).join('')}
                        </ul>
                        ${b.note ? `<p class="text-xs text-slate-500 mt-auto">${b.note}</p>` : ''}
                        ${b.proposed ? '<p class="text-[11px] font-semibold text-amber-700">Proposed package, confirmed in your quote</p>' : ''}
                    </button>
                `).join('')}
            </div>

            ${packageKeys.length ? `
                <div class="space-y-4">
                    <h3 class="text-2xl font-bold text-slate-900 tracking-tight">Add packages</h3>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${Math.min(packageKeys.length, 4)} gap-3">
                        ${packageKeys.map(key => {
                            const pkg = BUILD_PACKAGES[key];
                            if (pkg.choices) {
                                return `
                                    <div class="rounded-2xl border border-brand-border bg-white p-4 space-y-2">
                                        <p class="font-bold text-slate-900">${pkg.name}</p>
                                        <div class="flex flex-wrap gap-1.5" role="group" aria-label="${pkg.name}">
                                            ${pkg.choices.map((c, i) => `<button type="button" onclick="selectBuildRims('${c}')" data-rims="${c}" class="detail-trim ${i === 0 ? 'detail-trim-active' : ''}">${c}</button>`).join('')}
                                        </div>
                                        <p class="text-[11px] text-slate-500">${pkg.detail}</p>
                                    </div>`;
                            }
                            return `
                                <button type="button" onclick="toggleBuildPackage('${key}')" data-package="${key}" aria-pressed="false" class="build-package text-left rounded-2xl border border-brand-border bg-white p-4 space-y-1 transition-all">
                                    <span class="flex items-center justify-between gap-2">
                                        <span class="font-bold text-slate-900">${pkg.name}</span>
                                        <span class="build-package-toggle text-xs font-bold text-brand-oliveHover">+ Add</span>
                                    </span>
                                    <span class="block text-[11px] text-slate-500">${pkg.detail}</span>
                                </button>`;
                        }).join('')}
                    </div>
                    <p class="text-[11px] text-slate-400">Packages and upgrades are paid add-ons, available only for approved model and component combinations.</p>
                </div>
            ` : ''}

            <!-- Review: the build in the brief's configuration language -->
            <div class="rounded-3xl bg-slate-900 text-white p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-5">
                <div>
                    <p class="text-xs uppercase tracking-widest text-brand-olive font-semibold">Your build</p>
                    <p id="build-summary-line" class="text-2xl sm:text-3xl font-extrabold tracking-tight mt-1"></p>
                    <p class="text-slate-400 text-sm mt-1">Pick your colors below, then request a quote. Inclusions, pricing and availability are confirmed by our team.</p>
                </div>
                <div class="flex flex-wrap gap-3 flex-shrink-0">
                    <button onclick="requestQuoteInColor()" class="bg-brand-olive hover:bg-brand-oliveHover text-slate-900 font-bold px-6 py-3 rounded-full text-sm transition-all btn-shimmer">Request a Quote</button>
                    <button onclick="scrollToDetailSection('colors')" class="bg-white/10 hover:bg-white/20 border border-white/20 font-semibold px-6 py-3 rounded-full text-sm transition-all">Choose colors</button>
                </div>
            </div>
            ${buildSet.confirmed ? '' : '<p class="text-[11px] text-slate-400 text-center">Build names and package contents are proposed and may change.</p>'}
        </section>
    `;
}

// "Tempo 2 Scratch + Caddy Package + Lithium" (the brief's configuration language)
function getBuildSummaryText() {
    const product = PRODUCTS_DATA.find(p => p.slug === currentSlug);
    const buildSet = product && BUILD_SETS[product.buildSet];
    if (!buildSet) return '';
    const level = buildSet.builds.find(b => b.id === detailBuild.level) || buildSet.builds[0];
    const parts = [`${product.name} ${level.name}`];
    (detailBuild.packages || []).forEach(k => parts.push(BUILD_PACKAGES[k].name));
    if (detailBuild.rims && detailBuild.rims !== 'Standard') parts.push(`${detailBuild.rims} rims`);
    return parts.join(' + ');
}

function updateBuildSummaryLine() {
    const line = document.getElementById('build-summary-line');
    if (line) line.textContent = getBuildSummaryText();
}

function selectBuildLevel(id) {
    detailBuild.level = id;
    document.querySelectorAll('.build-card').forEach(card => {
        const active = card.dataset.build === id;
        card.classList.toggle('build-card-active', active);
        card.setAttribute('aria-checked', active ? 'true' : 'false');
    });
    updateBuildSummaryLine();
}

function toggleBuildPackage(key) {
    const list = detailBuild.packages || (detailBuild.packages = []);
    const i = list.indexOf(key);
    if (i >= 0) list.splice(i, 1); else list.push(key);
    const on = list.includes(key);
    const btn = document.querySelector(`.build-package[data-package="${key}"]`);
    if (btn) {
        btn.classList.toggle('build-package-active', on);
        btn.setAttribute('aria-pressed', on ? 'true' : 'false');
        const label = btn.querySelector('.build-package-toggle');
        if (label) label.textContent = on ? '✓ Added' : '+ Add';
    }
    updateBuildSummaryLine();
}

function selectBuildRims(choice) {
    detailBuild.rims = choice;
    document.querySelectorAll('[data-rims]').forEach(b => b.classList.toggle('detail-trim-active', b.dataset.rims === choice));
    updateBuildSummaryLine();
}

// Splits a spec like "100 km per charge" into a big number, a unit, and a small trailing note
// for the Apple-style stat strip. Values that don't start with a number are shown whole.
function splitStatValue(value) {
    const match = String(value).match(/^([\d.]+(?:\s*[–-]\s*[\d.]+)?)\s*([A-Za-z\/]+)?\s*(.*)$/);
    if (!match) return { number: value, unit: '', note: '' };
    return { number: match[1], unit: (match[2] || '').toLowerCase(), note: match[3] || '' };
}

function renderProductDetailsPage() {
    const product = PRODUCTS_DATA.find(p => p.slug === currentSlug) || PRODUCTS_DATA[0];
    const isVehicle = product.category !== 'Accessories';
    const safeName = product.slug; // quote buttons pass the slug (names repeat across pillars)
    const colorFamily = COLOR_FAMILIES[product.colorFamily];
    const bodyColors = getProductBodyColors(product);
    // Start on a color we have a photo for, so the preview matches the selected swatch
    const startColorIdx = Math.max(0, bodyColors.findIndex(c => c.image));
    const startColor = bodyColors[startColorIdx];
    const seatGroups = (colorFamily && colorFamily.seatGroups) || [];
    const seatOptions = seatGroups.flatMap(g => g.options);
    const canopyOptions = CANOPY_OPTIONS[product.canopyKey] || [];
    // Seat and canopy start as "Standard" (as photographed) until the visitor picks a color
    const buildSet = BUILD_SETS[product.buildSet];
    const packageKeys = product.packages || [];
    detailBuild = {
        body: startColor ? startColor.name : null, seat: null, canopy: null,
        level: buildSet ? buildSet.builds[0].id : null, packages: [], rims: null
    };
    setTimeout(updateDetailBuildSummary, 0);
    setTimeout(updateBuildSummaryLine, 0);
    const specGroups = getDetailSpecGroups(product);
    const related = PRODUCTS_DATA.filter(p => p.category === product.category && p.slug !== product.slug).slice(0, 3);
    const accessoryCount = getCompatibleAccessoryGroups(product.slug).reduce((n, g) => n + g.items.length, 0);

    // Big-number strip: the four figures buyers compare first
    const stats = [
        { label: 'Seating', value: product.seating },
        { label: 'Range', value: product.range },
        { label: 'Top speed', value: product.speed },
        { label: 'Charging time', value: product.chargingTime }
    ].filter(s => isVehicle && isMeaningful(s.value)).map(s => ({ ...s, ...splitStatValue(s.value) }));

    const tabs = [
        { id: 'overview', label: 'Overview' },
        ...(buildSet ? [{ id: 'build', label: 'Build' }] : []),
        ...(isVehicle ? [{ id: 'colors', label: 'Colors' }] : []),
        { id: 'features', label: 'Highlights' },
        { id: 'specifications', label: 'Tech Specs' }
    ];

    setTimeout(initDetailTabs, 50);

    return `
    <div class="pb-8">
        <!-- LOCAL NAV: product name, section links, quote button (Apple-style sticky bar) -->
        <nav class="sticky top-[63px] sm:top-[65px] z-30 border-b border-brand-border bg-white/85 backdrop-blur-xl">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
                <span class="hidden sm:block text-lg font-bold text-slate-900 tracking-tight whitespace-nowrap">${product.name}</span>
                <div class="flex items-center gap-1 sm:gap-3 overflow-x-auto scrollbar-none">
                    ${tabs.map((t, i) => `
                        <button onclick="scrollToDetailSection('${t.id}')" data-target="${t.id}" class="detail-tab ${i === 0 ? 'detail-tab-active' : ''}">${t.label}</button>
                    `).join('')}
                    <button onclick="openQuoteModal('${safeName}')" class="ml-1 flex-shrink-0 bg-brand-olive hover:bg-brand-oliveHover text-slate-900 font-bold px-4 py-1.5 rounded-full text-xs transition-all">Request a Quote</button>
                </div>
            </div>
        </nav>

        <!-- HERO: oversized name, one-line tagline, two actions, and a large product photo -->
        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 text-center">
            <div class="text-left">
                <button onclick="navigateTo('products')" class="inline-flex items-center gap-1 text-brand-slate hover:text-slate-900 text-xs sm:text-sm font-medium transition-colors">
                    <i data-lucide="chevron-left" class="w-4 h-4"></i> All vehicles
                </button>
            </div>
            <div class="detail-hero-copy space-y-3 sm:space-y-4 pt-6 sm:pt-10">
                <p class="text-brand-olive text-sm sm:text-base font-semibold">${categoryLabel(product.category)}</p>
                <h1 class="text-5xl sm:text-7xl lg:text-8xl font-extrabold text-slate-900 tracking-tighter leading-[0.95]">${product.name}</h1>
                <p class="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-500 tracking-tight">${product.tagline}</p>
                <p class="text-sm text-slate-500">${product.priceLabel || 'Inquire for Price'}</p>
                ${product.heroProduct ? '<p class="inline-block px-3 py-1 rounded-full bg-brand-olive/15 text-brand-oliveHover text-xs font-bold">Our bestseller</p>' : ''}
                <div class="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-3">
                    ${buildSet ? `
                        <button onclick="scrollToDetailSection('build')" class="bg-brand-olive hover:bg-brand-oliveHover text-slate-900 font-bold px-7 py-3 rounded-full text-sm sm:text-base shadow-lg transition-all btn-shimmer">Build Your Cart</button>
                        <button onclick="openQuoteModal('${safeName}')" class="inline-flex items-center gap-1 text-brand-oliveHover hover:text-slate-900 font-semibold text-sm sm:text-base transition-colors">
                            Request a Quote <i data-lucide="chevron-right" class="w-4 h-4"></i>
                        </button>
                    ` : `
                        <button onclick="openQuoteModal('${safeName}')" class="bg-brand-olive hover:bg-brand-oliveHover text-slate-900 font-bold px-7 py-3 rounded-full text-sm sm:text-base shadow-lg transition-all btn-shimmer">Request a Quote</button>
                        <button onclick="scrollToDetailSection('overview')" class="inline-flex items-center gap-1 text-brand-oliveHover hover:text-slate-900 font-semibold text-sm sm:text-base transition-colors">
                            Learn more <i data-lucide="chevron-right" class="w-4 h-4"></i>
                        </button>
                    `}
                </div>
            </div>

            <div class="relative mt-6 sm:mt-10 h-[320px] sm:h-[520px] lg:h-[620px] flex items-center justify-center overflow-hidden">
                <div class="absolute inset-0 hero-cart-glow pointer-events-none"></div>
                <img id="detail-main-img" src="${product.image}" alt="${product.name}" class="detail-hero-img relative h-[120%] w-auto max-w-[120%] object-contain pointer-events-none drop-shadow-[0_35px_35px_rgba(0,0,0,0.18)]">
            </div>
            ${product.gallery.length > 1 ? `
                <div class="flex items-center justify-center gap-3 pt-2">
                    ${product.gallery.map(img => `
                        <button onclick="document.getElementById('detail-main-img').src='${img}'" aria-label="Show another view" class="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl border-2 border-brand-border hover:border-brand-olive transition-all bg-white p-1.5 flex items-center justify-center">
                            <img src="${img}" alt="" class="max-h-full object-contain">
                        </button>
                    `).join('')}
                </div>
            ` : ''}
        </section>

        ${stats.length ? `
        <!-- STAT STRIP: big numbers, small labels -->
        <section class="reveal mt-16 sm:mt-24 border-y border-brand-border bg-brand-card/60">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 grid grid-cols-2 lg:grid-cols-${stats.length} gap-y-10 gap-x-6">
                ${stats.map(s => `
                    <div class="text-center space-y-1">
                        <p class="text-xs sm:text-sm text-slate-500 font-medium">${s.label}</p>
                        <p class="text-slate-900 font-extrabold tracking-tight leading-none">
                            <span class="text-5xl sm:text-6xl lg:text-7xl">${s.number}</span>${s.unit ? `<span class="text-xl sm:text-2xl lg:text-3xl ml-1">${s.unit}</span>` : ''}
                        </p>
                        ${s.note ? `<p class="text-xs sm:text-sm text-slate-500">${s.note}</p>` : ''}
                    </div>
                `).join('')}
            </div>
        </section>
        ` : ''}

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28 sm:space-y-40 pt-24 sm:pt-32">
            <!-- OVERVIEW: one large statement, Apple-style gray text with the name in black -->
            <section id="overview" class="detail-section reveal scroll-mt-44 max-w-4xl mx-auto text-center space-y-10">
                <p class="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-slate-400">
                    <span class="text-slate-900">${product.name}.</span> ${product.description}
                </p>
                ${isVehicle ? `
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 pt-2 text-left sm:text-center">
                        ${[
                            { label: 'Powertrain', value: product.powertrain },
                            { label: 'Battery', value: product.battery }
                        ].filter(h => isMeaningful(h.value)).map(h => `
                            <div class="border-t border-brand-border pt-5">
                                <p class="text-xs uppercase tracking-widest text-brand-olive font-semibold">${h.label}</p>
                                <p class="text-lg sm:text-xl font-semibold text-slate-900 mt-1">${h.value}</p>
                            </div>
                        `).join('')}
                    </div>
                ` : `
                    <div class="h-64 sm:h-96 flex items-center justify-center">
                        <img src="${product.gallery[1] || product.image}" alt="${product.name}" class="max-h-full max-w-full object-contain rounded-3xl">
                    </div>
                `}
            </section>

            ${buildSet ? renderBuildSection(product, buildSet, packageKeys) : ''}

            ${isVehicle ? `
            <!-- COLORS: preview on the left stays pinned while the pickers on the right scroll past it -->
            <section id="colors" class="detail-section reveal scroll-mt-44 space-y-8 sm:space-y-10">
                <h2 class="text-center text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tighter">${bodyColors.length ? 'Pick your colors.' : 'Make it yours.'}</h2>

                <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                <div class="lg:col-span-7 lg:sticky lg:top-[140px]">
                <div class="relative rounded-[2rem] bg-brand-card border border-brand-border px-4 sm:px-8 pt-14 sm:pt-16 pb-8">
                    <!-- Live summary of the selected body / seat / canopy colors -->
                    <div id="detail-build-summary" class="absolute top-4 left-1/2 -translate-x-1/2 flex flex-wrap justify-center gap-1.5 w-[calc(100%-2rem)]"></div>
                    <div class="relative h-72 sm:h-[420px] lg:h-[480px] flex items-center justify-center">
                        <img id="detail-color-img" src="${startColor && startColor.image ? startColor.image : product.image}" alt="${product.name} color preview" class="w-full h-full object-contain drop-shadow-[0_25px_30px_rgba(0,0,0,0.18)]">
                        <span id="detail-color-photo-note" class="${startColor && !startColor.image ? '' : 'hidden'} absolute bottom-0 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-white/90 border border-brand-border text-[11px] text-slate-500 whitespace-nowrap">Photo shows a standard finish</span>
                    </div>
                </div>
                </div>

                <div class="lg:col-span-5 space-y-10">
                    <div class="space-y-5">
                        ${bodyColors.length ? `
                            <p class="text-lg font-bold text-slate-900">Body color: <span id="detail-color-name" class="font-semibold text-slate-600">${startColor.name}</span></p>
                            ${(() => {
                                let idx = 0;
                                return colorFamily.body.map(group => `
                                    <div class="space-y-2">
                                        <p class="text-[11px] font-bold uppercase tracking-wider text-brand-slate">${group.tier}</p>
                                        <div class="flex flex-wrap gap-2.5">
                                            ${group.colors.map(c => {
                                                const i = idx++;
                                                return `<button onclick="selectDetailColor(${i})" title="${c.name}" aria-label="${c.name}" class="detail-swatch ${i === startColorIdx ? 'detail-swatch-active' : ''}" style="background:${c.hex}"></button>`;
                                            }).join('')}
                                        </div>
                                    </div>
                                `).join('');
                            })()}
                            <p class="text-[11px] text-slate-400">Swatches are approximate screen colors. Our team will confirm the final finish.</p>
                        ` : `
                            <p class="text-lg font-bold text-slate-900">Body color</p>
                            <p class="text-slate-600 text-sm leading-relaxed">Available body colors for the ${product.name} are confirmed per order. Request a quote and our team will send the current options.</p>
                        `}
                    </div>

                    <div class="space-y-6">
                        ${[
                            { type: 'seat', title: 'Seat color', groups: seatGroups },
                            { type: 'canopy', title: 'Canopy color', groups: canopyOptions.length ? [{ tier: null, options: canopyOptions }] : [] }
                        ].filter(t => t.groups.length).map(t => `
                            <div class="space-y-3">
                                <p class="text-lg font-bold text-slate-900">${t.title}: <span id="detail-${t.type}-name" class="font-semibold text-slate-600">Standard</span></p>
                                ${t.groups.map(group => `
                                    <div class="space-y-2">
                                        ${group.tier && t.groups.length > 1 ? `<p class="text-[11px] font-bold uppercase tracking-wider text-brand-slate">${group.tier}</p>` : ''}
                                        <div class="flex flex-wrap gap-2" role="group" aria-label="${group.tier || t.title}">
                                            ${group.options.map(opt => `
                                                <button type="button" onclick="selectDetailTrim('${t.type}', '${opt}')" data-type="${t.type}" data-value="${opt}" aria-pressed="false" class="detail-trim">
                                                    <span class="detail-trim-dot" style="background:${TRIM_COLOR_HEX[opt] || '#CBD5E1'}"></span>${opt}
                                                </button>
                                            `).join('')}
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        `).join('')}

                        ${seatOptions.length || canopyOptions.length ? `
                            <div class="flex gap-2.5 p-3 rounded-xl bg-brand-card border border-brand-olive/30 text-xs text-slate-600 leading-relaxed">
                                <i data-lucide="info" class="w-4 h-4 text-brand-olive flex-shrink-0 mt-0.5"></i>
                                <p><span class="font-semibold text-slate-800">Note:</span> Custom seat and canopy color combinations may vary by model. Select your preferred color options for custom quotation.</p>
                            </div>
                        ` : ''}

                        <div class="flex flex-wrap gap-3 pt-1">
                            <button id="detail-color-quote" onclick="requestQuoteInColor()" class="inline-flex items-center gap-2 bg-brand-olive hover:bg-brand-oliveHover text-slate-900 font-bold px-6 py-3 rounded-full shadow-lg text-sm transition-all btn-shimmer">
                                <i data-lucide="${bodyColors.length ? 'palette' : 'file-text'}" class="w-4 h-4"></i>
                                <span>${bodyColors.length || canopyOptions.length ? 'Request a Quote with These Colors' : 'Request a Quote'}</span>
                            </button>
                            ${accessoryCount ? `
                                <button onclick="addAccessoriesFromDetail()" class="inline-flex items-center gap-2 bg-white hover:bg-brand-olive/10 border-2 border-dashed border-brand-olive/50 hover:border-brand-olive text-brand-oliveHover font-bold px-5 py-3 rounded-full text-sm transition-all">
                                    <i data-lucide="plus-circle" class="w-4 h-4"></i>
                                    <span>Add Accessories</span>
                                    <span class="text-xs font-semibold text-slate-500">(${accessoryCount} paid add-ons)</span>
                                </button>
                            ` : ''}
                        </div>
                    </div>
                </div>
                </div>
            </section>
            ` : ''}

            <!-- HIGHLIGHTS: large text callouts, no boxes -->
            <section id="features" class="detail-section reveal scroll-mt-44 space-y-10 sm:space-y-14">
                <h2 class="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tighter">Highlights.</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                    ${product.features.map((f, i) => `
                        <div class="border-t border-brand-border pt-6 flex gap-5">
                            <span class="text-brand-olive font-bold text-sm pt-1.5">0${i + 1}</span>
                            <div class="flex items-start gap-3">
                                <i data-lucide="${DETAIL_FEATURE_ICONS[i % DETAIL_FEATURE_ICONS.length]}" class="w-6 h-6 text-slate-400 flex-shrink-0 mt-1"></i>
                                <h3 class="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-snug">${f}</h3>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </section>

            <!-- TECH SPECS: every group visible, label / value rows -->
            <section id="specifications" class="detail-section reveal scroll-mt-44 space-y-10 sm:space-y-14">
                <h2 class="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tighter">Tech Specs.</h2>
                <div class="divide-y divide-brand-border border-y border-brand-border">
                    ${specGroups.map(g => `
                        <div class="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8">
                            <h3 class="md:col-span-3 text-lg font-bold text-slate-900">${g.title}</h3>
                            <dl class="md:col-span-9 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5">
                                ${g.rows.map(([k, v]) => `
                                    <div>
                                        <dt class="text-xs text-slate-500">${k}</dt>
                                        <dd class="text-base sm:text-lg font-semibold text-slate-900 mt-0.5">${v}</dd>
                                    </div>
                                `).join('')}
                            </dl>
                        </div>
                    `).join('')}
                </div>
                <p class="text-[11px] text-slate-400">Specifications may change without prior notice. Actual range varies with load, terrain, and driving habits.</p>
            </section>

            <!-- CLOSING CTA -->
            <section class="reveal rounded-[2rem] bg-brand-card border border-brand-border px-6 py-16 sm:py-24 text-center space-y-5">
                <h2 class="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tighter">Make it yours.</h2>
                <p class="text-slate-500 text-base sm:text-xl max-w-xl mx-auto">Get pricing, availability, and customization options for the ${product.name}.</p>
                <div class="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-3">
                    <button onclick="openQuoteModal('${safeName}')" class="bg-brand-olive hover:bg-brand-oliveHover text-slate-900 font-bold px-7 py-3 rounded-full text-sm sm:text-base shadow-lg transition-all btn-shimmer">Request a Quote</button>
                    <button onclick="goToHomeSection('home-branches')" class="inline-flex items-center gap-1 text-brand-oliveHover hover:text-slate-900 font-semibold text-sm sm:text-base transition-colors">
                        Find a branch <i data-lucide="chevron-right" class="w-4 h-4"></i>
                    </button>
                </div>
            </section>

            ${related.length ? `
            <!-- RELATED -->
            <section class="space-y-10">
                <div class="flex items-end justify-between gap-4">
                    <h2 class="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tighter">Explore more ${categoryLabel(product.category)}.</h2>
                    <button onclick="setCategoryAndNavigate('${product.category}')" class="inline-flex items-center gap-1 text-brand-oliveHover hover:text-slate-900 font-semibold text-sm whitespace-nowrap">View all <i data-lucide="chevron-right" class="w-4 h-4"></i></button>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    ${related.map(p => renderProductCardHTML(p)).join('')}
                </div>
            </section>
            ` : ''}
        </div>
    </div>
    `;
}

function renderSegmentModelCard(segmentId, subId, modelKey) {
    const model = VEHICLE_MODELS[modelKey];
    const product = model.slug ? PRODUCTS_DATA.find(p => p.slug === model.slug) : null;
    const quoteRef = (product ? product.slug : model.name).replace(/'/g, "\\'");
    const isReman = segmentId === 'remanufactured';

    return `
        <div id="${modelAnchorId(segmentId, subId, modelKey)}" class="container-light-beam group relative rounded-2xl bg-brand-card border border-brand-border p-4 sm:p-5 flex flex-col">
            ${model.badge ? `<span class="absolute top-4 left-4 z-20 px-2.5 py-1 rounded-full bg-brand-olive text-slate-900 text-[10px] font-bold uppercase tracking-wider">${model.badge}</span>` : ''}
            <div class="h-52 sm:h-60 rounded-xl bg-white flex items-center justify-center overflow-hidden">
                ${model.image
                    ? `<img src="${model.image}" alt="${model.name}" loading="lazy" class="product-card-img cart-img-fill">`
                    : `<div class="flex flex-col items-center gap-2 text-slate-400"><i data-lucide="image" class="w-8 h-8"></i><span class="text-[11px] font-medium">Photo coming soon</span></div>`}
            </div>
            <h4 class="mt-4 text-base sm:text-lg font-bold text-slate-900 tracking-tight group-hover:text-brand-olive transition-colors">${model.name}</h4>
            ${product ? `<p class="text-xs text-slate-500 mt-1 line-clamp-2">${product.tagline}</p>` : ''}
            ${product && product.buildSet ? `<p class="text-[11px] font-semibold text-brand-oliveHover mt-1">${BUILD_SETS[product.buildSet].builds.map(b => b.name).join(' · ')}</p>` : ''}
            ${isReman ? '<p class="text-[11px] text-slate-500 mt-1">Ask for current units, rebuild scope and warranty.</p>' : ''}
            <div class="mt-auto pt-4 grid ${product ? 'grid-cols-2' : 'grid-cols-1'} gap-2 relative z-30">
                ${product ? `<button onclick="navigateTo('product-details', '${product.slug}')" class="py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-semibold transition-colors">${product.buildSet ? 'Build & Price' : 'View Details'}</button>` : ''}
                <button onclick="openQuoteModal('${quoteRef}')" class="py-2 px-3 rounded-xl bg-brand-olive hover:bg-brand-oliveHover text-slate-900 text-xs font-bold transition-colors btn-shimmer">${isReman ? 'Check Availability' : 'Request a Quote'}</button>
            </div>
        </div>
    `;
}

// Business enquiry prompt (Guest Transportation, Fit-to-Task): leads to the fleet proposal form
function renderEnquiryPrompt(text) {
    return `
        <div class="rounded-3xl bg-slate-900 text-white p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-5">
            <p class="text-lg sm:text-xl font-bold tracking-tight max-w-2xl">${text}</p>
            <button onclick="navigateTo('solutions')" class="flex-shrink-0 bg-brand-olive hover:bg-brand-oliveHover text-slate-900 font-bold px-6 py-3 rounded-full text-sm transition-all btn-shimmer">Request a Fleet Proposal</button>
        </div>`;
}

function renderSegmentPage() {
    const segment = NAV_SEGMENTS.find(s => s.id === currentSlug) || NAV_SEGMENTS[0];
    const buildSet = BUILD_SETS[segment.buildSet];

    return `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16 sm:space-y-20">
        <!-- Pillar header -->
        <section class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl bg-gradient-to-r from-brand-card via-white to-white border border-brand-border p-6 sm:p-10 overflow-hidden">
            <div class="lg:col-span-7 space-y-4">
                <span class="text-brand-olive text-sm sm:text-base font-semibold">${segment.label}</span>
                <h1 class="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tighter leading-[1.05]">${segment.tagline}</h1>
                <p class="text-slate-500 text-base sm:text-lg leading-relaxed max-w-xl">${segment.description}</p>
                <div class="flex flex-wrap gap-2 pt-2">
                    ${segment.subcategories.length > 1 ? segment.subcategories.map(sub => `
                        <button onclick="openSegment('${segment.id}', '${segment.id}-${sub.id}')" class="px-4 py-2 rounded-full bg-white border border-brand-border hover:border-brand-olive text-slate-700 text-xs font-semibold transition-colors">${sub.label}</button>
                    `).join('') : ''}
                    ${(segment.links || []).map(l => `
                        <button onclick="openSegment('${segment.id}', '${segment.id}-${l.anchor}')" class="px-4 py-2 rounded-full bg-white border border-brand-border hover:border-brand-olive text-slate-700 text-xs font-semibold transition-colors">${l.label}</button>
                    `).join('')}
                </div>
            </div>
            <div class="lg:col-span-5 h-56 sm:h-72 flex items-center justify-center">
                <img src="${segment.image}" alt="${segment.label}" class="product-card-img max-h-full object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.18)]">
            </div>
        </section>

        <!-- Subcategories -->
        ${segment.subcategories.map(sub => `
            <section id="${segment.id}-${sub.id}" class="space-y-8 scroll-mt-40">
                <div class="space-y-2">
                    <div class="flex items-center gap-4">
                        <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">${sub.label}</h2>
                        <div class="flex-1 h-px bg-brand-border"></div>
                    </div>
                    ${sub.intro ? `<p class="text-slate-500 text-base">${sub.intro}</p>` : ''}
                </div>
                ${sub.groups.map(group => `
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${Math.min(4, Math.max(3, group.items.length))} gap-4 sm:gap-6">
                        ${group.items.map(key => renderSegmentModelCard(segment.id, sub.id, key)).join('')}
                    </div>
                `).join('')}
                ${sub.enquiry ? renderEnquiryPrompt(sub.enquiry) : ''}
            </section>
        `).join('')}

        ${buildSet ? `
            <!-- Compare builds -->
            <section id="${segment.id}-compare" class="space-y-6 scroll-mt-40">
                <div class="space-y-2">
                    <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Compare ${buildSet.builds.map(b => b.name).join(' / ')}</h2>
                    <p class="text-slate-500 text-base">${segment.id === 'golfer'
                        ? 'Golfer → Scratch → Pro applies across Tempo 2, Tempo 2+2 and Tempo 4. Shown here for Tempo 2 and Tempo 4; Tempo 2+2 builds are on its page.'
                        : 'Shown for every lifestyle model. Exact inclusions per model are confirmed in your quote.'}</p>
                </div>
                ${renderBuildCompareTable(buildSet)}
                ${buildSet.confirmed ? '' : '<p class="text-[11px] text-slate-400">Build names and package contents are proposed and may change.</p>'}
            </section>
        ` : ''}

        ${segment.id === 'lifestyle' ? `
            <!-- Lifted packages -->
            <section id="lifestyle-lifted" class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl bg-brand-card border border-brand-border p-6 sm:p-10 scroll-mt-40">
                <div class="lg:col-span-6 space-y-4">
                    <span class="text-brand-olive text-sm font-semibold">Lifted Package</span>
                    <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Ready for rougher ground.</h2>
                    <p class="text-slate-600 text-base leading-relaxed">A lift kit with optional bull bar, nerf bars / side steps and larger wheel choices (10-, 12- or 14-inch rims), with tires selected for the surface you drive on.</p>
                    <p class="text-xs text-slate-500">Available only for approved model and component combinations. Private-use configurations do not imply approval for public-road use.</p>
                    <button onclick="navigateTo('product-details', 'lifestyle-tempo-2-2')" class="bg-brand-olive hover:bg-brand-oliveHover text-slate-900 font-bold px-6 py-3 rounded-full text-sm transition-all btn-shimmer">Build a lifted Tempo 2+2</button>
                </div>
                <div class="lg:col-span-6 h-64 sm:h-80 flex items-center justify-center">
                    <img src="image/Products/Tempo 2+2 - Lifted.png" alt="Tempo 2+2 with Lifted Package" class="max-h-full object-contain drop-shadow-[0_20px_25px_rgba(0,0,0,0.18)]">
                </div>
            </section>
        ` : ''}
    </div>
    `;
}

// FLEET SOLUTIONS: separate enquiry route for golf-course and commercial buyers (blueprint 07)
function handleFleetProposalSubmit(e) {
    e.preventDefault();
    e.target.reset();
    showToast('Thanks! Our fleet team will contact you to prepare your proposal.');
}

function renderSolutionsPage() {
    const services = [
        { icon: 'clipboard-list', title: 'Fleet selection', text: 'Choose models and quantities around your utilization, routes and operating hours.' },
        { icon: 'wrench', title: 'Service planning', text: 'Preventive maintenance, parts and charging plans to keep the fleet running.' },
        { icon: 'refresh-cw', title: 'Replacement planning', text: 'Plan fleet renewals and trade-ins before downtime affects your operation.' }
    ];
    const input = 'w-full bg-white border border-brand-border rounded-xl p-3 text-slate-900 focus:outline-none focus:border-brand-olive';

    return `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16 sm:space-y-20">
        <div class="text-center max-w-3xl mx-auto space-y-4 reveal">
            <span class="text-brand-olive text-sm sm:text-base font-semibold">Fleet Solutions</span>
            <h1 class="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tighter leading-[1.05]">Fleets for golf courses and commercial operations.</h1>
            <p class="text-slate-500 text-lg sm:text-xl leading-relaxed">Tell us about your operation and we'll recommend the right vehicles, service plan and replacement schedule.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 reveal">
            ${services.map(s => `
                <div class="rounded-3xl bg-brand-card border border-brand-border p-6 sm:p-8 space-y-3">
                    <div class="p-3 rounded-2xl bg-brand-olive/10 text-brand-olive w-fit"><i data-lucide="${s.icon}" class="w-6 h-6"></i></div>
                    <h2 class="text-2xl font-bold text-slate-900 tracking-tight">${s.title}</h2>
                    <p class="text-slate-600 leading-relaxed">${s.text}</p>
                </div>
            `).join('')}
        </div>

        <section id="fleet-proposal" class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start reveal scroll-mt-28">
            <div class="lg:col-span-5 space-y-4">
                <h2 class="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tighter leading-[1.05]">Request a Fleet Proposal.</h2>
                <p class="text-slate-500 text-lg leading-relaxed">Share your unit quantities, utilization and service needs. Our team will prepare a proposal for your property.</p>
                <p class="text-xs text-slate-400">Financing or payment options are presented only when approved.</p>
            </div>
            <form onsubmit="handleFleetProposalSubmit(event)" class="lg:col-span-7 rounded-3xl bg-white border border-brand-border p-6 sm:p-8 shadow-xl grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div><label class="block font-medium text-slate-600 mb-1">Company / Property *</label><input required type="text" placeholder="Company or property name" class="${input}"></div>
                <div><label class="block font-medium text-slate-600 mb-1">Contact Person *</label><input required type="text" placeholder="Full name and position" class="${input}"></div>
                <div><label class="block font-medium text-slate-600 mb-1">Email Address *</label><input required type="email" placeholder="name@company.com" class="${input}"></div>
                <div><label class="block font-medium text-slate-600 mb-1">Mobile Number *</label><input required type="tel" placeholder="+63 900 000 0000" class="${input}"></div>
                <div><label class="block font-medium text-slate-600 mb-1">Operation Type *</label>
                    <select required class="${input}">
                        <option value="">Select one</option>
                        <option>Golf course</option>
                        <option>Resort / hotel</option>
                        <option>Commercial / industrial property</option>
                        <option>Township / estate</option>
                        <option>Other</option>
                    </select>
                </div>
                <div><label class="block font-medium text-slate-600 mb-1">Estimated Units</label><input type="number" min="1" placeholder="e.g. 20" class="${input}"></div>
                <div class="sm:col-span-2"><label class="block font-medium text-slate-600 mb-1">I need help with</label>
                    <div class="flex flex-wrap gap-2 pt-1">
                        ${['Fleet selection', 'Service planning', 'Replacement planning', 'Fit-to-task builds'].map(o => `<label class="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-brand-border text-slate-700 cursor-pointer"><input type="checkbox" class="accent-[#749E35]"> ${o}</label>`).join('')}
                    </div>
                </div>
                <div class="sm:col-span-2"><label class="block font-medium text-slate-600 mb-1">Passenger demand, routes, terrain and operating hours</label><textarea rows="3" placeholder="Tell us how the fleet will be used" class="${input}"></textarea></div>
                <button type="submit" class="sm:col-span-2 w-full bg-brand-olive hover:bg-brand-oliveHover text-slate-900 font-bold py-3.5 rounded-xl transition-all shadow-lg text-sm btn-shimmer">Request a Fleet Proposal</button>
            </form>
        </section>
    </div>
    `;
}

function renderServicePage() {
    const pmItems = [
        {
            num: "01",
            title: "Performance Check",
            desc: "Assessing the vehicle's overall functioning, including engine power, responsiveness, and efficiency.",
            icon: "image/Icons/engineering.png"
        },
        {
            num: "02",
            title: "Brake Check",
            desc: "Inspection of brake components to ensure proper operation and responsiveness for safe stopping.",
            icon: "image/Icons/brake.png"
        },
        {
            num: "03",
            title: "Suspension Check",
            desc: "Evaluating the system that supports the vehicle, including shocks and struts, for stability and smoothness.",
            icon: "image/Icons/suspension.png"
        },
        {
            num: "04",
            title: "Battery Check",
            desc: "Verifying charge, terminal connections, and overall condition for electrical reliability.",
            icon: "image/Icons/car-battery.png"
        },
        {
            num: "05",
            title: "Wheel Alignment Check",
            desc: "Adjusting wheel angles to ensure parallel tracking and prevent uneven tire wear.",
            icon: "image/Icons/car-suspension.png"
        },
        {
            num: "06",
            title: "Tires & Wheel Check",
            desc: "Inspection of tire condition, tread depth, and rim integrity for optimal safety.",
            icon: "image/Icons/car-wheel (1).png"
        },
        {
            num: "07",
            title: "Lubrication Service",
            desc: "Applying specialized lubricants to drive components to minimize friction and wear.",
            icon: "image/Icons/engine-oil.png"
        }
    ];

    return `
    <!-- Header banner (full width, slides under the fixed header like the homepage hero) -->
    <section class="relative sm:-mt-[65px] bg-slate-900 overflow-hidden">
        <img src="image/Hero/hero-3.webp" alt="Golfcarts.ph service technician working on a Club Car" fetchpriority="high" class="w-full aspect-[16/9] max-h-[78vh] object-cover">
        <div class="hidden sm:block absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/45 to-transparent pointer-events-none"></div>
    </section>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-8 sm:pb-12 space-y-14 sm:space-y-20">
        <div class="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 reveal">
            <span class="text-brand-olive text-xs font-semibold uppercase tracking-widest">After-Sales Excellence</span>
            <h1 class="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">Service &amp; Support</h1>
            <p class="text-slate-500 text-xs sm:text-base leading-relaxed">
                We provide mobile technician dispatch, original factory spare parts, and remote telemetry battery health monitoring.
            </p>
            <div class="flex flex-wrap justify-center gap-3 pt-2">
                <button onclick="document.getElementById('service-request').scrollIntoView({ behavior: 'smooth' })" class="inline-flex items-center gap-2 bg-brand-olive hover:bg-brand-oliveHover text-slate-900 font-bold px-6 py-3 rounded-xl shadow-lg text-sm transition-all btn-shimmer">
                    <i data-lucide="wrench" class="w-4 h-4"></i> Book Service
                </button>
                <button onclick="goToHomeSection('home-branches')" class="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-900 font-semibold px-6 py-3 rounded-xl border border-brand-border text-sm transition-all">
                    <i data-lucide="map-pin" class="w-4 h-4"></i> Find a Branch
                </button>
            </div>
        </div>

        <div class="space-y-8 sm:space-y-10">
            <div class="text-center max-w-2xl mx-auto space-y-2">
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-olive/10 border border-brand-olive/30 text-brand-olive text-xs font-bold uppercase tracking-wider">
                    <i data-lucide="shield-check" class="w-4 h-4"></i>
                    <span>7-Point Quality Guarantee</span>
                </div>
                <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900">Comprehensive Preventive Maintenance</h2>
                <p class="text-slate-500 text-xs sm:text-sm">Our rigorous inspection routine engineered to maximize fleet uptime and longevity.</p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                ${pmItems.map((item, idx) => `
                    <div class="container-light-beam group relative rounded-2xl bg-brand-card border border-brand-border p-6 transition-all duration-300 hover:border-brand-olive/60 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-brand-olive/10 flex flex-col justify-between overflow-hidden ${
                        idx === 6 ? 'sm:col-span-2 lg:col-span-2' : ''
                    }">
                        <span class="absolute top-3 right-4 text-3xl font-black text-slate-300/40 group-hover:text-brand-olive/20 transition-colors pointer-events-none">
                            ${item.num}
                        </span>

                        <div class="space-y-4 z-10 relative">
                            <div class="w-14 h-14 rounded-2xl bg-brand-olive/10 border border-brand-olive/25 group-hover:bg-brand-olive/20 group-hover:border-brand-olive/50 flex items-center justify-center p-3 transition-all duration-300">
                                <img src="${item.icon}" alt="" class="w-full h-full object-contain opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all">
                            </div>

                            <div class="space-y-1.5">
                                <h4 class="font-bold text-slate-900 text-base sm:text-lg group-hover:text-brand-olive transition-colors">
                                    ${item.title}
                                </h4>
                                <p class="text-slate-500 text-xs leading-relaxed">
                                    ${item.desc}
                                </p>
                            </div>
                        </div>

                        <div class="mt-6 w-full h-0.5 bg-slate-100 group-hover:bg-gradient-to-r group-hover:from-brand-olive group-hover:to-transparent transition-all"></div>
                    </div>
                `).join('')}
            </div>
        </div>

        <div id="service-request" class="container-light-beam p-6 sm:p-12 rounded-3xl bg-brand-card border border-brand-border max-w-3xl mx-auto shadow-2xl scroll-mt-28">
            <h3 class="text-xl sm:text-2xl font-bold text-slate-900 mb-6 text-center z-10 relative">Book Service</h3>
            <form onsubmit="event.preventDefault(); showToast('Service Request Submitted! Ref: #SRV-9821');" class="space-y-4 text-xs z-10 relative">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div><label class="block mb-1 text-slate-600">Name</label><input required type="text" placeholder="John Doe" class="w-full bg-white border border-brand-border rounded-xl p-3 text-slate-900 focus:outline-none focus:border-brand-olive"></div>
                    <div><label class="block mb-1 text-slate-600">Organization</label><input required type="text" placeholder="Club or Resort Name" class="w-full bg-white border border-brand-border rounded-xl p-3 text-slate-900 focus:outline-none focus:border-brand-olive"></div>
                </div>
                <div><label class="block mb-1 text-slate-600">Service Required</label>
                    <select class="w-full bg-white border border-brand-border rounded-xl p-3 text-slate-900 focus:outline-none focus:border-brand-olive">
                        <option>Comprehensive Preventive Maintenance (7-Point Check)</option>
                        <option>On-Site Technician Repair</option>
                        <option>Request Parts</option>
                        <option>Lithium Battery Health Check</option>
                        <option>Maintenance &amp; Charging Guidance</option>
                        <option>Warranty Enquiry</option>
                    </select>
                </div>
                <button type="submit" class="w-full bg-brand-olive hover:bg-brand-oliveHover text-slate-900 font-bold py-3.5 rounded-xl transition-all shadow-lg text-xs sm:text-sm btn-shimmer">Submit Request</button>
            </form>
        </div>
    </div>
    `;
}

function renderBlogsPage() {
    return `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12 sm:space-y-16">
        <div class="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
            <span class="text-brand-olive text-xs font-semibold tracking-widest uppercase">News & Insights</span>
            <h1 class="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">Golfcarts.ph Blog</h1>
            <p class="text-slate-500 text-xs sm:text-base leading-relaxed">
                Buying guides, maintenance tips, and stories from the world of electric mobility.
            </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            ${BLOGS_DATA.map(post => `
                <article onclick="navigateTo('blog-details', '${post.slug}')" class="container-light-beam group cursor-pointer flex flex-col rounded-3xl bg-brand-card border border-brand-border overflow-hidden shadow-xl hover:border-brand-olive/50 transition-all">
                    <div class="h-48 sm:h-56 bg-white p-4 flex items-center justify-center overflow-hidden">
                        <img src="${post.image}" alt="${post.title}" class="product-card-img max-h-full object-contain group-hover:scale-105 transition-transform duration-500">
                    </div>
                    <div class="flex flex-col flex-1 p-5 sm:p-6 space-y-3">
                        <div class="flex items-center justify-between text-xs">
                            <span class="px-2.5 py-1 rounded-full bg-brand-olive/10 border border-brand-olive/30 text-brand-olive font-bold uppercase tracking-wider">${post.category}</span>
                            <span class="text-slate-500">${formatBlogDate(post.date)}</span>
                        </div>
                        <h2 class="text-lg sm:text-xl font-extrabold text-slate-900 group-hover:text-brand-olive transition-colors">${post.title}</h2>
                        <p class="text-slate-600 text-xs sm:text-sm leading-relaxed flex-1">${post.excerpt}</p>
                        <span class="inline-flex items-center gap-1 text-brand-olive text-xs sm:text-sm font-bold">
                            Read More <i data-lucide="arrow-right" class="w-4 h-4"></i>
                        </span>
                    </div>
                </article>
            `).join('')}
        </div>
    </div>
    `;
}

function renderBlogDetailsPage() {
    const post = BLOGS_DATA.find(p => p.slug === currentSlug);
    if (!post) return renderBlogsPage();

    return `
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
        <button onclick="navigateTo('blogs')" class="inline-flex items-center gap-2 text-slate-600 hover:text-brand-olive text-xs sm:text-sm font-semibold transition-colors">
            <i data-lucide="arrow-left" class="w-4 h-4"></i> Back to Blogs
        </button>

        <div class="space-y-3">
            <div class="flex items-center gap-3 text-xs">
                <span class="px-2.5 py-1 rounded-full bg-brand-olive/10 border border-brand-olive/30 text-brand-olive font-bold uppercase tracking-wider">${post.category}</span>
                <span class="text-slate-500">${formatBlogDate(post.date)}</span>
            </div>
            <h1 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">${post.title}</h1>
        </div>

        <div class="rounded-3xl bg-white border border-brand-border h-64 sm:h-96 p-6 flex items-center justify-center">
            <img src="${post.image}" alt="${post.title}" class="max-h-full object-contain">
        </div>

        <div class="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            ${post.content.map(p => `<p>${p}</p>`).join('')}
        </div>

        <div class="container-light-beam flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl bg-brand-card border border-brand-border">
            <p class="text-slate-900 font-bold text-sm sm:text-base">Looking for the right cart?</p>
            <button onclick="openQuoteModal()" class="inline-flex items-center gap-2 bg-brand-olive hover:bg-brand-oliveHover text-slate-900 font-bold px-6 py-3 rounded-xl shadow-lg text-xs sm:text-sm btn-shimmer">
                <span>Request a Quote</span>
            </button>
        </div>
    </div>
    `;
}

function renderAboutPage() {
    return `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12 sm:space-y-20">
        
        <!-- About Page Header Banner -->
        <div class="text-center max-w-3xl mx-auto space-y-2 sm:space-y-3">
            <span class="text-brand-olive text-xs font-semibold tracking-widest uppercase">Pioneering Mobility</span>
            <h1 class="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">About Golfcarts.ph</h1>
            <p class="text-slate-500 text-xs sm:text-base leading-relaxed">
                Empowering outdoor lifestyle and electric utility transportation across the Philippines.
            </p>
        </div>

        <!-- Section 1: Brand Story & SJK Guahan Overview -->
        <div class="container-light-beam grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-brand-card border border-brand-border rounded-3xl p-6 sm:p-12 shadow-2xl">
            <div class="lg:col-span-5 flex justify-center">
                <div class="relative w-full max-w-md h-64 sm:h-80 rounded-2xl bg-gradient-to-br from-brand-olive/20 via-brand-dark to-white border border-brand-border p-6 flex items-center justify-center overflow-hidden group">
                    <div class="absolute inset-0 bg-[radial-gradient(#749E35_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>
                    <img src="image/Products/CA500.png" alt="Carryall 500 Utility Cart" class="product-card-img max-h-full max-w-full object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.18)] transform group-hover:scale-105 transition-transform duration-500">
                </div>
            </div>

            <div class="lg:col-span-7 space-y-4 sm:space-y-6 z-10 relative">
                <div class="space-y-4 text-slate-600 text-xs sm:text-base leading-relaxed">
                    <p>
                        <strong class="text-slate-900 font-bold">Golf Carts PH</strong> falls under the <strong class="text-brand-olive font-bold">SJK Guahan group</strong>, whose focus is on providing superior service through durable and reliable products. Our brand has a strong connection with the outdoors and the lifestyle that comes with it. Our mission in SJK Guahan is to continue to find ways to enhance the enjoyment of being outdoors through products you can afford and trust.
                    </p>
                    <p>
                        SJK Guahan is a 50/50 joint venture between two groups from the Philippines and Guam that started by bringing Clubcar golf carts into the country. As we expanded into golf courses, we sought mowers and partnered with Textron's <em class="text-slate-900">Jacobsen</em> mower lineup.
                    </p>
                </div>

                <div class="pt-2 border-t border-brand-border/80 flex items-center justify-between">
                    <span class="text-brand-olive font-mono font-bold tracking-widest text-xs uppercase">SJK GUAHAN INC</span>
                    <span class="text-xs text-brand-slate font-medium">Official Distributor</span>
                </div>
            </div>
        </div>

        <!-- Section 2: Three Pillars -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div class="container-light-beam p-6 sm:p-8 rounded-3xl bg-brand-card border border-brand-border space-y-4 hover:border-brand-olive/50 transition-all duration-300 shadow-xl group">
                <div class="w-12 h-12 rounded-2xl bg-brand-olive/10 border border-brand-olive/30 text-brand-olive flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform">
                    <i data-lucide="users" class="w-6 h-6"></i>
                </div>
                <h3 class="text-lg sm:text-xl font-bold text-slate-900 uppercase tracking-wider">WHO WE ARE</h3>
                <p class="text-slate-500 text-xs sm:text-sm leading-relaxed">
                    We are the name for golfcarts and electric utility vehicles in the Philippines. We focus on selling vehicles that suit our customers' requirements and go beyond and over when it comes to customization and service to make your buggy stand out.
                </p>
            </div>

            <div class="container-light-beam p-6 sm:p-8 rounded-3xl bg-brand-card border border-brand-border space-y-4 hover:border-brand-olive/50 transition-all duration-300 shadow-xl group">
                <div class="w-12 h-12 rounded-2xl bg-brand-olive/10 border border-brand-olive/30 text-brand-olive flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform">
                    <i data-lucide="wrench" class="w-6 h-6"></i>
                </div>
                <h3 class="text-lg sm:text-xl font-bold text-slate-900 uppercase tracking-wider">WHAT WE DO</h3>
                <p class="text-slate-500 text-xs sm:text-sm leading-relaxed">
                    We customize the right cart for your very needs. We have a range of suppliers that can provide quality products you can trust when it comes to mobility.
                </p>
            </div>

            <div class="container-light-beam p-6 sm:p-8 rounded-3xl bg-brand-card border border-brand-border space-y-4 hover:border-brand-olive/50 transition-all duration-300 shadow-xl group">
                <div class="w-12 h-12 rounded-2xl bg-brand-olive/10 border border-brand-olive/30 text-brand-olive flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform">
                    <i data-lucide="heart" class="w-6 h-6"></i>
                </div>
                <h3 class="text-lg sm:text-xl font-bold text-slate-900 uppercase tracking-wider">WHY WE DO IT</h3>
                <p class="text-slate-500 text-xs sm:text-sm leading-relaxed">
                    We want to break free from the traditional golfcart and showcase how fun and exciting it can be with friends and family to take these carts out in the open. Through our products we want to push for electric and green energy vehicles which you can enjoy in your favorite places.
                </p>
            </div>
        </div>

        <!-- Section 3: Interactive Testimonials Carousel -->
        <div class="container-light-beam bg-gradient-to-r from-brand-card via-slate-50 to-brand-card border border-brand-border rounded-3xl p-6 sm:p-12 shadow-2xl relative overflow-hidden">
            <div class="text-center space-y-6 sm:space-y-8 max-w-4xl mx-auto z-10 relative">
                <h2 class="text-xl sm:text-3xl font-extrabold text-brand-olive uppercase tracking-widest">
                    OUR TESTIMONIALS
                </h2>

                <div class="min-h-[100px] flex flex-col items-center justify-center space-y-3 px-4 sm:px-8">
                    <p id="testimonial-quote-text" class="text-slate-700 text-sm sm:text-lg italic leading-relaxed font-light">
                        "${TESTIMONIALS_DATA[currentTestimonialIndex].quote}"
                    </p>
                    <span id="testimonial-author-text" class="text-slate-900 font-bold text-xs sm:text-sm tracking-wide">
                        ${TESTIMONIALS_DATA[currentTestimonialIndex].author}
                    </span>
                </div>

                <div class="flex items-center justify-center gap-4 sm:gap-6 pt-2">
                    <button onclick="prevTestimonial()" class="p-2.5 sm:p-3 rounded-full bg-white border border-brand-border text-slate-600 hover:text-brand-olive hover:border-brand-olive transition-all shadow-lg" aria-label="Previous Testimonial">
                        <i data-lucide="chevron-left" class="w-5 h-5 sm:w-6 sm:h-6"></i>
                    </button>
                    <button onclick="nextTestimonial()" class="p-3 rounded-full bg-white border border-brand-border text-slate-600 hover:text-brand-olive hover:border-brand-olive transition-all shadow-lg" aria-label="Next Testimonial">
                        <i data-lucide="chevron-right" class="w-5 h-5 sm:w-6 sm:h-6"></i>
                    </button>
                </div>
            </div>
        </div>

    </div>
    `;
}

function renderContactPage() {
    return `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8 sm:space-y-12">
        <div class="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
            <span class="text-brand-olive text-xs font-semibold tracking-widest uppercase">Get in Touch</span>
            <h1 class="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">Request a Custom Quote</h1>
            <p class="text-slate-500 text-xs sm:text-base leading-relaxed">
                Contact our sales specialists for volume fleet packages, individual purchases, or dealer partner opportunities.
            </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div class="lg:col-span-5 space-y-6">
                <div class="container-light-beam p-6 sm:p-8 rounded-3xl bg-brand-card border border-brand-border space-y-6">
                    <h3 class="text-lg sm:text-xl font-bold text-slate-900 z-10 relative">Experience Center</h3>
                    <div class="space-y-4 text-xs z-10 relative">
                        <div class="flex items-start gap-3"><i data-lucide="map-pin" class="w-5 h-5 text-brand-olive flex-shrink-0"></i><span>1877 Honda Cars Manila Building, Paz M. Guazon St., Paco, Manila</span></div>
                        <div class="flex items-start gap-3"><i data-lucide="phone" class="w-5 h-5 text-brand-olive flex-shrink-0"></i><span>+63 (999) 997-7688</span></div>
                        <div class="flex items-start gap-3"><i data-lucide="mail" class="w-5 h-5 text-brand-olive flex-shrink-0"></i><span>info@golfcarts.ph</span></div>
                    </div>
                </div>
            </div>

            <div class="lg:col-span-7">
                <div class="container-light-beam p-6 sm:p-10 rounded-3xl bg-brand-card border border-brand-border">
                    <form onsubmit="event.preventDefault(); const ref='QT-'+Math.floor(100000+Math.random()*900000); showToast('Quote Submitted! Ref: #'+ref);" class="space-y-4 text-xs z-10 relative">
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div><label class="block mb-1 text-slate-600">Full Name *</label><input required type="text" placeholder="Jane Smith" class="w-full bg-white border border-brand-border rounded-xl p-3 text-slate-900 focus:outline-none focus:border-brand-olive"></div>
                            <div><label class="block mb-1 text-slate-600">Company Name</label><input type="text" placeholder="Ocean Club LLC" class="w-full bg-white border border-brand-border rounded-xl p-3 text-slate-900 focus:outline-none focus:border-brand-olive"></div>
                        </div>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div><label class="block mb-1 text-slate-600">Email *</label><input required type="email" placeholder="jane@example.com" class="w-full bg-white border border-brand-border rounded-xl p-3 text-slate-900 focus:outline-none focus:border-brand-olive"></div>
                            <div><label class="block mb-1 text-slate-600">Phone *</label><input required type="tel" placeholder="+63 (900) 000-0000" class="w-full bg-white border border-brand-border rounded-xl p-3 text-slate-900 focus:outline-none focus:border-brand-olive"></div>
                        </div>
                        <div><label class="block mb-1 text-slate-600">Vehicle Model</label>
                            <select class="w-full bg-white border border-brand-border rounded-xl p-3 text-slate-900 focus:outline-none focus:border-brand-olive">
                                ${PRODUCTS_DATA.map(p => `<option>${p.name}</option>`).join('')}
                            </select>
                        </div>
                        <div><label class="block mb-1 text-slate-600">Message / Custom Requirements</label><textarea rows="4" placeholder="Mention preferred colors, custom accessories, or fleet size..." class="w-full bg-white border border-brand-border rounded-xl p-3 text-slate-900 focus:outline-none focus:border-brand-olive"></textarea></div>
                        <button type="submit" class="w-full bg-brand-olive hover:bg-brand-oliveHover text-slate-900 font-bold py-4 rounded-xl shadow-xl text-xs sm:text-sm btn-shimmer">Submit Quote Request</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    `;
}