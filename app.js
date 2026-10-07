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
    // 1. GOLF VEHICLES
    // ==========================================
    {
        id: 'tempo-2-2-golf',
        slug: 'tempo-2-2-golf',
        name: 'Tempo 2+2 Golf',
        category: 'Golf Solution',
        accessoryTags: ['tempo', 'tempo-2+2', 'golf'],
        colorFamily: 'tempo',
        canopyColors: ['White', 'Beige', 'Black'],
        tagline: 'Four (4) Seater Back to Back',
        description: 'Engineered for golf course operations and group play, combining classic reliability with back-to-back seating capacity.',
        priceLabel: 'Inquire for Price',
        seating: '4 Seats (Back-to-Back)',
        range: '80 km per charge',
        speed: '30 km/h max',
        battery: '72V Lithium-Ion Pack',
        chargingTime: '3.5 Hours',
        powertrain: '5.0 kW AC Electric Motor',
        image: 'image/Products/Tempo 2+2 - Golf.png',
        gallery: ['image/Products/Tempo 2+2 - Golf.png', 'image/Products/Tempo 2+2 - Golf - Red.png', 'image/Products/Tempo 2+2 - Golf - Red 1.png'],
        colorPhotos: { 'White': 'image/Products/Tempo 2+2 - Golf.png', 'Sangria': 'image/Products/Tempo 2+2 - Golf - Red.png' },
        features: ['Four Seater Back-to-Back Seating Layout', 'Dual Integrated Golf Bag Attachment Racks', 'High-Impact Foldable Windshield Assembly', 'Corrosion-Resistant Aluminum Spaceframe'],
        specs: { 'Motor Type': '5.0 kW AC Direct Drive Motor', 'Controller': 'Curtis 350A Programmable AC Controller', 'Chassis': 'Rust-Proof Lightweight Aluminum', 'Brakes': 'Rear Mechanical Drum & Auto Park Brake' }
    },
    {
        id: 'tempo-premium-plus',
        slug: 'tempo-premium-plus',
        name: 'Tempo Premium+',
        category: 'Golf Solution',
        accessoryTags: ['tempo', 'tempo-2', 'golf'],
        colorFamily: 'tempo',
        canopyColors: ['White', 'Beige', 'Black'],
        tagline: 'Luxurious Comfort & Added Accessories',
        description: 'Tempo Premium+ takes the Tempo Premium to a more luxurious experience with its additional custom accessories and premium interior trim.',
        priceLabel: 'Inquire for Price',
        seating: '2 Seats (Forward Facing)',
        range: '90 km per charge',
        speed: '32 km/h max',
        battery: '72V High-Output Lithium',
        chargingTime: '3.0 Hours',
        powertrain: '5.0 kW AC High-Torque Motor',
        image: 'image/Products/Premium+.png',
        gallery: ['image/Products/Premium+.png', 'image/Products/Premium+ black.png'],
        colorPhotos: { 'Cashmere': 'image/Products/Premium+.png', 'Black': 'image/Products/Premium+ black.png' },
        features: ['Custom Diamond Stitch Premium Leather Cushioning', 'Underbody Ambient LED Accent Lighting', 'Integrated Beverage Cooler & Ball Cleaner Units', 'Machined Gloss Black Alloy Wheels'],
        specs: { 'Motor Type': '5.0 kW AC Motor', 'Controller': 'Curtis 350A Controller', 'Chassis': 'Powder Coated Aluminum Frame', 'Brakes': 'Hydraulic 4-Wheel Disc Brakes' }
    },
    {
        id: 'tempo-premium',
        slug: 'tempo-premium',
        name: 'Tempo Premium',
        category: 'Golf Solution',
        accessoryTags: ['tempo', 'tempo-2', 'golf'],
        colorFamily: 'tempo',
        canopyColors: ['White', 'Beige', 'Black'],
        tagline: 'Industry Leading Durability & Reliable Comfort',
        description: 'Tempo Premium is built with proven engineering, industry leading durability, and reliable comfort for everyday course management.',
        priceLabel: 'Inquire for Price',
        seating: '2 Seats',
        range: '85 km per charge',
        speed: '30 km/h max',
        battery: '72V Lithium Power Cell',
        chargingTime: '3.5 Hours',
        powertrain: '5.0 kW AC Motor',
        image: 'image/Products/Premium.png',
        gallery: ['image/Products/Premium.png'],
        features: ['Ergonomic Contour Bench Seating', 'Shatter-Resistant Foldable Polycarbonate Windshield', 'Automotive Style Front Bumper Protection', 'Dual Golf Bag Racks with Quick-Release Straps'],
        specs: { 'Motor Type': '5.0 kW AC Motor', 'Controller': 'Enpower 350A Controller', 'Chassis': 'Aircraft Grade Aluminum Chassis', 'Brakes': '4-Wheel Hydraulic Brake System' }
    },
    {
        id: 'tempo-base-plus',
        slug: 'tempo-base-plus',
        name: 'Tempo Base+',
        category: 'Golf Solution',
        accessoryTags: ['tempo', 'tempo-2', 'golf'],
        colorFamily: 'tempo',
        canopyColors: ['White', 'Beige', 'Black'],
        tagline: 'Modern Design Elevated',
        description: 'Tempo Base+ takes the sleek and modern design of the Tempo Base to new heights with upgraded trim and enhanced battery output.',
        priceLabel: 'Inquire for Price',
        seating: '2 Seats',
        range: '80 km per charge',
        speed: '28 km/h max',
        battery: '72V Standard Lithium Pack',
        chargingTime: '4.0 Hours',
        powertrain: '4.0 kW AC Motor',
        image: 'image/Products/Base +.png',
        gallery: ['image/Products/Base +.png'],
        features: ['Sleek Aerodynamic Body Styling', 'Clear Panoramic Windshield', 'Weatherproof Molded Vinyl Seats', 'Standard Turf-Friendly Tread Tires'],
        specs: { 'Motor Type': '4.0 kW AC Brushless', 'Controller': 'Curtis Controller', 'Chassis': 'Aluminum Box Frame', 'Brakes': 'Dual Rear Drum Brakes' }
    },
    {
        id: 'tempo-base',
        slug: 'tempo-base',
        name: 'Tempo Base',
        category: 'Golf Solution',
        accessoryTags: ['tempo', 'tempo-2', 'golf'],
        colorFamily: 'tempo',
        canopyColors: ['White', 'Beige', 'Black'],
        tagline: 'Reliable & Efficient Course Transport',
        description: 'The core fleet standard for golf courses worldwide, offering uncompromised reliability and low total cost of ownership.',
        priceLabel: 'Inquire for Price',
        seating: '2 Seats',
        range: '75 km per charge',
        speed: '25 km/h max',
        battery: '48V / 72V Lead-Acid or Lithium Option',
        chargingTime: '4.5 Hours',
        powertrain: '3.7 kW AC Motor',
        image: 'image/Products/Base.png',
        gallery: ['image/Products/Base.png'],
        features: ['Heavy-Duty Molded Canopy Roof', 'Integrated Cup Holders & Scorecard Holder', 'Self-Adjusting Rack and Pinion Steering'],
        specs: { 'Motor Type': '3.7 kW AC Motor', 'Controller': 'Curtis 250A Controller', 'Chassis': 'Aluminum Frame', 'Brakes': 'Rear Mechanical Drum Brakes' }
    },

    // ==========================================
    // 2. PERSONAL VEHICLES
    // ==========================================
    {
        id: 'tempo-2-2-lifted',
        slug: 'tempo-2-2-lifted',
        name: 'Tempo 2+2 Lifted',
        category: 'Personal Golfcart',
        accessoryTags: ['tempo', 'tempo-2+2', 'lifted'],
        colorFamily: 'tempo',
        canopyColors: ['White', 'Beige', 'Black'],
        tagline: 'Conquer Tougher Terrains in Style',
        description: 'A Club Car Tempo that can conquer tougher terrains with its elevated suspension lift kit and rugged all-terrain tire package.',
        priceLabel: 'Inquire for Price',
        seating: '4 Seats (2+2 Layout)',
        range: '85 km per charge',
        speed: '35 km/h max',
        battery: '72V Industrial Lithium-Ion',
        chargingTime: '3.5 Hours',
        powertrain: '6.3 kW AC Heavy Torque Motor',
        image: 'image/Products/Tempo 2+2 - Lifted.png',
        gallery: ['image/Products/Tempo 2+2 - Lifted.png'],
        features: ['4-Inch Heavy-Duty Lift Kit Installed', '23" All-Terrain Tread Tires on Beadlock Style Rims', 'Rear Convertible Flip-Seat with Cargo Flatbed', 'High-Intensity Front LED Headlight Bar'],
        specs: { 'Motor Type': '6.3 kW AC Heavy-Torque Motor', 'Controller': 'Curtis 400A Controller', 'Chassis': 'Reinforced Aluminum Chassis', 'Brakes': 'Hydraulic 4-Wheel Disc Brakes' }
    },
    {
        id: 'tempo-2-2-explorer',
        slug: 'tempo-2-2-explorer',
        name: 'Tempo 2+2 Explorer',
        category: 'Personal Golfcart',
        accessoryTags: ['tempo', 'tempo-2+2'],
        colorFamily: 'tempo',
        canopyColors: ['White', 'Beige', 'Black'],
        tagline: 'Upgrade Your Subdivision Mobility',
        description: 'Upgrade your subdivision and neighborhood transportation with the Club Car Tempo 2+2 Explorer, built for everyday lifestyle cruising.',
        priceLabel: 'Inquire for Price',
        seating: '4 Seats',
        range: '90 km per charge',
        speed: '32 km/h max',
        battery: '72V Lithium-Ion Pack',
        chargingTime: '3.0 Hours',
        powertrain: '5.0 kW AC Direct Drive',
        image: 'image/Products/Tempo 2+2 - Explorer.png',
        gallery: ['image/Products/Tempo 2+2 - Explorer.png'],
        features: ['Deluxe Padded Seating in Dual-Tone Finish', 'Foldable Rear Passenger Footrest', 'USB Fast-Charging Smartphone Ports', 'Tinted Foldable Polycarbonate Windshield'],
        specs: { 'Motor Type': '5.0 kW AC Direct Drive Motor', 'Controller': 'Curtis 350A Controller', 'Chassis': 'Lightweight Aluminum Spaceframe', 'Brakes': 'Hydraulic Disc Brakes' }
    },
    {
        id: 'tempo-2-2-family',
        slug: 'tempo-2-2-family',
        name: 'Tempo 2+2 Family',
        category: 'Personal Golfcart',
        accessoryTags: ['tempo', 'tempo-2+2'],
        colorFamily: 'tempo',
        canopyColors: ['White', 'Beige', 'Black'],
        tagline: 'Neighborhood Transport Built for Family',
        description: 'Places safety, comfort, and fun at the forefront of your residential living experience.',
        priceLabel: 'Inquire for Price',
        seating: '4 Seats',
        range: '88 km per charge',
        speed: '32 km/h max',
        battery: '72V High Capacity Lithium',
        chargingTime: '3.5 Hours',
        powertrain: '5.0 kW AC Motor',
        image: 'image/Products/Tempo 2+2 - Family.png',
        gallery: ['image/Products/Tempo 2+2 - Family.png', 'image/Products/Tempo 2+2 - Family - Sangria Red.png'],
        colorPhotos: { 'Green': 'image/Products/Tempo 2+2 - Family.png', 'Sangria': 'image/Products/Tempo 2+2 - Family - Sangria Red.png' },
        features: ['Full 3-Point Passenger Safety Seatbelts', 'Rear Armrest Console with Integrated Cup Holders', 'Soundstream Bluetooth Sound Bar Mounted on Roof', 'Automotive Grade LED Lighting Package'],
        specs: { 'Motor Type': '5.0 kW AC Motor', 'Controller': 'Enpower 350A Controller', 'Chassis': 'Aluminum Frame Chassis', 'Brakes': '4-Wheel Hydraulic Disc Brakes' }
    },
    {
        id: 'club-car-onward',
        slug: 'club-car-onward',
        name: 'Club Car Onward',
        category: 'Personal Golfcart',
        accessoryTags: ['onward'],
        tagline: 'Premium Safety, Comfort, and Customization',
        description: 'Crafted for personal luxury and subdivision cruising with maximum styling options and smooth automotive handling.',
        priceLabel: 'Inquire for Price',
        seating: '4 Seats',
        range: '95 km per charge',
        speed: '35 km/h max',
        battery: '72V Ultra Lithium-Ion',
        chargingTime: '3.0 Hours',
        powertrain: '5.0 kW AC High-Output Motor',
        image: 'image/Products/Club Car 4.png',
        gallery: ['image/Products/Club Car 4.png'],
        features: ['Custom Metallic Exterior Paint Options', 'Premium Custom Ergonomic Cushion Seats', 'Subdivision Legal Street Light Package', 'Integrated Onboard Fast Charging Unit'],
        specs: { 'Motor Type': '5.0 kW High Output AC Motor', 'Controller': 'Curtis 350A Controller', 'Chassis': 'Aluminum Spaceframe', 'Brakes': '4-Wheel Hydraulic Brake System' }
    },

    // ==========================================
    // 3. COMMERCIAL VEHICLES
    // ==========================================
    {
        id: 'villager-6',
        slug: 'villager-6',
        name: 'Villager 6',
        category: 'Resort',
        accessoryTags: ['villager', 'villager-6'],
        colorFamily: 'villager',
        canopyColors: ['White', 'Beige'],
        tagline: '4 Seats Facing Forward, 2 Seats Facing Back',
        description: 'Ideal for luxury resort transfers, tour groups, and VIP hotel guest shuttle operations.',
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
        id: 'club-car-4-plus-2-lifted',
        slug: 'club-car-4-plus-2-lifted',
        name: 'Tempo 4+2 Lifted',
        category: 'Resort',
        accessoryTags: ['tempo', 'tempo-4+2', 'lifted'],
        colorFamily: 'tempo',
        canopyColors: ['White', 'Beige', 'Black'],
        tagline: 'Four (4) Forward & Two (2) Back Lifted Shuttle',
        description: 'Elevated guest transportation built to handle resort trails, gravel roads, and unpaved terrain effortlessly.',
        priceLabel: 'Inquire for Price',
        seating: '6 Seats (4+2 Layout)',
        range: '85 km per charge',
        speed: '32 km/h max',
        battery: '72V Commercial Lithium Pack',
        chargingTime: '4.0 Hours',
        powertrain: '6.3 kW Heavy Torque Motor',
        image: 'image/Products/4 plus2 Lifted.png',
        gallery: ['image/Products/4 plus2 Lifted.png'],
        features: ['Factory Long-Travel Lift Kit Assembly', 'Over-Sized Off-Road All-Terrain Tires', 'Heavy Bumper Guard & Skid Plate', 'Full Weather Clear Enclosure Curtain'],
        specs: { 'Motor Type': '6.3 kW AC Heavy Duty', 'Controller': 'Curtis 400A Controller', 'Chassis': 'Heavy Duty Tubular Frame', 'Brakes': '4-Wheel Hydraulic Disc Brakes' }
    },
    {
        id: 'villager-8',
        slug: 'villager-8',
        name: 'Villager 8',
        category: 'Resort',
        accessoryTags: ['villager', 'villager-8'],
        colorFamily: 'villager',
        canopyColors: ['White', 'Beige'],
        tagline: 'Six (6) Seats Facing Forward, Two (2) Back',
        description: 'High-capacity resort shuttle engineered to carry 8 passengers in quiet, eco-friendly luxury.',
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
        id: 'club-car-minibus',
        slug: 'club-car-minibus',
        name: 'GC Minibus 14',
        category: 'Resort',
        accessoryTags: ['minibus'],
        canopyColors: ['Black'],
        tagline: 'Fourteen (14) Seater Mass Shuttle Solution',
        description: 'When you need to move groups efficiently, nothing gets the job done better than the GC Minibus from Golfcart.ph.',
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

    // ==========================================
    // 4. INDUSTRIAL VEHICLES
    // ==========================================
    {
        id: 'cafe-express',
        slug: 'cafe-express',
        name: 'Café Express',
        category: 'Golf Solution',
        tagline: 'On-the-go refreshments, Instant revenue',
        description: 'Fully equipped mobile refreshment and catering cart for golf courses, resorts, and outdoor venues.',
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
    {
        id: 'transporter-400',
        slug: 'transporter-400',
        name: 'Transporter 4',
        category: 'Industrial and Township',
        accessoryTags: ['utility', 'transporter-4'],
        colorFamily: 'carryall',
        canopyColors: ['White', 'Beige', 'Black'],
        tagline: 'Four (4) Seater with Rear Cargo Box',
        description: 'Combines passenger seating with an expanded rear utility box for facility maintenance and cargo transport.',
        priceLabel: 'Inquire for Price',
        seating: '4 Seats + Cargo Box',
        range: '80 km per charge',
        speed: '30 km/h max',
        battery: '72V Industrial Lithium',
        chargingTime: '4.0 Hours',
        powertrain: '6.3 kW AC Motor',
        image: 'image/Products/Transporter 4.png',
        gallery: ['image/Products/Transporter 4.png'],
        features: ['Aluminum Drop-Side Flatbed Utility Cargo Deck', 'Reinforced Front Steel Brush Guard', 'Heavy Duty Tow Hitch Receiver Included', 'Waterproof Heavy Rubberized Cabin Floor'],
        specs: { 'Motor Type': '6.3 kW AC Heavy Torque Brushless', 'Controller': 'Curtis High-Output Industrial Controller', 'Chassis': 'Hot-Dip Galvanized Reinforced Steel Frame', 'Brakes': '4-Wheel Hydraulic Disc Brakes' }
    },
    {
        id: 'carryall-500',
        slug: 'carryall-500',
        name: 'CarryAll 500',
        category: 'Industrial and Township',
        accessoryTags: ['utility', 'carryall'],
        colorFamily: 'carryall',
        canopyColors: ['White', 'Beige', 'Black'],
        tagline: 'Two (2) Seater, Carries up to 1200 lbs',
        description: 'The premier workhorse for groundskeeping, estate management, and heavy industrial cargo hauling.',
        priceLabel: 'Inquire for Price',
        seating: '2 Seats + Cargo Box',
        range: '75 km per charge',
        speed: '30 km/h max',
        battery: '72V Heavy-Duty Lithium',
        chargingTime: '4.0 Hours',
        powertrain: '6.3 kW Heavy Torque Motor',
        image: 'image/Products/CA500.png',
        gallery: ['image/Products/CA500.png'],
        features: ['Heavy Duty Aluminum Dump Cargo Box', '1,200 lbs Total Payload Carrying Capacity', 'All-Terrain Heavy Ply Industrial Tires', 'High-Visibility Yellow Strobe Safety Light'],
        specs: { 'Motor Type': '6.3 kW Heavy Duty AC Motor', 'Controller': 'Curtis 400A Industrial Controller', 'Chassis': 'Rust-Proof Armor-Plex Aluminum Frame', 'Brakes': '4-Wheel Mechanical Disc Brakes' }
    },
    {
        id: 'carryall-300',
        slug: 'carryall-300',
        name: 'CarryAll 300',
        category: 'Industrial and Township',
        accessoryTags: ['utility', 'carryall'],
        colorFamily: 'carryall',
        canopyColors: ['White', 'Beige', 'Black'],
        tagline: 'Two (2) Seater, Carries up to 800 lbs',
        description: 'Compact utility cart engineered to navigate tight indoor or outdoor corridors with zero emissions.',
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

// Category Headers Data Map. `photo` is a lifestyle banner shown full-bleed behind the text
// (`photoFocus` keeps the cart in frame); categories without one show the product cut-out.
const CATEGORY_BANNERS = {
    'Personal Golfcart': {
        title: 'Personal & Subdivision',
        headline: 'Places Safety, Durability, and Fun First',
        subheadline: 'At the forefront of your residential and gated community living experience.',
        image: 'image/Products/Tempo 2+2 - Family - Sangria Red.png',
        photo: 'image/Banners/personal.jpg',
        photoFocus: '50% 45%'
    },
    'Resort': {
        title: 'Resort & Hospitality',
        headline: 'First-Class Hospitality Shuttle Mobility',
        subheadline: 'Quiet, comfortable guest transfers across resorts, hotels, and leisure destinations.',
        image: 'image/Products/Club Car 6+2.png',
        photo: 'image/Banners/resort.jpg',
        photoFocus: '60% 65%'
    },
    'Industrial and Township': {
        title: 'Industrial and Township',
        headline: 'Fleet Tracker + Unmatched Towing Performance',
        subheadline: 'People movers and heavy-payload utility vehicles for plants, campuses, and townships.',
        image: 'image/Products/Transporter 4.png',
        photo: 'image/Banners/industrial.jpg',
        photoFocus: '55% 60%'
    },
    'Golf Solution': {
        title: 'Golf Solution',
        headline: 'Control Costs. Simplify Operations. Win-Win.',
        subheadline: 'Precision engineered for championship courses, player satisfaction, and country club fairways.',
        image: 'image/Products/Tempo 2+2 - Golf.png',
        photo: 'image/Banners/golf.jpg',
        photoFocus: '60% 60%'
    },
    'Accessories': {
        title: 'Original Accessories',
        headline: 'Elevate Your Ride with Genuine Upgrades',
        subheadline: 'Hand-crafted leather seats, Bluetooth audio bars, sand bottles, and weather enclosures.',
        image: 'image/Accessories/Lux Seat - Brown.jpg'
    }
};

// Vehicle models referenced by the header mega-menus and segment pages.
// `slug` links to a PRODUCTS_DATA detail page when one exists; `image: null` shows a placeholder.
const VEHICLE_MODELS = {
    'seat-2':       { name: 'Tempo 2',             image: 'image/Products/Base.png',                   slug: 'tempo-base' },
    'seat-2-2':     { name: 'Tempo 2+2',           image: 'image/Products/Tempo 2+2 - Family.png',     slug: 'tempo-2-2-family' },
    'seat-4':       { name: 'Tempo 4',             image: 'image/Products/Club Car 4.png',             slug: null },
    'seat-4-2':     { name: 'Tempo 4+2',           image: 'image/Products/4 plus2 Lifted.png',         slug: 'club-car-4-plus-2-lifted' },
    'seat-6-2':     { name: 'Tempo 6+2',           image: 'image/Products/Club Car 6+2.png',           slug: null },
    'villager-6':   { name: 'Villager 6',          image: 'image/Products/Villager 6.png',             slug: 'villager-6' },
    'villager-8':   { name: 'Villager 8',          image: 'image/Products/Villager 8.png',             slug: 'villager-8' },
    'transporter-4':{ name: 'Transporter 4',       image: 'image/Products/Transporter 4.png',          slug: 'transporter-400' },
    'transporter-6':{ name: 'Transporter 6',       image: null,                                        slug: null },
    'minibus':      { name: 'Minibus',             image: 'image/Products/Minibus 14.png',             slug: 'club-car-minibus' },
    'ca300':        { name: 'CarryAll 300',        image: 'image/Products/CA300.png',                  slug: 'carryall-300' },
    'ca500':        { name: 'CarryAll 500',        image: 'image/Products/CA500.png',                  slug: 'carryall-500' },
    'ca700':        { name: 'CarryAll 700',        image: 'image/Products/CA700.png',                  slug: null },
    'fnb':          { name: 'F&B Cart',            image: 'image/Products/F&B.png',                    slug: null },
    'laundry':      { name: 'Laundry Cart',        image: 'image/Products/House keeping.png',          slug: null },
    'custom':       { name: 'Custom Solution',     image: null,                                        slug: null },
    'cafe-express': { name: 'Café Express',        image: 'image/Products/Cafe Express.png',           slug: 'cafe-express' }
};

// Header menu hierarchy: segment -> subcategory -> group -> model keys.
// Drives the desktop category bar, the mobile drawer, and the segment landing pages.
const NAV_SEGMENTS = [
    {
        id: 'resort',
        label: 'Resort',
        category: 'Resort',
        tagline: 'Resort & Hospitality',
        description: 'Quiet, comfortable guest transfers and fit-to-task utility vehicles for resorts, hotels, and leisure destinations.',
        image: 'image/Products/Villager 8.png',
        subcategories: [
            {
                id: 'guest-transport',
                label: 'Guest Transport',
                groups: [
                    { label: 'Standard', items: ['seat-2-2', 'seat-4', 'seat-4-2'] },
                    { label: 'People Transport', items: ['villager-6', 'villager-8', 'transporter-4', 'transporter-6'] },
                    { label: 'People Hauler', items: ['minibus'] }
                ]
            },
            {
                id: 'resort-utility',
                label: 'Resort Utility',
                groups: [
                    { label: 'Fit To Task', items: ['fnb', 'laundry', 'custom'] },
                    { label: 'Utility', items: ['ca300', 'ca500', 'ca700'] }
                ]
            }
        ]
    },
    {
        id: 'industrial',
        label: 'Industrial and Township',
        category: 'Industrial and Township',
        tagline: 'Industrial & Township Mobility',
        description: 'People movers and heavy-payload utility vehicles for plants, business parks, campuses, and townships.',
        image: 'image/Products/Transporter 4.png',
        subcategories: [
            {
                id: 'people-transport',
                label: 'People Transport',
                groups: [
                    { label: 'People Transport', items: ['seat-2', 'seat-2-2', 'seat-4', 'seat-4-2', 'seat-6-2', 'villager-6', 'villager-8', 'minibus'] }
                ]
            },
            {
                id: 'utility',
                label: 'Utility',
                groups: [
                    { label: 'Utility', items: ['ca300', 'ca500', 'ca700', 'transporter-4', 'transporter-6'] }
                ]
            }
        ]
    },
    {
        id: 'golf',
        label: 'Golf Solution',
        category: 'Golf Solution',
        tagline: 'Golf Course Fleets',
        description: 'Fleet golf carts, course-maintenance utility vehicles, and mobile merchandising for championship courses and country clubs.',
        image: 'image/Products/Tempo 2+2 - Golf.png',
        subcategories: [
            {
                id: 'golfcart',
                label: 'Golfcart',
                groups: [
                    { label: 'Golfcart', items: ['seat-2', 'seat-4', 'seat-2-2', 'seat-4-2', 'villager-6'] }
                ]
            },
            {
                id: 'golf-utility',
                label: 'Utility',
                groups: [
                    { label: 'Utility', items: ['ca300', 'ca500', 'ca700'] }
                ]
            },
            {
                id: 'mobile-merchandising',
                label: 'Mobile Merchandising',
                groups: [
                    { label: 'Mobile Merchandising', items: ['cafe-express'] }
                ]
            }
        ]
    }
];

// Main Hero Carousel Variables
let currentSlideIndex = 0;
let carouselTimer = null;

const CAROUSEL_SLIDES = [
    {
        image: "image/Hero/hero-1.webp",
        alt: "Fairway? Covered. Club Car golf cart on the course",
        ctaLabel: "Explore Products",
        ctaAction: "navigateTo('products')"
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
        ctaLabel: "Service & Support",
        ctaAction: "navigateTo('service')"
    },
    {
        image: "image/Hero/hero-5.png",
        alt: "One cart is great. A whole fleet? Even better.",
        ctaLabel: "Fleet Solutions",
        ctaAction: "navigateTo('solutions')"
    }
];

// ==========================================
// HOMEPAGE CONTENT (layout modelled on a model-led automotive homepage)
// ==========================================

// Three side-by-side solution panels under the hero (video, photo, crossfading fleet photos)
const HOME_SOLUTION_PANELS = [
    {
        eyebrow: 'Resort',
        title: 'Experience Silent, Unmatched Luxury',
        text: 'Quiet, eco-friendly guest transport across premier resorts, hotels, and leisure destinations.',
        ctaLabel: 'Explore Resort', ctaAction: "openSegment('resort')", ctaIcon: 'play-circle',
        media: `<video autoplay loop muted playsinline class="home-panel-media"><source src="video/resort_video.mp4" type="video/mp4"></video>`
    },
    {
        eyebrow: 'Industrial and Township',
        title: 'Heavy Payload & Unmatched Performance',
        text: 'Built for groundskeeping, cargo hauling, estate management, and zero-emission facility logistics.',
        ctaLabel: 'Explore Industrial and Township', ctaAction: "openSegment('industrial')", ctaIcon: 'arrow-right-circle',
        media: `<img src="image/industrial.png" alt="Utility vehicle at work" loading="lazy" class="home-panel-media">`
    },
    {
        eyebrow: 'Golf Solution',
        title: 'Championship Fairway Mobility & Fleet Care',
        text: 'Fleet carts for tournament play, course management, and high-efficiency golfer transport.',
        ctaLabel: 'Explore Golf Solution', ctaAction: "openSegment('golf')", ctaIcon: 'flag',
        golfSlides: true
    }
];

// Lineup filter tabs on the homepage (product categories, accessories excluded)
const HOME_LINEUP_TABS = ['All', 'Personal Golfcart', 'Resort', 'Industrial and Township', 'Golf Solution'];
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
    }
];

// DRAFT answers built only from facts already on the site; review before publishing
const HOME_FAQS = [
    { q: 'Which golf cart is right for me?', a: 'It depends on where you will drive and how many people you carry. Two-seaters suit golf and personal errands, 2+2 models add rear-facing seats for family and friends, and 6 to 14 seat shuttles are built for moving groups. Our team can recommend a model for your property.' },
    { q: 'Do you supply fleets for resorts, golf courses, and townships?', a: 'Yes. We supply guest transport, people movers, and utility vehicles for resorts, golf courses, industrial sites, and townships, including fit-to-task builds such as F&B and laundry carts.' },
    { q: 'How do I charge an electric golf cart?', a: 'Our carts charge from a standard 110V/220V outlet. For best battery life, charge after every use instead of waiting for the battery to run low.' },
    { q: 'Can I customize colors, seats, and accessories?', a: 'Yes. Choose from body colors, premium seats, lighting, enclosures, audio, and more from our genuine accessory range. Mention your preferences when you request a quote.' },
    { q: 'Do you offer after-sales service and parts?', a: 'Yes. Our service team handles inspections, battery and electrical checks, and repairs, and we stock spare parts and accessories. Visit our Service page or contact a branch to book.' },
    { q: 'Where can I see the carts in person?', a: 'Visit our Manila or Cebu branch. You can also request a quote and our team will arrange a viewing for you.' }
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
    document.querySelectorAll('.nav-link').forEach(btn => {
        if (btn.dataset.page === activePage) {
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

// --- SEGMENT MENUS (Resort / Industrial and Township / Golf Solution) ---

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

// Hover/focus sub-menu attached to a category tab on the Cart page
function renderSegmentDropdown(seg) {
    return `
        <div class="segment-dropdown" role="menu">
            <div class="segment-dropdown-inner grid gap-6" style="grid-template-columns: repeat(${seg.subcategories.length}, minmax(180px, 1fr));">
                ${seg.subcategories.map(sub => `
                    <div class="space-y-3">
                        <button onclick="openSegment('${seg.id}', '${seg.id}-${sub.id}')" class="block text-left text-xs font-extrabold uppercase tracking-wider text-brand-olive hover:text-brand-oliveHover">${sub.label}</button>
                        ${sub.groups.map(group => `
                            <div class="space-y-1">
                                ${group.label !== sub.label ? `<p class="text-[11px] font-bold text-slate-900">${group.label}</p>` : ''}
                                ${group.items.map(key => `
                                    <button onclick="openSegment('${seg.id}', '${modelAnchorId(seg.id, sub.id, key)}')" class="segment-dropdown-item" role="menuitem">${VEHICLE_MODELS[key].name}</button>
                                `).join('')}
                            </div>
                        `).join('')}
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderSegmentMenus() {
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
                                        <button onclick="openSegment('${seg.id}', '${modelAnchorId(seg.id, sub.id, key)}')" class="px-3 py-1.5 rounded-full bg-slate-100 hover:bg-brand-olive/15 text-slate-700 text-xs">${VEHICLE_MODELS[key].name}</button>
                                    `).join('')}
                                </div>
                            `).join('')}
                        </div>
                    `).join('')}
                </div>
            </details>
        `).join('');
    }
}

function populateModalProductDropdown() {
    const select = document.getElementById('modal-product-select');
    if (select) {
        // Menu models without a product page still need to be selectable in the quote form
        const productNames = new Set(PRODUCTS_DATA.map(p => p.name));
        const extraModels = Object.values(VEHICLE_MODELS).filter(m => !m.slug && !productNames.has(m.name));
        select.innerHTML = PRODUCTS_DATA.map(p => `<option value="${p.name}">${p.name} (${p.category})</option>`).join('')
            + extraModels.map(m => `<option value="${m.name}">${m.name}</option>`).join('');
    }
}

function openQuoteModal(productName = '', notes = '') {
    const modal = document.getElementById('quote-modal');
    const select = document.getElementById('modal-product-select');
    const notesField = document.getElementById('modal-notes');
    if (notesField) notesField.value = notes;
    if (modal) {
        if (productName && select) {
            const match = PRODUCTS_DATA.find(p => p.name.toLowerCase() === productName.toLowerCase());
            if (match) select.value = match.name;
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
            <span class="text-brand-olive text-xs font-semibold tracking-widest uppercase">${eyebrow}</span>
            <h2 class="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">${title}</h2>
        </div>
    `;
}

// Three solution panels in one container. On desktop the hovered panel expands
// (CSS flex-grow accordion) and reveals its description and button.
function renderHomeSolutionPanels() {
    return `
        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 space-y-6 sm:space-y-8">
            <div class="reveal">${renderHomeSectionHeading('Solutions', 'Built for Every Setting')}</div>
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
                            <h3 class="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-tight drop-shadow-md">${panel.title}</h3>
                            <div class="home-panel-details space-y-4">
                                <p class="text-slate-200 text-xs sm:text-sm leading-relaxed max-w-md">${panel.text}</p>
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
                <span class="text-brand-olive text-xs font-semibold tracking-widest uppercase">Choose Your Power</span>
                <h2 class="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Lead-Acid or Lithium?</h2>
                <p class="text-slate-500 text-sm sm:text-base">It comes down to a lower price today or lower costs and less upkeep over the life of your cart.</p>
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
                    <h3 class="font-extrabold text-slate-900 text-lg">Lead-Acid is best if you…</h3>
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
                    <h3 class="font-extrabold text-slate-900 text-lg">Lithium is best if you…</h3>
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
            ${renderHomeSectionHeading('Vehicle Lineup', 'More Golfcart.ph Vehicles')}
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
        { icon: 'car', title: 'Browse Vehicles', text: 'See the full lineup of carts, shuttles, and utility vehicles.', action: "navigateTo('products')" },
        { icon: 'map-pin', title: 'Find a Branch', text: 'Visit our showrooms in Manila and Cebu.', action: "goToHomeSection('home-branches')" },
        { icon: 'file-text', title: 'Request a Quote', text: 'Tell us what you need and get pricing fast.', action: "goToHomeSection('home-quote')" },
        { icon: 'wrench', title: 'Service & Support', text: 'Maintenance, repairs, parts, and accessories.', action: "navigateTo('service')" }
    ];

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
            <!-- 3. VEHICLE LINEUP: filterable grid -->
            ${renderHomeLineup()}

            <!-- 4. BRAND STORY: split media (left) / text (right) -->
            <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 reveal lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div class="lg:col-span-7 relative rounded-3xl overflow-hidden border border-brand-border shadow-2xl h-[280px] sm:h-[420px] bg-slate-900">
                    <video autoplay loop muted playsinline class="w-full h-full object-cover">
                        <source src="video/intro_golfcartph.mp4" type="video/mp4">
                    </video>
                </div>
                <div class="lg:col-span-5 space-y-5">
                    <span class="px-3 py-1 rounded-full bg-brand-olive/10 border border-brand-olive/30 text-brand-olive text-xs font-bold uppercase tracking-widest">Who is Golfcart.ph?</span>
                    <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Pioneering Electric Mobility in the Philippines</h2>
                    <p class="text-slate-600 text-sm sm:text-base leading-relaxed">
                        Operating under SJK Guahan Inc., Golfcart.ph is the premier distributor and customizer of luxury, resort, golf, and commercial utility electric vehicles across the country.
                    </p>
                    <div class="grid grid-cols-2 gap-3">
                        <div class="rounded-2xl bg-brand-card border border-brand-border p-4">
                            <div class="text-2xl font-black text-slate-900">${CLIENT_LOGOS.length}+</div>
                            <div class="text-[11px] uppercase tracking-wider text-brand-slate font-medium">Partner Clients</div>
                        </div>
                        <div class="rounded-2xl bg-brand-card border border-brand-border p-4">
                            <div class="text-2xl font-black text-slate-900">2</div>
                            <div class="text-[11px] uppercase tracking-wider text-brand-slate font-medium">Branches: Manila & Cebu</div>
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
                    ${renderHomeSectionHeading('Trusted Partnership Network', 'Trusted by Industry Leaders & Premier Resorts')}
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
                        <h2 class="text-3xl sm:text-5xl font-extrabold tracking-tight">Get pricing for your next cart</h2>
                        <p class="text-slate-300 text-sm sm:text-base leading-relaxed">Pick a model and your nearest branch, and our team will send you a quote.</p>
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
                ${renderHomeSectionHeading('Find a Branch', 'Visit Our Showrooms')}
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    ${BRANCHES.map(b => `
                        <div class="container-light-beam rounded-3xl bg-brand-card border border-brand-border p-6 sm:p-8 flex flex-col gap-4">
                            <div class="flex items-center gap-3">
                                <div class="p-3 rounded-xl bg-brand-olive/10 text-brand-olive"><i data-lucide="map-pin" class="w-5 h-5"></i></div>
                                <h3 class="text-lg sm:text-xl font-bold text-slate-900">${b.name}</h3>
                            </div>
                            <p class="text-slate-600 text-sm leading-relaxed">${b.address}</p>
                            <div class="flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-700">
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
                    ${renderHomeSectionHeading('The Golfcart.ph Blog', 'Guides, Tips & Stories', 'left')}
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
                                <h3 class="text-lg font-extrabold text-slate-900 group-hover:text-brand-olive transition-colors">${post.title}</h3>
                                <p class="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3 flex-1">${post.excerpt}</p>
                                <span class="inline-flex items-center gap-1 text-brand-olive text-xs font-semibold">Continue reading <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i></span>
                            </div>
                        </article>
                    `).join('')}
                </div>
            </section>

            <!-- 9. FAQ ACCORDION -->
            <section class="reveal max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                ${renderHomeSectionHeading('Need Help?', 'Frequently Asked Questions')}
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
                            <h3 class="font-bold text-slate-900 text-sm sm:text-base group-hover:text-brand-olive transition-colors">${link.title}</h3>
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
            <!-- Category Filter Buttons (Resort / Industrial and Township / Golf Solution open a sub-menu on hover) -->
            <div class="flex items-center gap-1.5 sm:gap-2 overflow-x-auto md:overflow-visible w-full md:w-auto pb-2 md:pb-0 scrollbar-none z-10">
                ${categories.map(cat => {
                    const segment = NAV_SEGMENTS.find(s => s.category === cat);
                    const tab = `
                        <button onclick="setCategoryFilter('${cat}')" class="inline-flex items-center gap-1 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                            productFilterCategory === cat ? 'bg-brand-olive text-slate-900 shadow-md font-bold' : 'bg-white/70 text-slate-600 hover:bg-slate-200/80'
                        }">
                            ${cat}
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

function renderProductCardHTML(product) {
    return `
    <div class="container-light-beam product-card group rounded-2xl bg-brand-card border border-brand-border overflow-hidden flex flex-col justify-between shadow-lg">
        <div>
            <div class="relative h-60 sm:h-72 overflow-hidden bg-white/60 pt-9 pb-1 flex items-center justify-center">
                <img src="${product.image}" alt="${product.name}" class="product-card-img cart-img-fill">
                <div class="absolute top-3 left-3 flex items-center gap-1.5 z-20">
                    <span class="px-2.5 py-1 rounded-full bg-white/80 backdrop-blur-md text-brand-olive text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase border border-brand-border">
                        ${product.category}
                    </span>
                </div>
                <div class="absolute bottom-3 right-3 z-20">
                    <span class="px-2 py-1 rounded-lg bg-white/90 text-slate-900 text-[11px] font-bold border border-brand-border">
                        ${product.priceLabel}
                    </span>
                </div>
            </div>

            <div class="p-4 sm:p-5 space-y-2.5 sm:space-y-3 z-10 relative">
                <h3 class="text-base sm:text-lg font-bold text-slate-900 group-hover:text-brand-olive transition-colors">${product.name}</h3>
                <p class="text-xs text-slate-500 line-clamp-2">${product.description}</p>
                
                <div class="grid grid-cols-2 gap-2 pt-2 text-[11px] sm:text-xs border-t border-brand-border text-slate-600">
                    <div class="card-spec-badge p-1.5 rounded-lg flex items-center gap-1.5 border border-transparent"><i data-lucide="users" class="w-3.5 h-3.5 text-brand-olive flex-shrink-0"></i><span class="truncate">${product.seating}</span></div>
                    <div class="card-spec-badge p-1.5 rounded-lg flex items-center gap-1.5 border border-transparent"><i data-lucide="battery" class="w-3.5 h-3.5 text-brand-olive flex-shrink-0"></i><span class="truncate">${product.range}</span></div>
                    <div class="card-spec-badge p-1.5 rounded-lg flex items-center gap-1.5 border border-transparent"><i data-lucide="gauge" class="w-3.5 h-3.5 text-brand-olive flex-shrink-0"></i><span class="truncate">${product.speed}</span></div>
                    <div class="card-spec-badge p-1.5 rounded-lg flex items-center gap-1.5 border border-transparent"><i data-lucide="zap" class="w-3.5 h-3.5 text-brand-olive flex-shrink-0"></i><span class="truncate">${product.powertrain.split(' ')[0]}</span></div>
                </div>
            </div>
        </div>

        <div class="p-4 sm:p-5 pt-0 grid grid-cols-2 gap-2 z-10 relative">
            <button onclick="navigateTo('product-details', '${product.slug}')" class="py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-semibold text-center transition-colors">
                View Details
            </button>
            <button onclick="openQuoteModal('${product.name}')" class="py-2 px-3 rounded-xl bg-brand-olive hover:bg-brand-oliveHover text-slate-900 text-xs font-bold text-center transition-colors btn-shimmer">
                Request Quote
            </button>
        </div>
    </div>
    `;
}

// --- VEHICLE DETAIL PAGE (Overview / Colors / Features / Specifications) ---

// Available colors per model family, from the "Versions" cart-builder sheet (STEP 2 COLORS tab).
// Products opt in with `colorFamily`; hex values are approximate screen swatches.
const CHAMELEON_SWATCH = 'linear-gradient(135deg, #5B2C83, #1F6FB2, #2E9E6B)';
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
        seats: ['White', 'Beige', 'Black', 'Grey'],
        seatNote: 'Premium Club Car, high-back, and GC custom seat designs are also available.'
    },
    villager: {
        body: [{ tier: 'Villager Colors', colors: [
            { name: 'White', hex: '#F5F5F2' }, { name: 'Beige', hex: '#D8C8A6' }, { name: 'Green', hex: '#0F5A45' }
        ] }]
    },
    carryall: {
        body: [{ tier: 'Transporter & CarryAll Colors', colors: [
            { name: 'White', hex: '#F5F5F2' }, { name: 'Green', hex: '#0F5A45' }, { name: 'Grey', hex: '#8C8F92' }
        ] }],
        seats: ['Gray', 'White', 'Black', 'Beige']
    }
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
        { id: 'enc-ca-white', name: 'CarryAll Rain Enclosure (White)', sku: 'SJK-1248', fits: ['carryall'] },
        { id: 'enc-ca-black', name: 'CarryAll Rain Enclosure (Black)', fits: ['carryall'] },
        { id: 'enc-ca-beige', name: 'CarryAll Rain Enclosure (Beige)', fits: ['carryall'] },
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
    const product = PRODUCTS_DATA.find(p => p.name === productName);
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
    if (product) openQuoteWithAccessories(product.name, getDetailBuildNote());
}

// Swatch colors for the seat and canopy options (sheet names: White, Beige, Black, Grey/Gray)
const TRIM_COLOR_HEX = { White: '#F5F5F2', Beige: '#D8C8A6', Black: '#1C1D1F', Grey: '#8F9396', Gray: '#8F9396' };

// Current color choices on the vehicle page; reset each time a vehicle page renders
let detailBuild = { body: null, seat: null, canopy: null };

function getDetailBuildNote() {
    const parts = [
        detailBuild.body && `Body ${detailBuild.body}`,
        detailBuild.seat && `Seat ${detailBuild.seat}`,
        detailBuild.canopy && `Canopy ${detailBuild.canopy}`
    ].filter(Boolean);
    return parts.length ? `Preferred colors: ${parts.join(', ')}` : '';
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
    const img = document.getElementById('detail-color-img');
    if (img) img.src = color.image || product.image;
    const note = document.getElementById('detail-color-photo-note');
    if (note) note.classList.toggle('hidden', !!color.image);
    detailBuild.body = color.name;
    updateDetailBuildSummary();
}

function requestQuoteInColor() {
    const product = PRODUCTS_DATA.find(p => p.slug === currentSlug);
    if (product) openQuoteModal(product.name, getDetailBuildNote());
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

function renderProductDetailsPage() {
    const product = PRODUCTS_DATA.find(p => p.slug === currentSlug) || PRODUCTS_DATA[0];
    const isVehicle = product.category !== 'Accessories';
    const safeName = product.name.replace(/'/g, "\\'");
    const colorFamily = COLOR_FAMILIES[product.colorFamily];
    const bodyColors = getProductBodyColors(product);
    // Start on a color we have a photo for, so the preview matches the selected swatch
    const startColorIdx = Math.max(0, bodyColors.findIndex(c => c.image));
    const startColor = bodyColors[startColorIdx];
    const seatOptions = (colorFamily && colorFamily.seats) || [];
    const canopyOptions = product.canopyColors || [];
    detailBuild = { body: startColor ? startColor.name : null, seat: seatOptions[0] || null, canopy: canopyOptions[0] || null };
    setTimeout(updateDetailBuildSummary, 0);
    const specGroups = getDetailSpecGroups(product);
    const related = PRODUCTS_DATA.filter(p => p.category === product.category && p.slug !== product.slug).slice(0, 3);
    const accessoryCount = getCompatibleAccessoryGroups(product.name).reduce((n, g) => n + g.items.length, 0);

    const keyMetrics = [
        { icon: 'users', label: 'Seating', value: product.seating },
        { icon: 'battery-charging', label: 'Range', value: product.range },
        { icon: 'gauge', label: 'Top Speed', value: product.speed },
        { icon: 'plug-zap', label: 'Charging Time', value: product.chargingTime }
    ].filter(m => isVehicle && isMeaningful(m.value));

    const tabs = [
        { id: 'overview', label: 'Overview' },
        ...(isVehicle ? [{ id: 'colors', label: 'Colors' }] : []),
        { id: 'features', label: 'Features' },
        { id: 'specifications', label: 'Specifications' }
    ];

    setTimeout(initDetailTabs, 50);

    return `
    <div class="pb-8">
        <!-- HERO: stage + key metrics + CTAs -->
        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-0 sm:pt-2 pb-10 space-y-5">
            <button onclick="navigateTo('products')" class="inline-flex items-center gap-2 text-brand-slate hover:text-slate-900 text-xs sm:text-sm font-medium transition-colors">
                <i data-lucide="arrow-left" class="w-4 h-4"></i>
                <span>Back to Vehicles</span>
            </button>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div class="lg:col-span-7 space-y-4">
                    <div class="relative rounded-3xl overflow-hidden bg-gradient-to-b from-brand-card to-white border border-brand-border h-[340px] sm:h-[480px] lg:h-[580px] flex items-center justify-center p-2 sm:p-4">
                        <div class="absolute inset-0 hero-cart-glow pointer-events-none"></div>
                        <img id="detail-main-img" src="${product.image}" alt="${product.name}" class="relative w-full h-full object-contain drop-shadow-[0_25px_30px_rgba(0,0,0,0.2)]">
                    </div>
                    ${product.gallery.length > 1 ? `
                        <div class="flex items-center gap-3 overflow-x-auto pb-1">
                            ${product.gallery.map(img => `
                                <button onclick="document.getElementById('detail-main-img').src='${img}'" class="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-brand-border hover:border-brand-olive transition-all bg-white p-2 flex items-center justify-center flex-shrink-0">
                                    <img src="${img}" alt="" class="max-h-full object-contain">
                                </button>
                            `).join('')}
                        </div>
                    ` : ''}
                </div>

                <div class="lg:col-span-5 space-y-6">
                    <div class="space-y-2">
                        <span class="px-3 py-1 rounded-full bg-brand-olive/10 border border-brand-olive/30 text-brand-olive text-xs font-bold uppercase tracking-widest">${product.category}</span>
                        <h1 class="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight pt-2">${product.name}</h1>
                        <p class="text-brand-slate font-semibold text-sm sm:text-base">${product.tagline}</p>
                        <p class="text-slate-900 font-bold text-lg pt-1">${product.priceLabel || 'Inquire for Price'}</p>
                    </div>

                    ${keyMetrics.length ? `
                        <div class="grid grid-cols-2 gap-3">
                            ${keyMetrics.map(m => `
                                <div class="rounded-2xl bg-brand-card border border-brand-border p-4">
                                    <i data-lucide="${m.icon}" class="w-4 h-4 text-brand-olive"></i>
                                    <div class="mt-2 text-sm sm:text-base font-extrabold text-slate-900 leading-tight">${m.value}</div>
                                    <div class="text-[10px] uppercase tracking-wider text-brand-slate font-medium mt-0.5">${m.label}</div>
                                </div>
                            `).join('')}
                        </div>
                    ` : ''}

                    <div class="flex flex-col sm:flex-row gap-3">
                        <button onclick="openQuoteModal('${safeName}')" class="flex-1 flex items-center justify-center gap-2 bg-brand-olive hover:bg-brand-oliveHover text-slate-900 font-bold py-3.5 rounded-xl shadow-lg text-sm transition-all btn-shimmer">
                            <i data-lucide="file-text" class="w-4 h-4"></i>
                            <span>Request a Quote</span>
                        </button>
                        <button onclick="goToHomeSection('home-branches')" class="flex-1 flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-900 font-semibold py-3.5 rounded-xl border border-brand-border text-sm transition-all">
                            <i data-lucide="map-pin" class="w-4 h-4"></i>
                            <span>Find a Branch</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <!-- STICKY IN-PAGE TABS -->
        <nav class="sticky top-[63px] sm:top-[65px] z-30 border-y border-brand-border bg-white/90 backdrop-blur-md">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
                <div class="flex items-center gap-1 sm:gap-2 overflow-x-auto scrollbar-none">
                    ${tabs.map((t, i) => `
                        <button onclick="scrollToDetailSection('${t.id}')" data-target="${t.id}" class="detail-tab ${i === 0 ? 'detail-tab-active' : ''}">${t.label}</button>
                    `).join('')}
                </div>
                <div class="hidden md:flex items-center gap-3 flex-shrink-0">
                    <span class="text-sm font-bold text-slate-900">${product.name}</span>
                    <button onclick="openQuoteModal('${safeName}')" class="bg-brand-olive hover:bg-brand-oliveHover text-slate-900 font-bold px-4 py-2 rounded-full text-xs transition-all">Request a Quote</button>
                </div>
            </div>
        </nav>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28 pt-14 sm:pt-20">
            <!-- OVERVIEW -->
            <section id="overview" class="detail-section scroll-mt-44 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div class="lg:col-span-6 space-y-4">
                    <span class="text-brand-olive text-xs font-semibold tracking-widest uppercase">Overview</span>
                    <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">${product.tagline}</h2>
                    <p class="text-slate-600 text-sm sm:text-base leading-relaxed">${product.description}</p>
                </div>
                ${isVehicle ? `
                <div class="lg:col-span-6 grid grid-cols-2 gap-4">
                    ${[
                        { icon: 'cpu', label: 'Powertrain', value: product.powertrain },
                        { icon: 'battery-full', label: 'Battery', value: product.battery },
                        { icon: 'users', label: 'Seating', value: product.seating },
                        { icon: 'route', label: 'Range', value: product.range }
                    ].filter(h => isMeaningful(h.value)).map(h => `
                        <div class="container-light-beam rounded-2xl bg-brand-card border border-brand-border p-5 space-y-2">
                            <div class="p-2.5 rounded-xl bg-brand-olive/10 text-brand-olive w-fit"><i data-lucide="${h.icon}" class="w-5 h-5"></i></div>
                            <div class="text-[11px] uppercase tracking-wider text-brand-slate font-medium">${h.label}</div>
                            <div class="text-sm sm:text-base font-bold text-slate-900">${h.value}</div>
                        </div>
                    `).join('')}
                </div>
                ` : `
                <div class="lg:col-span-6 h-64 sm:h-80 rounded-3xl bg-white border border-brand-border p-6 flex items-center justify-center">
                    <img src="${product.gallery[1] || product.image}" alt="${product.name}" class="max-h-full max-w-full object-contain">
                </div>
                `}
            </section>

            ${isVehicle ? `
            <!-- COLORS -->
            <section id="colors" class="detail-section scroll-mt-44 rounded-3xl bg-brand-card border border-brand-border p-6 sm:p-10">
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div class="lg:col-span-6 relative h-72 sm:h-[440px] flex items-center justify-center">
                        <img id="detail-color-img" src="${startColor && startColor.image ? startColor.image : product.image}" alt="${product.name} color preview" class="w-full h-full object-contain drop-shadow-[0_20px_25px_rgba(0,0,0,0.18)]">
                        <span id="detail-color-photo-note" class="${startColor && !startColor.image ? '' : 'hidden'} absolute bottom-0 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-white/90 border border-brand-border text-[11px] text-slate-500 whitespace-nowrap">Photo shows a standard finish</span>
                        <!-- Live summary of the selected body / seat / canopy colors -->
                        <div id="detail-build-summary" class="absolute top-0 left-0 flex flex-wrap gap-1.5 max-w-full"></div>
                    </div>
                    <div class="lg:col-span-6 space-y-5">
                        <div class="space-y-1">
                            <span class="text-brand-olive text-xs font-semibold tracking-widest uppercase">Colors</span>
                            <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900">${bodyColors.length ? 'Choose your body color' : 'Colors on request'}</h2>
                        </div>

                        ${bodyColors.length ? `
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
                            <p class="text-sm text-slate-600">Selected: <span id="detail-color-name" class="font-bold text-slate-900">${startColor.name}</span></p>
                        ` : `
                            <p class="text-slate-600 text-sm leading-relaxed">Available colors for the ${product.name} are confirmed per order. Request a quote and our team will send the current options.</p>
                        `}

                        ${[
                            { type: 'seat', title: 'Seat Color', options: seatOptions },
                            { type: 'canopy', title: 'Canopy Color', options: canopyOptions }
                        ].filter(t => t.options.length).map(t => `
                            <div class="space-y-2">
                                <p class="text-[11px] font-bold uppercase tracking-wider text-brand-slate">${t.title}: <span id="detail-${t.type}-name" class="text-slate-900 normal-case tracking-normal">${t.options[0]}</span></p>
                                <div class="flex flex-wrap gap-2" role="group" aria-label="${t.title}">
                                    ${t.options.map((opt, i) => `
                                        <button type="button" onclick="selectDetailTrim('${t.type}', '${opt}')" data-type="${t.type}" data-value="${opt}" aria-pressed="${i === 0}" class="detail-trim ${i === 0 ? 'detail-trim-active' : ''}">
                                            <span class="detail-trim-dot" style="background:${TRIM_COLOR_HEX[opt] || '#CBD5E1'}"></span>${opt}
                                        </button>
                                    `).join('')}
                                </div>
                                ${t.type === 'seat' && colorFamily.seatNote ? `<p class="text-[11px] text-slate-500">${colorFamily.seatNote}</p>` : ''}
                            </div>
                        `).join('')}

                        ${seatOptions.length || canopyOptions.length ? `
                            <div class="flex gap-2.5 p-3 rounded-xl bg-white border border-brand-olive/30 text-xs text-slate-600 leading-relaxed">
                                <i data-lucide="info" class="w-4 h-4 text-brand-olive flex-shrink-0 mt-0.5"></i>
                                <p><span class="font-semibold text-slate-800">Note:</span> Custom seat and canopy color combinations may vary by model. Select your preferred color options for custom quotation.</p>
                            </div>
                        ` : ''}

                        <div class="flex flex-wrap gap-3">
                            <button id="detail-color-quote" onclick="requestQuoteInColor()" class="inline-flex items-center gap-2 bg-brand-olive hover:bg-brand-oliveHover text-slate-900 font-bold px-6 py-3 rounded-xl shadow-lg text-sm transition-all btn-shimmer">
                                <i data-lucide="${bodyColors.length ? 'palette' : 'file-text'}" class="w-4 h-4"></i>
                                <span>${bodyColors.length || canopyOptions.length ? 'Request a Quote with These Colors' : 'Request a Quote'}</span>
                            </button>
                            ${accessoryCount ? `
                                <button onclick="addAccessoriesFromDetail()" class="inline-flex items-center gap-2 bg-white hover:bg-brand-olive/10 border-2 border-dashed border-brand-olive/50 hover:border-brand-olive text-brand-oliveHover font-bold px-5 py-3 rounded-xl text-sm transition-all">
                                    <i data-lucide="plus-circle" class="w-4 h-4"></i>
                                    <span>Add Accessories</span>
                                    <span class="text-xs font-semibold text-slate-500">(${accessoryCount} paid add-ons)</span>
                                </button>
                            ` : ''}
                        </div>
                        ${bodyColors.length ? '<p class="text-[11px] text-slate-400">Swatches are approximate screen colors. Our team will confirm the final finish.</p>' : ''}
                    </div>
                </div>
            </section>
            ` : ''}

            <!-- FEATURES -->
            <section id="features" class="detail-section scroll-mt-44 space-y-8">
                <div class="space-y-1">
                    <span class="text-brand-olive text-xs font-semibold tracking-widest uppercase">Features</span>
                    <h2 class="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">What comes with the ${product.name}</h2>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${Math.min(product.features.length, 4)} gap-4 sm:gap-6">
                    ${product.features.map((f, i) => `
                        <div class="container-light-beam rounded-3xl bg-white border border-brand-border p-6 space-y-4 shadow-sm">
                            <div class="flex items-center justify-between">
                                <div class="p-3 rounded-2xl bg-brand-olive/10 text-brand-olive"><i data-lucide="${DETAIL_FEATURE_ICONS[i % DETAIL_FEATURE_ICONS.length]}" class="w-5 h-5"></i></div>
                                <span class="text-3xl font-black text-slate-200">0${i + 1}</span>
                            </div>
                            <h3 class="text-sm sm:text-base font-bold text-slate-900 leading-snug">${f}</h3>
                        </div>
                    `).join('')}
                </div>
            </section>

            <!-- SPECIFICATIONS -->
            <section id="specifications" class="detail-section scroll-mt-44 space-y-8">
                <div class="space-y-1">
                    <span class="text-brand-olive text-xs font-semibold tracking-widest uppercase">Specifications</span>
                    <h2 class="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Technical Specifications</h2>
                </div>
                <div class="space-y-3">
                    ${specGroups.map((g, i) => `
                        <details class="detail-spec-group rounded-2xl border border-brand-border bg-white" ${i < 2 ? 'open' : ''}>
                            <summary class="flex items-center justify-between p-5 cursor-pointer list-none">
                                <span class="font-bold text-slate-900 text-sm sm:text-base">${g.title}</span>
                                <i data-lucide="chevron-down" class="detail-spec-chevron w-5 h-5 text-brand-olive"></i>
                            </summary>
                            <dl class="px-5 pb-4">
                                ${g.rows.map(([k, v]) => `
                                    <div class="grid grid-cols-2 gap-4 py-3 border-t border-brand-border text-xs sm:text-sm">
                                        <dt class="text-brand-slate">${k}</dt>
                                        <dd class="font-semibold text-slate-900">${v}</dd>
                                    </div>
                                `).join('')}
                            </dl>
                        </details>
                    `).join('')}
                </div>
                <p class="text-[11px] text-slate-400">Specifications may change without prior notice. Actual range varies with load, terrain, and driving habits.</p>
            </section>

            <!-- QUOTE CTA BAND -->
            <section class="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div class="space-y-2">
                    <h2 class="text-2xl sm:text-3xl font-extrabold">Interested in the ${product.name}?</h2>
                    <p class="text-slate-300 text-sm">Get pricing, availability, and customization options from our team.</p>
                </div>
                <div class="flex flex-wrap gap-3">
                    <button onclick="openQuoteModal('${safeName}')" class="inline-flex items-center gap-2 bg-brand-olive hover:bg-brand-oliveHover text-slate-900 font-bold px-6 py-3 rounded-xl text-sm transition-all btn-shimmer">
                        <i data-lucide="file-text" class="w-4 h-4"></i> Request a Quote
                    </button>
                    <button onclick="goToHomeSection('home-branches')" class="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl border border-white/20 text-sm transition-all">
                        <i data-lucide="map-pin" class="w-4 h-4"></i> Find a Branch
                    </button>
                </div>
            </section>

            ${related.length ? `
            <!-- RELATED -->
            <section class="space-y-8">
                <div class="flex items-end justify-between gap-4">
                    <div class="space-y-1">
                        <span class="text-brand-olive text-xs font-semibold tracking-widest uppercase">${product.category}</span>
                        <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900">You may also like</h2>
                    </div>
                    <button onclick="setCategoryAndNavigate('${product.category}')" class="inline-flex items-center gap-2 text-brand-olive hover:text-brand-oliveHover font-semibold text-sm">View All <i data-lucide="arrow-right" class="w-4 h-4"></i></button>
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
    const quoteName = (product ? product.name : model.name).replace(/'/g, "\\'");

    return `
        <div id="${modelAnchorId(segmentId, subId, modelKey)}" class="container-light-beam group rounded-2xl bg-brand-card border border-brand-border p-4 sm:p-5 flex flex-col">
            <div class="h-52 sm:h-60 rounded-xl bg-white flex items-center justify-center overflow-hidden">
                ${model.image
                    ? `<img src="${model.image}" alt="${model.name}" loading="lazy" class="product-card-img cart-img-fill">`
                    : `<div class="flex flex-col items-center gap-2 text-slate-400"><i data-lucide="image" class="w-8 h-8"></i><span class="text-[11px] font-medium">Photo coming soon</span></div>`}
            </div>
            <h4 class="mt-4 text-sm sm:text-base font-bold text-slate-900 group-hover:text-brand-olive transition-colors">${model.name}</h4>
            ${product ? `<p class="text-xs text-slate-500 mt-1 line-clamp-2">${product.tagline}</p>` : ''}
            <div class="mt-auto pt-4 grid ${product ? 'grid-cols-2' : 'grid-cols-1'} gap-2 relative z-30">
                ${product ? `<button onclick="navigateTo('product-details', '${product.slug}')" class="py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-semibold transition-colors">View Details</button>` : ''}
                <button onclick="openQuoteModal('${quoteName}')" class="py-2 px-3 rounded-xl bg-brand-olive hover:bg-brand-oliveHover text-slate-900 text-xs font-bold transition-colors btn-shimmer">Request Quote</button>
            </div>
        </div>
    `;
}

function renderSegmentPage() {
    const segment = NAV_SEGMENTS.find(s => s.id === currentSlug) || NAV_SEGMENTS[0];

    return `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12 sm:space-y-16">
        <!-- Segment Header -->
        <section class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl bg-gradient-to-r from-brand-card via-white to-white border border-brand-border p-6 sm:p-10 overflow-hidden">
            <div class="lg:col-span-7 space-y-4">
                <span class="text-brand-olive text-xs font-semibold tracking-widest uppercase">${segment.tagline}</span>
                <h1 class="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">${segment.label}</h1>
                <p class="text-slate-500 text-xs sm:text-base leading-relaxed max-w-xl">${segment.description}</p>
                <div class="flex flex-wrap gap-2 pt-2">
                    ${segment.subcategories.map(sub => `
                        <button onclick="openSegment('${segment.id}', '${segment.id}-${sub.id}')" class="px-4 py-2 rounded-full bg-white border border-brand-border hover:border-brand-olive text-slate-700 text-xs font-semibold transition-colors">${sub.label}</button>
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
                <div class="flex items-center gap-4">
                    <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900">${sub.label}</h2>
                    <div class="flex-1 h-px bg-brand-border"></div>
                </div>
                ${sub.groups.map(group => `
                    <div class="space-y-4">
                        ${group.label !== sub.label ? `<h3 class="text-sm font-bold uppercase tracking-wider text-brand-slate">${group.label}</h3>` : ''}
                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                            ${group.items.map(key => renderSegmentModelCard(segment.id, sub.id, key)).join('')}
                        </div>
                    </div>
                `).join('')}
            </section>
        `).join('')}
    </div>
    `;
}

function renderSolutionsPage() {
    return `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12 sm:space-y-16">
        <div class="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
            <span class="text-brand-olive text-xs font-semibold tracking-widest uppercase">Fleet Solutions</span>
            <h1 class="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">Tailored Mobility for Every Industry</h1>
            <p class="text-slate-500 text-xs sm:text-base leading-relaxed">
                From championship golf venues to high-end hospitality and heavy commercial operations, we engineer eco-friendly vehicle solutions tailored to your operational workflows.
            </p>
        </div>

        <div class="space-y-12 sm:space-y-16">
            ${SOLUTIONS_DATA.map((sol, idx) => `
                <div class="container-light-beam grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-12 rounded-3xl bg-brand-card border border-brand-border">
                    <div class="lg:col-span-6 ${idx % 2 === 1 ? 'lg:order-2' : ''}">
                        <div class="rounded-2xl overflow-hidden border border-brand-border h-64 sm:h-96 bg-white p-4 flex items-center justify-center">
                            <img src="${sol.image}" alt="${sol.title}" class="product-card-img max-h-full object-contain">
                        </div>
                    </div>
                    <div class="lg:col-span-6 space-y-4 sm:space-y-6 ${idx % 2 === 1 ? 'lg:order-1' : ''}">
                        <div>
                            <span class="text-brand-olive text-xs font-semibold uppercase">${sol.subtitle}</span>
                            <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">${sol.title}</h2>
                        </div>
                        <p class="text-slate-600 text-xs sm:text-sm leading-relaxed">${sol.description}</p>
                        <div class="space-y-2">
                            ${sol.benefits.map(b => `
                                <div class="flex items-center gap-2 text-xs text-slate-600">
                                    <i data-lucide="check-circle-2" class="w-4 h-4 text-brand-olive flex-shrink-0"></i>
                                    <span>${b}</span>
                                </div>
                            `).join('')}
                        </div>
                        <button onclick="openQuoteModal('${sol.title}')" class="inline-flex items-center gap-2 bg-brand-olive hover:bg-brand-oliveHover text-slate-900 font-bold px-6 py-3 rounded-xl shadow-lg text-xs sm:text-sm btn-shimmer">
                            <span>Inquire Fleet Pricing</span>
                        </button>
                    </div>
                </div>
            `).join('')}
        </div>
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
        <img src="image/Hero/hero-3.webp" alt="Golfcart.ph service technician working on a Club Car" fetchpriority="high" class="w-full aspect-[16/9] max-h-[78vh] object-cover">
        <div class="hidden sm:block absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/45 to-transparent pointer-events-none"></div>
    </section>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-8 sm:pb-12 space-y-14 sm:space-y-20">
        <div class="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 reveal">
            <span class="text-brand-olive text-xs font-semibold uppercase tracking-widest">After-Sales Excellence</span>
            <h1 class="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">Service, Spare Parts & Support</h1>
            <p class="text-slate-500 text-xs sm:text-base leading-relaxed">
                We provide mobile technician dispatch, original factory spare parts, and remote telemetry battery health monitoring.
            </p>
            <div class="flex flex-wrap justify-center gap-3 pt-2">
                <button onclick="document.getElementById('service-request').scrollIntoView({ behavior: 'smooth' })" class="inline-flex items-center gap-2 bg-brand-olive hover:bg-brand-oliveHover text-slate-900 font-bold px-6 py-3 rounded-xl shadow-lg text-sm transition-all btn-shimmer">
                    <i data-lucide="wrench" class="w-4 h-4"></i> Schedule Service
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
            <h3 class="text-xl sm:text-2xl font-bold text-slate-900 mb-6 text-center z-10 relative">Schedule Mobile Service Dispatch</h3>
            <form onsubmit="event.preventDefault(); showToast('Service Request Submitted! Ref: #SRV-9821');" class="space-y-4 text-xs z-10 relative">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div><label class="block mb-1 text-slate-600">Name</label><input required type="text" placeholder="John Doe" class="w-full bg-white border border-brand-border rounded-xl p-3 text-slate-900 focus:outline-none focus:border-brand-olive"></div>
                    <div><label class="block mb-1 text-slate-600">Organization</label><input required type="text" placeholder="Club or Resort Name" class="w-full bg-white border border-brand-border rounded-xl p-3 text-slate-900 focus:outline-none focus:border-brand-olive"></div>
                </div>
                <div><label class="block mb-1 text-slate-600">Service Required</label>
                    <select class="w-full bg-white border border-brand-border rounded-xl p-3 text-slate-900 focus:outline-none focus:border-brand-olive">
                        <option>Comprehensive Preventive Maintenance (7-Point Check)</option>
                        <option>On-Site Technician Repair</option>
                        <option>Original Spare Parts Order</option>
                        <option>Lithium Battery Health Check</option>
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
            <h1 class="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">Golfcart.ph Blog</h1>
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
            <h1 class="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">About Golfcart.ph</h1>
            <p class="text-slate-500 text-xs sm:text-base leading-relaxed">
                Empowering outdoor lifestyle and electric utility transportation across the Philippines.
            </p>
        </div>

        <!-- Section 1: Brand Story & SJK Guahan Overview -->
        <div class="container-light-beam grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-brand-card border border-brand-border rounded-3xl p-6 sm:p-12 shadow-2xl">
            <div class="lg:col-span-5 flex justify-center">
                <div class="relative w-full max-w-md h-64 sm:h-80 rounded-2xl bg-gradient-to-br from-brand-olive/20 via-brand-dark to-white border border-brand-border p-6 flex items-center justify-center overflow-hidden group">
                    <div class="absolute inset-0 bg-[radial-gradient(#749E35_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>
                    <img src="image/Products/CA500.png" alt="CarryAll 500 Utility Cart" class="product-card-img max-h-full max-w-full object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.18)] transform group-hover:scale-105 transition-transform duration-500">
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