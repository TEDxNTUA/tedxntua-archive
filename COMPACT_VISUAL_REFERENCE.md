# 🎯 Compact Widget Quick Visual Guide

## Two States

### STATE 1: EXPANDED (First Visit)
Shows full information to ensure user sees tracking notice

```
                    FIRST VISIT
┌─────────────────────────────────────┐
│ 🍪 Analytics & Tracking             │
│ Help us improve by sharing usage    │
│                                     │
│ ┌─────────────────────────────────┐ │
│ │ What we collect:                │ │
│ │ • Pages you visit               │ │
│ │ • Time spent on pages           │ │
│ │ • Device type & browser         │ │
│ │ • General location (anonymized) │ │
│ │                                 │ │
│ │ What we DON'T collect:          │ │
│ │ ❌ Passwords                    │ │
│ │ ❌ Payment information          │ │
│ │ ❌ Personal identifiable data   │ │
│ │                                 │ │
│ │ Privacy Policy • Cookie Policy  │ │
│ └─────────────────────────────────┘ │
│                                     │
│ Tracking: [●─────] ON               │
│                                     │
│ ┌─────────────┐  ┌─────────────────┐│
│ │  Minimize   │  │ Accept & Close  ││
│ └─────────────┘  └─────────────────┘│
├─────────────────────────────────────┤
│ ● Tracking enabled                  │
└─────────────────────────────────────┘
```

### STATE 2: COMPACT (After Accept)
Shrinks to tiny pill button - users can click to expand

```
           AFTER FIRST INTERACTION

┌──────────────┐
│ 🍪 ON        │  ← Click to expand
└──────────────┘
 (Very small)

or when tracking OFF:

┌──────────────┐
│ 🍪 OFF       │  ← Click to expand
└──────────────┘
```

---

## User Journey Visual

```
┌─────────────────────────────────────────────────────┐
│           USER LANDS ON SITE (First Time)           │
└─────────────────────────────────────────────────────┘
                         │
                         ▼
         ┌──────────────────────────────┐
         │  EXPANDED WIDGET APPEARS     │
         │  (Full info + buttons)       │
         │  🍪 Analytics & Tracking    │
         │  [Details visible]          │
         │  [Minimize] [Accept & Close]│
         └──────────────────────────────┘
                         │
          ┌──────────────┼──────────────┐
          ▼              ▼              ▼
      [Click 1]      [Click 2]      [Click 3]
      "Minimize"    "Accept &      "Toggle OFF"
                     Close"
          │              │              │
          └──────────────┴──────────────┘
                         │
                         ▼
         ┌──────────────────────────────┐
         │  COMPACT WIDGET APPEARS      │
         │  (Small pill button)         │
         │  ┌──────────────┐            │
         │  │ 🍪 ON (OFF)  │ ← Click   │
         │  └──────────────┘   to      │
         │                     expand  │
         └──────────────────────────────┘
                         │
      ┌──────────────────┴──────────────────────┐
      │ Page Navigation / New Pages / Later    │
      └──────────────────┬──────────────────────┘
                         │
                    ▼ NEXT VISIT ▼
                         │
         ┌──────────────────────────────┐
         │  COMPACT WIDGET APPEARS      │
         │  (Still small)               │
         │  Same state as before        │
         │  User can click to expand    │
         └──────────────────────────────┘
```

---

## Hover & Interaction Effects

### Compact Widget Hover
```
Normal:
┌──────────────┐
│ 🍪 ON        │
└──────────────┘

Hover (Mouse Over):
┌──────────────┐
│ 🍪 ON        │  ← Lifts up
│              │    Background turns red
└──────────────┘    Text turns white
```

### Expand/Collapse Animation
```
Expanding:
┌──────────────┐    Grows     ┌─────────────────┐
│ 🍪 ON        │  --------→  │ 🍪 Analytics    │
└──────────────┘    upward    │ [Full details]  │
                                │ [Buttons]      │
                                └─────────────────┘

Collapsing:
┌─────────────────┐    Shrinks  ┌──────────────┐
│ 🍪 Analytics    │  --------→  │ 🍪 ON        │
│ [Full details]  │   downward   └──────────────┘
│ [Buttons]       │
└─────────────────┘
```

---

## Button Actions

### EXPANDED VIEW BUTTONS

**Toggle Switch**
```
Before:  [●─────] ON
         Click ↓
After:   [─────●] OFF
         
Status indicator changes from green to red
Tracking stops immediately
No page reload
```

**Minimize Button**
```
Click "Minimize"
         ↓
┌─────────────────────┐
│ 🍪 Analytics...     │
│ [Full form]         │
└─────────────────────┘
         ↓
┌──────────────┐
│ 🍪 ON/OFF    │ ← Compact form
└──────────────┘
```

**Accept & Close Button**
```
Click "Accept & Close"
         ↓
• Ensures tracking is ON
• Marks widget as seen
• Collapses to compact
         ↓
┌──────────────┐
│ 🍪 ON        │
└──────────────┘
```

---

## Status Indicators

