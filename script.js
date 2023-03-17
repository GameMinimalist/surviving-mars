let gameState = {
  oxygen: 5,
  food: 4,
  health: 4,
  encounterIndex: 0,
};

const encounters = [
    {
      title: "Unexpected Ice Deposit",
      description: "You stumble upon an unexpected ice deposit.",
      choices: [
        {
          description: "Extract water from ice",
          oxygenChange: 2,
          foodChange: 2,
          healthChange: -1,
        },
        {
          description: "Rest and conserve",
          oxygenChange: 0,
          foodChange: 0,
          healthChange: 0,
        },
      ],
    },
	  {
	    title: "Hazardous Terrain",
	    description: "You encounter hazardous terrain.",
	    choices: [
	      {
	        description: "Cross carefully",
	        oxygenChange: 0,
	        foodChange: 0,
	        healthChange: -1,
	      },
	      {
	        description: "Find a safer route",
	        oxygenChange: -1,
	        foodChange: -1,
	        healthChange: 0,
	      },
	    ],
	  },
	  {
	    title: "Curious Anomaly",
	    description: "You discover a curious geological anomaly.",
	    choices: [
	      {
	        description: "Investigate the anomaly",
	        oxygenChange: 0,
	        foodChange: 0,
	        healthChange: 0,
	        probabilityEffect: {
	          oxygenChange: 1,
	          foodChange: 0,
	          healthChange: -1,
	        },
	      },
	      {
	        description: "Leave the anomaly",
	        oxygenChange: 0,
	        foodChange: 0,
	        healthChange: 0,
	      },
	    ],
	  },
	  {
	    title: "Communication Blackout",
	    description: "You experience a communication blackout.",
	    choices: [
	      {
	        description: "Repair the communication system",
	        oxygenChange: 1,
	        foodChange: -1,
	        healthChange: 0,
	      },
	      {
	        description: "Ignore the blackout",
	        oxygenChange: 0,
	        foodChange: 0,
	        healthChange: 0,
	      },
	    ],
	  },
	  {
	    title: "Emergency Rations",
	    description: "You find emergency rations.",
	    choices: [
	      {
	        description: "Consume the rations",
	        oxygenChange: -1,
	        foodChange: 2,
	        healthChange: 0,
	      },
	      {
	        description: "Save the rations",
	        oxygenChange: 0,
	        foodChange: 0,
	        healthChange: 0,
	      },
	    ],
	  },
	  
	  {
	      title: "Lost Rover",
	      description: "You lose track of your rover.",
	      choices: [
	        {
	          description: "Search for the rover",
	          oxygenChange: -1,
	          foodChange: -1,
	          healthChange: 0,
	          probabilityEffect: {
	            oxygenChange: 0,
	            foodChange: 0,
	            healthChange: 1,
	          },
	        },
	        {
	          description: "Abandon the rover",
	          oxygenChange: 0,
	          foodChange: 0,
	          healthChange: 0,
	        },
	      ],
	    },
	    {
	      title: "Unstable Ground",
	      description: "You encounter unstable ground.",
	      choices: [
	        {
	          description: "Proceed cautiously",
	          oxygenChange: 0,
	          foodChange: -1,
	          healthChange: 0,
	        },
	        {
	          description: "Risk the crossing",
	          oxygenChange: 0,
	          foodChange: 0,
	          healthChange: 0,
	          probabilityEffect: {
	            oxygenChange: 0,
	            foodChange: 0,
	            healthChange: -1,
	          },
	        },
	      ],
	    },
	    {
	      title: "Cave Exploration",
	      description: "You discover a cave.",
	      choices: [
	        {
	          description: "Explore the cave",
	          oxygenChange: -1,
	          foodChange: 0,
	          healthChange: 0,
	          probabilityEffect: {
	            oxygenChange: 0,
	            foodChange: 1,
	            healthChange: 0,
	          },
	        },
	        {
	          description: "Bypass the cave",
	          oxygenChange: 0,
	          foodChange: 0,
	          healthChange: 0,
	        },
	      ],
	    },
	    {
	      title: "Equipment Malfunction",
	      description: "Your equipment malfunctions.",
	      choices: [
	        {
	          description: "Attempt a repair",
	          oxygenChange: 0,
	          foodChange: -1,
	          healthChange: 0,
	          probabilityEffect: {
	            oxygenChange: 0,
	            foodChange: 0,
	            healthChange: 1,
	          },
	        },
	        {
	          description: "Ignore the malfunction",
	          oxygenChange: -2,
	          foodChange: 0,
	          healthChange: 0,
	        },
	      ],
	    },
	    {
	      title: "Meteor Shower",
	      description: "A meteor shower threatens your mission.",
	      choices: [
	        {
	          description: "Take evasive action",
	          oxygenChange: -1,
	          foodChange: -1,
	          healthChange: 0,
	        },
	        {
	          description: "Brace for impact",
	          oxygenChange: 0,
	          foodChange: 0,
	          healthChange: 0,
	          probabilityEffect: {
	            oxygenChange: 0,
	            foodChange: 0,
	            healthChange: -1,
	          },
	        },
	      ],
	    },
		{
		  title: "Supply Drop",
		  description: "You receive a signal that might lead to a supply drop.",
		  choices: [
		    {
		      description: "Investigate the signal",
		      oxygenChange: -1,
		      foodChange: -1,
		      healthChange: 0,
		      probabilityEffect: {
		        oxygenChange: 2,
		        foodChange: 2,
		        healthChange: 0,
		      },
		    },
		    {
		      description: "Ignore the signal",
		      oxygenChange: 0,
		      foodChange: 0,
		      healthChange: 0,
		    },
		  ],
		},
		{
		    title: "Dust Storm",
		    description: "You encounter a dust storm.",
		    choices: [
		      {
		        description: "Seek shelter",
		        oxygenChange: -1,
		        foodChange: 0,
		        healthChange: 0,
		      },
		      {
		        description: "Push through",
		        oxygenChange: 0,
		        foodChange: -1,
		        healthChange: 0,
		      },
		    ],
		  },
		  {
		    title: "Oxygen Leak",
		    description: "You discover an oxygen leak.",
		    choices: [
		      {
		        description: "Slow the leak",
		        oxygenChange: -2,
		        foodChange: 0,
		        healthChange: 0,
		      },
		      {
		        description: "Patch the leak",
		        oxygenChange: -1,
		        foodChange: -1,
		        healthChange: 0,
		      },
		    ],
		  },
		  {
		    title: "Food Spoilage",
		    description: "Some of your food has spoiled.",
		    choices: [
		      {
		        description: "Discard spoiled food",
		        oxygenChange: 0,
		        foodChange: -2,
		        healthChange: 0,
		      },
		      {
		        description: "Try to salvage the food",
		        oxygenChange: 0,
		        foodChange: -1,
		        healthChange: 0,
		        probabilityEffect: {
		          oxygenChange: 0,
		          foodChange: 1,
		          healthChange: 0,
		        },
		      },
		    ],
		  },
		  {
		    title: "Solar Flare",
		    description: "A solar flare is heading your way.",
		    choices: [
		      {
		        description: "Take cover",
		        oxygenChange: 0,
		        foodChange: 0,
		        healthChange: -1,
		      },
		      {
		        description: "Risk exposure",
		        oxygenChange: 0,
		        foodChange: 0,
		        healthChange: 0,
		        probabilityEffect: {
		          oxygenChange: 0,
		          foodChange: 0,
		          healthChange: -1,
		        },
		      },
		    ],
		  },
		  {
		    title: "Rockslide",
		    description: "A rockslide blocks your path.",
		    choices: [
		      {
		        description: "Climb over",
		        oxygenChange: 0,
		        foodChange: 0,
		        healthChange: -1,
		      },
		      {
		        description: "Find a detour",
		        oxygenChange: -1,
		        foodChange: -1,
		        healthChange: 0,
		      },
		    ],
		  },
		  {
		    title: "Ice Discovery",
		    description: "You discover a deposit of ice.",
		    choices: [
		      {
		        description: "Melt ice for water",
		        oxygenChange: -1,
		        foodChange: 1,
		        healthChange: 0,
		      },
		      {
		        description: "Leave the ice",
		        oxygenChange: 0,
		        foodChange: 0,
		        healthChange: 0,
		      },
		    ],
		  },
		  {
		    title: "Marsquake",
		    description: "A Marsquake shakes the ground.",
		    choices: [
		      {
		        description: "Stabilize your shelter",
		        oxygenChange: 0,
		        foodChange: 0,
		        healthChange: -1,
		      },
		      {
		        description: "Evacuate and rebuild",
		        oxygenChange: -1,
		        foodChange: -1,
		        healthChange: 0,
		      },
		    ],
		  },
		  {
		    title: "Solar Panel Damage",
		    description: "Your solar panels have been damaged.",
		    choices: [
		      {
		        description: "Attempt to repair",
		        oxygenChange: 0,
		        foodChange: -1,
		        healthChange: 0,
		        fiftyFifty: true,
		      },
		      {
		        description: "Leave the panels damaged",
		        oxygenChange: -1,
		        foodChange: 0,
		        healthChange: 0,
		        nextThree: true,
		      },
		    ],
		  },
		  {
		     title: "Martian Soil Sample",
		     description: "You've collected a Martian soil sample with potential signs of ancient life.",
		     choices: [
		       {
		         description: "Analyze the sample",
		         oxygenChange: 0,
		         foodChange: 1,
		         healthChange: 0,
		         fiftyFifty: true,
		       },
		       {
		         description: "Leave the sample",
		         oxygenChange: 0,
		         foodChange: 0,
		         healthChange: 0,
		       },
		     ],
		   },
		  {
		    title: "Navigation Error",
		    description: "You've made a navigation error.",
		    choices: [
		      {
		        description: "Recalculate the route",
		        oxygenChange: -1,
		        foodChange: -1,
		        healthChange: 0,
		      },
		      {
		        description: "Continue on the current path",
		        oxygenChange: 0,
		        foodChange: 0,
		        healthChange: 0,
		        fiftyFifty: true,
		      },
		    ],
		  },
		  {
		    title: "Sandstorm",
		    description: "A sandstorm is approaching.",
		    choices: [
		      {
		        description: "Hunker down",
		        oxygenChange: -1,
		        foodChange: 0,
		        healthChange: 0,
		      },
		      {
		        description: "Power through",
		        oxygenChange: 0,
		        foodChange: -1,
		        healthChange: 0,
		      },
		    ],
		  },
		  {
		    title: "Abandoned Vehicle",
		    description: "You've found an abandoned vehicle.",
		    choices: [
		      {
		        description: "Salvage for parts",
		        oxygenChange: 1,
		        foodChange: 1,
		        healthChange: -1,
		      },
		      {
		        description: "Leave the vehicle",
		        oxygenChange: 0,
		        foodChange: 0,
		        healthChange: 0,
		      },
		    ],
		  },
		  {
		    title: "Signal Distress",
		    description: "Should you send a distress signal?",
		    choices: [
		      {
		        description: "Send a distress signal",
		        oxygenChange: -1,
		        foodChange: 0,
		        healthChange: 0,
		        fiftyFifty: true,
		      },
		      {
		        description: "Conserve resources",
		        oxygenChange: 0,
		        foodChange: 0,
		        healthChange: 0,
		      },
		    ],
		  },
		  
		  {
		      title: "Unusual Rock Formation",
		      description: "You encounter an unusual rock formation.",
		      choices: [
		        {
		          description: "Examine the formation",
		          probabilityEffect: {
		            health: 1, // Gain insights to improve health or the rock formation collapses
		          },
		          fiftyFifty: true,
		        },
		        {
		          description: "Avoid the formation",
		          oxygenChange: 0,
		          foodChange: -1,
		          healthChange: 0,
		        },
		      ],
		    },
		
		  {
		    title: "Electrical Storm",
		    description: "An electrical storm approaches.",
		    choices: [
		      {
		        description: "Seek shelter",
		        oxygenChange: 0,
		        foodChange: -1,
		        healthChange: 0,
		      },
		      {
		        description: "Press on",
		        oxygenChange: -1,
		        foodChange: 0,
		        healthChange: 0,
		      },
		    ],
		  },
		  {
		    title: "Low Energy Levels",
		    description: "You feel extremely fatigued.",
		    choices: [
		      {
		        description: "Rest and recover",
		        probabilityEffect: {
		          oxygenChange: -1,
		          foodChange: -1,
		          healthChange: 1,
		        },
		      },
		      {
		        description: "Push through the fatigue",
		        oxygenChange: 0,
		        foodChange: 0,
		        healthChange: 0,
		        probabilityEffect: {
		          healthChange: -1,
		        },
		      },
		    ],
		  },
		  {
		    title: "Equipment Cache",
		    description: "You find a cache of equipment.",
		    choices: [
		      {
		        description: "Search the cache",
		        oxygenChange: 0,
		        foodChange: -1,
		        healthChange: 0,
		        probabilityEffect: {
		          oxygenChange: 1,
		          healthChange: 1,
		        },
		      },
		      {
		        description: "Move on",
		        oxygenChange: 0,
		        foodChange: 0,
		        healthChange: 0,
		      },
		    ],
		  },
		  
];

