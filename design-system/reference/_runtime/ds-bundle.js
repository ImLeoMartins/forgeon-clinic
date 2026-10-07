/* @ds-bundle: {"format":4,"namespace":"ForgeonClinicDesignSystem_5b731b","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"ChatBubble","sourcePath":"components/chat/ChatBubble.jsx"},{"name":"ConversationItem","sourcePath":"components/chat/ConversationItem.jsx"},{"name":"AppointmentCard","sourcePath":"components/clinic/appointment/AppointmentCard.jsx"},{"name":"TimeSlots","sourcePath":"components/clinic/appointment/TimeSlots.jsx"},{"name":"WeekCalendar","sourcePath":"components/clinic/calendar/WeekCalendar.jsx"},{"name":"HandoffAlert","sourcePath":"components/clinic/handoff/HandoffAlert.jsx"},{"name":"KpiCard","sourcePath":"components/clinic/metrics/KpiCard.jsx"},{"name":"PatientTable","sourcePath":"components/clinic/patients/PatientTable.jsx"},{"name":"StatusBadge","sourcePath":"components/clinic/status/StatusBadge.jsx"},{"name":"Avatar","sourcePath":"components/display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Choice","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Input.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Icon","sourcePath":"components/icons/Icon.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Dialog","sourcePath":"components/overlays/Dialog.jsx"},{"name":"Toast","sourcePath":"components/overlays/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/overlays/Tooltip.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"de7c84723bc9","components/actions/IconButton.jsx":"d3ad34a0f0fc","components/brand/Logo.jsx":"fa51af2a05ff","components/brand/logoData.js":"f420c35b6bf4","components/chat/ChatBubble.jsx":"1e66c3200ae1","components/chat/ConversationItem.jsx":"4274a650f8d0","components/clinic/appointment/AppointmentCard.jsx":"7331ebb85fe5","components/clinic/appointment/TimeSlots.jsx":"6aa62a63db64","components/clinic/calendar/WeekCalendar.jsx":"5a9fce1e026e","components/clinic/handoff/HandoffAlert.jsx":"a84ba2a44a4d","components/clinic/metrics/KpiCard.jsx":"c4490ba695b1","components/clinic/patients/PatientTable.jsx":"ca697287d023","components/clinic/status/StatusBadge.jsx":"a7d7299eb8fb","components/display/Avatar.jsx":"d2cbc09fdf38","components/display/Badge.jsx":"b5b1140b8cab","components/display/Card.jsx":"4ab189b40741","components/display/Tag.jsx":"a84b4007570e","components/forms/Checkbox.jsx":"90c8a154f865","components/forms/Input.jsx":"8222637359d7","components/forms/Radio.jsx":"e5295dcde4d8","components/forms/Select.jsx":"764f520fb913","components/forms/Switch.jsx":"ea5a9cf53660","components/forms/Textarea.jsx":"17a04e3349f8","components/icons/Icon.jsx":"dcb4b05529c2","components/icons/iconData.js":"beb5b3d51025","components/navigation/Tabs.jsx":"559729010274","components/overlays/Dialog.jsx":"0737b18d60ba","components/overlays/Toast.jsx":"2f18d4c43d2f","components/overlays/Tooltip.jsx":"6e346f7509d9","components/utils/interactive.js":"e54d2e119fb7","ui_kits/painel/Agenda.jsx":"b5ca97acedd7","ui_kits/painel/Conversations.jsx":"b6b4cf35d7f2","ui_kits/painel/Dashboard.jsx":"d75d14dedf6f","ui_kits/painel/Patients.jsx":"576b8e454f75","ui_kits/painel/Shell.jsx":"b82c7ab3e78a","ui_kits/painel/data.js":"0aa2db957c62","ui_kits/site/Sections.jsx":"d06c183aa986","ui_kits/site/copy.js":"e16fbdfab102"},"inlinedExternals":[],"unexposedExports":[{"name":"badgeTones","sourcePath":"components/display/Badge.jsx"},{"name":"controlStyle","sourcePath":"components/forms/Input.jsx"},{"name":"iconNames","sourcePath":"components/icons/Icon.jsx"},{"name":"iconPaths","sourcePath":"components/icons/iconData.js"},{"name":"initials","sourcePath":"components/display/Avatar.jsx"},{"name":"namePath","sourcePath":"components/brand/logoData.js"},{"name":"nameViewBox","sourcePath":"components/brand/logoData.js"},{"name":"statusLabels","sourcePath":"components/clinic/status/StatusBadge.jsx"},{"name":"symbolPaths","sourcePath":"components/brand/logoData.js"},{"name":"symbolViewBox","sourcePath":"components/brand/logoData.js"},{"name":"transition","sourcePath":"components/utils/interactive.js"},{"name":"useInteractive","sourcePath":"components/utils/interactive.js"}]} */

(() => {

const __ds_ns = (window.ForgeonClinicDesignSystem_5b731b = window.ForgeonClinicDesignSystem_5b731b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/logoData.js
try { (() => {
// Vector paths copied programmatically from the supplied Forgeon logo (forgeon-preto.svg). Do not edit by hand.
const symbolViewBox = '421 312 643 623';
const symbolPaths = ["M 431.789062 679.3125 L 431.789062 524.570312 L 629.457031 322.105469 L 1053.832031 322.027344 L 920.578125 464.164062 L 645.503906 464.167969 Z M 431.789062 679.3125 ", "M 431.035156 924.472656 L 431.035156 752.484375 L 645.507812 533.042969 L 946.382812 533.042969 L 804.582031 679.089844 L 675.765625 679.089844 Z M 431.035156 924.472656 "];
const nameViewBox = '200 1070 1080 110';
const namePath = "M 233.105469 1173.242188 L 206.042969 1173.242188 L 206.042969 1076.085938 L 290.429688 1076.085938 L 290.429688 1098.570312 L 233.105469 1098.570312 L 233.105469 1120.222656 L 275.4375 1120.222656 L 275.4375 1141.460938 L 233.105469 1141.460938 Z M 425.058594 1173.242188 L 364.265625 1173.242188 L 343.726562 1152.703125 L 343.726562 1096.628906 L 364.265625 1076.085938 L 425.058594 1076.085938 L 445.601562 1096.628906 L 445.601562 1152.703125 Z M 370.789062 1143.402344 L 378.144531 1150.757812 L 411.179688 1150.757812 L 418.535156 1143.402344 L 418.535156 1105.929688 L 411.179688 1098.570312 L 378.144531 1098.570312 L 370.789062 1105.929688 Z M 541.507812 1173.242188 L 514.441406 1173.242188 L 514.441406 1076.085938 L 590.363281 1076.085938 L 608.40625 1094.128906 L 608.40625 1124.941406 L 592.859375 1140.488281 L 611.320312 1165.609375 L 611.320312 1173.242188 L 584.671875 1173.242188 L 564.128906 1144.097656 L 541.507812 1144.097656 Z M 541.507812 1097.878906 L 541.507812 1122.304688 L 575.789062 1122.304688 L 581.339844 1116.753906 L 581.339844 1103.429688 L 575.789062 1097.878906 Z M 757.054688 1173.242188 L 696.261719 1173.242188 L 675.71875 1152.703125 L 675.71875 1096.628906 L 696.261719 1076.085938 L 768.296875 1076.085938 L 768.296875 1098.570312 L 710.140625 1098.570312 L 702.785156 1105.929688 L 702.785156 1143.402344 L 710.140625 1150.757812 L 743.730469 1150.757812 L 750.945312 1143.402344 L 750.945312 1133.546875 L 721.523438 1133.546875 L 721.523438 1113.839844 L 777.59375 1113.839844 L 777.59375 1152.703125 Z M 932.351562 1173.242188 L 843.800781 1173.242188 L 843.800781 1076.085938 L 930.960938 1076.085938 L 930.960938 1098.570312 L 870.863281 1098.570312 L 870.863281 1113.839844 L 915.695312 1113.839844 L 915.695312 1134.242188 L 870.863281 1134.242188 L 870.863281 1150.757812 L 932.351562 1150.757812 Z M 1075.863281 1173.242188 L 1015.070312 1173.242188 L 994.53125 1152.703125 L 994.53125 1096.628906 L 1015.070312 1076.085938 L 1075.863281 1076.085938 L 1096.40625 1096.628906 L 1096.40625 1152.703125 Z M 1021.59375 1143.402344 L 1028.953125 1150.757812 L 1061.984375 1150.757812 L 1069.339844 1143.402344 L 1069.339844 1105.929688 L 1061.984375 1098.570312 L 1028.953125 1098.570312 L 1021.59375 1105.929688 Z M 1190.785156 1173.242188 L 1165.246094 1173.242188 L 1165.246094 1076.085938 L 1205.496094 1076.085938 L 1238.945312 1143.957031 L 1241.445312 1143.957031 L 1241.445312 1076.085938 L 1266.984375 1076.085938 L 1266.984375 1173.242188 L 1226.734375 1173.242188 L 1193.285156 1105.371094 L 1190.785156 1105.371094 Z M 1190.785156 1173.242188 ";
Object.assign(__ds_scope, { symbolViewBox, symbolPaths, nameViewBox, namePath });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/logoData.js", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
const INK = {
  color: '#1C2430',
  ink: '#1C2430',
  white: '#FFFFFF'
};
function Symbol({
  height,
  tone,
  id
}) {
  const fill = tone === 'color' ? `url(#${id})` : INK[tone];
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: __ds_scope.symbolViewBox,
    height: height,
    width: height * 643 / 623,
    style: {
      display: 'block',
      flex: 'none'
    },
    "aria-hidden": "true"
  }, tone === 'color' && /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: id,
    gradientUnits: "userSpaceOnUse",
    x1: "431",
    y1: "925",
    x2: "1054",
    y2: "322"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#4F3BF5"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#8E3BF3"
  }))), __ds_scope.symbolPaths.map((d, i) => /*#__PURE__*/React.createElement("path", {
    key: i,
    d: d,
    fill: fill,
    fillRule: "evenodd"
  })));
}
function Logo({
  variant = 'lockup',
  tone = 'color',
  size = 32,
  label = 'Forgeon Clinic',
  style
}) {
  const id = 'fc-grad-' + React.useId().replace(/:/g, '');
  const text = INK[tone];
  if (variant === 'symbol') return /*#__PURE__*/React.createElement("span", {
    role: "img",
    "aria-label": label,
    style: {
      display: 'inline-flex',
      ...style
    }
  }, /*#__PURE__*/React.createElement(Symbol, {
    height: size,
    tone: tone,
    id: id
  }));
  if (variant === 'forgeon') {
    return /*#__PURE__*/React.createElement("span", {
      role: "img",
      "aria-label": "Forgeon",
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: size * 0.4,
        ...style
      }
    }, /*#__PURE__*/React.createElement(Symbol, {
      height: size,
      tone: tone,
      id: id
    }), /*#__PURE__*/React.createElement("svg", {
      viewBox: __ds_scope.nameViewBox,
      height: size * 0.42,
      width: size * 0.42 * 1080 / 110,
      "aria-hidden": "true",
      style: {
        display: 'block'
      }
    }, /*#__PURE__*/React.createElement("path", {
      d: __ds_scope.namePath,
      fill: text
    })));
  }
  const word = /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: size * 0.8,
      lineHeight: 1,
      letterSpacing: '-0.025em',
      color: text,
      whiteSpace: 'nowrap'
    }
  }, "Clinic");
  return /*#__PURE__*/React.createElement("span", {
    role: "img",
    "aria-label": label,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: size * 0.3,
      ...style
    }
  }, /*#__PURE__*/React.createElement(Symbol, {
    height: size,
    tone: tone,
    id: id
  }), variant === 'endorsed' ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      gap: size * 0.14
    }
  }, word, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: size * 0.12,
      fontFamily: 'var(--font-text)',
      fontSize: Math.max(9, size * 0.22),
      fontWeight: 500,
      color: tone === 'white' ? 'rgba(255,255,255,.75)' : 'var(--ink-500)',
      letterSpacing: '.02em'
    }
  }, "by", /*#__PURE__*/React.createElement("svg", {
    viewBox: __ds_scope.nameViewBox,
    height: Math.max(7, size * 0.17),
    width: Math.max(7, size * 0.17) * 1080 / 110,
    "aria-hidden": "true",
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: __ds_scope.namePath,
    fill: tone === 'white' ? 'rgba(255,255,255,.75)' : '#5F6773'
  })))) : word);
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/display/Avatar.jsx
try { (() => {
const TONES = [['#E6F5F2', '#09665E'], ['#EFEDFE', '#3F2BDE'], ['#FCF4E2', '#8A5A06'], ['#E9F6EF', '#1F7647'], ['#FCECEB', '#A9322B'], ['#EEF1F6', '#3B4452']];
function initials(name = '') {
  const p = name.replace(/^(Dra?\.|Sr\.|Sra\.)\s*/i, '').trim().split(/\s+/);
  return ((p[0] || '')[0] || '').concat(p.length > 1 ? p[p.length - 1][0] : '').toUpperCase();
}
function Avatar({
  name = '',
  src,
  size = 40,
  tone,
  status,
  style
}) {
  const idx = tone != null ? tone : [...name].reduce((a, c) => a + c.charCodeAt(0), 0) % TONES.length;
  const [bg, fg] = TONES[idx % TONES.length];
  const dot = {
    online: 'var(--success)',
    away: 'var(--warning)',
    offline: 'var(--ink-300)'
  }[status];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      flex: 'none',
      width: size,
      height: size,
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: size,
      height: size,
      borderRadius: 999,
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    "aria-label": name,
    role: "img",
    style: {
      width: size,
      height: size,
      borderRadius: 999,
      background: bg,
      color: fg,
      display: 'grid',
      placeItems: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: Math.round(size * 0.38),
      letterSpacing: '-0.01em'
    }
  }, initials(name)), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 0,
      bottom: 0,
      width: Math.max(8, size * 0.26),
      height: Math.max(8, size * 0.26),
      borderRadius: 99,
      background: dot,
      boxShadow: '0 0 0 2px var(--surface-card)'
    }
  }));
}
Object.assign(__ds_scope, { initials, Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  variant = 'outlined',
  padding = 'md',
  title,
  subtitle,
  actions,
  footer,
  children,
  onClick,
  style,
  ...rest
}) {
  const pad = {
    none: 0,
    sm: 16,
    md: 24,
    lg: 32
  }[padding] ?? 24;
  const v = {
    outlined: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-xs)'
    },
    elevated: {
      background: 'var(--surface-raised)',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-md)'
    },
    flat: {
      background: 'var(--surface-subtle)',
      border: '1px solid transparent'
    },
    selected: {
      background: 'var(--surface-selected)',
      border: '1px solid var(--teal-300)'
    }
  }[variant];
  return /*#__PURE__*/React.createElement("section", _extends({
    onClick: onClick
  }, rest, {
    style: {
      borderRadius: 'var(--radius-lg)',
      ...v,
      overflow: 'hidden',
      minWidth: 0,
      cursor: onClick ? 'pointer' : undefined,
      ...style
    }
  }), (title || actions) && /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 16,
      padding: `${pad}px ${pad}px 0`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 17,
      lineHeight: '24px',
      fontWeight: 700,
      letterSpacing: '-0.01em',
      color: 'var(--text-strong)'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '2px 0 0',
      fontSize: 14,
      lineHeight: '20px',
      color: 'var(--text-muted)'
    }
  }, subtitle)), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flex: 'none'
    }
  }, actions)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: pad
    }
  }, children), footer && /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: `14px ${pad}px`,
      borderTop: '1px solid var(--border-subtle)',
      background: 'var(--surface-subtle)'
    }
  }, footer));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/icons/iconData.js
