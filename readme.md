# Infinite Scroll Implementation

### Description

### Resources

1. loader svg - [loading.io](https://loading.io/)

### bits

1. Adding the svg using the img tag

<img src="/assets/loader.svg" alt="loader">

2. Font 

@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');

3. passing hidden directly to html elements
    <div class="loader" id="loader" hidden>

```
/* Loader */
.loader{
  position: fixed; /*Make it fixed even if user scrolls*/
  /* To cover the entire screen */
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.8);
}

.loader img{
  position: fixed;
  top: 50%;
  left: 50%;
  /* This will force center it regardless of the size(starting point of width) */
  transform: translate(-50%,-50%);
}
```