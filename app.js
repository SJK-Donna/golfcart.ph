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
    { label: 'Fleet Solutions', href: 'fleet/', page: 'solutions' },
    { label: 'Parts & Accessories', href: 'carts/?category=Accessories', action: "setCategoryAndNavigate('Accessories')" },
    { label: 'Service & Support', href: 'service/', page: 'service' }
];

// Primary action for individual buyers: start on the hero product's build selector
function buildYourCart() {
    navigateTo('product-details', 'golfer-tempo-2');
    setTimeout(() => scrollToDetailSection('build'), 350);
}

// ==========================================
// HOMEPAGE CONTENT
// ==========================================

// The range: one model per seating size, shown as studio cutouts with the model name set large
const HOME_RANGE = ['golfer-tempo-2', 'golfer-tempo-2-2', 'lifestyle-tempo-4-2', 'villager-8', 'minibus-14', 'carryall-500'];

// Shop by use. Golfer leads with the largest photo; Remanufactured is a text-led strip (see renderHomeUses)
const HOME_USES = {
    golfer: { image: 'image/Banners/golf.jpg', alt: 'Green Tempo 2+2 with beige seats on a fairway', width: 1800, height: 1239 },
    lifestyle: { image: 'image/Banners/personal.jpg', alt: 'Two golfers greeting each other beside a white Tempo 2', width: 990, height: 960 },
    resort: { image: 'image/Banners/resort.jpg', alt: 'Cream guest shuttle parked at a resort entrance', width: 1800, height: 1399 }
};

// Body colors in the homepage color preview (a few from the Tempo range; the full list is in the builder)
const HOME_PREVIEW_COLORS = ['White', 'Black', 'Sangria', 'Sapphire', 'Green', 'Atomic Orange'];
const HOME_PREVIEW_SLUG = 'golfer-tempo-2';
let homePreviewColor = 'White';
let homePreviewToken = 0;

// The intro video ends on a white logo card at about 4.5s; the hero loops only the footage before it
const HERO_LOOP_END = 4;

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

// Scrolls to a homepage section, navigating home first when needed
function goToHomeSection(sectionId) {
    const scroll = () => {
        const target = document.getElementById(sectionId);
        if (target) target.scrollIntoView({ behavior: scrollBehavior() });
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
    showToast("Request sent. We'll reply with your quote.");
}

// Customer quotes on the About page

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

// ==========================================
// ROUTING: every page has a real URL
// ==========================================
// The site's base path comes from <base href>: "/" locally, "/golfcart.ph/" on GitHub Pages
// (set by scripts/build.mjs). Paths below are relative to it.
function siteBasePath() {
    const base = document.querySelector('base');
    return base ? new URL(base.href).pathname : '/';
}

// Page + slug -> path relative to the site base, e.g. ('product-details', 'golfer-tempo-2') -> 'models/golfer-tempo-2/'
function routeToPath(page, slug = null) {
    switch (page) {
        case 'products': return productFilterCategory && productFilterCategory !== 'All'
            ? `carts/?category=${encodeURIComponent(productFilterCategory)}` : 'carts/';
        case 'product-details': return `models/${slug}/`;
        case 'segment': return `use/${slug}/`;
        case 'solutions': return 'fleet/';
        case 'service': return 'service/';
        case 'blogs': return 'blog/';
        case 'blog-details': return `blog/${slug}/`;
        case 'about': return 'about/';
        case 'contact': return 'contact/';
        default: return '';
    }
}

// Absolute path -> { page, slug }; unknown paths fall back to the homepage
function pathToRoute(pathname, search = '') {
    const base = siteBasePath();
    const rel = pathname.startsWith(base) ? pathname.slice(base.length) : pathname.replace(/^\//, '');
    const [first, second] = rel.split('/').filter(Boolean);
    const simple = { carts: 'products', fleet: 'solutions', service: 'service', blog: 'blogs', about: 'about', contact: 'contact' };
    if (first === 'models' && PRODUCTS_DATA.some(p => p.slug === second)) return { page: 'product-details', slug: second };
    if (first === 'use' && NAV_SEGMENTS.some(s => s.id === second)) return { page: 'segment', slug: second };
    if (first === 'blog' && second && BLOGS_DATA.some(b => b.slug === second)) return { page: 'blog-details', slug: second };
    if (simple[first] && !second) {
        const category = new URLSearchParams(search).get('category');
        return { page: simple[first], slug: null, category };
    }
    return rel.replace(/^index\.html$/, '') ? { page: 'not-found', slug: null } : { page: 'home', slug: null };
}

// Link target for <a href> (relative, so it resolves against <base href>)
function routeHref(page, slug = null) {
    return routeToPath(page, slug) || './';
}

// Title and description for each page, used by the browser on navigation and by the pre-render build
function getPageMeta(page, slug = null) {
    const site = 'Golfcarts.ph';
    const defaultDescription = 'Low-speed electric vehicles for private roads: golf carts, resort shuttles and utility vehicles for golf courses, resorts, gated villages, estates and industrial sites. Branches in Manila, Cebu, Laguna and Clark.';
    const product = page === 'product-details' && PRODUCTS_DATA.find(p => p.slug === slug);
    const segment = page === 'segment' && NAV_SEGMENTS.find(s => s.id === slug);
    const post = page === 'blog-details' && BLOGS_DATA.find(b => b.slug === slug);
    if (product) return {
        title: `${product.name}${product.category ? `, ${categoryLabel(product.category)}` : ''} | ${site}`,
        description: `${product.tagline || ''} ${product.description || ''}`.trim().slice(0, 158),
        image: product.image
    };
    if (segment) return { title: `${segment.label} | ${site}`, description: (segment.description || defaultDescription).slice(0, 158), image: segment.image || null };
    if (post) return { title: `${post.title} | ${site}`, description: (post.excerpt || defaultDescription).slice(0, 158), image: post.image };
    const pages = {
        home: { title: `${site} | Low-speed electric vehicles for private roads`, description: defaultDescription },
        products: { title: `All carts | ${site}`, description: 'Every Golfcarts.ph cart: golf, lifestyle, resort and utility models, with colors, seats and accessories.' },
        solutions: { title: `Fleet solutions | ${site}`, description: 'Fleet proposals for golf courses, resorts, estates and industrial sites: guest transport, utility and fit-to-task carts.' },
        service: { title: `Service and support | ${site}`, description: 'Book a service, order parts and get maintenance and charging advice from the Golfcarts.ph team.' },
        blogs: { title: `Blog | ${site}`, description: 'Buying guides, maintenance tips and stories about low-speed electric vehicles.' },
        about: { title: `About | ${site}`, description: 'Golfcarts.ph, run by SJK Guahan Inc., sells, customizes and services low-speed electric vehicles for private roads.' },
        contact: { title: `Contact | ${site}`, description: 'Visit or call our branches in Manila, Cebu, Laguna and Clark, or send us a message.' },
        'not-found': { title: `Page not found | ${site}`, description: defaultDescription }
    };
    return { ...(pages[page] || pages.home), image: null };
}

function applyPageMeta(page, slug) {
    const meta = getPageMeta(page, slug);
    document.title = meta.title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', meta.description);
}

// Real links: <a href="..." data-route="page" data-slug="..."> navigate in place (new tab / modifier clicks still work)
document.addEventListener('click', e => {
    const a = e.target.closest('a[data-route]');
    if (!a || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    navigateTo(a.dataset.route, a.dataset.slug || null);
});

window.addEventListener('popstate', () => {
    const route = pathToRoute(location.pathname, location.search);
    if (route.category) productFilterCategory = route.category;
    navigateTo(route.page, route.slug, { fromHistory: true });
});

// Application Initialization
window.addEventListener('DOMContentLoaded', () => {
    // Open the page the address points at (pre-rendered pages are re-rendered in place, same markup)
    const route = pathToRoute(location.pathname, location.search);
    currentPage = route.page;
    currentSlug = route.slug;
    if (route.category) productFilterCategory = route.category;

    renderSegmentMenus();
    initMobileMenu();
    populateModalProductDropdown();
    applyPageMeta(currentPage, currentSlug);
    updateNavState();
    renderApp();
});

function initMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    if (btn) btn.addEventListener('click', () => toggleMobileMenu());
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            toggleMobileMenu(false);
            closeQuoteModal();
        }
    });
}

// Opens or closes the mobile menu; pass true / false to force a state
function toggleMobileMenu(open) {
    const drawer = document.getElementById('mobile-drawer');
    const btn = document.getElementById('mobile-menu-btn');
    if (!drawer) return;
    const show = typeof open === 'boolean' ? open : drawer.classList.contains('hidden');
    drawer.classList.toggle('hidden', !show);
    document.body.classList.toggle('overflow-hidden', show);
    if (btn) {
        btn.setAttribute('aria-expanded', String(show));
        const label = btn.querySelector('.mobile-menu-label');
        if (label) label.textContent = show ? 'Close' : 'Menu';
    }
}

// Marks the header link for the current page (pillar pages and their carts mark their pillar)
function updateNavState() {
    const pillarProduct = currentPage === 'product-details' && PRODUCTS_DATA.find(p => p.slug === currentSlug);
    const pillarSeg = currentPage === 'segment' ? currentSlug
        : pillarProduct ? (NAV_SEGMENTS.find(s => s.category === pillarProduct.category) || {}).id : null;
    const activePage = currentPage === 'blog-details' ? 'blogs' : pillarSeg ? null : currentPage === 'product-details' ? 'products' : currentPage;
    document.querySelectorAll('.nav-link').forEach(link => {
        const active = (activePage && link.dataset.page === activePage) || (pillarSeg && link.dataset.segment === pillarSeg);
        if (active) link.setAttribute('aria-current', 'page');
        else link.removeAttribute('aria-current');
    });
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

// Smooth scrolling, unless the visitor asked for reduced motion
function scrollBehavior() {
    return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
}

function navigateTo(page, slug = null, options = {}) {
    currentPage = page;
    currentSlug = slug;
    // Record the page in the address bar so back / forward / sharing work
    if (!options.fromHistory) {
        const url = siteBasePath() + routeToPath(page, slug);
        if (url !== location.pathname + location.search) history.pushState({ page, slug }, '', url);
    }
    applyPageMeta(page, slug);
    window.scrollTo({ top: 0, behavior: options.fromHistory ? 'auto' : scrollBehavior() });
    
    toggleMobileMenu(false);
    updateNavState();

    renderApp();
    // Keyboard and screen reader users start at the new page's content, not back at the header
    const main = document.getElementById('app-viewport');
    if (main) main.focus({ preventScroll: true });
}

function setCategoryFilter(cat) {
    productFilterCategory = cat;
    history.replaceState({ page: 'products' }, '', siteBasePath() + routeToPath('products'));
    applyPageMeta('products');
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
                target.scrollIntoView({ behavior: scrollBehavior(), block: 'center' });
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

// Menu entry for a model: a link to its own page when it has one, otherwise a button to its card on the pillar page
function modelMenuItem(seg, sub, key, className) {
    const model = VEHICLE_MODELS[key];
    const badge = model.badge ? ` <span class="text-green-text text-xs font-medium">${model.badge}</span>` : '';
    return model.slug
        ? `<a href="${routeHref('product-details', model.slug)}" data-route="product-details" data-slug="${model.slug}" class="${className}" role="menuitem">${model.name}${badge}</a>`
        : `<button type="button" onclick="${modelMenuAction(seg, sub, key)}" class="${className}" role="menuitem">${model.name}${badge}</button>`;
}

// Hover/focus sub-menu for a pillar (header nav and Cart page tabs)
function renderSegmentDropdown(seg) {
    return `
        <div class="segment-dropdown" role="menu">
            <div class="segment-dropdown-inner grid gap-8" style="grid-template-columns: repeat(${seg.subcategories.length}, minmax(180px, 1fr));">
                ${seg.subcategories.map(sub => `
                    <div class="space-y-3">
                        <button type="button" onclick="openSegment('${seg.id}', '${seg.id}-${sub.id}')" class="block text-left text-[0.8125rem] font-medium text-mute hover:text-ink">${sub.label}</button>
                        ${sub.groups.map(group => `
                            <div class="space-y-0.5">
                                ${group.label !== sub.label ? `<p class="text-xs font-semibold text-ink">${group.label}</p>` : ''}
                                ${group.items.map(key => modelMenuItem(seg, sub, key, 'segment-dropdown-item')).join('')}
                            </div>
                        `).join('')}
                        ${sub === seg.subcategories[0] && seg.links ? `
                            <div class="pt-3 mt-2 border-t border-line space-y-0.5">
                                ${seg.links.map(l => `<button type="button" onclick="openSegment('${seg.id}', '${seg.id}-${l.anchor}')" class="segment-dropdown-item" role="menuitem">${l.label}</button>`).join('')}
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
                    <a href="${routeHref('segment', seg.id)}" data-route="segment" data-slug="${seg.id}" class="nav-link header-nav-link" data-segment="${seg.id}" aria-haspopup="true">${seg.label}<svg class="nav-chevron" viewBox="0 0 12 12" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M3 4.5l3 3 3-3"/></svg></a>
                    ${renderSegmentDropdown(seg)}
                </div>`;
        }
        return `<a href="${item.href}" ${item.page ? `data-route="${item.page}" data-page="${item.page}"` : `onclick="event.preventDefault(); ${item.action}"`} class="nav-link header-nav-link">${item.label}</a>`;
    }).join('');
}