try { (() => {
// Lucide v0.468.0 (ISC) — copied programmatically from lucide-static. Inner SVG markup per icon.
const iconPaths = {
  "alarm-clock": "<circle cx=\"12\" cy=\"13\" r=\"8\"/> <path d=\"M12 9v4l2 2\"/> <path d=\"M5 3 2 6\"/> <path d=\"m22 6-3-3\"/> <path d=\"M6.38 18.7 4 21\"/> <path d=\"M17.64 18.67 20 21\"/>",
  "arrow-down-right": "<path d=\"m7 7 10 10\"/> <path d=\"M17 7v10H7\"/>",
  "arrow-left": "<path d=\"m12 19-7-7 7-7\"/> <path d=\"M19 12H5\"/>",
  "arrow-right": "<path d=\"M5 12h14\"/> <path d=\"m12 5 7 7-7 7\"/>",
  "arrow-up-right": "<path d=\"M7 7h10v10\"/> <path d=\"M7 17 17 7\"/>",
  "bell": "<path d=\"M10.268 21a2 2 0 0 0 3.464 0\"/> <path d=\"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326\"/>",
  "bell-ring": "<path d=\"M10.268 21a2 2 0 0 0 3.464 0\"/> <path d=\"M22 8c0-2.3-.8-4.3-2-6\"/> <path d=\"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326\"/> <path d=\"M4 2C2.8 3.7 2 5.7 2 8\"/>",
  "bot": "<path d=\"M12 8V4H8\"/> <rect width=\"16\" height=\"12\" x=\"4\" y=\"8\" rx=\"2\"/> <path d=\"M2 14h2\"/> <path d=\"M20 14h2\"/> <path d=\"M15 13v2\"/> <path d=\"M9 13v2\"/>",
  "brain": "<path d=\"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z\"/> <path d=\"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z\"/> <path d=\"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4\"/> <path d=\"M17.599 6.5a3 3 0 0 0 .399-1.375\"/> <path d=\"M6.003 5.125A3 3 0 0 0 6.401 6.5\"/> <path d=\"M3.477 10.896a4 4 0 0 1 .585-.396\"/> <path d=\"M19.938 10.5a4 4 0 0 1 .585.396\"/> <path d=\"M6 18a4 4 0 0 1-1.967-.516\"/> <path d=\"M19.967 17.484A4 4 0 0 1 18 18\"/>",
  "building-2": "<path d=\"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z\"/> <path d=\"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2\"/> <path d=\"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2\"/> <path d=\"M10 6h4\"/> <path d=\"M10 10h4\"/> <path d=\"M10 14h4\"/> <path d=\"M10 18h4\"/>",
  "calendar": "<path d=\"M8 2v4\"/> <path d=\"M16 2v4\"/> <rect width=\"18\" height=\"18\" x=\"3\" y=\"4\" rx=\"2\"/> <path d=\"M3 10h18\"/>",
  "calendar-check": "<path d=\"M8 2v4\"/> <path d=\"M16 2v4\"/> <rect width=\"18\" height=\"18\" x=\"3\" y=\"4\" rx=\"2\"/> <path d=\"M3 10h18\"/> <path d=\"m9 16 2 2 4-4\"/>",
  "calendar-clock": "<path d=\"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5\"/> <path d=\"M16 2v4\"/> <path d=\"M8 2v4\"/> <path d=\"M3 10h5\"/> <path d=\"M17.5 17.5 16 16.3V14\"/> <circle cx=\"16\" cy=\"16\" r=\"6\"/>",
  "calendar-days": "<path d=\"M8 2v4\"/> <path d=\"M16 2v4\"/> <rect width=\"18\" height=\"18\" x=\"3\" y=\"4\" rx=\"2\"/> <path d=\"M3 10h18\"/> <path d=\"M8 14h.01\"/> <path d=\"M12 14h.01\"/> <path d=\"M16 14h.01\"/> <path d=\"M8 18h.01\"/> <path d=\"M12 18h.01\"/> <path d=\"M16 18h.01\"/>",
  "calendar-plus": "<path d=\"M8 2v4\"/> <path d=\"M16 2v4\"/> <path d=\"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8\"/> <path d=\"M3 10h18\"/> <path d=\"M16 19h6\"/> <path d=\"M19 16v6\"/>",
  "calendar-x": "<path d=\"M8 2v4\"/> <path d=\"M16 2v4\"/> <rect width=\"18\" height=\"18\" x=\"3\" y=\"4\" rx=\"2\"/> <path d=\"M3 10h18\"/> <path d=\"m14 14-4 4\"/> <path d=\"m10 14 4 4\"/>",
  "chart-column": "<path d=\"M3 3v16a2 2 0 0 0 2 2h16\"/> <path d=\"M18 17V9\"/> <path d=\"M13 17V5\"/> <path d=\"M8 17v-3\"/>",
  "chart-line": "<path d=\"M3 3v16a2 2 0 0 0 2 2h16\"/> <path d=\"m19 9-5 5-4-4-3 3\"/>",
  "check": "<path d=\"M20 6 9 17l-5-5\"/>",
  "check-check": "<path d=\"M18 6 7 17l-5-5\"/> <path d=\"m22 10-7.5 7.5L13 16\"/>",
  "chevron-down": "<path d=\"m6 9 6 6 6-6\"/>",
  "chevron-left": "<path d=\"m15 18-6-6 6-6\"/>",
  "chevron-right": "<path d=\"m9 18 6-6-6-6\"/>",
  "chevron-up": "<path d=\"m18 15-6-6-6 6\"/>",
  "circle-alert": "<circle cx=\"12\" cy=\"12\" r=\"10\"/> <line x1=\"12\" x2=\"12\" y1=\"8\" y2=\"12\"/> <line x1=\"12\" x2=\"12.01\" y1=\"16\" y2=\"16\"/>",
  "circle-check": "<circle cx=\"12\" cy=\"12\" r=\"10\"/> <path d=\"m9 12 2 2 4-4\"/>",
  "circle-help": "<circle cx=\"12\" cy=\"12\" r=\"10\"/> <path d=\"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3\"/> <path d=\"M12 17h.01\"/>",
  "circle-x": "<circle cx=\"12\" cy=\"12\" r=\"10\"/> <path d=\"m15 9-6 6\"/> <path d=\"m9 9 6 6\"/>",
  "clipboard-list": "<rect width=\"8\" height=\"4\" x=\"8\" y=\"2\" rx=\"1\" ry=\"1\"/> <path d=\"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2\"/> <path d=\"M12 11h4\"/> <path d=\"M12 16h4\"/> <path d=\"M8 11h.01\"/> <path d=\"M8 16h.01\"/>",
  "clock": "<circle cx=\"12\" cy=\"12\" r=\"10\"/> <polyline points=\"12 6 12 12 16 14\"/>",
  "copy": "<rect width=\"14\" height=\"14\" x=\"8\" y=\"8\" rx=\"2\" ry=\"2\"/> <path d=\"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2\"/>",
  "download": "<path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"/> <polyline points=\"7 10 12 15 17 10\"/> <line x1=\"12\" x2=\"12\" y1=\"15\" y2=\"3\"/>",
  "ellipsis": "<circle cx=\"12\" cy=\"12\" r=\"1\"/> <circle cx=\"19\" cy=\"12\" r=\"1\"/> <circle cx=\"5\" cy=\"12\" r=\"1\"/>",
  "ellipsis-vertical": "<circle cx=\"12\" cy=\"12\" r=\"1\"/> <circle cx=\"12\" cy=\"5\" r=\"1\"/> <circle cx=\"12\" cy=\"19\" r=\"1\"/>",
  "external-link": "<path d=\"M15 3h6v6\"/> <path d=\"M10 14 21 3\"/> <path d=\"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6\"/>",
  "eye": "<path d=\"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0\"/> <circle cx=\"12\" cy=\"12\" r=\"3\"/>",
  "eye-off": "<path d=\"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49\"/> <path d=\"M14.084 14.158a3 3 0 0 1-4.242-4.242\"/> <path d=\"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143\"/> <path d=\"m2 2 20 20\"/>",
  "file-text": "<path d=\"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z\"/> <path d=\"M14 2v4a2 2 0 0 0 2 2h4\"/> <path d=\"M10 9H8\"/> <path d=\"M16 13H8\"/> <path d=\"M16 17H8\"/>",
  "filter": "<polygon points=\"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3\"/>",
  "globe": "<circle cx=\"12\" cy=\"12\" r=\"10\"/> <path d=\"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20\"/> <path d=\"M2 12h20\"/>",
  "hand": "<path d=\"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2\"/> <path d=\"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2\"/> <path d=\"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8\"/> <path d=\"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15\"/>",
  "hand-heart": "<path d=\"M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16\"/> <path d=\"m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9\"/> <path d=\"m2 15 6 6\"/> <path d=\"M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z\"/>",
  "headset": "<path d=\"M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z\"/> <path d=\"M21 16v2a4 4 0 0 1-4 4h-5\"/>",
  "heart": "<path d=\"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z\"/>",
  "heart-handshake": "<path d=\"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z\"/> <path d=\"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66\"/> <path d=\"m18 15-2-2\"/> <path d=\"m15 18-2-2\"/>",
  "house": "<path d=\"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8\"/> <path d=\"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"/>",
  "inbox": "<polyline points=\"22 12 16 12 14 15 10 15 8 12 2 12\"/> <path d=\"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z\"/>",
  "info": "<circle cx=\"12\" cy=\"12\" r=\"10\"/> <path d=\"M12 16v-4\"/> <path d=\"M12 8h.01\"/>",
  "languages": "<path d=\"m5 8 6 6\"/> <path d=\"m4 14 6-6 2-3\"/> <path d=\"M2 5h12\"/> <path d=\"M7 2h1\"/> <path d=\"m22 22-5-10-5 10\"/> <path d=\"M14 18h6\"/>",
  "layout-dashboard": "<rect width=\"7\" height=\"9\" x=\"3\" y=\"3\" rx=\"1\"/> <rect width=\"7\" height=\"5\" x=\"14\" y=\"3\" rx=\"1\"/> <rect width=\"7\" height=\"9\" x=\"14\" y=\"12\" rx=\"1\"/> <rect width=\"7\" height=\"5\" x=\"3\" y=\"16\" rx=\"1\"/>",
  "list": "<path d=\"M3 12h.01\"/> <path d=\"M3 18h.01\"/> <path d=\"M3 6h.01\"/> <path d=\"M8 12h13\"/> <path d=\"M8 18h13\"/> <path d=\"M8 6h13\"/>",
  "lock": "<rect width=\"18\" height=\"11\" x=\"3\" y=\"11\" rx=\"2\" ry=\"2\"/> <path d=\"M7 11V7a5 5 0 0 1 10 0v4\"/>",
  "log-out": "<path d=\"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4\"/> <polyline points=\"16 17 21 12 16 7\"/> <line x1=\"21\" x2=\"9\" y1=\"12\" y2=\"12\"/>",
  "mail": "<rect width=\"20\" height=\"16\" x=\"2\" y=\"4\" rx=\"2\"/> <path d=\"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7\"/>",
  "map-pin": "<path d=\"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0\"/> <circle cx=\"12\" cy=\"10\" r=\"3\"/>",
  "menu": "<line x1=\"4\" x2=\"20\" y1=\"12\" y2=\"12\"/> <line x1=\"4\" x2=\"20\" y1=\"6\" y2=\"6\"/> <line x1=\"4\" x2=\"20\" y1=\"18\" y2=\"18\"/>",
  "message-circle": "<path d=\"M7.9 20A9 9 0 1 0 4 16.1L2 22Z\"/>",
  "message-square": "<path d=\"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z\"/>",
  "messages-square": "<path d=\"M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z\"/> <path d=\"M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1\"/>",
  "mic": "<path d=\"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z\"/> <path d=\"M19 10v2a7 7 0 0 1-14 0v-2\"/> <line x1=\"12\" x2=\"12\" y1=\"19\" y2=\"22\"/>",
  "minus": "<path d=\"M5 12h14\"/>",
  "moon": "<path d=\"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z\"/>",
  "paperclip": "<path d=\"M13.234 20.252 21 12.3\"/> <path d=\"m16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486\"/>",
  "pause": "<rect x=\"14\" y=\"4\" width=\"4\" height=\"16\" rx=\"1\"/> <rect x=\"6\" y=\"4\" width=\"4\" height=\"16\" rx=\"1\"/>",
  "pencil": "<path d=\"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z\"/> <path d=\"m15 5 4 4\"/>",
  "phone": "<path d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\"/>",
  "play": "<polygon points=\"6 3 20 12 6 21 6 3\"/>",
  "plus": "<path d=\"M5 12h14\"/> <path d=\"M12 5v14\"/>",
  "refresh-cw": "<path d=\"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8\"/> <path d=\"M21 3v5h-5\"/> <path d=\"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16\"/> <path d=\"M8 16H3v5\"/>",
  "repeat": "<path d=\"m17 2 4 4-4 4\"/> <path d=\"M3 11v-1a4 4 0 0 1 4-4h14\"/> <path d=\"m7 22-4-4 4-4\"/> <path d=\"M21 13v1a4 4 0 0 1-4 4H3\"/>",
  "rotate-ccw": "<path d=\"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\"/> <path d=\"M3 3v5h5\"/>",
  "search": "<circle cx=\"11\" cy=\"11\" r=\"8\"/> <path d=\"m21 21-4.3-4.3\"/>",
  "send": "<path d=\"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z\"/> <path d=\"m21.854 2.147-10.94 10.939\"/>",
  "settings": "<path d=\"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z\"/> <circle cx=\"12\" cy=\"12\" r=\"3\"/>",
  "shield-check": "<path d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z\"/> <path d=\"m9 12 2 2 4-4\"/>",
  "sliders-horizontal": "<line x1=\"21\" x2=\"14\" y1=\"4\" y2=\"4\"/> <line x1=\"10\" x2=\"3\" y1=\"4\" y2=\"4\"/> <line x1=\"21\" x2=\"12\" y1=\"12\" y2=\"12\"/> <line x1=\"8\" x2=\"3\" y1=\"12\" y2=\"12\"/> <line x1=\"21\" x2=\"16\" y1=\"20\" y2=\"20\"/> <line x1=\"12\" x2=\"3\" y1=\"20\" y2=\"20\"/> <line x1=\"14\" x2=\"14\" y1=\"2\" y2=\"6\"/> <line x1=\"8\" x2=\"8\" y1=\"10\" y2=\"14\"/> <line x1=\"16\" x2=\"16\" y1=\"18\" y2=\"22\"/>",
  "smile": "<circle cx=\"12\" cy=\"12\" r=\"10\"/> <path d=\"M8 14s1.5 2 4 2 4-2 4-2\"/> <line x1=\"9\" x2=\"9.01\" y1=\"9\" y2=\"9\"/> <line x1=\"15\" x2=\"15.01\" y1=\"9\" y2=\"9\"/>",
  "sparkles": "<path d=\"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z\"/> <path d=\"M20 3v4\"/> <path d=\"M22 5h-4\"/> <path d=\"M4 17v2\"/> <path d=\"M5 18H3\"/>",
  "star": "<path d=\"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z\"/>",
  "stethoscope": "<path d=\"M11 2v2\"/> <path d=\"M5 2v2\"/> <path d=\"M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1\"/> <path d=\"M8 15a6 6 0 0 0 12 0v-3\"/> <circle cx=\"20\" cy=\"10\" r=\"2\"/>",
  "sun": "<circle cx=\"12\" cy=\"12\" r=\"4\"/> <path d=\"M12 2v2\"/> <path d=\"M12 20v2\"/> <path d=\"m4.93 4.93 1.41 1.41\"/> <path d=\"m17.66 17.66 1.41 1.41\"/> <path d=\"M2 12h2\"/> <path d=\"M20 12h2\"/> <path d=\"m6.34 17.66-1.41 1.41\"/> <path d=\"m19.07 4.93-1.41 1.41\"/>",
  "timer": "<line x1=\"10\" x2=\"14\" y1=\"2\" y2=\"2\"/> <line x1=\"12\" x2=\"15\" y1=\"14\" y2=\"11\"/> <circle cx=\"12\" cy=\"14\" r=\"8\"/>",
  "trash-2": "<path d=\"M3 6h18\"/> <path d=\"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6\"/> <path d=\"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2\"/> <line x1=\"10\" x2=\"10\" y1=\"11\" y2=\"17\"/> <line x1=\"14\" x2=\"14\" y1=\"11\" y2=\"17\"/>",
  "trending-down": "<polyline points=\"22 17 13.5 8.5 8.5 13.5 2 7\"/> <polyline points=\"16 17 22 17 22 11\"/>",
  "trending-up": "<polyline points=\"22 7 13.5 15.5 8.5 10.5 2 17\"/> <polyline points=\"16 7 22 7 22 13\"/>",
  "triangle-alert": "<path d=\"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3\"/> <path d=\"M12 9v4\"/> <path d=\"M12 17h.01\"/>",
  "user": "<path d=\"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2\"/> <circle cx=\"12\" cy=\"7\" r=\"4\"/>",
  "user-check": "<path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2\"/> <circle cx=\"9\" cy=\"7\" r=\"4\"/> <polyline points=\"16 11 18 13 22 9\"/>",
  "user-plus": "<path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2\"/> <circle cx=\"9\" cy=\"7\" r=\"4\"/> <line x1=\"19\" x2=\"19\" y1=\"8\" y2=\"14\"/> <line x1=\"22\" x2=\"16\" y1=\"11\" y2=\"11\"/>",
  "user-round": "<circle cx=\"12\" cy=\"8\" r=\"5\"/> <path d=\"M20 21a8 8 0 0 0-16 0\"/>",
  "user-x": "<path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2\"/> <circle cx=\"9\" cy=\"7\" r=\"4\"/> <line x1=\"17\" x2=\"22\" y1=\"8\" y2=\"13\"/> <line x1=\"22\" x2=\"17\" y1=\"8\" y2=\"13\"/>",
  "users": "<path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2\"/> <circle cx=\"9\" cy=\"7\" r=\"4\"/> <path d=\"M22 21v-2a4 4 0 0 0-3-3.87\"/> <path d=\"M16 3.13a4 4 0 0 1 0 7.75\"/>",
  "x": "<path d=\"M18 6 6 18\"/> <path d=\"m6 6 12 12\"/>",
  "zap": "<path d=\"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z\"/>",
  "whatsapp": "<path fill=\"currentColor\" stroke=\"none\" d=\"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z\"/>"
};
Object.assign(__ds_scope, { iconPaths });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icons/iconData.js", error: String((e && e.message) || e) }); }

// components/icons/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Icon({
  name,
  size = 20,
  strokeWidth = 1.75,
  color = 'currentColor',
  title,
  style,
  ...rest
}) {
  const inner = __ds_scope.iconPaths[name] || '';
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    role: title ? 'img' : undefined,
    "aria-hidden": title ? undefined : true,
    "aria-label": title,
    focusable: "false",
    style: {
      flex: 'none',
      display: 'block',
      color,
      ...style
    }
  }, rest, {
    dangerouslySetInnerHTML: {
      __html: (title ? `<title>${title}</title>` : '') + inner
    }
  }));
}
const iconNames = Object.keys(__ds_scope.iconPaths);
Object.assign(__ds_scope, { Icon, iconNames });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icons/Icon.jsx", error: String((e && e.message) || e) }); }

// components/chat/ChatBubble.jsx
try { (() => {
const LABELS = {
  'pt-BR': {
    agent: 'Agente IA',
    human: 'Recepção'
  },
  'es-ES': {
    agent: 'Agente IA',
    human: 'Recepción'
  }
};
function ChatBubble({
  from = 'patient',
  text,
  time,
  status,
  author,
  locale = 'pt-BR',
  children,
  showLabel = true,
  style
}) {
  if (from === 'system') {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center',
        padding: '4px 0',
        ...style
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        padding: '6px 12px',
        borderRadius: 999,
        background: 'var(--surface-card)',
        border: '1px solid var(--border-subtle)',
        fontSize: 12.5,
        lineHeight: '16px',
        color: 'var(--text-muted)',
        fontWeight: 500
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "info",
      size: 13
    }), text || children));
  }
  const out = from !== 'patient';
  const L = LABELS[locale] || LABELS['pt-BR'];
  const bg = {
    patient: 'var(--bubble-patient)',
    agent: 'var(--bubble-agent)',
    human: 'var(--bubble-human)'
  }[from];
  const label = from === 'agent' ? L.agent : from === 'human' ? author ? `${author} · ${L.human}` : L.human : author;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: out ? 'flex-end' : 'flex-start',
      gap: 4,
      ...style
    }
  }, showLabel && label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      fontSize: 12,
      lineHeight: '16px',
      fontWeight: 600,
      padding: '0 6px',
      color: from === 'agent' ? 'var(--ai-accent-text)' : 'var(--text-muted)'
    }
  }, from === 'agent' && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "sparkles",
    size: 13
  }), from === 'human' && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "headset",
    size: 13
  }), label), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '78%',
      boxSizing: 'border-box',
      padding: '10px 14px 8px',
      background: bg,
      color: 'var(--text-strong)',
      border: from === 'patient' ? '1px solid var(--border-subtle)' : '1px solid transparent',
      boxShadow: 'var(--shadow-xs)',
      borderRadius: out ? '16px 16px 6px 16px' : '16px 16px 16px 6px',
      fontSize: 15,
      lineHeight: '22px',
      textWrap: 'pretty',
      overflowWrap: 'anywhere'
    }
  }, text && /*#__PURE__*/React.createElement("div", {
    style: {
      whiteSpace: 'pre-line'
    }
  }, text), children && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: text ? 10 : 0
    }
  }, children), (time || status) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      gap: 4,
      marginTop: 2,
      fontSize: 11.5,
      lineHeight: '16px',
      color: 'var(--text-muted)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, time, out && status && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: status === 'sent' ? 'check' : 'check-check',
    size: 14,
    color: status === 'read' ? 'var(--teal-600)' : 'var(--text-subtle)'
  }))));
}
Object.assign(__ds_scope, { ChatBubble });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chat/ChatBubble.jsx", error: String((e && e.message) || e) }); }

