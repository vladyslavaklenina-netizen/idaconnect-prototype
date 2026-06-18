const ASSETS = {
  logo: "./assets/logo.png",
  hero: "./assets/hero-visit.png",
  sophia: "./assets/avatar-sophia.png",
  daniel: "./assets/avatar-daniel.png",
  ava: "./assets/avatar-ava.png",
  ethan: "./assets/avatar-ethan.png",
  profileSophia: "./assets/profile-sophia.png",
};

const state = {
  screen: "welcome",
  role: "family",
  date: "Thu 11",
  time: "11:00 AM",
  duration: 30,
  purpose: "Friendly check-in",
  lovedOneSaved: true,
  mediaConsent: true,
  favoriteSophia: false,
  filter: "All",
  visitStatus: "Scheduled",
  timerStarted: false,
  selectedMood: "Happy",
};

const screens = [
  {
    id: "welcome",
    title: "Welcome",
    type: "Current",
    purpose: "Role selection and a sharper elder-care value proposition.",
    actions: ["Family Member", "Companion", "Resident coming soon", "Facility Staff coming soon"],
    notes: ["Keep the emotional photo.", "Make the nursing home/hospital context explicit.", "Use trust points under the hero."],
  },
  {
    id: "create",
    title: "Create Account",
    type: "Current",
    purpose: "Create an account and preserve the selected role.",
    actions: ["Role selector", "Terms acceptance", "Create Account", "Log In"],
    notes: ["Family users route to Add Loved One.", "Companion users route to verification.", "Add a short privacy reassurance line."],
  },
  {
    id: "login",
    title: "Login",
    type: "Current",
    purpose: "Let returning users enter the correct role experience.",
    actions: ["Forgot Password", "Log In", "Google", "Apple", "Sign Up"],
    notes: ["Social login is simulated.", "Forgot Password opens a modal.", "Trust line supports family reassurance."],
  },
  {
    id: "loved-one",
    title: "Add Loved One",
    type: "MVP addition",
    purpose: "Make the elder/resident the center before booking starts.",
    actions: ["Save Loved One", "Media consent", "Interest chips"],
    notes: ["Avoid medical records and diagnoses.", "Capture preferences and conversation starters.", "Gate booking if no loved one exists."],
  },
  {
    id: "dashboard",
    title: "Family Dashboard",
    type: "Current improved",
    purpose: "Give the family immediate reassurance and fast access to the next visit/report.",
    actions: ["View Details", "Book a Visit", "Visit History", "Messages", "Payment", "View Latest Report"],
    notes: ["Add Loved One Status Card.", "Report preview is central.", "Bottom nav remains simple."],
  },
  {
    id: "find",
    title: "Find Companion",
    type: "Current improved",
    purpose: "Browse trusted companions without feeling like a generic marketplace.",
    actions: ["Search", "Filters", "Favorite", "Companion card", "Verification"],
    notes: ["Trust badges outrank price.", "Filters include training, language, availability.", "Cards open profile."],
  },
  {
    id: "profile",
    title: "Companion Profile",
    type: "Current improved",
    purpose: "Build enough trust for a family to book.",
    actions: ["Message", "Book a Visit", "View Verification", "Favorite", "Reviews"],
    notes: ["Add verification section.", "Add motivation copy.", "Messaging can wait until booking."],
  },
  {
    id: "book",
    title: "Book Visit",
    type: "Current improved",
    purpose: "Schedule a specific visit for a specific loved one.",
    actions: ["Select Loved One", "Date", "Time", "Duration", "Purpose", "Notes", "Review and Pay"],
    notes: ["Add visit purpose.", "Show facility and media consent.", "Update total dynamically."],
  },
  {
    id: "payment",
    title: "Payment Review",
    type: "MVP addition",
    purpose: "Let the family review and simulate payment.",
    actions: ["Add Payment Method", "Promo Code", "Edit Visit", "Confirm and Pay"],
    notes: ["No real payment.", "Use Stripe later.", "Confirmation must feel reliable."],
  },
  {
    id: "confirmation",
    title: "Confirmation",
    type: "MVP addition",
    purpose: "Reassure the family the visit is scheduled.",
    actions: ["View Visit Details", "Add to Calendar", "Book Another Visit", "Return Home"],
    notes: ["Include companion, loved one, facility, purpose, total.", "Show cancellation policy."],
  },
  {
    id: "visit-details",
    title: "Visit Details",
    type: "MVP addition",
    purpose: "Show scheduled visit status and management actions.",
    actions: ["Cancel", "Reschedule", "Message Companion", "Support"],
    notes: ["Status timeline reduces anxiety.", "Cancel uses confirmation modal."],
  },
  {
    id: "report",
    title: "Visit Report",
    type: "Essential MVP",
    purpose: "Deliver reassurance and visibility after the visit.",
    actions: ["Rebook Same Companion", "Rate Visit", "Share Report", "View Media", "Raise Concern"],
    notes: ["This is the core value screen.", "Media appears only with consent.", "Concern can later route to facility."],
  },
  {
    id: "companion-apply",
    title: "Companion Verification",
    type: "MVP addition",
    purpose: "Show the safety and approval path for companions.",
    actions: ["Upload ID", "Start Background Check", "Complete Training", "Submit Application"],
    notes: ["Use clear approval states.", "Profile cannot accept visits until approved."],
  },
  {
    id: "companion-dashboard",
    title: "Companion Dashboard",
    type: "MVP addition",
    purpose: "Manage assigned visits, availability, and earnings.",
    actions: ["Accept Visit", "Decline Visit", "View Visit", "Set Availability", "View Earnings"],
    notes: ["Accepted visit notifies family.", "Decline asks for a reason."],
  },
  {
    id: "checkin",
    title: "Check-In",
    type: "MVP addition",
    purpose: "Verify companion arrival at the facility.",
    actions: ["Scan QR", "Use GPS", "Manual Check-In"],
    notes: ["QR/GPS are differentiators.", "Manual check-in needs admin review."],
  },
  {
    id: "in-visit",
    title: "In Visit",
    type: "MVP addition",
    purpose: "Guide the companion during the visit.",
    actions: ["Start Timer", "Prompts", "Add Note", "Safety Concern", "End Visit"],
    notes: ["Prompts use loved-one interests.", "Safety action must be always visible."],
  },
  {
    id: "submit-report",
    title: "Submit Report",
    type: "Essential MVP",
    purpose: "Send the structured report to the family.",
    actions: ["Select Mood", "Select Activities", "Upload Media", "Submit Report"],
    notes: ["Keep it fast after a visit.", "Report creates rebooking value."],
  },
  {
    id: "plans",
    title: "Plans",
    type: "Later",
    purpose: "Preview subscription model after core flow works.",
    actions: ["Pay Per Visit", "Essential", "Weekly Wellness", "Daily Comfort", "Compare"],
    notes: ["Secondary priority.", "Useful for investor/product demo."],
  },
  {
    id: "coming-soon",
    title: "Future Roles",
    type: "Future",
    purpose: "Show Resident and Facility Staff without adding MVP complexity.",
    actions: ["Resident preview", "Facility Staff preview"],
    notes: ["Coming soon only unless demoing ecosystem.", "Keep out of core MVP build."],
  },
];

