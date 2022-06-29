function fakeCards(numCards = 10){
	cardCode = () => `
<div class="col col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-2" col-xxl-2">
	<div class="card">
		<img src="https://picsum.photos/id/${getRandomInt(10,30)}/200" class="card-img-top" alt="...">
		<div class="card-body">
			<h5 class="card-title">Repo Name</h5>
			<p class="card-text">Description of what the app/script does</p>
			<a href="#" class="btn btn-primary">View</a>
		</div>
	</div>
</div>`;
	var cardDiv = document.getElementById('cardsAllRow');
	for(var i = 0; i < numCards; i++) cardDiv.innerHTML = cardDiv.innerHTML + cardCode();
	
}
function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min);
}
fakeCards();