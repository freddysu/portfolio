<template>
  <section id="about">
		<div class="container">
			<hr>
			<div class="row">
				<div class="col-md-12 text-left text-uppercase">
					<h2 id="about-title">About</h2>				
				</div>
			</div>
			<div class="row">
				<div class="col-md-12">
					<h3>I'm enthusiasm for </h3>
  				<ul>
  					<li>Developing mobile and web applications</li>
  					<li>Writing efficient and elegant code</li>
  					<li>Learning new technologies and relevant knowledge</li>
  				</ul>
				</div>
		</div>
		<div class="row">
				<div class="col-md-12">
					<h3>I can / have</h3>
  				<ul>
  					<li>Experiences in both front / back end development</li>
  					<li>Make the good cooperation with PM, UI designer and Marketing
  					<li>Well-understood the product flow of mobile application</li>
  				</ul>
				</div>
		</div>
		<div class="row">
			<div class="col-md-12">
  				<h3>Self-learning from online courses in my free time. <br> My favorite courses from <a href="https://www.udemy.com/">Udemy</a> and <a href="https://www.udacity.com/">Udacity</a>:</h3> 
  				<ul>
						<li>Server Side Rendering with React and Redux</li>
						<li>React 16 - The Complete Guide</li>
						<li>Vue JS 2 - The Complete Guide</li>
						<li>JavaScript Design Patterns</li>
						<li>Object-Oriented JavaScript</li>
						<li>Developing Android Apps</li>
						<li>Software Development Process</li>
  				</ul>
				</div>
			</div>
			<div class="row">
			<div class="col-md-12 text-uppercase">
				<h3>I love</h3>
				<div class="col-md-4 text-center">
					<img :src="require('../assets/singing.jpg')" class="img-responsive">
					<span>Singing</span>
				</div>
				<div class="col-md-4 text-center">
					<img :src="require('../assets/basketball.jpg')" class="img-responsive">
  					<span>Playing basketball</span>
					</div>
					<div class="col-md-4 text-center">
						<img :src="require('../assets/travel.jpg')" class="img-responsive">
					<span>Traveling</span>
  				</div>
			</div>
		</div>
		</div>
		<div class="contact">
			<div class="container">
				<div class="col-md-12">
					<span><p>I'm looking for a job and aspire to work at a top company!</p> I'm still on the journey and wish I could become a top developer some day. I'd love to join your team and do all my best to create something amazing with you! <a href="mailto:frorgr@hotmail.com">Write me an email now.</a> I'm looking forward to seeing you soon!</span>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
/*About*/
h3 {
	margin-top: 40px;
	margin-bottom: 30px;
	text-transform: uppercase;
}
p{
	font-size: 22px;
	line-height: 1.5em;
	font-family: 'Lato', sans-serif;
	margin-bottom: 30px;
}
span {
	font-size: 22px;
	line-height: 1.5em;
	font-family: 'Lato', sans-serif;
}
ul, ol {
	margin: 30px 0;
}
ul li, ol li {
	font-size: 20px;
	color: #555; 
	/*font-family: 'Bree Serif', serif;*/
	font-family: 'Lato', sans-serif;
	margin-bottom: 15px;
	line-height: 1.5em;
}
ul li:before { 
	content: '\f00c'; 
	color: #999; 
	font-family: FontAwesome; 
	display: inline-block; 
	width: 40px; 
	margin-left: -40px; 
}
.contact {
	color: #ccc;
	background-color: rgba(0, 0, 0, 1);
	margin-top: 50px;
	padding: 40px 0;
	padding-bottom: 200px;
}
.contact p {
	font-weight: bold;
	color: #fff;
	font-size: 32px;
}
.contact a {
	font-size: 28px;
}
</style>

