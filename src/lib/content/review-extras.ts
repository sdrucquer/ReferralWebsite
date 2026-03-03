export interface ReviewExtra {
  pros: string[];
  cons: string[];
  faqs: Array<{ question: string; answer: string }>;
}

export const reviewExtras: Record<string, ReviewExtra> = {
  gusto: {
    pros: [
      "Clean payroll workflow that a first-time owner can use quickly",
      "Automatic payroll tax filings and payments",
      "Strong employee self-service and onboarding"
    ],
    cons: [
      "Per-employee pricing can add up as headcount grows",
      "Advanced custom reporting is limited on lower tiers",
      "International payroll requires separate providers"
    ],
    faqs: [
      {
        question: "Who is Gusto best for?",
        answer: "Gusto is best for small businesses that want a simple payroll workflow with automatic tax handling and fast setup."
      },
      {
        question: "Can solo owners use Gusto?",
        answer: "Yes. Solo owners can run payroll for themselves, especially in LLC/S-Corp structures where owner payroll matters for tax compliance."
      }
    ]
  },
  jobber: {
    pros: [
      "Excellent scheduling and dispatching for crews",
      "Quote-to-invoice flow is fast and client-friendly",
      "Great fit for field operations in service trades"
    ],
    cons: [
      "Feature depth may feel heavy for very small teams",
      "Some automations require higher plans",
      "Reporting customizations can be limited"
    ],
    faqs: [
      {
        question: "Is Jobber only for large service teams?",
        answer: "No. Small crews and solo operators can benefit, especially once quoting and invoicing volume rises."
      },
      {
        question: "Can Jobber replace payroll software?",
        answer: "No. Jobber handles operations and field workflows, but payroll still needs a payroll product like Gusto."
      }
    ]
  },
  quickbooks: {
    pros: [
      "Strong bookkeeping standard for small business",
      "Integrates with payroll workflows",
      "Useful dashboards for cash flow visibility"
    ],
    cons: [
      "Pricing tiers can climb as features are added",
      "Interface can feel busy for new users",
      "Some support experiences are inconsistent"
    ],
    faqs: [
      {
        question: "Does QuickBooks work with Gusto?",
        answer: "Yes. Gusto payroll data can sync into QuickBooks, reducing duplicate entry and making monthly reconciliation easier."
      },
      {
        question: "Is QuickBooks overkill for a tiny business?",
        answer: "If you issue invoices, track expenses, and need reporting, it is often worth it; otherwise a lighter ledger may be enough at first."
      }
    ]
  },
  quo: {
    pros: [
      "Professional business phone presence",
      "Simple routing and call management",
      "Useful when owners want to separate personal and business calls"
    ],
    cons: [
      "Smaller ecosystem than legacy phone providers",
      "Limited advanced analytics",
      "Some features depend on plan tier"
    ],
    faqs: [
      {
        question: "Why use a business phone platform at all?",
        answer: "It protects your personal number, improves professionalism, and gives your team clearer call routing and accountability."
      },
      {
        question: "Is QUO difficult to set up?",
        answer: "Setup is straightforward for most small teams and can usually be completed the same day."
      }
    ]
  },
  adp: {
    pros: ["Strong enterprise depth", "Broad compliance coverage", "Long-standing payroll provider"],
    cons: ["Higher complexity", "Less intuitive onboarding", "Can be pricier than SMB-first tools"],
    faqs: []
  },
  paychex: {
    pros: ["Solid payroll functionality", "HR add-ons available", "Reliable processing"],
    cons: ["Higher total cost", "Interface can feel dated", "Upsell-heavy sales flow"],
    faqs: []
  },
  onpay: {
    pros: ["Simple and budget-friendly", "Good tax handling", "Easy to learn"],
    cons: ["Fewer advanced features", "Smaller app ecosystem", "Not ideal for complex orgs"],
    faqs: []
  }
};
