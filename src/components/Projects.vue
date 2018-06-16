<template>
  <section id="projects">
		<div class="container">
			<hr>
			<div class="row">
				<div class="col-md-12 text-left text-uppercase">
					<h2 id="projects-title">Projects</h2>
				</div>
			</div>
			<ul id="project-list" class="project-list">
        <li v-for="project in projects" :key="project.name">
          <div class="row project-row portfolio-link" data-target="#portfolioModal" data-toggle="modal">
	  				<div class="col-md-2 portfolio-item">
  						<img id="project-img" class="portfolio-img img-responsive" :src="require('../assets/' + project.imgSrc + '.png')">
	  				</div>
	  				<div class="col-md-10 unselectable">
		  				<span class="project-name">{{ project.name }}</span>
		  				<span class="project-tag">{{ project.tag }}</span>
		  				<div class="project-description" v-html="project.description + project.achievement"></div>
              <div v-show="project.projectLink" class="pull-right link-div">
								<a class="project-link" target="_blank" :href="project.projectLink">
									<img class="link-img" alt="Android app on Google Play" :src="project.linkImg" />
								</a>
							</div>
	  				</div>
          </div>
          <hr />
        </li>
      </ul>
		</div>
	</section>
</template>

<script>
import projects from '../models/projects.js';

export default {
  name: 'Projects',
  data () {
    return {
      projects,
    }
  },
}
</script>

<style scoped>
/* Projects */
.project-name {
	font-size: 20px;
	color: #707070;
	font-family: Montserrat,"Helvetica Neue",Helvetica,Arial,sans-serif;
	font-weight: 700;
}
.project-tag {
	font-size: 16px;
	color: #AAAAAA;
}
.portfolio-img {
	margin-top: 20px;
  pointer-events: none;
}
.portfolio-link:focus{
	outline: none;
}
.project-link {
	float: right;	
}
.project-link:hover {
	opacity: 0.7;
	filter: alpha(opacity=70);
}
.portfolio-item {
	right: 0;
	margin: 0 0 15px;
}
.portfolio-item .portfolio-link {
	display: block;
	position: relative;
	margin: 0 auto;
	max-width: 400px;
} 
.portfolio-item .portfolio-link .caption {
	position: absolute;
	width: 100%;
	height: 100%;
	opacity: 0;
	background: rgba(220, 220, 220, .7);
	-webkit-transition: all ease .5s;
	-moz-transition: all ease .5s;
	transition: all ease .5s;
}
.portfolio-item .portfolio-link .caption:hover {
	opacity: 1;
}
.portfolio-item .portfolio-link .caption .caption-content {
	position: absolute;
	top: 50%;
	width: 100%;
	height: 20px;
	margin-top: -12px;
	text-align: center;
	font-size: 20px;
	color: #fff;
}
.portfolio-item .portfolio-link .caption .caption-content i {
	margin-top: -12px;
}
.portfolio-item .portfolio-link .caption .caption-content h3,
.portfolio-item .portfolio-link .caption .caption-content h4 {
	margin: 0;
}
.modal-content {
	margin: 5% 10%;
	background-color: rgba(0, 0, 0, 0.5);
}
.project-list .row {
	padding: 10px;
	border-radius: 10px;
}
.project-list .row:hover {
	cursor: pointer;
	background-color: #F3F3F3;
}
.project-list li > hr {	
	margin: 30px auto;
}
.project-description {
	font-size: 18px;
}
.project-description >>> ul {
	font-size: 16px;
	margin-top: 10px;
	padding-left: 20px;
	list-style: disc;
	color: #444;
}
</style>