function startGame() {
  gameState = {
    oxygen: 5,
    food: 4,
    health: 4,
    encounterIndex: 0,
  };
  updateUI();
  loadNextEncounter();

  const startButton = document.getElementById("start-game");
  startButton.innerText = "Restart";
  startButton.removeEventListener("click", startGame);
  startButton.addEventListener("click", restartGame);
}


function loadNextEncounter() {
  if (gameState.encounterIndex >= encounters.length) {
    endGame();
    return;
  }

  const encounter = encounters[gameState.encounterIndex];
  document.getElementById("encounter-title").innerText = encounter.title;
  document.getElementById("encounter-description").innerText = encounter.description;
  document.getElementById("outcome-message").innerText = ""; // Add this line to clear the outcome message
  document.getElementById("start-game").innerText = "Next";
  

  const storyContainer = document.getElementById("story-container");
  const encounterDiv = document.createElement("div");
  encounterDiv.classList.add("encounter");
  encounterDiv.innerHTML = `<div class="encounter-title">${encounter.title}</div>
                            <div class="encounter-description">${encounter.description}</div>`;
  storyContainer.appendChild(encounterDiv);

  // Save the encounterDiv to the gameState for later use
  gameState.currentEncounterDiv = encounterDiv;

  for (let i = 0; i < 2; i++) {
    const choice = encounter.choices[i];
    const button = document.getElementById(`choice${i + 1}`);
    button.innerHTML = choice.description;

    if (choice.probabilityEffect) {
      button.innerHTML += `<br><small>Possible outcome: Oxygen ${choice.probabilityEffect.oxygenChange > 0 ? '+' : ''}${choice.probabilityEffect.oxygenChange}, Food ${choice.probabilityEffect.foodChange > 0 ? '+' : ''}${choice.probabilityEffect.foodChange}, Health ${choice.probabilityEffect.healthChange > 0 ? '+' : ''}${choice.probabilityEffect.healthChange}</small>`;
    } else {
      button.innerHTML += `<br><small>Oxygen ${choice.oxygenChange > 0 ? '+' : ''}${choice.oxygenChange}, Food ${choice.foodChange > 0 ? '+' : ''}${choice.foodChange}, Health ${choice.healthChange > 0 ? '+' : ''}${choice.healthChange}</small>`;
    }
  }
}

