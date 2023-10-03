# Metaverse: a Modern Next 13 Website With Framer Motion & Tailwind CSS

I did this tutorial because I wanted to improve my design to code skills, and learn about animations.


###### Tutorial link:
[Build and Deploy a Modern Next 13 Website With Framer Motion & Tailwind CSS](https://www.youtube.com/watch?v=ugCN_gynFYw)


### Demo:
[metaverse-oxillix.vercel.app](https://metaverse-oxillix.vercel.app/ "https://metaverse-oxillix.vercel.app")


### Technologies used:
Next.js 13, Framer Motion and TailwindCSS


### I learned, among other things:
- Create a styles/index.js file with tailwind class constant strings to have more consistency across multiple pages.
- A technique to create background gradient blurs
- How to use framer motion for stunning animations
- Advanced tailwind arbitrary values (more info in notes)
- It made me realize how much better the DX is when using TypeScript. TS for the win!
- I learned about the existence of Responsively, an open-source multi-viewport browser.
- That I should use arbitrary values more.
- I am okay at design to code, but suck at designing. -> I need to take a design course -> uxcel.com
- When to use self closing divs

## Notes
### rotate
in the following example, the text is rotated 90 degrees, origin-[0, 0] means the top left corner of the element.
```tsx
lg:rotate-[-90deg] lg:origin-[0,0]
```
![](public/paste.png)

### transition example
transition from relative to flex  in 0.7 seconds
```tsx
relative flex transition-[flex] duration-[0.7s] ease-out
```


### Advanced arbitrary values
```html
active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
```
#### flex-[0.5]
- true:
	`lg:flex-[3.5]`: On large (`lg:`) screens, the flex item will take up `3.5` parts (or fractions) of the available space.
false:
	`lg:flex-[0.5]`: On large (`lg:`) screens, the flex item will take up `0.5` parts (or fractions) of the available space.
#### leading-[20px]
leading (line height) of an element, which in the context of text means the space between the lines of text.

### Gradients
1. Create a self closing div
	1.  (optional) set its z-index
```
<div className="gradient-04 z-0" />
```
2. Create a custom css class and write a custom gradient that fits your needs. Examples:
```css
.gradient-03 {
  position: absolute;
  width: 404px;
  height: 800px;
  left: 20%;
  top: 5%;

  background: rgba(149, 66, 232, 0.35);
  filter: blur(175px);
  transform: rotate(-114.2deg);
}

.gradient-04 {
  position: absolute;
  width: 304px;
  height: 100vh;
  left: 30%;
  top: 10%;

  background: rgba(45, 72, 152, 0.75);
  filter: blur(200px);
  transform: rotate(-53.13deg);
}

.gradient-05 {
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.04) 0%,
    rgba(255, 255, 255, 0) 100%
  );
}
```

### Review of the tutorial
This tutorial is for frontend developers who have intermediate to novice experience and are keen to dive into topics like tailwind arbitrary values and framer motion. A word of caution: while the tutor adeptly codes in real-time, there's a tendency to narrate actions rather than delve into the underlying reasoning or mechanics. So, it's imperative to actively engage, question the code, and delve deeper when concepts seem unclear. If approached with this mindset, expect to invest at least three times the tutorial's length in time and research.

I rate this tutorial 2/5, would instead recommend [Code With Antonio](https://www.youtube.com/@codewithantonio) for builds with a more in depth explanation.