// components/clinic/calendar/WeekCalendar.jsx
try { (() => {
const ST = {
  confirmed: ['var(--teal-50)', 'var(--teal-800)', 'var(--teal-200)'],
  pending: ['var(--warning-surface)', 'var(--warning-text)', '#F1D9A4'],
  cancelled: ['var(--sand-100)', 'var(--text-muted)', 'var(--border-default)'],
  noshow: ['var(--danger-surface)', 'var(--danger-text)', 'var(--danger-border)'],
  rescheduled: ['var(--ai-surface)', 'var(--ai-accent-text)', 'var(--ai-border)']
};
const toMin = t => {
  const [h, m] = t.split(':').map(Number);
  return h * 60 + m;
};
function WeekCalendar({
  days = [],
  appointments = [],
  startHour = 8,
  endHour = 19,
  hourHeight = 56,
  now,
  onSelect,
  selectedId,
  style
}) {
  const hours = Array.from({
    length: endHour - startHour
  }, (_, i) => startHour + i);
  const total = (endHour - startHour) * hourHeight;
  const cols = `56px repeat(${days.length}, minmax(0, 1fr))`;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      fontFamily: 'var(--font-text)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: cols,
      borderBottom: '1px solid var(--border-subtle)',
      background: 'var(--surface-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", null), days.map(d => /*#__PURE__*/React.createElement("div", {
    key: d.key,
    style: {
      padding: '10px 8px',
      display: 'flex',
      alignItems: 'baseline',
      gap: 6,
      borderLeft: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      color: d.isToday ? 'var(--teal-700)' : 'var(--text-muted)'
    }
  }, d.label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 18,
      fontWeight: 800,
      fontVariantNumeric: 'tabular-nums',
      color: d.isToday ? '#fff' : 'var(--text-strong)',
      background: d.isToday ? 'var(--action-primary)' : 'transparent',
      borderRadius: 8,
      padding: d.isToday ? '0 6px' : 0,
      lineHeight: '26px'
    }
  }, d.date)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: cols,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: total
    }
  }, hours.map((h, i) => /*#__PURE__*/React.createElement("span", {
    key: h,
    style: {
      position: 'absolute',
      top: i * hourHeight - 7,
      right: 8,
      fontSize: 12,
      color: 'var(--text-subtle)',
      fontVariantNumeric: 'tabular-nums',
      display: i === 0 ? 'none' : 'block'
    }
  }, String(h).padStart(2, '0'), ":00"))), days.map(d => /*#__PURE__*/React.createElement("div", {
    key: d.key,
    style: {
      position: 'relative',
      height: total,
      borderLeft: '1px solid var(--border-subtle)',
      background: d.isToday ? 'rgba(14,140,128,.03)' : 'transparent'
    }
  }, hours.map((h, i) => /*#__PURE__*/React.createElement("div", {
    key: h,
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: i * hourHeight,
      borderTop: i ? '1px solid var(--border-subtle)' : 0
    }
  })), d.blocked && d.blocked.map((b, i) => {
    const t = (toMin(b.start) - startHour * 60) / 60 * hourHeight;
    const hgt = (toMin(b.end) - toMin(b.start)) / 60 * hourHeight;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: t,
        height: hgt,
        background: 'repeating-linear-gradient(135deg, transparent 0 6px, var(--sand-200) 6px 7px)',
        display: 'flex',
        alignItems: 'flex-start',
        padding: 6,
        fontSize: 11.5,
        color: 'var(--text-subtle)',
        boxSizing: 'border-box'
      }
    }, b.label);
  }), appointments.filter(a => a.day === d.key).map(a => {
    const top = (toMin(a.start) - startHour * 60) / 60 * hourHeight;
    const h = Math.max(24, (toMin(a.end) - toMin(a.start)) / 60 * hourHeight);
    const [bg, fg, bd] = ST[a.status] || ST.confirmed;
    const sel = selectedId === a.id;
    return /*#__PURE__*/React.createElement("button", {
      key: a.id,
      type: "button",
      onClick: () => onSelect && onSelect(a),
      style: {
        position: 'absolute',
        left: 4,
        right: 4,
        top: top + 2,
        height: h - 4,
        boxSizing: 'border-box',
        textAlign: 'left',
        cursor: 'pointer',
        overflow: 'hidden',
        background: bg,
        color: fg,
        border: `1px solid ${sel ? 'var(--teal-600)' : bd}`,
        borderRadius: 10,
        padding: '5px 8px',
        fontFamily: 'inherit',
        boxShadow: sel ? '0 0 0 2px var(--teal-200)' : 'none',
        display: 'flex',
        flexDirection: 'column',
        gap: 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        fontWeight: 600,
        fontVariantNumeric: 'tabular-nums',
        opacity: .85,
        display: 'flex',
        alignItems: 'center',
        gap: 4
      }
    }, a.start, a.byAgent && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "sparkles",
      size: 11,
      color: "var(--ai-accent-text)"
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        lineHeight: '17px',
        fontWeight: 600,
        color: a.status === 'cancelled' ? 'var(--text-muted)' : 'var(--text-strong)',
        textDecoration: a.status === 'cancelled' ? 'line-through' : 'none',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, a.patient), h > 52 && a.service && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        lineHeight: '16px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, a.service));
  }), now && d.isToday && (() => {
    const t = (toMin(now) - startHour * 60) / 60 * hourHeight;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: -1,
        right: 0,
        top: t,
        height: 0,
        borderTop: '2px solid var(--danger)',
        zIndex: 2
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: -5,
        top: -6,
        width: 10,
        height: 10,
        borderRadius: 99,
        background: 'var(--danger)'
      }
    }));
  })()))));
}
Object.assign(__ds_scope, { WeekCalendar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/clinic/calendar/WeekCalendar.jsx", error: String((e && e.message) || e) }); }

// components/clinic/metrics/KpiCard.jsx
try { (() => {
function Spark({
  data,
  color
}) {
  const w = 96,
    h = 32,
    min = Math.min(...data),
    max = Math.max(...data),
    r = max - min || 1;
  const pts = data.map((v, i) => `${i / (data.length - 1) * w},${h - 3 - (v - min) / r * (h - 6)}`).join(' ');
  return /*#__PURE__*/React.createElement("svg", {
    width: w,
    height: h,
    viewBox: `0 0 ${w} ${h}`,
    "aria-hidden": "true",
    style: {
      display: 'block',
      overflow: 'visible'
    }
  }, /*#__PURE__*/React.createElement("polyline", {
    points: pts,
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}
function KpiCard({
  label,
  value,
  unit,
  delta,
  hint,
  icon,
  tone = 'default',
  sparkline,
  style
}) {
  const ai = tone === 'ai';
  const good = delta && (delta.good !== undefined ? delta.good : delta.trend === 'up');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      padding: 20,
      borderRadius: 'var(--radius-lg)',
      boxSizing: 'border-box',
      minWidth: 0,
      background: 'var(--surface-card)',
      border: `1px solid ${ai ? 'var(--ai-border)' : 'var(--border-subtle)'}`,
      boxShadow: 'var(--shadow-xs)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 10,
      display: 'grid',
      placeItems: 'center',
      background: ai ? 'var(--ai-surface)' : 'var(--teal-50)',
      color: ai ? 'var(--ai-accent-text)' : 'var(--teal-700)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 17
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      lineHeight: '20px',
      fontWeight: 500,
      color: 'var(--text-muted)'
    }
  }, label)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-kpi-size)',
      lineHeight: 'var(--text-kpi-lh)',
      fontWeight: 800,
      letterSpacing: '-0.02em',
      color: 'var(--text-strong)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, value), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 600,
      color: 'var(--text-muted)'
    }
  }, unit)), sparkline && /*#__PURE__*/React.createElement(Spark, {
    data: sparkline,
    color: ai ? 'var(--ai-accent)' : 'var(--teal-500)'
  })), (delta || hint) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 13,
      lineHeight: '18px'
    }
  }, delta && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 3,
      fontWeight: 600,
      fontVariantNumeric: 'tabular-nums',
      color: good ? 'var(--success-text)' : 'var(--danger-text)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: delta.trend === 'down' ? 'trending-down' : 'trending-up',
    size: 15
  }), delta.value), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, hint)));
}
Object.assign(__ds_scope, { KpiCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/clinic/metrics/KpiCard.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
const badgeTones = {
  neutral: {
    bg: 'var(--sand-100)',
    fg: 'var(--ink-600)'
  },
  teal: {
    bg: 'var(--teal-50)',
    fg: 'var(--teal-700)'
  },
  success: {
    bg: 'var(--success-surface)',
    fg: 'var(--success-text)'
  },
  warning: {
    bg: 'var(--warning-surface)',
    fg: 'var(--warning-text)'
  },
  danger: {
    bg: 'var(--danger-surface)',
    fg: 'var(--danger-text)'
  },
  ai: {
    bg: 'var(--ai-surface)',
    fg: 'var(--ai-accent-text)'
  },
  brand: {
    bg: 'var(--brand-gradient)',
    fg: '#FFFFFF'
  },
  whatsapp: {
    bg: '#E3F9EA',
    fg: 'var(--whatsapp-text)'
  },
  solid: {
    bg: 'var(--ink-900)',
    fg: '#FFFFFF'
  }
};
function Badge({
  tone = 'neutral',
  size = 'md',
  dot = false,
  icon,
  children,
  style
}) {
  const t = badgeTones[tone] || badgeTones.neutral;
  const sm = size === 'sm';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: sm ? 4 : 6,
      height: sm ? 22 : 26,
      padding: sm ? '0 8px' : '0 10px',
      borderRadius: 'var(--radius-pill)',
      background: t.bg,
      color: t.fg,
      fontFamily: 'var(--font-text)',
      fontSize: sm ? 12 : 13,
      fontWeight: 600,
      lineHeight: 1,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      ...style
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: 99,
      background: 'currentColor',
      flex: 'none'
    }
  }), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: sm ? 12 : 14,
    strokeWidth: 2
  }), children);
}
Object.assign(__ds_scope, { badgeTones, Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/clinic/status/StatusBadge.jsx
try { (() => {
const statusLabels = {
  'pt-BR': {
    confirmed: 'Confirmada',
    pending: 'Pendente',
    cancelled: 'Cancelada',
    noshow: 'Faltou',
    rescheduled: 'Remarcada'
  },
  'es-ES': {
    confirmed: 'Confirmada',
    pending: 'Pendiente',
    cancelled: 'Cancelada',
    noshow: 'No asistió',
    rescheduled: 'Reprogramada'
  }
};
function StatusBadge({
  status = 'pending',
  locale = 'pt-BR',
  label,
  size = 'md'
}) {
  const text = label || (statusLabels[locale] || statusLabels['pt-BR'])[status];
  return /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    size: size,
    dot: true,
    style: {
      background: `var(--status-${status}-bg)`,
      color: `var(--status-${status})`,
      textDecoration: status === 'cancelled' ? 'none' : undefined
    }
  }, text);
}
Object.assign(__ds_scope, { statusLabels, StatusBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/clinic/status/StatusBadge.jsx", error: String((e && e.message) || e) }); }

// components/clinic/appointment/AppointmentCard.jsx
try { (() => {
function AppointmentCard({
  time,
  endTime,
  date,
  patient,
  service,
  professional,
  room,
  status = 'confirmed',
  locale = 'pt-BR',
  bookedByAgent = false,
  viaWhatsApp = true,
  actions,
  compact = false,
  selected = false,
  onClick,
  style
}) {
  const muted = status === 'cancelled';
  return /*#__PURE__*/React.createElement("article", {
    onClick: onClick,
    style: {
      display: 'flex',
      gap: compact ? 12 : 16,
      alignItems: 'stretch',
      padding: compact ? 12 : 16,
      borderRadius: 'var(--radius-lg)',
      boxSizing: 'border-box',
      background: selected ? 'var(--surface-selected)' : 'var(--surface-card)',
      border: `1px solid ${selected ? 'var(--teal-300)' : 'var(--border-subtle)'}`,
      boxShadow: 'var(--shadow-xs)',
      cursor: onClick ? 'pointer' : undefined,
      minWidth: 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none',
      width: compact ? 60 : 72,
      borderRadius: 'var(--radius-md)',
      background: muted ? 'var(--sand-100)' : 'var(--teal-50)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '8px 4px',
      gap: 2
    }
  }, date && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11.5,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '.06em',
      color: muted ? 'var(--text-muted)' : 'var(--teal-700)'
    }
  }, date), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: compact ? 17 : 20,
      lineHeight: 1.1,
      fontWeight: 800,
      letterSpacing: '-0.02em',
      fontVariantNumeric: 'tabular-nums',
      color: muted ? 'var(--text-muted)' : 'var(--teal-800)',
      textDecoration: muted ? 'line-through' : 'none'
    }
  }, time), endTime && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: muted ? 'var(--text-subtle)' : 'var(--teal-700)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, endTime)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: compact ? 2 : 4,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: compact ? 15 : 16,
      lineHeight: '22px',
      fontWeight: 600,
      color: 'var(--text-strong)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      maxWidth: '100%'
    }
  }, patient), /*#__PURE__*/React.createElement(__ds_scope.StatusBadge, {
    status: status,
    locale: locale,
    size: "sm"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      lineHeight: '20px',
      color: 'var(--text-body)'
    }
  }, service, professional && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, " \xB7 ", professional)), !compact && (bookedByAgent || viaWhatsApp || room) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      fontSize: 12.5,
      color: 'var(--text-muted)',
      marginTop: 2,
      flexWrap: 'wrap'
    }
  }, viaWhatsApp && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "whatsapp",
    size: 13,
    color: "var(--whatsapp-text)"
  }), "WhatsApp"), bookedByAgent && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      color: 'var(--ai-accent-text)',
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "sparkles",
    size: 13
  }), locale === 'es-ES' ? 'Agendada por IA' : 'Agendada pela IA'), room && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "map-pin",
    size: 13
  }), room))), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      flex: 'none'
    }
  }, actions));
}
Object.assign(__ds_scope, { AppointmentCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/clinic/appointment/AppointmentCard.jsx", error: String((e && e.message) || e) }); }

// components/clinic/patients/PatientTable.jsx
try { (() => {
const HEAD = {
  'pt-BR': ['Paciente', 'Profissional', 'Última consulta', 'Próxima consulta', 'Status', 'Canal'],
  'es-ES': ['Paciente', 'Profesional', 'Última cita', 'Próxima cita', 'Estado', 'Canal']
};
function Row({
  r,
  locale,
  onClick,
  selected
}) {
  const [hover, setHover] = React.useState(false);
  const td = {
    padding: '12px 16px',
    borderTop: '1px solid var(--border-subtle)',
    fontSize: 14,
    lineHeight: '20px',
    color: 'var(--text-body)',
    verticalAlign: 'middle',
    whiteSpace: 'nowrap'
  };
  return /*#__PURE__*/React.createElement("tr", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: selected ? 'var(--surface-selected)' : hover ? 'var(--surface-hover)' : 'transparent',
      cursor: onClick ? 'pointer' : undefined
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: td
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    name: r.name,
    size: 36
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, r.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, r.phone)))), /*#__PURE__*/React.createElement("td", {
    style: td
  }, r.professional), /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      fontVariantNumeric: 'tabular-nums',
      color: 'var(--text-muted)'
    }
  }, r.lastVisit || '—'), /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      fontVariantNumeric: 'tabular-nums',
      fontWeight: r.next ? 600 : 400,
      color: r.next ? 'var(--text-strong)' : 'var(--text-subtle)'
    }
  }, r.next || '—'), /*#__PURE__*/React.createElement("td", {
    style: td
  }, r.status ? /*#__PURE__*/React.createElement(__ds_scope.StatusBadge, {
    status: r.status,
    locale: locale,
    size: "sm"
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-subtle)'
    }
  }, "\u2014")), /*#__PURE__*/React.createElement("td", {
    style: td
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: r.channel === 'phone' ? 'phone' : 'whatsapp',
    size: 16,
    color: r.channel === 'phone' ? undefined : 'var(--whatsapp-text)'
  }), r.channel === 'phone' ? locale === 'es-ES' ? 'Teléfono' : 'Telefone' : 'WhatsApp')));
}
function PatientTable({
  rows = [],
  locale = 'pt-BR',
  onRowClick,
  selectedId,
  style
}) {
  const h = HEAD[locale] || HEAD['pt-BR'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'auto',
      ...style
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontFamily: 'var(--font-text)'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, h.map(x => /*#__PURE__*/React.createElement("th", {
    key: x,
    scope: "col",
    style: {
      textAlign: 'left',
      padding: '12px 16px',
      fontSize: 12.5,
      fontWeight: 600,
      color: 'var(--text-muted)',
      background: 'var(--surface-subtle)',
      whiteSpace: 'nowrap'
    }
  }, x)))), /*#__PURE__*/React.createElement("tbody", null, rows.map(r => /*#__PURE__*/React.createElement(Row, {
    key: r.id || r.name,
    r: r,
    locale: locale,
    selected: selectedId && selectedId === r.id,
    onClick: onRowClick ? () => onRowClick(r) : undefined
  })))));
}
Object.assign(__ds_scope, { PatientTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/clinic/patients/PatientTable.jsx", error: String((e && e.message) || e) }); }

// components/overlays/Tooltip.jsx
try { (() => {
function Tooltip({
  content,
  placement = 'top',
  open,
  children
}) {
  const [show, setShow] = React.useState(false);
  const vis = open !== undefined ? open : show;
  const pos = {
    top: {
      bottom: 'calc(100% + 8px)',
      left: '50%',
      transform: 'translateX(-50%)'
    },
    bottom: {
      top: 'calc(100% + 8px)',
      left: '50%',
      transform: 'translateX(-50%)'
    },
    right: {
      left: 'calc(100% + 8px)',
      top: '50%',
      transform: 'translateY(-50%)'
    },
    left: {
      right: 'calc(100% + 8px)',
      top: '50%',
      transform: 'translateY(-50%)'
    }
  }[placement];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex'
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false)
  }, children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      ...pos,
      zIndex: 50,
      pointerEvents: 'none',
      whiteSpace: 'nowrap',
      padding: '7px 10px',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--surface-inverse)',
      color: 'var(--text-inverse)',
      fontFamily: 'var(--font-text)',
      fontSize: 13,
      lineHeight: '18px',
      fontWeight: 500,
      boxShadow: 'var(--shadow-md)',
      opacity: vis ? 1 : 0,
      transition: 'opacity var(--duration-base) var(--ease-standard)'
    }
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/utils/interactive.js
try { (() => {
/** Hover/press/focus state for inline-styled components. Returns [handlers, {hover, press, focus}]. */
function useInteractive(disabled) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const handlers = disabled ? {} : {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    onFocus: e => {
      try {
        setFocus(e.target.matches(':focus-visible'));
      } catch (_) {
        setFocus(true);
      }
    },
    onBlur: () => setFocus(false)
  };
  return [handlers, {
    hover,
    press,
    focus
  }];
}
const transition = 'background-color var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard), color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard), transform var(--duration-fast) var(--ease-standard)';
Object.assign(__ds_scope, { useInteractive, transition });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/utils/interactive.js", error: String((e && e.message) || e) }); }

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    h: 'var(--control-h-sm)',
    px: 14,
    fs: 14,
    gap: 6,
    icon: 16
  },
  md: {
    h: 'var(--control-h-md)',
    px: 18,
    fs: 15,
    gap: 8,
    icon: 18
  },
  lg: {
    h: 'var(--control-h-lg)',
    px: 24,
    fs: 16,
    gap: 10,
    icon: 20
  }
};
function palette(variant, s) {
  const v = {
    primary: {
      bg: s.press ? 'var(--action-primary-active)' : s.hover ? 'var(--action-primary-hover)' : 'var(--action-primary)',
      fg: 'var(--text-on-primary)',
      bd: 'transparent',
      sh: 'var(--shadow-xs)'
    },
    secondary: {
      bg: s.hover ? 'var(--surface-hover)' : 'var(--surface-card)',
      fg: 'var(--text-strong)',
      bd: s.hover ? 'var(--border-strong)' : 'var(--border-default)',
      sh: 'var(--shadow-xs)'
    },
    soft: {
      bg: s.hover ? 'var(--action-primary-subtle-hover)' : 'var(--action-primary-subtle)',
      fg: 'var(--teal-700)',
      bd: 'transparent'
    },
    ghost: {
      bg: s.hover ? 'var(--surface-hover)' : 'transparent',
      fg: 'var(--text-body)',
      bd: 'transparent'
    },
    danger: {
      bg: s.hover ? 'var(--danger-text)' : 'var(--danger)',
      fg: '#FFFFFF',
      bd: 'transparent',
      sh: 'var(--shadow-xs)'
    },
    whatsapp: {
      bg: s.hover ? '#1FBF5B' : 'var(--whatsapp)',
      fg: '#0B2E1A',
      bd: 'transparent',
      sh: 'var(--shadow-xs)'
    }
  };
  return v[variant] || v.primary;
}
function Button({
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  fullWidth = false,
  disabled = false,
  loading = false,
  type = 'button',
  children,
  onClick,
  style,
  ...rest
}) {
  const [h, s] = __ds_scope.useInteractive(disabled || loading);
  const z = SIZES[size] || SIZES.md;
  const p = palette(variant, s);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled || loading,
    onClick: onClick,
    "aria-busy": loading || undefined
  }, h, rest, {
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: z.gap,
      height: z.h,
      padding: `0 ${z.px}px`,
      borderRadius: 'var(--radius-md)',
      border: `1px solid ${p.bd}`,
      background: p.bg,
      color: p.fg,
      fontFamily: 'var(--font-text)',
      fontSize: z.fs,
      fontWeight: 600,
      lineHeight: 1,
      letterSpacing: '-0.005em',
      whiteSpace: 'nowrap',
      cursor: disabled || loading ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      boxShadow: s.focus ? 'var(--focus-ring)' : p.sh || 'none',
      transform: s.press ? 'scale(0.98)' : 'none',
      transition: __ds_scope.transition,
      outline: 'none',
      ...style
    }
  }), loading ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "refresh-cw",
    size: z.icon,
    style: {
      animation: 'fc-spin 1s linear infinite'
    }
  }) : iconLeft && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: z.icon
  }), variant === 'whatsapp' && !iconLeft && !loading && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "whatsapp",
    size: z.icon
  }), children, iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: z.icon
  }), loading && /*#__PURE__*/React.createElement("style", null, '@keyframes fc-spin{to{transform:rotate(360deg)}}'));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SZ = {
  sm: [36, 18],
  md: [44, 20],
  lg: [52, 22]
};
function IconButton({
  icon,
  label,
  variant = 'ghost',
  size = 'md',
  badge,
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const [h, s] = __ds_scope.useInteractive(disabled);
  const [box, ic] = SZ[size] || SZ.md;
  const map = {
    ghost: {
      bg: s.hover ? 'var(--surface-hover)' : 'transparent',
      fg: 'var(--text-muted)',
      bd: 'transparent'
    },
    secondary: {
      bg: s.hover ? 'var(--surface-hover)' : 'var(--surface-card)',
      fg: 'var(--text-body)',
      bd: 'var(--border-default)'
    },
    primary: {
      bg: s.hover ? 'var(--action-primary-hover)' : 'var(--action-primary)',
      fg: '#FFFFFF',
      bd: 'transparent'
    },
    soft: {
      bg: s.hover ? 'var(--action-primary-subtle-hover)' : 'var(--action-primary-subtle)',
      fg: 'var(--teal-700)',
      bd: 'transparent'
    }
  };
  const p = map[variant] || map.ghost;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick
  }, h, rest, {
    style: {
      position: 'relative',
      width: box,
      height: box,
      flex: 'none',
      display: 'inline-grid',
      placeItems: 'center',
      borderRadius: 'var(--radius-md)',
      border: `1px solid ${p.bd}`,
      background: p.bg,
      color: s.hover && variant === 'ghost' ? 'var(--text-strong)' : p.fg,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      boxShadow: s.focus ? 'var(--focus-ring)' : 'none',
      transform: s.press ? 'scale(0.96)' : 'none',
      transition: __ds_scope.transition,
      outline: 'none',
      padding: 0,
      ...style
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: ic
  }), badge != null && badge !== false && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 4,
      right: 4,
      minWidth: badge === true ? 8 : 18,
      height: badge === true ? 8 : 18,
      padding: badge === true ? 0 : '0 5px',
      borderRadius: 999,
      background: 'var(--danger)',
      color: '#fff',
      fontSize: 11,
      fontWeight: 700,
      lineHeight: '18px',
      fontVariantNumeric: 'tabular-nums',
      boxShadow: '0 0 0 2px var(--surface-card)',
      boxSizing: 'border-box'
    }
  }, badge === true ? '' : badge));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/chat/ConversationItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Single conversation row for the inbox list. */
