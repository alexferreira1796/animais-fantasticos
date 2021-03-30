import ScrollSuave from './modules/scroll-suave.js';
import ScrollAnima from './modules/scroll-animacao.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/tabnav.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import initFetchAnimais from './modules/fetch-animais.js';
import fetchBitcon from './modules/fetch-bitcoin.js';

// Scroll Suave
const scroll = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scroll.init();

// Accordion
const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

// TabNav
const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

// Modal
const modal = new Modal();
modal.init();

// Tooltip
const toolTip = new Tooltip('[data-tooltip]');
toolTip.init();

const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();

initDropdownMenu();
initMenuMobile();
initFuncionamento();

// Fetch Animais
initFetchAnimais();
// Fetch Bitcoin
fetchBitcon('https://blockchain.info/ticker', '.btc-preco');
