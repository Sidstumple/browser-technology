var alphabet = document.querySelectorAll('.alph-item');
var names = document.querySelectorAll('.name');
var digits = document.querySelectorAll('.digits');
var allNames = document.querySelectorAll('.detail');
var options = document.getElementById('contacts');
var search = document.getElementById('search');

search.classList.remove('hide')

console.log(allNames);
allNames.forEach(function(name){
  console.log(name.id);
  options.innerHTML += `
    <option value="${name.id}"></option>
  `
})

search.addEventListener('input', function(e){
  var val = e.target.value;
  location.hash = val;
  document.querySelector('.'+val).parentElement.classList.add('highlight');
})



digits.forEach(function(el){
  el.classList.remove('targ');
})

alphabet.forEach(function(inner) {
  var innr = inner.innerText;
  var enabled = document.getElementById(innr);
  if (enabled) {
    var enable = enabled.id;
    var select = document.querySelectorAll('.'+ enable);
    for (var i = 0; i < select.length; i++) {
      select[i].classList.add('enabled')
    }
  } else {
    var all = document.querySelectorAll('.alph-item')
    for (var i = 0; i < all.length; i++) {
      all[i].classList.add('disabled')
    }
  }
})


names.forEach(function(name){
  document.getElementById(name.id).addEventListener('click', function(el){
    var target = document.querySelectorAll(el.target.hash);
    var next = target[0].nextElementSibling.id;

    if(el.target.classList.contains('rotate')){
      el.target.classList.remove('rotate');
      el.target.parentElement.classList.remove('active');
      document.getElementById(next).classList.remove('open');
      console.log('close');
    } else {
      el.target.classList.add('rotate');
      el.target.parentElement.classList.add('active');
      document.getElementById(next).classList.add('open');
      console.log('open');
    }
  })
})