const companionData = [
  { name: "Sophia Martinez", role: "Social Work Student", rating: "4.9", reviews: "138", price: "$0.70 / min", status: "Available now", image: ASSETS.sophia, tags: ["ID Verified", "Background Checked", "Training"] },
  { name: "Daniel Kim", role: "Psychology Student", rating: "4.8", reviews: "96", price: "$0.70 / min", status: "Available in 1 hr", image: ASSETS.daniel, tags: ["Training", "Dementia-Friendly"] },
  { name: "Ava Johnson", role: "Nursing Student", rating: "4.9", reviews: "77", price: "$0.75 / min", status: "Available now", image: ASSETS.ava, tags: ["Hospital Visits", "ID Verified"] },
  { name: "Ethan Brown", role: "PT Student", rating: "4.8", reviews: "53", price: "$0.70 / min", status: "Available in 2 hrs", image: ASSETS.ethan, tags: ["Walking", "Repeat Visits"] },
];

const app = document.querySelector("#app");

function currentScreen() {
  return screens.find((screen) => screen.id === state.screen) || screens[0];
}

function money() {
  return `$${(state.duration * 0.7).toFixed(2)}`;
}

function statusBar() {
  return `
    <div class="status">
      <span>17:34</span>
      <span class="status-dots">LTE WiFi 100%</span>
    </div>
  `;
}

function topbar(title, back = "dashboard", right = "") {
  return `
    <div class="topbar">
      <button class="icon-btn" data-go="${back}" aria-label="Back">Back</button>
      <h3>${title}</h3>
      ${right || '<span></span>'}
    </div>
  `;
}

function logoSmall() {
  return `<img class="logo-small" src="${ASSETS.logo}" alt="IDAConnect logo" />`;
}

function primary(label, attrs = "") {
  return `<button class="primary" ${attrs}>${label}</button>`;
}

function secondary(label, attrs = "") {
  return `<button class="secondary" ${attrs}>${label}</button>`;
}

function bottomNav(active = "Home") {
  const items = [
    ["Home", "dashboard"],
    ["Loved Ones", "loved-one"],
    ["Visits", "visit-details"],
    ["Messages", "coming-soon"],
    ["Account", "plans"],
  ];
  return `
    <div class="bottom-nav">
      ${items.map(([label, target]) => `<button class="${active === label ? "active" : ""}" data-go="${target}"><span>${label}</span></button>`).join("")}
    </div>
  `;
}

function screenWelcome() {
  return `
    ${statusBar()}
    <img class="hero-logo" src="${ASSETS.logo}" alt="IDAConnect logo" />
    <img class="hero-img" src="${ASSETS.hero}" alt="Companion visiting an older adult" />
    <h1 class="headline">When you can't be there, someone trusted can.</h1>
    <p class="subtle center">Verified companion visits for loved ones in nursing homes and hospitals.</p>
    <div class="trust-row">
      <span class="trust-pill">Verified companions</span>
      <span class="trust-pill">Short visits</span>
      <span class="trust-pill">Visit reports</span>
    </div>
    <div class="stack">
      ${primary("I'm a Family Member", 'data-role="family" data-go="create"')}
      ${secondary("I'm a Companion", 'data-role="companion" data-go="create"')}
      <div class="split">
        <button class="ghost" data-modal="resident">Resident</button>
        <button class="ghost" data-modal="facility">Facility Staff</button>
      </div>
    </div>
    <p class="tiny center" style="margin-top: 20px;">Peace of mind. One visit at a time.</p>
  `;
}

function screenCreate() {
  return `
    ${statusBar()}
    ${topbar("Create Account", "welcome")}
    <p class="subtle center">Join IDAConnect to coordinate trusted visits for a loved one.</p>
    ${logoSmall()}
    <div class="chip-row" style="margin-bottom: 14px;">
      <button class="chip ${state.role === "family" ? "active" : ""}" data-role="family">Family Member</button>
      <button class="chip ${state.role === "companion" ? "active" : ""}" data-role="companion">Companion</button>
      <button class="chip" data-modal="facility">Facility Staff</button>
    </div>
    <div class="form">
      <div class="split">
        <div class="field"><label>First Name</label><input value="Olivia" /></div>
        <div class="field"><label>Last Name</label><input value="Thompson" /></div>
      </div>
      <div class="field"><label>Email</label><input value="olivia@example.com" /></div>
      <div class="field"><label>Phone Number</label><input value="+1 (555) 013-6620" /></div>
      <div class="field"><label>Password</label><input type="password" value="password123" /></div>
      <div class="field"><label>Confirm Password</label><input type="password" value="password123" /></div>
      <label class="checkline"><input type="checkbox" checked /> I agree to the <button class="ghost" data-modal="terms" style="width:auto; min-height:0; padding:0;">Terms</button> and <button class="ghost" data-modal="privacy" style="width:auto; min-height:0; padding:0;">Privacy Policy</button></label>
      <p class="tiny">Your information is secure and used only to coordinate visits.</p>
      ${primary("Create Account", `data-go="${state.role === "family" ? "loved-one" : "companion-apply"}"`)}
      <button class="ghost" data-go="login">Already have an account? Log In</button>
    </div>
  `;
}