function ConversationItem({
  name,
  preview,
  time,
  unread = 0,
  handledBy = 'agent',
  urgent = false,
  selected = false,
  onClick,
  locale = 'pt-BR'
}) {
  const [h, s] = __ds_scope.useInteractive(false);
  const who = {
    agent: ['sparkles', 'var(--ai-accent-text)', 'IA'],
    human: ['headset', 'var(--teal-700)', locale === 'es-ES' ? 'Recepción' : 'Recepção'],
    waiting: ['hand', 'var(--danger-text)', locale === 'es-ES' ? 'Espera humano' : 'Aguarda humano']
  }[urgent ? 'waiting' : handledBy];
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick
  }, h, {
    style: {
      display: 'flex',
      gap: 12,
      width: '100%',
      textAlign: 'left',
      padding: '12px 14px',
      border: 0,
      borderRadius: 'var(--radius-md)',
      cursor: 'pointer',
      fontFamily: 'var(--font-text)',
      background: selected ? 'var(--surface-selected)' : s.hover ? 'var(--surface-hover)' : 'transparent',
      boxShadow: s.focus ? 'var(--focus-ring)' : 'none',
      transition: __ds_scope.transition,
      outline: 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      flex: 'none',
      borderRadius: 999,
      display: 'grid',
      placeItems: 'center',
      background: urgent ? 'var(--danger-surface)' : 'var(--sand-100)',
      color: urgent ? 'var(--danger-text)' : 'var(--ink-600)',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 15
    }
  }, name.split(' ').map(w => w[0]).slice(0, 2).join('')), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0,
      fontSize: 15,
      lineHeight: '22px',
      fontWeight: unread ? 700 : 600,
      color: 'var(--text-strong)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: unread ? 'var(--teal-700)' : 'var(--text-subtle)',
      fontVariantNumeric: 'tabular-nums',
      fontWeight: unread ? 600 : 400
    }
  }, time)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      lineHeight: '20px',
      color: 'var(--text-muted)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, preview), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      fontSize: 12,
      fontWeight: 600,
      color: who[1]
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: who[0],
    size: 13
  }), who[2]), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), unread > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 20,
      height: 20,
      padding: '0 6px',
      boxSizing: 'border-box',
      borderRadius: 99,
      background: 'var(--action-primary)',
      color: '#fff',
      fontSize: 11.5,
      fontWeight: 700,
      display: 'inline-grid',
      placeItems: 'center',
      fontVariantNumeric: 'tabular-nums'
    }
  }, unread))));
}
Object.assign(__ds_scope, { ConversationItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chat/ConversationItem.jsx", error: String((e && e.message) || e) }); }

// components/clinic/appointment/TimeSlots.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Slot({
  time,
  available,
  selected,
  onSelect,
  suggested
}) {
  const [hover, setHover] = React.useState(false);
  const off = !available;
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    disabled: off,
    "aria-pressed": selected,
    onClick: () => onSelect && onSelect(time),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      height: 'var(--touch-comfort)',
      borderRadius: 'var(--radius-md)',
      fontFamily: 'var(--font-text)',
      fontSize: 16,
      fontWeight: 600,
      fontVariantNumeric: 'tabular-nums',
      border: `1px solid ${selected ? 'var(--action-primary)' : off ? 'transparent' : hover ? 'var(--teal-400)' : 'var(--border-default)'}`,
      background: selected ? 'var(--action-primary)' : off ? 'var(--bg-sunken)' : hover ? 'var(--teal-50)' : 'var(--surface-card)',
      color: selected ? '#fff' : off ? 'var(--text-subtle)' : 'var(--text-strong)',
      textDecoration: off ? 'line-through' : 'none',
      cursor: off ? 'not-allowed' : 'pointer',
      transition: __ds_scope.transition
    }
  }, time, suggested && !selected && !off && /*#__PURE__*/React.createElement("span", {
    title: "Sugerido pela IA",
    style: {
      position: 'absolute',
      top: -7,
      right: -5,
      width: 18,
      height: 18,
      borderRadius: 99,
      background: 'var(--ai-surface)',
      color: 'var(--ai-accent-text)',
      display: 'grid',
      placeItems: 'center',
      boxShadow: '0 0 0 2px var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "sparkles",
    size: 11,
    strokeWidth: 2.25
  })));
}
function TimeSlots({
  slots = [],
  value,
  onChange,
  columns = 4,
  groups,
  style
}) {
  const grid = list => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
      gap: 8
    }
  }, list.map(s => {
    const o = typeof s === 'string' ? {
      time: s,
      available: true
    } : s;
    return /*#__PURE__*/React.createElement(Slot, _extends({
      key: o.time
    }, o, {
      available: o.available !== false,
      selected: value === o.time,
      onSelect: onChange
    }));
  }));
  if (groups) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        ...style
      }
    }, groups.map(g => /*#__PURE__*/React.createElement("div", {
      key: g.label,
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: '.08em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)'
      }
    }, g.label), grid(g.slots))));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: style
  }, grid(slots));
}
Object.assign(__ds_scope, { TimeSlots });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/clinic/appointment/TimeSlots.jsx", error: String((e && e.message) || e) }); }

// components/clinic/handoff/HandoffAlert.jsx
try { (() => {
const COPY = {
  'pt-BR': {
    urgent: 'Urgente',
    take: 'Assumir conversa',
    view: 'Ver conversa',
    waiting: 'Aguardando'
  },
  'es-ES': {
    urgent: 'Urgente',
    take: 'Atender conversación',
    view: 'Ver conversación',
    waiting: 'Esperando'
  }
};
function HandoffAlert({
  urgency = 'normal',
  title,
  reason,
  quote,
  patient,
  waiting,
  locale = 'pt-BR',
  onAccept,
  onView,
  compact = false,
  style
}) {
  const c = COPY[locale] || COPY['pt-BR'];
  const urgent = urgency === 'urgent';
  return /*#__PURE__*/React.createElement("div", {
    role: urgent ? 'alert' : 'status',
    style: {
      display: 'flex',
      gap: 14,
      padding: compact ? 14 : 18,
      borderRadius: 'var(--radius-lg)',
      boxSizing: 'border-box',
      background: urgent ? 'var(--danger-surface)' : 'var(--surface-card)',
      border: `1px solid ${urgent ? 'var(--danger-border)' : 'var(--border-subtle)'}`,
      boxShadow: urgent ? 'none' : 'var(--shadow-sm)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      width: 40,
      height: 40,
      borderRadius: 12,
      display: 'grid',
      placeItems: 'center',
      background: urgent ? 'var(--danger)' : 'var(--teal-50)',
      color: urgent ? '#fff' : 'var(--teal-700)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: urgent ? 'hand' : 'headset',
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      lineHeight: '22px',
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, title), urgent && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "danger",
    size: "sm",
    style: {
      background: '#fff'
    }
  }, c.urgent), waiting && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: urgent ? 'var(--danger-text)' : 'var(--text-muted)',
      fontVariantNumeric: 'tabular-nums',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "clock",
    size: 13
  }), c.waiting, " ", waiting)), reason && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      lineHeight: '20px',
      color: 'var(--text-body)'
    }
  }, reason), quote && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      lineHeight: '20px',
      color: 'var(--text-muted)',
      fontStyle: 'italic',
      marginTop: 2
    }
  }, patient ? `${patient}: ` : '', "\u201C", quote, "\u201D"), (onAccept || onView) && !compact && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 10,
      flexWrap: 'wrap'
    }
  }, onAccept && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: urgent ? 'danger' : 'primary',
    iconLeft: "headset",
    onClick: onAccept
  }, c.take), onView && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: "ghost",
    onClick: onView
  }, c.view))), compact && onAccept && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: urgent ? 'danger' : 'primary',
    onClick: onAccept,
    style: {
      alignSelf: 'center'
    }
  }, c.take));
}
Object.assign(__ds_scope, { HandoffAlert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/clinic/handoff/HandoffAlert.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  children,
  selected = false,
  onClick,
  onRemove,
  icon,
  count,
  style
}) {
  const [h, s] = __ds_scope.useInteractive(!onClick);
  const Comp = onClick ? 'button' : 'span';
  return /*#__PURE__*/React.createElement(Comp, _extends({
    type: onClick ? 'button' : undefined,
    onClick: onClick,
    "aria-pressed": onClick ? selected : undefined
  }, h, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 36,
      padding: onRemove ? '0 6px 0 12px' : '0 14px',
      borderRadius: 'var(--radius-pill)',
      boxSizing: 'border-box',
      border: `1px solid ${selected ? 'var(--teal-300)' : 'var(--border-default)'}`,
      background: selected ? 'var(--surface-selected)' : s.hover ? 'var(--surface-hover)' : 'var(--surface-card)',
      color: selected ? 'var(--teal-700)' : 'var(--text-body)',
      fontFamily: 'var(--font-text)',
      fontSize: 14,
      fontWeight: 500,
      cursor: onClick ? 'pointer' : 'default',
      boxShadow: s.focus ? 'var(--focus-ring)' : 'none',
      transition: __ds_scope.transition,
      outline: 'none',
      whiteSpace: 'nowrap',
      ...style
    }
  }), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  }), children, count != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontVariantNumeric: 'tabular-nums',
      fontSize: 12,
      fontWeight: 600,
      color: selected ? 'var(--teal-700)' : 'var(--text-muted)'
    }
  }, count), onRemove && /*#__PURE__*/React.createElement("span", {
    role: "button",
    tabIndex: 0,
    "aria-label": "Remover",
    onClick: e => {
      e.stopPropagation();
      onRemove();
    },
    style: {
      display: 'grid',
      placeItems: 'center',
      width: 24,
      height: 24,
      borderRadius: 99,
      color: 'var(--text-muted)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 14
  })));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Choice({
  kind,
  label,
  description,
  checked,
  defaultChecked,
  onChange,
  disabled,
  name,
  value,
  id
}) {
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = checked !== undefined ? checked : inner;
  const [focus, setFocus] = React.useState(false);
  const fid = id || kind + '-' + React.useId().replace(/:/g, '');
  const box = kind === 'radio' ? {
    width: 20,
    height: 20,
    borderRadius: 999,
    border: `1.5px solid ${on ? 'var(--action-primary)' : 'var(--border-strong)'}`,
    background: 'var(--surface-card)'
  } : {
    width: 20,
    height: 20,
    borderRadius: 6,
    border: `1.5px solid ${on ? 'var(--action-primary)' : 'var(--border-strong)'}`,
    background: on ? 'var(--action-primary)' : 'var(--surface-card)'
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      display: 'flex',
      alignItems: description ? 'flex-start' : 'center',
      gap: 12,
      minHeight: 'var(--touch-min)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      paddingTop: description ? 10 : 0,
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      flex: 'none',
      display: 'grid',
      placeItems: 'center',
      boxSizing: 'border-box',
      ...box,
      boxShadow: focus ? 'var(--focus-ring)' : 'none',
      transition: __ds_scope.transition
    }
  }, /*#__PURE__*/React.createElement("input", {
    id: fid,
    type: kind,
    name: name,
    value: value,
    checked: on,
    disabled: disabled,
    onChange: e => {
      if (checked === undefined) setInner(e.target.checked);
      onChange && onChange(e.target.checked, e);
    },
    onFocus: e => setFocus(e.target.matches(':focus-visible')),
    onBlur: () => setFocus(false),
    style: {
      position: 'absolute',
      inset: -12,
      opacity: 0,
      margin: 0,
      cursor: 'inherit'
    }
  }), on && kind === 'checkbox' && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 14,
    strokeWidth: 3,
    color: "#fff"
  }), on && kind === 'radio' && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: 999,
      background: 'var(--action-primary)'
    }
  })), (label || description) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      lineHeight: '22px',
      color: 'var(--text-strong)',
      fontWeight: 500
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      lineHeight: '18px',
      color: 'var(--text-muted)'
    }
  }, description)));
}
function Checkbox(props) {
  return /*#__PURE__*/React.createElement(Choice, _extends({
    kind: "checkbox"
  }, props));
}
Object.assign(__ds_scope, { Checkbox, Choice });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Field({
  label,
  hint,
  error,
  id,
  required,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      minWidth: 0
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      fontSize: 14,
      lineHeight: '20px',
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--danger-text)'
    }
  }, " *")), children, (error || hint) && /*#__PURE__*/React.createElement("div", {
    id: id ? id + '-msg' : undefined,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 13,
      lineHeight: '18px',
      color: error ? 'var(--danger-text)' : 'var(--text-muted)'
    }
  }, error && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "circle-alert",
    size: 14
  }), error || hint));
}
function controlStyle({
  focus,
  error,
  disabled,
  size = 'md'
}) {
  return {
    height: size === 'lg' ? 'var(--control-h-lg)' : size === 'sm' ? 'var(--control-h-sm)' : 'var(--control-h-md)',
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    padding: '0 14px',
    boxSizing: 'border-box',
    width: '100%',
    background: disabled ? 'var(--bg-sunken)' : 'var(--surface-card)',
    borderRadius: 'var(--radius-md)',
    border: `1px solid ${error ? 'var(--danger)' : focus ? 'var(--border-focus)' : 'var(--border-default)'}`,
    boxShadow: focus ? error ? 'var(--shadow-focus-danger)' : '0 0 0 3px rgba(14,140,128,.18)' : 'none',
    color: 'var(--text-strong)',
    transition: __ds_scope.transition,
    opacity: disabled ? 0.7 : 1
  };
}
function Input({
  label,
  hint,
  error,
  iconLeft,
  suffix,
  size = 'md',
  id,
  required,
  disabled,
  style,
  inputStyle,
  onFocus,
  onBlur,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fid = id || 'in-' + React.useId().replace(/:/g, '');
  return /*#__PURE__*/React.createElement(Field, {
    label: label,
    hint: hint,
    error: error,
    id: fid,
    required: required
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...controlStyle({
        focus,
        error,
        disabled,
        size
      }),
      ...style
    }
  }, iconLeft && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: 18,
    color: "var(--text-subtle)"
  }), /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    disabled: disabled,
    required: required,
    "aria-invalid": !!error || undefined,
    "aria-describedby": error || hint ? fid + '-msg' : undefined,
    onFocus: e => {
      setFocus(true);
      onFocus && onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      onBlur && onBlur(e);
    }
  }, rest, {
    style: {
      flex: 1,
      minWidth: 0,
      height: '100%',
      border: 0,
      outline: 'none',
      background: 'transparent',
      font: 'inherit',
      fontSize: size === 'sm' ? 14 : 16,
      color: 'inherit',
      padding: 0,
      ...inputStyle
    }
  })), suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 14,
      whiteSpace: 'nowrap'
    }
  }, suffix)));
}
Object.assign(__ds_scope, { Field, controlStyle, Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio(props) {
  return /*#__PURE__*/React.createElement(__ds_scope.Choice, _extends({
    kind: "radio"
  }, props));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  hint,
  error,
  options = [],
  placeholder,
  size = 'md',
  id,
  required,
  disabled,
  iconLeft,
  value,
  defaultValue,
  onChange,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fid = id || 'sel-' + React.useId().replace(/:/g, '');
  return /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: label,
    hint: hint,
    error: error,
    id: fid,
    required: required
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...__ds_scope.controlStyle({
        focus,
        error,
        disabled,
        size
      }),
      position: 'relative',
      padding: 0,
      ...style
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 14,
      pointerEvents: 'none',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: 18,
    color: "var(--text-subtle)"
  })), /*#__PURE__*/React.createElement("select", _extends({
    id: fid,
    disabled: disabled,
    value: value,
    defaultValue: value === undefined ? defaultValue ?? (placeholder ? '' : undefined) : undefined,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    "aria-invalid": !!error || undefined
  }, rest, {
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      width: '100%',
      height: '100%',
      border: 0,
      outline: 'none',
      background: 'transparent',
      font: 'inherit',
      fontSize: size === 'sm' ? 14 : 16,
      color: 'inherit',
      padding: `0 40px 0 ${iconLeft ? 42 : 14}px`,
      cursor: disabled ? 'not-allowed' : 'pointer'
    }
  }), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(o => {
    const opt = typeof o === 'string' ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/React.createElement("option", {
      key: opt.value,
      value: opt.value,
      disabled: opt.disabled
    }, opt.label);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 14,
      pointerEvents: 'none',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 18,
    color: "var(--text-muted)"
  }))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked,
  defaultChecked,
  onChange,
  label,
  description,
  disabled,
  id
}) {
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = checked !== undefined ? checked : inner;
  const [focus, setFocus] = React.useState(false);
  const fid = id || 'sw-' + React.useId().replace(/:/g, '');
  const toggle = () => {
    if (disabled) return;
    if (checked === undefined) setInner(!on);
    onChange && onChange(!on);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: description ? 'flex-start' : 'center',
      gap: 12,
      minHeight: 'var(--touch-min)',
      opacity: disabled ? 0.5 : 1
    }
  }, /*#__PURE__*/React.createElement("button", {
    id: fid,
    type: "button",
    role: "switch",
    "aria-checked": on,
    disabled: disabled,
    onClick: toggle,
    onFocus: e => setFocus(e.target.matches(':focus-visible')),
    onBlur: () => setFocus(false),
    style: {
      flex: 'none',
      position: 'relative',
      width: 44,
      height: 26,
      borderRadius: 999,
      border: 0,
      padding: 0,
      cursor: disabled ? 'not-allowed' : 'pointer',
      marginTop: description ? 2 : 0,
      background: on ? 'var(--action-primary)' : 'var(--border-strong)',
      boxShadow: focus ? 'var(--focus-ring)' : 'none',
      transition: __ds_scope.transition,
      outline: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: on ? 21 : 3,
      width: 20,
      height: 20,
      borderRadius: 999,
      background: '#fff',
      boxShadow: '0 1px 3px rgba(28,36,48,.25)',
      transition: 'left var(--duration-base) var(--ease-standard)'
    }
  })), (label || description) && /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      cursor: disabled ? 'not-allowed' : 'pointer'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      lineHeight: '22px',
      fontWeight: 500,
      color: 'var(--text-strong)'
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      lineHeight: '18px',
      color: 'var(--text-muted)'
    }
  }, description)));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Textarea({
  label,
  hint,
  error,
  id,
  required,
  disabled,
  rows = 4,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fid = id || 'ta-' + React.useId().replace(/:/g, '');
  return /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: label,
    hint: hint,
    error: error,
    id: fid,
    required: required
  }, /*#__PURE__*/React.createElement("textarea", _extends({
    id: fid,
    rows: rows,
    disabled: disabled,
    required: required,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest, {
    style: {
      ...__ds_scope.controlStyle({
        focus,
        error,
        disabled
      }),
      height: 'auto',
      padding: '12px 14px',
      font: 'inherit',
      fontSize: 16,
      lineHeight: '24px',
      resize: 'vertical',
      outline: 'none',
      ...style
    }
  })));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  value,
  onChange,
  variant = 'underline',
  size = 'md',
  style
}) {
  const seg = variant === 'segmented';
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      gap: seg ? 2 : 4,
      padding: seg ? 4 : 0,
      background: seg ? 'var(--bg-sunken)' : 'transparent',
      borderRadius: seg ? 'var(--radius-md)' : 0,
      borderBottom: seg ? 'none' : '1px solid var(--border-subtle)',
      width: seg ? 'fit-content' : undefined,
      ...style
    }
  }, items.map(it => {
    const on = it.id === value;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      role: "tab",
      "aria-selected": on,
      type: "button",
      onClick: () => onChange && onChange(it.id),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        height: seg ? size === 'sm' ? 32 : 36 : 44,
        padding: seg ? '0 14px' : '0 12px',
        border: 0,
        cursor: 'pointer',
        background: seg && on ? 'var(--surface-card)' : 'transparent',
        borderRadius: seg ? 'var(--radius-sm)' : 0,
        boxShadow: seg && on ? 'var(--shadow-sm)' : 'none',
        color: on ? seg ? 'var(--text-strong)' : 'var(--teal-700)' : 'var(--text-muted)',
        fontFamily: 'var(--font-text)',
        fontSize: size === 'sm' ? 13 : 14,
        fontWeight: 600,
        borderBottom: seg ? 0 : `2px solid ${on ? 'var(--accent-brand)' : 'transparent'}`,
        marginBottom: seg ? 0 : -1,
        transition: __ds_scope.transition,
        whiteSpace: 'nowrap'
      }
    }, it.icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon,
      size: 16
    }), it.label, it.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        minWidth: 20,
        height: 20,
        padding: '0 6px',
        borderRadius: 99,
        boxSizing: 'border-box',
        display: 'inline-grid',
        placeItems: 'center',
        fontSize: 12,
        fontVariantNumeric: 'tabular-nums',
        background: it.urgent ? 'var(--danger)' : on ? 'var(--teal-50)' : 'var(--sand-200)',
        color: it.urgent ? '#fff' : on ? 'var(--teal-700)' : 'var(--text-muted)'
      }
    }, it.count));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/overlays/Dialog.jsx
