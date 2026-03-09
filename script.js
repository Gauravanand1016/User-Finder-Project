let users = [
  {
    name: "amisha rathore",
    pic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    bio: "silent chaos in a loud world 🌑🖤 | not for everyone",
  },
  {
    name: "amita mehta",
    pic: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    bio: "main character energy 🎬 | coffee > everything ☕✨",
  },
  {
    name: "isha oberoi",
    pic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    bio: "walking through dreams in doc martens 💭🖤 | late night thinker",
  },
  {
    name: "Ojin Oklawa",
    pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    bio: "too glam to give a damn 💅 | filter free soul",
  },
  {
    name: "diya bansal",
    pic: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    bio: "a little chaos, a lot of art 🎨✨ | just vibes",
  },
  {
    name: "tanay rawat",
    pic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    bio: "don’t text, just vibe 🪩 | soft heart, sharp mind",
  },
  {
    name: "mohit chhabra",
    pic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    bio: "aesthetic overload 📸🕊️ | living in lowercase",
  }
];


function showUsers(arr){
    arr.forEach(function (user){
        //for creating outer card div

        const card = document.createElement("div");
        card.classList.add("card");

        // for creating image
        const img = document.createElement("img");
        img.src = user.pic;
        img.classList.add("bg-img");

        // for creating blured-layred div
        const blurredLayer = document.createElement("div");
        blurredLayer.style.backgroundImage =`url(${user.pic})`;
        blurredLayer.classList.add("blurred-layer");

        // for creating create content div
        const content = document.createElement("div");
        content.classList.add("content");

        // create h3 and paragraph
        const heading = document.createElement("h3");
        heading.textContent = user.name;

        const para = document.createElement("p");
        para.textContent = user.bio;

        // append heading and paragraph to content 
        content.appendChild(heading);
        content.appendChild(para);


        //append all the card
        card.appendChild(img);
        card.appendChild(blurredLayer);
        card.appendChild(content);

        // at last finally, append card to the body or any container
        document.querySelector(".cards").appendChild(card);
    });

}


showUsers(users);


let inp = document.querySelector(".inp");
inp.addEventListener("input",function(){
    let newUsers = users.filter((user)=>{
        return user.name.startsWith(inp.value);

    });
    document.querySelector(".cards").innerHTML="";
    showUsers(newUsers);

});

