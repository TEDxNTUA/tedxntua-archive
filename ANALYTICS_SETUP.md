# Google Analytics & Cookie Consent Implementation

## Overview
This implementation integrates Google Analytics with a legally compliant cookie consent system for TEDxNTUA Archive.

## What's Been Added

### 1. **Cookie Consent Banner** (`CookieConsent.js` & `CookieConsent.module.css`)
- Prominent, non-intrusive banner at bottom of screen
- Clear, easy-to-understand language about tracking
- Explicitly states what data is collected (and what isn't)
- Two buttons: Accept / Reject
- Links to Privacy Policy and Cookie Policy
- Legal compliance messaging
- Mobile responsive design
- Smooth animations

**Key Features:**
- Stores user consent in localStorage
- Shows only once (or when consent is cleared)
- Backdrop overlay for visibility
- Accessible button controls
- TEDxNTUA brand colors (red accent)

### 2. **Google Analytics Integration** (`GoogleAnalytics.js`)
- Wraps your GTM script safely
- Only loads scripts AFTER user accepts cookies
- Includes both GTM script and noscript fallback
- Your GTM ID: **GTM-PDQQ8BZ4**

**How it works:**
1. Component checks localStorage for consent
2. If user clicked "Accept", loads GTM scripts
3. If user clicked "Reject", no scripts load
4. Respects browser privacy settings

### 3. **Privacy & Cookie Policies** (New Pages)
- `/privacy-policy` - Full privacy policy
- `/cookies-policy` - Cookie-specific policy
- Both link from the consent banner
- GDPR/CCPA compliant language
- Easy to update

### 4. **Updated Layout** (`layout.js`)
- GoogleAnalytics component in `<head>`
- CookieConsent component in `<body>`
- Proper structure for GTM integration

---

## Legal Compliance Checklist ✓

### GDPR Compliance
- ✓ Explicit user consent BEFORE tracking
- ✓ Clear information about data collection
- ✓ Right to reject/opt-out
- ✓ Privacy policy accessible
- ✓ Cookie policy accessible

### CCPA Compliance
- ✓ Users can opt-out
- ✓ Clear disclosure of data practices
- ✓ Links to privacy information
- ✓ Easy rejection option

### ePrivacy Directive
- ✓ Consent banner before cookies
- ✓ Clear cookie information
- ✓ Prior consent required

---

## User Experience Flow

1. **First Visit:**
   - User sees cookie banner with semi-transparent backdrop
   - Can read what's being tracked
   - Chooses: Accept or Reject
   - Choice is saved locally

2. **Subsequent Visits:**
   - No banner (unless they clear localStorage)
   - If they accepted: Analytics scripts load automatically
   - If they rejected: No tracking occurs

3. **Withdrawing Consent:**
   - Can clear browser cookies/localStorage to see banner again
   - Can always reject via browser settings

---

## Customization Guide

### Change the Banner Text
Edit `src/components/CookieConsent/CookieConsent.js` - update the text in the JSX

### Change Colors
Edit `src/components/CookieConsent/CookieConsent.module.css` - update:
- `#dc143c` (crimson/red)
- `#ffffff` (white)
- `#1a1a1a` (dark)

### Change GTM ID
If you change your GTM ID, update it in:
1. `src/components/GoogleAnalytics.js` - Change `GTM-PDQQ8BZ4` (2 places)
2. Cookie banner mentions it in text

### Update Privacy/Cookie Policies
Edit:
- `src/app/privacy-policy/page.js`
- `src/app/cookies-policy/page.js`

---

## Testing

### Before Deployment
1. Visit your site in a new incognito window
2. See the cookie banner
3. Test "Accept" button - banner closes, GTM loads
4. Test "Reject" button - banner closes, NO GTM loads
5. Check localStorage in DevTools (Application tab)
6. Verify links go to privacy/cookie pages
7. Test on mobile - banner should be mobile-friendly

### Verify GTM is Working
1. Accept cookies
2. Open Google Tag Manager in a new tab
3. Go to: https://tagmanager.google.com/
4. Select your container ID: GTM-PDQQ8BZ4
5. Check the "Summary" tab for events being tracked

---

## Browser Support
- Chrome/Edge: ✓
- Firefox: ✓
- Safari: ✓
- Mobile browsers: ✓
- IE11: Partial (no CSS variables, but functional)

---

## Important Notes

⚠️ **After Deployment:**
1. Test your site on production
2. Verify GTM events are being tracked in Google Analytics
3. Check Analytics dashboard shows data coming in
4. Keep privacy policies updated with your actual practices
5. Consider adding a privacy contact email

⚠️ **GDPR Note:**
If you have users from the EU, you MUST:
- Show consent banner to ALL EU users
- Have privacy policy linked
- Respect their choice to opt-out

⚠️ **Next.js Specifics:**
- Components are "use client" so they work in App Router
- Google Analytics script uses `next/script` for optimal loading
- localStorage is client-side only (hydration safe)

---

## Files Created/Modified

**Created:**
- `src/components/CookieConsent/CookieConsent.js`
- `src/components/CookieConsent/CookieConsent.module.css`
- `src/components/GoogleAnalytics.js`
- `src/app/privacy-policy/page.js`
- `src/app/cookies-policy/page.js`

**Modified:**
- `src/app/layout.js`

---

## Support & Updates

If you need to:
- Change the consent mechanism
- Update tracking IDs
- Modify policies
- Test analytics data

Just update the relevant files above. The system is modular and easy to customize.

**Last Updated:** February 1, 2026
