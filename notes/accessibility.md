# Accessibility: A11y

## Goal

- All people should be able to use your site.
- Although this is intended for people with permanent disability, accessibility creates better usability for all people in different conditions - e.g. shaky train or bright outdoor light
- Imagine Screen Readers, that all content must be keyboard navigable, and all audio has transcription

## Some standards

- [WebAIM Checklist](https://webaim.org/standards/wcag/checklist) - a condensed version of WCAG that is intended to be more accessible itself
- [Official WCAG 2.1 specification](https://www.w3.org/TR/WCAG21/) Comprehensive list of requirements for accessibility. Often required for gov't contracts, very verbose and some parts are outdates
- POUR
  - *P*erceive content.
  - *O*perable - can users use it and the content
  - *U*nderstandable - clear, consistent interface
  - *R*obust - consistency and

## Focus

  ``Control on screen that receives inputs from keyboard and clipboard``

 - WebAim Checklist 2.1.1: all content accessible with a keyboard
 - Tab move focus forward, shift+tab to go back, and arrow keys to navigate within
- Must have logical Tab order
- Implicitly focusable links, buttons, drop-downs: we should only focus intertable things
- Working wiht "native elements" helps get implicit focus
  e.g. ``<button>``
- With CSS, DOM elements can appear in a different order, but tabbing follows DOM
- Section 1.3.2: Reading and code order should be logical
- For things that are off screen or manually created, use "tabindex"
   ``tabindex="-1"`` will not be focusable, but can be focused with JS
   ``tabindex="0"`` in natural tab order, plus focusable with JS, focus method
   - greater than 0 will jump tab order, but not considered good practice

### In single-page app
  - This is when you want to pull focus to header - "Managing Focus"
  - keep user interactive context in synch with visual site
  - Lets user know that page content has changed.
  - Call focus method of the header of section