function screenLogin() {
  return `
    ${statusBar()}
    ${topbar("Welcome Back", "welcome")}
    <p class="subtle center">Secure access to your loved one's visit updates.</p>
    ${logoSmall()}
    <div class="form">
      <div class="field"><label>Email</label><input value="olivia@example.com" /></div>
      <div class="field"><label>Password</label><input type="password" value="password123" /></div>
      <button class="ghost" data-modal="reset" style="text-align:right;">Forgot Password?</button>
      ${primary("Log In", `data-go="${state.role === "companion" ? "companion-dashboard" : "dashboard"}"`)}
      <p class="tiny center">or</p>
      ${secondary("Continue with Google", `data-toast="Google sign-in simulated" data-go="${state.role === "companion" ? "companion-dashboard" : "dashboard"}"`)}
      ${secondary("Continue with Apple", `data-toast="Apple sign-in simulated" data-go="${state.role === "companion" ? "companion-dashboard" : "dashboard"}"`)}
      <button class="ghost" data-go="create">Don't have an account? Sign Up</button>
    </div>
  `;
}

function screenLovedOne() {
  return `
    ${statusBar()}
    ${topbar("Add Loved One", "create")}
    <p class="subtle center">Create the profile companions use to make each visit personal, safe, and respectful.</p>
    <div class="form" style="margin-top: 14px;">
      <div class="field"><label>Preferred Name</label><input value="Eleanor Thompson" /></div>
      <div class="split">
        <div class="field"><label>Age Range</label><select><option>80-85</option><option>75-80</option></select></div>
        <div class="field"><label>Language</label><select><option>English</option><option>Spanish</option></select></div>
      </div>
      <div class="field"><label>Facility</label><input value="Sunrise of Walnut Creek" /></div>
      <div class="field"><label>Visit Preferences</label><input value="Afternoons, quiet conversation" /></div>
      <div class="field"><label>Conversation Starters</label>
        <div class="chip-row">
          <button class="chip active">Gardening</button>
          <button class="chip active">Jazz</button>
          <button class="chip">Travel stories</button>
          <button class="chip">Books</button>
        </div>
      </div>
      <label class="checkline"><input type="checkbox" ${state.mediaConsent ? "checked" : ""} data-toggle="mediaConsent" /> Photo/video allowed for visit reports</label>
      <div class="field"><label>Notes for Companion</label><textarea>Please ask her about her garden. Speak slowly and clearly.</textarea></div>
      ${primary("Save Loved One", 'data-toast="Loved one profile saved" data-go="dashboard"')}
      <button class="ghost" data-toast="Booking requires a loved one profile">Skip for now</button>
    </div>
  `;
}

function screenDashboard() {
  return `
    ${statusBar()}
    <div class="row between" style="margin-bottom: 16px;">
      <div>
        <h2 style="margin:0; font-size:22px;">Hello, Olivia</h2>
        <p class="subtle" style="margin:4px 0 0;">Here's what is happening today.</p>
      </div>
      <button class="favorite" data-modal="notifications">1</button>
    </div>
    <div class="card soft-card stack">
      <div class="row between">
        <div>
          <h4>Eleanor Thompson</h4>
          <p class="tiny">Sunrise of Walnut Creek</p>
        </div>
        <span class="status-pill">Mood Good</span>
      </div>
      <div class="summary-row"><span>Last visit</span><strong>Yesterday</strong></div>
      <div class="summary-row"><span>Next visit</span><strong>Tomorrow 11:00 AM</strong></div>
      ${secondary("View Latest Report", 'data-go="report"')}
    </div>
    <div class="card soft-card" style="margin-top:14px;">
      <h4>Next Visit</h4>
      <div class="row">
        <img class="avatar" src="${ASSETS.sophia}" alt="Sophia Martinez" />
        <div>
          <strong>With Sophia Martinez</strong>
          <p class="tiny">30 min visit at Sunrise of Walnut Creek</p>
        </div>
      </div>
      <div style="margin-top: 12px;">${secondary("View Details", 'data-go="visit-details"')}</div>
    </div>
    <div class="quick-grid">
      <button class="quick" data-go="find"><span class="quick-icon">Book</span><span>Book a Visit</span></button>
      <button class="quick" data-go="visit-details"><span class="quick-icon">List</span><span>Visit History</span></button>
      <button class="quick" data-go="coming-soon"><span class="quick-icon">Msg</span><span>Messages</span></button>
      <button class="quick" data-go="payment"><span class="quick-icon">Pay</span><span>Payment</span></button>
    </div>
    <div class="row between">
      <h4 class="section-title">Upcoming Visits</h4>
      <button class="ghost" data-go="visit-details" style="width:auto; min-height:0;">View all</button>
    </div>
    <div class="card row between" data-go="visit-details" style="cursor:pointer;">
      <div class="row"><img class="avatar" src="${ASSETS.daniel}" alt="Daniel Kim" /><div><strong>May 24 - 2:00 PM</strong><p class="tiny">With Daniel Kim</p></div></div>
      <span class="status-pill">Scheduled</span>
    </div>
    ${bottomNav("Home")}
  `;
}

