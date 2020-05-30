window.addEventListener('load', start);

function start() {
  document.querySelector('#inputSearch').focus();
  form = document.querySelector('form');
  form.addEventListener('submit', handleSubmit);
}

const handleSubmit = (event) => {
  event.preventDefault();

  const input = document.querySelector('#inputSearch');
  manipulateData(input.value);
};

const manipulateData = (search) => {
  const valuesSearched = searchValues(search);
  const statistics = statisticsSearchedValues(valuesSearched);

  render(valuesSearched, statistics);
};

const statisticsSearchedValues = (values) => {
  let male = 0;
  let female = 0;

  values.forEach((value) => {
    if (value.gender === 'male') {
      male++;
      return;
    }

    if (value.gender === 'female') {
      female++;
      return;
    }
  });

  let ages = values
    .map((val) => {
      return val.dob.age;
    })
    .reduce((accumulator, value) => accumulator + value);

  let avarage = ages / values.length;

  return { male, female, ages, avarage };
};

const searchValues = (search) => {
  let arrValue = people.filter((person) => {
    if (
      Object.values(person.name).some((val) =>
        val.toLowerCase().includes(search)
      )
    ) {
      console.log('entrei');
      return person;
    }
    return;
  });

  return arrValue;
};

const render = (users = [], info = {}) => {
  usersList(users);
  statistics(info);
};

const statistics = (info = {}) => {
  let container = document.getElementById('container-users-info');
  container.innerHTML = '';
  container.innerHTML = `<div class="row">
  <div class="col s12 m5">
    <div class="card blue-grey darken-1">
      <div class="card-content white-text">
        <span class="card-title">Estatísticas</span>
        <p>Sexo masculino: ${info.male}</p>
        <p>Sexo feminino: ${info.female}</p>
        <p>Soma das idades: ${info.ages}</p>
        <p>Média das idades: ${info.avarage}</p>
      </div>
    </div>
  </div>
</div>`;
};

const usersList = (users = []) => {
  let container = document.getElementById('container-users');
  container.innerHTML = '';
  container.innerHTML =
    `<ul class="collection"> 
  <li class="collection-header"><h4>${users.length} usuário(s) encontrado(s)</h4></li>` +
    users.map((user) => {
      return `<li class="collection-item avatar">
      <img src=${user.picture.thumbnail} alt="" class="circle">
      <span class="title">${user.name.first} ${user.name.last}</span>
      <p>${user.dob.age}</p>
    </li>`;
    }) +
    `</ul>`;
};
