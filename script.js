// Complete Project & Creative Case Studies Data (from Maria Cahya Jayanti's CV & Portfolio PDF)
const projectCaseStudies = {
  tracking: {
    badge: "1ST PROJECT • FINAL YEAR PROJECT (2026)",
    titleMain: "Document Tracking &",
    titleItalic: "Submission System",
    subtitle: "Web-Based Academic Correspondence Management Application",
    year: "2026",
    role: "Full-Stack Web Developer & UI/UX Designer",
    methodology: "Figma UI/UX → Laravel Blade → MySQL RBAC",
    keyMetric: "3 User Roles",
    keyMetricSub: "Customized Access & Real-Time Letter Tracking",
    image: "assets/project_tracking_ui.png",
    gallery: [
      { src: "assets/tracking_screen_2.png", caption: "Welcome & Login Portal (UNESA Academic System)" },
      { src: "assets/tracking_screen_1.png", caption: "Dashboard & Password Management View" },
      { src: "assets/tracking_screen_3.png", caption: "Real-Time Letter Approval & History Modal" }
    ],
    tags: ["Laravel", "PHP", "MySQL", "Laravel Blade", "Figma", "GitHub", "3 User Roles"],
    linkUrl: "https://github.com/22091397017MariaCahyaJayanti/Sistem-Tracking-Surat.git",
    linkLabel: "DOCUMENT TRACKING & SUBMISSION SYSTEM ON GITHUB ↗",
    why: "The Sistem Tracking dan Pengajuan Surat project was built to digitize and support the submission, management, and real-time status monitoring of official letters in an academic environment, replacing slow manual administrative tracking.",
    problem: "Manual letter requests and tracking lacked status transparency for applicants and required coordinated workflows across 3 distinct user roles with different access rights.",
    contribution: "Designed the application workflow and UI in Figma and developed the full-stack web application using Laravel, PHP, and MySQL with a 3-role access structure.",
    process: "Designed user flows and interfaces in Figma, implemented responsive and structured views using Laravel Blade, configured relational MySQL tables, and engineered role-based access control across 3 user roles.",
    processSteps: [
      "Designed complete application workflows and responsive UI mockups in Figma.",
      "Implemented structured frontend views using Laravel Blade templates.",
      "Engineered relational MySQL database tables for letter submissions, approvals, and history logs.",
      "Built 3 distinct user roles with customized access permissions and real-time status tracking."
    ],
    result: "The web application streamlined academic letter administration, simplified information access, and provided transparent real-time status tracking for all users.",
    nextId: "reimbursement",
    nextName: "Reimbursement System"
  },
  reimbursement: {
    badge: "2ND PROJECT • INTERN PROJECT AT PT. INTERMULTICON KRISTAL SENTRA (2025)",
    titleMain: "Employee",
    titleItalic: "Reimbursement System",
    subtitle: "Web-Based Internal Operational Expense Claims & Multi-Stage Approval System",
    year: "Sep 2024 – Mar 2025",
    role: "Full-Stack Web Developer (IT Support Intern)",
    methodology: "Relational DB Design → Role-Based Auth → Digital Claim Module",
    keyMetric: "3 Role Interfaces",
    keyMetricSub: "Employee, Approver & Finance Real-Time Workflow",
    image: "assets/project_reimbursement_ui.png",
    gallery: [
      { src: "assets/reimbursement_screen_2.jpg", caption: "PT. Intermulticon Kristal Sentra — Login Portal" },
      { src: "assets/reimbursement_screen_1.jpg", caption: "Employee Dashboard & Digital Reimbursement Form" },
      { src: "assets/reimbursement_screen_3.jpg", caption: "Multi-Stage Approval & Real-Time Claim Status Tracking" }
    ],
    tags: ["PHP", "Bootstrap", "MySQL", "JavaScript", "Role-Based Access Control", "Full-Stack Web"],
    linkUrl: "https://github.com/22091397017MariaCahyaJayanti",
    linkLabel: "REIMBURSEMENT SYSTEM ON GITHUB ↗",
    why: "Developed as an internship final project at PT. Intermulticon Kristal Sentra to digitize internal employee operational expense claims, receipt verification, and multi-stage reimbursement approvals.",
    problem: "Manual paper-based reimbursement claims slowed down verification between applicants, approvers, and the finance team, while lacking real-time status and centralized monthly reporting.",
    contribution: "Acted as Full-Stack Web Developer designing the relational database, role-based access control, and digital claim submission module.",
    process: "Engineered user authentication and role-based interfaces (Employee, Approver, Finance), built claim submission forms with digital receipt upload and real-time tracking (Pending, Approved, Rejected).",
    processSteps: [
      "Designed the relational MySQL database schema for employee expense claims, digital receipts, and approval stages.",
      "Engineered user authentication and role-based interfaces across 3 distinct roles: Employee, Approver, and Finance.",
      "Built digital claim submission forms using PHP, Bootstrap, and JavaScript with receipt file upload validation.",
      "Implemented real-time status tracking (Pending, Approved, Rejected) and centralized reporting for the finance team."
    ],
    result: "Digitized end-to-end employee reimbursement workflows at company, accelerating claim validation.",
    nextId: "imdb",
    nextName: "IMDb Sentiment Analysis"
  },
  imdb: {
    badge: "3RD PROJECT • CODELESS DATA SCIENCE (2025)",
    titleMain: "IMDb Movie Review",
    titleItalic: "Sentiment Analysis",
    subtitle: "End-to-End Machine Learning Sentiment Classification (92% Accuracy)",
    year: "2025",
    role: "Data Analyst & Machine Learning Workflow Builder",
    methodology: "CRISP-DM • Excel Data Cleaning • KNIME ML",
    keyMetric: "92% Accuracy",
    keyMetricSub: "Achieved by XGBoost on 2,000 IMDb Reviews",
    image: "assets/project_imdb_ui.png",
    gallery: [],
    tags: ["Microsoft Excel", "KNIME Analytics Platform", "CRISP-DM", "Data Cleaning", "Text Preprocessing", "Bag of Words", "Term Frequency", "Document Vector", "Decision Tree", "XGBoost"],
    linkUrl: "https://drive.google.com/drive/folders/1TPhvkohSFogRRmInskkmDbEztH967kYa?usp=drive_link",
    linkLabel: "OPEN PROJECT DOCUMENTATION ON GOOGLE DRIVE ↗",
    why: "The IMDb Sentiment Analysis project was created as a Codeless Data Science Final Project to process and classify a dataset of 2,000 IMDb movie reviews into positive and negative sentiments using an end-to-end machine learning workflow.",
    problem: "Unstructured raw text across 2,000 movie reviews required rigorous quality inspection, data cleaning, and feature extraction to ensure accurate sentiment classification across multiple models.",
    contribution: "Collaborated in team to conduct data quality checks and cleaning in Excel, build the classification workflow in KNIME, and evaluate Decision Tree vs. XGBoost models.",
    process: "Cleaned 2,000 IMDb reviews in Excel, performed text preprocessing and feature extraction (BoW, TF, Document Vector) in KNIME, and compared Decision Tree vs. XGBoost models.",
    processSteps: [
      "Processed a dataset of 2,000 IMDb movie reviews and conducted data quality checks & cleaning in Microsoft Excel.",
      "Performed text preprocessing and transformation in KNIME Analytics Platform.",
      "Extracted features using Bag of Words (BoW), Term Frequency (TF), and Document Vector.",
      "Built and compared Decision Tree and XGBoost classification models.",
      "Evaluated performance via Accuracy, Precision, Recall, F1-Score, Confusion Matrix, and ROC Curve (XGBoost achieved 92% accuracy)."
    ],
    result: "Evaluated model metrics (Confusion Matrix, Precision, Recall, F1-Score, ROC Curve), achieving 92% sentiment classification accuracy with the XGBoost model.",
    nextId: "ozemart",
    nextName: "Oze Mart Mobile UI/UX"
  },
  ozemart: {
    badge: "4TH PROJECT • GROUP UI/UX PROJECT (2023)",
    titleMain: "Oze Mart Mobile App",
    titleItalic: "UI/UX Design",
    subtitle: "Interactive Mobile E-Commerce Grocery Prototype",
    year: "2023",
    role: "UI/UX Designer (Wireframe, Mockup & Prototype)",
    methodology: "User Research → Wireframing → High-Fidelity Figma Prototype",
    keyMetric: "8+ Core Screens",
    keyMetricSub: "End-to-End Mobile Grocery Shopping Flow",
    image: "assets/project_ozemart_ui.png",
    gallery: [
      { src: "assets/ozemart_screen_1.png", caption: "Home Screen, Categories, Vouchers & Popular Products" },
      { src: "assets/ozemart_screen_2.png", caption: "Onboarding & Authentication Screen" },
      { src: "assets/ozemart_screen_3.png", caption: "Product Details & Add to Cart Interaction" }
    ],
    tags: ["Figma", "Wireframe", "High-Fidelity Mockup", "Interactive Prototype", "UI/UX Design"],
    linkUrl: "https://www.figma.com/design/lE1K9K87diwlsfwVlVRPWV/Oze-Mart--Copy-?node-id=0-1&t=Aib6lJ3hnWc3wDzf-1",
    linkLabel: "OZE MART PROTOTYPE ON FIGMA ↗",
    why: "The Oze Mart Mobile UI/UX project was created to design a user-friendly mobile e-commerce interface that makes it easy for users to search, filter, select, and purchase products seamlessly.",
    problem: "Mobile shopping applications require consistent layout structures, intuitive navigation, and clear user flows across multiple interconnected screens to prevent user drop-off.",
    contribution: "Collaborated in a team project to develop the application concept and designed wireframes, high-fidelity mockups, and interactive prototypes in Figma.",
    process: "Visualized user flows and interactions in Figma across core application pages, including onboarding, login, registration, product search, filter, product details, favorites, and orders.",
    processSteps: [
      "Collaborated in a team to define user needs and mobile e-commerce information architecture.",
      "Created low-fidelity wireframes to establish consistent layout hierarchy.",
      "Designed high-fidelity mockups for onboarding, login, registration, search, filter, product details, favorites, and orders.",
      "Connected interactive prototypes in Figma for seamless navigation testing."
    ],
    result: "Delivered a cohesive, interactive mobile e-commerce prototype with consistent layout, effortless navigation, and an intuitive end-to-end shopping experience.",
    nextId: "content",
    nextName: "Digital Content Design"
  },
  content: {
    badge: "DIGITAL CONTENT DESIGN • PT INTERMULTICON KRISTAL SENTRA (2024–2025)",
    titleMain: "Corporate Digital",
    titleItalic: "Content Design",
    subtitle: "Instagram Feeds (@info_kristalsentra) & Company Profile Management",
    year: "Sep 2024 – Mar 2025",
    role: "IT Support & Digital Content Creator (Internship)",
    methodology: "Topic Research → Visual Design (Canva/Figma) → Weekly Publishing",
    keyMetric: "2x / Week",
    keyMetricSub: "Consistent Corporate Social Media & Profile Updates",
    image: "assets/digital_content_grid.png",
    gallery: [
      { src: "assets/content_1.png", caption: "Educational Post: Your Body Needs Sugar!" },
      { src: "assets/content_2.png", caption: "Commemorative Post: Selamat Hari Pahlawan Nasional" },
      { src: "assets/content_3.png", caption: "Health & Nutrition Infographic Carousel" },
      { src: "assets/content_4.png", caption: "Seasonal Greeting: Merry Christmas" },
      { src: "assets/content_5.png", caption: "Religious Commemoration: Isra Mi'raj 1446 H" },
      { src: "assets/content_6.png", caption: "Industrial Product Spotlight: Sintech Rota Pump" }
    ],
    tags: ["Canva", "Figma", "CapCut", "Digital Content Creation", "Company Profile", "Social Media Management"],
    linkUrl: "https://drive.google.com/file/d/147Hro07snUds3lVVQoWglmymz4Vzdmck/view",
    linkLabel: "DOWNLOAD FULL PORTFOLIO SLIDES (PDF) ↗",
    why: "Created during the IT Support Internship at PT Intermulticon Kristal Sentra to strengthen the company's digital presence, educate audiences, and showcase industrial products.",
    problem: "Required consistent visual branding across educational carousels, national/religious commemorative posts, and technical product spotlights (Sintech Pumps).",
    contribution: "Updated digital content and company profile materials, designing and uploading approximately 2 pieces of digital content per week.",
    process: "Researched topics, designed feed layouts and typography in Canva and Figma, and managed publishing schedules for @info_kristalsentra.",
    processSteps: [
      "Planned weekly editorial topics covering sugar industry education, national holidays, and Sintech Pump product specifications.",
      "Designed cohesive visual layouts, typography, and brand-aligned graphics using Canva and Figma.",
      "Produced and uploaded ~2 digital content pieces per week to @info_kristalsentra.",
      "Updated corporate profile materials and assisted with structured document administration."
    ],
    result: "Delivered cohesive corporate social media feeds and updated company profile materials consistently throughout the 6-month internship.",
    nextId: "tracking",
    nextName: "Sistem Tracking Surat"
  }
};

