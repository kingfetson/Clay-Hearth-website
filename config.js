// config.js - Clay & Hearth Website Configuration
// Centralized configuration for products, makers, site settings, and features

const CONFIG = {
    // Site Information
    site: {
        name: "Clay & Hearth",
        tagline: "Earth. Fire. Craft.",
        description: "Discover unique handcrafted ceramic tableware from North American artisans. Browse collections, meet makers, visualize pieces with AR, and commission custom items for your home.",
        domain: "clayandhearth.com",
        copyrightYear: 2025,
        supportEmail: "hello@clayandhearth.com",
        phone: "+1 (555) 823-4567",
        address: "Portland, Oregon · Santa Fe, New Mexico"
    },

    // Social Media Links
    social: {
        instagram: "https://instagram.com/clayandhearth",
        pinterest: "https://pinterest.com/clayandhearth",
        tiktok: "https://tiktok.com/@clayandhearth",
        facebook: "https://facebook.com/clayandhearth",
        twitter: "https://twitter.com/clayandhearth",
        youtube: "https://youtube.com/@clayandhearth"
    },

    // Navigation Menu
    navigation: [
        { name: "Collections", path: "/collections", icon: "fa-grid", active: true },
        { name: "Artisans", path: "/artisans", icon: "fa-palette", active: true },
        { name: "Custom", path: "/custom", icon: "fa-pen-ruler", active: true },
        { name: "AR View", path: "/ar-view", icon: "fa-vr-cardboard", active: true },
        { name: "Studio Journal", path: "/journal", icon: "fa-newspaper", active: false },
        { name: "Wholesale", path: "/wholesale", icon: "fa-building", active: false }
    ],

    // Footer Links
    footerLinks: [
        {
            title: "Shop",
            links: [
                { name: "All Products", path: "/products" },
                { name: "Mugs & Cups", path: "/category/mugs" },
                { name: "Bowls", path: "/category/bowls" },
                { name: "Plates", path: "/category/plates" },
                { name: "Vases", path: "/category/vases" },
                { name: "Gift Sets", path: "/category/gift-sets" }
            ]
        },
        {
            title: "Info",
            links: [
                { name: "About Us", path: "/about" },
                { name: "Sustainability", path: "/sustainability" },
                { name: "Shipping & Returns", path: "/shipping" },
                { name: "Care Instructions", path: "/care" },
                { name: "FAQs", path: "/faqs" },
                { name: "Contact", path: "/contact" }
            ]
        },
        {
            title: "Community",
            links: [
                { name: "Our Makers", path: "/artisans" },
                { name: "Studio Tour", path: "/studio-tour" },
                { name: "Workshops", path: "/workshops" },
                { name: "Affiliate Program", path: "/affiliate" },
                { name: "Newsletter", path: "/newsletter" }
            ]
        }
    ],

    // Product Categories
    categories: [
        { id: 1, name: "All", slug: "all", count: 24 },
        { id: 2, name: "Mugs & Cups", slug: "mugs", count: 8 },
        { id: 3, name: "Bowls", slug: "bowls", count: 6 },
        { id: 4, name: "Plates", slug: "plates", count: 5 },
        { id: 5, name: "Vases", slug: "vases", count: 3 },
        { id: 6, name: "Limited Edition", slug: "limited-edition", count: 2 }
    ],

    // Products Database
    products: [
        {
            id: 1,
            name: "Ember Mug",
            slug: "ember-mug",
            price: 68,
            compareAtPrice: null,
            currency: "USD",
            maker: "Elena Wolf",
            makerId: 1,
            location: "Oregon",
            description: "Wheel-thrown stoneware mug with volcanic glaze finish. Holds 12oz. Microwave and dishwasher safe.",
            longDescription: "Each Ember Mug is uniquely crafted on the potter's wheel, featuring a reactive glaze that creates subtle variations in color. The organic shape fits perfectly in your hands, making your morning coffee ritual truly special.",
            images: [
                "https://images.pexels.com/photos/305361/pexels-photo-305361.jpeg?auto=compress&cs=tinysrgb&w=800",
                "https://images.pexels.com/photos/2069054/pexels-photo-2069054.jpeg?auto=compress&cs=tinysrgb&w=800"
            ],
            category: "mugs",
            tags: ["stoneware", "wood-fired", "morning ritual"],
            inStock: true,
            stockCount: 15,
            arEnabled: true,
            featured: true,
            bestseller: true,
            dimensions: "4.5″ H x 3.5″ W",
            weight: "0.8 lbs",
            material: "Stoneware clay, food-safe glaze",
            care: "Dishwasher and microwave safe. Handwashing recommended for longevity."
        },
        {
            id: 2,
            name: "Stoneware Bowl Set",
            slug: "stoneware-bowl-set",
            price: 94,
            compareAtPrice: 120,
            currency: "USD",
            maker: "James Rivera",
            makerId: 2,
            location: "Vermont",
            description: "Set of 4 nesting bowls with speckled oatmeal glaze. Perfect for serving or everyday use.",
            longDescription: "These versatile bowls are thrown on the wheel and finished with a warm, speckled glaze that highlights the natural clay body. The set includes four graduated sizes, perfect for everything from prep bowls to pasta dinners.",
            images: [
                "https://images.pexels.com/photos/169190/pexels-photo-169190.jpeg?auto=compress&cs=tinysrgb&w=800",
                "https://images.pexels.com/photos/1441124/pexels-photo-1441124.jpeg?auto=compress&cs=tinysrgb&w=800"
            ],
            category: "bowls",
            tags: ["set", "speckled", "nesting"],
            inStock: true,
            stockCount: 8,
            arEnabled: true,
            featured: true,
            bestseller: false,
            dimensions: "Small: 4″ D, Medium: 6″ D, Large: 8″ D, XL: 10″ D",
            weight: "3.2 lbs (set)",
            material: "Speckled stoneware, oatmeal glaze",
            care: "Dishwasher safe. Microwave safe."
        },
        {
            id: 3,
            name: "Speckled Plate",
            slug: "speckled-plate",
            price: 42,
            compareAtPrice: null,
            currency: "USD",
            maker: "Maya Chen",
            makerId: 3,
            location: "British Columbia",
            description: "Slip-cast dinner plate with organic speckled finish. Sold individually.",
            longDescription: "Maya's signature plates are crafted using a traditional slip-casting technique, resulting in a perfectly round yet organic-feeling plate. The speckled clay body shines through a translucent glaze.",
            images: [
                "https://images.pexels.com/photos/950241/pexels-photo-950241.jpeg?auto=compress&cs=tinysrgb&w=800",
                "https://images.pexels.com/photos/1049656/pexels-photo-1049656.jpeg?auto=compress&cs=tinysrgb&w=800"
            ],
            category: "plates",
            tags: ["slipware", "minimalist", "dinnerware"],
            inStock: true,
            stockCount: 22,
            arEnabled: false,
            featured: false,
            bestseller: true,
            dimensions: "10.5″ D",
            weight: "1.1 lbs",
            material: "Speckled clay, semi-transparent glaze",
            care: "Dishwasher safe. Not microwave safe due to metallic flecks."
        },
        {
            id: 4,
            name: "Rustic Vase",
            slug: "rustic-vase",
            price: 79,
            compareAtPrice: null,
            currency: "USD",
            maker: "Sam Greywolf",
            makerId: 4,
            location: "New Mexico",
            description: "Hand-coiled vessel with native-inspired carved texture. Each piece is unique.",
            longDescription: "Inspired by ancestral pueblo pottery traditions, Sam creates each vase using hand-coiling techniques passed down through generations. The carved exterior mimics organic rock formations found in the high desert.",
            images: [
                "https://images.pexels.com/photos/1783309/pexels-photo-1783309.jpeg?auto=compress&cs=tinysrgb&w=800",
                "https://images.pexels.com/photos/2812606/pexels-photo-2812606.jpeg?auto=compress&cs=tinysrgb&w=800"
            ],
            category: "vases",
            tags: ["coiled", "sculptural", "desert"],
            inStock: true,
            stockCount: 4,
            arEnabled: true,
            featured: true,
            bestseller: false,
            dimensions: "8″ H x 5″ W",
            weight: "1.5 lbs",
            material: "Terracotta clay, burnished finish",
            care: "Hand wash only. Not for food use."
        },
        {
            id: 5,
            name: "Morning Ritual Set",
            slug: "morning-ritual-set",
            price: 124,
            compareAtPrice: 150,
            currency: "USD",
            maker: "Elena Wolf",
            makerId: 1,
            location: "Oregon",
            description: "Complete coffee set: mug + saucer + spoon rest. Gift boxed.",
            longDescription: "The perfect gift for coffee lovers. This thoughtfully curated set includes Elena's best-selling Ember mug, a matching saucer, and a delicate spoon rest — all packaged in a reusable gift box.",
            images: [
                "https://images.pexels.com/photos/1628818/pexels-photo-1628818.jpeg?auto=compress&cs=tinysrgb&w=800"
            ],
            category: "gift-sets",
            tags: ["gift", "set", "coffee"],
            inStock: true,
            stockCount: 6,
            arEnabled: false,
            featured: false,
            bestseller: true,
            dimensions: "Gift box: 10″ x 10″ x 5″",
            weight: "2.5 lbs",
            material: "Stoneware",
            care: "Dishwasher safe."
        }
    ],

    // Makers/Artisans Database
    makers: [
        {
            id: 1,
            name: "Elena Wolf",
            slug: "elena-wolf",
            location: "Portland, Oregon",
            region: "Pacific Northwest",
            specialty: "Wood-fired stoneware",
            experience: "15 years",
            studio: "Wolf Ceramics Studio",
            story: "Elena discovered pottery while studying environmental science. She now runs a solar-powered studio where every piece is fired in a hand-built wood kiln. Her work reflects the textures of Oregon's forests and coastlines.",
            techniques: ["Wheel throwing", "Wood firing", "Ash glazing"],
            avatar: "https://randomuser.me/api/portraits/women/68.jpg",
            coverImage: "https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg",
            products: [1, 5], // product IDs
            social: {
                instagram: "@elena.wolf.ceramics",
                website: "elenawolfceramics.com"
            },
            acceptsCustom: true,
            customLeadTime: "4-6 weeks",
            featured: true
        },
        {
            id: 2,
            name: "James Rivera",
            slug: "james-rivera",
            location: "Burlington, Vermont",
            region: "New England",
            specialty: "Glaze alchemy",
            experience: "22 years",
            studio: "Rivera Clayworks",
            story: "James is a former chemist turned potter, known for developing unique crystalline glazes. His studio overlooks Lake Champlain, and his work is collected by galleries throughout the Northeast.",
            techniques: ["Glaze chemistry", "Porcelain", "Crystalline glazes"],
            avatar: "https://randomuser.me/api/portraits/men/32.jpg",
            coverImage: "https://images.pexels.com/photos/3912674/pexels-photo-3912674.jpeg",
            products: [2],
            social: {
                instagram: "@rivera.clayworks",
                website: "riveraceramics.com"
            },
            acceptsCustom: true,
            customLeadTime: "6-8 weeks",
            featured: true
        },
        {
            id: 3,
            name: "Maya Chen",
            slug: "maya-chen",
            location: "Vancouver, British Columbia",
            region: "Pacific Northwest",
            specialty: "Minimalist slipware",
            experience: "8 years",
            studio: "Maya Chen Ceramics",
            story: "Maya blends traditional Chinese ceramic techniques with West Coast minimalism. Her work is defined by clean lines, subtle textures, and thoughtful functionality.",
            techniques: ["Slip casting", "Porcelain", "Minimalist glazing"],
            avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            coverImage: "https://images.pexels.com/photos/5260811/pexels-photo-5260811.jpeg",
            products: [3],
            social: {
                instagram: "@maya.chen.ceramics",
                website: "mayachenceramics.com"
            },
            acceptsCustom: false,
            customLeadTime: null,
            featured: true
        },
        {
            id: 4,
            name: "Sam Greywolf",
            slug: "sam-greywolf",
            location: "Santa Fe, New Mexico",
            region: "Southwest",
            specialty: "Native inspired textures",
            experience: "30 years",
            studio: "Greywolf Pottery",
            story: "Sam (Cherokee descent) has dedicated his career to reviving and preserving traditional Southwestern pottery techniques. His pieces are held in permanent collections at the Heard Museum and IAIA.",
            techniques: ["Hand coiling", "Burnishing", "Pit firing"],
            avatar: "https://randomuser.me/api/portraits/men/52.jpg",
            coverImage: "https://images.pexels.com/photos/4026088/pexels-photo-4026088.jpeg",
            products: [4],
            social: {
                instagram: "@greywolf.pottery",
                website: "greywolfpottery.com"
            },
            acceptsCustom: true,
            customLeadTime: "12-16 weeks",
            featured: true
        }
    ],

    // Featured collections
    collections: [
        {
            id: "fall-2025",
            name: "Harvest Collection",
            description: "Warm earth tones inspired by autumn's abundance",
            image: "https://images.pexels.com/photos/1325715/pexels-photo-1325715.jpeg",
            productIds: [1, 2],
            season: "Fall 2025",
            limited: false
        },
        {
            id: "holiday-2025",
            name: "Winter Solstice",
            description: "Gift-ready sets and limited edition pieces for holiday entertaining",
            image: "https://images.pexels.com/photos/3970608/pexels-photo-3970608.jpeg",
            productIds: [5],
            season: "Holiday 2025",
            limited: true
        }
    ],

    // AR Configuration
    ar: {
        enabled: true,
        supportedDevices: ["iOS 13+", "Android 8+"],
        defaultModel: "https://models.clayandhearth.com/standard-mug.glb",
        // AR specific settings
        placementMode: "surface",
        autoScale: true,
        showInstructions: true,
        allowCapture: true
    },

    // Cart & Checkout Settings
    cart: {
        currency: "USD",
        currencySymbol: "$",
        taxRate: 0.08, // 8% for Oregon
        shippingCost: 7.99,
        freeShippingThreshold: 75,
        maxQuantityPerItem: 10,
        allowGiftWrap: true,
        giftWrapCost: 4.99
    },

    // Shipping Zones
    shippingZones: [
        { name: "USA (Continental)", rate: 7.99, freeThreshold: 75, estimatedDays: "3-7" },
        { name: "Alaska & Hawaii", rate: 15.99, freeThreshold: 150, estimatedDays: "7-14" },
        { name: "Canada", rate: 19.99, freeThreshold: 200, estimatedDays: "10-20" },
        { name: "International", rate: 39.99, freeThreshold: 300, estimatedDays: "15-30" }
    ],

    // Newsletter & Marketing
    newsletter: {
        provider: "Mailchimp",
        apiEndpoint: "/api/subscribe",
        listId: "abc123xyz",
        segments: {
            general: "General Interest",
            collectors: "Collectors",
            trade: "Trade & Wholesale"
        }
    },

    // Custom Commission Settings
    customCommission: {
        enabled: true,
        minBudget: 150,
        consultationFee: 0, // free consultation
        process: [
            "Initial consultation (virtual or in-studio)",
            "Design concept & sketch",
            "Client approval",
            "Creation & firing",
            "Final approval",
            "Shipping or pickup"
        ],
        timeframe: "4-16 weeks depending on complexity",
        availableMakers: [1, 2, 4] // maker IDs who accept custom work
    },

    // Analytics & Tracking
    analytics: {
        googleAnalyticsId: "G-XXXXXXXXXX",
        facebookPixelId: "1234567890",
        pinterestTagId: "1234567890",
        enabled: true
    },

    // UI Theme Settings
    theme: {
        primaryColor: "#b87c4f",
        secondaryColor: "#9b6a4b",
        accentColor: "#c18f5b",
        backgroundColor: "#fefaf5",
        textColor: "#2c241a",
        fontPrimary: "'Playfair Display', serif",
        fontSecondary: "'Inter', sans-serif",
        borderRadius: "24px",
        buttonRadius: "40px"
    },

    // Helper function to get product by ID
    getProductById: function(id) {
        return this.products.find(p => p.id === id);
    },

    // Helper function to get maker by ID
    getMakerById: function(id) {
        return this.makers.find(m => m.id === id);
    },

    // Helper function to get products by maker
    getProductsByMaker: function(makerId) {
        return this.products.filter(p => p.makerId === makerId);
    },

    // Helper function to get products by category
    getProductsByCategory: function(category) {
        return this.products.filter(p => p.category === category);
    },

    // Helper function to get featured products
    getFeaturedProducts: function() {
        return this.products.filter(p => p.featured === true);
    },

    // Helper function to get bestsellers
    getBestsellers: function() {
        return this.products.filter(p => p.bestseller === true);
    },

    // Helper function to get AR-enabled products
    getARProducts: function() {
        return this.products.filter(p => p.arEnabled === true);
    },

    // Helper function to get products in stock
    getInStockProducts: function() {
        return this.products.filter(p => p.inStock === true);
    }
};

// Export for use in other files (if using modules)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}

// Make available globally
window.CONFIG = CONFIG;