function screenFind() {
  const visible = companionData.filter((companion) => {
    if (state.filter === "All") return true;
    if (state.filter === "Available") return companion.status === "Available now";
    if (state.filter === "Students") return companion.role.includes("Student");
    if (state.filter === "Female") return ["Sophia Martinez", "Ava Johnson"].includes(companion.name);
    return true;
  });
  return `
    ${statusBar()}
    ${topbar("Find a Companion", "dashboard", '<button class="icon-btn" data-modal="filters">Filter</button>')}
    <input class="search" placeholder="Search by name, skills, or interests" />
    <div class="chip-row" style="margin: 12px 0;">
      ${["All", "Available", "Students", "Female"].map((filter) => `<button class="chip ${state.filter === filter ? "active" : ""}" data-filter="${filter}">${filter === "Available" ? "Available Now" : filter}</button>`).join("")}
    </div>
    <div class="companion-list">
      ${visible.map(companionCard).join("")}
    </div>
  `;
}

function companionCard(companion) {
  const isSophia = companion.name === "Sophia Martinez";
  return `
    <div class="companion-card">
      <div class="row between">
        <button class="row" data-go="${isSophia ? "profile" : "profile"}" style="border:0; background:transparent; padding:0; flex:1; text-align:left;">
          <img class="avatar" src="${companion.image}" alt="${companion.name}" />
          <span>
            <strong>${companion.name}</strong>
            <span class="tiny" style="display:block;">${companion.role}</span>
            <span class="tiny" style="display:block;"><span style="color:var(--yellow);">Star</span> ${companion.rating} (${companion.reviews}) <span class="price">${companion.price}</span></span>
            <span class="tiny" style="display:block; color:${companion.status === "Available now" ? "var(--green)" : "var(--muted)"};">${companion.status}</span>
          </span>
        </button>
        <button class="favorite ${state.favoriteSophia && isSophia ? "saved" : ""}" data-toggle="favoriteSophia" data-toast="${state.favoriteSophia ? "Removed from favorites" : "Added to favorites"}">Save</button>
      </div>
      <div class="chip-row" style="margin:10px 0 0 60px;">
        ${companion.tags.map((tag) => `<span class="chip active">${tag}</span>`).join("")}
      </div>
    </div>
  `;
}

function screenProfile() {
  return `
    ${statusBar()}
    ${topbar("", "find", '<button class="icon-btn" data-modal="profile-menu">More</button>')}
    <div class="center">
      <img class="avatar large" src="${ASSETS.profileSophia}" alt="Sophia Martinez" />
      <div style="margin-top:12px;"><span class="status-pill">Available Now</span></div>
      <h2 style="margin: 10px 0 2px;">Sophia Martinez</h2>
      <p class="subtle" style="margin:0;">Social Work Student</p>
      <p class="tiny" style="margin:8px 0 0;"><span style="color:var(--yellow);">Star</span> 4.9 (138 reviews)</p>
    </div>
    <div class="stats">
      <div class="stat"><strong>125</strong><span class="tiny">Visits</span></div>
      <div class="stat"><strong>98%</strong><span class="tiny">Response</span></div>
      <div class="stat"><strong>2 yrs</strong><span class="tiny">Experience</span></div>
    </div>
    <div class="card">
      <h4>Trust & Verification</h4>
      <div class="chip-row">
        <span class="trust-pill">ID Verified</span>
        <span class="trust-pill">Background Checked</span>
        <span class="trust-pill">Training Completed</span>
        <span class="trust-pill">Interview Approved</span>
      </div>
      <button class="ghost" data-modal="verification">View verification details</button>
    </div>
    <div class="card" style="margin-top: 12px;">
      <h4>Why I joined IDAConnect</h4>
      <p class="subtle">I enjoy meaningful conversations, listening to stories, and helping families feel connected.</p>
      <h4>Skills & Interests</h4>
      <div class="chip-row"><span class="chip">Conversation</span><span class="chip">Music</span><span class="chip">Reading</span><span class="chip">Games</span><span class="chip">Walking</span></div>
    </div>
    <div class="split" style="margin-top:18px;">
      ${secondary("Message", 'data-modal="message-limit"')}
      ${primary("Book a Visit", 'data-go="book"')}
    </div>
  `;
}

function screenBook() {
  return `
    ${statusBar()}
    ${topbar("Book a Visit", "profile")}
    <div class="card soft-card row">
      <img class="avatar" src="${ASSETS.sophia}" alt="Sophia Martinez" />
      <div><strong>Sophia Martinez</strong><p class="tiny">Social Work Student <span class="price">$0.70/min</span></p></div>
    </div>
    <div class="stack" style="margin-top:16px;">
      <div>
        <h4 class="section-title">Loved One</h4>
        <button class="select-tile active" data-modal="loved-one-select">Eleanor Thompson - Sunrise of Walnut Creek</button>
      </div>
      <div>
        <h4 class="section-title">Select Date</h4>
        <div class="date-grid">${["Thu 11", "Fri 12", "Sat 13", "Sun 14", "Mon 15"].map((date) => `<button class="select-tile ${state.date === date ? "active" : ""}" data-date="${date}">${date.replace(" ", "<br>")}</button>`).join("")}</div>
      </div>
      <div class="field"><label>Time</label><select data-time><option>11:00 AM</option><option>2:00 PM</option><option>3:30 PM</option></select></div>
      <div>
        <h4 class="section-title">Duration</h4>
        <div class="duration-grid">${[15, 30, 45, 60].map((duration) => `<button class="select-tile ${state.duration === duration ? "active" : ""}" data-duration="${duration}">${duration} min</button>`).join("")}</div>
      </div>
      <div>
        <h4 class="section-title">Visit Purpose</h4>
        <div class="purpose-grid">${["Friendly check-in", "Conversation", "Reading together", "Dementia engagement", "Hospital support", "Family phone call"].map((purpose) => `<button class="select-tile ${state.purpose === purpose ? "active" : ""}" data-purpose="${purpose}">${purpose}</button>`).join("")}</div>
      </div>
      <div class="field"><label>Notes for Sophia</label><textarea>Please ask Eleanor about her garden and play soft jazz if she is interested.</textarea></div>
      <div class="card soft-card">
        <h4>Visit Summary</h4>
        <div class="summary-row"><span>Date</span><strong>${state.date}</strong></div>
        <div class="summary-row"><span>Time</span><strong>${state.time}</strong></div>
        <div class="summary-row"><span>Duration</span><strong>${state.duration} min</strong></div>
        <div class="summary-row"><span>Purpose</span><strong>${state.purpose}</strong></div>
        <div class="summary-row"><span>Media</span><strong>${state.mediaConsent ? "Allowed" : "No media"}</strong></div>
        <div class="summary-row"><span>Total</span><strong class="price">${money()}</strong></div>
      </div>
      ${primary(`Review & Pay - ${money()}`, 'data-go="payment"')}
    </div>
  `;
}

