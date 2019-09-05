var NavWidth=$(window).width();
		var NavHeight = $(window).height();
		var x = NavWidth/2;
		var y = NavHeight/2;
		var rotation = 0;
		var crit = 0;
		function walk()
		{	
			//Rotation aléatoire
			var random = Math.floor((Math.random()*360));
			//Empêche le "personnage" de faire des angles >45 ou <-45
			while((rotation-90)-random>45||(rotation-90)-random<-45) 
			{
				random = Math.floor((Math.random()*360));
				//Vérifie si le "personnage" va sortir de l'écran
				if(x + Math.cos((random/180)*Math.PI)*50<0||y + Math.sin((random/180)*Math.PI)*50<0||x + Math.cos((random/180)*Math.PI)*50>NavWidth||y +Math.sin((random/180)*Math.PI)*50>NavHeight )
				{
					//Si oui, il fait demi-tour
					random += 180;
					break;
				}
				//Vérifie si le programme n'est pas coincé dans la boucle, si oui il en
				//sort au bout de 10 itérations
				if(crit>10){break;}
				
				crit++;
			}
			crit=0;
			//Détermine la future position en fonction de l'angle aléatoire précédent
			x = x + Math.cos((random/180)*Math.PI)*50;
			y = y +Math.sin((random/180)*Math.PI)*50;
			//Ajustement de la rotation en fonction de l'inclinaison de l'image originale
			rotation = random+90;
			//Création de l'élément
			var footprint = document.createElement('img');
              footprint.setAttribute("src","../img/footprint.png");
              footprint.setAttribute("width", "40px");
              footprint.setAttribute("height", "40px");
			footprint.style.position="absolute";
			footprint.style.left=x+"px";
			footprint.style.top=y+"px";
			footprint.className="footprint";
			footprint.style.webkitTransform = "rotate("+rotation+"deg)";
			//Ajout de l'élément dans le body
			document.body.appendChild(footprint);
		}
		//Appel la fonction walk() toutes les secondes
		setInterval(function(){walk();},1000);