UI Glossary Audit — 2025-09-15

Summary
- This document captures a review of `index.html` as a shared UI vocabulary and demo.
- Overall structure and naming are strong. A few taxonomy misplacements, missing staples, and accessibility upgrades are recommended.

Corrections and Clarifications
- Taxonomy placement
  - Accordion: Not an overlay. Move to “Disclosure” or “Content toggles” section.
  - Stepper: Better under “Progress & Navigation” (wizard/steps), not “Overlays”.
  - Date Picker: Consider “Inputs” (Date/Time/Range Picker) rather than “Overlays”.
  - Popover: Belongs with “Overlays” (or “Overlays & Floating UI”), not “Feedback”.
  - Toast: It is Feedback; currently implemented but not shown as a card in the Feedback section.
  - Navbar/Sidebar: Mentioned in pills; add explicit cards/examples in “Navigation”. Drawer is shown but not linked from Navigation.

- Naming consistency
  - Slider naming collision: “Slider” is used for both range input and content carousel. Prefer “Range Slider” (input) and “Carousel” (content slider) to avoid ambiguity.
  - Chip vs Tag vs Badge: Clarify distinctions.
    - Badge: status/lozenge, not removable, lightweight info.
    - Chip/Tag: selectable, optionally removable (with remove affordance).
  - ComboBox: Keep synonyms “autocomplete/typeahead”. Note that a “Select” is distinct (native) vs. “Listbox/Menu” (custom dropdown control).
  - Drawer vs Sidebar vs Sheet: Drawer/Sheet are modal slide-overs; Sidebar is persistent navigation.
  - Table vs Data Grid: Current example is a basic table; call out that “Data Grid” usually implies sorting, paging, and virtualization.

Accessibility and Semantics
- Tabs
  - Add keyboard support: Left/Right to move focus among tabs; Home/End to jump; manage `tabindex` for the active tab.
  - Ensure `aria-controls`/`aria-labelledby` pairs are present (already good), and update focus when switching.
- Tooltip
  - Provide focus-trigger and `aria-describedby` for the target control. Avoid hover-only; support keyboard.
- Popover
  - Toggle button should reflect `aria-expanded` and `aria-controls` of the popover content. Use dismiss on Escape; manage focus on open/close.
  - Prefer role="dialog" with `aria-modal="false"` (present) plus labelledby/labelledby association.
- ComboBox
  - Use the ARIA 1.2 combobox pattern: input role="combobox" with `aria-autocomplete`, `aria-expanded`, and `aria-controls`; listbox with role="listbox" and options; highlight with `aria-activedescendant` while arrowing.
- Progress bar
  - Use `<progress>` or `role="progressbar"` plus `aria-valuemin`, `aria-valuemax`, `aria-valuenow`.
- Spinner
  - Prefer `role="status"` with `aria-live="polite"` and visually hidden “Loading…” text; mark decorative spinners `aria-hidden="true"`.
- Alerts and Toasts
  - Add `role="alert"` or `role="status"` depending on urgency. Toast should be in a live region and dismissible.
- Drawer and Modal
  - Drawer: Add focus management and Esc to close; restore focus to trigger.
  - Modal: Existing minimal focus trap looks good; also restore focus to the opening control; prevent background scroll when open.
- Radio Group
  - Consider using `<fieldset><legend>` for native grouping and labelling in addition to `role="radiogroup"`.
- Carousel
  - Add labelling, announce slide changes (e.g., `aria-live`), expose total/position, and keyboard support.

Missing or Useful Additions
- Inputs
  - Number Input, Password Input (with show/hide), Search Field, File Upload/Dropzone, Segmented Control/Segmented Buttons, Color Picker, Rating, OTP/Pin Input, Date Range Picker.
- Navigation
  - Navbar (top app bar), Sidebar (persistent), Menu/Menu Button (dropdown menu), Context Menu (right-click/long-press), Command Palette.
- Data Display
  - Avatar, Description List (Key/Value), Empty State, Statistic/KPI, Tag Cloud, Inline Code/Code Block sample.
- Feedback
  - Snackbar/Toast card, Inline Validation (field error), Confirmation/Alert Dialog variants, Banner.
- Overlays & Floating
  - Contextual Menu (menu surface), Hovercard (rich tooltip), Hover preview.

Copy/Label Nits
- Legend claims “a11y-friendly”; either qualify as “a11y-considerate demos” or implement the upgrades above to match the claim.
- Add explicit cards for components mentioned in section pills so users can click/scan consistently (e.g., Navbar, Sidebar/Drawer, Toast in Feedback).

Proposed Next Steps
1) Restructure sections per taxonomy corrections above.
2) Add missing component cards (at least: Navbar, Sidebar, Menu Button, File Upload, Avatar, Badge, Toast).
3) Implement a11y upgrades for Tabs, Tooltip, Popover, ComboBox, Progress, Spinner, Drawer, Carousel.
4) Add a short glossary table mapping canonical names to synonyms (with “avoid” notes for ambiguous terms).
5) Add per-component “When to use” one-liners for clarity.

