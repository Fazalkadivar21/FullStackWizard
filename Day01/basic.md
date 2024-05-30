# README: Basics of HTML

## Introduction
This README provides an overview of basic HTML tags, their attributes, and fundamental HTML concepts like SEO, Core Web Vitals, and the differences between inline and block elements. Each section includes brief explanations and examples to illustrate key points.

## HTML Document Structure

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>basics of html</title>
  </head>
  <body>
    <!-- Content goes here -->
  </body>
</html>
```

### Explanation
- `<!DOCTYPE html>`: Declares the document type and version of HTML.
- `<html lang="en">`: Root element with a language attribute set to English.
- `<head>`: Contains meta-information about the document (e.g., character set, viewport settings, and title).
- `<title>`: Specifies the title of the webpage, displayed in the browser tab.
- `<meta charset="UTF-8">`: Sets the character encoding for the document.
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">`: Ensures the webpage is responsive on different devices.

## Headings

```html
<h1>this is main heading.</h1>
<h2>this is sub heading.</h2>
<h3>this is sub sub heading.</h3>
<h4>this is sub sub sub heading.</h4>
<h5>this is sub sub sub sub heading.</h5>
<h6>this is sub sub sub sub sub heading.</h6>
```

### Explanation
- `<h1>` to `<h6>`: HTML heading tags, with `<h1>` being the highest level (main heading) and `<h6>` the lowest.

## Paragraphs and Line Breaks

```html
<p>this is a paragraph. <br />Lorem ipsum...</p>
```

### Explanation
- `<p>`: Defines a paragraph.
- `<br>`: Inserts a line break within text.

## Links

```html
<a href="http://www.google.com"> this is a link </a><br />
<a href="http://www.music.youtube.com"> this is a second link </a><br />
<a href="http://www.youtube.com"> this is a third link </a><br />
```

### Explanation
- `<a href="URL">`: Creates a hyperlink. The `href` attribute specifies the URL.

## Images

```html
<img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="google logo" width="200" height="100" />
<img src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg" alt="youtube logo" width="200" height="100" />
```

### Explanation
- `<img src="URL" alt="description" width="width" height="height">`: Embeds an image. The `src` attribute specifies the image URL, `alt` provides alternative text, and `width` and `height` set the image dimensions.

## Lists

### Unordered Lists

```html
<ul>
  <li>this is unordered list</li>
  <li>list item 1</li>
  <li>list item 2</li>
  <li>list item 3</li>
  <li>list item 4</li>
</ul>
```

### Ordered Lists

```html
<ol>
  <li>this is ordered list</li>
  <li>ordered list item 1</li>
  <li>ordered list item 2</li>
  <li>ordered list item 3</li>
  <li>ordered list item 4</li>
</ol>
```

### Explanation
- `<ul>`: Creates an unordered list.
- `<ol>`: Creates an ordered list.
- `<li>`: Defines a list item.

## Tables

```html
<table border="1">
  <thead>this is table header</thead>
  <th>this is table heading</th>
  <tr>
    <td>table data 1</td>
    <td>table data 2</td>
    <td>table data 3</td>
    <td>table data 4</td>
  </tr>
  <tr>
    <td colspan="3">this is colspan</td>
    <td rowspan="2">this is row span</td>
  </tr>
  <tr>
    <td>table data 5</td>
    <td>table data 6</td>
    <td>table data 7</td>
  </tr>
  <tfoot>this is table footer</tfoot>
</table>
```

### Explanation
- `<table border="1">`: Creates a table with a border.
- `<thead>`: Defines the table header.
- `<th>`: Defines a header cell in a table.
- `<tr>`: Defines a row in a table.
- `<td>`: Defines a cell in a table.
- `colspan` and `rowspan`: Attributes that allow a cell to span multiple columns or rows.

## Forms

```html
<form method="post" style="border: 1px solid black;">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required /><br />
  <!-- More input elements -->
  <input type="submit" id="submit" name="submit" /><br />
</form>
```

### Explanation
- `<form method="post">`: Creates a form with POST method.
- `<label for="id">`: Labels an input element.
- `<input type="type">`: Defines an input element.
- `type="text"`, `type="email"`, etc.: Specifies the type of input.
- `required`: Specifies that the input field must be filled out before submitting the form.

## Audio

```html
<audio controls>
  <source src="audiofile.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>
```

