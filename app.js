const spots = [
  {
    id: "night-market",
    name: "Night Market Wharf",
    category: "food",
    x: 18,
    y: 63,
    distance: "0.8 mi",
    vibe: "Street food, neon stalls, rooftop DJ set",
    rating: 4.8,
    buzz: 95,
    social: 142,
    stories: 18,
    threads: 26,
    alerts: ["Garage full after 9:20 PM", "Bike lane fastest right now"],
    eta: "12 min by scooter",
    price: "$$",
    tags: ["cheap", "group", "food"],
    openUntil: "1:00 AM",
    queue: "6 min",
    routeNote: "Canal Greenway is moving 22% faster than rideshare.",
    summary:
      "Best all-around anchor stop tonight. The crowd is high-energy without being packed, and the food rotation is changing every 40 minutes.",
    tip: "Start on the west edge for shorter lines, then climb to the roof for the late set.",
    storiesFeed: [
      "Skewer line is moving again and the synth duo just started upstairs.",
      "Crowd feels very mixed: dates, groups, and visitors all landing here first.",
    ],
    threadsFeed: [
      "Worth it before 10. After that the garage spillover becomes the whole experience.",
      "Best bite so far is the black lime shrimp roll. Thread has actual consensus for once.",
    ],
  },
  {
    id: "sunset-steps",
    name: "Sunset Steps",
    category: "outdoors",
    x: 30,
    y: 27,
    distance: "1.2 mi",
    vibe: "Open-air overlook with buskers and sunset photos",
    rating: 4.6,
    buzz: 74,
    social: 88,
    stories: 22,
    threads: 10,
    alerts: ["Wind picked up on the north side"],
    eta: "14 min by bike",
    price: "Free",
    tags: ["outdoors", "cheap"],
    openUntil: "Late",
    queue: "No wait",
    routeNote: "River trail is clear and safer than the avenue shortcut.",
    summary:
      "A social first stop if the group wants a view before committing to a venue. Strong story density, light spending, easy to join in.",
    tip: "Bring a layer. Best photo angle is the lower landing facing the bridge lights.",
    storiesFeed: [
      "Golden hour is almost over but the bridge reflections are still carrying.",
      "Half the crowd is just here deciding where to go next. Strong pregame energy.",
    ],
    threadsFeed: [
      "Still the best no-cost meetup point in Riverline if your group is indecisive.",
      "Someone should convince the city to add more seating here before summer.",
    ],
  },
  {
    id: "vinyl-room",
    name: "Vinyl Room",
    category: "music",
    x: 44,
    y: 49,
    distance: "0.5 mi",
    vibe: "Listening bar with deep cuts and tight pours",
    rating: 4.9,
    buzz: 87,
    social: 76,
    stories: 9,
    threads: 31,
    alerts: ["Inside wait is 18 min", "Patio still has room"],
    eta: "8 min on foot",
    price: "$$$",
    tags: ["music"],
    openUntil: "12:30 AM",
    queue: "18 min",
    routeNote: "Walking beats any vehicle because Neon Row is partially blocked.",
    summary:
      "Lower post volume than the market, but the thread sentiment is exceptional. People stay longer, and almost every review points to consistent curation.",
    tip: "Ask for the side-room set list; it changes every hour and isn't posted outside.",
    storiesFeed: [
      "Patio spill looks mellow. Inside is all red light and slow grooves tonight.",
      "Not chaotic, just packed with people who want to stay for a full side.",
    ],
    threadsFeed: [
      "This is the rare place where the hype thread is still underselling it.",
      "If you hate crowding, wait 25 minutes and take the patio instead of forcing it.",
    ],
  },
  {
    id: "lantern-yard",
    name: "Lantern Yard",
    category: "food",
    x: 63,
    y: 35,
    distance: "1.4 mi",
    vibe: "Courtyard bites, tiny wine bar, mostly locals",
    rating: 4.7,
    buzz: 81,
    social: 54,
    stories: 6,
    threads: 18,
    alerts: ["Back alley entrance is easier than front queue"],
    eta: "11 min by tram",
    price: "$$",
    tags: ["food", "group"],
    openUntil: "11:45 PM",
    queue: "12 min",
    routeNote: "Tram stop drops you behind the line. Use that entrance.",
    summary:
      "Good second stop when the group wants conversation, shared plates, and less pressure to perform for the camera.",
    tip: "Order the pepper jam flatbread early; it sells out before the late crowd arrives.",
    storiesFeed: [
      "Back patio string lights are doing a lot of work tonight.",
      "This is where people go when Night Market feels too obvious.",
    ],
    threadsFeed: [
      "Reliable move for mixed groups because nobody feels stuck with one kind of menu.",
      "Front door line is fake friction. Locals keep using the side path.",
    ],
  },
  {
    id: "signal-park",
    name: "Signal Park",
    category: "outdoors",
    x: 55,
    y: 74,
    distance: "1.0 mi",
    vibe: "Open lawn, food trucks, projection wall",
    rating: 4.5,
    buzz: 79,
    social: 119,
    stories: 28,
    threads: 11,
    alerts: ["Projection starts in 24 min", "South lawn getting crowded"],
    eta: "9 min by e-bike",
    price: "$",
    tags: ["outdoors", "cheap", "group"],
    openUntil: "11:00 PM",
    queue: "4 min",
    routeNote: "Take Harbor Loop. It avoids the event traffic at Canal Core.",
    summary:
      "Highest story velocity in the city right now. Great if the goal is serendipity, low commitment, and running into people you know.",
    tip: "Grab the east-side truck row before the film starts, then move toward the projection wall.",
    storiesFeed: [
      "Three separate birthday groups just collided and nobody seems mad about it.",
      "Projection test looks sharp. This will spike hard once it starts.",
    ],
    threadsFeed: [
      "Most forgiving spot if half your group flakes and new people join mid-plan.",
      "Parking thread says don't bother. Bike or walk in.",
    ],
  },
  {
    id: "afterglow-arcade",
    name: "Afterglow Arcade",
    category: "music",
    x: 77,
    y: 60,
    distance: "1.7 mi",
    vibe: "Arcade bar, dance floor, loud on purpose",
    rating: 4.4,
    buzz: 90,
    social: 131,
    stories: 16,
    threads: 23,
    alerts: ["Rideshare pickup delayed 11 min", "Cover jumps after 10 PM"],
    eta: "13 min by rideshare",
    price: "$$",
    tags: ["music", "group"],
    openUntil: "2:00 AM",
    queue: "10 min",
    routeNote: "Best late-night stop, but get in before cover increases.",
    summary:
      "If the group wants the plan to tilt chaotic later, this is the handoff point. High crowd density, high story volume, and a forgiving sense of shame.",
    tip: "Arcade tokens still beat the dance floor if you need a quieter lane to talk.",
    storiesFeed: [
      "Dance floor is warming up but the upstairs cabinets are still playable.",
      "Looks like everyone migrated here after the first wave of rooftop sets ended.",
    ],
    threadsFeed: [
      "A classic 'better after 11' place, but only if you already want noise.",
      "The pinball row is the real feature. The floor is just the bait.",
    ],
  },
];