document.addEventListener("DOMContentLoaded", () => {
  // 1. Right-Column Accordion Interaction on Home Page
  const accordionItems = document.querySelectorAll(".accordion-item");
  accordionItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      if (e.target.closest("a")) return;
      accordionItems.forEach((el) => el.classList.remove("active"));
      item.classList.add("active");
    });
  });

  // 2. Filter Tabs for Extended Bento Section on Home Page
  const filterTabs = document.querySelectorAll(".filter-tab[data-filter]");
  const detailCards = document.querySelectorAll(".details-bento-grid .bento-box");

  filterTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      filterTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      const filter = tab.dataset.filter;

      detailCards.forEach((card) => {
        const cats = (card.dataset.category || "").split(" ");
        if (filter === "all" || cats.includes(filter)) {
          card.classList.remove("hidden-card");
        } else {
          card.classList.add("hidden-card");
        }
      });
    });
  });

  // 3. Dedicated Project Detail Page Renderer (project.html?id=...)
  const projectDetailContainer = document.getElementById("projectDetailContainer");
  if (projectDetailContainer) {
    const params = new URLSearchParams(window.location.search);
    const projId = params.get("id") || "tracking";
    const p = projectCaseStudies[projId] || projectCaseStudies.tracking;

    document.title = `${p.titleMain} ${p.titleItalic} — Maria Cahya Jayanti`;

    // Highlight active tab in top navbar
    document.querySelectorAll("[data-proj-nav]").forEach((navEl) => {
      if (navEl.dataset.projNav === projId) {
        navEl.classList.add("active");
      } else {
        navEl.classList.remove("active");
      }
    });

    const tagsHtml = p.tags.map((t) => `<span class="pink-tag filled">${t}</span>`).join("");
    const stepsHtml = p.processSteps.map((s) => `<li>${s}</li>`).join("");

    let galleryHtml = "";
    if (p.gallery && p.gallery.length > 0) {
      const items = p.gallery
        .map(
          (g) => `
          <div class="soft-subcard" style="padding: 12px; display: flex; flex-direction: column; justify-content: space-between;">
            <div class="bento-thumb" style="height: 220px;" data-lightbox="${g.src}" data-title="${p.titleMain} ${p.titleItalic}" data-subtitle="${g.caption}">
              <img src="${g.src}" alt="${g.caption}" style="object-fit: contain; background: #fff9f8; padding: 6px;" />
            </div>
            <p style="font-size: 0.8rem; color: var(--text-dark); margin-top: 10px; text-align: center; font-weight: 500;">${g.caption}</p>
          </div>
        `
        )
        .join("");

      galleryHtml = `
        <div style="margin-top: 22px;">
          <div class="box-eyebrow" style="margin-bottom: 10px;">SCREENSHOT GALLERY (CLICK TO ZOOM)</div>
          <div class="sub-grid-3">${items}</div>
        </div>
      `;
    }

    projectDetailContainer.innerHTML = `
      <!-- Card 1: Project Hero Overview (Span 8) -->
      <article class="bento-box span-8" style="position: relative;">
        <svg class="spirograph-flower" style="width: 100px; height: 100px; top: 24px; right: 24px;" viewBox="0 0 120 120" fill="none">
          <g stroke="#F4978E" stroke-width="1.1">
            <ellipse cx="60" cy="60" rx="50" ry="15" />
            <ellipse cx="60" cy="60" rx="50" ry="15" transform="rotate(18 60 60)" />
            <ellipse cx="60" cy="60" rx="50" ry="15" transform="rotate(36 60 60)" />
            <ellipse cx="60" cy="60" rx="50" ry="15" transform="rotate(54 60 60)" />
            <ellipse cx="60" cy="60" rx="50" ry="15" transform="rotate(72 60 60)" />
            <ellipse cx="60" cy="60" rx="50" ry="15" transform="rotate(90 60 60)" />
            <ellipse cx="60" cy="60" rx="50" ry="15" transform="rotate(108 60 60)" />
            <ellipse cx="60" cy="60" rx="50" ry="15" transform="rotate(126 60 60)" />
            <ellipse cx="60" cy="60" rx="50" ry="15" transform="rotate(144 60 60)" />
            <ellipse cx="60" cy="60" rx="50" ry="15" transform="rotate(162 60 60)" />
          </g>
        </svg>

        <div>
          <div class="box-eyebrow">${p.badge}</div>
          <h1 class="hero-display-title" style="font-size: clamp(2rem, 3vw, 2.85rem); margin-top: 6px;">
            ${p.titleMain} <span class="italic-word">${p.titleItalic}</span>
          </h1>
          <p style="font-size: 1.05rem; color: var(--text-dark); font-weight: 300; margin-top: 10px; max-width: 85%;">
            ${p.subtitle}
          </p>
          <div class="tag-cloud" style="margin-top: 18px;">
            ${tagsHtml}
          </div>
        </div>

        <div style="margin-top: 26px; padding-top: 18px; border-top: 1.5px solid var(--line-pink); display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
          <a href="${p.linkUrl}" target="_blank" rel="noopener" class="btn-pink coral" style="padding: 11px 22px; font-size: 0.86rem;">
            ${p.linkLabel}
          </a>
          <a href="index.html#projects-section" class="btn-pink">
            ← All Projects
          </a>
        </div>
      </article>

      <!-- Card 2: Project Key Facts & Impact Highlight (Span 4, Coral Theme) -->
      <article class="bento-box span-4 coral-theme">
        <div>
          <div class="box-eyebrow" style="color: var(--text-dark);">PROJECT AT A GLANCE</div>
          <div style="font-size: 2.6rem; font-weight: 700; letter-spacing: -0.03em; line-height: 1.05; margin-top: 8px;">
            ${p.keyMetric}
          </div>
          <p style="font-size: 0.9rem; color: var(--text-dark); margin-top: 4px;">
            ${p.keyMetricSub}
          </p>
        </div>

        <div class="pink-list" style="margin-top: 18px;">
          <div class="pink-list-item" style="border-color: rgba(0,0,0,0.12); padding: 10px 0;">
            <div class="box-eyebrow" style="color: var(--text-dark);">ROLE</div>
            <div style="font-weight: 600; font-size: 0.94rem;">${p.role}</div>
          </div>
          <div class="pink-list-item" style="border-color: rgba(0,0,0,0.12); padding: 10px 0;">
            <div class="box-eyebrow" style="color: var(--text-dark);">TIMELINE / YEAR</div>
            <div style="font-weight: 600; font-size: 0.94rem;">${p.year}</div>
          </div>
          <div class="pink-list-item" style="border-color: rgba(0,0,0,0.12); padding: 10px 0;">
            <div class="box-eyebrow" style="color: var(--text-dark);">WORKFLOW</div>
            <div style="font-weight: 600; font-size: 0.94rem;">${p.methodology}</div>
          </div>
        </div>
      </article>

      <!-- Card 3: Interface / Mockup System Showcase (Span 12) -->
      <article class="bento-box span-12">
        <div class="box-header">
          <div>
            <div class="box-eyebrow">VISUAL SYSTEM &amp; INTERFACE SHOWCASE</div>
            <h2 class="box-heading">Interface <span class="light-italic">&amp; Mockup System</span></h2>
          </div>
          <a href="${p.linkUrl}" target="_blank" rel="noopener" class="btn-pink coral">
            Open Source / Prototype ↗
          </a>
        </div>

        <div class="bento-thumb" style="max-height: 540px; background: var(--bg-page); padding: 14px;" data-lightbox="${p.image}" data-title="${p.titleMain} ${p.titleItalic}" data-subtitle="${p.subtitle}">
          <img src="${p.image}" alt="${p.titleMain} ${p.titleItalic}" style="max-height: 500px; object-fit: contain; border-radius: 12px;" />
        </div>

        ${galleryHtml}
      </article>

      <!-- Card 4: Why the Project Was Created (Span 6) -->
      <article class="bento-box span-6">
        <div>
          <div class="box-header">
            <div>
              <div class="box-eyebrow">01 • BACKGROUND &amp; PURPOSE</div>
              <h2 class="box-heading">Why the Project <span class="light-italic">Was Created?</span></h2>
            </div>
            <svg class="small-star-ornament" viewBox="0 0 48 48" fill="none">
              <g fill="#F6A59C">
                <polygon points="24,2 27,10 24,18 21,10" />
                <polygon points="24,2 27,10 24,18 21,10" transform="rotate(45 24 24)" />
                <polygon points="24,2 27,10 24,18 21,10" transform="rotate(90 24 24)" />
                <polygon points="24,2 27,10 24,18 21,10" transform="rotate(135 24 24)" />
                <polygon points="24,2 27,10 24,18 21,10" transform="rotate(180 24 24)" />
                <polygon points="24,2 27,10 24,18 21,10" transform="rotate(225 24 24)" />
                <polygon points="24,2 27,10 24,18 21,10" transform="rotate(270 24 24)" />
                <polygon points="24,2 27,10 24,18 21,10" transform="rotate(315 24 24)" />
              </g>
            </svg>
          </div>
          <p class="bio-paragraph" style="margin-top: 8px;">
            ${p.why}
          </p>
        </div>
      </article>

      <!-- Card 5: Problem / Challenge (Span 6) -->
      <article class="bento-box span-6">
        <div>
          <div class="box-header">
            <div>
              <div class="box-eyebrow">02 • CORE CHALLENGE</div>
              <h2 class="box-heading">Problem <span class="light-italic">&amp; Challenge</span></h2>
            </div>
          </div>
          <p class="bio-paragraph" style="margin-top: 8px;">
            ${p.problem}
          </p>
        </div>
      </article>

      <!-- Card 6: My Contribution (Span 5) -->
      <article class="bento-box span-5">
        <div>
          <div class="box-eyebrow">03 • ROLE &amp; OWNERSHIP</div>
          <h2 class="box-heading" style="margin-bottom: 12px;">My <span class="light-italic">Contribution</span></h2>
          <p class="bio-paragraph">
            ${p.contribution}
          </p>
        </div>
      </article>

      <!-- Card 7: How the Process Was Done (Span 7) -->
      <article class="bento-box span-7">
        <div>
          <div class="box-eyebrow">04 • EXECUTION WORKFLOW</div>
          <h2 class="box-heading" style="margin-bottom: 12px;">How the Process <span class="light-italic">Was Done</span></h2>
          <p style="font-size: 0.94rem; color: var(--text-dark); margin-bottom: 10px;">
            ${p.process}
          </p>
          <ul class="item-bullets">
            ${stepsHtml}
          </ul>
        </div>
      </article>

      <!-- Card 8: Result / Impact (Span 8) -->
      <article class="bento-box span-8">
        <div>
          <div class="box-eyebrow">05 • OUTCOME &amp; VALUE DELIVERED</div>
          <h2 class="box-heading" style="margin-bottom: 12px;">Result <span class="light-italic">&amp; Impact</span></h2>
          <p class="bio-paragraph" style="font-size: 1.08rem;">
            ${p.result}
          </p>
        </div>
      </article>

      <!-- Card 9: Next Project Coral Card (Span 4) -->
      <a href="project.html?id=${p.nextId}" class="bento-box span-4 card-contact-cta" style="grid-column: span 4; grid-row: auto; min-height: 210px;">
        <div class="contact-top-row">
          <span class="contact-small-question">Explore next<br />case study</span>
          <svg class="arrow-up-right" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </div>
        <div>
          <div style="font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 4px;">NEXT PROJECT</div>
          <div class="contact-big-title" style="font-size: 1.85rem;">${p.nextName}</div>
        </div>
      </a>
    `;
  }

  // 4. Modal System (For Image Lightbox & Contact Dialog)
  const modal = document.getElementById("caseModal");
  const modalBody = document.getElementById("modalContent");
  const modalClose = document.getElementById("modalClose");

  function openImageModal(src, title, subtitle) {
    if (!modal || !modalBody) return;
    modalBody.innerHTML = `
      <div class="box-eyebrow">PORTFOLIO PREVIEW</div>
      <h2 class="box-heading">${title}</h2>
      <p style="font-size: 0.92rem; color: var(--text-muted); margin-top: 4px;">${subtitle}</p>
      <img src="${src}" alt="${title}" class="modal-preview-img" />
    `;
    modal.classList.add("open");
  }

  function openContactModal() {
    if (!modal || !modalBody) return;
    modalBody.innerHTML = `
      <div class="box-eyebrow">HAVE SOME QUESTIONS? • LET'S CONNECT</div>
      <h2 class="box-heading" style="font-size: 2rem;">Contact <span class="light-italic">Maria Cahya Jayanti</span></h2>
      <p style="font-size: 0.95rem; color: var(--text-dark); margin-top: 8px;">
        I am always eager to learn, explore new opportunities, and contribute across IT Support, Web Development, Data Science &amp; Administration.
      </p>
      <div class="sub-grid-2" style="margin-top: 20px;">
        <div class="soft-subcard">
          <h4>✉ Email Address</h4>
          <p style="font-size: 0.9rem; margin-bottom: 10px;">mariacahyaj@gmail.com</p>
          <div style="display: flex; gap: 8px; flex-wrap: wrap;">
            <a href="mailto:mariacahyaj@gmail.com" class="btn-pink coral">Send Email ↗</a>
            <button type="button" id="copyEmailModalBtn" class="btn-pink">Copy Email</button>
          </div>
        </div>
        <div class="soft-subcard">
          <h4>in LinkedIn &amp; GitHub</h4>
          <p style="font-size: 0.9rem; margin-bottom: 10px;">linkedin.com/in/maria-cahya-jayantii</p>
          <div style="display: flex; gap: 8px; flex-wrap: wrap;">
            <a href="https://www.linkedin.com/in/maria-cahya-jayantii" target="_blank" rel="noopener" class="btn-pink">LinkedIn ↗</a>
            <a href="https://github.com/22091397017MariaCahyaJayanti" target="_blank" rel="noopener" class="btn-pink">GitHub ↗</a>
          </div>
        </div>
        <div class="soft-subcard" style="grid-column: 1 / -1;">
          <h4>📍 Location &amp; Portfolio PDF</h4>
          <p style="font-size: 0.9rem; margin-bottom: 10px;">Mojokerto, East Java, Indonesia</p>
          <a href="https://drive.google.com/file/d/147Hro07snUds3lVVQoWglmymz4Vzdmck/view" target="_blank" rel="noopener" class="btn-pink coral">⬇ Download PDF ↗</a>
        </div>
      </div>
    `;
    modal.classList.add("open");

    const copyBtn = document.getElementById("copyEmailModalBtn");
    if (copyBtn) {
      copyBtn.addEventListener("click", () => {
        navigator.clipboard.writeText("mariacahyaj@gmail.com");
        copyBtn.textContent = "✓ Copied!";
        setTimeout(() => (copyBtn.textContent = "Copy Email"), 2000);
      });
    }
  }

  document.querySelectorAll("[data-lightbox]").forEach((el) => {
    el.addEventListener("click", () => {
      openImageModal(
        el.dataset.lightbox,
        el.dataset.title || "Preview",
        el.dataset.subtitle || ""
      );
    });
  });

  document.querySelectorAll("[data-open-contact]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      openContactModal();
    });
  });

  if (modalClose && modal) {
    modalClose.addEventListener("click", () => modal.classList.remove("open"));
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.remove("open");
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") modal.classList.remove("open");
    });
  }
});
