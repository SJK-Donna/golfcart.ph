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
        category: 'Golf',
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
        glbModel: 'image/Products/cart.glb',
        gallery: ['image/Products/Tempo 2+2 - Golf.png', 'image/Products/Tempo 2+2 - Golf - Red.png', 'image/Products/Base.png'],
        features: ['Four Seater Back-to-Back Seating Layout', 'Dual Integrated Golf Bag Attachment Racks', 'High-Impact Foldable Windshield Assembly', 'Corrosion-Resistant Aluminum Spaceframe'],
        specs: { 'Motor Type': '5.0 kW AC Direct Drive Motor', 'Controller': 'Curtis 350A Programmable AC Controller', 'Chassis': 'Rust-Proof Lightweight Aluminum', 'Brakes': 'Rear Mechanical Drum & Auto Park Brake' }
    },
    {
        id: 'tempo-premium-plus',
        slug: 'tempo-premium-plus',
        name: 'Tempo Premium+',
        category: 'Golf',
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
        gallery: ['image/Products/Premium+.png', 'image/Products/Premium+ black.png', 'image/Products/Premium.png'],
        features: ['Custom Diamond Stitch Premium Leather Cushioning', 'Underbody Ambient LED Accent Lighting', 'Integrated Beverage Cooler & Ball Cleaner Units', 'Machined Gloss Black Alloy Wheels'],
        specs: { 'Motor Type': '5.0 kW AC Motor', 'Controller': 'Curtis 350A Controller', 'Chassis': 'Powder Coated Aluminum Frame', 'Brakes': 'Hydraulic 4-Wheel Disc Brakes' }
    },
    {
        id: 'tempo-premium',
        slug: 'tempo-premium',
        name: 'Tempo Premium',
        category: 'Golf',
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
        gallery: ['image/Products/Premium.png', 'image/Products/Base +.png'],
        features: ['Ergonomic Contour Bench Seating', 'Shatter-Resistant Foldable Polycarbonate Windshield', 'Automotive Style Front Bumper Protection', 'Dual Golf Bag Racks with Quick-Release Straps'],
        specs: { 'Motor Type': '5.0 kW AC Motor', 'Controller': 'Enpower 350A Controller', 'Chassis': 'Aircraft Grade Aluminum Chassis', 'Brakes': '4-Wheel Hydraulic Brake System' }
    },
    {
        id: 'tempo-base-plus',
        slug: 'tempo-base-plus',
        name: 'Tempo Base+',
        category: 'Golf',
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
        gallery: ['image/Products/Base +.png', 'image/Products/Base.png'],
        features: ['Sleek Aerodynamic Body Styling', 'Clear Panoramic Windshield', 'Weatherproof Molded Vinyl Seats', 'Standard Turf-Friendly Tread Tires'],
        specs: { 'Motor Type': '4.0 kW AC Brushless', 'Controller': 'Curtis Controller', 'Chassis': 'Aluminum Box Frame', 'Brakes': 'Dual Rear Drum Brakes' }
    },
    {
        id: 'tempo-base',
        slug: 'tempo-base',
        name: 'Tempo Base',
        category: 'Golf',
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
        category: 'Personal',
        tagline: 'Conquer Tougher Terrains in Style',
        description: 'A Clubcar Tempo that can conquer tougher terrains with its elevated suspension lift kit and rugged all-terrain tire package.',
        priceLabel: 'Inquire for Price',
        seating: '4 Seats (2+2 Layout)',
        range: '85 km per charge',
        speed: '35 km/h max',
        battery: '72V Industrial Lithium-Ion',
        chargingTime: '3.5 Hours',
        powertrain: '6.3 kW AC Heavy Torque Motor',
        image: 'image/Products/Tempo 2+2 - Lifted.png',
        gallery: ['image/Products/Tempo 2+2 - Lifted.png', 'image/Products/4 plus2 Lifted.png'],
        features: ['4-Inch Heavy-Duty Lift Kit Installed', '23" All-Terrain Tread Tires on Beadlock Style Rims', 'Rear Convertible Flip-Seat with Cargo Flatbed', 'High-Intensity Front LED Headlight Bar'],
        specs: { 'Motor Type': '6.3 kW AC Heavy-Torque Motor', 'Controller': 'Curtis 400A Controller', 'Chassis': 'Reinforced Aluminum Chassis', 'Brakes': 'Hydraulic 4-Wheel Disc Brakes' }
    },
    {
        id: 'tempo-2-2-explorer',
        slug: 'tempo-2-2-explorer',
        name: 'Tempo 2+2 Explorer',
        category: 'Personal',
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
        gallery: ['image/Products/Tempo 2+2 - Explorer.png', 'image/Products/Tempo 2+2 - Family.png'],
        features: ['Deluxe Padded Seating in Dual-Tone Finish', 'Foldable Rear Passenger Footrest', 'USB Fast-Charging Smartphone Ports', 'Tinted Foldable Polycarbonate Windshield'],
        specs: { 'Motor Type': '5.0 kW AC Direct Drive Motor', 'Controller': 'Curtis 350A Controller', 'Chassis': 'Lightweight Aluminum Spaceframe', 'Brakes': 'Hydraulic Disc Brakes' }
    },
    {
        id: 'tempo-2-2-family',
        slug: 'tempo-2-2-family',
        name: 'Tempo 2+2 Family',
        category: 'Personal',
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
        features: ['Full 3-Point Passenger Safety Seatbelts', 'Rear Armrest Console with Integrated Cup Holders', 'Soundstream Bluetooth Sound Bar Mounted on Roof', 'Automotive Grade LED Lighting Package'],
        specs: { 'Motor Type': '5.0 kW AC Motor', 'Controller': 'Enpower 350A Controller', 'Chassis': 'Aluminum Frame Chassis', 'Brakes': '4-Wheel Hydraulic Disc Brakes' }
    },
    {
        id: 'club-car-onward',
        slug: 'club-car-onward',
        name: 'Club Car Onward',
        category: 'Personal',
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
        gallery: ['image/Products/Club Car 4.png', 'image/Products/Tempo 2+2 - Family - Sangria Red.png'],
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
        category: 'Commercial',
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
        gallery: ['image/Products/Villager 6.png', 'image/Products/Villager 8.png', 'image/Products/Club Car 6.png'],
        features: ['Extended Roof Canopy with Rain Gutter Trim', 'Ultra-Soft Memory Foam Marine Cushioning', 'Rear Fold-Down Footrest Deck', 'Heavy Duty Commercial Axle Suspension'],
        specs: { 'Motor Type': '6.3 kW AC Motor', 'Controller': 'Curtis 400A Controller', 'Chassis': 'Galvanized Steel Frame', 'Brakes': 'Hydraulic Disc Brakes + Regenerative' }
    },
    {
        id: 'club-car-4-plus-2-lifted',
        slug: 'club-car-4-plus-2-lifted',
        name: 'Club Car 4+2 Lifted',
        category: 'Commercial',
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
        gallery: ['image/Products/4 plus2 Lifted.png', 'image/Products/Club Car 6+2.png'],
        features: ['Factory Long-Travel Lift Kit Assembly', 'Over-Sized Off-Road All-Terrain Tires', 'Heavy Bumper Guard & Skid Plate', 'Full Weather Clear Enclosure Curtain'],
        specs: { 'Motor Type': '6.3 kW AC Heavy Duty', 'Controller': 'Curtis 400A Controller', 'Chassis': 'Heavy Duty Tubular Frame', 'Brakes': '4-Wheel Hydraulic Disc Brakes' }
    },
    {
        id: 'villager-8',
        slug: 'villager-8',
        name: 'Villager 8',
        category: 'Commercial',
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
        gallery: ['image/Products/Villager 8.png', 'image/Products/Club Car 6+2.png'],
        features: ['Full Panoramic Length Overhead Canopy Roof', 'Heavy Load-Bearing Suspension Dampers', 'Individual Row USB Fast Charging Outlets', 'Rear Cargo Convertible Seat Deck'],
        specs: { 'Motor Type': '7.5 kW AC Motor', 'Controller': 'Curtis 450A Controller', 'Chassis': 'Reinforced Steel Frame', 'Brakes': '4-Wheel Hydraulic Disc Brakes' }
    },
    {
        id: 'club-car-minibus',
        slug: 'club-car-minibus',
        name: 'Club Car Minibus 14',
        category: 'Commercial',
        tagline: 'Fourteen (14) Seater Mass Shuttle Solution',
        description: 'When you need to move groups efficiently, nothing gets the job done better than commercial shuttles from Club Car.',
        priceLabel: 'Inquire for Price',
        seating: '14 Seats',
        range: '110 km per charge',
        speed: '30 km/h max',
        battery: '72V 200Ah Commercial Lithium Pack',
        chargingTime: '4.5 Hours',
        powertrain: '7.5 kW Heavy Duty Motor',
        image: 'image/Products/Minibus 14.png',
        gallery: ['image/Products/Minibus 14.png', 'image/Products/Minibus 11.png'],
        features: ['14 Forward-Facing Captain Seats with Lap Belts', 'Passenger Roof Ventilation System', 'Motorized Retractable Boarding Step', 'Built-in PA Public Address Speaker System'],
        specs: { 'Motor Type': '7.5 kW AC Heavy Torque Motor', 'Controller': 'Curtis 450A Industrial Controller', 'Chassis': 'Reinforced Box Tubular Steel Frame', 'Brakes': 'Dual Circuit Vacuum Servo Brakes' }
    },

    // ==========================================
    // 4. INDUSTRIAL VEHICLES
    // ==========================================
    {
        id: 'cafe-express',
        slug: 'cafe-express',
        name: 'Cafe Express Mobile Catering',
        category: 'Industrial',
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
        gallery: ['image/Products/Cafe Express.png', 'image/Products/F&B.png'],
        features: ['Insulated Stainless Steel Beverage Compartment', 'Display Shelving with Overhead Illumination', 'Slide-Out Trash and Recycling Receptacles', 'Retractable Awning Canopy Shade Bar'],
        specs: { 'Motor Type': '5.0 kW AC Direct Drive Motor', 'Controller': 'Curtis 350A Commercial Controller', 'Chassis': 'Galvanized Steel Frame', 'Brakes': 'Front Disc & Rear Drum Brakes' }
    },
    {
        id: 'transporter-400',
        slug: 'transporter-400',
        name: 'Transporter 400 Utility',
        category: 'Industrial',
        tagline: 'Four (4) up to Six (6) Seater Cargo Deck',
        description: 'Combines passenger seating with an expanded rear utility box for facility maintenance and cargo transport.',
        priceLabel: 'Inquire for Price',
        seating: '4 to 6 Seats + Flatbed',
        range: '80 km per charge',
        speed: '30 km/h max',
        battery: '72V Industrial Lithium',
        chargingTime: '4.0 Hours',
        powertrain: '6.3 kW AC Motor',
        image: 'image/Products/Transporter 4.png',
        gallery: ['image/Products/Transporter 4.png', 'image/Products/House keeping.png'],
        features: ['Aluminum Drop-Side Flatbed Utility Cargo Deck', 'Reinforced Front Steel Brush Guard', 'Heavy Duty Tow Hitch Receiver Included', 'Waterproof Heavy Rubberized Cabin Floor'],
        specs: { 'Motor Type': '6.3 kW AC Heavy Torque Brushless', 'Controller': 'Curtis High-Output Industrial Controller', 'Chassis': 'Hot-Dip Galvanized Reinforced Steel Frame', 'Brakes': '4-Wheel Hydraulic Disc Brakes' }
    },
    {
        id: 'carryall-500',
        slug: 'carryall-500',
        name: 'CarryAll 500',
        category: 'Industrial',
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
        gallery: ['image/Products/CA500.png', 'image/Products/CA300.png', 'image/Products/CA700.png'],
        features: ['Heavy Duty Aluminum Dump Cargo Box', '1,200 lbs Total Payload Carrying Capacity', 'All-Terrain Heavy Ply Industrial Tires', 'High-Visibility Yellow Strobe Safety Light'],
        specs: { 'Motor Type': '6.3 kW Heavy Duty AC Motor', 'Controller': 'Curtis 400A Industrial Controller', 'Chassis': 'Rust-Proof Armor-Plex Aluminum Frame', 'Brakes': '4-Wheel Mechanical Disc Brakes' }
    },
    {
        id: 'carryall-300',
        slug: 'carryall-300',
        name: 'CarryAll 300',
        category: 'Industrial',
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
        gallery: ['image/Products/CA300.png', 'image/Products/CA500.png'],
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

// Category Headers Data Map
const CATEGORY_BANNERS = {
    'Golf': {
        title: 'Golf Mobility',
        headline: 'Control Costs. Simplify Operations. Win-Win.',
        subheadline: 'Precision engineered for championship courses, player satisfaction, and country club fairways.',
        image: 'image/Products/Tempo 2+2 - Golf.png'
    },
    'Personal': {
        title: 'Personal & Subdivision',
        headline: 'Places Safety, Durability, and Fun First',
        subheadline: 'At the forefront of your residential and gated community living experience.',
        image: 'image/Products/Tempo 2+2 - Family - Sangria Red.png'
    },
    'Commercial': {
        title: 'Commercial Fleet',
        headline: 'First-Class Hospitality Shuttle Mobility',
        subheadline: 'When you need to move people efficiently across resorts, hotels, and campus grounds.',
        image: 'image/Products/Club Car 6+2.png'
    },
    'Industrial': {
        title: 'Industrial Workhorses',
        headline: 'Fleet Tracker + Unmatched Towing Performance',
        subheadline: 'Heavy payload capacity built for demanding groundskeeping, utility, and campus logistics.',
        image: 'image/Products/Transporter 4.png'
    },
    'Accessories': {
        title: 'Original Accessories',
        headline: 'Elevate Your Ride with Genuine Upgrades',
        subheadline: 'Hand-crafted leather seats, Bluetooth audio bars, sand bottles, and weather enclosures.',
        image: 'image/Accessories/Lux Seat - Brown.jpg'
    }
};

// Carousel Engine Variables
let currentSlideIndex = 0;
let carouselTimer = null;

const CAROUSEL_SLIDES = [
    {
        title: "Unforgettable Moments",
        subtitle: "In Every Ride",
        modelName: "Tempo Base",
        category: "Golf",
        description: "Places safety, durability, and fun at the forefront of your golf & residential mobility experience.",
        image: "image/Products/Tempo 2+2 - Golf.png",
        slug: "tempo-2-2-golf"
    },
    {
        title: "The Club Car Tempo",
        subtitle: "Residential & Family Luxury",
        modelName: "Tempo 2+2 Family",
        category: "Personal",
        description: "Places safety and style at the forefront of your community experience. Perfect for bringing family and friends around.",
        image: "image/Products/Tempo 2+2 - Family - Sangria Red.png",
        slug: "tempo-2-2-family-sangria"
    },
    {
        title: "Create Lasting Memories",
        subtitle: "High-Capacity Mass Transit",
        modelName: "Minibus 14",
        category: "Commercial",
        description: "When you need to move people efficiently, nothing gets the job done better than commercial shuttles from Golfcart.ph.",
        image: "image/Products/Minibus 14.png",
        slug: "club-car-minibus"
    },
    {
        title: "Enjoy the Outdoors",
        subtitle: "Memorable Group Travel",
        modelName: "Villager 6",
        category: "Commercial",
        description: "Make the ride as memorable as the destination with ultra-smooth suspension and comfortable passenger seating.",
        image: "image/Products/Villager 6.png",
        slug: "villager-6"
    },
    {
        title: "Do Your Best Work",
        subtitle: "Heavy-Duty Utility Hauler",
        modelName: "CarryAll 500",
        category: "Industrial",
        description: "Built to handle tough jobs across commercial facilities, groundskeeping compounds, and golf courses with zero emissions.",
        image: "image/Products/CA500.png",
        slug: "carryall-500"
    }
];

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
    }, 5500);
}

