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

### Aria Labels
- ``aria-label`` specifies a string to label the element. Will override a label element or text on a button
- ``aria-labelledby`` specifies the id of the element that labels it, e.g. a span
  - can be used on any element, not just "labellable" (?)
  - can take multiple elements
  - labeled-by overrides label

### Semantic Relationships
- ``aria-labeledby`` is an example of a relationship attribute
- Examples:
  - ``aria-owns``, tells that element should be treated as a child, e.g. menu that should be treated as submenu
  - ``aria-activedescendant`` can be used to designated teh currently selected list item in the parent
  - ``aria-describedby`` gives id of element that describes this element, e.g. parameters on a password input
  - ``aria-posinset`` and ``aria-setsize`` can be used to show position and set size when not rendering full setrelat

### Hidden content
- ``aria-hidden="true"``, e.g. things that should not be shown to reader
- ``hidden`` attribute does not  


### Aria-live
- Exist to alert reader to content that will update dynamically and should communicate updates immediately
- "live region" area that is marked lived
- ``aria-live="polite"`` alerts the user when they are finished with what they are doing
  - e.g. chat program that announces responses once in-progress info is finished
- ``aria-live="assertive"`` interrupts, e.g. if server error is preventing saving
- should probably be in initial page load
- different screen readers treat differently

### Aria-atomic and aria-relevant
- ``aria-atomic="false"`` will read a whole region with a change to a  part of it
- ``aria-relevant`` specifies what should be included for non-atomic regions
- ``aria-busy`` can be used to temporarily ignore a region, i.e. when it is loading, then be set to false once it is loaded

## Styling for accessibility

### The focus ring
- This is implemented by default and a Webm requirement, but sometimes style of page can make the default not visible or awkward
- ```:focus{}``` pseudoclass allows you to style
- ```outline: 0``` will remove the focus ring and just doing this is failing to provide a way to focus, but you can also provide an alternative
- adding ``:focus`` to your ``:hover`` styling block is an easy way to implement
- The example here also adds a `box-shadow: 0 0 8px, 3px` as a failsafe to make sure that this is clear

### Styling with aria elements

Imagine you have a toggle, that gets a pressed class when toggled on:
```html
<div class="toggle pressed" role="button" aria-labelledby="muteLbl" aria-pressed="true">
```
Instead of styling it with ```.toggle.pressed{}``` use:
```css
   .toggle[aria-pressed="true"]{}
```
to get visual confirmation of the aria state, one less thing to check

### Responsive Design for Accessibility

- What happens when you zoom in for very large text: usually goes to mobile viewed
- WebAIM checklist: page should be readable when font size is doubled
- make sure you always use a meta viewport tag:
```html
<meta name="viewport content=" width="device-width, initial-scale=1">
```
- don't set "user-scalable: no" in your width, prevents pinch zooming
- Use relative units so that text can enlarge, e.g. em and rem
- Use appropriately sized and spaced touch targets: 48dp
  - you can add padding around icons to make this work


### Color and Contrast

- Contrast ratio: measurement of contrast between foreground and background (I have no idea how this is being calculated, but black-on-white was something like 16:1)
- WebAIM recommends minimum contrast of 4.5:1, 3:1 for >= 18pt font, or >= 14pt bold --> This is based on average 80 yo user
- For users with visual impairments, prefer 7.1
- Accessibility properties in dev tools can show you the contrast ratio

- WebAIM 1.4.1 Color alone should not be used to convey information
e.g. Just using red color change to show invalid form inputs