const friends = [
  { name: "Maya", status: "At Signal Park", note: "posting stories every 4 min" },
  { name: "Dev", status: "Walking to Vinyl Room", note: "queue scouting" },
  { name: "Lena", status: "Near Night Market Wharf", note: "group of 5 nearby" },
  { name: "Omar", status: "Ghost mode", note: "available to join in 20 min" },
];

const modeCopy = {
  discover:
    "Balanced for the strongest combination of live buzz, strong reviews, and active local context.",
  move:
    "Biasing toward easy movement, low friction, and routes that keep the group from stalling out.",
  social:
    "Biasing toward story density, friend proximity, and active threads where plans are still forming.",
};

const state = {
  mode: "discover",
  filter: "all",
  tab: "stories",
  query: "",
  selectedSpotId: spots[0].id,
  activeLayers: new Set(["all", "stories", "threads", "alerts"]),
  ghostMode: false,
  itineraryVersion: 0,
};

const elements = {
  spotList: document.querySelector("#spotList"),
  mapMarkers: document.querySelector("#mapMarkers"),
  detailCard: document.querySelector("#detailCard"),
  feedPanel: document.querySelector("#feedPanel"),
  presenceRow: document.querySelector("#presenceRow"),
  storyStrip: document.querySelector("#storyStrip"),
  itinerarySteps: document.querySelector("#itinerarySteps"),
  itineraryCard: document.querySelector("#itineraryCard"),
  searchInput: document.querySelector("#searchInput"),
  buildPlanBtn: document.querySelector("#buildPlanBtn"),
  ghostToggle: document.querySelector("#ghostToggle"),
  filterRow: document.querySelector("#filterRow"),
  layerRow: document.querySelector("#layerRow"),
  socialTabs: document.querySelector("#socialTabs"),
  modeChips: document.querySelectorAll(".mode-chip"),
  railItems: document.querySelectorAll(".rail-item"),
};

