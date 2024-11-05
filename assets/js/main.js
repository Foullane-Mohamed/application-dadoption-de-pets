const btn_like = document.querySelector(".fill");
const btn_dislike = document.querySelector(".outline");
let banner_image = document.querySelector(".banner-image");
const titre = document.getElementById("titre");
const description = document.getElementById("description");

btn_like.addEventListener("click", () => {
    banner_image.style.backgroundImage = `url(${petsArray[2].image})`; 


    
});
let petsArray = [
    {
      id: 1,
      name: "Charlie",
      description: "A playful and energetic dog who loves to fetch and run.",
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      liked:false
    },
    {
      id: 2,
      name: "Bella & Jazz",
      description: "A sweet and affectionate cat with a love for cuddles.",
      image: "https://images.unsplash.com/photo-1504595403659-9088ce801e29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBldHN8ZW58MHx8MHx8fDA%3D",
      liked:false
    },
    {
      id: 3,
      name: "Max",
      description: "A loyal and protective dog, always ready for an adventure.",
      image: "https://images.unsplash.com/photo-1535930749574-1399327ce78f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHBldHN8ZW58MHx8MHx8fDA%3D",
      liked:false
    },
    {
      id: 4,
      name: "Luna",
      description: "A curious and intelligent cat who loves to explore.",
      image: "https://images.unsplash.com/photo-1518378188025-22bd89516ee2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHBldHN8ZW58MHx8MHx8fDA%3D",
      liked:false
    },
    {
      id: 5,
      name: "Buddy",
      description: "A friendly and sociable dog who enjoys meeting new people.",
      image: "https://images.unsplash.com/photo-1518288774672-b94e808873ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHBldHN8ZW58MHx8MHx8fDA%3D",
      liked:false
    },
    {
      id: 6,
      name: "Daisy",
      description: "A gentle and calm cat with a soothing purr.",
      image: "https://images.unsplash.com/photo-1536590158209-e9d615d525e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHBldHN8ZW58MHx8MHx8fDA%3D",
      liked:false
    },
    {
      id: 7,
      name: "Rocky",
      description: "A strong and brave dog with a heart of gold.",
      image: "https://images.unsplash.com/photo-1548366086-7f1b76106622?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHBldHN8ZW58MHx8MHx8fDA%3D",
      liked:false
    },
    {
      id: 8,
      name: "Molly",
      description: "A playful and mischievous kitten who loves to climb.",
      image: "https://images.unsplash.com/photo-1521417611542-86967c2ab11f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fHBldHN8ZW58MHx8MHx8fDA%3D",
      liked:false
    },
    {
      id: 9,
      name: "Oliver",
      description: "A clever and curious dog who enjoys solving puzzles.",
      image: "https://images.unsplash.com/photo-1625316708582-7c38734be31d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fHBldHN8ZW58MHx8MHx8fDA%3D",
      liked:false
    },
    {
      id: 10,
      name: "Chloe",
      description: "A graceful and elegant cat with a love for sunbathing.",
      image: "https://images.unsplash.com/photo-1604186838347-9faaf0b83be8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODd8fHBldHN8ZW58MHx8MHx8fDA%3D",
      liked:false
    }
  ];




let petTest= petsArray[0];



  function showPet(pet){
    document.c
  }
  

