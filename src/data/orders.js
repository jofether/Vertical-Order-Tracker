export const orders = [
  {
    id: "#ORD920491",
    status: "On Time",
    statusColor: "green",
    carrier: "FastShip Express",
    weight: "2.5 lbs",
    estimatedDelivery: "Feb 18, 2026",
    recipient: "Sarah Mitchell",
    address: "123 Main Street, New York, NY 10001",
    amount: "$129.99",
    items: [
      { name: "Premium Wireless Headphones", qty: 1, price: "$89.99" },
      { name: "Phone Case (Blue)", qty: 1, price: "$24.99" },
      { name: "Screen Protector Pack", qty: 1, price: "$15.01" }
    ],
    events: [
      { 
        time: "09:00 AM", 
        status: "Delivered", 
        desc: "Package delivered to front desk.", 
        active: true,
        date: "Feb 18, 2026",
        location: "New York, NY",
        icon: "✓",
        details: "Successfully signed by reception at main entrance. Package placed in secure locker."
      },
      { 
        time: "07:30 AM", 
        status: "Out for Delivery", 
        desc: "Driver is on the way to your location.", 
        active: true,
        date: "Feb 18, 2026",
        location: "Manhattan, NY",
        icon: "🚚",
        details: "Delivery vehicle #4521 currently in your area. Estimated arrival in 90 minutes."
      },
      { 
        time: "05:00 AM", 
        status: "Arrived at Facility", 
        desc: "Package sorted at distribution center.", 
        active: true,
        date: "Feb 18, 2026",
        location: "New York Distribution Hub",
        icon: "📦",
        details: "Package processed and ready for final delivery. All systems are operational."
      },
      { 
        time: "11:45 PM", 
        status: "In Transit", 
        desc: "Departed from regional sorting facility.", 
        active: false,
        date: "Feb 17, 2026",
        location: "Philadelphia, PA",
        icon: "→",
        details: "Left regional sorting facility heading to New York distribution hub."
      },
      { 
        time: "6:30 PM", 
        status: "Picked Up", 
        desc: "Package collected from warehouse.", 
        active: false,
        date: "Feb 17, 2026",
        location: "Pennsylvania Warehouse",
        icon: "🏭",
        details: "Package picked up from warehouse and loaded onto truck."
      },
      { 
        time: "2:00 PM", 
        status: "Processed", 
        desc: "Order prepared and boxed.", 
        active: false,
        date: "Feb 17, 2026",
        location: "Fulfillment Center",
        icon: "📋",
        details: "Items verified and securely packaged for shipment."
      },
      { 
        time: "10:15 AM", 
        status: "Confirmed", 
        desc: "Seller has confirmed your order.", 
        active: false,
        date: "Feb 16, 2026",
        location: "Online",
        icon: "✉️",
        details: "Order confirmed and forwarded to warehouse for processing."
      },
      { 
        time: "8:30 AM", 
        status: "Order Placed", 
        desc: "Your order has been received.", 
        active: false,
        date: "Feb 16, 2026",
        location: "Online",
        icon: "🛒",
        details: "Order successfully placed and payment confirmed."
      },
    ]
  },
  {
    id: "#ORD920428",
    status: "In Transit",
    statusColor: "blue",
    carrier: "Swift Logistics",
    weight: "1.2 lbs",
    estimatedDelivery: "Feb 20, 2026",
    recipient: "John Doe",
    address: "456 Oak Avenue, Los Angeles, CA 90001",
    amount: "$89.99",
    items: [
      { name: "USB-C Cable (3-Pack)", qty: 1, price: "$29.99" },
      { name: "Portable Charger 20000mAh", qty: 1, price: "$60.00" }
    ],
    events: [
      { 
        time: "3:20 PM", 
        status: "In Transit", 
        desc: "Package on the way to destination.", 
        active: true,
        date: "Feb 18, 2026",
        location: "Chicago, IL",
        icon: "→",
        details: "Currently in transit. Estimated delivery in 2 days."
      },
      { 
        time: "10:00 AM", 
        status: "Sorted", 
        desc: "Package sorted for delivery route.", 
        active: false,
        date: "Feb 18, 2026",
        location: "Chicago Distribution",
        icon: "📦",
        details: "Sorted and loaded onto delivery vehicle."
      },
      { 
        time: "6:00 PM", 
        status: "At Hub", 
        desc: "Package arrived at transit hub.", 
        active: false,
        date: "Feb 17, 2026",
        location: "Chicago Hub",
        icon: "🏢",
        details: "Received and scanned at regional hub."
      },
      { 
        time: "1:00 PM", 
        status: "Picked Up", 
        desc: "Shipped from warehouse.", 
        active: false,
        date: "Feb 17, 2026",
        location: "Texas Warehouse",
        icon: "🏭",
        details: "Package picked up and loaded."
      },
      { 
        time: "9:00 AM", 
        status: "Order Placed", 
        desc: "Your order has been received.", 
        active: false,
        date: "Feb 15, 2026",
        location: "Online",
        icon: "🛒",
        details: "Order confirmation sent to email."
      },
    ]
  }
];