const getQueueMinutes = (spot) => {
  const match = spot.queue.match(/\d+/);
  return match ? Number(match[0]) : 0;
};

const formatQueueBadge = (spot) => (spot.queue === "No wait" ? spot.queue : `${spot.queue} queue`);

const formatFriendList = (spot) => {
  const nearbyFriends = friends
    .filter((friend, index) => (spot.social + index * 7) % 2 === 0)
    .map((friend) => (state.ghostMode ? "Someone you know" : friend.name));

  if (!nearbyFriends.length) {
    return state.ghostMode ? "Local friends nearby" : "No close friends nearby";
  }

  return nearbyFriends.join(", ");
};

const getVisibleSpots = () => {
  const query = state.query.trim().toLowerCase();

  return spots.filter((spot) => {
    const matchesQuery =
      !query ||
      [spot.name, spot.vibe, spot.summary, ...spot.tags]
        .join(" ")
        .toLowerCase()
        .includes(query);

    const matchesFilter =
      state.filter === "all" ||
      spot.category === state.filter ||
      spot.tags.includes(state.filter);

    return matchesQuery && matchesFilter;
  });
};

const getSelectedSpot = () =>
  spots.find((spot) => spot.id === state.selectedSpotId) || getVisibleSpots()[0] || spots[0];

const scoreSpot = (spot) => {
  if (state.mode === "move") {
    return spot.buzz * 0.45 + (100 - getQueueMinutes(spot)) * 0.4 + spot.social * 0.15;
  }

  if (state.mode === "social") {
    return spot.social * 0.55 + spot.stories * 1.4 + spot.threads * 0.7 + spot.buzz * 0.2;
  }

  return spot.buzz * 0.55 + spot.rating * 10 + spot.threads * 0.45 + spot.stories * 0.6;
};

const renderStoryStrip = (visibleSpots) => {
  elements.storyStrip.innerHTML = "";

  if (!state.activeLayers.has("all") && !state.activeLayers.has("stories")) {
    return;
  }

  visibleSpots
    .slice()
    .sort((a, b) => b.stories - a.stories)
    .slice(0, 5)
    .forEach((spot) => {
      const pill = document.createElement("div");
      pill.className = "story-pill";
      pill.innerHTML = `
        <p class="spot-meta">${spot.stories} live stories</p>
        <strong>${spot.name}</strong>
        <span>${spot.vibe}</span>
      `;
      elements.storyStrip.appendChild(pill);
    });
};

const renderPresence = () => {
  elements.presenceRow.innerHTML = "";

  friends.forEach((friend, index) => {
    const pill = document.createElement("article");
    pill.className = "presence-pill";
    pill.innerHTML = `
      <p class="spot-meta">${state.ghostMode ? "Private presence" : `Friend ${index + 1}`}</p>
      <strong>${state.ghostMode ? "Hidden friend" : friend.name}</strong>
      <span>${state.ghostMode ? "Location blurred within 0.6 mi" : friend.status}</span>
      <p class="support-copy">${state.ghostMode ? "Shared only with approved groups." : friend.note}</p>
    `;
    elements.presenceRow.appendChild(pill);
  });
};

