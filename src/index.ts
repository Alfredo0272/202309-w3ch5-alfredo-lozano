/* eslint-disable no-new */
import { Header } from './component/header';
import { Main } from './component/main';
import { Navigator } from './component/navigator';
import { PokemonList } from './component/pokeList';
import './styles.css';

new Header('#app');
new Main('#app');
new Navigator('#app');
new PokemonList('#app');
