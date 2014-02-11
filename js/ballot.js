var nominees = [
  {
    name: "Alnisa Allgood",
    title: "Executive Director, Nonprofit Tech; Founder and Organizer, Madison Nonprofit Technology Group; Founder and Organizer, Madison Nonprofit Day; Advisory Board Member, The Doyenne Group",
    bio: "I'm a 'Do Good, Well Technologist': I believe that technology can service social responsibility— be used to create positive social change.",
    img_src: "alnisa_allgood.jpg",
    incumbent: true
  },
  {
    name: "Andy Bourassa",
    title: "Web Programmer at Filament Games",
    bio: "",
    img_src: ""
  },
  {
    name: "Brad Grzesiak",
    title: "Co-Founder of Bendyworks; Current Chair of Madisonium; City of Madison Digital Technology Committee Member",
    bio: "Brad is focused on fostering tech and closing the digital divide in Madison. He is a builder and a leader.",
    img_src: "brad_grzesiak.jpg",
    incumbent: 'chair'
  },
  {
    name: "Cate Amery",
    title: "User Experience Designer/Developer at Promega; Co-Organizer of Madison Women in Tech; Organizer of Madison UX Book Club",
    bio: "",
    img_src: ""
  },
  {
    name: "Forrest Woolworth",
    title: "Co-founder - Capital Entrepreneurs; COO - PerBlue",
    bio: "Champion of all things entrepreneurial. Maker of video games and beer. Lover of Madison.",
    img_src: "forrest_woolworth.jpg",
    incumbent: true
  },
  {
    name: "Glynnis Ritchie",
    title: "Designer/Developer at Bendyworks",
    bio: "Glynnis is a developer and designer at Bendyworks who cultivates a passion for the spaces where visual and technical overlap.",
    img_src: "glynnis_ritchie.jpg"
  },
  {
    name: "Heather Wentler",
    title: "Founder of Fractal; Co-Founder of The Doyenne Group; Organizer of Madison SOUP; Secretary/Treasurer of Sector67; Playful Learning Advisory Board Member",
    bio: "I will continue to support & build connections between Madisonium, the Tech & Web Industries, as well as new, non-tech businesses.",
    img_src: ""
  },
  {
    name: "James Lloyd",
    title: "100state (Board of Directors); 100health (Co-founder)",
    bio: "Beyond generally improving the Madison tech and entrepreneur scene, I'd like to focus on Technology Education for children & adults.",
    img_src: ""
  },
  {
    name: "Jim Remsik",
    title: "Founder, adorable.io",
    bio: "World-renowned hugger, community instigator, and speaker. Organizer of Madison Ruby, UXMad, & Snow*Mobile conferences.",
    img_src: "jim_remsik.jpg"
  },
  {
    name: "Joe Sweeney",
    title: "CEO & Director 100state",
    bio: "",
    img_src: ""
  },
  {
    name: "Le Osburn",
    title: "",
    bio: "",
    img_src: ""
  },
  {
    name: "Niko Skievaski",
    title: "Co-Founder of 100state and 100health",
    bio: "My companies are Madison-centric and strive to promote the Madisonium mission every day.",
    img_src: ""
  },
  {
    name: "Scott Resnick",
    title: "",
    bio: "",
    img_src: "",
    incumbent: true
  },
  {
    name: "Steve Faulkner",
    title: "",
    bio: "",
    img_src: "",
    incumbent: 'vice chair'
  },
  {
    name: "Zach Brandon",
    title: "",
    bio: "",
    img_src: "",
    incumbent: true
  },
  {
    name: "",
    title: "",
    bio: "",
    img_src: ""
  }
];

var template = function(nominee) {
  if(nominee.img_src === '') {
    nominee.img_src = "none.png";
  }
  if(nominee.bio !== '') {
    nominee.bio = "<hr><p class='bio'>" + nominee.bio + '</p>';
  } else {
    nominee.bio = "<p class='bio'></p>";
  }
  nominee.incum_qual = typeof nominee.incumbent === 'string' ? ' (' + nominee.incumbent + ')' : '';
  nominee.incumbent = !!nominee.incumbent;
  return _.template("<section class='nominee large-4 columns'><div class='callout panel'><img class='th' src='img/<%= n.img_src %>'><h4><%= n.name %><br/><small><%= n.title %></small></h4><%= n.bio %><% if(!!incumbent) { %><div class='incumbent'>incumbent<%= n.incum_qual %></div><% } %></div></section>", {n: nominee, incumbent: nominee.incumbent});
};

$(function() {
  var $nominees = $('#nominees');

  $nominees.empty();

  var groupIntoThrees = function(nominee, idx) { return Math.floor(idx/3); };
  var rejectEmpties = function(nominee) { return nominee.name === ''; };
  var nomineeToHTML = function(nominee) { return template(nominee); };
  var groupInDiv = function(group) { return "<div class='row'>" + group.join('') + "</div>"; };
  var insertGroupIntoDom = function(group) { $nominees.append(group); };

  _.chain(nominees)
    .reject(rejectEmpties)
    .shuffle()
    .map(nomineeToHTML)
    .groupBy(groupIntoThrees)
    .map(groupInDiv)
    .each(insertGroupIntoDom);
});