const renderSpotList = (visibleSpots) => {
  elements.spotList.innerHTML = "";

  if (!visibleSpots.length) {
    const emptyState = document.createElement("article");
    emptyState.className = "spot-card";
    emptyState.innerHTML = `
      <h4>No exact matches</h4>
      <p>Try a broader vibe or remove one of the filters.</p>
    `;
    elements.spotList.appendChild(emptyState);
    return;
  }

  visibleSpots
    .slice()
    .sort((a, b) => scoreSpot(b) - scoreSpot(a))
    .forEach((spot) => {
      const card = document.createElement("article");
      card.className = `spot-card${spot.id === state.selectedSpotId ? " active" : ""}`;
      card.tabIndex = 0;
      card.dataset.id = spot.id;
      card.innerHTML = `
        <div class="spot-head">
          <div>
            <p class="spot-meta">${spot.category} • ${spot.distance}</p>
            <h4>${spot.name}</h4>
          </div>
          <p class="spot-meta">Open until ${spot.openUntil}</p>
        </div>
        <p>${spot.vibe}</p>
        <div class="badge-row">
          <span class="metric-badge hot">Buzz ${spot.buzz}</span>
          <span class="metric-badge social">${spot.stories} stories</span>
          <span class="metric-badge social">${spot.threads} threads</span>
          <span class="metric-badge warn">${formatQueueBadge(spot)}</span>
        </div>
      `;
      card.addEventListener("click", () => {
        state.selectedSpotId = spot.id;
        render();
      });
      card.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          state.selectedSpotId = spot.id;
          render();
        }
      });
      elements.spotList.appendChild(card);
    });
};

const renderMarkers = (visibleSpots) => {
  elements.mapMarkers.innerHTML = "";

  visibleSpots.forEach((spot) => {
    const enabledLayers = ["stories", "threads", "alerts"].filter((layer) =>
      state.activeLayers.has(layer)
    );
    const hiddenByLayer =
      !state.activeLayers.has("all") &&
      !enabledLayers.some((layer) => {
        if (layer === "stories") {
          return spot.stories > 0;
        }

        if (layer === "threads") {
          return spot.threads > 0;
        }

        return spot.alerts.length > 0;
      });

    if (hiddenByLayer) {
      return;
    }

    const marker = document.createElement("button");
    marker.className = `map-marker ${spot.category}${spot.id === state.selectedSpotId ? " active" : ""}`;
    marker.style.left = `${spot.x}%`;
    marker.style.top = `${spot.y}%`;
    marker.innerHTML = `
      <span class="pin" aria-hidden="true"></span>
      <span class="marker-label">${spot.name}</span>
    `;
    marker.addEventListener("click", () => {
      state.selectedSpotId = spot.id;
      render();
    });
    elements.mapMarkers.appendChild(marker);
  });
};

const renderDetail = (spot) => {
  const localFriends = formatFriendList(spot);
  const topAlert = spot.alerts[0] || "No friction reports right now";

  elements.detailCard.innerHTML = `
    <p class="section-label">${spot.category} • ${spot.distance} • ${spot.price}</p>
    <div class="detail-head">
      <div>
        <h3>${spot.name}</h3>
        <p class="support-copy">${spot.summary}</p>
      </div>
      <p class="detail-meta">Mode: ${state.mode}</p>
    </div>

    <div class="detail-grid">
      <div class="detail-stat">
        <p class="spot-meta">Buzz</p>
        <strong>${spot.buzz}</strong>
        <span>${formatQueueBadge(spot)}</span>
      </div>
      <div class="detail-stat">
        <p class="spot-meta">Social</p>
        <strong>${spot.social}</strong>
        <span>${spot.stories} stories live</span>
      </div>
      <div class="detail-stat">
        <p class="spot-meta">Route</p>
        <strong>${spot.eta}</strong>
        <span>${spot.rating.toFixed(1)} avg rating</span>
      </div>
    </div>

    <div class="detail-chip-row">
      <span class="detail-chip">${spot.tip}</span>
      <span class="detail-chip">${localFriends}</span>
      <span class="detail-chip">${topAlert}</span>
    </div>

    <div class="detail-route">
      <p class="spot-meta">Why this works in ${state.mode} mode</p>
      <p>${spot.routeNote}</p>
      <p class="support-copy">${modeCopy[state.mode]}</p>
    </div>
  `;
};