function restartGame() {
  // Remove the existing encounters from the story-container
  const storyContainer = document.getElementById("story-container");
  storyContainer.innerHTML = "";

  // Reset the game state and load the first encounter
  startGame();
}


function showAlert(message) {
  document.getElementById("alert-message").innerText = message;
  document.getElementById("custom-alert").style.display = "block";
}


function handleChoice(choiceIndex) {
  const encounter = encounters[gameState.encounterIndex];
  const choice = encounter.choices[choiceIndex];

  gameState.oxygen += choice.oxygenChange;
  gameState.food += choice.foodChange;
  gameState.health += choice.healthChange;

  if (gameState.oxygen <= 0 || gameState.food <= 0 || gameState.health <= 0) {
    endGame("Your resources have been depleted.");
    return;
  }

  let outcomeMessage = "";
  if (choice.probabilityEffect) {
    const success = Math.random() >= 0.5;
    if (success) {
      gameState.oxygen += choice.probabilityEffect.oxygenChange;
      gameState.food += choice.probabilityEffect.foodChange;
      gameState.health += choice.probabilityEffect.healthChange;

      outcomeMessage = `Outcome: Oxygen ${choice.probabilityEffect.oxygenChange > 0 ? '+' : ''}${choice.probabilityEffect.oxygenChange}, Food ${choice.probabilityEffect.foodChange > 0 ? '+' : ''}${choice.probabilityEffect.foodChange}, Health ${choice.probabilityEffect.healthChange > 0 ? '+' : ''}${choice.probabilityEffect.healthChange}`;
    } else {
      outcomeMessage = "Outcome: No effect";
    }
  } else {
    outcomeMessage = `Outcome: Oxygen ${choice.oxygenChange > 0 ? '+' : ''}${choice.oxygenChange}, Food ${choice.foodChange > 0 ? '+' : ''}${choice.foodChange}, Health ${choice.healthChange > 0 ? '+' : ''}${choice.healthChange}`;
  }

  if (outcomeMessage) {
    showAlert(outcomeMessage);
  }

  gameState.encounterIndex++;
  updateUI();
  loadNextEncounter();
}

