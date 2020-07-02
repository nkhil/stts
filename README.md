<p align="center">

  <img src="https://i.postimg.cc/hGYFxqjL/logo.png" />

</p>

STTS is a quick, completely offline reference for HTTP status codes.

## Screenshot

![Status Code Reference Tool](./featured_image.png)


## Installation

Install `stts` globally to use it in your terminal no matter where you are in your folder structure.

```bash
npm i -g stts
```

## Usage

```bash
stts <statusCode>
# eg: stts 409
```

## Plan text mode

Include a `-t` argument to get the output in plan text. This is useful if you'd want to pipe the output to clipboard.

```bash
stts <statusCode> -t
# eg: stts 301 -t
```

## Status Code Data

All the reference text is from [https://httpstatuses.com/](https://httpstatuses.com/). Thanks to [Runscope](https://www.runscope.com/) for sponsoring it.

## How to

I wrote a quick how-to about how I made `stts`: [https://nikhilvijayan.com/http-status-code-checker](https://nikhilvijayan.com/http-status-code-checker).