const renderEmptyDetail = () => {
  elements.detailCard.innerHTML = `
    <p class="section-label">No matching area signal</p>
    <h3>Nothing fits the current search.</h3>
    <p class="support-copy">
      Broaden the query or loosen the filters to pull local activity back onto the map.
    </p>
  `;
};

const renderFeed = (spot) => {
  const feedMap = {
    stories: spot.storiesFeed.map((entry, index) => ({
      title: state.ghostMode ? `Story ${index + 1}` : `${spot.name} story`,
      meta: `${spot.stories - index} min ago • ephemeral clip`,
      body: entry,
    })),
    threads: spot.threadsFeed.map((entry, index) => ({
      title: `${spot.name} thread ${index + 1}`,
      meta: `${spot.threads + index} locals active`,
      body: entry,
    })),
    alerts: spot.alerts.map((entry, index) => ({
      title: `Live friction ${index + 1}`,
      meta: `${spot.eta} • crowd-sourced`,
      body: entry,
    })),
  };

  const items = feedMap[state.tab];

  elements.feedPanel.innerHTML = "";

  if (!items.length) {
    const card = document.createElement("article");
    card.className = "feed-card";
    card.innerHTML = `
      <h4>No ${state.tab} right now</h4>
      <p>Switch spots or wait for the area to heat up.</p>
    `;
    elements.feedPanel.appendChild(card);
    return;
  }

  items.forEach((item) => {
    const card = document.createElement("article");
    card.className = "feed-card";
    card.innerHTML = `
      <div class="feed-head">
        <div>
          <p class="feed-meta">${item.meta}</p>
          <h4>${item.title}</h4>
        </div>
      </div>
      <div class="feed-copy">
        <p>${item.body}</p>
      </div>
    `;
    elements.feedPanel.appendChild(card);
  });
};

const renderEmptyFeed = () => {
  elements.feedPanel.innerHTML = `
    <article class="feed-card">
      <h4>No social feed yet</h4>
      <p>Choose a visible spot to inspect stories, threads, or live alerts.</p>
    </article>
  `;
};

const buildItinerary = (visibleSpots) => {
  const ranked = visibleSpots.slice().sort((a, b) => scoreSpot(b) - scoreSpot(a));
  const seeds = [
    ranked[0],
    ranked[Math.min(1 + (state.itineraryVersion % Math.max(ranked.length - 1, 1)), ranked.length - 1)],
    ranked[ranked.length - 1],
  ]
    .filter(Boolean)
    .filter((spot, index, collection) => collection.findIndex((entry) => entry.id === spot.id) === index);

  elements.itinerarySteps.innerHTML = "";

  if (!seeds.length) {
    elements.itineraryCard.querySelector(".itinerary-title").textContent =
      "No route yet. Clear filters to build a plan.";
    return;
  }

  const title =
    state.mode === "move"
      ? "Fastest social circuit with low friction."
      : state.mode === "social"
        ? "High-social route optimized for people and posts."
        : "Balanced night-out route across hype, quality, and movement.";

  elements.itineraryCard.querySelector(".itinerary-title").textContent = title;

  seeds.forEach((spot, index) => {
    const step = document.createElement("article");
    step.className = "itinerary-step";
    step.innerHTML = `
      <div class="itinerary-step-head">
        <div>
          <p class="itinerary-meta">Stop ${index + 1}</p>
          <h4>${spot.name}</h4>
        </div>
        <p class="itinerary-meta">${spot.eta}</p>
      </div>
      <p>${spot.vibe}</p>
      <p class="support-copy">${spot.routeNote}</p>
    `;
    step.addEventListener("click", () => {
      state.selectedSpotId = spot.id;
      render();
    });
    elements.itinerarySteps.appendChild(step);
  });
};