function screenPayment() {
  return `
    ${statusBar()}
    ${topbar("Review & Pay", "book")}
    <div class="stack">
      <div class="card soft-card">
        <h4>Visit</h4>
        <div class="summary-row"><span>For</span><strong>Eleanor Thompson</strong></div>
        <div class="summary-row"><span>With</span><strong>Sophia Martinez</strong></div>
        <div class="summary-row"><span>When</span><strong>${state.date}, ${state.time}</strong></div>
        <div class="summary-row"><span>Total</span><strong class="price">${money()}</strong></div>
      </div>
      <div class="card">
        <h4>Payment Method</h4>
        <p class="subtle">Visa ending in 4242</p>
        ${secondary("Add Payment Method", 'data-modal="payment"')}
      </div>
      ${secondary("Apply Promo Code", 'data-toast="Demo code IDA10 applied"')}
      ${secondary("Edit Visit", 'data-go="book"')}
      ${primary("Confirm & Pay", 'data-toast="Payment processed" data-go="confirmation"')}
    </div>
  `;
}

function screenConfirmation() {
  return `
    ${statusBar()}
    <div class="center" style="padding-top:54px;">
      <div class="brand-mark" style="margin:0 auto 18px;">OK</div>
      <h1 class="headline">Visit booked successfully.</h1>
      <p class="subtle">Sophia will visit Eleanor at Sunrise of Walnut Creek on ${state.date} at ${state.time}.</p>
    </div>
    <div class="card soft-card" style="margin-top:20px;">
      <div class="summary-row"><span>Duration</span><strong>${state.duration} min</strong></div>
      <div class="summary-row"><span>Purpose</span><strong>${state.purpose}</strong></div>
      <div class="summary-row"><span>Total paid</span><strong class="price">${money()}</strong></div>
      <p class="tiny">Free cancellation up to 12 hours before the visit.</p>
    </div>
    <div class="stack" style="margin-top:18px;">
      ${primary("View Visit Details", 'data-go="visit-details"')}
      ${secondary("Add to Calendar", 'data-toast="Visit added to calendar"')}
      ${secondary("Book Another Visit", 'data-go="find"')}
      <button class="ghost" data-go="dashboard">Return Home</button>
    </div>
  `;
}

function screenVisitDetails() {
  return `
    ${statusBar()}
    ${topbar("Visit Details", "dashboard")}
    <div class="card soft-card stack">
      <div class="row between"><h4>Upcoming Visit</h4><span class="status-pill">${state.visitStatus}</span></div>
      <div class="row"><img class="avatar" src="${ASSETS.sophia}" alt="Sophia Martinez" /><div><strong>Sophia Martinez</strong><p class="tiny">With Eleanor Thompson</p></div></div>
      <div class="summary-row"><span>Facility</span><strong>Sunrise of Walnut Creek</strong></div>
      <div class="summary-row"><span>Date & time</span><strong>${state.date}, ${state.time}</strong></div>
      <div class="summary-row"><span>Purpose</span><strong>${state.purpose}</strong></div>
    </div>
    <div class="card" style="margin-top:14px;">
      <h4>Status</h4>
      <div class="timeline">
        ${["Scheduled", "Companion confirmed", "Checked in", "Visit completed", "Report ready"].map((label, index) => `<div class="step"><span class="dot ${index < 2 ? "" : "pending"}"></span><div><strong>${label}</strong><p class="tiny">${index < 2 ? "Complete" : "Pending"}</p></div></div>`).join("")}
      </div>
    </div>
    <div class="stack" style="margin-top:16px;">
      ${secondary("Message Companion", 'data-modal="message-limit"')}
      ${secondary("Reschedule Visit", 'data-go="book"')}
      ${secondary("Contact Support", 'data-modal="support"')}
      <button class="ghost" data-modal="cancel">Cancel Visit</button>
      ${primary("Open Visit Report Demo", 'data-go="report"')}
    </div>
  `;
}

function screenReport() {
  return `
    ${statusBar()}
    ${topbar("Visit Report", "dashboard")}
    <div class="card soft-card stack">
      <div class="row between">
        <div><h4>Eleanor's visit is complete</h4><p class="tiny">Today at 11:35 AM - 30 min</p></div>
        <span class="status-pill">Mood Happy</span>
      </div>
      <div class="row"><img class="avatar" src="${ASSETS.sophia}" alt="Sophia Martinez" /><div><strong>Sophia Martinez</strong><p class="tiny">Social Work Student</p></div></div>
      <p class="subtle">Eleanor was cheerful today. We talked about her garden and favorite travel memories. She seemed relaxed and engaged throughout the visit.</p>
      <div class="chip-row"><span class="chip active">Conversation</span><span class="chip active">Music</span><span class="chip active">Family photos</span></div>
    </div>
    <div class="stack" style="margin-top:16px;">
      ${primary("Rebook Same Companion", 'data-go="book"')}
      ${secondary("Rate Visit", 'data-modal="rating"')}
      ${secondary("Share Report", 'data-modal="share"')}
      ${state.mediaConsent ? secondary("View Photo", 'data-modal="photo"') : ""}
      <button class="ghost" data-modal="concern">Raise Concern</button>
    </div>
  `;
}

