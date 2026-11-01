// Project & Creative Case Studies Data (from Maria Cahya Jayanti's CV & Portfolio PDF)
const projectCaseStudies = {
  tracking: {
    badge: "1ST PROJECT • FINAL YEAR PROJECT (2026)",
    title: "Document Tracking & Submission System",
    subtitle: "Web-Based Academic Correspondence Management Application",
    image: "assets/project_tracking_ui.png",
    tags: ["Laravel", "PHP", "MySQL", "Laravel Blade", "Figma", "GitHub", "3 User Roles"],
    linkUrl: "https://github.com/22091397017MariaCahyaJayanti/Sistem-Tracking-Surat.git",
    linkLabel: "Open Repository on GitHub",
    why: "The Sistem Tracking dan Pengajuan Surat project was built to digitize and support the submission, management, and real-time status monitoring of official letters in an academic environment, replacing slow manual administrative tracking.",
    problem: "Manual letter requests and tracking lacked status transparency for applicants and required coordinated workflows across 3 distinct user roles with different access rights.",
    contribution: "Designed the application workflow and UI in Figma and developed the full-stack web application using Laravel, PHP, and MySQL with a 3-role access structure.",
    process: "Designed user flows and interfaces in Figma, implemented responsive and structured views using Laravel Blade, configured relational MySQL tables, and engineered role-based access control across 3 user roles.",
    result: "The web application streamlined academic letter administration, simplified information access, and provided transparent real-time status tracking for all users."
  },
  imdb: {
    badge: "2ND PROJECT • CODELESS DATA SCIENCE (2025)",
    title: "IMDb Movie Review Sentiment Analysis",
    subtitle: "End-to-End Machine Learning Sentiment Classification (92% Accuracy)",
    image: "assets/project_imdb_ui.png",
    tags: ["Microsoft Excel", "KNIME", "CRISP-DM", "Data Cleaning", "Text Preprocessing", "Decision Tree", "XGBoost (92%)"],
    linkUrl: "https://drive.google.com/drive/folders/1TPhvkohSFogRRmInskkmDbEztH967kYa?usp=drive_link",
    linkLabel: "Open Documentation on Google Drive",
    why: "The IMDb Sentiment Analysis project was created as a Codeless Data Science Final Project to process and classify a dataset of 2,000 IMDb movie reviews into positive and negative sentiments using an end-to-end machine learning workflow.",
    problem: "Unstructured raw text across 2,000 movie reviews required rigorous quality inspection, data cleaning, and feature extraction to ensure accurate sentiment classification across multiple models.",
    contribution: "Collaborated in team to conduct data quality checks and cleaning in Excel, build the classification workflow in KNIME, and evaluate Decision Tree vs. XGBoost models.",
    process: "Cleaned 2,000 IMDb reviews in Excel, performed text preprocessing and feature extraction (Bag of Words, Term Frequency, Document Vector) in KNIME, and compared Decision Tree vs. XGBoost models.",
    result: "Evaluated model metrics (Confusion Matrix, Precision, Recall, F1-Score, ROC Curve), achieving 92% sentiment classification accuracy with the XGBoost model."
  },
  ozemart: {
    badge: "3RD PROJECT • GROUP UI/UX PROJECT (2023)",
    title: "Oze Mart Mobile App UI/UX Design",
    subtitle: "Interactive Mobile E-Commerce Grocery Prototype",
    image: "assets/project_ozemart_ui.png",
    tags: ["Figma", "Wireframe", "High-Fidelity Mockup", "Interactive Prototype", "UI/UX Design"],
    linkUrl: "https://www.figma.com/design/lE1K9K87diwlsfwVlVRPWV/Oze-Mart--Copy-?node-id=0-1&t=Aib6lJ3hnWc3wDzf-1",
    linkLabel: "Open Interactive Prototype on Figma",
    why: "The Oze Mart Mobile UI/UX project was created to design a user-friendly mobile e-commerce interface that makes it easy for users to search, filter, select, and purchase products seamlessly.",
    problem: "Mobile shopping applications require consistent layout structures, intuitive navigation, and clear user flows across multiple interconnected screens to prevent user drop-off.",
    contribution: "Collaborated in a team project to develop the application concept and designed wireframes, high-fidelity mockups, and interactive prototypes in Figma.",
    process: "Visualized user flows and interactions in Figma across core application pages, including onboarding, login, registration, product search, filter, product details, favorites, and orders.",
    result: "Delivered a cohesive, interactive mobile e-commerce prototype with consistent layout, effortless navigation, and an intuitive end-to-end shopping experience."
  },
  content: {
    badge: "DIGITAL CONTENT DESIGN • PT INTERMULTICON KRISTAL SENTRA (2024–2025)",
    title: "Corporate Digital Content & Social Media Feeds",
    subtitle: "Instagram Content Design (@info_kristalsentra) & Company Profile Updates",
    image: "assets/digital_content_grid.png",
    tags: ["Canva", "Figma", "CapCut", "Digital Content Creation", "Social Media Management"],
    linkUrl: "assets/Portfolio_Maria_Cahya_Jayanti.pdf",
    linkLabel: "Download Full Portfolio PDF",
    why: "Created during the IT Support Internship at PT Intermulticon Kristal Sentra to strengthen the company's digital presence, educate audiences, and showcase industrial products.",
    problem: "Required consistent visual branding across educational carousels, national/religious commemorative posts, and technical product spotlights (Sintech Pumps).",
    contribution: "Updated digital content and company profile materials, designing and uploading approximately 2 pieces of digital content per week.",
    process: "Researched topics, designed feed layouts and typography in Canva and Figma, and managed publishing schedules for @info_kristalsentra.",
    result: "Delivered cohesive corporate social media feeds and updated company profile materials consistently throughout the 6-month internship."
  }
};