function updateUI() {
  document.getElementById("oxygen").innerText = gameState.oxygen;
  document.getElementById("food").innerText = gameState.food;
  document.getElementById("health").innerText = gameState.health;
}

function endGame(customMessage) {
  document.getElementById("encounter-title").innerText = "Game Over";

  if (customMessage) {
    document.getElementById("encounter-description").innerText = customMessage;
  } else {
    document.getElementById("encounter-description").innerText = "You have completed your journey on Mars.";
  }

  for (let i = 0; i < 2; i++) {
    const button = document.getElementById(`choice${i + 1}`);
    button.disabled = true;
    button.innerText = "Game Over";
  }

  const score = gameState.encounterIndex;

  let scoreMessage = "";
  if (score <= 3) {
    scoreMessage = "Novice Explorer";
  } else if (score <= 6) {
    scoreMessage = "Intermediate Explorer";
  } else if (score <= 9) {
    scoreMessage = "Advanced Explorer";
  } else {
    scoreMessage = "Master Explorer";
  }

  document.getElementById("outcome-message").innerText = `Game Over. Your score is: ${score} (${scoreMessage})`;
  document.getElementById("start-game").innerText = "Restart";
  document.getElementById("custom-alert").style.display = "block";
}

document.getElementById("start-game").addEventListener("click", startGame);
document.getElementById("choice1").addEventListener("click", () => handleChoice(0));
document.getElementById("choice2").addEventListener("click", () => handleChoice(1));


document.getElementById("alert-close").addEventListener("click", function () {
  document.getElementById("custom-alert").style.display = "none";
});


updateUI(); // Add this line at the end of the script.js file

