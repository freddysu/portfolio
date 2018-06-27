<template>
  <div>
    <ul id="project-list" class="project-list">
      <li v-for="(project, index) in list" :key="project.name">
        <div
          class="row project-row portfolio-link"
          data-target="#portfolioModal"
          data-toggle="modal"
          @click="onOpenModal(project.imgSrc)">
          <div class="col-md-2 portfolio-item">
            <img
              id="project-img"
              class="portfolio-img img-responsive"
              :src="require('../assets/' + project.imgSrc + '.png')">
          </div>
          <div class="col-md-10 unselectable">
            <span class="project-name">{{ project.name }}</span>
            <span class="project-tag"> - {{ project.tag }}</span>
            <div class="project-description" v-html="project.description + project.achievement"></div>
            <div v-show="project.projectLink" class="pull-right link-div">
              <a class="project-link" target="_blank" :href="project.projectLink">
                <img class="link-img" alt="Android app on Google Play" :src="project.linkImg" />
              </a>
            </div>
          </div>
        </div>
        <hr v-show="index !== list.length - 1" />
      </li>
    </ul>
    <Modal
      v-if="open"
      @onCloseModal="onCloseModal">
      <carousel
        :perPage="1"
        :paginationActiveColor="'white'"
        :paginationColor="'#999'"
        :paginationSize="20">
        <slide v-for="idx in 5" :key="idx">
          <div class="slide-wrap">
            <img :src="getImg(idx)" />
          </div>
        </slide>
      </carousel>
    </Modal>
  </div>
</template>

<script>
import Modal from './UI/Modal';
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'ProjectList',
  props: ['list'],
  components: {
    Modal,
    Carousel,
    Slide
  },
  data() {
    return {
      open: false,
      imgSrc: null
    }
  },
	methods: {
    onOpenModal(imgSrc) {
      this.imgSrc = imgSrc;
      this.open = true;
    },
		onCloseModal(evt) {
      this.imgSrc = null;
      this.open = false;
    },
    getImg(index) {
      if (!this.imgSrc) {
        return null;
      }
      return require('../assets/' + this.imgSrc + (index-1) + '.jpg');
    }
	}
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
.slide-wrap {
  width: 100%;
  height: 512px;
}
.slide-wrap img {
  width: 100%;
  height: auto;
}
@media (max-width:1000px) {
	#project-list {
    padding-left: 0px;
  }
  .portfolio-img {
    margin: 0 auto;
  }
}
</style>
