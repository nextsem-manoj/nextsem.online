# 📁 Nextsem Jobs Archive & Official Notifications Directory

Yeh directory official job circulars, government recruitment notifications, off-campus drive PDFs aur private corporate hiring circulars ka master source archive hai.

---

## 📋 Active Circulars Inventory

| Circular File | Organization | Role / Designation | CTC / Package | Vacancies | Degrees | Status | Public Download Link |
| :--- | :--- | :--- | :--- | :---: | :---: | :---: | :--- |
| [`C-DOT Product Engineering and Sustenence.pdf`](file:///c:/Users/Manoj/Nextsem%20Repositories/nextsem.online/docs/jobs/C-DOT%20Product%20Engineering%20and%20Sustenence.pdf) | **C-DOT (Centre for Development of Telematics)**, Govt. of India | Young Professional (Product Engineering & Sustenance) | **₹12 Lakh / Annum** (₹12 LPA) | 5 Posts | BCA / MCA / B.Tech (CS/IT/Cyber/AI) | 🟢 Active (Oct 2026) | [`/pdf/jobs/cdot-young-professional-product-engineering.pdf`](file:///c:/Users/Manoj/Nextsem%20Repositories/nextsem.online/public/pdf/jobs/cdot-young-professional-product-engineering.pdf) |

---

## 🏛️ Deep-Dive: C-DOT Young Professional (Cyber Security)

* **Hiring Authority**: Centre for Development of Telematics (C-DOT), Premier Autonomous Telecom Technology R&D Centre, Department of Telecommunications, Govt. of India.
* **Notification Post**: Young Professional – Product Engineering & Sustenance.
* **Specialized Platform**: **TRINETRA Cyber Security Platform**.
* **Remuneration**: Consolidated **₹12,00,000 / annum** (₹1.0 Lakh / month).
* **Engagement Tenure**: Contractual for **2 years** initially, extendable by **1 year** based on performance.
* **Total Openings**: 5 Positions.
* **Primary Location**: New Delhi (with potential pan-India project deployment).
* **Experience Required**: **Fresher to 2 Years** (Open for fresh graduates!).
* **Upper Age Limit**: 35 Years (as of application closing date).
* **Educational Qualifications**:
  * B.E. / B.Tech / MCA / BCA + relevant qualifications from AICTE / UGC approved Universities in Computer Science, Information Technology, Cyber Security, Artificial Intelligence, or related branches.
* **Core Responsibilities**:
  * Product engineering and feature enhancements for the **TRINETRA Cyber Security** platform.
  * Developing and integrating **AI/ML-enabled cyber threat detection** and automated response modules.
  * Software testing, debugging, performance optimization, release management, and customer-specific feature configuration.
* **Key Technical Skills**:
  * Python, C++, Java, Linux Shell, Network Protocols, Threat Detection, Bug Fixing & QA.
* **Official Application Portal**: [C-DOT Official Careers](https://www.cdot.in/career) (Online mode only).
* **Important Dates**:
  * Opening Date: **7th October 2026**
  * Closing Date: **30 days from publication in Employment News**

---

## 🛠️ SOP: How to Add & Publish Future Job Circulars

Jab bhi koi naya job circular ya hiring PDF aaye, follow this 4-step workflow:

1. **Place Raw PDF in this Directory**:
   * Save the original official PDF into `docs/jobs/` (e.g. `docs/jobs/ISRO-Scientist-SC-CS.pdf`).
2. **Deploy to Public Assets**:
   * Copy the PDF to `public/pdf/jobs/<clean-web-name>.pdf` so users can download it directly from the live web portal without backend restrictions.
3. **Register in Portal Data**:
   * Add the parsed `JobListing` object into [`src/data/jobsData.ts`](file:///c:/Users/Manoj/Nextsem%20Repositories/nextsem.online/src/data/jobsData.ts) under the `JOBS_DATA` array.
   * Attach `pdfUrl: "/pdf/jobs/<clean-web-name>.pdf"` and `pdfFileName: "<clean-web-name>.pdf"`.
4. **Update this Inventory**:
   * Add a row in the table above for tracking and records.