function screenCompanionApply() {
  return `
    ${statusBar()}
    ${topbar("Become a Companion", "welcome")}
    <p class="subtle center">Complete verification before accepting visits with vulnerable older adults.</p>
    <div class="stack" style="margin-top:16px;">
      <div class="card"><h4>Create Companion Profile</h4><p class="subtle">Bio, photo, languages, city, experience.</p>${secondary("Create Profile", 'data-toast="Profile draft saved"')}</div>
      <div class="card"><h4>Identity Verification</h4><p class="subtle">Government ID and selfie match.</p>${secondary("Upload ID", 'data-toast="ID uploaded successfully"')}</div>
      <div class="card"><h4>Background Check</h4><p class="subtle">National, county, and sex offender registry screening.</p>${secondary("Start Background Check", 'data-toast="Background check approved for demo"')}</div>
      <div class="card"><h4>Training</h4><p class="subtle">Boundaries, elder communication, privacy, reporting.</p>${secondary("Complete Training", 'data-toast="Training marked complete"')}</div>
      ${primary("Submit Application", 'data-toast="Application submitted for review" data-go="companion-dashboard"')}
    </div>
  `;
}

function screenCompanionDashboard() {
  return `
    ${statusBar()}
    <div class="row between" style="margin-bottom:16px;">
      <div><h2 style="margin:0;">Hi, Sophia</h2><p class="subtle" style="margin:4px 0 0;">Two visits are waiting for confirmation.</p></div>
      <span class="status-pill">Verified</span>
    </div>
    <div class="card soft-card stack">
      <h4>Visit Request</h4>
      <div class="row"><img class="avatar" src="${ASSETS.sophia}" alt="Sophia Martinez" /><div><strong>Eleanor Thompson</strong><p class="tiny">Sunrise of Walnut Creek - ${state.date}, ${state.time}</p></div></div>
      <p class="subtle">Purpose: ${state.purpose}. Notes: ask about her garden and speak slowly.</p>
      <div class="split">
        ${secondary("Decline", 'data-modal="decline"')}
        ${primary("Accept Visit", 'data-toast="Visit accepted; family notified" data-go="checkin"')}
      </div>
    </div>
    <div class="quick-grid">
      <button class="quick" data-go="checkin"><span class="quick-icon">View</span><span>View Visit</span></button>
      <button class="quick" data-modal="availability"><span class="quick-icon">Cal</span><span>Availability</span></button>
      <button class="quick" data-modal="earnings"><span class="quick-icon">Pay</span><span>Earnings</span></button>
      <button class="quick" data-go="submit-report"><span class="quick-icon">Rpt</span><span>Reports</span></button>
    </div>
  `;
}

function screenCheckIn() {
  return `
    ${statusBar()}
    ${topbar("Check In", "companion-dashboard")}
    <div class="card soft-card stack">
      <h4>Sunrise of Walnut Creek</h4>
      <p class="subtle">Arrive at reception, follow visitor rules, then confirm your visit with QR or GPS.</p>
      <div class="summary-row"><span>Resident</span><strong>Eleanor Thompson</strong></div>
      <div class="summary-row"><span>Visit</span><strong>${state.duration} min - ${state.purpose}</strong></div>
    </div>
    <div class="stack" style="margin-top:18px;">
      ${primary("Scan QR Code", 'data-toast="QR code scanned successfully" data-go="in-visit"')}
      ${secondary("Use GPS Check-In", 'data-toast="Location verified" data-go="in-visit"')}
      ${secondary("Manual Check-In", 'data-modal="manual-checkin"')}
      ${secondary("View Resident Notes", 'data-modal="resident-notes"')}
    </div>
  `;
}

function screenInVisit() {
  return `
    ${statusBar()}
    ${topbar("In Visit", "checkin")}
    <div class="card soft-card center">
      <p class="tiny">Visit timer</p>
      <h1 style="font-size:48px; margin: 8px 0;">${state.timerStarted ? "12:04" : "00:00"}</h1>
      <p class="subtle">${state.timerStarted ? "Visit in progress" : "Ready to begin"}</p>
      ${primary(state.timerStarted ? "Timer Running" : "Start Visit Timer", 'data-toggle="timerStarted" data-toast="Visit timer started"')}
    </div>
    <div class="card" style="margin-top:14px;">
      <h4>Conversation Prompts</h4>
      <div class="chip-row"><span class="chip active">Ask about her garden</span><span class="chip">Play soft jazz</span><span class="chip">Look at family photos</span></div>
      <button class="ghost" data-modal="prompts">View all prompts</button>
    </div>
    <div class="stack" style="margin-top:16px;">
      ${secondary("Add Mid-Visit Note", 'data-modal="mid-note"')}
      ${secondary("Safety / Concern", 'data-modal="incident"')}
      ${primary("End Visit", 'data-modal="end-visit"')}
    </div>
  `;
}