function stopCarouselAutoPlay() {
    if (carouselTimer) clearInterval(carouselTimer);
}

function updateCarouselUI() {
    CAROUSEL_SLIDES.forEach((_, idx) => {
        const slide = document.getElementById(`hero-slide-${idx}`);
        const dot = document.getElementById(`carousel-dot-${idx}`);
        if (slide) {
            const img = slide.querySelector('.product-card-img');
            if (idx === currentSlideIndex) {
                slide.classList.remove('carousel-slide-hidden');
                slide.classList.add('carousel-slide-active');
                
                // Trigger 2D Drive-In Motion on the Cart Image
                if (img) {
                    img.classList.remove('animate-cart-drive');
                    void img.offsetWidth; // Force Reflow
                    img.classList.add('animate-cart-drive');
                }
            } else {
                slide.classList.remove('carousel-slide-active');
                slide.classList.add('carousel-slide-hidden');
                if (img) img.classList.remove('animate-cart-drive');
            }
        }
        if (dot) {
            if (idx === currentSlideIndex) {
                dot.classList.add('w-8', 'bg-brand-olive');
                dot.classList.remove('w-2.5', 'bg-slate-700');
            } else {
                dot.classList.remove('w-8', 'bg-brand-olive');
                dot.classList.add('w-2.5', 'bg-slate-700');
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
        image: 'image/Products/Club Car 6.png',
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
        title: 'Commercial & Industrial Facilities',
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

// State Engine Variables
let currentPage = 'home';
let currentSlug = null;
let productFilterCategory = 'All';
let productSearchQuery = '';

// Application Initialization
window.addEventListener('DOMContentLoaded', () => {
    initScrollHeader();
    initMobileMenu();
    populateModalProductDropdown();
    initCustomCursor();
    initMouseSpotlight();
    renderApp();
});

function initScrollHeader() {
    window.addEventListener('scroll', () => {
        const header = document.getElementById('main-header');
        if (header) {
            if (window.scrollY > 30) {
                header.classList.add('bg-brand-dark/90', 'backdrop-blur-md', 'border-b', 'border-brand-border', 'py-3', 'shadow-xl');
                header.classList.remove('bg-transparent', 'py-5');
            } else {
                header.classList.remove('bg-brand-dark/90', 'backdrop-blur-md', 'border-b', 'border-brand-border', 'py-3', 'shadow-xl');
                header.classList.add('bg-transparent', 'py-5');
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
    
    document.querySelectorAll('.nav-link').forEach(btn => {
        if (btn.dataset.page === page) {
            btn.classList.add('text-brand-olive', 'bg-slate-800/80');
            btn.classList.remove('text-slate-300');
        } else {
            btn.classList.remove('text-brand-olive', 'bg-slate-800/80');
            btn.classList.add('text-slate-300');
        }
    });

    renderApp();
}

function setCategoryFilter(cat) {
    productFilterCategory = cat;
    renderApp();
}

function populateModalProductDropdown() {
    const select = document.getElementById('modal-product-select');
    if (select) {
        select.innerHTML = PRODUCTS_DATA.map(p => `<option value="${p.name}">${p.name} (${p.category})</option>`).join('');
    }
}

function openQuoteModal(productName = '') {
    const modal = document.getElementById('quote-modal');
    const select = document.getElementById('modal-product-select');
    if (modal) {
        if (productName && select) {
            const match = PRODUCTS_DATA.find(p => p.name.toLowerCase() === productName.toLowerCase());
            if (match) select.value = match.name;
        }
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
    showToast(`Quote Request Sent! Reference Code: #${refCode}`);
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
        // Global desktop background spotlight
        if (spotlight) {
            spotlight.style.setProperty('--mouse-x', `${e.clientX}px`);
            spotlight.style.setProperty('--mouse-y', `${e.clientY}px`);
        }

        // Global Container Light Beam Tracker (Applies to all containers with .container-light-beam class)
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
    } else if (currentPage === 'products') {
        viewport.innerHTML = renderProductsPage();
        bindProductsFilterEvents();
    } else if (currentPage === 'product-details') {
        viewport.innerHTML = renderProductDetailsPage();
    } else if (currentPage === 'solutions') {
        viewport.innerHTML = renderSolutionsPage();
    } else if (currentPage === 'service') {
        viewport.innerHTML = renderServicePage();
    } else if (currentPage === 'about') {
        viewport.innerHTML = renderAboutPage();
    } else if (currentPage === 'contact') {
        viewport.innerHTML = renderContactPage();
    }

    if (window.lucide) {
        lucide.createIcons();
    }
}

// --- PAGE RENDERING FUNCTIONS ---

function renderHomePage() {
    const featured = PRODUCTS_DATA.filter(p => p.category !== 'Accessories').slice(0, 4);
    
    setTimeout(() => {
        startCarouselAutoPlay();
    }, 100);

    return `
    <div class="space-y-16 sm:space-y-24 pb-16">
        <!-- Hero Carousel Section -->
        <section class="relative min-h-[80vh] sm:min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden -mt-16 sm:-mt-20 bg-brand-dark pt-16 sm:pt-20" onmouseenter="stopCarouselAutoPlay()" onmouseleave="startCarouselAutoPlay()">
            <div class="absolute inset-0 pointer-events-none hero-cart-glow"></div>
            
            <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full">
                <div class="relative min-h-[440px] sm:min-h-[480px] lg:min-h-[520px] flex items-center">
                    
                    ${CAROUSEL_SLIDES.map((slide, idx) => `
                        <div id="hero-slide-${idx}" class="carousel-slide ${idx === 0 ? 'carousel-slide-active' : 'carousel-slide-hidden'} absolute inset-0 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                            
                            <div class="lg:col-span-6 space-y-4 sm:space-y-6 z-20">
                                <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-olive/10 border border-brand-olive/30 text-brand-olive text-xs font-semibold uppercase tracking-widest backdrop-blur-md">
                                    <i data-lucide="zap" class="w-3.5 h-3.5 fill-current"></i>
                                    <span>${slide.category}</span>
                                </div>

                                <div class="space-y-2">
                                    <h1 class="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
                                        ${slide.title}
                                    </h1>
                                    <p class="text-lg sm:text-2xl font-semibold text-brand-slate">
                                        ${slide.subtitle}
                                    </p>
                                </div>

                                <p class="text-slate-400 text-xs sm:text-base leading-relaxed max-w-lg">
                                    ${slide.description}
                                </p>

                                <div class="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
                                    <button onclick="navigateTo('product-details', '${slide.slug}')" class="flex items-center gap-2.5 sm:gap-3 bg-brand-olive hover:bg-brand-oliveHover text-slate-950 font-extrabold px-5 py-3 sm:px-7 sm:py-3.5 rounded-xl transition-all shadow-xl shadow-brand-olive/20 hover:scale-105 text-xs sm:text-sm btn-shimmer">
                                        <span>Explore ${slide.modelName}</span>
                                        <i data-lucide="arrow-right" class="w-4 h-4"></i>
                                    </button>
                                    
                                    <button onclick="openQuoteModal('${slide.modelName}')" class="flex items-center gap-2 bg-slate-900/80 hover:bg-slate-800 text-white font-semibold px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl border border-brand-border backdrop-blur-md transition-all hover:border-brand-olive/50 text-xs sm:text-sm">
                                        <span>Request Quote</span>
                                    </button>
                                </div>

                                <div class="pt-1">
                                    <span class="inline-block px-3 py-1 rounded-md bg-brand-card border border-brand-border text-brand-olive font-mono text-[11px] sm:text-xs font-bold uppercase tracking-widest">
                                        Model: ${slide.modelName}
                                    </span>
                                </div>
                            </div>

                            <div class="lg:col-span-6 relative flex items-center justify-center">
                                <div class="container-light-beam relative w-full max-w-lg h-[260px] sm:h-[340px] lg:h-[420px] rounded-3xl bg-gradient-to-b from-brand-card/80 to-slate-950/90 border border-brand-border/80 p-4 sm:p-6 flex items-center justify-center shadow-2xl overflow-hidden group">
                                    <div class="absolute inset-0 bg-[radial-gradient(#749E35_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>
                                    <img src="${slide.image}" alt="${slide.modelName}" class="product-card-img max-h-full max-w-full object-contain filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)] transform group-hover:scale-105 transition-transform duration-500">
                                </div>
                            </div>

                        </div>
                    `).join('')}

                </div>

                <div class="flex items-center justify-between pt-6 sm:pt-8 border-t border-brand-border/60">
                    <div class="flex items-center gap-2">
                        ${CAROUSEL_SLIDES.map((_, idx) => `
                            <button id="carousel-dot-${idx}" onclick="goToSlide(${idx})" class="h-2.5 rounded-full transition-all duration-300 ${idx === 0 ? 'w-8 bg-brand-olive' : 'w-2.5 bg-slate-700 hover:bg-slate-500'}" aria-label="Go to slide ${idx + 1}"></button>
                        `).join('')}
                    </div>

                    <div class="flex items-center gap-2 sm:gap-3">
                        <button onclick="prevSlide()" class="p-2.5 sm:p-3 rounded-xl bg-brand-card border border-brand-border text-slate-300 hover:text-white hover:border-brand-olive transition-all" aria-label="Previous Slide">
                            <i data-lucide="chevron-left" class="w-4 h-4 sm:w-5 sm:h-5"></i>
                        </button>
                        <button onclick="nextSlide()" class="p-2.5 sm:p-3 rounded-xl bg-brand-card border border-brand-border text-slate-300 hover:text-white hover:border-brand-olive transition-all" aria-label="Next Slide">
                            <i data-lucide="chevron-right" class="w-4 h-4 sm:w-5 sm:h-5"></i>
                        </button>
                    </div>
                </div>

            </div>
        </section>

        <!-- Spec Highlights Ticker Bar -->
        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="container-light-beam grid grid-cols-2 md:grid-cols-4 gap-4 p-5 sm:p-8 rounded-2xl bg-brand-card border border-brand-border shadow-xl">
                <div class="flex items-center gap-3 sm:gap-4">
                    <div class="p-2.5 sm:p-3 rounded-xl bg-brand-olive/10 text-brand-olive flex-shrink-0">
                        <i data-lucide="zap" class="w-5 h-5 sm:w-6 sm:h-6"></i>
                    </div>
                    <div>
                        <div class="text-xl sm:text-2xl font-bold text-white">0%</div>
                        <div class="text-[10px] sm:text-xs text-brand-slate uppercase font-medium tracking-wider">Carbon Emissions</div>
                    </div>
                </div>
                <div class="flex items-center gap-3 sm:gap-4">
                    <div class="p-2.5 sm:p-3 rounded-xl bg-brand-olive/10 text-brand-olive flex-shrink-0">
                        <i data-lucide="battery" class="w-5 h-5 sm:w-6 sm:h-6"></i>
                    </div>
                    <div>
                        <div class="text-xl sm:text-2xl font-bold text-white">100+ km</div>
                        <div class="text-[10px] sm:text-xs text-brand-slate uppercase font-medium tracking-wider">Lithium Range</div>
                    </div>
                </div>
                <div class="flex items-center gap-3 sm:gap-4">
                    <div class="p-2.5 sm:p-3 rounded-xl bg-brand-olive/10 text-brand-olive flex-shrink-0">
                        <i data-lucide="shield" class="w-5 h-5 sm:w-6 sm:h-6"></i>
                    </div>
                    <div>
                        <div class="text-xl sm:text-2xl font-bold text-white">5-Year</div>
                        <div class="text-[10px] sm:text-xs text-brand-slate uppercase font-medium tracking-wider">Battery Warranty</div>
                    </div>
                </div>
                <div class="flex items-center gap-3 sm:gap-4">
                    <div class="p-2.5 sm:p-3 rounded-xl bg-brand-olive/10 text-brand-olive flex-shrink-0">
                        <i data-lucide="building-2" class="w-5 h-5 sm:w-6 sm:h-6"></i>
                    </div>
                    <div>
                        <div class="text-xl sm:text-2xl font-bold text-white">250+</div>
                        <div class="text-[10px] sm:text-xs text-brand-slate uppercase font-medium tracking-wider">Commercial Fleets</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Dynamic Client Logos Infinite Marquee Ticker -->
        <section class="py-10 sm:py-12 bg-gradient-to-b from-brand-dark via-brand-card/60 to-brand-dark border-y border-brand-border/60 overflow-hidden">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8 text-center space-y-2">
                <span class="text-brand-olive text-xs font-semibold tracking-widest uppercase">Trusted Partnership Network</span>
                <h3 class="text-xl sm:text-3xl font-extrabold text-white">Trusted by Industry Leaders & Premier Resorts</h3>
            </div>

            <div class="relative w-full overflow-hidden marquee-container">
                <div class="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-brand-dark to-transparent z-10 pointer-events-none"></div>
                <div class="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-brand-dark to-transparent z-10 pointer-events-none"></div>

                <div class="animate-marquee flex items-center gap-4 sm:gap-6 px-4">
                    ${[...CLIENT_LOGOS, ...CLIENT_LOGOS].map(logoPath => `
                        <div class="container-light-beam client-logo-card w-32 sm:w-40 h-20 sm:h-24 rounded-2xl bg-slate-950/80 border border-brand-border/80 p-3 flex items-center justify-center flex-shrink-0 cursor-pointer shadow-md">
                            <img src="${logoPath}" alt="Client Partner Logo" class="client-logo-img max-h-full max-w-full object-contain" loading="lazy">
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>

        <!-- Featured Products Grid -->
        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
                <div>
                    <span class="text-brand-olive text-xs font-semibold tracking-widest uppercase">Signature Collection</span>
                    <h2 class="text-2xl sm:text-4xl font-extrabold text-white mt-1">Featured Vehicles</h2>
                </div>
                <button onclick="navigateTo('products')" class="inline-flex items-center gap-2 text-brand-olive hover:text-brand-slate font-semibold transition-colors text-sm">
                    <span>View All Models (${PRODUCTS_DATA.length})</span>
                    <i data-lucide="arrow-right" class="w-4 h-4"></i>
                </button>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                ${featured.map(product => renderProductCardHTML(product)).join('')}
            </div>
        </section>

        <!-- Industry Solutions Overview -->
        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
                <span class="text-brand-olive text-xs font-semibold tracking-widest uppercase">Tailored Industry Mobility</span>
                <h2 class="text-2xl sm:text-4xl font-extrabold text-white mt-1">Engineered for Every Setting</h2>
                <p class="text-slate-400 mt-2 sm:mt-3 text-xs sm:text-sm">
                    From championship golf courses to luxury resorts and industrial logistics, discover customized fleet solutions.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                ${SOLUTIONS_DATA.map(sol => `
                    <div class="container-light-beam group relative rounded-3xl overflow-hidden bg-brand-card border border-brand-border hover:border-brand-olive/40 transition-all shadow-xl">
                        <div class="h-48 sm:h-64 overflow-hidden relative bg-slate-950/60 p-4 flex items-center justify-center">
                            <img src="${sol.image}" alt="${sol.title}" class="product-card-img max-h-full object-contain group-hover:scale-105 transition-transform duration-500">
                            <div class="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent"></div>
                        </div>
                        <div class="p-6 sm:p-8 relative z-10 -mt-6">
                            <h3 class="text-xl sm:text-2xl font-bold text-white mb-2">${sol.title}</h3>
                            <p class="text-slate-300 text-xs sm:text-sm mb-6 line-clamp-2">${sol.description}</p>
                            <button onclick="navigateTo('solutions')" class="inline-flex items-center gap-2 text-brand-olive text-xs sm:text-sm font-semibold hover:text-brand-slate">
                                <span>Explore Solutions</span>
                                <i data-lucide="arrow-right" class="w-4 h-4"></i>
                            </button>
                        </div>
                    </div>
                `).join('')}
            </div>
        </section>
    </div>
    `;
}

function renderProductsPage() {
    const categories = ['All', 'Golf', 'Personal', 'Commercial', 'Industrial', 'Accessories'];
    const currentBanner = CATEGORY_BANNERS[productFilterCategory];

    const filtered = PRODUCTS_DATA.filter(p => {
        const matchesCat = productFilterCategory === 'All' || p.category === productFilterCategory;
        const matchesSearch = p.name.toLowerCase().includes(productSearchQuery.toLowerCase()) || 
                              p.description.toLowerCase().includes(productSearchQuery.toLowerCase());
        return matchesCat && matchesSearch;
    });

    return `
    <div class="space-y-8 sm:space-y-12 pb-16">
        
        <!-- Category Banner Header -->
        ${currentBanner ? `
            <section class="relative bg-gradient-to-r from-brand-card via-brand-dark to-slate-950 border-b border-brand-border py-8 sm:py-12 px-4 overflow-hidden">
                <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
                    <div class="lg:col-span-7 space-y-2 sm:space-y-3">
                        <span class="px-3 py-1 rounded-full bg-brand-olive/10 border border-brand-olive/30 text-brand-olive text-xs font-bold uppercase tracking-widest">
                            ${currentBanner.title}
                        </span>
                        <h1 class="text-2xl sm:text-5xl font-extrabold text-white tracking-tight">
                            ${currentBanner.headline}
                        </h1>
                        <p class="text-slate-400 text-xs sm:text-base leading-relaxed">
                            ${currentBanner.subheadline}
                        </p>
                    </div>
                    <div class="lg:col-span-5 flex justify-center lg:justify-end">
                        <div class="container-light-beam w-full sm:w-64 h-36 sm:h-48 rounded-2xl bg-slate-950/80 border border-brand-border p-4 flex items-center justify-center shadow-xl">
                            <img src="${currentBanner.image}" alt="${currentBanner.title}" class="product-card-img max-h-full max-w-full object-contain">
                        </div>
                    </div>
                </div>
            </section>
        ` : `
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6">
                <div class="text-center max-w-3xl mx-auto space-y-2 sm:space-y-3">
                    <span class="text-brand-olive text-xs font-semibold tracking-widest uppercase">Electric Showroom</span>
                    <h1 class="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">Vehicle & Accessory Catalog</h1>
                    <p class="text-slate-400 text-xs sm:text-base leading-relaxed">
                        Browse our complete range of golf carts, commercial utility haulers, VIP resort shuttles, and luxury custom accessories.
                    </p>
                </div>
            </div>
        `}

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
            <!-- Pill Tab Filter & Search Controls -->
            <div class="container-light-beam flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 p-4 rounded-2xl bg-brand-card border border-brand-border shadow-xl">
                <div class="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none z-10">
                    ${categories.map(cat => `
                        <button onclick="setCategoryFilter('${cat}')" class="px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                            productFilterCategory === cat ? 'bg-brand-olive text-slate-950 shadow-lg font-bold' : 'bg-slate-800/60 text-slate-300 hover:bg-slate-800'
                        }">
                            ${cat}
                        </button>
                    `).join('')}
                </div>

                <div class="relative w-full md:w-72 z-10">
                    <i data-lucide="search" class="w-4 h-4 text-brand-slate absolute left-3.5 top-1/2 -translate-y-1/2"></i>
                    <input id="product-search-input" type="text" value="${productSearchQuery}" placeholder="Search products or accessories..." class="w-full bg-slate-950 border border-brand-border rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-brand-olive relative z-20">
                </div>
            </div>

            <!-- Product Grid with Container ID for Targeted Dom Updates -->
            <div id="product-grid-container" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                ${filtered.length > 0 ? filtered.map(p => renderProductCardHTML(p)).join('') : `
                    <div class="col-span-full text-center py-16 bg-brand-card rounded-2xl border border-brand-border">
                        <i data-lucide="info" class="w-10 h-10 text-brand-slate mx-auto mb-2"></i>
                        <p class="text-slate-300 font-semibold">No items found matching criteria.</p>
                    </div>
                `}
            </div>
        </div>

    </div>
    `;
}

function bindProductsFilterEvents() {
    const input = document.getElementById('product-search-input');
    if (input) {
        input.addEventListener('input', (e) => {
            productSearchQuery = e.target.value;
            
            // Only update the product grid and result counter rather than re-rendering the full page
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
                            <p class="text-slate-300 font-semibold">No items found matching criteria.</p>
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
            <div class="relative h-48 sm:h-56 overflow-hidden bg-slate-950/60 p-4 flex items-center justify-center">
                <img src="${product.image}" alt="${product.name}" class="product-card-img max-h-full object-contain">
                <div class="absolute top-3 left-3 flex items-center gap-1.5 z-20">
                    <span class="px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-brand-olive text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase border border-brand-border">
                        ${product.category}
                    </span>
                    ${product.glbModel ? `
                        <span class="px-2 py-1 rounded-full bg-brand-olive/20 border border-brand-olive text-brand-olive text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                            <i data-lucide="box" class="w-3 h-3"></i>
                            <span>3D</span>
                        </span>
                    ` : ''}
                </div>
                <div class="absolute bottom-3 right-3 z-20">
                    <span class="px-2 py-1 rounded-lg bg-slate-900/90 text-white text-[11px] font-bold border border-brand-border">
                        ${product.priceLabel}
                    </span>
                </div>
            </div>

            <div class="p-4 sm:p-5 space-y-2.5 sm:space-y-3 z-10 relative">
                <h3 class="text-base sm:text-lg font-bold text-white group-hover:text-brand-olive transition-colors">${product.name}</h3>
                <p class="text-xs text-slate-400 line-clamp-2">${product.description}</p>
                
                <div class="grid grid-cols-2 gap-2 pt-2 text-[11px] sm:text-xs border-t border-brand-border text-slate-300">
                    <div class="card-spec-badge p-1.5 rounded-lg flex items-center gap-1.5 border border-transparent"><i data-lucide="users" class="w-3.5 h-3.5 text-brand-olive flex-shrink-0"></i><span class="truncate">${product.seating}</span></div>
                    <div class="card-spec-badge p-1.5 rounded-lg flex items-center gap-1.5 border border-transparent"><i data-lucide="battery" class="w-3.5 h-3.5 text-brand-olive flex-shrink-0"></i><span class="truncate">${product.range}</span></div>
                    <div class="card-spec-badge p-1.5 rounded-lg flex items-center gap-1.5 border border-transparent"><i data-lucide="gauge" class="w-3.5 h-3.5 text-brand-olive flex-shrink-0"></i><span class="truncate">${product.speed}</span></div>
                    <div class="card-spec-badge p-1.5 rounded-lg flex items-center gap-1.5 border border-transparent"><i data-lucide="zap" class="w-3.5 h-3.5 text-brand-olive flex-shrink-0"></i><span class="truncate">${product.powertrain.split(' ')[0]}</span></div>
                </div>
            </div>
        </div>

        <div class="p-4 sm:p-5 pt-0 grid grid-cols-2 gap-2 z-10 relative">
            <button onclick="navigateTo('product-details', '${product.slug}')" class="py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold text-center transition-colors">
                View Details
            </button>
            <button onclick="openQuoteModal('${product.name}')" class="py-2 px-3 rounded-xl bg-brand-olive hover:bg-brand-oliveHover text-slate-950 text-xs font-bold text-center transition-colors btn-shimmer">
                Request Quote
            </button>
        </div>
    </div>
    `;
}

function renderProductDetailsPage() {
    const product = PRODUCTS_DATA.find(p => p.slug === currentSlug) || PRODUCTS_DATA[0];

    return `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12 sm:space-y-16">
        <button onclick="navigateTo('products')" class="inline-flex items-center gap-2 text-brand-slate hover:text-white text-xs sm:text-sm font-medium transition-colors">
            <i data-lucide="arrow-left" class="w-4 h-4"></i>
            <span>Back to Vehicles</span>
        </button>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <!-- Product Stage -->
            <div class="lg:col-span-7 space-y-4">
                
                <div class="container-light-beam relative rounded-3xl overflow-hidden bg-slate-950 border border-brand-border h-[300px] sm:h-[400px] lg:h-[500px] flex items-center justify-center p-4 sm:p-6 shadow-2xl group">
                    
                    <img id="detail-main-img" src="${product.image}" alt="${product.name}" class="product-card-img max-h-full max-w-full object-contain filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)]">

                    ${product.glbModel ? `
                        <div class="absolute top-4 right-4 z-20">
                            <button onclick="enable3DMode('${product.glbModel}')" class="px-3.5 py-1.5 rounded-full bg-brand-olive hover:bg-brand-oliveHover text-slate-950 text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-2 transition-all">
                                <i data-lucide="box" class="w-4 h-4"></i>
                                <span>Launch 3D View</span>
                            </button>
                        </div>
                    ` : ''}

                    <div id="3d-canvas-container" class="hidden absolute inset-0 bg-slate-950 z-30 flex items-center justify-center">
                        <!-- Populated on 3D trigger -->
                    </div>

                </div>

                <!-- Gallery Thumbnails -->
                <div class="flex items-center gap-3 sm:gap-4 overflow-x-auto pb-2">
                    ${product.gallery.map(img => `
                        <button onclick="document.getElementById('detail-main-img').src='${img}'; const c=document.getElementById('3d-canvas-container'); if(c) c.classList.add('hidden');" class="container-light-beam w-16 h-16 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-brand-border hover:border-brand-olive transition-all bg-slate-950 p-2 flex items-center justify-center flex-shrink-0">
                            <img src="${img}" class="max-h-full object-contain">
                        </button>
                    `).join('')}
                </div>
            </div>

            <!-- Details Column -->
            <div class="lg:col-span-5 space-y-6">
                <div>
                    <span class="text-brand-olive text-xs font-semibold uppercase tracking-widest">${product.category}</span>
                    <h1 class="text-2xl sm:text-4xl font-extrabold text-white mt-1">${product.name}</h1>
                    <p class="text-brand-slate font-semibold text-xs sm:text-sm mt-1">${product.tagline}</p>
                    <p class="text-slate-300 text-xs sm:text-sm leading-relaxed mt-4">${product.description}</p>
                </div>

                <!-- Specs Quick Bar -->
                <div class="container-light-beam grid grid-cols-2 gap-3 p-4 rounded-2xl bg-brand-card border border-brand-border text-xs">
                    <div><span class="text-brand-slate uppercase">Seating</span><div class="font-bold text-white mt-0.5">${product.seating}</div></div>
                    <div><span class="text-brand-slate uppercase">Range</span><div class="font-bold text-white mt-0.5">${product.range}</div></div>
                    <div><span class="text-brand-slate uppercase">Top Speed</span><div class="font-bold text-white mt-0.5">${product.speed}</div></div>
                    <div><span class="text-brand-slate uppercase">Battery</span><div class="font-bold text-white mt-0.5">${product.battery}</div></div>
                </div>

                <button onclick="openQuoteModal('${product.name}')" class="w-full flex items-center justify-center gap-2 bg-brand-olive hover:bg-brand-oliveHover text-slate-950 font-bold py-3.5 sm:py-4 rounded-xl shadow-xl text-xs sm:text-base transition-all btn-shimmer">
                    <i data-lucide="file-text" class="w-4 h-4 sm:w-5 sm:h-5"></i>
                    <span>Request Quote for ${product.name}</span>
                </button>
            </div>
        </div>

        <!-- Features & Technical Spec Matrix -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <div class="container-light-beam p-6 sm:p-8 rounded-3xl bg-brand-card border border-brand-border space-y-4">
                <h3 class="text-lg sm:text-xl font-bold text-white">Standard Premium Features</h3>
                <div class="space-y-2">
                    ${product.features.map(f => `
                        <div class="flex items-center gap-3 text-xs text-slate-300">
                            <i data-lucide="check-circle-2" class="w-4 h-4 text-brand-olive flex-shrink-0"></i>
                            <span>${f}</span>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="container-light-beam p-6 sm:p-8 rounded-3xl bg-brand-card border border-brand-border space-y-4">
                <h3 class="text-lg sm:text-xl font-bold text-white">Technical Specifications</h3>
                <div class="space-y-3">
                    ${Object.entries(product.specs).map(([k, v]) => `
                        <div class="flex items-center justify-between text-xs pb-2 border-b border-brand-border">
                            <span class="text-brand-slate">${k}</span>
                            <span class="font-bold text-white text-right">${v}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    </div>
    `;
}

function enable3DMode(glbPath) {
    const container = document.getElementById('3d-canvas-container');
    if (container) {
        container.classList.remove('hidden');
        container.innerHTML = `
            <model-viewer 
                src="${glbPath}" 
                alt="3D Golf Cart Model"
                auto-rotate 
                camera-controls 
                shadow-intensity="1.5"
                environment-image="neutral"
                exposure="1.0"
                class="w-full h-full">
            </model-viewer>
            <button onclick="document.getElementById('3d-canvas-container').classList.add('hidden')" class="absolute top-4 right-4 bg-slate-900 border border-brand-border text-white px-3 py-1 rounded-xl text-xs font-bold z-40">
                ✕ Close 3D
            </button>
        `;
    }
}

function renderSolutionsPage() {
    return `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12 sm:space-y-16">
        <div class="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
            <span class="text-brand-olive text-xs font-semibold tracking-widest uppercase">Commercial Fleet Solutions</span>
            <h1 class="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">Tailored Mobility for Every Industry</h1>
            <p class="text-slate-400 text-xs sm:text-base leading-relaxed">
                From championship golf venues to high-end hospitality and heavy commercial operations, we engineer eco-friendly vehicle solutions tailored to your operational workflows.
            </p>
        </div>

        <div class="space-y-12 sm:space-y-16">
            ${SOLUTIONS_DATA.map((sol, idx) => `
                <div class="container-light-beam grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-12 rounded-3xl bg-brand-card border border-brand-border">
                    <div class="lg:col-span-6 ${idx % 2 === 1 ? 'lg:order-2' : ''}">
                        <div class="rounded-2xl overflow-hidden border border-brand-border h-64 sm:h-96 bg-slate-950 p-4 flex items-center justify-center">
                            <img src="${sol.image}" alt="${sol.title}" class="product-card-img max-h-full object-contain">
                        </div>
                    </div>
                    <div class="lg:col-span-6 space-y-4 sm:space-y-6 ${idx % 2 === 1 ? 'lg:order-1' : ''}">
                        <div>
                            <span class="text-brand-olive text-xs font-semibold uppercase">${sol.subtitle}</span>
                            <h2 class="text-2xl sm:text-3xl font-extrabold text-white mt-1">${sol.title}</h2>
                        </div>
                        <p class="text-slate-300 text-xs sm:text-sm leading-relaxed">${sol.description}</p>
                        <div class="space-y-2">
                            ${sol.benefits.map(b => `
                                <div class="flex items-center gap-2 text-xs text-slate-300">
                                    <i data-lucide="check-circle-2" class="w-4 h-4 text-brand-olive flex-shrink-0"></i>
                                    <span>${b}</span>
                                </div>
                            `).join('')}
                        </div>
                        <button onclick="openQuoteModal('${sol.title}')" class="inline-flex items-center gap-2 bg-brand-olive hover:bg-brand-oliveHover text-slate-950 font-bold px-6 py-3 rounded-xl shadow-lg text-xs sm:text-sm btn-shimmer">
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
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12 sm:space-y-20">
        <div class="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
            <span class="text-brand-olive text-xs font-semibold uppercase tracking-widest">After-Sales Excellence</span>
            <h1 class="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">Service, Spare Parts & Support</h1>
            <p class="text-slate-400 text-xs sm:text-base leading-relaxed">
                We provide mobile technician dispatch, original factory spare parts, and remote telemetry battery health monitoring.
            </p>
        </div>

        <div class="space-y-8 sm:space-y-10">
            <div class="text-center max-w-2xl mx-auto space-y-2">
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-olive/10 border border-brand-olive/30 text-brand-olive text-xs font-bold uppercase tracking-wider">
                    <i data-lucide="shield-check" class="w-4 h-4"></i>
                    <span>7-Point Quality Guarantee</span>
                </div>
                <h2 class="text-2xl sm:text-3xl font-extrabold text-white">Comprehensive Preventive Maintenance</h2>
                <p class="text-slate-400 text-xs sm:text-sm">Our rigorous inspection routine engineered to maximize fleet uptime and longevity.</p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                ${pmItems.map((item, idx) => `
                    <div class="container-light-beam group relative rounded-2xl bg-brand-card border border-brand-border p-6 transition-all duration-300 hover:border-brand-olive/60 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-brand-olive/10 flex flex-col justify-between overflow-hidden ${
                        idx === 6 ? 'sm:col-span-2 lg:col-span-2' : ''
                    }">
                        <span class="absolute top-3 right-4 text-3xl font-black text-slate-800/40 group-hover:text-brand-olive/20 transition-colors pointer-events-none">
                            ${item.num}
                        </span>

                        <div class="space-y-4 z-10 relative">
                            <div class="w-14 h-14 rounded-2xl bg-slate-950 border border-brand-border group-hover:border-brand-olive/50 flex items-center justify-center p-3 transition-all duration-300 shadow-inner group-hover:shadow-brand-olive/20">
                                <img src="${item.icon}" alt="${item.title}" class="w-full h-full object-contain filter brightness-0 invert group-hover:scale-110 transition-transform">
                            </div>

                            <div class="space-y-1.5">
                                <h4 class="font-bold text-white text-base sm:text-lg group-hover:text-brand-olive transition-colors">
                                    ${item.title}
                                </h4>
                                <p class="text-slate-400 text-xs leading-relaxed">
                                    ${item.desc}
                                </p>
                            </div>
                        </div>

                        <div class="mt-6 w-full h-0.5 bg-slate-800 group-hover:bg-gradient-to-r group-hover:from-brand-olive group-hover:to-transparent transition-all"></div>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="container-light-beam p-6 sm:p-12 rounded-3xl bg-brand-card border border-brand-border max-w-3xl mx-auto shadow-2xl">
            <h3 class="text-xl sm:text-2xl font-bold text-white mb-6 text-center z-10 relative">Schedule Mobile Service Dispatch</h3>
            <form onsubmit="event.preventDefault(); showToast('Service Request Submitted! Ref: #SRV-9821');" class="space-y-4 text-xs z-10 relative">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div><label class="block mb-1 text-slate-300">Name</label><input required type="text" placeholder="John Doe" class="w-full bg-slate-950 border border-brand-border rounded-xl p-3 text-white focus:outline-none focus:border-brand-olive"></div>
                    <div><label class="block mb-1 text-slate-300">Organization</label><input required type="text" placeholder="Club or Resort Name" class="w-full bg-slate-950 border border-brand-border rounded-xl p-3 text-white focus:outline-none focus:border-brand-olive"></div>
                </div>
                <div><label class="block mb-1 text-slate-300">Service Required</label>
                    <select class="w-full bg-slate-950 border border-brand-border rounded-xl p-3 text-white focus:outline-none focus:border-brand-olive">
                        <option>Comprehensive Preventive Maintenance (7-Point Check)</option>
                        <option>On-Site Technician Repair</option>
                        <option>Original Spare Parts Order</option>
                        <option>Lithium Battery Health Check</option>
                    </select>
                </div>
                <button type="submit" class="w-full bg-brand-olive hover:bg-brand-oliveHover text-slate-950 font-bold py-3.5 rounded-xl transition-all shadow-lg text-xs sm:text-sm btn-shimmer">Submit Request</button>
            </form>
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
            <h1 class="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">About Golfcart.ph</h1>
            <p class="text-slate-400 text-xs sm:text-base leading-relaxed">
                Empowering outdoor lifestyle and electric utility transportation across the Philippines.
            </p>
        </div>

        <!-- Section 1: Brand Story & SJK Guahan Overview -->
        <div class="container-light-beam grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-brand-card border border-brand-border rounded-3xl p-6 sm:p-12 shadow-2xl">
            <div class="lg:col-span-5 flex justify-center">
                <div class="relative w-full max-w-md h-64 sm:h-80 rounded-2xl bg-gradient-to-br from-brand-olive/20 via-brand-dark to-slate-950 border border-brand-border p-6 flex items-center justify-center overflow-hidden group">
                    <div class="absolute inset-0 bg-[radial-gradient(#749E35_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>
                    <img src="image/Products/CA500.png" alt="CarryAll 500 Utility Cart" class="product-card-img max-h-full max-w-full object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)] transform group-hover:scale-105 transition-transform duration-500">
                </div>
            </div>

            <div class="lg:col-span-7 space-y-4 sm:space-y-6 z-10 relative">
                <div class="space-y-4 text-slate-300 text-xs sm:text-base leading-relaxed">
                    <p>
                        <strong class="text-white font-bold">Golf Carts PH</strong> falls under the <strong class="text-brand-olive font-bold">SJK Guahan group</strong>, whose focus is on providing superior service through durable and reliable products. Our brand has a strong connection with the outdoors and the lifestyle that comes with it. Our mission in SJK Guahan is to continue to find ways to enhance the enjoyment of being outdoors through products you can afford and trust.
                    </p>
                    <p>
                        SJK Guahan is a 50/50 joint venture between two groups from the Philippines and Guam that started by bringing Clubcar golf carts into the country. As we expanded into golf courses, we sought mowers and partnered with Textron's <em class="text-white">Jacobsen</em> mower lineup.
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
                <h3 class="text-lg sm:text-xl font-bold text-white uppercase tracking-wider">WHO WE ARE</h3>
                <p class="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    We are the name for golfcarts and electric utility vehicles in the Philippines. We focus on selling vehicles that suit our customers' requirements and go beyond and over when it comes to customization and service to make your buggy stand out.
                </p>
            </div>

            <div class="container-light-beam p-6 sm:p-8 rounded-3xl bg-brand-card border border-brand-border space-y-4 hover:border-brand-olive/50 transition-all duration-300 shadow-xl group">
                <div class="w-12 h-12 rounded-2xl bg-brand-olive/10 border border-brand-olive/30 text-brand-olive flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform">
                    <i data-lucide="wrench" class="w-6 h-6"></i>
                </div>
                <h3 class="text-lg sm:text-xl font-bold text-white uppercase tracking-wider">WHAT WE DO</h3>
                <p class="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    We customize the right cart for your very needs. We have a range of suppliers that can provide quality products you can trust when it comes to mobility.
                </p>
            </div>

            <div class="container-light-beam p-6 sm:p-8 rounded-3xl bg-brand-card border border-brand-border space-y-4 hover:border-brand-olive/50 transition-all duration-300 shadow-xl group">
                <div class="w-12 h-12 rounded-2xl bg-brand-olive/10 border border-brand-olive/30 text-brand-olive flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform">
                    <i data-lucide="heart" class="w-6 h-6"></i>
                </div>
                <h3 class="text-lg sm:text-xl font-bold text-white uppercase tracking-wider">WHY WE DO IT</h3>
                <p class="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    We want to break free from the traditional golfcart and showcase how fun and exciting it can be with friends and family to take these carts out in the open. Through our products we want to push for electric and green energy vehicles which you can enjoy in your favorite places.
                </p>
            </div>
        </div>

        <!-- Section 3: Interactive Testimonials Carousel -->
        <div class="container-light-beam bg-gradient-to-r from-brand-card via-slate-900 to-brand-card border border-brand-border rounded-3xl p-6 sm:p-12 shadow-2xl relative overflow-hidden">
            <div class="text-center space-y-6 sm:space-y-8 max-w-4xl mx-auto z-10 relative">
                <h2 class="text-xl sm:text-3xl font-extrabold text-brand-olive uppercase tracking-widest">
                    OUR TESTIMONIALS
                </h2>

                <div class="min-h-[100px] flex flex-col items-center justify-center space-y-3 px-4 sm:px-8">
                    <p id="testimonial-quote-text" class="text-slate-200 text-sm sm:text-lg italic leading-relaxed font-light">
                        "${TESTIMONIALS_DATA[currentTestimonialIndex].quote}"
                    </p>
                    <span id="testimonial-author-text" class="text-white font-bold text-xs sm:text-sm tracking-wide">
                        ${TESTIMONIALS_DATA[currentTestimonialIndex].author}
                    </span>
                </div>

                <div class="flex items-center justify-center gap-4 sm:gap-6 pt-2">
                    <button onclick="prevTestimonial()" class="p-2.5 sm:p-3 rounded-full bg-slate-950 border border-brand-border text-slate-300 hover:text-brand-olive hover:border-brand-olive transition-all shadow-lg" aria-label="Previous Testimonial">
                        <i data-lucide="chevron-left" class="w-5 h-5 sm:w-6 sm:h-6"></i>
                    </button>
                    <button onclick="nextTestimonial()" class="p-3 rounded-full bg-slate-950 border border-brand-border text-slate-300 hover:text-brand-olive hover:border-brand-olive transition-all shadow-lg" aria-label="Next Testimonial">
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
            <h1 class="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">Request a Custom Quote</h1>
            <p class="text-slate-400 text-xs sm:text-base leading-relaxed">
                Contact our sales specialists for volume fleet packages, individual purchases, or dealer partner opportunities.
            </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div class="lg:col-span-5 space-y-6">
                <div class="container-light-beam p-6 sm:p-8 rounded-3xl bg-brand-card border border-brand-border space-y-6">
                    <h3 class="text-lg sm:text-xl font-bold text-white z-10 relative">Experience Center</h3>
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
                            <div><label class="block mb-1 text-slate-300">Full Name *</label><input required type="text" placeholder="Jane Smith" class="w-full bg-slate-950 border border-brand-border rounded-xl p-3 text-white focus:outline-none focus:border-brand-olive"></div>
                            <div><label class="block mb-1 text-slate-300">Company Name</label><input type="text" placeholder="Ocean Club LLC" class="w-full bg-slate-950 border border-brand-border rounded-xl p-3 text-white focus:outline-none focus:border-brand-olive"></div>
                        </div>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div><label class="block mb-1 text-slate-300">Email *</label><input required type="email" placeholder="jane@example.com" class="w-full bg-slate-950 border border-brand-border rounded-xl p-3 text-white focus:outline-none focus:border-brand-olive"></div>
                            <div><label class="block mb-1 text-slate-300">Phone *</label><input required type="tel" placeholder="+63 (900) 000-0000" class="w-full bg-slate-950 border border-brand-border rounded-xl p-3 text-white focus:outline-none focus:border-brand-olive"></div>
                        </div>
                        <div><label class="block mb-1 text-slate-300">Vehicle Model</label>
                            <select class="w-full bg-slate-950 border border-brand-border rounded-xl p-3 text-white focus:outline-none focus:border-brand-olive">
                                ${PRODUCTS_DATA.map(p => `<option>${p.name}</option>`).join('')}
                            </select>
                        </div>
                        <div><label class="block mb-1 text-slate-300">Message / Custom Requirements</label><textarea rows="4" placeholder="Mention preferred colors, custom accessories, or fleet size..." class="w-full bg-slate-950 border border-brand-border rounded-xl p-3 text-white focus:outline-none focus:border-brand-olive"></textarea></div>
                        <button type="submit" class="w-full bg-brand-olive hover:bg-brand-oliveHover text-slate-950 font-bold py-4 rounded-xl shadow-xl text-xs sm:text-sm transition-all btn-shimmer">Submit Quote Request</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    `;
}