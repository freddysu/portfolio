<template>
  <div id="app">
    <NavBar></NavBar>
    <Profile></Profile>
    <Skills></Skills>
  </div>
</template>

<script>
import project from './models/project.js';
import NavBar from './components/NavBar';
import Profile from './components/Profile';
import Skills from './components/Skills';

export default {
  name: 'app',
  data () {
    return {
      project,
    }
  },
  components: {
    NavBar,
    Profile,
    Skills
  }
}
</script>

<style>
body {
  margin: 0;
  padding-bottom: 200px;
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