// var html = document.getElementById('contact')
//
// var data = [ {"firstName": "Denise", "lastName": "Carter", "phoneNumber": "(+31)620272000", "Company": "Sed LLC"}, {"firstName": "Echo", "lastName": "Calhoun", "phoneNumber": "(+31)656374285", "Company": "Sed Eget Lacus Ltd"}, {"firstName": "Eaton", "lastName": "Baxter", "phoneNumber": "(+31)651500671", "Company": "Quisque Purus Sapien Industries"}, {"firstName": "Idona", "lastName": "Mcconnell", "phoneNumber": "(+31)682161792", "Company": "Maecenas Limited"}, {"firstName": "Jolie", "lastName": "Shepard", "phoneNumber": "(+31)666821403", "Company": "Libero Associates"}, {"firstName": "Kaseem", "lastName": "Weaver", "phoneNumber": "(+31)656848301", "Company": "Risus Quisque Corporation"}, {"firstName": "Stacy", "lastName": "Wolf", "phoneNumber": "(+31)636435806", "Company": "Sit Amet Incorporated"}, {"firstName": "Hope", "lastName": "Spencer", "phoneNumber": "(+31)685239643", "Company": "Duis LLC"}, {"firstName": "Armando", "lastName": "Goodwin", "phoneNumber": "(+31)600917267", "Company": "Amet Inc."}, {"firstName": "Frances", "lastName": "Mcneil", "phoneNumber": "(+31)631490967", "Company": "Nunc LLC"}, {"firstName": "TaShya", "lastName": "Herman", "phoneNumber": "(+31)656082878", "Company": "Sed Incorporated"}, {"firstName": "Kendall", "lastName": "Reynolds", "phoneNumber": "(+31)698127861", "Company": "Eu Odio Phasellus Limited"}, {"firstName": "Lesley", "lastName": "Puckett", "phoneNumber": "(+31)621540349", "Company": "In Dolor Fusce Consulting"}, {"firstName": "Philip", "lastName": "Chambers", "phoneNumber": "(+31)635807102", "Company": "Cras Eget Nisi Limited"}, {"firstName": "Regina", "lastName": "Burris", "phoneNumber": "(+31)682577603", "Company": "Nulla At Incorporated"}, {"firstName": "Ifeoma", "lastName": "Lynch", "phoneNumber": "(+31)686324409", "Company": "Sed Orci Lobortis Institute"}, {"firstName": "Callum", "lastName": "Holland", "phoneNumber": "(+31)675764776", "Company": "Aliquet Corporation"}, {"firstName": "Christen", "lastName": "Merritt", "phoneNumber": "(+31)609475528", "Company": "Dolor Associates"}, {"firstName": "Beau", "lastName": "Acevedo", "phoneNumber": "(+31)609294860", "Company": "Elementum Dui Associates"}, {"firstName": "Zeph", "lastName": "Cross", "phoneNumber": "(+31)620254435", "Company": "Suspendisse Ac Metus LLC"}, {"firstName": "Zane", "lastName": "Neal", "phoneNumber": "(+31)611435790", "Company": "Nec Mollis Corp."}, {"firstName": "Sybil", "lastName": "Mack", "phoneNumber": "(+31)636504923", "Company": "Ipsum Non LLP"}, {"firstName": "Remedios", "lastName": "Fuller", "phoneNumber": "(+31)625232907", "Company": "Blandit Company"}, {"firstName": "Erasmus", "lastName": "Hampton", "phoneNumber": "(+31)611943735", "Company": "Aliquam Nec Limited"}, {"firstName": "Ciaran", "lastName": "Berry", "phoneNumber": "(+31)605921685", "Company": "In Dolor Fusce Company"}, {"firstName": "Geraldine", "lastName": "Yates", "phoneNumber": "(+31)653525517", "Company": "Aliquam Industries"}, {"firstName": "Ariana", "lastName": "Armstrong", "phoneNumber": "(+31)647997798", "Company": "Suscipit Est Ac Inc."}, {"firstName": "Harriet", "lastName": "Barton", "phoneNumber": "(+31)678217640", "Company": "Duis Mi Corp."}, {"firstName": "Roanna", "lastName": "Boyd", "phoneNumber": "(+31)637864788", "Company": "Ullamcorper Consulting"}, {"firstName": "Dustin", "lastName": "Santana", "phoneNumber": "(+31)615236062", "Company": "Orci Incorporated"}, {"firstName": "Hamish", "lastName": "Alston", "phoneNumber": "(+31)664527754", "Company": "Libero Morbi Accumsan Consulting"}, {"firstName": "Yvette", "lastName": "Calhoun", "phoneNumber": "(+31)697080531", "Company": "Dolor Inc."}, {"firstName": "Tobias", "lastName": "Rollins", "phoneNumber": "(+31)682683681", "Company": "Aliquet Libero Ltd"}, {"firstName": "Veronica", "lastName": "Dillon", "phoneNumber": "(+31)621243889", "Company": "Velit Quisque Foundation"}, {"firstName": "Breanna", "lastName": "Ewing", "phoneNumber": "(+31)622294372", "Company": "Eget Corporation"}, {"firstName": "Shoshana", "lastName": "Pollard", "phoneNumber": "(+31)695754720", "Company": "Ipsum Curabitur Consequat LLC"}, {"firstName": "Dominique", "lastName": "Thomas", "phoneNumber": "(+31)638819018", "Company": "Dictum Phasellus Ltd"}, {"firstName": "Sonya", "lastName": "Fry", "phoneNumber": "(+31)625136678", "Company": "Quis Diam LLP"}, {"firstName": "Emerson", "lastName": "Kirk", "phoneNumber": "(+31)672310999", "Company": "Nec Ligula PC"}, {"firstName": "Quail", "lastName": "Shepard", "phoneNumber": "(+31)605612797", "Company": "Nunc Industries"}, {"firstName": "Shellie", "lastName": "Reed", "phoneNumber": "(+31)687805973", "Company": "Egestas A Dui Corp."}, {"firstName": "Conan", "lastName": "Carson", "phoneNumber": "(+31)623931825", "Company": "Augue Institute"}, {"firstName": "Zena", "lastName": "Bird", "phoneNumber": "(+31)617208368", "Company": "Arcu Vestibulum Ltd"}, {"firstName": "Emma", "lastName": "Byrd", "phoneNumber": "(+31)613503969", "Company": "In At Pede Associates"}, {"firstName": "Reagan", "lastName": "Perkins", "phoneNumber": "(+31)676755678", "Company": "Eros Turpis Non Incorporated"}, {"firstName": "Kasper", "lastName": "Gallegos", "phoneNumber": "(+31)675199532", "Company": "Mattis Cras Eget LLC"}, {"firstName": "Kylee", "lastName": "Walton", "phoneNumber": "(+31)690711999", "Company": "Molestie Associates"}, {"firstName": "McKenzie", "lastName": "Nichols", "phoneNumber": "(+31)622572318", "Company": "Lacinia Sed Associates"}, {"firstName": "Gil", "lastName": "Wade", "phoneNumber": "(+31)699367823", "Company": "Feugiat Industries"}, {"firstName": "Imani", "lastName": "Snider", "phoneNumber": "(+31)654888796", "Company": "Dolor Corporation"}, {"firstName": "Malachi", "lastName": "Chambers", "phoneNumber": "(+31)663070513", "Company": "Risus Institute"}, {"firstName": "Wesley", "lastName": "Pollard", "phoneNumber": "(+31)615285929", "Company": "Euismod Institute"}, {"firstName": "Eliana", "lastName": "Mccall", "phoneNumber": "(+31)651175982", "Company": "In Felis Inc."}, {"firstName": "Ciara", "lastName": "Burt", "phoneNumber": "(+31)637160515", "Company": "In Incorporated"}, {"firstName": "Nolan", "lastName": "Sears", "phoneNumber": "(+31)622057588", "Company": "Commodo Limited"}, {"firstName": "Josiah", "lastName": "Patton", "phoneNumber": "(+31)652730743", "Company": "Non Industries"}, {"firstName": "Alika", "lastName": "Meadows", "phoneNumber": "(+31)608283072", "Company": "Egestas Duis Ltd"}, {"firstName": "Honorato", "lastName": "Stafford", "phoneNumber": "(+31)665745742", "Company": "In Nec Orci Company"}, {"firstName": "Fleur", "lastName": "Combs", "phoneNumber": "(+31)692448062", "Company": "Ac Feugiat Industries"}, {"firstName": "Allistair", "lastName": "Downs", "phoneNumber": "(+31)623092902", "Company": "Lacinia Orci Corp."}, {"firstName": "Kellie", "lastName": "Nguyen", "phoneNumber": "(+31)695687943", "Company": "Feugiat Metus Sit Ltd"}, {"firstName": "Lee", "lastName": "Cabrera", "phoneNumber": "(+31)689430612", "Company": "Diam Corporation"}, {"firstName": "Ulysses", "lastName": "Chambers", "phoneNumber": "(+31)641738673", "Company": "Eleifend Vitae Industries"}, {"firstName": "Chava", "lastName": "Boone", "phoneNumber": "(+31)656485490", "Company": "Magna Consulting"}, {"firstName": "Akeem", "lastName": "Davenport", "phoneNumber": "(+31)635115029", "Company": "Eget LLC"}, {"firstName": "Lamar", "lastName": "Cooley", "phoneNumber": "(+31)664304154", "Company": "Auctor Velit Institute"}, {"firstName": "Dolan", "lastName": "Grimes", "phoneNumber": "(+31)636155008", "Company": "Dui Cum Sociis Industries"}, {"firstName": "Iola", "lastName": "Haley", "phoneNumber": "(+31)673038072", "Company": "Nam Nulla Magna Associates"}, {"firstName": "Norman", "lastName": "Salas", "phoneNumber": "(+31)637596843", "Company": "Viverra Ltd"}, {"firstName": "Ella", "lastName": "Cherry", "phoneNumber": "(+31)655685622", "Company": "Ac Ltd"}, {"firstName": "Heidi", "lastName": "Levine", "phoneNumber": "(+31)643739321", "Company": "Ut Tincidunt Foundation"}, {"firstName": "Lee", "lastName": "Mcfadden", "phoneNumber": "(+31)665388512", "Company": "Semper Dui Lectus Incorporated"}, {"firstName": "Kirk", "lastName": "Robinson", "phoneNumber": "(+31)642224617", "Company": "Sed Malesuada Limited"}, {"firstName": "Amela", "lastName": "Campbell", "phoneNumber": "(+31)610819124", "Company": "Aliquam Rutrum Lorem Company"}, {"firstName": "Cheyenne", "lastName": "Osborn", "phoneNumber": "(+31)604552765", "Company": "At Corporation"}, {"firstName": "Rebekah", "lastName": "Bauer", "phoneNumber": "(+31)649856354", "Company": "At Sem Molestie Corp."}, {"firstName": "Cathleen", "lastName": "Merritt", "phoneNumber": "(+31)643513236", "Company": "Dignissim LLC"}, {"firstName": "Fulton", "lastName": "Hoover", "phoneNumber": "(+31)604204743", "Company": "Ut Quam Vel LLP"}, {"firstName": "Zelenia", "lastName": "Poole", "phoneNumber": "(+31)611806067", "Company": "Nullam Foundation"}, {"firstName": "Asher", "lastName": "Wagner", "phoneNumber": "(+31)689808527", "Company": "Felis Adipiscing Corporation"}, {"firstName": "Barry", "lastName": "Bentley", "phoneNumber": "(+31)642110783", "Company": "Velit Aliquam Associates"}, {"firstName": "Donovan", "lastName": "Terrell", "phoneNumber": "(+31)659002120", "Company": "Etiam Bibendum Fermentum PC"}, {"firstName": "Kato", "lastName": "Hogan", "phoneNumber": "(+31)612093990", "Company": "Tincidunt Vehicula Risus Limited"}, {"firstName": "Reuben", "lastName": "Higgins", "phoneNumber": "(+31)693361708", "Company": "Metus Facilisis Foundation"}, {"firstName": "Tara", "lastName": "Hays", "phoneNumber": "(+31)672183324", "Company": "Proin Foundation"}, {"firstName": "Brenna", "lastName": "Fletcher", "phoneNumber": "(+31)615021304", "Company": "Ipsum Suspendisse PC"}, {"firstName": "Christopher", "lastName": "Gonzales", "phoneNumber": "(+31)602048110", "Company": "Vulputate Associates"}, {"firstName": "Grant", "lastName": "Hogan", "phoneNumber": "(+31)655633611", "Company": "Donec At Arcu LLC"}, {"firstName": "Marvin", "lastName": "Ingram", "phoneNumber": "(+31)647182710", "Company": "Libero At Associates"}, {"firstName": "Deirdre", "lastName": "Schroeder", "phoneNumber": "(+31)683296213", "Company": "Tellus Suspendisse Incorporated"}, {"firstName": "Gregory", "lastName": "Grant", "phoneNumber": "(+31)603755034", "Company": "Elementum At Inc."}, {"firstName": "Yoshi", "lastName": "Hicks", "phoneNumber": "(+31)664231242", "Company": "Orci In Consequat Foundation"}, {"firstName": "Aquila", "lastName": "Gamble", "phoneNumber": "(+31)633740585", "Company": "Phasellus Vitae Mauris Limited"}, {"firstName": "Brenden", "lastName": "Ayers", "phoneNumber": "(+31)633072117", "Company": "Nec Ante Limited"}, {"firstName": "Sandra", "lastName": "Boyle", "phoneNumber": "(+31)607361697", "Company": "Vitae Foundation"}, {"firstName": "Joel", "lastName": "Franklin", "phoneNumber": "(+31)606528352", "Company": "Luctus Felis Purus Corp."}, {"firstName": "Steel", "lastName": "Velez", "phoneNumber": "(+31)627286343", "Company": "Pede Malesuada PC"}, {"firstName": "Echo", "lastName": "Mack", "phoneNumber": "(+31)617425072", "Company": "Sit Amet Consectetuer Incorporated"}, {"firstName": "Holmes", "lastName": "Gibbs", "phoneNumber": "(+31)616348067", "Company": "Orci Institute"}, {"firstName": "Madison", "lastName": "Hoover", "phoneNumber": "(+31)654342923", "Company": "Ornare Egestas Ligula Industries"} ];
//
// data.sort(function(a, b) {
//   var nameA = a.lastName.toUpperCase(); // ignore upper and lowercase
//   var nameB = b.lastName.toUpperCase(); // ignore upper and lowercase
//   if (nameA < nameB) {
//     return -1;
//   }
//   if (nameA > nameB) {
//     return 1;
//   }
//   // names must be equal
//   return 0;
// });
// console.log(data);
//
//
// data.map(function(contact) {
//   console.log(contact);
//   var fn = contact.firstName;
//   var ln = contact.lastName;
//   var comp = contact.Company;
//   var pn = contact.phoneNumber;
//   html.innerHTML += `
//     <div>
//       <ul>
//         <li><h2>${ln}, ${fn}</h2></li>
//         <li><p>${pn}<p></li>
//         <li><p>${comp}<p></li>
//       </ul>
//     </div>
//     `
// })