function renderSegmentMenus() {
    renderMainNav();
    const mobile = document.getElementById('mobile-segment-menus');
    if (mobile) {
        mobile.innerHTML = NAV_SEGMENTS.map(seg => `
            <details class="mobile-segment">
                <summary><span>${seg.label}</span><span class="disclosure-sign" aria-hidden="true"></span></summary>
                <div class="mobile-segment-models">
                    <a href="${routeHref('segment', seg.id)}" data-route="segment" data-slug="${seg.id}" class="font-semibold text-ink">All ${seg.label}</a>
                    ${seg.subcategories.map(sub => `
                        ${seg.subcategories.length > 1 ? `<p class="pt-3 text-[0.8125rem] font-medium text-mute">${sub.label}</p>` : ''}
                        ${sub.groups.flatMap(group => group.items).map(key => modelMenuItem(seg, sub, key, '')).join('')}
                    `).join('')}
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
        document.body.classList.add('overflow-hidden');
        quoteModalReturnFocus = document.activeElement;
        const first = document.getElementById('modal-name');
        if (first) setTimeout(() => first.focus(), 0);
    }
}

let quoteModalReturnFocus = null;

function closeQuoteModal() {
    const modal = document.getElementById('quote-modal');
    if (!modal || modal.classList.contains('hidden')) return;
    modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
    if (quoteModalReturnFocus && quoteModalReturnFocus.focus) quoteModalReturnFocus.focus();
}

function handleModalQuoteSubmit(e) {
    e.preventDefault();
    closeQuoteModal();
    const refCode = 'QT-' + Math.floor(100000 + Math.random() * 900000);
    const count = quoteAccessories.size;
    const accessoryNote = count ? ` with ${count} accessor${count === 1 ? 'y' : 'ies'}` : '';
    showToast(`Request sent${accessoryNote}. Your reference is ${refCode}.`);
    e.target.reset();
    quoteAccessories = new Set();
}

// SPA View Renderer Switchboard
function renderApp() {
    const viewport = document.getElementById('app-viewport');
    if (!viewport) return;
    
    if (currentPage === 'home') {
        viewport.innerHTML = renderHomePage();
        initHomePage();
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
    } else if (currentPage === 'not-found') {
        viewport.innerHTML = renderNotFoundPage();
    }

    initRevealOnScroll();

}

// --- PAGE RENDERING FUNCTIONS ---

// Fades major sections in once as they scroll into view (elements with the .rise class)
function initRevealOnScroll() {
    const items = document.querySelectorAll('.rise:not(.is-visible)');
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

// Battery comparison rows. `bars` are relative 0-100 lengths for the meter (higher = better for the buyer).
const BATTERY_COMPARISON = [
    { label: 'Lifespan', lead: '3–5 years', lithium: '8–12+ years', bars: [35, 100] },
    { label: 'Charging time', lead: '8–10 hours', lithium: '2–4 hours', bars: [30, 100] },
    { label: 'Battery weight', lead: '135–180 kg', lithium: '45–68 kg', bars: [35, 100] },
    { label: 'Maintenance', lead: 'Monthly water top-ups and terminal cleaning', lithium: 'None. Sealed, with built-in battery management', bars: [25, 100] },
    { label: 'Power on hills', lead: 'Slows down as the charge drops', lithium: 'Full power until empty', bars: [45, 100] },
    { label: 'Upfront cost', lead: 'Lower', lithium: 'About 2–3× higher', bars: [100, 40] },
    { label: '10-year cost', lead: 'Higher: 2–3 pack replacements', lithium: 'Lower: one pack lasts the decade', bars: [40, 100] }
];

// `side` is 'lead' or 'lithium'. Bars grow outward from the middle column: the lead-acid bar is anchored
// on its right edge, the lithium bar on its left, so each row reads as a head-to-head comparison.
function renderBatteryBar(value, side) {
    const isLithium = side === 'lithium';
    return `
        <div class="battery-track ${isLithium ? 'justify-start' : 'justify-end'}" aria-hidden="true">
            <div class="battery-bar ${isLithium ? 'bg-green' : 'bg-mute'}" style="--bar:${value}%"></div>
        </div>`;
}

// Lead-acid on the left, what is being compared in the middle, lithium on the right
function renderHomeBatteryCompare() {
    return `
        <section id="home-battery" class="rise home-section max-w-site mx-auto px-5 sm:px-8 lg:px-12">
            <div class="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-12 lg:mb-16">
                <h2 class="type-xl text-ink lg:col-span-7">Lead-acid or lithium?</h2>
                <p class="measure lg:col-span-5">It comes down to a lower price today, or lower costs and less upkeep over the life of the cart.</p>
            </div>

            <div class="max-w-5xl mx-auto">
                <div class="battery-grid">
                    <div class="battery-cell-lead px-4 sm:px-6 pt-4 pb-4 md:text-right">
                        <p class="type-md text-ink">Lead-acid</p>
                        <p class="text-sm text-mute mt-1">Flooded (FLA)</p>
                    </div>
                    <div class="battery-cell-label hidden md:block"></div>
                    <div class="battery-cell-lithium px-4 sm:px-6 pb-4 pt-4 bg-stone">
                        <p class="type-md text-ink">Lithium</p>
                        <p class="text-sm text-ink-2 mt-1">LiFePO₄ · lower running cost</p>
                    </div>
                </div>

                ${BATTERY_COMPARISON.map(row => `
                    <div class="battery-row battery-grid">
                        <p class="battery-cell-label px-4 pt-4 md:py-4 text-sm font-medium text-ink md:text-center">${row.label}</p>
                        <div class="battery-cell-lead px-4 sm:px-6 py-3 md:py-4 space-y-2 md:text-right">
                            <p class="text-sm leading-snug">${row.lead}</p>
                            ${renderBatteryBar(row.bars[0], 'lead')}
                        </div>
                        <div class="battery-cell-lithium px-4 sm:px-6 py-3 md:py-4 space-y-2 bg-stone">
                            <p class="text-sm leading-snug text-ink font-medium">${row.lithium}</p>
                            ${renderBatteryBar(row.bars[1], 'lithium')}
                        </div>
                    </div>
                `).join('')}
            </div>

            <div class="max-w-5xl mx-auto grid md:grid-cols-2 gap-px bg-line border-y border-line mt-16">
                <div class="bg-paper py-8 md:pr-10 space-y-4">
                    <h3 class="type-md text-ink">Lead-acid suits you if you</h3>
                    <ul class="home-list">
                        <li>are working with a tight upfront budget</li>
                        <li>plan to keep the cart for two years or less</li>
                        <li>don't mind monthly water checks</li>
                    </ul>
                    <button type="button" onclick="openQuoteModal('', 'Battery preference: Lead-Acid')" class="btn btn-outline">Quote with lead-acid</button>
                </div>
                <div class="bg-paper py-8 md:pl-10 space-y-4">
                    <h3 class="type-md text-ink">Lithium suits you if you</h3>
                    <ul class="home-list">
                        <li>keep the cart long-term, or run a resort, golf or village fleet</li>
                        <li>drive on hills or rough ground</li>
                        <li>want fast charging and no battery maintenance</li>
                    </ul>
                    <button type="button" onclick="openQuoteModal('', 'Battery preference: Lithium')" class="btn btn-primary">Quote with lithium</button>
                </div>
            </div>
            <p class="max-w-5xl mx-auto mt-6 text-[0.8125rem] text-mute">Typical figures for golf cart battery packs. Actual results vary with model, use and charging habits.</p>
        </section>
    `;
}

// "2 Seats (Forward Facing)" + "85 km per charge" + "30 km/h max" -> "2 seats · 85 km range · 30 km/h"
function homeSpecLine(p) {
    const seats = (p.seating || '').replace(/\s*\(.*\)/, '').replace('Seats', 'seats').replace('Cargo Box', 'cargo bed');
    return [seats, p.range && p.range.replace(' per charge', ' range'), p.speed && p.speed.replace(' max', '')].filter(Boolean).join(' · ');
}

function renderHomeRange() {
    const models = HOME_RANGE.map(slug => PRODUCTS_DATA.find(p => p.slug === slug)).filter(Boolean);
    return `
        <section class="rise home-section" aria-labelledby="home-range-title">
            <div class="max-w-site mx-auto px-5 sm:px-8 lg:px-12 flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 lg:mb-14">
                <h2 id="home-range-title" class="type-xl text-ink">Two seats. Four.<br>Fourteen.</h2>
                <a href="${routeHref('products')}" data-route="products" class="link self-start md:self-auto">See every cart</a>
            </div>
            <div class="max-w-site mx-auto md:px-8 lg:px-12">
                <ul class="home-range">
                    ${models.map((p, i) => `<li class="home-range-item">${renderModelTile(p, { eager: i < 3 })}</li>`).join('')}
                </ul>
            </div>
        </section>
    `;
}

function renderHomeUseTile(id, sizeClass, imageClass) {
    const seg = NAV_SEGMENTS.find(s => s.id === id);
    const use = HOME_USES[id];
    return `
        <a href="${routeHref('segment', id)}" data-route="segment" data-slug="${id}" class="group block ${sizeClass}">
            <div class="media-zoom ${imageClass}">
                <img src="${use.image}" alt="${use.alt}" width="${use.width}" height="${use.height}" loading="lazy" decoding="async" class="w-full h-full object-cover">
            </div>
            <div class="pt-5 space-y-2">
                <h3 class="type-lg text-ink">${seg.label}</h3>
                <p class="measure">${seg.tagline}</p>
            </div>
        </a>`;
}

// Editorial grid: a large Golfer photo, two offset tiles of different sizes, and a text-led Remanufactured strip
function renderHomeUses() {
    const reman = NAV_SEGMENTS.find(s => s.id === 'remanufactured');
    return `
        <section class="rise home-section bg-paper" aria-labelledby="home-uses-title">
            <div class="max-w-site mx-auto px-5 sm:px-8 lg:px-12">
                <h2 id="home-uses-title" class="type-xl text-ink mb-12 lg:mb-16 max-w-[14ch]">Shop by how you'll use it.</h2>
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-14">
                    ${renderHomeUseTile('golfer', 'lg:col-span-7', 'aspect-[4/3] lg:aspect-[7/6]')}
                    <div class="lg:col-span-5 grid gap-y-14 lg:pt-40">
                        ${renderHomeUseTile('lifestyle', '', 'aspect-square lg:aspect-[5/4]')}
                    </div>
                    <div class="lg:col-span-5 lg:col-start-2">
                        ${renderHomeUseTile('resort', '', 'aspect-[4/3]')}
                    </div>
                    <a href="${routeHref('segment', 'remanufactured')}" data-route="segment" data-slug="remanufactured" class="group lg:col-span-5 lg:col-start-8 self-end border-t border-ink pt-6 grid grid-cols-[1fr_auto] gap-6 items-start">
                        <div class="space-y-3">
                            <h3 class="type-lg text-ink">${reman.label}</h3>
                            <p class="measure">Rebuilt Tempo carts, each quoted with its rebuild scope, battery condition and warranty terms.</p>
                            <span class="link inline-block">See available builds</span>
                        </div>
                        <img src="image/Products/reman 4.png" alt="" loading="lazy" decoding="async" class="w-28 sm:w-40 object-contain">
                    </a>
                </div>
            </div>
        </section>
    `;
}

// One Tempo 2 that repaints from a few swatches, leading into the full builder
function renderHomeConfigurator() {
    const colors = getProductBodyColors(PRODUCTS_DATA.find(p => p.slug === HOME_PREVIEW_SLUG))
        .filter(c => HOME_PREVIEW_COLORS.includes(c.name));
    const base = hasLiveColorPreview(HOME_PREVIEW_SLUG) ? COLOR_PREVIEW[HOME_PREVIEW_SLUG].base : 'image/Products/Premium.png';
    return `
        <section class="rise home-section bg-stone" aria-labelledby="home-config-title">
            <div class="max-w-site mx-auto px-5 sm:px-8 lg:px-12 grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                <div class="lg:col-span-7 lg:order-2">
                    <img id="home-config-img" src="${base}" alt="Tempo 2 in ${homePreviewColor}" class="w-full aspect-[4/3] object-contain">
                </div>
                <div class="lg:col-span-5 space-y-8">
                    <h2 id="home-config-title" class="type-xl text-ink">Your color. Your seat. Your cart.</h2>
                    <p class="measure text-ink-2">Pick the body, seats, canopy and build, see it on the cart, and send it to us for a quote.</p>
                    <div class="space-y-3">
                        <p class="text-sm text-ink-2">Body color: <span id="home-config-color" class="font-semibold text-ink">${homePreviewColor}</span></p>
                        <div role="radiogroup" aria-label="Body color" class="flex flex-wrap gap-3">
                            ${colors.map(c => `
                                <button type="button" role="radio" aria-checked="${c.name === homePreviewColor}" aria-label="${c.name}" title="${c.name}"
                                    onclick="selectHomeColor('${c.name}')" class="home-swatch" style="--swatch:${c.hex}"></button>
                            `).join('')}
                        </div>
                    </div>
                    <button type="button" onclick="buildYourCart()" class="btn btn-primary">Build your cart</button>
                </div>
            </div>
        </section>
    `;
}

function selectHomeColor(name) {
    homePreviewColor = name;
    document.querySelectorAll('.home-swatch').forEach(b => b.setAttribute('aria-checked', String(b.getAttribute('aria-label') === name)));
    const label = document.getElementById('home-config-color');
    if (label) label.textContent = name;
    const product = PRODUCTS_DATA.find(p => p.slug === HOME_PREVIEW_SLUG);
    const color = getProductBodyColors(product).find(c => c.name === name);
    if (!color || !hasLiveColorPreview(HOME_PREVIEW_SLUG) || !livePreviewAvailable) return;
    const token = ++homePreviewToken;
    renderCartPreview(HOME_PREVIEW_SLUG, { body: color.hex, seat: null, canopy: null }).then(url => {
        const img = document.getElementById('home-config-img');
        if (!url || !img || token !== homePreviewToken) return;
        img.src = url;
        img.alt = `Tempo 2 in ${name}`;
    }).catch(() => { livePreviewAvailable = false; });
}

function renderHomeTrust() {
    return `
        <section class="rise home-section" aria-labelledby="home-trust-title">
            <div class="max-w-site mx-auto px-5 sm:px-8 lg:px-12 grid lg:grid-cols-12 gap-12">
                <div class="lg:col-span-4 space-y-10">
                    <h2 id="home-trust-title" class="type-lg text-ink">Running on courses, resorts and sites across the Philippines.</h2>
                    <dl class="grid grid-cols-2 gap-8 border-t border-line pt-8">
                        <div><dt class="text-sm text-mute">Clients</dt><dd class="type-xl text-ink mt-2">${CLIENT_LOGOS.length}+</dd></div>
                        <div><dt class="text-sm text-mute">Branches</dt><dd class="type-xl text-ink mt-2">${BRANCHES.length}</dd></div>
                    </dl>
                </div>
                <ul class="lg:col-span-8 home-logos" aria-label="Clients">
                    ${CLIENT_LOGOS.slice(0, 24).map((logo, i) => `
                        <li class="${i >= 12 ? 'hidden md:flex' : 'flex'}"><img src="${logo}" alt="Client logo ${i + 1}" loading="lazy" decoding="async"></li>
                    `).join('')}
                </ul>
            </div>
        </section>
    `;
}

function renderHomeQuote() {
    const vehicleOptions = PRODUCTS_DATA.filter(p => p.category !== 'Accessories');
    return `
        <section id="home-quote" class="rise home-section bg-paper border-t border-line scroll-mt-20" aria-labelledby="home-quote-title">
            <div class="max-w-site mx-auto px-5 sm:px-8 lg:px-12 grid lg:grid-cols-12 gap-12">
                <div class="lg:col-span-4 space-y-5">
                    <h2 id="home-quote-title" class="type-xl text-ink">Get a quote.</h2>
                    <p class="measure">Choose a model and your nearest branch. We'll reply with pricing and lead times.</p>
                </div>
                <form onsubmit="handleHomeQuoteSubmit(event)" class="lg:col-span-7 lg:col-start-6 grid sm:grid-cols-2 gap-x-6 gap-y-5">
                    <div class="field"><label for="hq-name">Full name</label><input id="hq-name" name="name" required type="text" autocomplete="name"></div>
                    <div class="field"><label for="hq-phone">Mobile number</label><input id="hq-phone" name="phone" required type="tel" autocomplete="tel" placeholder="+63 900 000 0000"></div>
                    <div class="field"><label for="hq-email">Email</label><input id="hq-email" name="email" required type="email" autocomplete="email"></div>
                    <div class="field"><label for="hq-qty">Quantity</label><input id="hq-qty" name="quantity" type="number" min="1" value="1"></div>
                    <div class="field"><label for="hq-model">Model</label>
                        <select id="hq-model" name="model" required>
                            <option value="">Select a model</option>
                            ${vehicleOptions.map(p => `<option value="${p.slug}">${p.name} (${categoryLabel(p.category)})</option>`).join('')}
                        </select>
                    </div>
                    <div class="field"><label for="hq-branch">Nearest branch</label>
                        <select id="hq-branch" name="branch" required>
                            <option value="">Select a branch</option>
                            ${BRANCHES.map(b => `<option>${b.name}</option>`).join('')}
                        </select>
                    </div>
                    <div class="field sm:col-span-2"><label for="hq-notes">Notes (optional)</label><textarea id="hq-notes" name="notes" rows="3" placeholder="Color, accessories, delivery location"></textarea></div>
                    <div class="sm:col-span-2"><button type="submit" class="btn btn-primary">Send request</button></div>
                </form>
            </div>
        </section>
    `;
}

function renderHomeBranches() {
    return `
        <section id="home-branches" class="rise home-section scroll-mt-20" aria-labelledby="home-branches-title">
            <div class="max-w-site mx-auto px-5 sm:px-8 lg:px-12">
                <h2 id="home-branches-title" class="type-xl text-ink mb-12 lg:mb-16">Four branches.</h2>
                <ul class="border-b border-line">
                    ${BRANCHES.map(b => `
                        <li class="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-3 py-8 border-t border-line">
                            <h3 class="type-md text-ink md:col-span-3">${b.name.replace(' Branch', '')}</h3>
                            <p class="md:col-span-5 measure">${b.address}</p>
                            <p class="md:col-span-2 text-sm space-y-1">${b.phones.length
                                ? b.phones.map(ph => `<a href="tel:${ph.replace(/[^\d+]/g, '')}" class="block hover:text-ink">${ph}</a>`).join('')
                                : `<a href="${routeHref('contact')}" data-route="contact" class="hover:text-ink">Contact us</a>`}</p>
                            <p class="md:col-span-2 md:text-right"><a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(b.address)}" target="_blank" rel="noopener" class="link text-sm">Get directions<span class="sr-only"> to the ${b.name} (opens Google Maps)</span></a></p>
                        </li>
                    `).join('')}
                </ul>
            </div>
        </section>
    `;
}

function renderHomeFaq() {
    return `
        <section class="rise home-section pt-0" aria-labelledby="home-faq-title">
            <div class="max-w-site mx-auto px-5 sm:px-8 lg:px-12 grid lg:grid-cols-12 gap-12">
                <div class="lg:col-span-4 space-y-5">
                    <h2 id="home-faq-title" class="type-lg text-ink">Questions, answered.</h2>
                    <a href="${routeHref('contact')}" data-route="contact" class="link inline-block">Ask us something else</a>
                </div>
                <div class="lg:col-span-8 border-b border-line">
                    ${HOME_FAQS.map(faq => `
                        <details class="home-faq border-t border-line">
                            <summary class="flex items-start justify-between gap-6 py-6 cursor-pointer list-none text-lg text-ink font-medium">
                                <span>${faq.q}</span><span class="home-faq-sign" aria-hidden="true"></span>
                            </summary>
                            <p class="pb-6 -mt-2 measure">${faq.a}</p>
                        </details>
                    `).join('')}
                </div>
            </div>
        </section>
    `;
}

function renderHomePage() {
    return `
        <section class="home-hero" aria-labelledby="home-hero-title">
            <video id="home-hero-video" class="home-hero-media" muted playsinline preload="metadata" poster="image/Hero/hero-poster.jpg" aria-hidden="true" tabindex="-1">
                <source src="video/intro_golfcartph.mp4" type="video/mp4">
            </video>
            <div class="home-hero-scrim" aria-hidden="true"></div>
            <div class="home-hero-copy max-w-site mx-auto px-5 sm:px-8 lg:px-12">
                <h1 id="home-hero-title" class="type-hero text-paper max-w-[11ch]">Built for private roads.</h1>
                <p class="home-hero-sub measure">Golf carts, shuttles and utility vehicles for courses, resorts, villages and estates.</p>
                <button type="button" onclick="buildYourCart()" class="btn btn-primary">Build your cart</button>
            </div>
            <button type="button" id="home-hero-toggle" class="home-hero-toggle" aria-label="Pause background video" hidden>
                <svg class="icon-pause" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><rect x="6" y="5" width="4" height="14"/><rect x="14" y="5" width="4" height="14"/></svg>
                <svg class="icon-play" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M7 5v14l12-7z"/></svg>
            </button>
        </section>

        ${renderHomeRange()}
        ${renderHomeUses()}
        ${renderHomeConfigurator()}
        ${renderHomeBatteryCompare()}
        ${renderHomeTrust()}
        ${renderHomeQuote()}
        ${renderHomeBranches()}
        ${renderHomeFaq()}
    `;
}

// Starts the hero video (unless reduced motion is on) and wires its pause control
function initHomePage() {
    const video = document.getElementById('home-hero-video');
    const toggle = document.getElementById('home-hero-toggle');
    if (!video || !toggle) return;
    const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const sync = () => {
        toggle.classList.toggle('is-paused', video.paused);
        toggle.setAttribute('aria-label', video.paused ? 'Play background video' : 'Pause background video');
    };
    const play = () => {
        const p = video.play && video.play();
        if (p && p.catch) p.catch(() => sync());
    };
    video.addEventListener('timeupdate', () => {
        if (video.currentTime >= HERO_LOOP_END) {
            video.currentTime = 0;
            play();
        }
    });
    video.addEventListener('ended', () => { video.currentTime = 0; play(); });
    video.addEventListener('play', sync);
    video.addEventListener('pause', sync);
    toggle.addEventListener('click', () => (video.paused ? play() : video.pause()));
    toggle.hidden = false;
    sync();
    if (!reduceMotion) play();
}

function renderNotFoundPage() {
    return `
        <section class="home-section max-w-site mx-auto px-5 sm:px-8 lg:px-12 min-h-[60vh]">
            <h1 class="type-xl text-ink max-w-[14ch]">This page isn't on the map.</h1>
            <p class="measure mt-6">The link may be old or mistyped. Start from the homepage or see every cart.</p>
            <div class="flex flex-wrap gap-4 mt-10">
                <a href="./" data-route="home" class="btn btn-primary">Go to the homepage</a>
                <a href="${routeHref('products')}" data-route="products" class="btn btn-outline">See every cart</a>
            </div>
        </section>
    `;
}

function filterProducts() {
    const q = productSearchQuery.toLowerCase();
    return PRODUCTS_DATA.filter(p => (productFilterCategory === 'All' || p.category === productFilterCategory)
        && (p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)));
}

function renderProductGridItems(list) {
    return list.length
        ? list.map(p => `<li>${renderModelTile(p)}</li>`).join('')
        : `<li class="col-span-full py-16 border-y border-line"><p class="type-md text-ink">Nothing matches "${productSearchQuery.replace(/</g, '&lt;')}".</p><p class="mt-2">Try a model name, such as Tempo or Villager.</p></li>`;
}

function renderProductsPage() {
    const categories = ['All', ...Object.keys(CATEGORY_BANNERS)];
    const banner = CATEGORY_BANNERS[productFilterCategory];
    const filtered = filterProducts();

    return `
        <section class="max-w-site mx-auto px-5 sm:px-8 lg:px-12 pt-16 lg:pt-24">
            <div class="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
                <h1 class="type-xl text-ink lg:col-span-7">${banner ? banner.headline : 'Every cart we sell.'}</h1>
                <p class="measure lg:col-span-5">${banner ? banner.subheadline : 'Golf, lifestyle, resort and utility models, plus parts and accessories. Every cart can be built to order.'}</p>
            </div>

            <div class="mt-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-line">
                <nav aria-label="Cart categories" class="flex -ml-3 overflow-x-auto scrollbar-none">
                    ${categories.map(cat => `
                        <a href="${cat === 'All' ? 'carts/' : `carts/?category=${encodeURIComponent(cat)}`}" onclick="event.preventDefault(); setCategoryFilter('${cat}')"
                           class="detail-tab ${productFilterCategory === cat ? 'detail-tab-active' : ''}" ${productFilterCategory === cat ? 'aria-current="page"' : ''}>${cat === 'All' ? 'All' : categoryLabel(cat)}</a>
                    `).join('')}
                </nav>
                <div class="field md:w-72 pb-4">
                    <label for="product-search-input" class="sr-only">Search carts and accessories</label>
                    <input id="product-search-input" type="search" value="${productSearchQuery.replace(/"/g, '&quot;')}" placeholder="Search carts and accessories" class="!min-h-[2.75rem]">
                </div>
            </div>
            <p class="text-sm text-mute mt-4" id="product-count" aria-live="polite">${filtered.length} ${filtered.length === 1 ? 'result' : 'results'}</p>
        </section>

        ${banner && banner.photo ? `
            <div class="max-w-site mx-auto px-5 sm:px-8 lg:px-12 mt-10">
                <div class="aspect-[16/9] md:aspect-[21/8] overflow-hidden bg-stone">
                    <img src="${banner.photo}" alt="${banner.title}" class="w-full h-full object-cover" style="object-position:${banner.photoFocus || 'center'}">
                </div>
            </div>
        ` : ''}

        <section class="max-w-site mx-auto px-5 sm:px-8 lg:px-12 pt-12 pb-24 lg:pb-32">
            <ul id="product-grid-container" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
                ${renderProductGridItems(filtered)}
            </ul>
        </section>
    `;
}

function bindProductsFilterEvents() {
    const input = document.getElementById('product-search-input');
    if (!input) return;
    input.addEventListener('input', e => {
        productSearchQuery = e.target.value;
        const list = filterProducts();
        const grid = document.getElementById('product-grid-container');
        if (grid) grid.innerHTML = renderProductGridItems(list);
        const count = document.getElementById('product-count');
        if (count) count.textContent = `${list.length} ${list.length === 1 ? 'result' : 'results'}`;
    });
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

// Seat photos from the "Versions" sheet's Guide tab (Photo Links column), saved to image/Seats.
// Two photos = front and rear seat. Only used with CLUB_CAR_SEAT_GROUPS (Carryall seats are a different style).
// The sheet links "GC Beige" to the file named "GC Brown Rear Seat"; both GC front links point to one
// shared photo, so only the rear photos are used for GC Beige / Dark Brown. Coffee Brown has no photo yet.
const SEAT_PHOTOS = {
    'White': ['standard-white'], 'Beige': ['standard-beige'], 'Black': ['standard-black'], 'Grey': ['standard-grey'],
    'Modern Premium Light Beige': ['modern-light-beige'], 'Premium Camello': ['modern-camello'],
    'Modern Premium Black': ['modern-black'], 'Premium Black and Grey': ['modern-black-grey'],
    'Modern Premium Grey': ['modern-grey'], 'Elite Bright White': ['elite-bright-white'],
    'Premium Light Beige': ['classic-light-beige'], 'Premium Off White': ['classic-off-white'],
    'Premium Black': ['classic-black'], 'Premium Grey': ['classic-grey'],
    'Premium Camello & Light Beige': ['classic-camello-light-beige'], 'Premium Camello & Off White': ['classic-camello-off-white'],
    'Premium Camello (Special Promo)': ['classic-camello'], 'Premium Black and Grey (Special Promo)': ['classic-black-grey'],
    'High-Back Sport Black Carbon Fiber with Silver Inlay': ['highback-black-silver'],
    'High-Back Luxury Honey Beige with Black Inlay': ['highback-honey-black'],
    'High-Back Luxury Briar Brown': ['highback-briar-brown'],
    'Tsunami Silver Red & Black': ['tsunami-red-front', 'tsunami-red-rear'],
    'Tsunami Silver Grey & Black': ['tsunami-grey-front', 'tsunami-grey-rear'],
    'Tsunami Silver Blue & Black': ['tsunami-blue-front', 'tsunami-blue-rear'],
    'GC White with Arm Rest': ['gc-white-front', 'gc-white-rear'],
    'GC Beige with Arm Rest': ['gc-brown-rear'],
    'GC Dark Brown with Arm Rest': ['gc-dark-brown-rear']
};

function getSeatPhotos(seatGroups, option) {
    if (seatGroups !== CLUB_CAR_SEAT_GROUPS) return [];
    return (SEAT_PHOTOS[option] || []).map(name => `image/Seats/${name}.jpg`);
}
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
        <fieldset class="space-y-2">
            <legend class="text-sm text-ink-2 mb-2">${g.group}</legend>
            ${g.items.map(item => {
                const photo = item.product && (PRODUCTS_DATA.find(p => p.slug === item.product) || {}).image;
                return `
                    <label class="flex items-center gap-3 p-2.5 bg-paper border border-line hover:border-ink-2 cursor-pointer">
                        <input type="checkbox" ${quoteAccessories.has(item.id) ? 'checked' : ''} onchange="toggleQuoteAccessory('${item.id}')" class="w-4 h-4 accent-[#151714] flex-shrink-0">
                        <span class="w-10 h-10 bg-stone flex items-center justify-center overflow-hidden flex-shrink-0">
                            ${photo ? `<img src="${photo}" alt="" loading="lazy" class="max-w-full max-h-full object-contain">` : ''}
                        </span>
                        <span class="flex-1 min-w-0 text-sm">
                            <span class="block text-ink">${item.name}</span>
                            ${item.sku ? `<span class="block text-xs text-mute">${item.sku}</span>` : ''}
                        </span>
                    </label>`;
            }).join('')}
        </fieldset>
    `).join('') + '<p class="text-sm text-ink-2">We confirm fitment before quoting.</p>'
        : '<p class="text-sm text-ink-2">No accessories are listed for this model yet. Tell us what you need in the notes.</p>';
}

