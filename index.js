/* DuoTone Light colorscheme by Bram de Haan, based on DuoTone light theme by Simurai for Atom (http://simurai.com/projects/2016/01/01/duotone-themes).
 * HyperTerm template by Bram de Haan (https://github.com/atelierbram/base16-hyperterm) based on HyperTerm-DuoTone-Dark by Wilson Miner (https://github.com/wilsonminer/hyperterm-duotone-dark)
 */

const backgroundColor = '#faf8f5';
const foregroundColor = '#b29762';
const borderColor = 'rgba(0, 0, 0, 0)';
const cursorColor = '#594212'; // opacity set in .termCSS: see under

const colors = [
  backgroundColor, //  black
  '#2d2006', //  red
  '#9a7c42', //  green
  '#b29762', //  yellow
  '#063289', //  blue
  '#896724', //  magenta
  '#728fcb', //  cyan
  '#9c927c', //  white
  '#4f5664', //  lightBlack
  '#93abdc', //  lightRed
  '#a9afbc', //  lightGreen
  '#c6b28b', //  lightYellow
  '#728fcb', //  lightBlue
  '#b6ad9a', //  lightMagenta
  '#b7c9eb', //  lightCyan
  '#faf8f5' //  lightWhite
]

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    cursorColor: cursorColor,
    borderColor: borderColor,
    colors: colors,
    termCSS: `
      ${config.termCSS || ''}
      .cursor-node[focus="true"] {
         opacity: .33 !important;
       }
    `,
    css: `
      ${config.css || ''}
      .header_header {
        top: 0;
        right: 0;
        left: 0;
      }
      .tabs_list {
        background-color: #faf8f5 !important;
        border: none !important;
      }
      .tab_tab {
        color: #9c927c !important;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        letter-spacing: .5px;
        background-color: #faf8f5;
        border-color: rgba(0, 0, 0, 0) !important;
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.06);
      }
      .tab_tab.tab_active::before {
        display: none;
        border-bottom-color: #faf8f5;
      }
      .tabs_title, .tab_icon, .tab_tab.tab_active {
        color: #1659df !important;
      }
      .tab_tab.tab_hasActivity {
        color: #3d75e6 !important;
      }
      .tab_text {
        background-color: rgba(0,0,0,.075);
        border-left: 2px solid #faf8f5;
        box-shadow: inset 0px -1px 2px rgba(0,0,0,.075);
        transition: all .3s;
      }
      .tab_tab.tab_active .tab_text,
      .tab_tab:hover .tab_text {
        background-color: #faf8f5 !important;
        box-shadow: none;
      }
      `
  })
}

