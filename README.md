# Britecharts

> Britecharts is a client-side **reusable Charting Library** based on [D3.js v7][1] that offers easy and intuitive use of charts and components that can be composed together to create amazing visualizations.

[![Build Status](https://travis-ci.org/eventbrite/britecharts.svg?branch=master)](https://travis-ci.org/eventbrite/britecharts)
[![npm version](https://badge.fury.io/js/britecharts.svg)](https://badge.fury.io/js/britecharts)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/eventbrite/britecharts/blob/master/.github/CONTRIBUTING.md)
[![Twitter Follow](https://img.shields.io/twitter/follow/britecharts.svg?style=social&label=Follow)](https://twitter.com/Britecharts/followers)

| [![Line Chart][linechartimg]][linechartdemo] | [![Stacked Area Chart][stackedareachartlargeimg]][stackedareachartdemo] | [![Row Chart][rowchartimg]][rowchartdemo] |
| ------------------------------------------------ | --------------------------------------------------------------------------- | ------------------------- |

Britecharts [components][32] have been written in ES2016 with a Test Driven methodology, so they are **fully tested**, and we are committed to keeping them that way.

## Key Features

-   Reusability
-   Composability
-   Great design

## Usage

The typical use of Britecharts involves creating a chart using its simple API, then rendering it on a container which has previously had data applied to it. The code will look like this:

    lineChart
        .width(500)
        .height(300);

    lineContainer.datum(dataset).call(lineChart);

## API

All the components expose some **common API methods** like width, height, and margin. Additionally, each chart or component can expose specific methods you can find in the documentation:

-   [API][25], [Demo][linechartdemo] Line Chart
-   [API][30], [Demo][stackedareachartdemo] Stacked Area Chart
-   [Demo][rowchartdemo] Row Chart
-   [API][27], [Demo][linechartdemo] Tooltip
-   [API][26], [Demo][rowchartdemo] Mini Tooltip

## Installation

Britecharts components are distributed in **UMD modules**, each one exposing a D3.js component written with the [Reusable API pattern][3]. To use any of the Britecharts modules, you will need to require the chart in your JS file using AMD/CommonJS modules or adding a script tag with the `src` pointing to the file. You would also need to load the [d3-selection][37] submodule to select the chart container.

```
   npm install @cfpb/cfpb-britecharts d3
```

You can also load Britecharts from our [CDN][cdnhome] as we do in this [demo][cdndemo] page or play around in our [JSBin][jsbinsandbox] and [CodePen][codependemos] demo projects.

They also provide some minimal CSS styling, that can be loaded independently or as a bundle. Check our [Styling Britecharts tutorial][stylingbritecharts] to see more options.

## See Also

-   [Documentation Homepage][31]
-   [Getting Started Guide][gettingstarted]
-   [Tutorials][tutorialsindex]
-   [How To Guides][howtoindex]
-   [About Britecharts][topicsindex]
-   [Contributing Guide][35]
-   [Github Repo][33]
-   [Bar Chart Tutorial][screencast][Video]
-   [Release Notes][13]

## Roadmap

This project is in active development. You can check our [plans for the next release][release3project] to see what's coming, and vote for your favorite [proposals][proposals] on the issues page.

To give your feedback, you can open a new issue. You can also find us in the [D3.js slack group][d3slack], in the **#britecharts** channel. If you want to help, you can check the [contributing][35] guide.

If you work with Angular, check out [ngx-britecharts][angularwrapper] and their [demos][angularwrapperdemos]. We are also preparing a wrapper for React, and we will be talking about it on our [twitter][twitter].

## Acknowledgments

This library is a fork of [Eventbrite Britecharts](https://github.com/eventbrite/britecharts). [Sun Dai][sunsdribble] designed the charts, and that styling is still the basis of this library. Two books inspired the original code, [Developing a D3.js Edge][19] and [Mastering D3.js][20].

## License

Copyright 2019 Eventbrite

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

[https://www.apache.org/licenses/LICENSE-2.0][14]

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

Read more in the [license document][15]

[1]: https://d3js.org/
[2]: https://webpack.github.io/
[3]: https://bost.ocks.org/mike/chart/
[12]: https://nodejs.org/en/download/
[13]: https://github.com/eventbrite/britecharts/releases
[14]: https://www.apache.org/licenses/LICENSE-2.0
[15]: https://github.com/cfpb/cfpb-britecharts/blob/main/LICENSE.md
[16]: https://github.com/eventbrite/britecharts/issues
[17]: https://github.com/babel/babel
[19]: https://bleedingedgepress.com/our-books/developing-a-d3-js-edge/
[20]: https://www.packtpub.com/web-development/mastering-d3js
[21]: https://cfpb.github.io/cfpb-britecharts/module-Donut.html
[25]: https://cfpb.github.io/cfpb-britecharts/module-Line.html
[26]: https://cfpb.github.io/cfpb-britecharts/module-Mini-tooltip.html
[27]: https://cfpb.github.io/cfpb-britecharts/module-Tooltip.html
[30]: https://cfpb.github.io/cfpb-britecharts/module-Stacked-area.html
[31]: https://cfpb.github.io/cfpb-britecharts/
[32]: https://cfpb.github.io/cfpb-britecharts/demos/kitchen-sink.html
[33]: https://github.com/eventbrite/britecharts
[gettingstarted]: https://cfpb.github.io/cfpb-britecharts/getting-started.html
[35]: https://github.com/eventbrite/britecharts/blob/master/.github/CONTRIBUTING.md
[36]: https://cfpb.github.io/cfpb-britecharts/img/logo-stripes-small.png
[37]: https://github.com/d3/d3-selection
[cdndemo]: https://cfpb.github.io/cfpb-britecharts/demos/kitchen-sink.html
[cdnhome]: https://cdn.jsdelivr.net/npm/britecharts/dist/
[jsbinsandbox]: https://jsbin.com/wativun/3/edit?html,js,output
[codepensandbox]: https://codepen.io/Golodhros/pen/PprGeP?editors=1010
[codependemos]: https://codepen.io/Britecharts/pens/forked/
[screencast]: https://scrimba.com/casts/cZWm2tb
[angularwrapper]: https://github.com/colapdev/ngx-britecharts
[angularwrapperdemos]: https://colapdev.github.io/ngx-britecharts/
[twitter]: https://twitter.com/britecharts
[sunsdribble]: https://dribbble.com/sundai
[d3slack]: https://d3js.slack.com/
[proposals]: https://github.com/eventbrite/britecharts/issues?q=is%3Aissue+is%3Aopen+label%3Aproposal
[release3project]: https://github.com/eventbrite/britecharts/projects/2
[linechartdemo]: https://cfpb.github.io/cfpb-britecharts/demos/line.html "Check the Demo"
[rowchartdemo]: https://cfpb.github.io/cfpb-britecharts/demos/row.html "Check the Demo"
[stackedareachartdemo]: https://cfpb.github.io/cfpb-britecharts/demos/stacked-area.html "Check the Demo"
[linechartimg]: src/doc/images/thumbnails/line-chart.png
[stackedareachartlargeimg]: src/doc/images/thumbnails/stacked-area-chart-large.png
[rowchartimg]: src/doc/images/thumbnails/row-chart.png
[tutorialsindex]: https://cfpb.github.io/cfpb-britecharts/tutorials-index.html
[howtoindex]: https://cfpb.github.io/cfpb-britecharts/how-to-index.html
[topicsindex]: https://cfpb.github.io/cfpb-britecharts/topics-index.html
[stylingbritecharts]: https://cfpb.github.io/cfpb-britecharts/styling-charts.html
