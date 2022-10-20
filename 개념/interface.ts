interface CraftBeer {
	brand?: string;
}

function brewBeer(beer: CraftBeer) {
    console.log(beer.brand);
}

let myBeer = { brandon: 'what' };
brewBeer(myBeer as CraftBeer);