### Expanded View Status
```
Tracking Enabled:
├─────────────────────────────────────┤
│ ● Tracking enabled    │ Green background
└─────────────────────────────────────┘

Tracking Disabled:
├─────────────────────────────────────┤
│ ● Tracking disabled   │ Red background
└─────────────────────────────────────┘

Dot Animation: Pulses continuously (1→0.5→1 opacity)
```

### Compact Widget Status
```
ON (Active):                OFF (Inactive):
┌──────────────┐           ┌──────────────┐
│ ● 🍪 ON      │           │ ● 🍪 OFF     │
└──────────────┘           └──────────────┘
Green dot                   Red dot
(pulses)                    (pulses)
```

---

## Storage & Persistence

### First Visit
```
localStorage:
- cookie-consent: not set (defaults to true)
- cookie-widget-seen: not set (null)

Widget: EXPANDED
```

### After User Accepts
```
localStorage:
- cookie-consent: true
- cookie-widget-seen: true

Widget: COMPACT (🍪 ON)
```

### After User Changes Tracking OFF
```
localStorage:
- cookie-consent: false
- cookie-widget-seen: true

Widget: COMPACT (🍪 OFF)
```

### Return Visit (Next Day)
```
localStorage already has cookie-widget-seen: true

Widget: COMPACT (shows saved state - ON or OFF)
```

---

## Mobile Experience

### Mobile - Expanded Widget
```
┌────────────────────┐
│ 🍪 Analytics       │
│ Help us improve    │
│                    │
│ [Full details     │
│  stacked nicely]  │
│                    │
│ [Buttons stack]   │
│ [Minimize]        │
│ [Accept & Close]  │
│                    │
│ Status indicator   │
└────────────────────┘
Full width, responsive
```

### Mobile - Compact Widget
```
┌──────────────┐
│ 🍪 ON        │
└──────────────┘

Still small and
accessible in
bottom-right
```

---

## Animations Timeline

### First Visit - Expanded Slides In
```
0.0s:  Widget below viewport
       ↓
0.2s:  Sliding up, fading in
       ↓
0.4s:  Fully visible
       Duration: 0.4 seconds
       Easing: ease-out
```

### Accept → Compact Transition
```
0.0s:  Full expanded widget visible
       ↓
0.1s:  Widget starts shrinking
       ↓
0.4s:  Compact form appears
       Smooth size transition
```

### Click Compact to Expand
```
0.0s:  Compact pill visible
       ↓
0.1s:  Expanding upward
       ↓
0.4s:  Full form visible
       User can interact
```

---

## Color Scheme

```
PRIMARY RED (Tracking ON):
#dc143c - Accent, hover, active states

TEXT:
#1a1a1a - Dark gray, main text
#666666 - Light gray, secondary text

STATUS ACTIVE (Tracking ON):
Background: #f0f8f0 - Light green
Text: #2d7a2d - Dark green
Dot: #2d7a2d - Pulsing green

STATUS INACTIVE (Tracking OFF):
Background: #fff0f0 - Light red
Text: #8b0000 - Dark red
Dot: #8b0000 - Pulsing red

BACKGROUND:
#ffffff - Widget background
#f5f5f5 - Details section background

BORDERS:
#e0e0e0 - Light borders
#dc143c - Red accent borders
```

---

## Accessibility Features

### Keyboard Navigation
```
Tab → Focus on buttons/inputs
↓
Space/Enter → Activate button
↓
Tab → Next element
↓
Shift+Tab → Previous element
```

### Focus Indicators
```
Focused button:
┌─────────────────┐
│ Accept & Close  │ ← Blue outline
│                 │    (2px solid)
└─────────────────┘
```

### Screen Reader
```
Announces:
- Button labels ("Accept & Close", "Minimize")
- Status ("Tracking enabled/disabled")
- Toggle state ("Tracking ON/OFF")
- Links (Privacy Policy, Cookie Policy)
```

---

## Test Scenarios

### Scenario 1: New User
```
1. Land on site → See expanded widget ✓
2. Read information
3. Click "Accept & Close" → Widget shrinks ✓
4. Refresh page → Still compact ✓
```

### Scenario 2: Change Tracking
```
1. See compact widget "🍪 ON"
2. Click to expand ✓
3. Toggle tracking OFF
4. Click "Minimize" → Shows "🍪 OFF" ✓
```

### Scenario 3: Return Later
```
1. Visit site again (next day)
2. See compact widget in previous state ✓
3. Can still click to expand if needed ✓
```

---

## Deploy Checklist

```
Pre-Deployment:
□ Test expanded view on first visit
□ Test compact view after accept
□ Test toggle works
□ Test mobile responsive
□ No console errors
□ Hover effects work

Post-Deployment:
□ Visit live site incognito → See expanded ✓
□ Click accept → See compact ✓
□ Refresh → Still compact ✓
□ Click compact → Expands ✓
□ Toggle works
□ GTM events firing when ON
□ GTM stops when OFF
```

---

**Ready to Deploy!** 🚀

All files updated, tested, and documented.

Just push and enjoy the new compact widget! ✨