function renderAccessoryChips() {
    const chips = document.getElementById('modal-accessory-chips');
    const toggle = document.getElementById('accessory-toggle');
    if (chips) {
        chips.innerHTML = [...quoteAccessories].map(id => {
            const item = findAccessory(id);
            return item ? `
                <span class="inline-flex items-center gap-1 pl-3 pr-1 py-1 bg-paper border border-ink text-sm text-ink rounded-[2px]">
                    ${item.name}
                    <button type="button" onclick="toggleQuoteAccessory('${id}')" aria-label="Remove ${item.name}" class="w-6 h-6 leading-none hover:bg-stone">&times;</button>
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

// Swatch colors for every seat option, measured from the seat photos in image/Seats (the vinyl's main
// mid-tone, ignoring the cart frame and studio background). Two- and three-tone seats use a split swatch;
// the FIRST color is the seat's signature color, because the live preview repaints the seat with it.
const TRIM_COLOR_HEX = {
    // Standard Club Car seats (also used by Carryall seats)
    'White': '#ECEBE7', 'Beige': '#B99E85', 'Black': '#2B2A2C', 'Grey': '#AEAFAE', 'Gray': '#AEAFAE',
    // Modern Premium seats
    'Modern Premium Light Beige': '#D2BFAF', 'Premium Camello': '#B9845F', 'Modern Premium Black': '#2D2E2E',
    'Premium Black and Grey': 'linear-gradient(135deg, #2D2E2E 50%, #9A9693 50%)',
    'Modern Premium Grey': '#ABABAB',
    // Elite and Classic Premium seats
    'Elite Bright White': '#E4E5E8', // the seat is white all over; the black in the photo is the cart base
    'Premium Light Beige': '#D0BEA8', 'Premium Off White': '#E6E2DA', 'Premium Black': '#2E2D2D', 'Premium Grey': '#C1C1C1',
    'Premium Camello & Light Beige': 'linear-gradient(135deg, #AA7E5A 50%, #D7BBA2 50%)',
    'Premium Camello & Off White': 'linear-gradient(135deg, #AC7D58 50%, #E3DAD0 50%)',
    'Premium Light Beige & Off White': 'linear-gradient(135deg, #D0BEA8 50%, #E6E2DA 50%)',
    'Premium Camello (Special Promo)': '#AD8E6F',
    'Premium Black and Grey (Special Promo)': 'linear-gradient(135deg, #2A2A2A 50%, #8C8C8C 50%)',
    // High-back seats
    'High-Back Sport Black Carbon Fiber with Silver Inlay': 'linear-gradient(135deg, #2A2928 60%, #C1BFBC 60%)',
    'High-Back Luxury Honey Beige with Black Inlay': 'linear-gradient(135deg, #CF955A 60%, #1C1B1D 60%)',
    'High-Back Luxury Briar Brown': 'linear-gradient(135deg, #5A2D25 60%, #9A7C6A 60%)',
    // Premium GC seats. Tsunami: mostly black, a coloured side panel and a silver stripe (see the seat photos).
    // Bands are roughly in the photo's proportions, colour panel first so the preview shows the option's colour.
    'Tsunami Silver Red & Black': 'linear-gradient(135deg, #B83F33 40%, #36352F 40% 82%, #B5B3AC 82%)',
    'Tsunami Silver Grey & Black': 'linear-gradient(135deg, #78766F 40%, #2B2A27 40% 82%, #BDB9B0 82%)',
    'Tsunami Silver Blue & Black': 'linear-gradient(135deg, #3A3D72 40%, #363533 40% 82%, #B8B4AC 82%)',
    // GC arm-rest seats. The sheet's "GC Beige" photo is a caramel tan, so its swatch follows the photo.
    'GC White with Arm Rest': '#E8E9EC', 'GC Beige with Arm Rest': '#D9976C', 'GC Dark Brown with Arm Rest': '#765850',
    'Coffee Brown Ventilated Premium Seats': '#5A3A28' // no photo yet; approximate
};

// Canopy swatches are kept separate from seats: a beige canopy is a lighter, greyer beige than a beige seat.
// Measured from the canopies in the cart photos. CC = Club Car canopy, CN = non-Club Car canopy.
const CANOPY_COLOR_HEX = {
    'White': '#E8E8E5', 'Beige': '#C8BBA2', 'Black': '#2E302F',
    'White CC': '#E8E8E5', 'Beige CC': '#C8BBA2', 'Black CC': '#2E302F', 'Black CN': '#333436',
    'White Long Canopy': '#E8E8E5', 'Beige Long Canopy': '#C8BBA2', 'Black Long Canopy': '#2E302F'
};

// Striped and two-tone seats: the live preview paints these as vertical bands across the seat instead of
// one colour (on photos with a single bench seat).
// Read left to right off the Tsunami seat photos: black bolster, colour panel, silver stripe, black centre,
// then the same mirrored. `to` is where each band ends, as a fraction of the seat's width.
function tsunamiBands(panel, silver, black) {
    return [
        { hex: black, to: 0.12 }, { hex: panel, to: 0.3 }, { hex: silver, to: 0.38 }, { hex: black, to: 0.62 },
        { hex: silver, to: 0.7 }, { hex: panel, to: 0.88 }, { hex: black, to: 1 }
    ];
}
// Two-tone premium seats (see the seat photos): each half of the bench has a centre panel in one colour,
// framed by outer bolsters in the other.
function twoToneBands(outer, center) {
    return [
        { hex: outer, to: 0.1 }, { hex: center, to: 0.42 }, { hex: outer, to: 0.58 },
        { hex: center, to: 0.9 }, { hex: outer, to: 1 }
    ];
}
const SEAT_PATTERNS = {
    'Tsunami Silver Red & Black': tsunamiBands('#B83F33', '#B5B3AC', '#36352F'),
    'Tsunami Silver Grey & Black': tsunamiBands('#78766F', '#BDB9B0', '#2B2A27'),
    'Tsunami Silver Blue & Black': tsunamiBands('#3A3D72', '#B8B4AC', '#363533'),
    'Premium Black and Grey': twoToneBands('#2D2E2E', '#9A9693'),
    'Premium Black and Grey (Special Promo)': twoToneBands('#2A2A2A', '#8C8C8C'),
    'Premium Camello & Light Beige': twoToneBands('#AA7E5A', '#D7BBA2'),
    'Premium Camello & Off White': twoToneBands('#AC7D58', '#E3DAD0'),
    'Premium Light Beige & Off White': twoToneBands('#D0BEA8', '#E6E2DA'), // no photo; same layout assumed
    'High-Back Sport Black Carbon Fiber with Silver Inlay': twoToneBands('#2A2928', '#C1BFBC'),
    'High-Back Luxury Honey Beige with Black Inlay': twoToneBands('#CF955A', '#1C1B1D')
};

// Swatch value for a seat or canopy option
function getTrimHex(type, option) {
    if (!option) return null;
    return (type === 'canopy' ? CANOPY_COLOR_HEX[option] : TRIM_COLOR_HEX[option]) || null;
}

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
        <span class="build-chip"><span class="detail-trim-dot" style="background:${hex}"></span><span class="text-ink-2">${label}</span> <span class="text-ink font-medium">${value}</span></span>` : '';
    summary.innerHTML = pill('Body', detailBuild.body, bodyHex)
        + pill('Seat', detailBuild.seat, getTrimHex('seat', detailBuild.seat))
        + pill('Canopy', detailBuild.canopy, getTrimHex('canopy', detailBuild.canopy));
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
        seat: getTrimHex('seat', detailBuild.seat),
        seatBands: SEAT_PATTERNS[detailBuild.seat] || null,
        canopy: getTrimHex('canopy', detailBuild.canopy)
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
    if (type === 'seat') updateSeatPhoto(value);
    updateDetailBuildSummary();
}

// Shows the real photo(s) of the chosen seat under the seat picker; hidden when the seat has no photo
function updateSeatPhoto(value) {
    const panel = document.getElementById('detail-seat-photo');
    if (!panel) return;
    const product = PRODUCTS_DATA.find(p => p.slug === currentSlug);
    const family = product && COLOR_FAMILIES[product.colorFamily];
    const photos = getSeatPhotos(family && family.seatGroups, value);
    panel.classList.toggle('hidden', !photos.length);
    if (!photos.length) return;
    const labels = photos.length > 1 ? ['Front seat', 'Rear seat'] : [''];
    panel.querySelector('.seat-photo-grid').innerHTML = photos.map((src, i) => `
        <figure class="seat-photo">
            <img src="${src}" alt="${value}${labels[i] ? ' ' + labels[i].toLowerCase() : ''}" loading="lazy">
            ${labels[i] ? `<figcaption>${labels[i]}</figcaption>` : ''}
        </figure>
    `).join('');
    panel.querySelector('.seat-photo-name').textContent = value;
}

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

    document.querySelectorAll('.detail-swatch').forEach((el, i) => {
        el.classList.toggle('detail-swatch-active', i === index);
        el.setAttribute('aria-checked', String(i === index));
    });
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
    if (target) target.scrollIntoView({ behavior: scrollBehavior(), block: 'start' });
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
        if (label) label.textContent = on ? 'Added' : 'Add';
    }
    updateBuildSummaryLine();
}

function selectBuildRims(choice) {
    detailBuild.rims = choice;
    document.querySelectorAll('[data-rims]').forEach(b => {
        b.classList.toggle('detail-trim-active', b.dataset.rims === choice);
        b.setAttribute('aria-pressed', String(b.dataset.rims === choice));
    });
    updateBuildSummaryLine();
}

// Splits a spec like "100 km per charge" into a big number, a unit, and a small trailing note
// for the Apple-style stat strip. Values that don't start with a number are shown whole.
function splitStatValue(value) {
    const match = String(value).match(/^([\d.]+(?:\s*[–-]\s*[\d.]+)?)\s*([A-Za-z\/]+)?\s*(.*)$/);
    if (!match) return { number: value, unit: '', note: '' };
    return { number: match[1], unit: (match[2] || '').toLowerCase(), note: match[3] || '' };
}

// Model tile: studio cutout on stone, the name set large, one line of specs. Used by the homepage range,
// related models and the cart list.
function renderModelTile(p, { eager = false } = {}) {
    const isVehicle = p.category !== 'Accessories';
    return `
        <a href="${routeHref('product-details', p.slug)}" data-route="product-details" data-slug="${p.slug}" class="group block h-full">
            <div class="media-zoom bg-stone aspect-[4/3] flex items-center justify-center p-6 lg:p-10">
                <img src="${p.image}" alt="${p.name}${isVehicle ? `, ${categoryLabel(p.category)}` : ''}" loading="${eager ? 'eager' : 'lazy'}" decoding="async" class="max-h-full w-auto object-contain">
            </div>
            <div class="pt-5 pb-2 pr-4">
                <p class="${isVehicle ? 'type-lg' : 'type-md'} text-ink">${p.name}</p>
                <p class="text-sm text-mute mt-2">${isVehicle ? homeSpecLine(p) : (p.tagline || categoryLabel(p.category))}</p>
            </div>
        </a>`;
}

// Build comparison table (pillar pages): one column per build, inclusions as rows
function renderBuildCompareTable(buildSet) {
    const rowsMax = Math.max(...buildSet.builds.map(b => b.includes.length));
    return `
        <div class="overflow-x-auto border-y border-line">
            <table class="w-full min-w-[560px] text-left">
                <thead>
                    <tr class="border-b border-line">
                        ${buildSet.builds.map(b => `
                            <th scope="col" class="py-6 pr-6 align-top font-normal">
                                <p class="type-md text-ink">${b.name}</p>
                                <p class="text-sm text-mute mt-1">${b.tagline}</p>
                            </th>`).join('')}
                    </tr>
                </thead>
                <tbody>
                    ${Array.from({ length: rowsMax }, (_, r) => `
                        <tr class="border-b border-line">
                            ${buildSet.builds.map(b => `<td class="py-3 pr-6 text-[0.9375rem]">${b.includes[r] || ''}</td>`).join('')}
                        </tr>`).join('')}
                    <tr>
                        ${buildSet.builds.map(b => `<td class="py-4 pr-6 text-sm text-mute align-top">${b.note || ''}</td>`).join('')}
                    </tr>
                </tbody>
            </table>
        </div>`;
}

function renderBuildSection(product, buildSet, packageKeys) {
    return `
        <section id="build" class="detail-section rise scroll-mt-32 home-section max-w-site mx-auto px-5 sm:px-8 lg:px-12">
            <div class="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-12">
                <h2 class="type-xl text-ink lg:col-span-7">${buildSet.title}</h2>
                ${buildSet.note ? `<p class="measure lg:col-span-5">${buildSet.note}</p>` : ''}
            </div>

            <div class="grid grid-cols-1 md:grid-cols-${buildSet.builds.length} gap-4" role="radiogroup" aria-label="Build level">
                ${buildSet.builds.map((b, i) => `
                    <button type="button" role="radio" aria-checked="${i === 0}" onclick="selectBuildLevel('${b.id}')" data-build="${b.id}" class="build-card ${i === 0 ? 'build-card-active' : ''} text-left p-6 lg:p-8 flex flex-col gap-5">
                        <span class="flex items-start justify-between gap-4">
                            <span>
                                <span class="block type-md text-ink">${product.name} ${b.name}</span>
                                <span class="block text-sm text-mute mt-1">${b.tagline}</span>
                            </span>
                            <span class="build-card-check" aria-hidden="true"></span>
                        </span>
                        <ul class="home-list text-[0.9375rem]">
                            ${b.includes.map(x => `<li>${x}</li>`).join('')}
                        </ul>
                        ${b.note ? `<span class="block text-sm text-mute mt-auto">${b.note}</span>` : ''}
                        ${b.proposed ? '<span class="block text-sm text-green-text font-medium">Proposed package, confirmed in your quote</span>' : ''}
                    </button>
                `).join('')}
            </div>

            ${packageKeys.length ? `
                <div class="mt-16 space-y-5">
                    <h3 class="type-md text-ink">Add packages</h3>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${Math.min(packageKeys.length, 4)} gap-4">
                        ${packageKeys.map(key => {
                            const pkg = BUILD_PACKAGES[key];
                            if (pkg.choices) {
                                return `
                                    <div class="build-package p-5 space-y-3">
                                        <p class="font-semibold text-ink">${pkg.name}</p>
                                        <div class="flex flex-wrap gap-2" role="group" aria-label="${pkg.name}">
                                            ${pkg.choices.map((c, i) => `<button type="button" onclick="selectBuildRims('${c}')" data-rims="${c}" aria-pressed="${i === 0}" class="detail-trim ${i === 0 ? 'detail-trim-active' : ''}">${c}</button>`).join('')}
                                        </div>
                                        <p class="text-sm text-mute">${pkg.detail}</p>
                                    </div>`;
                            }
                            return `
                                <button type="button" onclick="toggleBuildPackage('${key}')" data-package="${key}" aria-pressed="false" class="build-package text-left p-5 space-y-2">
                                    <span class="flex items-center justify-between gap-3">
                                        <span class="font-semibold text-ink">${pkg.name}</span>
                                        <span class="build-package-toggle text-sm font-medium text-green-text">Add</span>
                                    </span>
                                    <span class="block text-sm text-mute">${pkg.detail}</span>
                                </button>`;
                        }).join('')}
                    </div>
                    <p class="text-sm text-mute">Packages and upgrades are paid add-ons, offered only for approved model and component combinations.</p>
                </div>
            ` : ''}

            <div class="mt-16 bg-ink text-paper p-6 sm:p-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <p class="text-sm text-[#B9BAB3]">Your build</p>
                    <p id="build-summary-line" class="type-md mt-2" aria-live="polite"></p>
                    <p class="text-sm text-[#B9BAB3] mt-3 measure">Choose colors next, then send it to us. We confirm inclusions, pricing and availability in the quote.</p>
                </div>
                <div class="flex flex-wrap gap-3 flex-shrink-0">
                    <button type="button" onclick="scrollToDetailSection('colors')" class="btn btn-primary">Choose colors</button>
                    <button type="button" onclick="requestQuoteInColor()" class="btn btn-on-dark">Get a quote</button>
                </div>
            </div>
            ${buildSet.confirmed ? '' : '<p class="text-sm text-mute mt-4">Build names and package contents are proposed and may change.</p>'}
        </section>
    `;
}

function showDetailImage(button, src) {
    const img = document.getElementById('detail-main-img');
    if (img) img.src = src;
    document.querySelectorAll('.gallery-thumb').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
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

    // The four figures buyers compare first
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
        { id: 'specifications', label: 'Specifications' }
    ];

    setTimeout(initDetailTabs, 50);

    return `
        <!-- Section bar: model name, section links and the quote action -->
        <nav class="model-subnav" aria-label="${product.name} sections">
            <div class="max-w-site mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between gap-6">
                <span class="hidden md:block font-display text-xl text-ink whitespace-nowrap">${product.name}</span>
                <div class="flex items-center -ml-3 md:ml-0 overflow-x-auto scrollbar-none">
                    ${tabs.map((t, i) => `<button type="button" onclick="scrollToDetailSection('${t.id}')" data-target="${t.id}" class="detail-tab ${i === 0 ? 'detail-tab-active' : ''}">${t.label}</button>`).join('')}
                </div>
                <button type="button" onclick="openQuoteModal('${safeName}')" class="hidden sm:inline-flex btn btn-primary min-h-[2.5rem] px-5 text-sm flex-shrink-0">Get a quote</button>
            </div>
        </nav>

        <!-- Hero: the model name set large beside a big studio shot -->
        <section id="overview" class="detail-section scroll-mt-32 bg-stone">
            <div class="max-w-site mx-auto px-5 sm:px-8 lg:px-12 pt-8 pb-12 lg:pb-16 grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
                <div class="lg:col-span-5 lg:pb-10 space-y-6 order-2 lg:order-1">
                    <a href="${routeHref('products')}" data-route="products" class="text-sm text-ink-2 hover:text-ink">All carts</a>
                    <p class="text-sm text-ink-2">${categoryLabel(product.category)}${product.heroProduct ? ' · our bestseller' : ''}</p>
                    <h1 class="type-hero text-ink">${product.name}</h1>
                    <p class="text-xl text-ink-2 measure">${product.tagline}</p>
                    <p class="text-sm text-ink-2">${product.priceLabel === 'Inquire for Price' || !product.priceLabel ? 'Price on request' : product.priceLabel}</p>
                    <div class="flex flex-wrap items-center gap-4 pt-2">
                        ${buildSet
                            ? `<button type="button" onclick="scrollToDetailSection('build')" class="btn btn-primary">Build your ${product.name}</button>
                               <button type="button" onclick="openQuoteModal('${safeName}')" class="btn btn-outline">Get a quote</button>`
                            : `<button type="button" onclick="openQuoteModal('${safeName}')" class="btn btn-primary">Get a quote</button>`}
                    </div>
                </div>
                <div class="lg:col-span-7 order-1 lg:order-2">
                    <div class="aspect-[4/3] overflow-hidden flex items-center justify-center">
                        <img id="detail-main-img" src="${product.image}" alt="${product.name}" fetchpriority="high" class="max-h-full w-auto object-contain">
                    </div>
                    ${product.gallery.length > 1 ? `
                        <div class="flex gap-2 justify-end" role="group" aria-label="Views">
                            ${product.gallery.map((img, i) => `
                                <button type="button" onclick="showDetailImage(this, '${img}')" aria-pressed="${i === 0}" aria-label="View ${i + 1} of ${product.gallery.length}" class="gallery-thumb">
                                    <img src="${img}" alt="" loading="lazy" class="w-full h-full object-contain">
                                </button>
                            `).join('')}
                        </div>
                    ` : ''}
                </div>
            </div>
        </section>

        <div class="max-w-site mx-auto px-5 sm:px-8 lg:px-12">
            ${stats.length ? `
                <dl class="stat-strip" style="--stat-cols:${stats.length}">
                    ${stats.map(s => `
                        <div>
                            <dt class="text-sm text-mute">${s.label}</dt>
                            <dd class="mt-3 text-ink font-display leading-none"><span class="text-[clamp(2.5rem,1.8rem+2.4vw,4.5rem)] tracking-[-0.03em]">${s.number}</span>${s.unit ? `<span class="text-xl ml-1">${s.unit}</span>` : ''}</dd>
                            ${s.note ? `<dd class="text-sm text-mute mt-2">${s.note}</dd>` : ''}
                        </div>
                    `).join('')}
                </dl>
            ` : ''}

            <div class="rise home-section grid lg:grid-cols-12 gap-10 lg:gap-12">
                <p class="lg:col-span-8 type-lg text-mute"><span class="text-ink">${product.name}.</span> ${product.description}</p>
                ${isVehicle ? `
                    <dl class="lg:col-span-4 space-y-6 lg:pt-3">
                        ${[{ label: 'Powertrain', value: product.powertrain }, { label: 'Battery', value: product.battery }]
                            .filter(h => isMeaningful(h.value)).map(h => `
                            <div class="border-t border-line pt-4">
                                <dt class="text-sm text-mute">${h.label}</dt>
                                <dd class="text-lg text-ink mt-1">${h.value}</dd>
                            </div>
                        `).join('')}
                    </dl>
                ` : (product.gallery[1] ? `
                    <div class="lg:col-span-4 bg-stone aspect-square flex items-center justify-center p-8">
                        <img src="${product.gallery[1]}" alt="${product.name}, another view" loading="lazy" class="max-h-full object-contain">
                    </div>` : '')}
            </div>
        </div>

        ${buildSet ? `<div class="border-t border-line">${renderBuildSection(product, buildSet, packageKeys)}</div>` : ''}

        ${isVehicle ? `
        <!-- Colors: the preview stays pinned on desktop while the pickers scroll past it -->
        <section id="colors" class="detail-section rise scroll-mt-32 home-section border-t border-line">
            <div class="max-w-site mx-auto px-5 sm:px-8 lg:px-12">
                <h2 class="type-xl text-ink mb-12">${bodyColors.length ? 'Your color. Your seat.' : 'Make it yours.'}</h2>
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
                    <div class="lg:col-span-7 lg:sticky lg:top-36">
                        <div class="relative bg-stone px-4 sm:px-8 py-8">
                            <div class="relative aspect-[4/3] overflow-hidden flex items-center justify-center">
                                <img id="detail-color-img" src="${startColor && startColor.image ? startColor.image : product.image}" alt="${product.name} color preview" class="w-full h-full object-contain">
                            </div>
                            <p id="detail-color-photo-note" class="${startColor && !startColor.image ? '' : 'hidden'} text-sm text-ink-2 mt-2">Photo shows a standard finish</p>
                            <!-- Live summary of the selected body / seat / canopy colors -->
                            <div id="detail-build-summary" class="flex flex-wrap gap-x-6 gap-y-2 border-t border-line pt-4 mt-4" aria-live="polite"></div>
                        </div>
                    </div>

                    <div class="lg:col-span-5 space-y-10">
                        <div class="space-y-5">
                            ${bodyColors.length ? `
                                <p class="text-lg text-ink">Body color: <span id="detail-color-name" class="font-semibold">${startColor.name}</span></p>
                                ${(() => {
                                    let idx = 0;
                                    return colorFamily.body.map(group => `
                                        <div class="space-y-3">
                                            <p class="text-sm text-mute">${group.tier}</p>
                                            <div class="flex flex-wrap gap-3" role="radiogroup" aria-label="${group.tier}">
                                                ${group.colors.map(c => {
                                                    const i = idx++;
                                                    return `<button type="button" role="radio" aria-checked="${i === startColorIdx}" onclick="selectDetailColor(${i})" title="${c.name}" aria-label="${c.name}" class="detail-swatch ${i === startColorIdx ? 'detail-swatch-active' : ''}" style="background:${c.hex}"></button>`;
                                                }).join('')}
                                            </div>
                                        </div>
                                    `).join('');
                                })()}
                                <p class="text-sm text-mute">Swatches are approximate screen colors. We confirm the final finish with you.</p>
                            ` : `
                                <p class="text-lg text-ink">Body color</p>
                                <p class="measure">Body colors for the ${product.name} are confirmed per order. Ask for a quote and we'll send the current options.</p>
                            `}
                        </div>

                        ${[
                            { type: 'seat', title: 'Seat color', groups: seatGroups },
                            { type: 'canopy', title: 'Canopy color', groups: canopyOptions.length ? [{ tier: null, options: canopyOptions }] : [] }
                        ].filter(t => t.groups.length).map(t => `
                            <div class="space-y-4 border-t border-line pt-8">
                                <p class="text-lg text-ink">${t.title}: <span id="detail-${t.type}-name" class="font-semibold">Standard</span></p>
                                ${t.groups.map(group => `
                                    <div class="space-y-3">
                                        ${group.tier && t.groups.length > 1 ? `<p class="text-sm text-mute">${group.tier}</p>` : ''}
                                        <div class="flex flex-wrap gap-2" role="group" aria-label="${group.tier || t.title}">
                                            ${group.options.map(opt => `
                                                <button type="button" onclick="selectDetailTrim('${t.type}', '${opt}')" data-type="${t.type}" data-value="${opt}" aria-pressed="false" class="detail-trim">
                                                    <span class="detail-trim-dot" style="background:${getTrimHex(t.type, opt) || '#D6D6CE'}"></span>${opt}
                                                </button>
                                            `).join('')}
                                        </div>
                                    </div>
                                `).join('')}
                                ${t.type === 'seat' && seatGroups === CLUB_CAR_SEAT_GROUPS ? `
                                    <div id="detail-seat-photo" class="seat-photo-panel hidden" aria-live="polite">
                                        <p class="text-sm text-mute">Seat photo: <span class="seat-photo-name text-ink"></span></p>
                                        <div class="seat-photo-grid"></div>
                                    </div>
                                ` : ''}
                            </div>
                        `).join('')}

                        ${seatOptions.length || canopyOptions.length ? `
                            <p class="text-sm text-ink-2 border-l-2 border-green pl-4">Seat and canopy combinations vary by model. Choose your preferred options and we'll confirm them in your quote.</p>
                        ` : ''}

                        <div class="flex flex-wrap gap-3">
                            <button type="button" id="detail-color-quote" onclick="requestQuoteInColor()" class="btn btn-primary">${bodyColors.length || canopyOptions.length ? 'Get a quote for this build' : 'Get a quote'}</button>
                            ${accessoryCount ? `<button type="button" onclick="addAccessoriesFromDetail()" class="btn btn-outline">Add accessories <span class="font-normal text-mute">(${accessoryCount})</span></button>` : ''}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        ` : ''}

        <section id="features" class="detail-section rise scroll-mt-32 home-section border-t border-line">
            <div class="max-w-site mx-auto px-5 sm:px-8 lg:px-12 grid lg:grid-cols-12 gap-10 lg:gap-12">
                <h2 class="type-xl text-ink lg:col-span-4">Highlights.</h2>
                <ol class="lg:col-span-8 border-b border-line">
                    ${product.features.map((f, i) => `
                        <li class="grid grid-cols-[3rem_1fr] gap-4 py-6 border-t border-line">
                            <span class="text-sm text-mute pt-1.5">0${i + 1}</span>
                            <span class="type-md text-ink">${f}</span>
                        </li>
                    `).join('')}
                </ol>
            </div>
        </section>

        <section id="specifications" class="detail-section rise scroll-mt-32 home-section border-t border-line">
            <div class="max-w-site mx-auto px-5 sm:px-8 lg:px-12">
                <h2 class="type-xl text-ink mb-12">Specifications.</h2>
                <div class="border-b border-line">
                    ${specGroups.map(g => `
                        <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 py-8 border-t border-line">
                            <h3 class="lg:col-span-4 type-md text-ink">${g.title}</h3>
                            <dl class="lg:col-span-8">
                                ${g.rows.map(([k, v]) => `
                                    <div class="grid grid-cols-2 gap-6 py-3 border-b border-line last:border-0">
                                        <dt class="text-mute">${k}</dt>
                                        <dd class="text-ink">${v}</dd>
                                    </div>
                                `).join('')}
                            </dl>
                        </div>
                    `).join('')}
                </div>
                <p class="text-sm text-mute mt-6">Specifications may change without notice. Actual range varies with load, terrain and driving.</p>
            </div>
        </section>

        <section class="rise bg-ink text-paper">
            <div class="max-w-site mx-auto px-5 sm:px-8 lg:px-12 py-24 lg:py-32 grid lg:grid-cols-12 gap-8 items-end">
                <h2 class="type-xl lg:col-span-7">Make it yours.</h2>
                <div class="lg:col-span-5 space-y-6">
                    <p class="text-[#B9BAB3] measure">Pricing, lead times and customization for the ${product.name}, from your nearest branch.</p>
                    <div class="flex flex-wrap gap-3">
                        <button type="button" onclick="openQuoteModal('${safeName}')" class="btn btn-primary">Get a quote</button>
                        <button type="button" onclick="goToHomeSection('home-branches')" class="btn btn-on-dark">Find a branch</button>
                    </div>
                </div>
            </div>
        </section>

        ${related.length ? `
        <section class="home-section">
            <div class="max-w-site mx-auto px-5 sm:px-8 lg:px-12">
                <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                    <h2 class="type-lg text-ink">More from ${categoryLabel(product.category)}.</h2>
                    <a href="${routeHref('products')}" onclick="event.preventDefault(); setCategoryAndNavigate('${product.category}')" class="link self-start md:self-auto">See all</a>
                </div>
                <ul class="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
                    ${related.map(p => `<li>${renderModelTile(p)}</li>`).join('')}
                </ul>
            </div>
        </section>
        ` : ''}
    `;
}

