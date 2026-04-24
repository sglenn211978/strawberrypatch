// ════ FINALIZED NAVIGATION LOGIC ════
function show(id) {
  console.log("Attempting to show screen:", id);
  const target = document.getElementById(id);
  
  if (!target) {
    console.error("CRITICAL ERROR: Screen ID '" + id + "' not found in HTML!");
    return;
  }

  // Hide all screens
  document.querySelectorAll('.screen').forEach(s => {
    s.classList.remove('active');
    s.style.display = 'none'; // Force hide
  });

  // Show target
  target.classList.add('active');
  target.style.display = 'block'; // Force show
  
  // Auto-scroll to top of section
  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ════ BIND FUNCTIONS TO WINDOW ════
// This ensures the HTML buttons can always "see" these functions
window.goOwner = function() { 
  console.log("Owner button clicked");
  show('scr-owner'); 
};

window.goCustomer = function() { 
  console.log("Customer button clicked");
  show('scr-customer'); 
};

// ════ INITIALIZATION ════
window.addEventListener('DOMContentLoaded', () => {
  console.log("Strawberry Patch App Initialized. Ready for eggs! 🍓");
  // Ensure we start on the welcome screen
  show('scr-welcome');
});
