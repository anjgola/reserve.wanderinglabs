<div className="ui fixed inverted menu">
  <div className="ui container">
    <a href="#" className="header item">
      Project Name
    </a>
    <a href="#" className="item">Home</a>
    <div className="ui simple dropdown item">
      Dropdown <i className="dropdown icon"></i>
      <div className="menu">
        <a className="item" href="#">Link Item</a>
        <a className="item" href="#">Link Item</a>
        <div className="divider"></div>
        <div className="header">Header Item</div>
        <div className="item">
          <i className="dropdown icon"></i>
          Sub Menu
          <div className="menu">
            <a className="item" href="#">Link Item</a>
            <a className="item" href="#">Link Item</a>
          </div>
        </div>
        <a className="item" href="#">Link Item</a>
      </div>
    </div>
  </div>
</div>





// Semantic UI has these classes, however they're only applicable to
// grids, containers, rows and columns.
// plus, there isn't any `mobile hidden`, `X hidden` class.
// this snippet is using the same class names and same approach
// plus a bit more but to all elements.
//
// see https://github.com/Semantic-Org/Semantic-UI/issues/1114

/* Mobile */
@media only screen and (max-width: (@tabletBreakpoint - 1)) {
  [class*="mobile hidden"],
  [class*="tablet only"]:not(.mobile),
  [class*="computer only"]:not(.mobile),
  [class*="large screen only"]:not(.mobile),
  [class*="widescreen only"]:not(.mobile),
  [class*="or lower hidden"] {
    display: none !important;
  }
}

/* Tablet / iPad Portrait */
@media only screen and (min-width: @tabletBreakpoint) and (max-width: (@computerBreakpoint - 1)) {
  [class*="mobile only"]:not(.tablet),
  [class*="tablet hidden"],
  [class*="computer only"]:not(.tablet),
  [class*="large screen only"]:not(.tablet),
  [class*="widescreen only"]:not(.tablet),
  [class*="or lower hidden"]:not(.mobile) {
    display: none !important;
  }
}

/* Computer / Desktop / iPad Landscape */
@media only screen and (min-width: @computerBreakpoint) and (max-width: (@largeMonitorBreakpoint - 1)) {
  [class*="mobile only"]:not(.computer),
  [class*="tablet only"]:not(.computer),
  [class*="computer hidden"],
  [class*="large screen only"]:not(.computer),
  [class*="widescreen only"]:not(.computer),
  [class*="or lower hidden"]:not(.tablet):not(.mobile) {
    display: none !important;
  }
}

/* Large Monitor */
@media only screen and (min-width: @largeMonitorBreakpoint) and (max-width: (@widescreenMonitorBreakpoint - 1)) {
  [class*="mobile only"]:not([class*="large screen"]),
  [class*="tablet only"]:not([class*="large screen"]),
  [class*="computer only"]:not([class*="large screen"]),
  [class*="large screen hidden"],
  [class*="widescreen only"]:not([class*="large screen"]),
  [class*="or lower hidden"]:not(.computer):not(.tablet):not(.mobile) {
    display: none !important;
  }
}

/* Widescreen Monitor */
@media only screen and (min-width: @widescreenMonitorBreakpoint) {
  [class*="mobile only"]:not([class*="widescreen"]),
  [class*="tablet only"]:not([class*="widescreen"]),
  [class*="computer only"]:not([class*="widescreen"]),
  [class*="large screen only"]:not([class*="widescreen"]),
  [class*="widescreen hidden"],
  [class*="widescreen or lower hidden"] {
    display: none !important;
  }
}
