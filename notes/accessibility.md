# Accessibility: A11y

## Goal

- All people should be able to use your site.
- Although this is intended for people with permanent disability, accessibility creates better usability for all people in different conditions - e.g. shaky train or bright outdoor light
- Imagine Screen Readers, that all content must be keyboard navigable, and all audio has transcription

## Some standards

- [WebAIM Checklist](https://webaim.org/standards/wcag/checklist) - a condensed version of WCAG that is intended to be more accessible itself
- [Official WCAG 2.1 specification](https://www.w3.org/TR/WCAG21/) Comprehensive list of requirements for accessibility. Often required for gov't contracts, very verbose and some parts are outdates
- POUR
  - *P* erceive content.
  - *O* perable - can users use it and the content
  - *U* nderstandable - clear, consistent interface
  - *R* obust - consistency and

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

### Skip links

- Allows users to skip straight through content, past nav
- Make a div that is positioned off the top
- Make an "anchor" (link) with the id of the main content in the url and class "skip-link"
- also give main  a tab index of -1
- [more info](https://developers.google.com/web/updates/2016/03/focus-start-point?hl=en)

### Managing focus in components

- e.g. select elements in forms
- Aria Design Patterns lists elements and what they support
- Roving Focus: sets tab-index to  -1 on all items, and 0 to the focused items
- Make sure tab focus wraps back around, and uses both side and up/down arrow keys

### Off-Screen content

- Seem to be focused by default, even though they are off screen
- E.g. hidden side drawer with hamburger menu
- useful tool: log ```document.activeElement``` in console
- also: accessibility audits in devtools
- one solution for drawer:
  - set to ``display: none`` or ``visiblity: invisible``

### Modals and Keyboard traps

- There are instances where you don't want the user to navigate back to content until they select an option
- this is the trap
- define variables for first and last focusable element
- create a ```trapTabKey``` function that checks if the element is the first tabbable when pressing shift and moves to last, and vice versa if not pressing shift
- add an esc key event that closes the modal using a ``closeModal`` function


## Semantics

- Imagine that accessible websites are like accessing websites from the 90's: organization of the dom reflects the accessible experience: 'accessibility tree'
- Using native HTML elements like "button" gives us text support inherently, so always try to use that:
  - important tags: main, nav, header, footer, button
- Also needs to be labeled: Role, Name, Value
- Use ``<label>`` tags or ``<label for>`` with form elements to make sure all their values are clear.
- Use clear alternate text for images that is descriptive and concise
- Decorative images should include blank alt text: ``alt=""``


## Navigating content

### Headings
- Headings are essential. Much of users experience comes from just looking at headings first, and using this to locate themselves on the page.

  - WebAIM 1.3.2: Order matters
  - 2.4.10 : overall structure designated with headings
  - 1.3.1 semantic tags like h1 are used to designate headings (also ol, ul)
  - 2.4.1 headings are sufficient for skip links
  - 2.4.6 Headings and labels are informative, not duplicate

- Some headings can be placed off screen specifically for screen readers, but should be done sparingly
- Important that heading numbers be used to organize, not for size/appearance

### Links

- Anti-Patterns:
  - span with link styling: always use anchor tag
      - shows up in links list, keyboard
  - something that shows up with a tag but does not link: use a button tag instead
  - image used as link: add alt text
- 2.4.9 Purpose of link should be able to be determined from link text alone
  - e.g. No links that just say "Learn more" - say what about
    also: "Click Here"


### Landmarks

- ``<main>``, ``<header>``, ``<footer>``,

- ``<article>`` - Should be stand-alone, could viewed in a different context

- ``<section>`` Generic divider, larger than article

 - ``<aside>`` - used for groups of nav elements or other content separate from main page



## ARIA

So far: DOM order, focus, keyboard, semantics, labeling, headings, landmarks, links

Purpose: Express semantics that HTML can not express on its own.

Accessible Rich Internet Applications spec

- ARIA only changes appearance in the accessibility tree
- we still have to add focusability, styling, etc.

Example: Making your own radio-button:
  - need ARIA to designate that it is a radio button
  - designate which one is checked
  - use JS to switch this as well

[Documentation](https://www.w3.org/TR/wai-aria-practices-1.1/)

- The Practices Guide:
  - what role the group and members of the group should have
  - what state elements can have i.e. ```aria-checked="true"```
  - what sort of labels the element should have
  - also need to make sure you swap tab index with aria-checked