try { (() => {
function Dialog({
  open = true,
  title,
  description,
  icon,
  tone = 'default',
  children,
  actions,
  onClose,
  width = 480,
  inline = false
}) {
  if (!open) return null;
  const iconTone = {
    default: ['var(--teal-50)', 'var(--teal-700)'],
    danger: ['var(--danger-surface)', 'var(--danger-text)'],
    ai: ['var(--ai-surface)', 'var(--ai-accent-text)']
  }[tone];
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: inline ? 'absolute' : 'fixed',
      inset: 0,
      background: 'var(--overlay-scrim)',
      display: 'grid',
      placeItems: 'center',
      padding: 24,
      zIndex: 1000
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    "aria-label": title,
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      maxWidth: width,
      background: 'var(--surface-raised)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-lg)',
      padding: 28,
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, onClose && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Fechar",
    size: "sm",
    onClick: onClose,
    style: {
      position: 'absolute',
      top: 16,
      right: 16
    }
  }), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 14,
      background: iconTone[0],
      color: iconTone[1],
      display: 'grid',
      placeItems: 'center',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 22
  })), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 20,
      lineHeight: '28px',
      fontWeight: 700,
      letterSpacing: '-0.01em',
      color: 'var(--text-strong)',
      paddingRight: 32
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      fontSize: 15,
      lineHeight: '22px',
      color: 'var(--text-muted)',
      textWrap: 'pretty'
    }
  }, description), children && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, children), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 10,
      marginTop: 24,
      flexWrap: 'wrap'
    }
  }, actions)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/overlays/Toast.jsx
try { (() => {
const T = {
  info: ['info', 'var(--teal-600)'],
  success: ['circle-check', 'var(--success)'],
  warning: ['triangle-alert', 'var(--warning)'],
  danger: ['circle-alert', 'var(--danger)'],
  ai: ['sparkles', 'var(--ai-accent)']
};
function Toast({
  tone = 'info',
  title,
  description,
  action,
  onClose,
  style
}) {
  const [icon, color] = T[tone] || T.info;
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    "aria-live": "polite",
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
      width: 380,
      maxWidth: '100%',
      boxSizing: 'border-box',
      padding: '14px 12px 14px 16px',
      background: 'var(--surface-raised)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20,
    color: color
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      lineHeight: '22px',
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, title), description && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: '20px',
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, description), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, action)), onClose && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Fechar",
    size: "sm",
    onClick: onClose,
    style: {
      marginTop: -6
    }
  }));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/Toast.jsx", error: String((e && e.message) || e) }); }

