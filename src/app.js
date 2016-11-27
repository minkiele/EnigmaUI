import EnigmaApp from './Enigma/Enigma';
import FrontendRenderingEngine from './Enigma/RenderingEngine/Frontend';

//bootstrapping jQuery and Bootstrap
//They are not needed now, uncomment when useful
//import "jquery";
//import "bootstrap";
let enigmaApp = new EnigmaApp(new FrontendRenderingEngine(document.getElementById('app')));
