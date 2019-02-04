/**
* @fileoverview Styles for gantt-elastic
* @license MIT
* @author Rafal Pospiech <neuronet.io@gmail.com>
* @package GanttElastic
*/
const fontSize = "12px";
const fontFamily = "Arial, sans-serif";
export default {
  "main-view": {
    "background": "#FFFFFF"
  },
  "container": {
    "display": "flex",
    "max-width": "100%",
    "position": "absolute",
    "height": "100%"
  },
  "header": {
    "font-family": fontFamily,
    "margin": "0px auto",
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
  "calendar-wrapper": {
    "user-select": "none"
  },
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
  "task-list-wrapper": {},
  "task-list": { "background": "transparent", "border-color": "#eee" },
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
    "display": "inline-flex",
    "flex-shrink": "0",
    "box-sizing": "border-box",
    "margin": "0 10px"
  },
  "task-list-column-expander-content": {
    "display": "inline-flex",
    "cursor": "pointer",
    "margin": "auto 0px",
    "box-sizing": "border-box",
    "user-select": "none"
  },
  "task-list-column-expander-line": {
    "fill": "transparent",
    "stroke": "#000000",
    "stroke-width": "1",
    "stroke-linecap": "round"
  },
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
    "flex-grow": "1",
    "vertical-align": "middle"
  },
  "task-list-header-resizer-wrapper": {
    "background": "transparent",
    "height": "100%",
    "width": "6px",
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
  "task-list-items": {
    "overflow": "hidden"
  },
  "task-list-item": {
    "border-top": "1px solid #eee",
    "border-right": "1px solid #eee",
    "box-sizing": "border-box",
    "display": "flex",
    "background": "transparent",
  },
  "task-list-item-column": {
    "display": "inline-flex",
    "flex-shrink": "0",
    "border-left": "1px solid #00000050",
    "box-sizing": "border-box",
    "border-color": "#eee",
  },
  "task-list-item-value-wrapper": {
    "overflow": "hidden",
    "display": "flex",
    "width": "100%",
  },
  "task-list-item-value-container": {
    "margin": "auto 0px",
    "overflow": "hidden"
  },
  "task-list-item-value": {
    "display": "block",
    "flex-shrink": "100",
    "font-family": fontFamily,
    "font-size": fontSize,
    "margin": "auto 6px",
    "overflow": "hidden",
    "text-overflow": "ellipsis",
    "line-height": "1.5em",
    "word-break": "keep-all",
    "white-space": "nowrap",
    "color": "#606060",
    "background": "#FFFFFF"
  },
  "grid-lines": {},
  "grid-line-horizontal": {
    "stroke": "#00000010",
    "stroke-width": 1
  },
  "grid-line-vertical": {
    "stroke": "#00000010",
    "stroke-width": 1
  },
  "grid-line-time": {
    "stroke": "#FF000080",
    "stroke-width": 1
  },
  "chart": {
    "user-select": "none",
    "overflow": "hidden"
  },
  "chart-graph": {
    "overflow": "hidden"
  },
  "chart-row-text-wrapper": {},
  "chart-row-text": {
    "background": "#ffffffa0",
    "border-radius": "10px",
    "font-family": fontFamily,
    "font-size": fontSize,
    "font-weight": "normal",
    "color": "#000000a0",
    "height": "100%",
    "display": "inline-block"
  },
  "chart-row-text-content": {
    "padding": "0px 6px"
  },
  "chart-row-text-content--text": {},
  "chart-row-text-content--html": {},
  "chart-row-wrapper": {},
  "chart-row-bar-wrapper": {},
  "chart-row-bar": {},
  "chart-row-bar-polygon": {
    "stroke": "#E74C3C",
    "stroke-width": 1,
    "fill": "#F75C4C",
  },
  "chart-row-project-wrapper": {},
  "chart-row-project": {},
  "chart-row-project-polygon": {},
  "chart-row-milestone-wrapper": {},
  "chart-row-milestone": {},
  "chart-row-milestone-polygon": {},
  "chart-row-task-wrapper": {},
  "chart-row-task": {},
  "chart-row-task-polygon": {},
  "chart-row-progress-bar-wrapper": {},
  "chart-row-progress-bar": {},
  "chart-row-progress-bar-line": {
    "stroke": "#ffffff25",
    "stroke-width": 20
  },
  "chart-row-progress-bar-solid": {
    "fill": "#E74C3C",
    "height": "20%"
  },
  "chart-row-progress-bar-pattern": {
    "fill": "url(#diagonalHatch)",
    "transform": "translateY(0.1) scaleY(0.8)",
  },
  "chart-row-progress-bar-outline": {
    "stroke": "#E74C3C",
    "stroke-width": 1
  },
  "chart-dependency-lines-wrapper": {},
  "chart-dependency-lines-path": {
    "fill": "transparent",
    "stroke": "#FFa00090",
    "stroke-width": 2
  },
  "chart-scroll-container": {},
  "chart-scroll-container--horizontal": {
    "overflow": "auto",
    "max-width": "100%"
  },
  "chart-scroll-container--vertical": {
    "overflow-y": "auto",
    "overflow-x": "hidden",
    "max-height": "100%",
    "float": "right",
  },
  "svg-chart": {
    "overflow": "hidden"
  },
  "svg-container-wrapper": {
    "overflow": "hidden"
  },
  "svg-container": {
    "float": "left",
    "position": "relative",
    "max-width": "100%"
  },
  "slot-header-beforeOptions": {
    "display": "inline-block"
  }
};