// ui_kits/painel/Agenda.jsx
try { (() => {
(() => {
  const {
    WeekCalendar,
    Tabs,
    Button,
    IconButton,
    Card,
    StatusBadge,
    Avatar,
    Dialog,
    TimeSlots,
    Icon,
    Badge,
    Select,
    AppointmentCard
  } = window.ForgeonClinicDesignSystem_5b731b;
  function Detail({
    a,
    prof,
    locale,
    onConfirm,
    onReschedule,
    onCancel
  }) {
    const es = locale === 'es-ES';
    const D = window.FC_DATA;
    const day = D.days.find(d => d.key === a.day);
    const row = (icon, label, val) => /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-subtle)',
        paddingTop: 2
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 18
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: 'var(--text-muted)'
      }
    }, label), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 15,
        fontWeight: 500,
        color: 'var(--text-strong)',
        fontVariantNumeric: 'tabular-nums'
      }
    }, val)));
    return /*#__PURE__*/React.createElement(Card, {
      padding: "md",
      style: {
        position: 'sticky',
        top: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: a.patient,
      size: 48
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 18,
        fontWeight: 700,
        color: 'var(--text-strong)'
      }
    }, a.patient), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 4,
        display: 'flex',
        gap: 6,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(StatusBadge, {
      status: a.status,
      locale: locale,
      size: "sm"
    }), a.byAgent && /*#__PURE__*/React.createElement(Badge, {
      tone: "ai",
      size: "sm",
      icon: "sparkles"
    }, es ? 'Agendada por IA' : 'Agendada pela IA')))), row('calendar', es ? 'Fecha' : 'Data', `${day.label} ${day.date}/10 · ${a.start}–${a.end}`), row('stethoscope', es ? 'Servicio' : 'Serviço', a.service || '—'), row('user-round', es ? 'Profesional' : 'Profissional', prof.name), row('whatsapp', 'WhatsApp', '+55 11 98765-4321'), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        paddingTop: 4
      }
    }, a.status === 'pending' && /*#__PURE__*/React.createElement(Button, {
      iconLeft: "check",
      fullWidth: true,
      onClick: onConfirm
    }, es ? 'Marcar como confirmada' : 'Marcar como confirmada'), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      iconLeft: "repeat",
      fullWidth: true,
      onClick: onReschedule,
      disabled: a.status === 'cancelled'
    }, es ? 'Reprogramar' : 'Remarcar'), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      iconLeft: "calendar-x",
      fullWidth: true,
      onClick: onCancel,
      disabled: a.status === 'cancelled',
      style: {
        color: a.status === 'cancelled' ? undefined : 'var(--danger-text)'
      }
    }, es ? 'Cancelar cita' : 'Cancelar consulta'))));
  }
  function Agenda({
    locale,
    toast
  }) {
    const es = locale === 'es-ES';
    const D = window.FC_DATA;
    const [prof, setProf] = React.useState('ana');
    const [view, setView] = React.useState('semana');
    const [appts, setAppts] = React.useState(D.appointments);
    const [sel, setSel] = React.useState('a3');
    const [dlg, setDlg] = React.useState(null);
    const [slot, setSlot] = React.useState('10:30');
    const list = appts[prof];
    const cur = list.find(a => a.id === sel) || list[0];
    const P = D.professionals.find(p => p.id === prof);
    const update = patch => setAppts(s => ({
      ...s,
      [prof]: s[prof].map(a => a.id === cur.id ? {
        ...a,
        ...patch
      } : a)
    }));
    const days = D.days.map(d => ({
      ...d,
      label: es ? {
        Seg: 'Lun',
        Ter: 'Mar',
        Qua: 'Mié',
        Qui: 'Jue',
        Sex: 'Vie'
      }[d.label] : d.label
    }));
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 28,
        display: 'flex',
        flexDirection: 'column',
        gap: 20
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Tabs, {
      value: prof,
      onChange: p => {
        setProf(p);
        setSel(appts[p][0].id);
      },
      items: D.professionals.map(p => ({
        id: p.id,
        label: p.name,
        count: appts[p.id].filter(a => a.day === 'ter').length
      })),
      style: {
        flex: 1
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: "chevron-left",
      label: es ? 'Semana anterior' : 'Semana anterior',
      variant: "secondary",
      size: "sm"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        fontWeight: 600,
        color: 'var(--text-strong)',
        fontVariantNumeric: 'tabular-nums',
        minWidth: 120,
        textAlign: 'center'
      }
    }, "13 \u2013 17 ", es ? 'oct' : 'out', " 2026"), /*#__PURE__*/React.createElement(IconButton, {
      icon: "chevron-right",
      label: es ? 'Semana siguiente' : 'Próxima semana',
      variant: "secondary",
      size: "sm"
    }), /*#__PURE__*/React.createElement(Tabs, {
      variant: "segmented",
      size: "sm",
      value: view,
      onChange: setView,
      items: [{
        id: 'dia',
        label: es ? 'Día' : 'Dia'
      }, {
        id: 'semana',
        label: 'Semana'
      }],
      style: {
        marginLeft: 8
      }
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'minmax(0,1fr) 300px',
        gap: 20,
        alignItems: 'start'
      }
    }, view === 'semana' ? /*#__PURE__*/React.createElement("div", {
      style: {
        overflowX: 'auto',
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement(WeekCalendar, {
      style: {
        minWidth: 640
      },
      days: days,
      appointments: list,
      startHour: 8,
      endHour: 18,
      hourHeight: 52,
      now: "10:40",
      selectedId: cur && cur.id,
      onSelect: a => setSel(a.id)
    })) : /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, list.filter(a => a.day === 'ter').map(a => /*#__PURE__*/React.createElement(AppointmentCard, {
      key: a.id,
      time: a.start,
      endTime: a.end,
      patient: a.patient,
      service: a.service,
      professional: P.name,
      status: a.status,
      bookedByAgent: a.byAgent,
      locale: locale,
      selected: cur && a.id === cur.id,
      onClick: () => setSel(a.id)
    }))), cur && /*#__PURE__*/React.createElement(Detail, {
      a: cur,
      prof: P,
      locale: locale,
      onConfirm: () => {
        update({
          status: 'confirmed'
        });
        toast({
          tone: 'success',
          title: es ? 'Cita confirmada' : 'Consulta confirmada'
        });
      },
      onReschedule: () => setDlg('resched'),
      onCancel: () => setDlg('cancel')
    })), dlg === 'resched' && /*#__PURE__*/React.createElement(Dialog, {
      title: es ? `Reprogramar a ${cur.patient}` : `Remarcar ${cur.patient}`,
      description: es ? 'Elige un horario libre. Enviaremos la nueva fecha por WhatsApp.' : 'Escolha um horário livre. Vamos enviar a nova data pelo WhatsApp.',
      icon: "repeat",
      onClose: () => setDlg(null),
      width: 520,
      actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
        variant: "ghost",
        onClick: () => setDlg(null)
      }, es ? 'Volver' : 'Voltar'), /*#__PURE__*/React.createElement(Button, {
        iconLeft: "send",
        onClick: () => {
          update({
            status: 'rescheduled',
            start: slot
          });
          setDlg(null);
          toast({
            tone: 'success',
            title: es ? 'Cita reprogramada' : 'Consulta remarcada',
            description: es ? `${cur.patient} recibió la nueva fecha por WhatsApp.` : `${cur.patient} recebeu a nova data no WhatsApp.`
          });
        }
      }, es ? 'Reprogramar y avisar' : 'Remarcar e avisar'))
    }, /*#__PURE__*/React.createElement(TimeSlots, {
      value: slot,
      onChange: setSlot,
      columns: 4,
      groups: [{
        label: es ? 'Mañana' : 'Manhã',
        slots: ['08:00', {
          time: '09:00',
          available: false
        }, {
          time: '10:30',
          suggested: true
        }, '11:00']
      }, {
        label: es ? 'Tarde' : 'Tarde',
        slots: ['14:00', {
          time: '15:00',
          available: false
        }, {
          time: '16:30',
          suggested: true
        }, '17:00']
      }]
    })), dlg === 'cancel' && /*#__PURE__*/React.createElement(Dialog, {
      tone: "danger",
      icon: "calendar-x",
      title: es ? '¿Cancelar la cita?' : 'Cancelar consulta?',
      description: es ? `Avisaremos a ${cur.patient} por WhatsApp y liberaremos el horario.` : `Vamos avisar ${cur.patient} pelo WhatsApp e liberar o horário.`,
      onClose: () => setDlg(null),
      actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
        variant: "ghost",
        onClick: () => setDlg(null)
      }, es ? 'Volver' : 'Voltar'), /*#__PURE__*/React.createElement(Button, {
        variant: "danger",
        onClick: () => {
          update({
            status: 'cancelled'
          });
          setDlg(null);
          toast({
            tone: 'info',
            title: es ? 'Cita cancelada' : 'Consulta cancelada',
            description: es ? 'El horario quedó libre.' : 'O horário ficou livre.'
          });
        }
      }, es ? 'Cancelar cita' : 'Cancelar consulta'))
    }));
  }
  Object.assign(window, {
    Agenda
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/painel/Agenda.jsx", error: String((e && e.message) || e) }); }

// ui_kits/painel/Conversations.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
(() => {
  const {
    ConversationItem,
    ChatBubble,
    Button,
    IconButton,
    Icon,
    Badge,
    Tabs,
    Input,
    Avatar,
    Card,
    StatusBadge,
    HandoffAlert
  } = window.ForgeonClinicDesignSystem_5b731b;
  function Composer({
    disabled,
    onSend,
    locale,
    onTake
  }) {
    const es = locale === 'es-ES';
    const [v, setV] = React.useState('');
    if (disabled) {
      return /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          padding: '14px 20px',
          borderTop: '1px solid var(--border-subtle)',
          background: 'var(--ai-surface)'
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "sparkles",
        size: 18,
        color: "var(--ai-accent-text)"
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          flex: 1,
          fontSize: 14,
          color: 'var(--text-body)'
        }
      }, es ? 'El agente IA está atendiendo esta conversación.' : 'O agente IA está cuidando desta conversa.'), /*#__PURE__*/React.createElement(Button, {
        size: "sm",
        variant: "secondary",
        iconLeft: "headset",
        onClick: onTake
      }, es ? 'Atender yo' : 'Assumir conversa'));
    }
    const send = () => {
      if (!v.trim()) return;
      onSend(v.trim());
      setV('');
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '12px 16px',
        borderTop: '1px solid var(--border-subtle)',
        background: 'var(--surface-card)'
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: "paperclip",
      label: es ? 'Adjuntar' : 'Anexar'
    }), /*#__PURE__*/React.createElement(IconButton, {
      icon: "file-text",
      label: es ? 'Plantillas' : 'Modelos'
    }), /*#__PURE__*/React.createElement("input", {
      value: v,
      onChange: e => setV(e.target.value),
      onKeyDown: e => e.key === 'Enter' && send(),
      placeholder: es ? 'Escribe un mensaje…' : 'Escreva uma mensagem…',
      style: {
        flex: 1,
        height: 44,
        borderRadius: 12,
        border: '1px solid var(--border-default)',
        padding: '0 14px',
        font: 'inherit',
        fontSize: 15,
        background: 'var(--surface-subtle)',
        color: 'var(--text-strong)',
        outline: 'none'
      }
    }), /*#__PURE__*/React.createElement(Button, {
      iconLeft: "send",
      onClick: send
    }, es ? 'Enviar' : 'Enviar'));
  }
  function Conversations({
    locale,
    initialId,
    toast,
    onResolveHandoff
  }) {
    const es = locale === 'es-ES';
    const D = window.FC_DATA;
    const [convs, setConvs] = React.useState(D.conversations);
    const [id, setId] = React.useState(initialId || 'c1');
    const [filter, setFilter] = React.useState('todas');
    const c = convs.find(x => x.id === id);
    const scroller = React.useRef(null);
    React.useEffect(() => {
      if (scroller.current) scroller.current.scrollTop = scroller.current.scrollHeight;
    }, [id, c.messages.length]);
    const patch = p => setConvs(s => s.map(x => x.id === id ? {
      ...x,
      ...p
    } : x));
    const take = () => {
      patch({
        urgent: false,
        handledBy: 'human',
        unread: 0,
        messages: [...c.messages, {
          from: 'system',
          text: (es ? 'Carla asumió la conversación · ' : 'Carla assumiu a conversa · ') + '09:19'
        }]
      });
      onResolveHandoff && onResolveHandoff(id);
      toast({
        tone: 'success',
        title: es ? 'Conversación asumida' : 'Você assumiu a conversa',
        description: es ? 'El agente queda en pausa para este paciente.' : 'O agente fica em pausa para este paciente.'
      });
    };
    const send = text => patch({
      messages: [...c.messages, {
        from: 'human',
        author: 'Carla',
        text,
        time: '09:20',
        status: 'sent'
      }],
      preview: text,
      time: '09:20'
    });
    const shown = convs.filter(x => filter === 'todas' || (filter === 'humano' ? x.urgent : filter === 'ia' ? !x.urgent && x.handledBy === 'agent' : x.handledBy === 'human' && !x.urgent));
    const human = c.handledBy === 'human' && !c.urgent;
    const root = React.useRef(null);
    const [w, setW] = React.useState(0);
    React.useLayoutEffect(() => {
      const el = root.current;
      if (!el) return;
      const m = () => setW(el.clientWidth);
      m();
      const ro = new ResizeObserver(m);
      ro.observe(el);
      window.addEventListener('resize', m);
      return () => {
        ro.disconnect();
        window.removeEventListener('resize', m);
      };
    }, []);
    const showAside = w >= 1100;
    return /*#__PURE__*/React.createElement("div", {
      ref: root,
      style: {
        height: '100%',
        minHeight: 0,
        overflowX: 'auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: showAside ? 'minmax(260px,320px) minmax(360px,1fr) minmax(0,280px)' : 'minmax(240px,280px) minmax(360px,1fr)',
        height: '100%',
        minHeight: 0,
        minWidth: 640
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        borderRight: '1px solid var(--border-subtle)',
        background: 'var(--surface-card)',
        display: 'flex',
        flexDirection: 'column',
        minHeight: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '16px 16px 0',
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Input, {
      iconLeft: "search",
      placeholder: es ? 'Buscar paciente…' : 'Buscar paciente…',
      size: "sm"
    }), /*#__PURE__*/React.createElement(Tabs, {
      size: "sm",
      value: filter,
      onChange: setFilter,
      items: [{
        id: 'todas',
        label: es ? 'Todas' : 'Todas'
      }, {
        id: 'humano',
        label: es ? 'Espera' : 'Aguardando',
        count: convs.filter(x => x.urgent).length || undefined,
        urgent: true
      }, {
        id: 'ia',
        label: 'IA'
      }, {
        id: 'recepcao',
        label: es ? 'Recepción' : 'Recepção'
      }]
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflow: 'auto',
        padding: 8,
        display: 'flex',
        flexDirection: 'column',
        gap: 2
      }
    }, shown.map(x => /*#__PURE__*/React.createElement(ConversationItem, _extends({
      key: x.id
    }, x, {
      locale: locale,
      selected: x.id === id,
      onClick: () => {
        setId(x.id);
        setConvs(s => s.map(y => y.id === x.id && !y.urgent ? {
          ...y,
          unread: 0
        } : y));
      }
    }))))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: 0,
        background: 'var(--chat-wallpaper)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '12px 20px',
        background: 'var(--surface-card)',
        borderBottom: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: c.name,
      size: 40
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 600,
        color: 'var(--text-strong)',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, c.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--text-muted)',
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        fontVariantNumeric: 'tabular-nums',
        whiteSpace: 'nowrap',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "whatsapp",
      size: 13,
      color: "var(--whatsapp-text)"
    }), c.phone)), c.urgent ? /*#__PURE__*/React.createElement(Badge, {
      tone: "danger",
      icon: "hand"
    }, es ? 'Espera humano' : 'Aguarda humano') : human ? /*#__PURE__*/React.createElement(Badge, {
      tone: "teal",
      icon: "headset"
    }, es ? 'Recepción' : 'Recepção') : /*#__PURE__*/React.createElement(Badge, {
      tone: "ai",
      icon: "sparkles"
    }, "Agente IA"), /*#__PURE__*/React.createElement(IconButton, {
      icon: "ellipsis-vertical",
      label: es ? 'Más' : 'Mais'
    })), c.urgent && /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '12px 20px 0'
      }
    }, /*#__PURE__*/React.createElement(HandoffAlert, {
      urgency: "urgent",
      compact: w >= 1100,
      locale: locale,
      title: es ? 'El agente pidió ayuda humana' : 'O agente pediu ajuda humana',
      reason: c.reason,
      waiting: es ? 'hace 4 min' : 'há 4 min',
      onAccept: take
    })), /*#__PURE__*/React.createElement("div", {
      ref: scroller,
      style: {
        flex: 1,
        overflowY: 'auto',
        overflowX: 'hidden',
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, c.messages.map((m, i) => /*#__PURE__*/React.createElement(ChatBubble, _extends({
      key: i
    }, m, {
      locale: locale
    }), m.slots && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 6
      }
    }, m.slots.map(t => /*#__PURE__*/React.createElement("span", {
      key: t,
      style: {
        padding: '6px 10px',
        borderRadius: 10,
        background: 'var(--surface-card)',
        border: '1px solid var(--teal-200)',
        fontWeight: 600,
        fontSize: 14,
        color: 'var(--teal-700)',
        fontVariantNumeric: 'tabular-nums'
      }
    }, t)))))), /*#__PURE__*/React.createElement(Composer, {
      disabled: !human,
      onTake: take,
      onSend: send,
      locale: locale
    })), showAside && /*#__PURE__*/React.createElement("aside", {
      style: {
        borderLeft: '1px solid var(--border-subtle)',
        background: 'var(--surface-card)',
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        gap: 18,
        overflow: 'auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
        textAlign: 'center',
        paddingTop: 8
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: c.name,
      size: 64
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 18,
        fontWeight: 700,
        color: 'var(--text-strong)'
      }
    }, c.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--text-muted)'
      }
    }, es ? 'Paciente de' : 'Paciente de', " ", c.professional)), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 14,
        borderRadius: 14,
        background: 'var(--surface-subtle)',
        border: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: '.08em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)'
      }
    }, es ? 'Próxima cita' : 'Próxima consulta'), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 6,
        fontSize: 15,
        fontWeight: 600,
        color: 'var(--text-strong)',
        fontVariantNumeric: 'tabular-nums'
      }
    }, c.next), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 8
      }
    }, /*#__PURE__*/React.createElement(StatusBadge, {
      status: "confirmed",
      locale: locale,
      size: "sm"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      iconLeft: "calendar-plus",
      fullWidth: true
    }, es ? 'Nueva cita' : 'Nova consulta'), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      iconLeft: "user",
      fullWidth: true
    }, es ? 'Ver ficha' : 'Ver ficha')))));
  }
  Object.assign(window, {
    Conversations
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/painel/Conversations.jsx", error: String((e && e.message) || e) }); }

// ui_kits/painel/Dashboard.jsx
try { (() => {
(() => {
  const {
    KpiCard,
    HandoffAlert,
    AppointmentCard,
    Card,
    Button,
    IconButton,
    Badge,
    Icon
  } = window.ForgeonClinicDesignSystem_5b731b;
  function Dashboard({
    locale,
    go,
    openConversation,
    handoffs
  }) {
    const es = locale === 'es-ES';
    const D = window.FC_DATA;
    const today = [...D.appointments.ana, ...D.appointments.paulo, ...D.appointments.julia].filter(a => a.day === 'ter').sort((a, b) => a.start.localeCompare(b.start));
    const prof = a => D.appointments.ana.includes(a) ? 'Dra. Ana Lima' : D.appointments.paulo.includes(a) ? 'Dr. Paulo Reis' : 'Dra. Júlia Prado';
    const activity = es ? [['calendar-check', 'Confirmó la cita de Helena Rocha', '18:22'], ['repeat', 'Reprogramó a Marina Souza para el viernes 10:30', '09:11'], ['hand', 'Pidió ayuda humana para Marcos Teixeira', '09:14'], ['bell', 'Envió 14 recordatorios para mañana', '08:00']] : [['calendar-check', 'Confirmou a consulta de Helena Rocha', '18:22'], ['repeat', 'Remarcou Marina Souza para sexta 10:30', '09:11'], ['hand', 'Pediu ajuda humana para Marcos Teixeira', '09:14'], ['bell', 'Enviou 14 lembretes para amanhã', '08:00']];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 28,
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
        maxWidth: 1200
      }
    }, handoffs > 0 && /*#__PURE__*/React.createElement(HandoffAlert, {
      urgency: "urgent",
      locale: locale,
      title: es ? 'Marcos Teixeira necesita a alguien del equipo' : 'Marcos Teixeira precisa de alguém da equipe',
      reason: es ? 'Dolor y sangrado tras la extracción de ayer. El agente ya avisó al paciente.' : 'Dor e sangramento após a extração de ontem. O agente já avisou o paciente.',
      quote: es ? 'Me duele bastante y sangra un poco' : 'Tá doendo bastante e sangrando um pouco',
      patient: "Marcos",
      waiting: es ? 'hace 4 min' : 'há 4 min',
      onAccept: () => openConversation('c1'),
      onView: () => openConversation('c1')
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(KpiCard, {
      icon: "calendar-days",
      label: es ? 'Citas hoy' : 'Consultas hoje',
      value: today.length,
      hint: es ? '3 profesionales' : '3 profissionais'
    }), /*#__PURE__*/React.createElement(KpiCard, {
      icon: "calendar-check",
      label: es ? 'Tasa de confirmación' : 'Taxa de confirmação',
      value: "92,4",
      unit: "%",
      delta: {
        value: '+3,1 p.p.',
        trend: 'up'
      },
      sparkline: [80, 84, 83, 88, 87, 90, 92]
    }), /*#__PURE__*/React.createElement(KpiCard, {
      icon: "user-x",
      label: es ? 'Ausencias (7 días)' : 'Faltas (7 dias)',
      value: "3",
      delta: {
        value: '−40%',
        trend: 'down',
        good: true
      },
      hint: es ? 'vs. semana pasada' : 'vs. semana passada'
    }), /*#__PURE__*/React.createElement(KpiCard, {
      tone: "ai",
      icon: "sparkles",
      label: es ? 'Resueltas por la IA' : 'Resolvidas pela IA',
      value: "87",
      unit: "%",
      delta: {
        value: '+5%',
        trend: 'up'
      },
      sparkline: [70, 72, 78, 80, 83, 85, 87]
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
        gap: 20,
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement(Card, {
      title: es ? 'Citas de hoy' : 'Consultas de hoje',
      subtitle: es ? 'Martes, 14 de octubre' : 'Terça, 14 de outubro',
      actions: /*#__PURE__*/React.createElement(Button, {
        size: "sm",
        variant: "ghost",
        iconRight: "arrow-right",
        onClick: () => go('agenda')
      }, es ? 'Ver agenda' : 'Ver agenda')
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, today.map(a => /*#__PURE__*/React.createElement(AppointmentCard, {
      key: a.id,
      compact: false,
      time: a.start,
      endTime: a.end,
      patient: a.patient,
      service: a.service,
      professional: prof(a),
      status: a.status,
      bookedByAgent: a.byAgent,
      locale: locale,
      actions: /*#__PURE__*/React.createElement(IconButton, {
        icon: "message-circle",
        label: es ? 'Abrir conversación' : 'Abrir conversa',
        size: "sm",
        onClick: () => go('conversas')
      })
    })))), /*#__PURE__*/React.createElement(Card, {
      title: es ? 'Actividad del agente' : 'Atividade do agente',
      subtitle: es ? 'Últimas 24 h' : 'Últimas 24h'
    }, /*#__PURE__*/React.createElement("ol", {
      style: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, activity.map(([ic, t, h], i) => /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        display: 'flex',
        gap: 12,
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 32,
        height: 32,
        flex: 'none',
        borderRadius: 10,
        display: 'grid',
        placeItems: 'center',
        background: ic === 'hand' ? 'var(--danger-surface)' : 'var(--ai-surface)',
        color: ic === 'hand' ? 'var(--danger-text)' : 'var(--ai-accent-text)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 16
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        fontSize: 14,
        lineHeight: '20px',
        color: 'var(--text-body)',
        paddingTop: 6
      }
    }, t), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        color: 'var(--text-subtle)',
        fontVariantNumeric: 'tabular-nums',
        paddingTop: 7
      }
    }, h)))))));
  }
  Object.assign(window, {
    Dashboard
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/painel/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/painel/Patients.jsx
try { (() => {
(() => {
  const {
    PatientTable,
    Input,
    Tag,
    Button,
    Select,
    Card,
    Switch,
    Badge,
    Icon,
    IconButton,
    ChatBubble
  } = window.ForgeonClinicDesignSystem_5b731b;
  function Patients({
    locale
  }) {
    const es = locale === 'es-ES';
    const D = window.FC_DATA;
    const [q, setQ] = React.useState('');
    const [f, setF] = React.useState('all');
    const [sel, setSel] = React.useState(null);
    const rows = D.patients.filter(p => (f === 'all' || p.status === f) && p.name.toLowerCase().includes(q.toLowerCase()));
    const count = s => D.patients.filter(p => p.status === s).length;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 28,
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        alignItems: 'center',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 320
      }
    }, /*#__PURE__*/React.createElement(Input, {
      iconLeft: "search",
      placeholder: es ? 'Buscar por nombre o teléfono' : 'Buscar por nome ou telefone',
      value: q,
      onChange: e => setQ(e.target.value)
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap',
        flex: 1
      }
    }, /*#__PURE__*/React.createElement(Tag, {
      selected: f === 'all',
      onClick: () => setF('all'),
      count: D.patients.length
    }, es ? 'Todos' : 'Todos'), /*#__PURE__*/React.createElement(Tag, {
      selected: f === 'pending',
      onClick: () => setF('pending'),
      count: count('pending')
    }, es ? 'Pendientes' : 'Pendentes'), /*#__PURE__*/React.createElement(Tag, {
      selected: f === 'noshow',
      onClick: () => setF('noshow'),
      count: count('noshow')
    }, es ? 'No asistieron' : 'Faltaram'), /*#__PURE__*/React.createElement(Tag, {
      selected: f === 'cancelled',
      onClick: () => setF('cancelled'),
      count: count('cancelled')
    }, es ? 'Canceladas' : 'Canceladas')), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      iconLeft: "download"
    }, es ? 'Exportar' : 'Exportar'), /*#__PURE__*/React.createElement(Button, {
      iconLeft: "user-plus"
    }, es ? 'Nuevo paciente' : 'Novo paciente')), /*#__PURE__*/React.createElement(PatientTable, {
      rows: rows,
      locale: locale,
      selectedId: sel,
      onRowClick: r => setSel(r.id)
    }), rows.length === 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 40,
        textAlign: 'center',
        color: 'var(--text-muted)'
      }
    }, es ? 'Ningún paciente encontrado.' : 'Nenhum paciente encontrado.'));
  }
  function renderBody(body) {
    return body.split(/(\{\{[^}]+\}\})/g).map((part, i) => part.startsWith('{{') ? /*#__PURE__*/React.createElement("code", {
      key: i,
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 13,
        background: 'var(--ai-surface)',
        color: 'var(--ai-accent-text)',
        padding: '1px 5px',
        borderRadius: 6
      }
    }, part) : /*#__PURE__*/React.createElement("span", {
      key: i
    }, part));
  }
  function fill(body) {
    const vals = {
      'paciente.nome': 'Marina',
      'paciente.nombre': 'Lucía',
      data: 'quarta, 15/10',
      fecha: 'miércoles 15/10',
      hora: '14:30',
      profissional: 'a Dra. Ana Lima',
      profesional: 'el Dr. Pablo Ruiz',
      'clinica.endereco': 'Rua Harmonia, 120 · Vila Madalena'
    };
    return body.replace(/\{\{([^}]+)\}\}/g, (_, k) => vals[k] || k);
  }
  function Templates({
    locale
  }) {
    const es = locale === 'es-ES';
    const [list, setList] = React.useState(window.FC_DATA.templates);
    const [id, setId] = React.useState('t1');
    const t = list.find(x => x.id === id);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 28,
        display: 'grid',
        gridTemplateColumns: 'minmax(0,1fr) 380px',
        gap: 20,
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, list.map(x => /*#__PURE__*/React.createElement(Card, {
      key: x.id,
      variant: x.id === id ? 'selected' : 'outlined',
      padding: "sm",
      onClick: () => setId(x.id)
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 14,
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 40,
        height: 40,
        flex: 'none',
        borderRadius: 12,
        display: 'grid',
        placeItems: 'center',
        background: x.channel === 'email' ? 'var(--teal-50)' : '#E3F9EA',
        color: x.channel === 'email' ? 'var(--teal-700)' : 'var(--whatsapp-text)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: x.channel === 'email' ? 'mail' : 'whatsapp',
      size: 20
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        alignItems: 'center',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 600,
        color: 'var(--text-strong)'
      }
    }, x.name), /*#__PURE__*/React.createElement(Badge, {
      size: "sm"
    }, x.lang), !x.active && /*#__PURE__*/React.createElement(Badge, {
      size: "sm",
      tone: "warning"
    }, es ? 'Pausada' : 'Pausado')), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 6,
        fontSize: 14,
        lineHeight: '22px',
        color: 'var(--text-body)'
      }
    }, renderBody(x.body)), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 6,
        fontSize: 12.5,
        color: 'var(--text-muted)',
        fontVariantNumeric: 'tabular-nums'
      }
    }, x.sent, " ", es ? 'envíos en 30 días' : 'envios em 30 dias')), /*#__PURE__*/React.createElement("div", {
      onClick: e => e.stopPropagation()
    }, /*#__PURE__*/React.createElement(Switch, {
      checked: x.active,
      onChange: v => setList(s => s.map(y => y.id === x.id ? {
        ...y,
        active: v
      } : y))
    })))))), /*#__PURE__*/React.createElement(Card, {
      title: es ? 'Vista previa' : 'Pré-visualização',
      subtitle: es ? 'Así lo verá el paciente' : 'Como o paciente vai ver',
      style: {
        position: 'sticky',
        top: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--chat-wallpaper)',
        borderRadius: 14,
        padding: 16,
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        minHeight: 200
      }
    }, /*#__PURE__*/React.createElement(ChatBubble, {
      from: "agent",
      locale: t.lang,
      text: fill(t.body),
      time: "18:00",
      status: "read"
    }), t.id === 't1' && /*#__PURE__*/React.createElement(ChatBubble, {
      from: "patient",
      text: "Confirmo, obrigada!",
      time: "18:04"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        marginTop: 16
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      iconLeft: "pencil",
      fullWidth: true
    }, es ? 'Editar' : 'Editar'), /*#__PURE__*/React.createElement(Button, {
      variant: "soft",
      iconLeft: "send",
      fullWidth: true
    }, es ? 'Enviar prueba' : 'Enviar teste'))));
  }
  Object.assign(window, {
    Patients,
    Templates
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/painel/Patients.jsx", error: String((e && e.message) || e) }); }

// ui_kits/painel/Shell.jsx
try { (() => {
(() => {
  const {
    Logo,
    Icon,
    IconButton,
    Avatar,
    Switch,
    Badge,
    Tooltip
  } = window.ForgeonClinicDesignSystem_5b731b;
  const NAV = [{
    id: 'inicio',
    icon: 'layout-dashboard',
    pt: 'Início',
    es: 'Inicio'
  }, {
    id: 'agenda',
    icon: 'calendar-days',
    pt: 'Agenda',
    es: 'Agenda'
  }, {
    id: 'conversas',
    icon: 'messages-square',
    pt: 'Conversas',
    es: 'Conversaciones'
  }, {
    id: 'pacientes',
    icon: 'users',
    pt: 'Pacientes',
    es: 'Pacientes'
  }, {
    id: 'mensagens',
    icon: 'file-text',
    pt: 'Mensagens',
    es: 'Plantillas'
  }];
  function NavItem({
    item,
    active,
    onClick,
    locale,
    badge
  }) {
    const [hover, setHover] = React.useState(false);
    return /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: onClick,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        height: 44,
        padding: '0 12px',
        border: 0,
        borderRadius: 12,
        cursor: 'pointer',
        width: '100%',
        background: active ? 'var(--surface-selected)' : hover ? 'var(--surface-hover)' : 'transparent',
        color: active ? 'var(--teal-700)' : 'var(--text-body)',
        fontFamily: 'var(--font-text)',
        fontSize: 15,
        fontWeight: active ? 600 : 500,
        transition: 'background-color var(--duration-fast)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: item.icon,
      size: 20
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        textAlign: 'left'
      }
    }, item[locale === 'es-ES' ? 'es' : 'pt']), badge ? /*#__PURE__*/React.createElement("span", {
      style: {
        minWidth: 22,
        height: 22,
        padding: '0 7px',
        boxSizing: 'border-box',
        borderRadius: 99,
        background: 'var(--danger)',
        color: '#fff',
        fontSize: 12,
        fontWeight: 700,
        display: 'inline-grid',
        placeItems: 'center'
      }
    }, badge) : null);
  }
  function Sidebar({
    screen,
    setScreen,
    locale,
    agentOn,
    setAgentOn,
    handoffs
  }) {
    const es = locale === 'es-ES';
    return /*#__PURE__*/React.createElement("aside", {
      style: {
        width: 'var(--sidebar-w)',
        flex: 'none',
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
        padding: '20px 14px',
        boxSizing: 'border-box',
        background: 'var(--surface-card)',
        borderRight: '1px solid var(--border-subtle)',
        height: '100%',
        overflowY: 'auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '4px 10px'
      }
    }, /*#__PURE__*/React.createElement(Logo, {
      size: 28,
      tone: document.documentElement.dataset.theme === 'dark' ? 'white' : 'color'
    })), /*#__PURE__*/React.createElement("nav", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 2
      }
    }, NAV.map(n => /*#__PURE__*/React.createElement(NavItem, {
      key: n.id,
      item: n,
      locale: locale,
      active: screen === n.id,
      onClick: () => setScreen(n.id),
      badge: n.id === 'conversas' ? handoffs : 0
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 14,
        borderRadius: 16,
        background: 'var(--ai-surface)',
        border: '1px solid var(--ai-border)',
        display: 'flex',
        flexDirection: 'column',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        color: 'var(--ai-accent-text)',
        fontSize: 13,
        fontWeight: 700
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "sparkles",
      size: 16
    }), es ? 'Agente IA' : 'Agente IA'), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        lineHeight: '18px',
        color: 'var(--text-body)'
      }
    }, agentOn ? es ? 'Respondiendo en WhatsApp 24 h.' : 'Respondendo no WhatsApp 24h.' : es ? 'Pausado. La recepción responde.' : 'Pausado. A recepção responde.'), /*#__PURE__*/React.createElement(Switch, {
      checked: agentOn,
      onChange: setAgentOn,
      label: agentOn ? es ? 'Activo' : 'Ativo' : es ? 'Pausado' : 'Pausado'
    })), /*#__PURE__*/React.createElement(NavItem, {
      item: {
        icon: 'settings',
        pt: 'Configurações',
        es: 'Ajustes'
      },
      locale: locale,
      onClick: () => {}
    }));
  }
  function Topbar({
    title,
    subtitle,
    locale,
    setLocale,
    theme,
    setTheme,
    actions
  }) {
    const es = locale === 'es-ES';
    return /*#__PURE__*/React.createElement("header", {
      style: {
        height: 'var(--topbar-h)',
        flex: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        padding: '0 28px',
        borderBottom: '1px solid var(--border-subtle)',
        background: 'var(--surface-card)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 20,
        lineHeight: '28px',
        fontWeight: 700,
        letterSpacing: '-0.01em',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, title), subtitle && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--text-muted)',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, subtitle)), actions, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        height: 36,
        borderRadius: 10,
        background: 'var(--bg-sunken)',
        padding: 3
      }
    }, ['pt-BR', 'es-ES'].map(l => /*#__PURE__*/React.createElement("button", {
      key: l,
      type: "button",
      onClick: () => setLocale(l),
      style: {
        height: 30,
        padding: '0 10px',
        border: 0,
        borderRadius: 8,
        cursor: 'pointer',
        fontFamily: 'var(--font-text)',
        fontSize: 12.5,
        fontWeight: 600,
        background: locale === l ? 'var(--surface-card)' : 'transparent',
        color: locale === l ? 'var(--text-strong)' : 'var(--text-muted)',
        boxShadow: locale === l ? 'var(--shadow-xs)' : 'none'
      }
    }, l === 'pt-BR' ? 'PT' : 'ES'))), /*#__PURE__*/React.createElement(IconButton, {
      icon: theme === 'dark' ? 'sun' : 'moon',
      label: es ? 'Cambiar tema' : 'Alternar tema',
      onClick: () => setTheme(theme === 'dark' ? 'light' : 'dark')
    }), /*#__PURE__*/React.createElement(IconButton, {
      icon: "bell",
      label: es ? 'Notificaciones' : 'Notificações',
      badge: true
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        paddingLeft: 8,
        borderLeft: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: "Carla Mendes",
      size: 36,
      status: "online"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        lineHeight: '18px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        fontWeight: 600,
        color: 'var(--text-strong)'
      }
    }, "Carla Mendes"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: 'var(--text-muted)'
      }
    }, es ? 'Recepción' : 'Recepção'))));
  }
  Object.assign(window, {
    Sidebar,
    Topbar
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/painel/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/painel/data.js
try { (() => {
// Sample data for the Forgeon Clinic panel kit (fictional patients).
window.FC_DATA = {
  clinic: {
    name: 'Clínica Sorriso & Mente',
    city: 'São Paulo'
  },
  user: {
    name: 'Carla Mendes',
    role: 'Recepção'
  },
  professionals: [{
    id: 'ana',
    name: 'Dra. Ana Lima',
    specialty: 'Psicologia'
  }, {
    id: 'paulo',
    name: 'Dr. Paulo Reis',
    specialty: 'Odontologia · Clínico geral'
  }, {
    id: 'julia',
    name: 'Dra. Júlia Prado',
    specialty: 'Ortodontia'
  }],
  days: [{
    key: 'seg',
    label: 'Seg',
    date: 13
  }, {
    key: 'ter',
    label: 'Ter',
    date: 14,
    isToday: true,
    blocked: [{
      start: '12:00',
      end: '13:00',
      label: 'Almoço'
    }]
  }, {
    key: 'qua',
    label: 'Qua',
    date: 15,
    blocked: [{
      start: '12:00',
      end: '13:00',
      label: 'Almoço'
    }]
  }, {
    key: 'qui',
    label: 'Qui',
    date: 16
  }, {
    key: 'sex',
    label: 'Sex',
    date: 17
  }],
  appointments: {
    ana: [{
      id: 'a1',
      day: 'seg',
      start: '08:00',
      end: '08:50',
      patient: 'Lúcia Prado',
      service: 'Terapia individual',
      status: 'confirmed'
    }, {
      id: 'a2',
      day: 'seg',
      start: '10:00',
      end: '10:50',
      patient: 'Rafael Dias',
      service: 'Terapia individual',
      status: 'noshow'
    }, {
      id: 'a3',
      day: 'ter',
      start: '09:00',
      end: '09:50',
      patient: 'Marina Souza',
      service: 'Terapia individual',
      status: 'confirmed',
      byAgent: true
    }, {
      id: 'a4',
      day: 'ter',
      start: '14:00',
      end: '14:50',
      patient: 'Bruno Lima',
      service: 'Primeira sessão',
      status: 'pending'
    }, {
      id: 'a5',
      day: 'ter',
      start: '16:00',
      end: '16:50',
      patient: 'Helena Rocha',
      service: 'Terapia individual',
      status: 'confirmed',
      byAgent: true
    }, {
      id: 'a6',
      day: 'qua',
      start: '08:30',
      end: '09:20',
      patient: 'Ana Costa',
      service: 'Terapia individual',
      status: 'cancelled'
    }, {
      id: 'a7',
      day: 'qua',
      start: '11:00',
      end: '11:50',
      patient: 'Paula Reis',
      service: 'Terapia individual',
      status: 'rescheduled',
      byAgent: true
    }, {
      id: 'a8',
      day: 'qui',
      start: '09:00',
      end: '10:20',
      patient: 'Joana e Caio Melo',
      service: 'Terapia de casal',
      status: 'confirmed'
    }, {
      id: 'a9',
      day: 'qui',
      start: '15:00',
      end: '15:50',
      patient: 'Sofia Martins',
      service: 'Terapia individual',
      status: 'pending',
      byAgent: true
    }, {
      id: 'a10',
      day: 'sex',
      start: '13:00',
      end: '13:50',
      patient: 'Tiago Nunes',
      service: 'Terapia individual',
      status: 'confirmed',
      byAgent: true
    }],
    paulo: [{
      id: 'p1',
      day: 'seg',
      start: '08:00',
      end: '08:40',
      patient: 'Pedro Alves',
      service: 'Limpeza',
      status: 'confirmed'
    }, {
      id: 'p2',
      day: 'seg',
      start: '09:00',
      end: '10:00',
      patient: 'Renata Gomes',
      service: 'Canal',
      status: 'confirmed'
    }, {
      id: 'p3',
      day: 'ter',
      start: '08:30',
      end: '09:10',
      patient: 'Diego Souza',
      service: 'Avaliação',
      status: 'confirmed',
      byAgent: true
    }, {
      id: 'p4',
      day: 'ter',
      start: '10:00',
      end: '10:40',
      patient: 'Carolina Luz',
      service: 'Restauração',
      status: 'pending'
    }, {
      id: 'p5',
      day: 'ter',
      start: '15:00',
      end: '16:00',
      patient: 'Marcos Teixeira',
      service: 'Extração',
      status: 'confirmed'
    }, {
      id: 'p6',
      day: 'qua',
      start: '09:00',
      end: '09:40',
      patient: 'Isabela Freitas',
      service: 'Limpeza',
      status: 'confirmed',
      byAgent: true
    }, {
      id: 'p7',
      day: 'qui',
      start: '14:00',
      end: '14:40',
      patient: 'André Pires',
      service: 'Avaliação',
      status: 'cancelled'
    }, {
      id: 'p8',
      day: 'sex',
      start: '10:00',
      end: '10:40',
      patient: 'Beatriz Lopes',
      service: 'Clareamento',
      status: 'pending',
      byAgent: true
    }],
    julia: [{
      id: 'j1',
      day: 'ter',
      start: '13:00',
      end: '13:30',
      patient: 'Laura Campos',
      service: 'Manutenção aparelho',
      status: 'confirmed',
      byAgent: true
    }, {
      id: 'j2',
      day: 'qua',
      start: '14:00',
      end: '14:30',
      patient: 'Gabriel Ramos',
      service: 'Manutenção aparelho',
      status: 'confirmed'
    }, {
      id: 'j3',
      day: 'sex',
      start: '09:00',
      end: '10:00',
      patient: 'Clara Nogueira',
      service: 'Instalação de alinhadores',
      status: 'pending'
    }]
  },
  conversations: [{
    id: 'c1',
    name: 'Marcos Teixeira',
    phone: '+55 11 97654-3210',
    preview: 'Tá doendo bastante e sangrando um pouco',
    time: '09:18',
    unread: 2,
    urgent: true,
    professional: 'Dr. Paulo Reis',
    next: 'Hoje · 15:00 · Extração',
    reason: 'Dor e sangramento após procedimento. O agente sugeriu falar com a equipe.',
    messages: [{
      from: 'patient',
      text: 'Bom dia. Fiz uma extração ontem e tá doendo bastante e sangrando um pouco. É normal?',
      time: '09:14'
    }, {
      from: 'agent',
      text: 'Bom dia, Marcos. Sinto muito pelo desconforto. Para sua segurança, vou chamar alguém da nossa equipe agora mesmo. Um momento, por favor.',
      time: '09:14',
      status: 'read'
    }, {
      from: 'system',
      text: 'Agente pediu atendimento humano · 09:14'
    }, {
      from: 'patient',
      text: 'Tá bom, obrigado',
      time: '09:18'
    }]
  }, {
    id: 'c2',
    name: 'Marina Souza',
    phone: '+55 11 98765-4321',
    preview: 'Perfeito, obrigada!',
    time: '09:12',
    unread: 0,
    handledBy: 'agent',
    professional: 'Dra. Ana Lima',
    next: 'Sex 17 · 10:30 · Terapia individual',
    messages: [{
      from: 'patient',
      text: 'Oi! Consigo remarcar minha sessão de quinta pra sexta?',
      time: '09:10'
    }, {
      from: 'agent',
      text: 'Claro, Marina! Na sexta a Dra. Ana tem estes horários:',
      time: '09:10',
      status: 'read',
      slots: ['09:00', '10:30', '14:00']
    }, {
      from: 'patient',
      text: '10:30',
      time: '09:11'
    }, {
      from: 'agent',
      text: 'Pronto! Sua sessão ficou para sexta, 17/10, às 10:30. Te mando um lembrete um dia antes.',
      time: '09:11',
      status: 'read'
    }, {
      from: 'patient',
      text: 'Perfeito, obrigada!',
      time: '09:12'
    }]
  }, {
    id: 'c3',
    name: 'Javier Ortega',
    phone: '+34 612 345 678',
    preview: '¿Aceptáis Sanitas?',
    time: '08:57',
    unread: 1,
    handledBy: 'agent',
    professional: 'Dr. Paulo Reis',
    next: 'Mié 15 · 16:00 · Limpieza',
    messages: [{
      from: 'patient',
      text: 'Hola, ¿aceptáis Sanitas?',
      time: '08:57'
    }, {
      from: 'agent',
      text: 'Hola, Javier. Sí, trabajamos con Sanitas para limpiezas y revisiones. ¿Quieres que te reserve una cita?',
      time: '08:57',
      status: 'delivered'
    }]
  }, {
    id: 'c4',
    name: 'Pedro Alves',
    phone: '+55 21 99876-1234',
    preview: 'Obrigado, até quinta!',
    time: '08:40',
    unread: 0,
    handledBy: 'human',
    professional: 'Dr. Paulo Reis',
    next: 'Qui 16 · 08:00 · Limpeza',
    messages: [{
      from: 'patient',
      text: 'Preciso de nota fiscal da última consulta',
      time: '08:31'
    }, {
      from: 'system',
      text: 'Conversa transferida para a recepção · 08:32'
    }, {
      from: 'human',
      author: 'Carla',
      text: 'Oi, Pedro! Aqui é a Carla. Já te enviei a nota por e-mail.',
      time: '08:38',
      status: 'read'
    }, {
      from: 'patient',
      text: 'Obrigado, até quinta!',
      time: '08:40'
    }]
  }, {
    id: 'c5',
    name: 'Helena Rocha',
    phone: '+55 11 91111-2233',
    preview: 'Confirmado ✅',
    time: 'Ontem',
    unread: 0,
    handledBy: 'agent',
    professional: 'Dra. Ana Lima',
    next: 'Hoje · 16:00 · Terapia individual',
    messages: [{
      from: 'agent',
      text: 'Oi, Helena! Passando para lembrar da sua sessão amanhã, terça, às 16:00 com a Dra. Ana. Você confirma?',
      time: '18:00',
      status: 'read'
    }, {
      from: 'patient',
      text: 'Confirmado ✅',
      time: '18:22'
    }]
  }],
  patients: [{
    id: '1',
    name: 'Marina Souza',
    phone: '+55 11 98765-4321',
    professional: 'Dra. Ana Lima',
    lastVisit: '09/10/2026',
    next: '17/10 · 10:30',
    status: 'rescheduled'
  }, {
    id: '2',
    name: 'Marcos Teixeira',
    phone: '+55 11 97654-3210',
    professional: 'Dr. Paulo Reis',
    lastVisit: '13/10/2026',
    next: '14/10 · 15:00',
    status: 'confirmed'
  }, {
    id: '3',
    name: 'Javier Ortega',
    phone: '+34 612 345 678',
    professional: 'Dr. Paulo Reis',
    lastVisit: '28/09/2026',
    next: '15/10 · 16:00',
    status: 'pending'
  }, {
    id: '4',
    name: 'Pedro Alves',
    phone: '+55 21 99876-1234',
    professional: 'Dr. Paulo Reis',
    lastVisit: '30/09/2026',
    next: '16/10 · 08:00',
    status: 'confirmed'
  }, {
    id: '5',
    name: 'Rafael Dias',
    phone: '+55 11 93456-7890',
    professional: 'Dra. Ana Lima',
    lastVisit: '13/10/2026',
    status: 'noshow',
    channel: 'phone'
  }, {
    id: '6',
    name: 'Helena Rocha',
    phone: '+55 11 91111-2233',
    professional: 'Dra. Ana Lima',
    lastVisit: '07/10/2026',
    next: '14/10 · 16:00',
    status: 'confirmed'
  }, {
    id: '7',
    name: 'Ana Costa',
    phone: '+55 11 95555-0101',
    professional: 'Dra. Ana Lima',
    lastVisit: '01/10/2026',
    status: 'cancelled'
  }, {
    id: '8',
    name: 'Laura Campos',
    phone: '+55 11 94444-8080',
    professional: 'Dra. Júlia Prado',
    lastVisit: '16/09/2026',
    next: '14/10 · 13:00',
    status: 'confirmed'
  }],
  templates: [{
    id: 't1',
    name: 'Lembrete 24h antes',
    channel: 'whatsapp',
    active: true,
    sent: 412,
    lang: 'pt-BR',
    body: 'Oi, {{paciente.nome}}! Passando para lembrar da sua consulta amanhã, {{data}}, às {{hora}} com {{profissional}}. Você confirma?'
  }, {
    id: 't2',
    name: 'Confirmação de agendamento',
    channel: 'whatsapp',
    active: true,
    sent: 268,
    lang: 'pt-BR',
    body: 'Pronto, {{paciente.nome}}! Sua consulta ficou para {{data}}, às {{hora}}, com {{profissional}}. Endereço: {{clinica.endereco}}.'
  }, {
    id: 't3',
    name: 'Recordatorio 24 h',
    channel: 'whatsapp',
    active: true,
    sent: 97,
    lang: 'es-ES',
    body: 'Hola, {{paciente.nombre}}. Te recordamos tu cita de mañana, {{fecha}}, a las {{hora}} con {{profesional}}. ¿La confirmas?'
  }, {
    id: 't4',
    name: 'Retorno após falta',
    channel: 'whatsapp',
    active: false,
    sent: 31,
    lang: 'pt-BR',
    body: 'Oi, {{paciente.nome}}. Sentimos sua falta hoje. Quer escolher um novo horário? É só responder por aqui.'
  }, {
    id: 't5',
    name: 'E-mail de confirmação',
    channel: 'email',
    active: true,
    sent: 188,
    lang: 'pt-BR',
    body: 'Assunto: Sua consulta está confirmada · {{data}} às {{hora}}'
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/painel/data.js", error: String((e && e.message) || e) }); }

// ui_kits/site/Sections.jsx
try { (() => {
(() => {
  const {
    Logo,
    Button,
    Icon,
    Badge,
    ChatBubble,
    Tabs,
    Card,
    Dialog,
    Input,
    Select
  } = window.ForgeonClinicDesignSystem_5b731b;
  const W = {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '0 32px',
    boxSizing: 'border-box'
  };
  function SiteNav({
    c,
    locale,
    setLocale,
    onCta
  }) {
    return /*#__PURE__*/React.createElement("header", {
      style: {
        position: 'sticky',
        top: 0,
        zIndex: 20,
        background: 'rgba(250,248,245,.88)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...W,
        height: 72,
        display: 'flex',
        alignItems: 'center',
        gap: 32
      }
    }, /*#__PURE__*/React.createElement(Logo, {
      size: 28
    }), /*#__PURE__*/React.createElement("nav", {
      style: {
        display: 'flex',
        gap: 28,
        flex: 1
      }
    }, c.nav.map((n, i) => /*#__PURE__*/React.createElement("a", {
      key: n,
      href: '#s' + i,
      style: {
        color: 'var(--text-body)',
        textDecoration: 'none',
        fontSize: 15,
        fontWeight: 500,
        whiteSpace: 'nowrap'
      }
    }, n))), /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => setLocale(locale === 'pt-BR' ? 'es-ES' : 'pt-BR'),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        height: 40,
        padding: '0 10px',
        border: 0,
        background: 'transparent',
        cursor: 'pointer',
        font: '500 14px var(--font-text)',
        color: 'var(--text-body)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "globe",
      size: 18
    }), locale === 'pt-BR' ? 'PT' : 'ES'), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost"
    }, c.login), /*#__PURE__*/React.createElement(Button, {
      onClick: onCta
    }, c.cta)));
  }
  function ChatPreview({
    c,
    locale
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        maxWidth: 440,
        borderRadius: 28,
        background: 'var(--surface-card)',
        boxShadow: 'var(--shadow-lg)',
        border: '1px solid var(--border-subtle)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '14px 18px',
        borderBottom: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 40,
        height: 40,
        borderRadius: 99,
        background: 'var(--teal-50)',
        display: 'grid',
        placeItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Logo, {
      variant: "symbol",
      size: 20
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 600,
        color: 'var(--text-strong)',
        fontSize: 15
      }
    }, c.chat.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: 'var(--whatsapp-text)',
        display: 'flex',
        alignItems: 'center',
        gap: 4
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "whatsapp",
      size: 12
    }), c.chat.status))), /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--chat-wallpaper)',
        padding: 18,
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(ChatBubble, {
      from: "patient",
      text: c.chat.p1,
      time: "10:02"
    }), /*#__PURE__*/React.createElement(ChatBubble, {
      from: "agent",
      locale: locale,
      text: c.chat.a1,
      time: "10:02",
      status: "read"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 6,
        flexWrap: 'wrap'
      }
    }, c.chat.slots.map((s, i) => /*#__PURE__*/React.createElement("span", {
      key: s,
      style: {
        padding: '6px 10px',
        borderRadius: 10,
        background: i === 1 ? 'var(--action-primary)' : 'var(--surface-card)',
        color: i === 1 ? '#fff' : 'var(--teal-700)',
        border: '1px solid var(--teal-200)',
        fontWeight: 600,
        fontSize: 13.5,
        fontVariantNumeric: 'tabular-nums'
      }
    }, s)))), /*#__PURE__*/React.createElement(ChatBubble, {
      from: "patient",
      text: c.chat.p2,
      time: "10:03"
    }), /*#__PURE__*/React.createElement(ChatBubble, {
      from: "agent",
      locale: locale,
      showLabel: false,
      text: c.chat.a2,
      time: "10:03",
      status: "read"
    })));
  }
  function Hero({
    c,
    locale,
    onCta
  }) {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        ...W,
        display: 'grid',
        gridTemplateColumns: 'minmax(0,1.1fr) minmax(0,1fr)',
        gap: 64,
        alignItems: 'center',
        padding: '80px 32px 96px'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
      tone: "ai",
      icon: "sparkles"
    }, c.eyebrow), /*#__PURE__*/React.createElement("h1", {
      style: {
        marginTop: 20,
        fontSize: 56,
        lineHeight: '64px',
        fontWeight: 800,
        letterSpacing: '-0.025em',
        textWrap: 'balance'
      }
    }, c.h1), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '20px 0 0',
        fontSize: 19,
        lineHeight: '30px',
        color: 'var(--text-muted)',
        maxWidth: 540,
        textWrap: 'pretty'
      }
    }, c.lead), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        marginTop: 32,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      iconRight: "arrow-right",
      onClick: onCta
    }, c.cta), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      variant: "whatsapp"
    }, c.ctaWa)), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 16,
        fontSize: 14,
        color: 'var(--text-muted)'
      }
    }, c.note)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center',
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: 'absolute',
        inset: '8% 4% -4% 10%',
        borderRadius: 40,
        background: 'var(--teal-50)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(ChatPreview, {
      c: c,
      locale: locale
    }))));
  }
  function How({
    c
  }) {
    return /*#__PURE__*/React.createElement("section", {
      id: "s0",
      style: {
        background: 'var(--surface-card)',
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...W,
        padding: '88px 32px'
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 40,
        lineHeight: '48px',
        fontWeight: 700,
        letterSpacing: '-0.02em'
      }
    }, c.howTitle), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '10px 0 0',
        fontSize: 18,
        color: 'var(--text-muted)'
      }
    }, c.howLead), /*#__PURE__*/React.createElement("ol", {
      style: {
        listStyle: 'none',
        padding: 0,
        margin: '48px 0 0',
        display: 'grid',
        gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
        gap: 24
      }
    }, c.how.map(([ic, t, d], i) => /*#__PURE__*/React.createElement("li", {
      key: t,
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 48,
        height: 48,
        borderRadius: 14,
        background: 'var(--teal-50)',
        color: 'var(--teal-700)',
        display: 'grid',
        placeItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 24
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 15,
        color: 'var(--text-subtle)',
        fontVariantNumeric: 'tabular-nums'
      }
    }, "0", i + 1)), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 20,
        lineHeight: '28px',
        fontWeight: 700
      }
    }, t), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 16,
        lineHeight: '26px',
        color: 'var(--text-muted)',
        textWrap: 'pretty'
      }
    }, d))))));
  }
  function ForWhom({
    c
  }) {
    const [tab, setTab] = React.useState('d');
    const items = tab === 'd' ? c.dental : c.psych;
    const icons = tab === 'd' ? ['bell-ring', 'calendar-days', 'shield-check'] : ['heart-handshake', 'repeat', 'lock'];
    return /*#__PURE__*/React.createElement("section", {
      id: "s1",
      style: {
        ...W,
        padding: '88px 32px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        gap: 24,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 40,
        lineHeight: '48px',
        fontWeight: 700,
        letterSpacing: '-0.02em',
        maxWidth: 560
      }
    }, c.forTitle), /*#__PURE__*/React.createElement(Tabs, {
      variant: "segmented",
      value: tab,
      onChange: setTab,
      items: [{
        id: 'd',
        label: c.tabs[0],
        icon: 'smile'
      }, {
        id: 'p',
        label: c.tabs[1],
        icon: 'brain'
      }]
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
        gap: 20,
        marginTop: 40
      }
    }, items.map(([t, d], i) => /*#__PURE__*/React.createElement(Card, {
      key: t,
      variant: "elevated",
      padding: "lg"
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 44,
        height: 44,
        borderRadius: 12,
        background: tab === 'd' ? 'var(--teal-50)' : 'var(--ai-surface)',
        color: tab === 'd' ? 'var(--teal-700)' : 'var(--ai-accent-text)',
        display: 'grid',
        placeItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: icons[i],
      size: 22
    })), /*#__PURE__*/React.createElement("h3", {
      style: {
        marginTop: 20,
        fontSize: 19,
        lineHeight: '26px',
        fontWeight: 700
      }
    }, t), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '8px 0 0',
        fontSize: 15.5,
        lineHeight: '24px',
        color: 'var(--text-muted)'
      }
    }, d)))));
  }
  function Pricing({
    c,
    onCta
  }) {
    return /*#__PURE__*/React.createElement("section", {
      id: "s2",
      style: {
        background: 'var(--surface-card)',
        borderTop: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...W,
        padding: '88px 32px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 40,
        lineHeight: '48px',
        fontWeight: 700,
        letterSpacing: '-0.02em'
      }
    }, c.priceTitle), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '10px 0 0',
        fontSize: 18,
        color: 'var(--text-muted)'
      }
    }, c.priceLead)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
        gap: 20,
        marginTop: 48,
        alignItems: 'stretch'
      }
    }, c.plans.map(([n, p, per, feats, hi]) => /*#__PURE__*/React.createElement("div", {
      key: n,
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        padding: 28,
        borderRadius: 'var(--radius-xl)',
        background: hi ? 'var(--teal-900)' : 'var(--surface-card)',
        color: hi ? '#fff' : undefined,
        border: hi ? '1px solid var(--teal-900)' : '1px solid var(--border-default)',
        boxShadow: hi ? 'var(--shadow-lg)' : 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 20,
        fontWeight: 700,
        color: hi ? '#fff' : 'var(--text-strong)'
      }
    }, n), hi && /*#__PURE__*/React.createElement(Badge, {
      tone: "brand",
      size: "sm"
    }, c.popular)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 40,
        lineHeight: '44px',
        fontWeight: 800,
        letterSpacing: '-0.02em',
        fontVariantNumeric: 'tabular-nums',
        color: hi ? '#fff' : 'var(--text-strong)'
      }
    }, p), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 15,
        color: hi ? 'var(--teal-100)' : 'var(--text-muted)'
      }
    }, per)), /*#__PURE__*/React.createElement("ul", {
      style: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        flex: 1
      }
    }, feats.map(f => /*#__PURE__*/React.createElement("li", {
      key: f,
      style: {
        display: 'flex',
        gap: 10,
        fontSize: 15,
        lineHeight: '22px',
        color: hi ? 'var(--teal-50)' : 'var(--text-body)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 18,
      color: hi ? 'var(--teal-200)' : 'var(--teal-600)'
    }), f))), /*#__PURE__*/React.createElement(Button, {
      fullWidth: true,
      size: "lg",
      variant: hi ? 'secondary' : n === c.plans[2][0] ? 'ghost' : 'soft',
      onClick: onCta,
      style: n === c.plans[2][0] ? {
        border: '1px solid var(--border-default)'
      } : undefined
    }, n === c.plans[2][0] ? c.talk : c.choose))))));
  }
  function Faq({
    c
  }) {
    const [open, setOpen] = React.useState(0);
    return /*#__PURE__*/React.createElement("section", {
      id: "s3",
      style: {
        ...W,
        padding: '88px 32px',
        display: 'grid',
        gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.6fr)',
        gap: 48
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 40,
        lineHeight: '48px',
        fontWeight: 700,
        letterSpacing: '-0.02em'
      }
    }, c.faqTitle), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column'
      }
    }, c.faq.map(([q, a], i) => /*#__PURE__*/React.createElement("div", {
      key: q,
      style: {
        borderBottom: '1px solid var(--border-default)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      "aria-expanded": open === i,
      onClick: () => setOpen(open === i ? -1 : i),
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        padding: '22px 0',
        border: 0,
        background: 'transparent',
        cursor: 'pointer',
        textAlign: 'left',
        font: '600 18px/26px var(--font-text)',
        color: 'var(--text-strong)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, q), /*#__PURE__*/React.createElement(Icon, {
      name: open === i ? 'minus' : 'plus',
      size: 20,
      color: "var(--teal-600)"
    })), open === i && /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '0 0 22px',
        fontSize: 16,
        lineHeight: '26px',
        color: 'var(--text-muted)',
        maxWidth: 620
      }
    }, a)))));
  }
  function FinalCta({
    c,
    onCta
  }) {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        ...W,
        paddingBottom: 88
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        borderRadius: 32,
        background: 'var(--teal-700)',
        padding: '64px 56px',
        display: 'flex',
        alignItems: 'center',
        gap: 40,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 320
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        color: '#fff',
        fontSize: 40,
        lineHeight: '48px',
        fontWeight: 800,
        letterSpacing: '-0.02em',
        textWrap: 'balance'
      }
    }, c.finalTitle), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '12px 0 0',
        fontSize: 18,
        lineHeight: '28px',
        color: 'var(--teal-50)'
      }
    }, c.finalLead)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      variant: "secondary",
      iconRight: "arrow-right",
      onClick: onCta
    }, c.cta), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      variant: "whatsapp"
    }, c.ctaWa))));
  }
  function Footer({
    c
  }) {
    const cols = [['Painel', 'Agente IA', 'Preços'], ['Forgeon', 'Contato', 'Carreiras'], ['Privacidade', 'Termos', 'LGPD / RGPD']];
    return /*#__PURE__*/React.createElement("footer", {
      style: {
        borderTop: '1px solid var(--border-subtle)',
        background: 'var(--surface-card)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...W,
        padding: '48px 32px',
        display: 'grid',
        gridTemplateColumns: '1.4fr repeat(3, 1fr)',
        gap: 32
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(Logo, {
      variant: "endorsed",
      size: 32
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13.5,
        color: 'var(--text-muted)'
      }
    }, c.rights)), c.footer.map((h, i) => /*#__PURE__*/React.createElement("div", {
      key: h,
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: '.08em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)'
      }
    }, h), cols[i].map(l => /*#__PURE__*/React.createElement("a", {
      key: l,
      href: "#",
      style: {
        color: 'var(--text-body)',
        textDecoration: 'none',
        fontSize: 15
      }
    }, l))))));
  }
  function DemoDialog({
    c,
    onClose
  }) {
    const [sent, setSent] = React.useState(false);
    if (sent) return /*#__PURE__*/React.createElement(Dialog, {
      icon: "circle-check",
      title: c.form.ok,
      description: c.form.okd,
      onClose: onClose,
      actions: /*#__PURE__*/React.createElement(Button, {
        onClick: onClose
      }, "OK")
    });
    return /*#__PURE__*/React.createElement(Dialog, {
      title: c.form.title,
      description: c.form.desc,
      icon: "calendar-check",
      onClose: onClose,
      width: 520,
      actions: /*#__PURE__*/React.createElement(Button, {
        size: "lg",
        fullWidth: true,
        onClick: () => setSent(true)
      }, c.form.send)
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: c.form.name
    }), /*#__PURE__*/React.createElement(Input, {
      label: c.form.clinic
    }), /*#__PURE__*/React.createElement(Input, {
      label: c.form.phone,
      iconLeft: "whatsapp",
      placeholder: "+55 11 90000-0000"
    }), /*#__PURE__*/React.createElement(Select, {
      label: c.form.type,
      options: c.tabs
    })));
  }
  Object.assign(window, {
    SiteNav,
    Hero,
    How,
    ForWhom,
    Pricing,
    Faq,
    FinalCta,
    Footer,
    DemoDialog
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/Sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/copy.js
try { (() => {
window.FC_SITE_COPY = {
  'pt-BR': {
    nav: ['Como funciona', 'Para quem', 'Preços', 'Dúvidas'],
    login: 'Entrar',
    cta: 'Agendar demonstração',
    eyebrow: 'Agente de IA no WhatsApp para clínicas',
    h1: 'Sua agenda cuidada, mesmo quando a recepção está ocupada.',
    lead: 'O Forgeon Clinic agenda, remarca e confirma consultas pelo WhatsApp, envia lembretes e passa para a sua equipe quando o paciente precisa de uma pessoa.',
    ctaWa: 'Falar no WhatsApp',
    note: '14 dias grátis · sem cartão · configuração em 1 dia',
    chat: {
      name: 'Clínica Sorriso & Mente',
      status: 'responde na hora',
      p1: 'Oi! Queria marcar uma limpeza. Tem horário essa semana?',
      a1: 'Oi, Pedro! Tem sim. Com o Dr. Paulo, estes horários estão livres:',
      p2: 'Quinta 10:30',
      a2: 'Pronto! Quinta, 16/10, às 10:30 com o Dr. Paulo. Te mando um lembrete na véspera.',
      slots: ['Qua 09:00', 'Qui 10:30', 'Sex 14:00']
    },
    howTitle: 'Como funciona',
    howLead: 'Três passos, sem trocar o seu sistema.',
    how: [['messages-square', 'O paciente chama no WhatsApp', 'No número que a clínica já usa. O agente responde na hora, em português ou espanhol.'], ['calendar-check', 'O agente cuida da agenda', 'Mostra horários livres, agenda, remarca, cancela e confirma — direto na agenda de cada profissional.'], ['headset', 'Sua equipe entra quando precisa', 'Dor, urgência ou um assunto delicado? O agente avisa a recepção e passa a conversa com todo o contexto.']],
    forTitle: 'Feito para o dia a dia da sua clínica',
    tabs: ['Odontologia', 'Psicologia e terapias'],
    dental: [['Lembretes que reduzem faltas', 'Confirmação 24h antes, com remarcação em um toque.'], ['Agenda por cadeira e profissional', 'Clínico, ortodontia, endodontia — cada um com seus horários.'], ['Pós-procedimento com cuidado', 'Orientações após extração e alerta para a equipe se algo não estiver bem.']],
    psych: [['Acolhimento desde a primeira mensagem', 'Tom calmo e respeitoso, sem pressa e sem jargão.'], ['Sessões recorrentes', 'Mesmo dia e horário toda semana, com remarcação simples.'], ['Privacidade em primeiro lugar', 'O agente não pede detalhes clínicos e encaminha temas sensíveis para uma pessoa.']],
    priceTitle: 'Planos simples',
    priceLead: 'Preço por clínica, com profissionais ilimitados no plano Clínica.',
    plans: [['Essencial', 'R$ 249', '/mês', ['1 número de WhatsApp', 'Até 2 profissionais', 'Lembretes e confirmações', 'Painel com agenda e conversas']], ['Clínica', 'R$ 449', '/mês', ['Profissionais ilimitados', 'Atendimento humano integrado', 'Métricas de faltas e confirmações', 'Modelos de mensagem e e-mail'], true], ['Rede', 'Sob consulta', '', ['Várias unidades', 'Português e espanhol', 'Integrações com seu sistema', 'Gerente de conta']]],
    popular: 'Mais escolhido',
    choose: 'Começar teste grátis',
    talk: 'Falar com vendas',
    faqTitle: 'Dúvidas frequentes',
    faq: [['Preciso trocar meu número de WhatsApp?', 'Não. O agente funciona no número que sua clínica já usa, via WhatsApp Business.'], ['E se o paciente quiser falar com uma pessoa?', 'Ele pode pedir a qualquer momento. O agente avisa a recepção no painel e para de responder naquela conversa.'], ['Os dados dos pacientes ficam seguros?', 'Sim. Seguimos a LGPD e o RGPD, com dados criptografados e acesso por perfil.'], ['Funciona em espanhol?', 'Sim. O agente responde em português do Brasil e espanhol da Espanha, conforme o paciente escreve.']],
    finalTitle: 'Menos telefone tocando. Mais tempo para cuidar.',
    finalLead: 'Veja o agente funcionando com a agenda da sua clínica em 20 minutos.',
    footer: ['Produto', 'Empresa', 'Legal'],
    rights: '© 2026 Forgeon. Todos os direitos reservados.',
    form: {
      title: 'Agendar demonstração',
      desc: 'Respondemos em até 1 dia útil.',
      name: 'Seu nome',
      clinic: 'Nome da clínica',
      phone: 'WhatsApp',
      type: 'Especialidade',
      send: 'Enviar',
      ok: 'Recebemos seu pedido',
      okd: 'Vamos falar com você pelo WhatsApp em breve.'
    }
  },
  'es-ES': {
    nav: ['Cómo funciona', 'Para quién', 'Precios', 'Preguntas'],
    login: 'Entrar',
    cta: 'Solicitar demo',
    eyebrow: 'Agente de IA en WhatsApp para clínicas',
    h1: 'Tu agenda al día, aunque la recepción esté ocupada.',
    lead: 'Forgeon Clinic agenda, reprograma y confirma citas por WhatsApp, envía recordatorios y pasa la conversación a tu equipo cuando el paciente necesita a una persona.',
    ctaWa: 'Hablar por WhatsApp',
    note: '14 días gratis · sin tarjeta · configuración en 1 día',
    chat: {
      name: 'Clínica Dental Retiro',
      status: 'responde al momento',
      p1: 'Hola, quería pedir cita para una limpieza. ¿Tenéis hueco esta semana?',
      a1: 'Hola, Lucía. Sí. Con el Dr. Ruiz tengo estos horarios libres:',
      p2: 'Jueves 10:30',
      a2: 'Hecho. Jueves 16/10 a las 10:30 con el Dr. Ruiz. Te enviaré un recordatorio el día antes.',
      slots: ['Mié 09:00', 'Jue 10:30', 'Vie 14:00']
    },
    howTitle: 'Cómo funciona',
    howLead: 'Tres pasos, sin cambiar tu sistema.',
    how: [['messages-square', 'El paciente escribe por WhatsApp', 'Al número que ya usa la clínica. El agente responde al momento, en español o portugués.'], ['calendar-check', 'El agente gestiona la agenda', 'Muestra huecos libres, agenda, reprograma, cancela y confirma en la agenda de cada profesional.'], ['headset', 'Tu equipo entra cuando hace falta', '¿Dolor, urgencia o un tema delicado? El agente avisa a recepción y le pasa la conversación con todo el contexto.']],
    forTitle: 'Pensado para el día a día de tu clínica',
    tabs: ['Odontología', 'Psicología y terapias'],
    dental: [['Recordatorios que reducen ausencias', 'Confirmación 24 h antes, con cambio de cita en un toque.'], ['Agenda por gabinete y profesional', 'General, ortodoncia, endodoncia — cada uno con sus horarios.'], ['Postoperatorio con cuidado', 'Indicaciones tras una extracción y aviso al equipo si algo no va bien.']],
    psych: [['Acogida desde el primer mensaje', 'Tono tranquilo y respetuoso, sin prisas ni tecnicismos.'], ['Sesiones periódicas', 'Mismo día y hora cada semana, con cambios sencillos.'], ['Privacidad ante todo', 'El agente no pide datos clínicos y deriva los temas sensibles a una persona.']],
    priceTitle: 'Planes sencillos',
    priceLead: 'Precio por clínica, con profesionales ilimitados en el plan Clínica.',
    plans: [['Esencial', '99 €', '/mes', ['1 número de WhatsApp', 'Hasta 2 profesionales', 'Recordatorios y confirmaciones', 'Panel con agenda y conversaciones']], ['Clínica', '179 €', '/mes', ['Profesionales ilimitados', 'Atención humana integrada', 'Métricas de ausencias y confirmaciones', 'Plantillas de mensaje y e-mail'], true], ['Red', 'A consultar', '', ['Varias sedes', 'Español y portugués', 'Integraciones con tu sistema', 'Gestor de cuenta']]],
    popular: 'El más elegido',
    choose: 'Empezar prueba gratis',
    talk: 'Hablar con ventas',
    faqTitle: 'Preguntas frecuentes',
    faq: [['¿Tengo que cambiar mi número de WhatsApp?', 'No. El agente funciona en el número que ya usa tu clínica, mediante WhatsApp Business.'], ['¿Y si el paciente quiere hablar con una persona?', 'Puede pedirlo en cualquier momento. El agente avisa a recepción en el panel y deja de responder en esa conversación.'], ['¿Los datos de los pacientes están seguros?', 'Sí. Cumplimos el RGPD y la LGPD, con datos cifrados y acceso por perfil.'], ['¿Funciona en portugués?', 'Sí. El agente responde en español de España y portugués de Brasil, según escriba el paciente.']],
    finalTitle: 'Menos llamadas. Más tiempo para cuidar.',
    finalLead: 'Mira el agente funcionando con la agenda de tu clínica en 20 minutos.',
    footer: ['Producto', 'Empresa', 'Legal'],
    rights: '© 2026 Forgeon. Todos los derechos reservados.',
    form: {
      title: 'Solicitar demo',
      desc: 'Respondemos en 1 día laborable.',
      name: 'Tu nombre',
      clinic: 'Nombre de la clínica',
      phone: 'WhatsApp',
      type: 'Especialidad',
      send: 'Enviar',
      ok: 'Hemos recibido tu solicitud',
      okd: 'Te escribiremos por WhatsApp muy pronto.'
    }
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/copy.js", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.ChatBubble = __ds_scope.ChatBubble;

__ds_ns.ConversationItem = __ds_scope.ConversationItem;

__ds_ns.AppointmentCard = __ds_scope.AppointmentCard;

__ds_ns.TimeSlots = __ds_scope.TimeSlots;

__ds_ns.WeekCalendar = __ds_scope.WeekCalendar;

__ds_ns.HandoffAlert = __ds_scope.HandoffAlert;

__ds_ns.KpiCard = __ds_scope.KpiCard;

__ds_ns.PatientTable = __ds_scope.PatientTable;

__ds_ns.StatusBadge = __ds_scope.StatusBadge;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Choice = __ds_scope.Choice;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

})();
