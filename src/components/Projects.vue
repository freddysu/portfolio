<template>
  <section id="projects">
		<div class="container">
			<hr>
			<div class="row">
				<div class="col-md-12 text-left text-uppercase">
					<h2 id="projects-title">Projects</h2>
				</div>
			</div>
      <h4 class="subtitle">PERSONAL PROJECTS</h4>
      <ProjectList :list="projects.personal" />
      <h4 class="subtitle">WORK PROJECTS</h4>
      <ProjectList :list="projects.work" />
      <h4 class="subtitle">SCHOOL PROJECTS</h4>
      <ProjectList :list="projects.school" />
		</div>
	</section>
</template>

<script>
import projects from '../models/projects.js';
import ProjectList from './ProjectList';

export default {
  name: 'Projects',
  components: {
    ProjectList,
  },
  data () {
    return {
      projects,
    }
  }
}
</script>

<style scoped>
.subtitle {
  padding-left: 30px;
  padding-top: 10px;
  padding-bottom: 15px;
  color: #999;
  font-size: 22px;
}
</style>
