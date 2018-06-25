<template>
  <section id="projects">
		<div class="container">
			<hr>
			<div class="row">
				<div class="col-md-12 text-left text-uppercase">
					<h2 id="projects-title">Projects</h2>
				</div>
			</div>
      <ProjectList :list="projects.work" />
      <h4 class="subtitle">SCHOOL PROJECTS</h4>
      <ProjectList :list="projects.school" />
		</div>
	</section>
</template>

<script>
import ProjectList from './ProjectList';
import projects from '../models/projects.js';

export default {
  name: 'Projects',
  components: {
    ProjectList
  },
  data () {
    return {
      projects
    }
  }
}
</script>

<style scoped>
.subtitle {
  padding-left: 30px;
  margin-bottom: 20px;
  color: #999;
  font-size: 24px;
}
</style>
