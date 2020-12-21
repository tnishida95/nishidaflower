import HelloWorld from './components/HelloWorld';
import Quote from './components/Quote';
import Gallery from './components/Gallery';
import Faq from './components/Faq';
import About from './components/About';

export default [
  {path: '/', component: HelloWorld},
  { path: '/quote', component: Quote},
  { path: '/gallery', component: Gallery},
  { path: '/faq', component: Faq},
  { path: '/about', component: About}
];