Notes
- Keep the glossary minimal but correct; avoid overbuilding. Each demo should be simple, semantic, and accessible-first.

Changelog
- 2025-09-15: Raised `drawer` z-index to 1000 so it stacks above the sticky navbar.
- 2025-09-15: Styled `#toast` to use the same gradient and text color as `.btn.primary` for visual consistency.
- 2025-09-15: Added responsive mobile navigation with a hamburger toggle, ARIA `aria-expanded` and `aria-controls`, outside-click/Escape to close, and auto-close on link click.
- 2025-09-15: Animated hamburger icon morphs to an “X” using three bars and CSS transforms tied to `aria-expanded`.
- 2025-09-15: Added fade/slide animation for mobile nav dropdown; hidden via visibility/opacity/pointer-events and transitions for a smooth open/close.
- 2025-09-15: Integrated GA4 (gtag.js) with measurement id `G-3KWQP4SWGD` in the document head.
- 2025-09-15: Added GA4 event tracking helper and wired events: tabs, popover, modal open/close/confirm, drawer open/close, toast show, nav toggle and link clicks, carousel prev/next with indices, combobox selection, checkbox/radio/switch/range/select/text inputs, date/time changes, accordion toggle, breadcrumb clicks, pagination clicks, and keyboard shortcuts (labels toggle, theme cycle).
- 2025-09-15: GA4 debug mode: append `?debug=1` to the URL to log all `track()` calls to the console.
- 2025-09-15: Added “Suggest a component” link to GitHub issues with prefilled template; tracks `suggest_click` in GA4.
- 2025-09-15: Added Open Graph/Twitter image `og-image.svg` and wired meta tags (`og:image`, `twitter:image`, `summary_large_image`).
 - 2025-09-15: Exported `og-image.png` from the local SVG and set it as primary OG/Twitter image (kept SVG as backup).
 - 2025-09-15: Added footer version stamp (v0.1) and auto-filled “Last updated” date.
 - 2025-09-15: Added anchor copy buttons on section titles; copies deep link and tracks `anchor_copy`.
 - 2025-09-15: Reintroduced light mode as a navbar switch; persists to localStorage and tracks `theme_toggle`.

GA4 custom definitions (recommended mappings)
Why: Custom event parameters don’t automatically appear in standard GA4 reports. Register them as Custom dimensions/metrics in Admin to analyze and build comparisons/segments. Keep under GA4 limits (typically ~50 event-scoped dimensions and ~50 custom metrics per property). Prefer low-cardinality fields.

Setup steps
1) GA4 Admin → Property → Custom definitions → Create custom dimension/metric.
2) Scope: Event. Name: As below. Event parameter: EXACT param key (case-sensitive).
3) For numeric values (e.g., slider), use Custom metric (Unit: Standard; Decimal or Integer).
4) Mark important events as conversions in Admin → Conversions (e.g., `modal_confirm`).

Core dimensions (event-scoped)
- Tab Label → param: `tab_label`
- Popover Open → param: `open` (from `popover_toggle`)
- Modal Close Reason → param: `reason` (from `modal_close`)
- Nav Expanded → param: `expanded` (from `nav_toggle`)
- Nav Close Reason → param: `reason` (from `nav_toggle` outside/Escape closes)
- Nav Link Text → param: `link_text` (from `nav_click`)
- Combobox Value (optional; may be high-cardinality) → param: `value` (from `combobox_select`)
- Checkbox Checked → param: `checked` (from `checkbox_change`)
- Radio Value → param: `value` (from `radio_change`)
- Switch Checked → param: `checked` (from `switch_change`)
- Select Value → param: `value` (from `select_change`)
- Date Value → param: `value` (from `date_change`)
- Time Value → param: `value` (from `time_change`)
- Accordion Section → param: `section` (from `accordion_toggle`)
- Accordion Open → param: `open` (from `accordion_toggle`)
- Breadcrumb Label → param: `label` (from `breadcrumb_click`)
- Pagination Action → param: `action` (from `pagination_click`)
- Labels Visible (keyboard) → param: `visible` (from `kbd_labels_toggle`)
- Theme Accent (keyboard) → param: `accent` (from `kbd_theme_cycle`) — low cardinality

Core metrics (event-scoped)
- Slider Value → param: `value` (from `slider_change`) — Custom metric (Integer)
- Carousel Slide Index → param: `slide_index` (from `carousel_prev`/`carousel_next`) — Custom metric (Integer)

Optional/high-cardinality (use sparingly)
- Nav Link Href → param: `link_href` (from `nav_click`) — may explode cardinality; prefer `link_text`.
- Text Field/Area Id → param: `id` (from `text_input`/`text_area_input`) — often too granular.

