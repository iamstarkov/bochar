## Bauchara
### 30-second slideshows for hackers with blackjack and hookers. In fact, forget the slideshows!

--

## What is Bauchara?

Bauchara is a [Cleaver](http://jdan.github.io/cleaver/) wrapped in [Shower](https://github.com/shower/shower) [Ribbon](http://shwr.me/shower/themes/ribbon/)

--

## What is Bauchara?

So let's talk about *Cleaver*.

--

## What is Cleaver?

Cleaver turns the following:

    title: My Slideshow
    output: slideshow.html
    --
    ## Hello, world!
    ### This is my slideshow

--

## What is Cleaver?

**Into a slideshow like this slideshow**.

Cleaver uses a simple [Markdown](http://daringfireball.net/projects/markdown/)
format.

* Simply write your slides in Markdown
* ... and separate them with `--`

--

## What is Cleaver?

Cleaver comes with a stylesheet that looks good by default, but that you
can extend at your heart's desire.

--

## Return to Bauchara

--

## Getting Bauchara

Get Bauchara from NPM

`npm install -g bauchara`

--

## Generation with bauchara

And run it against your shiny new presentation

`bauchara path/to/presentation.md`

--

## Continuous generation with bauchara

If you want watching your md-file and regenerate presentation, just add watch command:

`bauchara watch path/to/presentation.md`

Next we'll talk about setting up a quick presentation.

--

## Metadata

Each presentation contains metadata, for example:

    title: Shower Ribbon + Cleaver = Bauchara
    author:
      name: "Vladimir Starkov"
      twitter: "@matmuchrapna"
      url: "http://vstarkov.com"
    output: index.html

Let's break this chunk down on the next slide.

--

## Metadata Fields

* **title**: The title of your presentation
* **author**: Some fields to populate an optional author slide at the end
* **style**: An optional external stylesheet to load
* **output**: Where to save your file (*default: FILENAME-cleaver.html*)

--

## Metadata Fields
* **controls**: Option to render navigation buttons (*default: true*)
* **agenda**: Option whether or not to insert an agenda slide (similar to a table of contents) after the title (*default: false*)
* **encoding**: A specified content encoding (*default: utf-8*)

--

## Metadata Fields (Advanced)
* **template**: Location of the template used to render the slides (default:
 *default.mustache*)
* **layout**: Location of the layout template used to render everything (default:
 *layout.mustache*)

--

## Other Slides

Slides are separated by `--` and are written in markdown.

Use `h2` to define slide's title (denoted **##**)

--

## Author Slide

If your metadata contains author information (name, url, twitter), an author
slide will be inserted at the end of your presentation.

--

## That's all, folks!

Seriously, that's it. Bauchara is perfect for quick slideshows that you can
create using a comfortable format with Shower ribbon template.
No extra software or text boxes required.

Check us out [on GitHub](http://github.com/matmuchrapna/bauchara).