function renderSegmentModelCard(segmentId, subId, modelKey) {
    const model = VEHICLE_MODELS[modelKey];
    const product = model.slug ? PRODUCTS_DATA.find(p => p.slug === model.slug) : null;
    const quoteRef = (product ? product.slug : model.name).replace(/'/g, "\\'");
    const isReman = segmentId === 'remanufactured';

    return `
        <div id="${modelAnchorId(segmentId, subId, modelKey)}" class="flex flex-col scroll-mt-40">
            <div class="${product ? 'media-zoom' : ''} relative overflow-hidden bg-stone aspect-[4/3] flex items-center justify-center p-6">
                ${model.image
                    ? `<img src="${model.image}" alt="${model.name}" loading="lazy" decoding="async" class="max-h-full w-auto object-contain">`
                    : '<span class="text-sm text-ink-2">Photo to follow</span>'}
            </div>
            <div class="pt-5 flex flex-col gap-2 flex-1">
                <h3 class="type-md text-ink">${model.name}${model.badge ? ` <span class="font-sans text-sm text-green-text align-middle">${model.badge}</span>` : ''}</h3>
                ${product ? `<p class="text-[0.9375rem]">${product.tagline}</p>` : ''}
                ${product && product.buildSet ? `<p class="text-sm text-mute">${BUILD_SETS[product.buildSet].builds.map(b => b.name).join(' · ')}</p>` : ''}
                ${isReman ? '<p class="text-sm text-mute">Ask for current units, rebuild scope and warranty.</p>' : ''}
                <div class="mt-auto pt-3 flex flex-wrap items-center gap-x-6 gap-y-2">
                    ${product ? `<a href="${routeHref('product-details', product.slug)}" data-route="product-details" data-slug="${product.slug}" class="link text-sm">${product.buildSet ? 'Build and price' : 'See details'}</a>` : ''}
                    <button type="button" onclick="openQuoteModal('${quoteRef}')" class="link text-sm">${isReman ? 'Check availability' : 'Get a quote'}</button>
                </div>
            </div>
        </div>
    `;
}

// Business enquiry prompt (Guest Transportation, Fit-to-Task): leads to the fleet proposal form
function renderEnquiryPrompt(text) {
    return `
        <div class="bg-ink text-paper p-6 sm:p-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <p class="type-md max-w-2xl">${text}</p>
            <a href="${routeHref('solutions')}" data-route="solutions" class="btn btn-primary flex-shrink-0">Request a fleet proposal</a>
        </div>`;
}

function renderSegmentPage() {
    const segment = NAV_SEGMENTS.find(s => s.id === currentSlug) || NAV_SEGMENTS[0];
    const buildSet = BUILD_SETS[segment.buildSet];
    const photo = HOME_USES[segment.id];
    const jumpLinks = [
        ...(segment.subcategories.length > 1 ? segment.subcategories.map(sub => ({ label: sub.label, anchor: sub.id })) : []),
        ...(segment.links || []).map(l => ({ label: l.label, anchor: l.anchor }))
    ];

    return `
        <section class="max-w-site mx-auto px-5 sm:px-8 lg:px-12 pt-16 lg:pt-24">
            <p class="text-sm text-mute">${segment.label}</p>
            <div class="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end mt-4">
                <h1 class="type-xl text-ink lg:col-span-7">${segment.tagline}</h1>
                <div class="lg:col-span-5 space-y-6">
                    <p class="measure">${segment.description}</p>
                    ${jumpLinks.length ? `<ul class="flex flex-wrap gap-x-6 gap-y-2">${jumpLinks.map(l => `<li><button type="button" onclick="openSegment('${segment.id}', '${segment.id}-${l.anchor}')" class="link text-sm">${l.label}</button></li>`).join('')}</ul>` : ''}
                </div>
            </div>
            <div class="mt-12 ${photo ? 'aspect-[16/9] md:aspect-[21/9] overflow-hidden' : 'bg-stone overflow-hidden aspect-[16/9] md:aspect-[21/9] flex items-center justify-center p-8'}">
                <img src="${photo ? photo.image : segment.image}" alt="${photo ? photo.alt : segment.label}" fetchpriority="high" class="${photo ? 'w-full h-full object-cover' : 'max-h-full w-auto object-contain'}">
            </div>
        </section>

        ${segment.subcategories.map(sub => `
            <section id="${segment.id}-${sub.id}" class="home-section scroll-mt-20 max-w-site mx-auto px-5 sm:px-8 lg:px-12">
                <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-line pb-6 mb-10">
                    <h2 class="type-lg text-ink">${sub.label}</h2>
                    ${sub.intro ? `<p class="measure md:text-right md:max-w-md">${sub.intro}</p>` : ''}
                </div>
                ${sub.groups.map(group => `
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
                        ${group.items.map(key => renderSegmentModelCard(segment.id, sub.id, key)).join('')}
                    </div>
                `).join('')}
                ${sub.enquiry ? `<div class="mt-14">${renderEnquiryPrompt(sub.enquiry)}</div>` : ''}
            </section>
        `).join('')}

        ${buildSet ? `
            <section id="${segment.id}-compare" class="home-section pt-0 scroll-mt-20 max-w-site mx-auto px-5 sm:px-8 lg:px-12">
                <div class="grid lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-10">
                    <h2 class="type-lg text-ink lg:col-span-7">Compare ${buildSet.builds.map(b => b.name).join(', ')}.</h2>
                    <p class="measure lg:col-span-5">${segment.id === 'golfer'
                        ? 'Golfer, Scratch and Pro apply across Tempo 2, Tempo 2+2 and Tempo 4. Shown for Tempo 2 and Tempo 4; Tempo 2+2 builds are on its page.'
                        : 'Shown for every lifestyle model. Exact inclusions per model are confirmed in your quote.'}</p>
                </div>
                ${renderBuildCompareTable(buildSet)}
                ${buildSet.confirmed ? '' : '<p class="text-sm text-mute mt-4">Build names and package contents are proposed and may change.</p>'}
            </section>
        ` : ''}

        ${segment.id === 'lifestyle' ? `
            <section id="lifestyle-lifted" class="bg-stone scroll-mt-20">
                <div class="max-w-site mx-auto px-5 sm:px-8 lg:px-12 py-24 lg:py-32 grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                    <div class="lg:col-span-5 space-y-6">
                        <p class="text-sm text-ink-2">Lifted package</p>
                        <h2 class="type-xl text-ink">Ready for rougher ground.</h2>
                        <p class="measure text-ink-2">A lift kit with optional bull bar, nerf bars or side steps, and 10-, 12- or 14-inch rims, with tires chosen for the surface you drive on.</p>
                        <p class="text-sm text-ink-2">Offered only for approved model and component combinations. Private-use configurations are not approved for public roads.</p>
                        <a href="${routeHref('product-details', 'lifestyle-tempo-2-2')}" data-route="product-details" data-slug="lifestyle-tempo-2-2" class="btn btn-primary">Build a lifted Tempo 2+2</a>
                    </div>
                    <div class="lg:col-span-7">
                        <img src="image/Products/Tempo 2+2 - Lifted.png" alt="Tempo 2+2 with the lifted package" loading="lazy" class="w-full aspect-[4/3] object-contain">
                    </div>
                </div>
            </section>
        ` : ''}
    `;
}

// FLEET SOLUTIONS: separate enquiry route for golf-course and commercial buyers (blueprint 07)
function handleFleetProposalSubmit(e) {
    e.preventDefault();
    e.target.reset();
    showToast("Request sent. Our fleet team will contact you to prepare your proposal.");
}

function renderSolutionsPage() {
    const services = [
        { title: 'Fleet selection', text: 'Models and quantities chosen around your utilization, routes and operating hours.' },
        { title: 'Service planning', text: 'Preventive maintenance, parts and charging plans that keep the fleet running.' },
        { title: 'Replacement planning', text: 'Renewals and trade-ins scheduled before downtime reaches your operation.' }
    ];

    return `
        <section class="max-w-site mx-auto px-5 sm:px-8 lg:px-12 pt-16 lg:pt-24">
            <p class="text-sm text-mute">Fleet solutions</p>
            <div class="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end mt-4">
                <h1 class="type-xl text-ink lg:col-span-7">Fleets for courses, resorts and sites.</h1>
                <p class="measure lg:col-span-5">Tell us how your operation runs. We'll recommend the vehicles, the service plan and the replacement schedule.</p>
            </div>
            <div class="mt-12 aspect-[16/9] md:aspect-[21/9] overflow-hidden">
                <img src="image/Banners/industrial.jpg" alt="Utility carts at an industrial site" fetchpriority="high" class="w-full h-full object-cover">
            </div>
        </section>

        <section class="home-section max-w-site mx-auto px-5 sm:px-8 lg:px-12">
            <ol class="grid md:grid-cols-3 gap-x-8 border-t border-line">
                ${services.map((s, i) => `
                    <li class="pt-6 pb-10 border-b border-line md:border-b-0 space-y-3">
                        <p class="text-sm text-mute">0${i + 1}</p>
                        <h2 class="type-md text-ink">${s.title}</h2>
                        <p class="measure">${s.text}</p>
                    </li>
                `).join('')}
            </ol>
        </section>

        <section id="fleet-proposal" class="home-section bg-stone scroll-mt-20" aria-labelledby="fleet-proposal-title">
            <div class="max-w-site mx-auto px-5 sm:px-8 lg:px-12 grid lg:grid-cols-12 gap-12">
                <div class="lg:col-span-4 space-y-5">
                    <h2 id="fleet-proposal-title" class="type-xl text-ink">Request a fleet proposal.</h2>
                    <p class="measure text-ink-2">Share unit numbers, how the fleet will be used and what you need help with. We'll prepare a proposal for your property.</p>
                    <p class="text-sm text-ink-2">Financing or payment options are presented only when approved.</p>
                </div>
                <form onsubmit="handleFleetProposalSubmit(event)" class="lg:col-span-7 lg:col-start-6 grid sm:grid-cols-2 gap-x-6 gap-y-5">
                    <div class="field"><label for="fp-company">Company or property</label><input id="fp-company" required type="text" autocomplete="organization"></div>
                    <div class="field"><label for="fp-contact">Contact person and position</label><input id="fp-contact" required type="text" autocomplete="name"></div>
                    <div class="field"><label for="fp-email">Email</label><input id="fp-email" required type="email" autocomplete="email"></div>
                    <div class="field"><label for="fp-phone">Mobile number</label><input id="fp-phone" required type="tel" autocomplete="tel" placeholder="+63 900 000 0000"></div>
                    <div class="field"><label for="fp-type">Operation</label>
                        <select id="fp-type" required>
                            <option value="">Select one</option>
                            <option>Golf course</option>
                            <option>Resort or hotel</option>
                            <option>Commercial or industrial property</option>
                            <option>Township or estate</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div class="field"><label for="fp-units">Estimated units</label><input id="fp-units" type="number" min="1" placeholder="20"></div>
                    <fieldset class="sm:col-span-2">
                        <legend class="text-sm font-medium text-ink mb-3">I need help with</legend>
                        <div class="flex flex-wrap gap-2">
                            ${['Fleet selection', 'Service planning', 'Replacement planning', 'Fit-to-task builds'].map(o => `<label class="detail-trim cursor-pointer !pl-3"><input type="checkbox" class="w-4 h-4 accent-[#151714]"> ${o}</label>`).join('')}
                        </div>
                    </fieldset>
                    <div class="field sm:col-span-2"><label for="fp-notes">Passenger demand, routes, terrain and operating hours</label><textarea id="fp-notes" rows="4"></textarea></div>
                    <div class="sm:col-span-2"><button type="submit" class="btn btn-primary">Send request</button></div>
                </form>
            </div>
        </section>
    `;
}

function handleServiceRequestSubmit(e) {
    e.preventDefault();
    e.target.reset();
    showToast(`Request sent. Your reference is SRV-${Math.floor(1000 + Math.random() * 9000)}.`);
}

function renderServicePage() {
    const checks = [
        { title: 'Performance', desc: 'Overall power, responsiveness and efficiency.' },
        { title: 'Brakes', desc: 'Brake components inspected for safe, responsive stopping.' },
        { title: 'Suspension', desc: 'Shocks and struts checked for stability and a smooth ride.' },
        { title: 'Battery', desc: 'Charge, terminal connections and overall condition.' },
        { title: 'Wheel alignment', desc: 'Wheel angles set for straight tracking and even tire wear.' },
        { title: 'Tires and wheels', desc: 'Tread depth, tire condition and rim integrity.' },
        { title: 'Lubrication', desc: 'Drive components lubricated to reduce friction and wear.' }
    ];

    return `
        <section class="relative">
            <img src="image/Hero/hero-3.webp" alt="Golfcarts.ph technician working on a cart" fetchpriority="high" class="w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] object-cover">
        </section>

        <section class="max-w-site mx-auto px-5 sm:px-8 lg:px-12 pt-16 lg:pt-24">
                        <div class="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end mt-4">
                <h1 class="type-xl text-ink lg:col-span-7">Service, parts and support.</h1>
                <div class="lg:col-span-5 space-y-6">
                    <p class="measure">Preventive maintenance, repairs, original parts and battery checks from our service team, at our branches or on site.</p>
                    <div class="flex flex-wrap gap-3">
                        <button type="button" onclick="scrollToDetailSection('service-request')" class="btn btn-primary">Book a service</button>
                        <button type="button" onclick="goToHomeSection('home-branches')" class="btn btn-outline">Find a branch</button>
                    </div>
                </div>
            </div>
        </section>

        <section class="home-section max-w-site mx-auto px-5 sm:px-8 lg:px-12 grid lg:grid-cols-12 gap-10 lg:gap-12">
            <div class="lg:col-span-4 space-y-4">
                <h2 class="type-lg text-ink">Seven-point preventive maintenance.</h2>
                <p class="measure">Every scheduled service covers the same seven checks, to keep carts and fleets on the road for longer.</p>
            </div>
            <ol class="lg:col-span-8 border-b border-line">
                ${checks.map((c, i) => `
                    <li class="grid grid-cols-[3rem_1fr] md:grid-cols-[3rem_14rem_1fr] gap-x-4 gap-y-1 py-6 border-t border-line">
                        <span class="text-sm text-mute pt-1">0${i + 1}</span>
                        <span class="type-md text-ink">${c.title}</span>
                        <span class="col-start-2 md:col-start-3 md:pt-1">${c.desc}</span>
                    </li>
                `).join('')}
            </ol>
        </section>

        <section id="service-request" class="home-section bg-stone scroll-mt-20" aria-labelledby="service-request-title">
            <div class="max-w-site mx-auto px-5 sm:px-8 lg:px-12 grid lg:grid-cols-12 gap-12">
                <div class="lg:col-span-4 space-y-5">
                    <h2 id="service-request-title" class="type-xl text-ink">Book a service.</h2>
                    <p class="measure text-ink-2">Tell us what the cart needs. We'll confirm a schedule with you.</p>
                </div>
                <form onsubmit="handleServiceRequestSubmit(event)" class="lg:col-span-7 lg:col-start-6 grid sm:grid-cols-2 gap-x-6 gap-y-5">
                    <div class="field"><label for="sr-name">Name</label><input id="sr-name" required type="text" autocomplete="name"></div>
                    <div class="field"><label for="sr-org">Club, resort or company</label><input id="sr-org" required type="text" autocomplete="organization"></div>
                    <div class="field"><label for="sr-phone">Mobile number</label><input id="sr-phone" required type="tel" autocomplete="tel" placeholder="+63 900 000 0000"></div>
                    <div class="field"><label for="sr-branch">Nearest branch</label>
                        <select id="sr-branch">${BRANCHES.map(b => `<option>${b.name}</option>`).join('')}</select>
                    </div>
                    <div class="field sm:col-span-2"><label for="sr-type">Service</label>
                        <select id="sr-type">
                            <option>Preventive maintenance (seven-point check)</option>
                            <option>On-site technician repair</option>
                            <option>Parts request</option>
                            <option>Lithium battery health check</option>
                            <option>Maintenance and charging advice</option>
                            <option>Warranty enquiry</option>
                        </select>
                    </div>
                    <div class="sm:col-span-2"><button type="submit" class="btn btn-primary">Send request</button></div>
                </form>
            </div>
        </section>
    `;
}

function renderBlogsPage() {
    const posts = [...BLOGS_DATA].sort((a, b) => new Date(b.date) - new Date(a.date));
    return `
        <section class="max-w-site mx-auto px-5 sm:px-8 lg:px-12 pt-16 lg:pt-24">
            <div class="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
                <h1 class="type-xl text-ink lg:col-span-7">Notes from the fairway.</h1>
                <p class="measure lg:col-span-5">Buying guides, maintenance tips and stories about low-speed electric vehicles.</p>
            </div>
        </section>

        <section class="home-section max-w-site mx-auto px-5 sm:px-8 lg:px-12">
            <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                ${posts.map(post => `
                    <li>
                        <a href="${routeHref('blog-details', post.slug)}" data-route="blog-details" data-slug="${post.slug}" class="group block">
                            <div class="media-zoom bg-stone aspect-[4/3] flex items-center justify-center p-6">
                                <img src="${post.image}" alt="" loading="lazy" decoding="async" class="max-h-full w-auto object-contain">
                            </div>
                            <p class="text-sm text-mute mt-5">${post.category} · <time datetime="${post.date}">${formatBlogDate(post.date)}</time></p>
                            <h2 class="type-md text-ink mt-2 group-hover:underline decoration-1 underline-offset-4">${post.title}</h2>
                            <p class="mt-3 measure">${post.excerpt}</p>
                        </a>
                    </li>
                `).join('')}
            </ul>
        </section>
    `;
}

function renderBlogDetailsPage() {
    const post = BLOGS_DATA.find(p => p.slug === currentSlug);
    if (!post) return renderBlogsPage();
    const more = BLOGS_DATA.filter(p => p.slug !== post.slug).slice(0, 2);

    return `
        <article class="max-w-site mx-auto px-5 sm:px-8 lg:px-12 pt-12 lg:pt-20">
            <a href="${routeHref('blogs')}" data-route="blogs" class="text-sm text-ink-2 hover:text-ink">Blog</a>
            <header class="mt-8 max-w-4xl">
                <p class="text-sm text-mute">${post.category} · <time datetime="${post.date}">${formatBlogDate(post.date)}</time></p>
                <h1 class="type-xl text-ink mt-4">${post.title}</h1>
            </header>
            <div class="mt-12 bg-stone overflow-hidden aspect-[16/9] md:aspect-[21/9] flex items-center justify-center p-8">
                <img src="${post.image}" alt="" fetchpriority="high" class="max-h-full w-auto object-contain">
            </div>
            <div class="measure mx-auto mt-16 space-y-6 text-lg leading-[1.7]">
                ${post.content.map(p => `<p>${p}</p>`).join('')}
            </div>
            <div class="measure mx-auto mt-16 border-t border-line pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <p class="type-md text-ink">Looking for the right cart?</p>
                <button type="button" onclick="openQuoteModal()" class="btn btn-primary">Get a quote</button>
            </div>
        </article>

        ${more.length ? `
            <section class="home-section max-w-site mx-auto px-5 sm:px-8 lg:px-12">
                <h2 class="type-lg text-ink mb-10">Keep reading.</h2>
                <ul class="grid md:grid-cols-2 gap-x-8 gap-y-12 border-t border-line">
                    ${more.map(p => `
                        <li class="pt-6">
                            <a href="${routeHref('blog-details', p.slug)}" data-route="blog-details" data-slug="${p.slug}" class="group block">
                                <p class="text-sm text-mute">${p.category}</p>
                                <p class="type-md text-ink mt-2 group-hover:underline decoration-1 underline-offset-4">${p.title}</p>
                            </a>
                        </li>
                    `).join('')}
                </ul>
            </section>
        ` : ''}
    `;
}

function renderAboutPage() {
    const pillars = [
        { title: 'Who we are', text: 'Golfcarts.ph sells golf carts and electric utility vehicles across the Philippines, and goes further than most on customization and service, so your cart stands out.' },
        { title: 'What we do', text: 'We fit the right cart to the job, drawing on a range of suppliers whose products you can trust.' },
        { title: 'Why we do it', text: 'To take the golf cart beyond the course: out in the open with friends and family, on electric power, in the places you like best.' }
    ];
    return `
        <section class="max-w-site mx-auto px-5 sm:px-8 lg:px-12 pt-16 lg:pt-24">
            <p class="text-sm text-mute">About Golfcarts.ph</p>
            <div class="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end mt-4">
                <h1 class="type-xl text-ink lg:col-span-7">Low-speed electric vehicles for private roads.</h1>
                <p class="measure lg:col-span-5">Golf courses, resorts, gated villages, estates and industrial sites. Sold, customized and serviced by SJK Guahan Inc.</p>
            </div>
            <div class="mt-12 aspect-[16/9] md:aspect-[21/9] overflow-hidden">
                <img src="image/4.png" alt="A fleet of green Tempo carts lined up at a golf course" width="1920" height="1080" fetchpriority="high" class="w-full h-full object-cover">
            </div>
        </section>

        <section class="home-section max-w-site mx-auto px-5 sm:px-8 lg:px-12 grid lg:grid-cols-12 gap-10 lg:gap-12">
            <h2 class="type-lg text-ink lg:col-span-4">Part of the SJK Guahan group.</h2>
            <div class="lg:col-span-7 lg:col-start-6 space-y-6 text-lg leading-[1.7] measure">
                <p>Golfcarts.ph is part of the SJK Guahan group, which focuses on service backed by durable, reliable products. The brand is rooted in the outdoors and the lifestyle that comes with it, and our mission is to make time outdoors more enjoyable with products you can afford and trust.</p>
                <p>SJK Guahan is a 50/50 joint venture between two groups, from the Philippines and Guam, that began by bringing Club Car golf carts into the country. As we grew into golf courses, we added mowers through a partnership with Textron's Jacobsen line.</p>
            </div>
        </section>

        <section class="max-w-site mx-auto px-5 sm:px-8 lg:px-12">
            <ul class="grid md:grid-cols-3 gap-x-8 border-t border-line">
                ${pillars.map(p => `
                    <li class="pt-6 pb-10 border-b border-line md:border-b-0 space-y-3">
                        <h3 class="type-md text-ink">${p.title}</h3>
                        <p class="measure">${p.text}</p>
                    </li>
                `).join('')}
            </ul>
        </section>

        <section class="home-section bg-stone mt-24 lg:mt-32" aria-labelledby="about-voices-title">
            <div class="max-w-site mx-auto px-5 sm:px-8 lg:px-12">
                <h2 id="about-voices-title" class="type-lg text-ink mb-12">From our customers.</h2>
                <div class="grid md:grid-cols-2 gap-x-12 gap-y-12">
                    ${TESTIMONIALS_DATA.map(t => `
                        <figure class="border-t border-ink pt-6">
                            <blockquote class="type-md text-ink">“${t.quote}”</blockquote>
                            <figcaption class="mt-5 text-sm text-ink-2">${t.author}</figcaption>
                        </figure>
                    `).join('')}
                </div>
            </div>
        </section>

        <section class="home-section max-w-site mx-auto px-5 sm:px-8 lg:px-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 class="type-xl text-ink">Come and drive one.</h2>
            <div class="flex flex-wrap gap-3">
                <a href="${routeHref('contact')}" data-route="contact" class="btn btn-primary">Visit a branch</a>
                <a href="${routeHref('products')}" data-route="products" class="btn btn-outline">See every cart</a>
            </div>
        </section>
    `;
}

function handleContactSubmit(e) {
    e.preventDefault();
    e.target.reset();
    showToast(`Message sent. Your reference is QT-${Math.floor(100000 + Math.random() * 900000)}.`);
}

function renderContactPage() {
    return `
        <section class="max-w-site mx-auto px-5 sm:px-8 lg:px-12 pt-16 lg:pt-24">
            <p class="text-sm text-mute">Contact</p>
            <div class="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end mt-4">
                <h1 class="type-xl text-ink lg:col-span-7">Talk to us.</h1>
                <div class="lg:col-span-5 space-y-2">
                    <p class="measure">Individual purchases, fleets, service or dealer partnerships.</p>
                    <p><a href="mailto:info@golfcarts.ph" class="link">info@golfcarts.ph</a> · <a href="tel:+63277455089" class="link">(02) 7745-5089</a></p>
                </div>
            </div>
        </section>

        <section class="home-section max-w-site mx-auto px-5 sm:px-8 lg:px-12 grid lg:grid-cols-12 gap-12" aria-labelledby="contact-form-title">
            <h2 id="contact-form-title" class="type-lg text-ink lg:col-span-4">Send a message.</h2>
            <form onsubmit="handleContactSubmit(event)" class="lg:col-span-7 lg:col-start-6 grid sm:grid-cols-2 gap-x-6 gap-y-5">
                <div class="field"><label for="ct-name">Full name</label><input id="ct-name" required type="text" autocomplete="name"></div>
                <div class="field"><label for="ct-company">Company (optional)</label><input id="ct-company" type="text" autocomplete="organization"></div>
                <div class="field"><label for="ct-email">Email</label><input id="ct-email" required type="email" autocomplete="email"></div>
                <div class="field"><label for="ct-phone">Phone</label><input id="ct-phone" required type="tel" autocomplete="tel" placeholder="+63 900 000 0000"></div>
                <div class="field sm:col-span-2"><label for="ct-model">Model (optional)</label>
                    <select id="ct-model">
                        <option value="">No model in mind yet</option>
                        ${PRODUCTS_DATA.filter(p => p.category !== 'Accessories').map(p => `<option value="${p.slug}">${p.name} (${categoryLabel(p.category)})</option>`).join('')}
                    </select>
                </div>
                <div class="field sm:col-span-2"><label for="ct-message">Message</label><textarea id="ct-message" rows="5" placeholder="Colors, accessories, fleet size, delivery location"></textarea></div>
                <div class="sm:col-span-2"><button type="submit" class="btn btn-primary">Send message</button></div>
            </form>
        </section>

        ${renderHomeBranches().replace('id="home-branches"', 'id="contact-branches"').replace('class="rise home-section', 'class="home-section pt-0 border-t-0')}
    `;
}