document.addEventListener("DOMContentLoaded", () => {
  // 1. Right-Column Accordion Interaction (Musea / Elara / Verve / Zephyr style)
  const accordionItems = document.querySelectorAll(".accordion-item");
  accordionItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      // If user clicked the Case Study button or external arrow, let modal handler run
      if (e.target.closest("[data-project]")) return;
      accordionItems.forEach((el) => el.classList.remove("active"));
      item.classList.add("active");
    });
  });

  // 2. Filter Tabs for Extended Bento Section
  const filterTabs = document.querySelectorAll(".filter-tab");
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

  // 3. Modal System (Case Study, Image Lightbox & Contact Dialog)
  const modal = document.getElementById("caseModal");
  const modalBody = document.getElementById("modalContent");
  const modalClose = document.getElementById("modalClose");

  function openProjectModal(key) {
    const p = projectCaseStudies[key];
    if (!p) return;

    const tagsHtml = p.tags.map((t) => `<span class="pink-tag filled">${t}</span>`).join("");
    const imgHtml = p.image ? `<img src="${p.image}" alt="${p.title}" class="modal-preview-img" />` : "";

    modalBody.innerHTML = `
      <div class="box-eyebrow">${p.badge}</div>
      <h2 class="box-heading" style="font-size: 1.75rem;">${p.title}</h2>
      <p style="font-size: 0.95rem; color: var(--text-muted); margin-top: 4px;">${p.subtitle}</p>
      <div class="tag-cloud" style="margin-top: 12px;">${tagsHtml}</div>
      ${imgHtml}
      <div class="case-block">
        <h5>Why the Project Was Created</h5>
        <p>${p.why}</p>
      </div>
      <div class="case-block">
        <h5>Problem / Challenge</h5>
        <p>${p.problem}</p>
      </div>
      <div class="case-block">
        <h5>My Contribution</h5>
        <p>${p.contribution}</p>
      </div>
      <div class="case-block">
        <h5>How the Process Was Done</h5>
        <p>${p.process}</p>
      </div>
      <div class="case-block">
        <h5>Result / Impact</h5>
        <p>${p.result}</p>
      </div>
      <div style="margin-top: 22px; display: flex; gap: 12px; flex-wrap: wrap;">
        <a href="${p.linkUrl}" target="_blank" rel="noopener" class="btn-pink coral">
          <span>↗</span> ${p.linkLabel}
        </a>
      </div>
    `;
    modal.classList.add("open");
  }

  function openImageModal(src, title, subtitle) {
    modalBody.innerHTML = `
      <div class="box-eyebrow">PORTFOLIO PREVIEW</div>
      <h2 class="box-heading">${title}</h2>
      <p style="font-size: 0.92rem; color: var(--text-muted); margin-top: 4px;">${subtitle}</p>
      <img src="${src}" alt="${title}" class="modal-preview-img" />
    `;
    modal.classList.add("open");
  }

  function openContactModal() {
    modalBody.innerHTML = `
      <div class="box-eyebrow">HAVE SOME QUESTIONS? • LET'S CONNECT</div>
      <h2 class="box-heading" style="font-size: 2rem;">Contact <span class="light-italic">Maria Cahya Jayanti</span></h2>
      <p style="font-size: 0.95rem; color: var(--text-dark); margin-top: 8px;">
        I am always eager to learn, explore new opportunities, and contribute across IT Support, Web Development, Data Science &amp; Banking/Administration.
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
          <h4>📞 Phone / WhatsApp</h4>
          <p style="font-size: 0.9rem; margin-bottom: 10px;">+62-8585-9493-781</p>
          <a href="https://wa.me/6285859493781" target="_blank" rel="noopener" class="btn-pink coral">Chat WhatsApp ↗</a>
        </div>
        <div class="soft-subcard">
          <h4>in LinkedIn &amp; GitHub</h4>
          <p style="font-size: 0.9rem; margin-bottom: 10px;">linkedin.com/in/maria-cahya-jayantii</p>
          <div style="display: flex; gap: 8px; flex-wrap: wrap;">
            <a href="https://www.linkedin.com/in/maria-cahya-jayantii" target="_blank" rel="noopener" class="btn-pink">LinkedIn ↗</a>
            <a href="https://github.com/22091397017MariaCahyaJayanti" target="_blank" rel="noopener" class="btn-pink">GitHub ↗</a>
          </div>
        </div>
        <div class="soft-subcard">
          <h4>📍 Location &amp; Portfolio PDF</h4>
          <p style="font-size: 0.9rem; margin-bottom: 10px;">Mojokerto, East Java, Indonesia</p>
          <a href="assets/Portfolio_Maria_Cahya_Jayanti.pdf" download class="btn-pink coral">⬇ Download PDF</a>
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

  document.querySelectorAll("[data-project]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.stopPropagation();
      openProjectModal(el.dataset.project);
    });
  });

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

  modalClose.addEventListener("click", () => modal.classList.remove("open"));
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("open");
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") modal.classList.remove("open");
  });
});
