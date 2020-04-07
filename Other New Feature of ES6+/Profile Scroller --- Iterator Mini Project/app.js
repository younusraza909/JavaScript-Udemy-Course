const data = [
  {
    name: "John Doe",
    age: 32,
    gender: "Male",
    lookingFor: "Female",
    location: "Boston MA",
    image: "https://randomuser.me/api/portraits/men/82.jpg",
  },
  {
    name: "Jen Smith",
    age: 26,
    gender: "FeMale",
    lookingFor: "Mmale",
    location: "Miami FL",
    image: "https://randomuser.me/api/portraits/women/82.jpg",
  },
  {
    name: "William Johnson",
    age: 38,
    gender: "Male",
    lookingFor: "Female",
    location: "Lynn MA",
    image: "https://randomuser.me/api/portraits/men/89.jpg",
  },
];

const profiles = profileIterator(data);

//Call first profile on load
nextProfile();

//next Event
document.getElementById("next").addEventListener("click", nextProfile);

//Next profile Display
function nextProfile() {
  const currentProfile = profiles.next().value;

  if (currentProfile !== undefined) {
    document.getElementById("profileDisplay").innerHTML = `
        <ul class="list-group">
        <li class="list-group-item">Name:${currentProfile.name}</li>
        <li class="list-group-item">Age:${currentProfile.age}</li>
        <li class="list-group-item">Location:${currentProfile.location}</li>
        <li class="list-group-item">Preferrence:${currentProfile.gender} looking for ${currentProfile.lookingFor}</li>
        </ul>
        `;

    document.getElementById("imageDisplay").innerHTML = `
        <img src=${currentProfile.image} class="rounded-circle">
    `;
  } else {
    //Nomore Profiles
    window.location.reload();
  }
}

//Profile Iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < profiles.length
        ? {
            value: profiles[nextIndex++],
            done: false,
          }
        : {
            done: true,
          };
    },
  };
}
