export const sidebarData = [
  {
    title: "TRAVEL DEALS",
    items: [
      {
        id: "flightDeals",
        name: "Flight Deals",
        icon: "/icons/Airplane.svg",
      },
      {
        id: "bundleDeals",
        name: "Bundle Deals",
        icon: "/icons/lucide_tree-palm.svg",
      },
      {
        id: "departureAirports",
        name: "Departure Airports",
        icon: "/icons/airplane2.svg",
      },
      {
        id: "dealsUpgrades",
        name: "Deals Upgrades",
        icon: "/icons/Plugin.svg",
      },
    ],
  },
  {
    title: "SAVING TOOLS",
    items: [
      { id: "priceTracking", name: "Price Tracking", icon: "/icons/price.svg" },
      {
        id: "rebooking",
        name: "Rebooking",
        icon: "/icons/Reception bell.svg",
      },
      { id: "cashback", name: "Cashback", icon: "/icons/ri_refund-2-line.svg" },
    ],
  },
  {
    title: "ACCOUNT",
    items: [
      { id: "myProfile", name: "My Profile", icon: "/icons/profile.svg" },
      { id: "myWallet", name: "My Wallet", icon: "/icons/wallet.svg" },
      { id: "referFriends", name: "Refer Friends", icon: "/icons/friends.svg" },
      { id: "myBookings", name: "My Bookings", icon: "/icons/bookings.svg" },
      {
        id: "myVouchers",
        name: "My Vouchers",
        icon: "/icons/mdi_voucher-outline.svg",
      },
    ],
  },
];

export const faqs = [
  {
    question: "Very long question name?",
    answer:
      "Lorem ipsum dolor sit amet consectetur etiamdit hac semper cras at tellus aliquam sit. Morbi justo nullam auctor integer id praesent iaculis. Quis euismod vitae consequat sed erat. Ut in sed facilisis cras, venenatis risus vestibulum gravida lectus eget. Id porta diam vestibulum porta non fringilla quis vel.",
  },
  {
    question: "Another very long question name here?",
    answer:
      "This is the answer to the second question. It can be a bit longer to provide more detail.",
  },
  {
    question: "What about a third very important question?",
    answer:
      "And here's the answer to the third question, providing useful information to the user.",
  },
];

export const footerData = [
  {
    title: "Sitemap",
    links: [
      { text: "Flight Deals", href: "#" },
      { text: "Hotels", href: "#" },
      { text: "Extension", href: "#" },
      { text: "Press", href: "#" },
      { text: "Blog", href: "#" },
      { text: "Reviews", href: "#" },
    ],
  },
  {
    title: "Follow us",
    links: [
      { text: "Facebook", href: "#", isExternal: true },
      { text: "Instagram", href: "#", isExternal: true },
      { text: "YouTube", href: "#", isExternal: true },
    ],
    contact: "hi@ratepunk.com",
  },
  {
    title: "Get the extension",
    links: [
      { text: "Chrome Extension", href: "#" },
      { text: "Safari Extension", href: "#" },
      { text: "Firefox Extension", href: "#" },
    ],
  },
];

export const routes = ["Hotels", "Extensions", "Press", "Blogs"];

export const howItWorksSteps = [
  {
    icon: "/icons/share.svg",
    title: "Share your link",
    description:
      "Invite your friends to join Ratepunk using your personal referral link.",
  },
  {
    icon: "/icons/present.svg",
    title: "Earn $5 each",
    description:
      "You'll both receive $5 when your friend signs up for Ratepunk using your referral link.",
  },
  {
    icon: "/icons/money.svg",
    title: "Earn $10 rewards",
    description:
      "If your friend becomes a loyal member of Ratepunk, you'll get an extra $10 reward.",
  },
];
