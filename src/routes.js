import HelloWorld from './components/HelloWorld';
import Quote from './components/Quote';
import Gallery from './components/Gallery';

export default [
  {path: '/', component: HelloWorld},
  { path: '/quote', component: Quote},
  { path: '/gallery', component: Gallery}
];
