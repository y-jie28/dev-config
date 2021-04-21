import pizza from './pizza'
import './main.scss' // this technically should not work because it is not valid JS; but webpack will scan it and add it as a dependency

pizza.pepperoni()
pizza.bacon()
