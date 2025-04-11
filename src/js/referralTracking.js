/* referralTracking.js */
function trackReferral(refUrl) {
  // Dummy referral tracking logic: log details and redirect.
  console.log("Tracking referral for URL:", refUrl);
  // In production, log user agent, IP, etc., then redirect:
  window.location.href = refUrl;
}
