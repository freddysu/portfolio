<template>
  <div id="app">
    <NavBar></NavBar>
    <Profile></Profile>
    <Skills></Skills>
    <Projects></Projects>
    <About></About>
  </div>
</template>

<script>
import NavBar from './components/NavBar';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';

export default {
  name: 'app',
  components: {
    NavBar,
    Profile,
    Skills,
    Projects,
    About
  }
}
</script>

<style>
body {
  margin: 0;
}
ul {
	list-style: none;
}
section h2 {
	font-family: 'Lato', sans-serif;
	font-size: 42px;
	padding-top: 30px;
	display: table-cell;
}
section h2:after {
	content: ' ';
  display: block;
	border-bottom: 1px solid rgba(0,0,0, 0.3);
	margin-bottom: 30px;
}
.container {
	/*padding: 30px 100px;*/
	padding: 2% 5%;
}
</style>
