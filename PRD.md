# Product Requirements Document (PRD): EstateMind Nigeria

## 1. Introduction
**EstateMind** is an AI-first real estate marketplace designed specifically for the Nigerian market. It leverages "Agentic AI" to act as a personal digital broker for users, solving key local challenges like trust deficits, fake listings, and search fatigue.

### 1.1 Goals
*   **Primary Goal:** To become the most trusted and efficient real estate platform in Nigeria.
*   **Secondary Goal:** To reduce the time-to-find for property seekers by 50% via AI automation.
*   **Metric for Success:** 10,000 verified listings and 5,000 active monthly users within 6 months.

---

## 2. User Personas

### 2.1 The Seeker (Chinedu)
*   **Profile:** Young professional in Lagos, tech-savvy, busy.
*   **Pain Point:** Hates calling 20 agents who all say "inspection fee required."
*   **Goal:** Find a serviced apartment in Lekki without hassle.

### 2.2 The Landlord/Agent (Alhaji Musa)
*   **Profile:** Property owner or established agent.
*   **Pain Point:** Dealing with "unserious" clients and repetitive questions.
*   **Goal:** Qualified leads and faster turnaround.

---

## 3. Features & Functional Requirements

### 3.1 AI Agent ("The Digital Broker")
*   **Natural Language Search:** Users can type "3-bedroom in Ikeja GRA under 5m" and get results.
*   **Conversational Filtering:** The AI asks follow-up questions (e.g., "Do you need a BQ?", "Is 24/7 power mandatory?").
*   **Scheduling:** AI interfaces with the agent's calendar to book inspections.
*   **Negotiation Assistant:** AI provides price history for the area to help users make fair offers.

### 3.2 "TrueVerify" Trust System
*   **Video Walkthroughs:** Mandatory timestamped videos for "Verified" badge.
*   **Agent KYC:** Integration with NIN/BVN verification (future phase).
*   **Report & Ban:** Users can report "ghost listings"; 3 strikes = agent ban.

### 3.3 Listings Management
*   **Categories:** Residential (Rent/Sale), Commercial, Short-let.
*   **Attributes:**
    *   Location (State, LGA, Area, Street).
    *   Price (Annual Rent, Service Charge, Caution Fee, Agency Fee, Legal Fee).
    *   Amenities (Generator, Inverter, Water Treatment, Security).
*   **WhatsApp Integration:** Auto-sync listings from WhatsApp Business API (future phase).

### 3.4 User Dashboard
*   **Favorites:** Saved properties.
*   **Search History:** Recent AI chats.
*   **Alerts:** Notifications for new matches.

---

## 4. Technical Architecture

### 4.1 Tech Stack
*   **Framework:** Next.js 14+ (App Router).
*   **Language:** TypeScript.
*   **Styling:** Tailwind CSS + Shadcn UI.
*   **Database:** Supabase (PostgreSQL).
*   **Auth:** Clerk or Supabase Auth.
*   **AI:** OpenAI API (GPT-4o) via Vercel AI SDK.
*   **Map:** Google Maps Platform / Mapbox.

### 4.2 Data Model (Simplified)
*   `users`: id, name, email, role (seeker/agent).
*   `properties`: id, agent_id, title, description, price, location, images[], video_url, is_verified.
*   `chats`: id, user_id, messages[].
*   `bookings`: id, property_id, user_id, date, status.

---

## 5. Design Guidelines (Nigeria Context)
*   **Mobile First:** 90% of Nigerian traffic is mobile.
*   **Data Saver:** Optimized images for slower networks.
*   **Trust Signals:** Prominent use of "Verified" badges and green colors (safety).
*   **Local Terminology:** Use terms like "Self-con", "Duplex", "Tenement Rate".

---

## 6. Roadmap

### Phase 1: MVP (Weeks 1-3)
*   Project Setup & CI/CD.
*   Database Schema & Auth.
*   Basic Property CRUD (Create, Read, Update, Delete).
*   Public Listing Page.

### Phase 2: The Agent (Weeks 4-6)
*   Integrate Vercel AI SDK.
*   Build Chat Interface.
*   Implement RAG (Retrieval-Augmented Generation) for property search.

### Phase 3: Trust & Polish (Weeks 7-8)
*   Video upload support.
*   "Verified" badge logic.
*   UI Polish & Animations.