const syncControls = () => {
  document.querySelectorAll(".filter-chip").forEach((chip) => {
    chip.classList.toggle("active", chip.dataset.filter === state.filter);
  });

  document.querySelectorAll(".mode-chip").forEach((chip) => {
    chip.classList.toggle("active", chip.dataset.mode === state.mode);
  });

  document.querySelectorAll(".social-tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.tab === state.tab);
  });

  document.querySelectorAll(".layer-chip").forEach((chip) => {
    const isAll = chip.dataset.layer === "all";
    const active = isAll ? state.activeLayers.has("all") : state.activeLayers.has(chip.dataset.layer);
    chip.classList.toggle("active", active);
  });

  elements.ghostToggle.classList.toggle("active", state.ghostMode);
  elements.ghostToggle.textContent = state.ghostMode ? "Ghost mode on" : "Ghost mode off";
};

const ensureSelectedSpotVisible = (visibleSpots) => {
  if (!visibleSpots.some((spot) => spot.id === state.selectedSpotId)) {
    state.selectedSpotId = visibleSpots[0]?.id || spots[0].id;
  }
};

const render = () => {
  const visibleSpots = getVisibleSpots();
  ensureSelectedSpotVisible(visibleSpots);
  const selectedSpot = getSelectedSpot();

  syncControls();
  buildItinerary(visibleSpots);
  renderSpotList(visibleSpots);
  renderMarkers(visibleSpots);
  renderStoryStrip(visibleSpots);
  renderPresence();

  if (!visibleSpots.length) {
    renderEmptyDetail();
    renderEmptyFeed();
    return;
  }

  renderDetail(selectedSpot);
  renderFeed(selectedSpot);
};

elements.filterRow.addEventListener("click", (event) => {
  const button = event.target.closest("[data-filter]");
  if (!button) {
    return;
  }

  state.filter = button.dataset.filter;
  render();
});

elements.layerRow.addEventListener("click", (event) => {
  const button = event.target.closest("[data-layer]");
  if (!button) {
    return;
  }

  const layer = button.dataset.layer;

  if (layer === "all") {
    const enableAll = !state.activeLayers.has("all");
    state.activeLayers = enableAll ? new Set(["all", "stories", "threads", "alerts"]) : new Set();
  } else {
    if (state.activeLayers.has(layer)) {
      state.activeLayers.delete(layer);
    } else {
      state.activeLayers.add(layer);
    }

    const everyIndividualLayerEnabled = ["stories", "threads", "alerts"].every((entry) =>
      state.activeLayers.has(entry)
    );

    if (everyIndividualLayerEnabled) {
      state.activeLayers.add("all");
    } else {
      state.activeLayers.delete("all");
    }
  }

  render();
});

elements.socialTabs.addEventListener("click", (event) => {
  const button = event.target.closest("[data-tab]");
  if (!button) {
    return;
  }

  state.tab = button.dataset.tab;
  render();
});

elements.modeChips.forEach((chip) => {
  chip.addEventListener("click", () => {
    state.mode = chip.dataset.mode;
    render();
  });
});

elements.searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  render();
});

elements.buildPlanBtn.addEventListener("click", () => {
  state.itineraryVersion += 1;
  render();
});

elements.ghostToggle.addEventListener("click", () => {
  state.ghostMode = !state.ghostMode;
  render();
});

elements.railItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    elements.railItems.forEach((button, buttonIndex) => {
      button.classList.toggle("active", buttonIndex === index);
    });
    window.scrollTo({
      top: [0, document.body.scrollHeight * 0.23, document.body.scrollHeight * 0.58][index],
      behavior: "smooth",
    });
  });
});

render();