function screenSubmitReport() {
  return `
    ${statusBar()}
    ${topbar("Submit Report", "in-visit")}
    <div class="stack">
      <div>
        <h4 class="section-title">Observed Mood</h4>
        <div class="chip-row">${["Very Happy", "Happy", "Neutral", "Tired", "Sad / Concerned"].map((mood) => `<button class="chip ${state.selectedMood === mood ? "active" : ""}" data-mood="${mood}">${mood}</button>`).join("")}</div>
      </div>
      <div>
        <h4 class="section-title">Activities Completed</h4>
        <div class="chip-row"><span class="chip active">Conversation</span><span class="chip active">Music</span><span class="chip">Reading</span><span class="chip active">Family photos</span><span class="chip">Walk</span></div>
      </div>
      <div class="field"><label>Visit Summary</label><textarea>Eleanor was cheerful today. We talked about her garden and listened to soft jazz. She seemed relaxed and engaged.</textarea></div>
      <label class="checkline"><input type="checkbox" ${state.mediaConsent ? "checked" : ""} /> Attach photo if consented</label>
      <div class="split">
        ${secondary("Upload Photo", state.mediaConsent ? 'data-toast="Photo attached"' : 'data-toast="Media consent is off"')}
        ${secondary("Upload Video", state.mediaConsent ? 'data-toast="Video attached"' : 'data-toast="Media consent is off"')}
      </div>
      ${primary("Submit Report", 'data-toast="Report submitted; family notified" data-go="companion-dashboard"')}
    </div>
  `;
}

function screenPlans() {
  return `
    ${statusBar()}
    ${topbar("Visit Plans", "dashboard")}
    <p class="subtle center">Plans are useful after the core booking and report loop is working.</p>
    <div class="stack" style="margin-top:16px;">
      ${planCard("Pay Per Visit", "Flexible individual bookings.", "Continue booking", "find")}
      ${planCard("Essential Visits", "4 short visits per month.", "Choose Essential", "payment")}
      ${planCard("Weekly Wellness", "8 visits per month with report history.", "Choose Weekly", "payment")}
      ${planCard("Daily Comfort", "12-20 micro-visits per month.", "Choose Daily", "payment")}
      ${secondary("Compare Plans", 'data-modal="plans"')}
    </div>
  `;
}

function planCard(title, text, action, target) {
  return `<div class="card"><h4>${title}</h4><p class="subtle">${text}</p>${secondary(action, `data-go="${target}"`)}</div>`;
}

function screenComingSoon() {
  return `
    ${statusBar()}
    ${topbar("Future Roles", "dashboard")}
    <div class="stack">
      <div class="card soft-card">
        <h4>Resident Access</h4>
        <p class="subtle">Residents may later view upcoming visits, companion photos, reminders, and simple preferences.</p>
        ${secondary("Preview Resident Dashboard", 'data-modal="resident"')}
      </div>
      <div class="card soft-card">
        <h4>Facility Staff Portal</h4>
        <p class="subtle">Facilities may later coordinate visit timing, see visitor logs, and respond to family feedback.</p>
        ${secondary("Preview Facility Portal", 'data-modal="facility"')}
      </div>
    </div>
  `;
}

function renderPhone() {
  const content = {
    welcome: screenWelcome,
    create: screenCreate,
    login: screenLogin,
    "loved-one": screenLovedOne,
    dashboard: screenDashboard,
    find: screenFind,
    profile: screenProfile,
    book: screenBook,
    payment: screenPayment,
    confirmation: screenConfirmation,
    "visit-details": screenVisitDetails,
    report: screenReport,
    "companion-apply": screenCompanionApply,
    "companion-dashboard": screenCompanionDashboard,
    checkin: screenCheckIn,
    "in-visit": screenInVisit,
    "submit-report": screenSubmitReport,
    plans: screenPlans,
    "coming-soon": screenComingSoon,
  }[state.screen];
  return content ? content() : screenWelcome();
}

function renderInspector(screen) {
  return `
    <aside class="inspector">
      <span class="status-pill">${screen.type}</span>
      <h3 style="margin-top:12px;">${screen.title}</h3>
      <p>${screen.purpose}</p>
      <div class="inspector-section">
        <strong>Primary controls</strong>
        <ul>${screen.actions.map((action) => `<li>${action}</li>`).join("")}</ul>
      </div>
      <div class="inspector-section">
        <strong>Design notes</strong>
        <ul>${screen.notes.map((note) => `<li>${note}</li>`).join("")}</ul>
      </div>
      <div class="inspector-section">
        <strong>MVP rule</strong>
        <p>Keep the design trust-first, elder-specific, and privacy-aware. If a feature is future-facing, show a clear coming-soon state instead of a dead button.</p>
      </div>
    </aside>
  `;
}

function renderBoard() {
  return `
    <section class="screen-board">
      <h2>All Designed Screens</h2>
      <div class="board-grid">
        ${screens.map((screen, index) => `
          <button class="mini-screen" data-go="${screen.id}" style="text-align:left;">
            <strong>${index + 1}. ${screen.title}</strong>
            <div class="mini-block ${screen.id === "welcome" ? "image-fill" : ""}"></div>
            <div class="mini-block"></div>
            <div class="mini-block primary-fill"></div>
            <span class="tiny">${screen.type}</span>
          </button>
        `).join("")}
      </div>
    </section>
  `;
}

function render() {
  const screen = currentScreen();
  app.innerHTML = `
    <main class="shell">
      <aside class="rail">
        <div class="brand-row">
          <div class="brand-mark">IDA</div>
          <div class="brand-copy"><strong>IDAConnect</strong><span>Screen design prototype</span></div>
        </div>
        <h1>Mobile MVP Screens</h1>
        <p>Click through each screen. The phone preview uses the existing prototype style and adds the missing MVP surfaces.</p>
        <nav class="screen-list">
          ${screens.map((screen, index) => `
            <button class="screen-tab ${state.screen === screen.id ? "active" : ""}" data-go="${screen.id}">
              <span>${index + 1}. ${screen.title}</span>
              <small>${screen.type}</small>
            </button>
          `).join("")}
        </nav>
      </aside>
      <section class="stage">
        <div class="stage-header">
          <div>
            <h2>${screen.title}</h2>
            <p>${screen.purpose}</p>
          </div>
          <div class="mode-actions">
            ${secondary("Start Family Flow", 'data-role="family" data-go="welcome"')}
            ${secondary("Start Companion Flow", 'data-role="companion" data-go="welcome"')}
          </div>
        </div>
        <div class="phone-wrap">
          <div class="phone"><div class="phone-scroll">${renderPhone()}</div></div>
        </div>
      </section>
      ${renderInspector(screen)}
      ${renderBoard()}
    </main>
    <div id="toast-root"></div>
    <div id="modal-root"></div>
  `;
}

