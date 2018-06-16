<template>
  <nav id="navbar" class="navbar navbar-inverse navbar-fixed-bottom">
		<div class="container">
			<!-- Brand and toggle get grouped for better mobile display -->
			<div class="navbar-header page-scroll">
				<button type="button" id="navbar-toggle" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>  	
				<a class="navbar-brand hidden" href="#page-top">Go Top</a>			
				<ul class="nav navbar-nav navbar-left">
					<li class="page-scroll">
						<a href="#page-top">Go Top</a>
					</li>
				</ul>
			</div>

			<!-- Collect the nav links, forms, and other content for toggling -->
			<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				<ul class="nav navbar-nav navbar-right">
					<li class="page-scroll">
						<a href="#skills-title">Skills</a>
					</li>
					<li class="page-scroll">
						<a href="#projects-title">Projects</a>
					</li>
					<li class="page-scroll">
						<a href="#about-title">About</a>
					</li>
				</ul>
			</div>
			<!-- /.navbar-collapse -->
		</div>
		<!-- /.container-fluid -->
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
/* Nav bar */
.navbar {
	border: none;
}
.navbar-toggle {
	border: none;
}
.navbar {
    text-transform: uppercase;
    font-family: Montserrat,"Helvetica Neue",Helvetica,Arial,sans-serif;
    font-weight: 700;
    font-size: 28px;
}
.navbar-inverse {
	height: 100px;
	background-color: #bc1818;
}
.nav li:hover {
	color: #fff;
	font-size: 32px;
	-moz-transition: all 0.2s ease; 
	-webkit-transition: all 0.2s ease; 
	-o-transition: all 0.2s ease; 
	transition: all 0.2s ease;
}
</style>

