const fontSize = '12px';
const fontFamily = 'Arial, sans-serif';
export default {
  "header": {
    "font-family": fontFamily,
    "margin": "0 auto",
    "background": "#f3f5f747",
    "padding": "10px",
    "overflow": "hidden",
    "clear": "both",
    "display": "flex",
    "justify-content": "space-between"
  },
  "header-title": { "float": "left" },
  "header-options": { "float": "right" },
  "header-title--text": {
    "font-size": "20px",
    "vertical-align": "middle",
    "font-weight": "400",
    "line-height": "35px",
    "padding-left": "22px",
    "letter-spacing": "1px"
  },
  "header-title--html": {
    "font-size": "20px",
    "vertical-align": "middle",
    "font-weight": "400",
    "line-height": "35px",
    "padding-left": "22px",
    "letter-spacing": "1px"
  },
  "header-btn-recenter": {
    "background": "#95A5A6",
    "border": "none",
    "outline": "none",
    "cursor": "pointer",
    "color": "white",
    "border-radius": "3px",
    "margin-right": "27px",
    "font-size": "16px",
    "padding": "8px 12px"
  },
  "header-slider": {},
  "header-slider-wrapper": { "display": "inline-block", "vertical-align": "middle" },
  "header-slider--slider": {},
  "header-slider--process": { "background": "#ccc" },
  "header-task-list-switch--label": {},
  "header-task-list-switch": { "margin": "0px 15px", "vertical-align": "middle" },
  "header-label": {},
  "task-list-header": { "display": "flex", "user-select": "none", "vertical-align": "middle" },
  "task-list-header-column": {
    "border": "1px solid #00000050",
    "border-top": "none",
    "border-right": "none",
    "box-sizing": "border-box",
    "display": "flex",
    "background": "#f3f5f7",
    "border-color": "transparent"
  },
  "task-list-column-expander-wrapper": {
    "stroke": "#909090",
    "stroke-width": "1",
    "fill": "#ffffffa0",
    "display": "inline-flex",
    "flex-shrink": "0",
    "box-sizing": "border-box"
  },
  "task-list-column-expander-content": {
    "display": "inline-flex",
    "cursor": "pointer",
    "margin": "auto 0px",
    "box-sizing": "border-box",
    "user-select": "none"
  },
  "task-list-column-expander-line":
    { "fill": "transparent", "stroke": "#000000", "stroke-width": "1", "stroke-linecap": "round" },
  "task-list-column-expander-border": {
    "fill": "#ffffffa0",
    "stroke": "#000000",
  },
  "task-list-header-label": {
    "overflow": "hidden",
    "text-overflow": "ellipsis",
    "font-family": fontFamily,
    "font-size": fontSize,
    "box-sizing": "border-box",
    "margin": "auto 6px",
    "display": "inline-flex",
    "flex-grow": "1",
    "vertical-align": "middle"
  },
  "task-list-header-resizer-wrapper": {
    "background": "transparent",
    "height": "100%",
    "width": "3px",
    "cursor": "col-resize",
    "display": "inline-flex",
    "vertical-align": "center"
  },
  "task-list-header-resizer": { "margin": "auto 0px" },
  "task-list-header-resizer-dot": {
    "width": "3px",
    "height": "3px",
    "background": "#ddd",
    "border-radius": "100%",
    "margin": "4px 0px",
  },
  "calendar-wrapper": {},
  "calendar": { "width": "100%", "height": "100%", "background": "#f3f5f7", "border-color": "#f3f5f7" },
  "calendar-row": { "fill": "transparent", "stroke": "#dadada", "stroke-width": 0.5 },
  "calendar-row--month": {},
  "calendar-row--day": {},
  "calendar-row--hour": {},
  "calendar-row-rect--month": {},
  "calendar-row-text--month": { "font-family": fontFamily, "font-size": fontSize, "fill": "#606060", "stroke": "none" },
  "calendar-row-rect--day": {},
  "calendar-row-text--day": { "font-family": fontFamily, "font-size": fontSize, "fill": "#606060", "stroke": "none" },
  "calendar-row-rect--hour": {},
  "calendar-row-text--hour": { "font-family": fontFamily, "font-size": fontSize, "fill": "#606060", "stroke": "none" },
}
