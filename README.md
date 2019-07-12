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
      description: "Sample description"
    },
    {
      image: "https://image.url.com",
      header: "Sample header",
      description: "Sample description"
    },
    {
      image: "https://image.url.com",
      header: "Sample header",
      description: "Sample description"
    },
    {
      image: "https://image.url.com",
      header: "Sample header",
      description: "Sample description"
    }
  ]

  const someComponent = props => {
    return (
      <div >
        <KmkCarousel items={items}>
      </div>
    )
  }

```

## Notes

### More prop types to come with github linking and demo site
