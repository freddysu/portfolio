<template>
  <header id="page-top">
		<div class="container">
			<div class="row">			
				<div class="col-md-5">
					<img class="img-responsive portrait " src="../assets/profile-shadow.png" alt="Yu Hsuan Su">
				</div>
				<div class="col-md-7">
					<div class="text-right text-uppercase">
						<h1>Yu-Hsuan Su</h1>
						<h4>Web Developer</h4>
						<hr>
					</div>
					<ul>
						<li>
							<div class="row">
								<span class="year">Sep. 2014 - June 2015</span>
								<h4 class="school">Chalmers University of Technology</h4>						
								<span class="studyin"><strong>Exchange</strong> - Computer science and engineering</span>		
							</div>
						</li>
						<li>
							<div class="row">						
								<span class="year">Sep. 2012 - June 2014</span>
								<h4 class="school">National Chiao Tung University</h4>
								<span class="studyin"><strong>Master</strong> - Computer science and engineering</span>
							</div>
						</li>
						<li>
							<div class="row">
								<span class="year">Sep. 2008 - June 2012</span>
								<h4 class="school">National Taipei University</h4>								
								<span class="studyin"><strong>Bachelor</strong> - Computer science and engineering</span>	
							</div>
						</li>
					</ul>
					<hr>
					<div class="btn-links text-right">
						<a href="http://yuhsuan-blog.logdown.com/" target="_blank" class="btn">
							<i class="fa fa-pencil fa-2x"></i>
							<span>Check out my</span>
							<strong>Blog</strong>
						</a>
						<a href="http://github.com/freddysu" target="_blank" class="btn">
							<i class="fa fa-github fa-2x"></i>
							<span>Check out my</span>
							<strong>GitHub</strong>
						</a>
					</div>
				</div>
			</div>			
		</div>
	</header>
</template>

<script>
export default {
  name: 'Profile'
}
</script>

<style scoped>
header h1, header h2, header h3, header h4, header h5, header h6 {
	text-transform: uppercase;
	font-family: Montserrat,"Helvetica Neue",Helvetica,Arial,sans-serif;
	font-weight: 700;
}

header h4 {
	font-size: 20px;
	color: #707070;
}
ul {
	list-style: none;
}
header li {
	margin: 10px 0;
}

/* Profile */
.portrait {
	margin-top: 20px;
}
.school {
	font-size: 22px;
	margin-top: 0px;
	margin-bottom: 5px;
}
.year { 
	display: block;
	font-size: 12px;
	font-style: italic;
	color: #555; 
	font-weight: 300;
}
.studyin {
	font-size: 20px;
}

/* GitHub & Blog button */
a.btn { 
	display: inline-block; 
	border: none;
	border-radius: 4px; 
	background-color: #f5f5f5; 
	margin: 5px 20px 0 0;
	padding: 0.5em 1em 0.6em 1em; 
	color: #646464; 
	-moz-transition: all 0.2s ease; 
	-webkit-transition: all 0.2s ease; 
	-o-transition: all 0.2s ease; 
	transition: all 0.2s ease; 
}
a.btn:hover { 
	text-decoration: none;
	background-color: #555; 
	color: #FFF;
}
a.btn i { 
	font-size: 42px; 
	float: left; 
	padding-top: 5px; 
}
a.btn span { 
	font-size: 12px; 
	margin-left: 50px; 
	text-align: left; 
	padding-top: 5px; 
	display: block; 
	text-transform: uppercase; 
	line-height: 12px; 
}
a.btn strong { 
	font-size: 28px; 
	margin-left: 50px; 
	display: block; 
	line-height: 36px; 
}
</style>