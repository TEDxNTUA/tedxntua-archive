# Deployment Checklist for Analytics & Cookie Consent

## Pre-Deployment ✓

### Testing
- [ ] Test on localhost:
  - [ ] Open incognito/private window
  - [ ] Cookie banner appears
  - [ ] "Accept" button works
  - [ ] "Reject" button works
  - [ ] Privacy Policy link works
  - [ ] Cookies Policy link works
  - [ ] Banner doesn't re-appear after accepting
  - [ ] Mobile view looks good (resize window)

### Configuration
- [ ] GTM ID is correct: `GTM-PDQQ8BZ4` ✓
- [ ] Privacy policy page shows relevant info
- [ ] Cookie policy page shows relevant info
- [ ] Banner text is accurate for your use case

### Performance
- [ ] Site loads without GTM blocking (uses afterInteractive strategy)
- [ ] No console errors related to analytics
- [ ] No broken links in banner

---

## Deployment Steps

1. **Push to Repository**
   ```bash
   git add .
   git commit -m "Add Google Analytics with GDPR-compliant cookie consent"
   git push origin main
   ```

2. **Deploy to Production** (Your hosting provider)
   - Vercel: Auto-deploys on push
   - Other providers: Follow your deployment process

3. **Verify Production**
   - [ ] Visit your live site
   - [ ] See cookie banner
   - [ ] Accept and verify no errors
   - [ ] Check Google Tag Manager dashboard for events

---

## Post-Deployment ✓

### Google Tag Manager Setup
1. Go to: https://tagmanager.google.com/
2. Select account: TEDxNTUA (or create if new)
3. Select container: GTM-PDQQ8BZ4
4. Go to "Tags" - should see your tracking tags
5. Go to "Summary" - watch for events coming in

### Google Analytics Setup
1. Go to: https://analytics.google.com/
2. Select your property (TEDxNTUA)
3. Check "Realtime" report
4. Visit your live site and see events appear in real-time

### Monitoring (First 24 Hours)
- [ ] Check Analytics Realtime dashboard shows visitors
- [ ] Check GTM container shows events being fired
- [ ] No error messages in GTM preview mode
- [ ] Users see consent banner properly

### Ongoing
- [ ] Monitor analytics weekly for data quality
- [ ] Check if users are rejecting (look at local data)
- [ ] Keep privacy policies up to date
- [ ] Update cookie banner text if you add new tracking

---

## Troubleshooting

### Scenario: Cookie banner doesn't appear
**Solution:**
- Check browser console for errors
- Clear localStorage and reload
- Check CookieConsent.js is imported in layout.js

### Scenario: GTM not firing events
**Solution:**
- User must click "Accept" first
- Check if user's consent is saved in localStorage
- Verify GTM ID is correct: GTM-PDQQ8BZ4
- Check GTM preview mode in Tag Manager dashboard

### Scenario: Mobile banner looks broken
**Solution:**
- Clear browser cache
- Check CSS is loading: `CookieConsent.module.css`
- Responsive breakpoints are at 640px and 480px

### Scenario: Privacy pages not accessible
**Solution:**
- Verify page files exist:
  - `src/app/privacy-policy/page.js`
  - `src/app/cookies-policy/page.js`
- Check routes: `/privacy-policy` and `/cookies-policy`

---

## Legal Verification Checklist

Before going live, verify you meet these requirements:

### GDPR (EU Users)
- [ ] Consent banner asks BEFORE tracking
- [ ] Privacy policy explains data collection
- [ ] Users can easily reject tracking
- [ ] No cookies set if user rejects
- [ ] Privacy policy is accessible from banner

### CCPA (California Users)
- [ ] Users can "Reject" tracking
- [ ] Privacy policy explains what data is collected
- [ ] Notice is clear and prominent
- [ ] User choice is respected

### General
- [ ] No sensitive data collected (passwords, emails, etc.)
- [ ] Only analytics data tracked
- [ ] Third-party privacy policies linked
- [ ] Banner includes clear call-to-action

---

## Performance Metrics

After deployment, monitor:
- **Analytics Events:** Check GTM sends events properly
- **Page Load Time:** Analytics shouldn't slow down site
- **Consent Rate:** Monitor how many users accept vs reject
- **User Behavior:** Track bounce rate, time on page, etc.

---

## Support Resources

- [Google Tag Manager Documentation](https://support.google.com/tagmanager/)
- [Google Analytics Help](https://support.google.com/analytics/)
- [GDPR Compliance Guide](https://gdpr-info.eu/)
- [CCPA Privacy Policy Requirements](https://oag.ca.gov/privacy/ccpa)

---

## Questions to Ask Yourself

1. **Do you need to inform users about cookies?**
   - Yes, you do. The banner is required by law (GDPR/ePrivacy).

2. **Should you collect user consent?**
   - Yes, before tracking. Your current setup does this.

3. **What if users reject?**
   - No cookies are set, no tracking occurs. Fully respected.

4. **Can you track without consent?**
   - No, not for analytics. Only essential cookies can be set without consent.

---

**Deployment Date:** ___________  
**Verified By:** ___________  
**Notes:** _________________________________________________________

---

*Last Updated: February 1, 2026*
