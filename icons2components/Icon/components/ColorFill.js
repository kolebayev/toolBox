import React from "react";
const SVG = props => {
  switch (props.size) {
   case 'm':
      return (
        <svg fill={`${currentColor}`} width="24" height="24"><path d="M7.62 0l8.94 8.94c.59.59.59 1.54 0 2.12l-5.5 5.5c-.29.29-.68.44-1.06.44s-.77-.15-1.06-.44l-5.5-5.5a1.49 1.49 0 010-2.12l5.15-5.15-2.38-2.38L7.62 0zM10 5.21L5.21 10h9.58L10 5.21z"/><path d="M17 15c0-1.33 2-3.5 2-3.5s2 2.17 2 3.5c0 1.1-.9 2-2 2s-2-.9-2-2zM24 20H0v4h24v-4z"/></svg>
      );
  case 's':
      return (
        <svg fill={`${currentColor}`} width="16" height="16"><path d="M11.429 11.606c0-.923 1.285-2.418 1.285-2.418S14 10.692 14 11.606c0 .766-.574 1.385-1.286 1.385-.71 0-1.285-.619-1.285-1.385z"/><path d="M5.353 1l5.828 6.268c.334.36.334.95 0 1.31l-3.857 4.154a.846.846 0 01-.608.268.822.822 0 01-.609-.277L2.251 8.57a.97.97 0 010-1.301l3.556-3.822-1.362-1.468L5.353 1zm1.363 3.425l-2.82 3.037h5.64l-2.82-3.037z"/><path d="M16 14H0v2h16v-2z"/></svg>
      );
  }
};
export default SVG;