function showToast(message) {
  if (!message) return;
  const root = document.querySelector("#toast-root");
  root.innerHTML = `<div class="toast">${message}</div>`;
  window.setTimeout(() => {
    if (root) root.innerHTML = "";
  }, 1800);
}

function modalContent(type) {
  const copy = {
    resident: ["Resident access", "Future versions can show upcoming visits, companion photos, reminders, and simple preferences so residents can prepare with dignity."],
    facility: ["Facility staff portal", "Future versions can help facility teams coordinate visit timing, respond to feedback, and manage visitor logs."],
    terms: ["Terms of Service", "IDAConnect is a non-medical companionship service. Visits are social in nature and do not include clinical care, medication, or activities of daily living."],
    privacy: ["Privacy Policy", "The prototype reflects consent-aware handling of profile information, visit reports, optional media, and communication history."],
    reset: ["Reset password", "Enter your email and we will send reset instructions. This prototype simulates the reset flow."],
    notifications: ["Notifications", "Sophia confirmed the visit. Your latest visit report is ready. Facility responses are planned for a future version."],
    filters: ["Filters", "Filter by availability, language, student background, dementia-friendly training, hospital experience, repeat visits, rating, and price."],
    verification: ["Verification completed", "Sophia is ID verified, background checked, training completed, and interview approved."],
    "profile-menu": ["Profile actions", "Share Profile, Report Profile, View Verification, Save Companion."],
    "message-limit": ["Messaging after booking", "To protect privacy and reduce spam, companion messaging can be limited until a visit is booked."],
    payment: ["Add payment method", "Card number, expiration date, CVV, and billing ZIP fields would appear here."],
    support: ["IDAConnect Support", "Support can help with scheduling, cancellation, payment, or safety questions."],
    cancel: ["Cancel visit?", "If confirmed, the visit status changes to Canceled and the family receives a confirmation."],
    rating: ["Rate this visit", "Suggested categories: warmth, punctuality, communication, report quality, and overall satisfaction."],
    share: ["Share report", "Prototype options: copy link, email report, or download PDF."],
    photo: ["Visit photo", "Photos and videos appear only when media consent is enabled for the loved one."],
    concern: ["Raise a concern", "Categories include visit too short, resident seemed upset, companion issue, facility scheduling issue, media concern, or other."],
    decline: ["Decline visit", "Ask for a reason: not available, too far, schedule conflict, or other."],
    availability: ["Set availability", "Companions can set weekly templates and one-off available times."],
    earnings: ["Earnings", "Show completed visits, expected payout, tips, and payout status."],
    "manual-checkin": ["Manual check-in", "Manual check-ins are a fallback and should be marked for admin review."],
    "resident-notes": ["Resident notes", "Please ask Eleanor about her garden. She enjoys old jazz music. Speak slowly and clearly."],
    prompts: ["Conversation prompts", "Ask about favorite music, family memories, gardening, books, or favorite travel stories."],
    "mid-note": ["Add note", "A quick private note helps the companion write a better post-visit report."],
    incident: ["Safety concern", "Categories: resident unavailable, resident declined visit, facility access issue, resident distressed, urgent concern, or other."],
    "end-visit": ["End visit?", "After ending the visit, Sophia should complete the structured report before returning to the dashboard."],
    plans: ["Compare plans", "Pay per visit, Essential Visits, Weekly Wellness, and Daily Comfort should be tested after the core MVP loop works."],
    "loved-one-select": ["Select loved one", "Eleanor Thompson is preselected for this prototype. Future accounts may manage multiple loved ones."],
  }[type] || ["Prototype action", "This interaction is represented as a front-end state for demo purposes."];
  return copy;
}

function showModal(type) {
  const [title, text] = modalContent(type);
  const root = document.querySelector("#modal-root");
  root.innerHTML = `
    <div class="modal-backdrop">
      <div class="modal" role="dialog" aria-modal="true">
        <h3>${title}</h3>
        <p>${text}</p>
        <button class="primary" data-close-modal>Close</button>
      </div>
    </div>
  `;
}

document.addEventListener("click", (event) => {
  const target = event.target.closest("button, [data-go], [data-toggle], [data-date], [data-duration], [data-purpose], [data-filter], [data-mood], [data-modal], [data-close-modal]");
  if (!target) return;

  const role = target.dataset.role;
  if (role) state.role = role;

  const toggle = target.dataset.toggle;
  if (toggle) state[toggle] = !state[toggle];

  const date = target.dataset.date;
  if (date) state.date = date;

  const duration = target.dataset.duration;
  if (duration) state.duration = Number(duration);

  const purpose = target.dataset.purpose;
  if (purpose) state.purpose = purpose;

  const filter = target.dataset.filter;
  if (filter) state.filter = filter;

  const mood = target.dataset.mood;
  if (mood) state.selectedMood = mood;

  const modal = target.dataset.modal;
  if (modal) {
    showModal(modal);
    showToast(target.dataset.toast);
    return;
  }

  if (target.dataset.closeModal !== undefined) {
    document.querySelector("#modal-root").innerHTML = "";
    return;
  }

  const go = target.dataset.go;
  if (go) {
    state.screen = go;
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    render();
  }

  showToast(target.dataset.toast);
});

render();
