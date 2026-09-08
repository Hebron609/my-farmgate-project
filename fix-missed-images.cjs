const fs = require('fs');

const updates = [
  {
    file: 'src/pages/OperationsDashboard.vue',
    replaces: [
      { from: 'FarmGate%20Africa%201%201.png', to: 'FarmGate%20Africa%201%201.webp' }
    ]
  },
  {
    file: 'src/pages/InvestorDashboard.vue',
    replaces: [
      { from: 'FARMGATE%20PATTERN%20_GREEN.png', to: 'FARMGATE%20PATTERN%20_GREEN.webp' }
    ]
  },
  {
    file: 'src/pages/Signup.vue',
    replaces: [
      { from: 'FARMGATE%20PATTERN%20_GREEN.png', to: 'FARMGATE%20PATTERN%20_GREEN.webp' }
    ]
  },
  {
    file: 'src/pages/Login.vue',
    replaces: [
      { from: 'FARMGATE%20PATTERN%20_GREEN.png', to: 'FARMGATE%20PATTERN%20_GREEN.webp' }
    ]
  },
  {
    file: 'src/components/AuthRedirectModal.vue',
    replaces: [
      { from: 'FARMGATE%20PATTERN%20_GREEN.png', to: 'FARMGATE%20PATTERN%20_GREEN.webp' }
    ]
  },
  {
    file: 'src/pages/BookFarmVisit.vue',
    replaces: [
      { from: 'hero-fallback.jpg', to: 'hero-fallback.webp' }
    ]
  },
  {
    file: 'book-farm-visit.html',
    replaces: [
      { from: "url('images/farm-visit1.webp')", to: "url('/images/farm-visit1.webp')" }
    ]
  }
];

updates.forEach(u => {
  if (fs.existsSync(u.file)) {
    let content = fs.readFileSync(u.file, 'utf8');
    let changed = false;
    u.replaces.forEach(r => {
      if (content.includes(r.from)) {
        content = content.split(r.from).join(r.to);
        changed = true;
      }
    });
    if (changed) {
      fs.writeFileSync(u.file, content, 'utf8');
      console.log(`Updated ${u.file}`);
    }
  }
});
