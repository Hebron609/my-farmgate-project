const fs = require('fs');

const updates = [
  {
    file: 'src/pages/ServiceModel.vue',
    replacements: [
      { from: 'farm-pic4.webp', to: 'poultry_farm_new.webp' },
      { from: 'farm-tractor2.webp', to: 'cattle_farm_new.webp' },
      { from: 'tilapia1.avif', to: 'tilapia_fish_new.webp' }
    ]
  },
  {
    file: 'src/pages/InvestorDashboard.vue',
    replacements: [
      { from: 'farm-pic4.webp', to: 'poultry_farm_new.webp' },
      { from: 'farm-tractor2.webp', to: 'cattle_farm_new.webp' },
      { from: 'tilapia1.avif', to: 'tilapia_fish_new.webp' }
    ]
  },
  {
    file: 'src/pages/OpportunityDetail.vue',
    replacements: [
      { from: 'farm-pic4.webp', to: 'poultry_farm_new.webp' },
      { from: 'farm-tractor2.webp', to: 'cattle_farm_new.webp' },
      { from: 'tilapia1.avif', to: 'tilapia_fish_new.webp' }
    ]
  },
  {
    file: 'src/pages/OurOfferings.vue',
    replacements: [
      { from: 'tilapia.webp', to: 'tilapia_fish_new.webp' } // Note: they use ../assets/img/tilapia.webp
    ]
  },
  {
    file: 'src/pages/Projects.vue',
    replacements: [
      { from: 'tilapia1.avif', to: 'tilapia_fish_new.webp' }
    ]
  }
];

updates.forEach(u => {
  if (fs.existsSync(u.file)) {
    let content = fs.readFileSync(u.file, 'utf8');
    let changed = false;
    u.replacements.forEach(r => {
      if (content.includes(r.from)) {
        content = content.replace(new RegExp(r.from, 'g'), r.to);
        changed = true;
      }
    });
    if (changed) {
      fs.writeFileSync(u.file, content, 'utf8');
      console.log(`Updated ${u.file}`);
    }
  }
});
