// Simplified Navigation Test
function show(id) {
  console.log("Navigating to: " + id); // This will show in the 'Console'
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const target = document.getElementById(id);
  if (target) {
    target.classList.add('active');
    target.scrollIntoView({ behavior: 'smooth' });
  } else {
    console.error("Screen ID not found: " + id);
  }
}

// Global functions for your buttons
window.goOwner = function() { show('scr-owner'); };
window.goCustomer = function() { show('scr-customer'); };
