import Vue from "vue";

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data: {
      currencies: [],
      amount: 0,
      selectedCurrency: 0,
      eur: {
        key: "EUR",
        rate: 1
      },
    },
    computed: {
      result: function(){
        return this.amount * this.selectedCurrency.rate;
      }
    },
    mounted(){
      this.getCurrencies()
    },
    methods: {
      getCurrencies: function(){
        fetch("https://api.exchangeratesapi.io/latest")
        .then(response => response.json())
        .then(currencies => this.currencies = currencies)
      }
      }
    })
})
