# KmkCarousel

Infinite scrolling carousel, currently in alpha

Supposedly to use the same props as Semantic-UI's card component ... kinda

## How to use

```jsx
  import React from "react";
  import KmkCarousel from "kmk-carousel";

  const items = [
    {
      image: "https://image.url.com",
      header: "Sample header",
      description: "Sample description",
      href: "https://your.demo.site",
      github: "https://the.github.link"
    },
    {
      image: "https://image.url.com",
      header: "Sample header",
      description: "Sample description",
      href: "https://your.demo.site",
      github: "https://the.github.link"
    },
    ...
  ]

  const someComponent = props => {
    return (
      <div >
        <KmkCarousel items={items}>
      </div>
    )
  }

```

## Proptypes
```jsx
const propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      data: PropTypes.shape({
        image: PropTypes.string,
        header: PropTypes.string,
        description: PropTypes.string,
        href: PropTypes.string,
        github: PropTypes.string
      })
    })
  )
};
```

## Screenshot
![alt text](https://i.imgur.com/7WB4M8z.png "The background is actually transparent")

## Notes
Automatic color detection on the overlay may be in production
