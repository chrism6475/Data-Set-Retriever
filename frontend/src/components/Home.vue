<template>
<div class="container text-center justify-content-center">
  <h1 class="header">
    World Data Index
  </h1>
  <nav class="navbar navbar-light bg-light navbar-margin navbar-thin rounded" id = "headerBar">
    <a class="nav-link dropdown-toggle" href="#" id="sourceOptions" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Choose Source: {{source}}
    </a>
    <div class="dropdown-menu">
      <ul class="list-unstyled">
        <li v-for="(source, index) of availableSources" v-bind:key="source" v-on:click=changeSource(index)>{{source}}</li>
      </ul>
    </div>

  </nav>
  <div class="row justify-content-center" style="opacity: .9">
    <div class="col-md-12">
      <div class="card" id="searchCriteriaForm">
        <div class="card-body text-black">
          <div class="row box-margin">
            <div class="col-md-12">
              <form>
                 <label for="searchTextBox">Keyword:
                   <input class="form-control mr-sm-2" type="search" placeholder="Search for Data Set" aria-label="Search" v-model="searchText">
                 </label>
                 <label for="countryDropdown">Country:
                   <select class="form-control" id="countryDropdown" v-model="countryOption" value="Choose your Country" required>
                     <option value="all">
                       All
                     </option>
                      <option v-for="country of countries" v-bind:key="country" v-bind:value="countryOption">{{country.name}}</option>
                    </select>
                  </label>
                  <label for="indicatorDropdown">Indicator:
                    <select class="form-control" id="indicatorDropdown" v-model="indicatorOption" value="Choose an Indicator" required>
                      <option>
                        Choose your Indicator
                      </option>
                       <option v-for="indicator of indicators" v-bind:key="indicator" v-bind:value="indicatorOption">{{indicator.name}}</option>
                     </select>
                   </label>
                   <label for="yearDropdown">Year:
                     <select class="form-control" id="indicatorDropdown" v-model="yearOption" value="Choose a Year" required>
                       <option>
                         Choose your Year
                       </option>
                        <option v-for="i in (1967,2018)" v-bind:key="i" v-bind:value="yearOption">{{i}}</option>
                      </select>
                    </label>
                    <button class="btn btn-outline-info" type="submit" v-on:click="searchForDataSet">Search</button>
                 </form>
              </div>
          </div>
          <div class="row box-margin" v-show="noResults == true">
            <div class="col-md-12">
              <div class="alert alert-danger fade show" role="alert" >
                <strong>Not Found:</strong> Results matching your search not found.
              </div>
            </div>
          </div>
          <div class="row box-margin" v-show="!noResults">
            <div class="col-md-12">
              <table class="table table-bordered">
                  <th>
                   Data Set ID
                  </th>
                  <th>
                   Country
                  </th>
                  <th>
                   Indicator
                  </th>
                  <th>
                   Year
                  </th>
                  <tr v-for="(dataset, index) in results" v-bind:key="dataset">
                   <td>
                     {{index + 1}}
                   </td>
                   <td>
                     <a href="dataset.url">{{dataset.country.value}}</a>
                   </td>
                   <td>
                     {{dataset.indicator.value}}
                   </td>
                   <td>
                     {{dataset.date}}
                   </td>
                  </tr>
                </table>
                <nav class="text-center text-info" >
                  <ul class="pagination  justify-content-center text-info">
                    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" href="#">Next</a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      source: 'World Bank',
      availableSources: ['World Bank', 'IMF'],
      noResults: false,
      searchText: '',
      countryOption: '',
      yearOption: '',
      results: [],
      indicatorOption: '',
      countries: [],
      indicators: [],
      resultsInfo: [],
      errors: []
    }
  },
  methods: {
    changeSource: function (source) {
      this.source = this.availableSources[source]
    },
    searchForDataSet: function () {
      this.results = []
      axios
        .get('http://api.worldbank.org/v2/countries/all/indicators/SP.POP.TOTL?format=json')
        .then(response => {
          this.resultsInfo = response.data[0]
          this.results = response.data[1]
        })
        .catch(error => {
          console.log('error')
          this.errors.push(error)
        })
    }
  },
  mounted () {
    axios.get('http://country.io/names.json').then(response => (this.countries = response.data))
    axios.get('http://localhost:5000/indicators').then(response => (this.indicators = response.data))
  }
}
</script>