### Explanation
- `<audio controls>`: Embeds an audio file with built-in controls (play, pause, volume).
  - `controls`: Adds audio controls.
- `<source src="audiofile.mp3" type="audio/mpeg">`: Specifies the audio file and its format.
  - `src`: Path to the audio file.
  - `type`: MIME type of the audio file.

## Video

```html
<video width="320" height="240" controls>
  <source src="videofile.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
```

### Explanation
- `<video width="320" height="240" controls>`: Embeds a video file with specified dimensions and built-in controls.
  - `width` and `height`: Set the size of the video player.
  - `controls`: Adds video controls.
- `<source src="videofile.mp4" type="video/mp4">`: Specifies the video file and its format.
  - `src`: Path to the video file.
  - `type`: MIME type of the video file.

## Media Attributes

### Audio and Video Attributes
- `autoplay`: Starts playing the audio/video as soon as it is loaded.
- `loop`: Plays the audio/video in a loop.
- `muted`: Mutes the audio by default.
- `preload`: Specifies if and how the author thinks the media file should be loaded when the page loads.
  - Values: `none`, `metadata`, `auto`

```html
<video width="320" height="240" controls autoplay loop muted preload="auto">
  <source src="videofile.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
```

### Explanation
- `autoplay`: Automatically starts the video.
- `loop`: Replays the video in a loop.
- `muted`: Mutes the video by default.
- `preload="auto"`: Loads the video when the page loads.

## Semantic Elements

### Common Semantic Elements

```html
<header>
  <h1>Website Header</h1>
</header>

<nav>
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>

<main>
  <article>
    <h2>Article Title</h2>
    <p>This is an article paragraph.</p>
  </article>

  <section>
    <h3>Section Title</h3>
    <p>This is a section paragraph.</p>
  </section>

  <aside>
    <h4>Related Content</h4>
    <p>This is an aside paragraph.</p>
  </aside>
</main>

<footer>
  <p>Website Footer</p>
</footer>
```

### Explanation
- `<header>`: Defines a header for a document or section.
- `<nav>`: Defines a container for navigation links.
- `<main>`: Specifies the main content of the document.
- `<article>`: Represents a self-contained composition in a document, such as an article.
- `<section>`: Defines a section in a document.
- `<aside>`: Contains content indirectly related to the main content (e.g., sidebar).
- `<footer>`: Defines a footer for a document or section.

### Additional Semantic Elements

```html
<figure>
  <img src="image.jpg" alt="Description of image">
  <figcaption>Caption for the image.</figcaption>
</figure>

<mark>Highlighted text</mark>
<time datetime="2023-05-30">May 30, 2023</time>
```

### Explanation
- `<figure>`: Specifies self-contained content, like images, diagrams, or code snippets.
- `<figcaption>`: Provides a caption for a `<figure>` element.
- `<mark>`: Highlights text.
- `<time datetime="2023-05-30">`: Represents a specific time or date.
  - `datetime`: Machine-readable date/time format.

## Classes and IDs

```html
<p class="par">this is a paragraph with class</p>
<p id="para">this is a paragraph with id</p>
<p class="pa" id="p">this is a paragraph with class and id</p>
```

### Explanation
- `class`: Attribute used to define CSS class.
- `id`: Attribute used to define a unique identifier.

## Inline vs. Block Elements

### Inline Elements
- Do not start on a new line.
- Only take up as much width as necessary.
- Examples: `<a>`, `<img>`, `<span>`, `<input>`.

### Block Elements
- Start on a new line.
- Take up the full width available.
- Examples: `<div>`, `<p>`, `<h1>` to `<h6>`, `<ul>`, `<ol>`.

## SEO (Search Engine Optimization)
- **Title Tag**: Use meaningful titles with relevant keywords.
- **Meta Description**: Include a meta description to summarize the page content.
- **Headings**: Use headings to structure content logically.
- **Alt Attributes**: Provide descriptive alt text for images.
- **URL Structure**: Keep URLs simple and descriptive.

## Core Web Vitals
- **Largest Contentful Paint (LCP)**: Measures loading performance.
- **First Input Delay (FID)**: Measures interactivity.
- **Cumulative Layout Shift (CLS)**: Measures visual stability.

### Conclusion
Understanding these basic HTML elements and concepts is essential for creating well-structured, accessible, and SEO-friendly web pages. This guide provides a foundational overview to help you get started with HTML development.